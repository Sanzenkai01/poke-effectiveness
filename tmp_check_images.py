import re
import os

path = r"c:\Users\Liniker12\OneDrive\Área de Trabalho\Poke Effectiveness\hoopa-portais\hoopa-portais.js"
base = r"c:\Users\Liniker12\OneDrive\Área de Trabalho\Poke Effectiveness\hoopa-portais"
text = open(path, 'r', encoding='utf-8').read()
imgs = set(re.findall(r"image:\s*'([^']+)'", text))
missing = [img for img in sorted(imgs) if not os.path.exists(os.path.join(base, img))]
print('Total images referenced:', len(imgs))
print('Missing images:', len(missing))
for m in missing:
    print(m)
