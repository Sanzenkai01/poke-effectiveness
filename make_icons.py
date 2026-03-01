import os
from PIL import Image, ImageDraw, ImageFont

colors = {
    'water': '#6493eb',
    'fire': '#f08030',
    'grass': '#78c850',
    'electric': '#f8d030',
    'ice': '#98d8d8',
    'fighting': '#c03028',
    'poison': '#a040a0',
    'ground': '#e0c068',
    'flying': '#a890f0',
    'psychic': '#f85888',
    'bug': '#a8b820',
    'rock': '#b8a038',
    'ghost': '#705898',
    'dragon': '#7038f8',
    'dark': '#705848',
    'steel': '#b8b8d0',
    'normal': '#a8a878',
    'fairy': '#ee99ac'
}

output_dir = os.path.join(os.path.dirname(__file__), 'icons')
os.makedirs(output_dir, exist_ok=True)

try:
    font = ImageFont.truetype('arial.ttf', 24)
except IOError:
    font = ImageFont.load_default()

for t, c in colors.items():
    im = Image.new('RGBA', (64, 64), (0, 0, 0, 0))
    d = ImageDraw.Draw(im)
    d.ellipse((0, 0, 64, 64), fill=c)
    text = t[0].upper()
    # compute text size for centering
    try:
        bbox = d.textbbox((0, 0), text, font=font)
        w = bbox[2] - bbox[0]
        h = bbox[3] - bbox[1]
    except AttributeError:
        w, h = font.getsize(text)
    d.text(((64 - w) / 2, (64 - h) / 2), text, font=font, fill=(255, 255, 255, 255))
    im.save(os.path.join(output_dir, f"{t}.png"))

print('icons generated in', output_dir)
