#!/usr/bin/env python3
import argparse
import struct
import zlib
from pathlib import Path

from PIL import Image


MMBLOCK_SIZE = 64
OTMM_SIGNATURE = 0x4D4D544F
MAX_Z = 15
TILE_SIZE = 3
BLOCK_BYTES = MMBLOCK_SIZE * MMBLOCK_SIZE * TILE_SIZE


def color_from_8bit(color):
    if color >= 216 or color <= 0:
        return (0, 0, 0, 255)

    red = (color // 36) % 6 * 51
    green = (color // 6) % 6 * 51
    blue = color % 6 * 51
    return (red, green, blue, 255)


PALETTE = [color_from_8bit(color) for color in range(256)]


def read_u16(data, offset):
    return struct.unpack_from("<H", data, offset)[0], offset + 2


def load_otmm(path):
    data = path.read_bytes()
    if len(data) < 12:
        raise ValueError("Arquivo OTMM muito pequeno.")

    signature, data_start, version, _flags = struct.unpack_from("<IHHI", data, 0)
    if signature != OTMM_SIGNATURE:
        raise ValueError("Assinatura OTMM invalida.")
    if version != 1:
        raise ValueError(f"Versao OTMM nao suportada: {version}.")

    offset = data_start
    floors = {}

    while offset + 5 <= len(data):
        x, y, z = struct.unpack_from("<HHB", data, offset)
        offset += 5
        if z > MAX_Z:
            break

        compressed_len, offset = read_u16(data, offset)
        compressed = data[offset : offset + compressed_len]
        offset += compressed_len

        raw = zlib.decompress(compressed)
        if len(raw) != BLOCK_BYTES:
            raise ValueError(
                f"Bloco invalido em z={z}, x={x}, y={y}: {len(raw)} bytes."
            )

        floors.setdefault(z, []).append((x, y, raw))

    return floors


def block_bounds(blocks):
    min_x = min_y = None
    max_x = max_y = None

    for block_x, block_y, raw in blocks:
        for index in range(MMBLOCK_SIZE * MMBLOCK_SIZE):
            color = raw[index * TILE_SIZE + 1]
            if color == 255:
                continue

            x = block_x + (index % MMBLOCK_SIZE)
            y = block_y + (index // MMBLOCK_SIZE)

            min_x = x if min_x is None else min(min_x, x)
            min_y = y if min_y is None else min(min_y, y)
            max_x = x if max_x is None else max(max_x, x)
            max_y = y if max_y is None else max(max_y, y)

    if min_x is None:
        return None

    return min_x, min_y, max_x, max_y


def render_floor(blocks, crop):
    bounds = block_bounds(blocks)
    if bounds is None:
        return None, None

    min_x, min_y, max_x, max_y = bounds
    origin_x = min_x if crop else 0
    origin_y = min_y if crop else 0
    width = max_x - origin_x + 1
    height = max_y - origin_y + 1

    image = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    pixels = image.load()

    for block_x, block_y, raw in blocks:
        for index in range(MMBLOCK_SIZE * MMBLOCK_SIZE):
            color = raw[index * TILE_SIZE + 1]
            if color == 255:
                continue

            x = block_x + (index % MMBLOCK_SIZE) - origin_x
            y = block_y + (index // MMBLOCK_SIZE) - origin_y
            if 0 <= x < width and 0 <= y < height:
                pixels[x, y] = PALETTE[color]

    metadata = {
        "origin_x": origin_x,
        "origin_y": origin_y,
        "min_x": min_x,
        "min_y": min_y,
        "max_x": max_x,
        "max_y": max_y,
        "width": width,
        "height": height,
    }
    return image, metadata


def main():
    parser = argparse.ArgumentParser(description="Converte minimap.otmm em PNGs por andar.")
    parser.add_argument("input", type=Path, help="Arquivo minimap.otmm")
    parser.add_argument("output", type=Path, help="Pasta de saida")
    parser.add_argument(
        "--crop",
        action="store_true",
        help="Corta cada PNG ao menor retangulo com tiles visiveis.",
    )
    parser.add_argument(
        "--prefix",
        default="minimap-otmm",
        help="Prefixo dos PNGs gerados.",
    )
    parser.add_argument(
        "--background",
        help="Cor RGB hexadecimal para substituir transparencia, por exemplo #dddddd.",
    )
    args = parser.parse_args()

    floors = load_otmm(args.input)
    args.output.mkdir(parents=True, exist_ok=True)
    background = None
    if args.background:
        color = args.background.strip().lstrip("#")
        if len(color) != 6:
            raise ValueError("Use --background no formato #RRGGBB.")
        background = tuple(int(color[index : index + 2], 16) for index in (0, 2, 4))

    rows = []
    for z in sorted(floors):
        image, metadata = render_floor(floors[z], args.crop)
        if image is None:
            continue

        if background is not None:
            flattened = Image.new("RGBA", image.size, (*background, 255))
            flattened.alpha_composite(image)
            image = flattened.convert("RGB")

        output_path = args.output / f"{args.prefix}_z{z}.png"
        image.save(output_path, optimize=True)
        rows.append((z, output_path.name, metadata))

    for z, name, metadata in rows:
        print(
            f"z={z:02d} {name} "
            f"{metadata['width']}x{metadata['height']} "
            f"origin=({metadata['origin_x']},{metadata['origin_y']}) "
            f"bounds=({metadata['min_x']},{metadata['min_y']})-"
            f"({metadata['max_x']},{metadata['max_y']})"
        )


if __name__ == "__main__":
    main()
