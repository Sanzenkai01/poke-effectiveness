import json
import os

# Get the directory of this script
script_dir = os.path.dirname(os.path.abspath(__file__))
json_path = os.path.join(script_dir, 'pokemons', 'pokemons.json')

with open(json_path) as f:
    data_obj = json.load(f)

data = data_obj['pokemon']

print(f'Total: {len(data)}')
print(f'Últimos 5: {", ".join([p["name"] for p in data[-5:]])}')

# Contar os 3 novos
new_pokemon = ['Crystal Onix', 'Giant Magikarp', 'Spiky-Eared Pichu']
found = [p for p in data if p['name'] in new_pokemon]
print(f'\nNovos Pokémon encontrados: {len(found)}')
for p in found:
    print(f"  - {p['name']}: {p['team']}, {p['type1']}, level {p['level']}, {p['priceLabel']}")
