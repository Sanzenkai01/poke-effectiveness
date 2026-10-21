import json
from pathlib import Path

catalog_path = Path(__file__).resolve().parents[1] / 'pokemons' / 'pokemons.json'
with catalog_path.open('r', encoding='utf-8') as f:
    data = json.load(f)
    total = len(data['pokemon'])
    print(f'✓ JSON VALIDO - Total de Pokemon: {total}')
    print('\nÚltimos 5 Pokémon:')
    for i, p in enumerate(data['pokemon'][-5:], 1):
        print(f'  {total - 5 + i}. {p["name"]}')
