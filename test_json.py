import json
import sys

try:
    with open('pokemons/pokemons.json', 'r', encoding='utf-8') as f:
        data = json.load(f)
    print(f'✓ JSON VALIDO - Total de Pokemon: {len(data["pokemon"])}')
    print('\nÚltimos 3 Pokemon:')
    for p in data['pokemon'][-3:]:
        print(f'  - {p["name"]}')
except json.JSONDecodeError as e:
    print(f'✗ ERRO JSON: {e}')
    sys.exit(1)
except Exception as e:
    print(f'✗ ERRO: {e}')
    sys.exit(1)
