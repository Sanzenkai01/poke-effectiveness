import json
from pathlib import Path

json_path = Path(__file__).resolve().parents[1] / 'pokemons' / 'pokemons.json'

with json_path.open(encoding='utf-8') as f:
    data_obj = json.load(f)

data = data_obj['pokemon']

print(f'Total: {len(data)}')
print(f'Últimos 5: {", ".join([p["name"] for p in data[-5:]])}')

new_pokemon = ['Crystal Onix', 'Giant Magikarp', 'Spiky-Eared Pichu']
found = [p for p in data if p['name'] in new_pokemon]
print(f'\nNovos Pokémon encontrados: {len(found)}')
for p in found:
    print(f"  - {p['name']}: {p['team']}, {p['type1']}, level {p['level']}, {p['priceLabel']}")
