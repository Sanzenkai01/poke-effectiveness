// simple combination logic for fossils page
const selections = [];
const resultDiv = document.getElementById('result');

const combos = {
    'Drake,Bird': { pokemon: 'dracozolt.png', dna: 'dna verde.png' },
    'Bird,Drake': { pokemon: 'dracozolt.png', dna: 'dna verde.png' },
    'Dino,Bird': { pokemon: 'arctozolt.png', dna: 'dna verde.png' },
    'Bird,Dino': { pokemon: 'arctozolt.png', dna: 'dna verde.png' },
    'Fish,Dino': { pokemon: 'arctovish.png', dna: 'dna azul.png' },
    'Dino,Fish': { pokemon: 'arctovish.png', dna: 'dna azul.png' },
    'Drake,Fish': { pokemon: 'dracovish.png', dna: 'dna azul.png' },
    'Fish,Drake': { pokemon: 'dracovish.png', dna: 'dna azul.png' }
};

function clearSelection(){
    selections.length = 0;
    document.querySelectorAll('.fossil-img.selected').forEach(img=>img.classList.remove('selected'));
}

function showResult(pair){
    const combo = combos[pair];
    if(!combo) return;
    resultDiv.innerHTML = `<p>Resultado:</p>
        <img src="${encodeURI('fosseis/' + combo.pokemon)}" alt="${combo.pokemon}" style="width:100px;height:100px;" />
        <p>DNA exigido:</p>
        <img src="${encodeURI('fosseis/' + combo.dna)}" alt="${combo.dna}" style="width:50px;height:50px;" />`;
}

// attach handlers
Array.from(document.querySelectorAll('.fossil-img')).forEach(img=>{
    img.addEventListener('click', ()=>{
        const type = img.dataset.type;
        if(selections.includes(type)) return; // ignore duplicate
        selections.push(type);
        img.classList.add('selected');
        if(selections.length === 2){
            const key = `${selections[0]},${selections[1]}`;
            showResult(key);
            // clear after a short delay so user sees selection
            setTimeout(clearSelection, 1000);
        }
    });
});