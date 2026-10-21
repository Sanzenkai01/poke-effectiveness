(function(){
    const fishingTiers = [
        {
            bait: 'Sem isca',
            note: 'Lagos das cidades',
            level: 0,
            pokemon: ['Magikarp']
        },
        { bait: 'Worm', level: 5, pokemon: ['Krabby', 'Poliwag'] },
        { bait: 'Seaweed', level: 10, pokemon: ['Squirtle', 'Totodile'] },
        { bait: 'Fish', level: 20, pokemon: ['Horsea', 'Wooper', 'Goldeen'] },
        {
            bait: 'Shrimp',
            level: 30,
            pokemon: ['Chinchou', 'Croconaw', 'Marill', 'Poliwhirl', 'Remoraid', 'Seel', 'Shellder', 'Staryu', 'Slowpoke', 'Tentacool', 'Wartortle']
        },
        {
            bait: 'Kelp',
            level: 40,
            pokemon: ['Corsola', 'Quagsire', 'Qwilfish', 'Seadra', 'Kingler', 'Seaking', 'Psyduck']
        },
        { bait: 'Steak', level: 50, pokemon: ['Slowbro', 'Politoed', 'Tentacruel'] },
        { bait: 'Myst special lure', level: 60, pokemon: ['Feebas'] },
        {
            bait: 'Special Lure',
            level: 70,
            pokemon: ['Starmie', 'Dewgong', 'Blastoise', 'Octillery', 'Poliwrath', 'Lanturn', 'Golduck', 'Feraligatr', 'Azumarill', 'Cloyster']
        },
        { bait: 'Big steak', level: 80, pokemon: ['Mantine', 'Gyarados', 'Lapras', 'Kingdra', 'Slowking'] }
    ];

    const pokemonSprites = {
        Magikarp: 'pokemons/1gen/magikarp.png',
        Krabby: 'pokemons/1gen/krabby.png',
        Poliwag: 'pokemons/1gen/poliwag.png',
        Squirtle: 'pokemons/1gen/squirtle.png',
        Totodile: 'pokemons/2gen/totodile.png',
        Horsea: 'pokemons/1gen/horsea.png',
        Wooper: 'pokemons/2gen/wooper.png',
        Goldeen: 'pokemons/1gen/goldeen.png',
        Chinchou: 'pokemons/2gen/chinchou.png',
        Croconaw: 'pokemons/2gen/croconaw.png',
        Marill: 'pokemons/2gen/marill.png',
        Poliwhirl: 'pokemons/1gen/poliwhirl.png',
        Remoraid: 'pokemons/2gen/remoraid.png',
        Seel: 'pokemons/1gen/seel.png',
        Shellder: 'pokemons/1gen/shellder.png',
        Staryu: 'pokemons/1gen/staryu.png',
        Slowpoke: 'pokemons/1gen/slowpoke.png',
        Tentacool: 'pokemons/1gen/tentacool.png',
        Wartortle: 'pokemons/1gen/wartortle.png',
        Corsola: 'pokemons/2gen/corsola.png',
        Quagsire: 'pokemons/2gen/quagsire.png',
        Qwilfish: 'pokemons/2gen/qwilfish.png',
        Seadra: 'pokemons/1gen/seadra.png',
        Kingler: 'pokemons/1gen/kingler.png',
        Seaking: 'pokemons/1gen/seaking.png',
        Psyduck: 'pokemons/1gen/psyduck.png',
        Slowbro: 'pokemons/1gen/slowbro.png',
        Politoed: 'pokemons/2gen/politoed.png',
        Tentacruel: 'pokemons/1gen/tentacruel.png',
        Feebas: 'pokemons/3gen/feebas.png',
        Starmie: 'pokemons/1gen/starmie.png',
        Dewgong: 'pokemons/1gen/dewgong.png',
        Blastoise: 'pokemons/1gen/blastoise.png',
        Octillery: 'pokemons/2gen/octillery.png',
        Poliwrath: 'pokemons/1gen/poliwrath.png',
        Lanturn: 'pokemons/2gen/lanturn.png',
        Golduck: 'pokemons/1gen/golduck.png',
        Feraligatr: 'pokemons/2gen/feraligatr.png',
        Azumarill: 'pokemons/2gen/azumarill.png',
        Cloyster: 'pokemons/1gen/cloyster.png',
        Mantine: 'pokemons/2gen/mantine.png',
        Gyarados: 'pokemons/1gen/gyarados.png',
        Lapras: 'pokemons/1gen/lapras.png',
        Kingdra: 'pokemons/2gen/kingdra.png',
        Slowking: 'pokemons/2gen/slowking.png'
    };

    function makePokemonList(names){
        const list = document.createElement('ul');
        list.className = 'pescaria-pokemon-list';
        names.forEach(name => {
            const item = document.createElement('li');
            item.className = 'pescaria-pokemon-list__item';
            const image = document.createElement('img');
            image.src = pokemonSprites[name];
            image.alt = '';
            image.loading = 'lazy';
            image.decoding = 'async';
            const label = document.createElement('span');
            label.textContent = name;
            item.append(image, label);
            list.appendChild(item);
        });
        return list;
    }

    function renderFishingTable(){
        const tableBody = document.getElementById('pescaria-table-body');
        if(!tableBody) throw new Error('Tabela do guia de pescaria não encontrada.');
        const fragment = document.createDocumentFragment();
        fishingTiers.forEach(tier => {
            const row = document.createElement('tr');
            const baitCell = document.createElement('th');
            baitCell.className = 'pescaria-table__bait';
            baitCell.scope = 'row';
            baitCell.textContent = tier.bait;
            if(tier.note){
                const note = document.createElement('small');
                note.textContent = tier.note;
                baitCell.appendChild(note);
            }
            const levelCell = document.createElement('td');
            levelCell.className = 'pescaria-table__level';
            levelCell.textContent = String(tier.level);
            const pokemonCell = document.createElement('td');
            pokemonCell.appendChild(makePokemonList(tier.pokemon));
            row.append(baitCell, levelCell, pokemonCell);
            fragment.appendChild(row);
        });
        tableBody.replaceChildren(fragment);
    }

    window.initPescariaPage = function(){
        renderFishingTable();
        const baitLocationButton = document.getElementById('pescaria-bait-location-btn');
        if(baitLocationButton && baitLocationButton.dataset.bound !== 'true'){
            baitLocationButton.dataset.bound = 'true';
            baitLocationButton.addEventListener('click', () => {
                window.openInteractiveMapMarker('ddbcecdd-1c84-400c-b107-98160e46862f', {
                    name: 'Comprar iscas',
                    trigger: baitLocationButton
                });
            });
        }
        return true;
    };
})();
