#!/usr/bin/env python3
"""
Extract the first ICO found inside a .ani (RIFF ACON) file and save as .cur.
It converts ICO -> CUR by changing ICONDIR type to 2 and using center as hotspot.
"""
import sys, struct, os

INFILE = 'Pikachu.ani'
OUTFILE = 'Pikachu.cur'

if not os.path.exists(INFILE):
    print('Input file not found:', INFILE)
    sys.exit(2)

with open(INFILE, 'rb') as f:
    data = f.read()

L = len(data)

# find possible ICONDIR occurrences (00 00 01 00)
candidates = []
for i in range(0, L - 6):
    # check reserved==0 and a plausible count
    if data[i:i+2] == b'\x00\x00':
        # type could be 1 or 2 at i+2
        t = data[i+2:i+4]
        if t in (b'\x01\x00', b'\x02\x00'):
            try:
                count = struct.unpack_from('<H', data, i+4)[0]
            except struct.error:
                continue
            if 0 < count < 512:
                candidates.append(i)

# fallback: search exact ICONDIR signature
if not candidates:
    sig = b'\x00\x00\x01\x00'
    pos = data.find(sig)
    if pos != -1:
        candidates.append(pos)

if not candidates:
    print('No ICONDIR header found in', INFILE)
    sys.exit(3)

def extract_ico_at(idx):
    # Parse ICONDIR at idx
    try:
        reserved, itype, count = struct.unpack_from('<HHH', data, idx)
    except struct.error:
        return None
    if count <= 0 or count > 1024:
        return None
    entries = []
    entries_offset = idx + 6
    needed_end = entries_offset + count*16
    for e in range(count):
        eoff = entries_offset + e*16
        if eoff + 16 > L:
            return None
        width = data[eoff]
        height = data[eoff+1]
        colorCount = data[eoff+2]
        reserved_byte = data[eoff+3]
        planes, bitCount, sizeInBytes, imageOffset = struct.unpack_from('<HHII', data, eoff+4)
        abs_image_offset = idx + imageOffset
        if abs_image_offset + sizeInBytes > L:
            # the image data might be after the ico block; still compute end as abs offset
            pass
        end = abs_image_offset + sizeInBytes
        if end > needed_end:
            needed_end = end
        entries.append({
            'width': width,
            'height': height,
            'size': sizeInBytes,
            'offset': imageOffset,
            'abs_offset': abs_image_offset,
            'planes': planes,
            'bitCount': bitCount,
        })
    if needed_end > L:
        # truncated
        return None
    ico_bytes = data[idx:needed_end]
    return ico_bytes, entries

ico_bytes = None
entries = None
for cand in candidates:
    res = extract_ico_at(cand)
    if res:
        ico_bytes, entries = res
        ico_start = cand
        break

if not ico_bytes:
    print('Could not extract ICO from', INFILE)
    sys.exit(4)

# build CUR bytes by modifying ICONDIR type to 2 and replacing planes/bitCount with hotspot
new = bytearray(ico_bytes)
# set type to 2 (cursor)
struct.pack_into('<H', new, 2, 2)
# for each directory entry, set hotspot to center of image
count = len(entries)
for i,entry in enumerate(entries):
    eoff = 6 + i*16
    w = entry['width'] if entry['width'] != 0 else 256
    h = entry['height'] if entry['height'] != 0 else 256
    hx = w // 2
    hy = h // 2
    # overwrite WORD planes and WORD bitCount with hx, hy
    struct.pack_into('<HH', new, eoff+8, hx, hy)

with open(OUTFILE, 'wb') as f:
    f.write(new)

print(f'Wrote {OUTFILE} ({len(new)} bytes) from ICO at offset {ico_start}')
print('Hotspots set to icon center by default. You can adjust hotspot in CSS if needed.')

sys.exit(0)
