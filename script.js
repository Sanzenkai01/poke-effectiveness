
// if opened via file:// the fetch will fail; warn user early
if(location.protocol === 'file:'){
    window.addEventListener('load', ()=>{
        alert('O site precisa ser servido por HTTP. Inicie um servidor (por exemplo python -m http.server) e acesse via http://localhost:8000');
    });
}

const effectiveness = {};
const weaknesses = {};
const immunities = {};
const resistances = {};
let menuTypes = [];
const chart = document.getElementById('chart');
const connectionsSvg = document.getElementById('connections');
const searchInput = document.getElementById('type-search');
let colCount = 0;
let currentSelection = [];

const rangeSelect = document.getElementById('range-select');
const rangeResults = document.getElementById('range-results');
const commonInput = document.getElementById('common-plates');
const commonResults = document.getElementById('common-results');
const shinyInput = document.getElementById('shiny-plates');
const shinyResults = document.getElementById('shiny-results');
const variantRadios = document.querySelectorAll('input[name="poke-variant"]');

// safe flag for GSAP – if CDN fails this prevents errors
const useGsap = typeof gsap !== 'undefined';

let fossilSelections = [];
const fossilResultDiv = document.getElementById('result');
let lastFossilPair = null;

const tabEffectBtn = document.getElementById('tab-effectiveness');
const tabFossilsBtn = document.getElementById('tab-fossils');
const tabCalcBtn = document.getElementById('tab-calculator');
const tabCatchBtn = document.getElementById('tab-catch');
const tabSpeedstersBtn = document.getElementById('tab-speedsters');
const contentEffect = document.getElementById('content-effectiveness');
const contentFossils = document.getElementById('content-fossils');
const contentCalc = document.getElementById('content-calculator');
const contentSpeedsters = document.getElementById('content-speedsters');

const ranges = {
    '50-100': { plates: 280, gold: 40 },
    '65-100': { plates: 284, gold: 37 },
    '80-100': { plates: 289, gold: 34 },
    '95-100': { plates: 135, gold: 15 }
};



const strings = {
    pt: {
        pageTitle: 'Efetividade de Tipos Pokémon',
        remainingMsg: 'Faltam',
        instructions: 'Clique em um tipo para ver contra quais outros ele é efetivo. Pressione Tab para navegar e Enter para selecionar. Você pode selecionar até dois tipos.',
        superEffective: 'super eficaz contra',
        vulnerable: 'vulnerável a',
        immune: 'imune a',
        noRelation: 'nenhuma relação especial.',
        shareSuccess: 'Link copiado para a área de transferência!',
        shareFail: 'Falha ao copiar link.',
        shareLabel: 'Compartilhar',
        printLabel: 'Imprimir',
        resetLabel: 'Resetar',
        legendSelected: 'Selecionado',
        legendStrength: 'Super eficaz',
        legendWeakness: 'Vulnerável',
        legendImmune: 'Imune',
        legendNeutral: 'Neutro',
        themeToggle: 'Alternar modo claro/escuro',
        calculatorTitle: 'Calculadora de Treinamento',
        rangeLabel: 'Faixa de nível',
        platesLabel: 'Plates',
        goldCoinsLabel: 'Golden Coins',
        commonPlatesLabel: 'Plates comuns',
        shinyPlatesLabel: 'Shining Plates',
        tabTypes: 'Tipos',
        tabCalculator: 'Calculadora de Treinamento',
        tabFossils: 'Fósseis',
        tabSpeedsters: 'Hoopa Portais',
        fossilCost: 'Reviver um Pokémon custa <strong>250K</strong>.',
        fossilHintCombines: 'Este fóssil combina com: ',
        fossilHintNone: 'Nenhuma combinação disponível para este fóssil.',
        galleryTitle: 'Pokémons disponíveis',
        result: 'Resultado:',
        dnaRequired: 'DNA Sample',
        huntSideLabel: 'Lado da hunt',
        left: 'esquerda',
        right: 'direita',
        drake: 'Drake',
        resistLabel: 'resiste a',
        legendResist: 'Resiste',
        bird: 'Pássaro',
        dino: 'Dino',
        fish: 'Peixe',
        amber: 'Amber',
        amber: 'Âmbar',
        fossilWord: 'fóssil',
        fossilIntro: 'Selecione dois fósseis para formar um Pokémon. Cada par produz um resultado diferente e exige uma certa quantia de DNA.',
        calculatorInstructions: 'Selecione uma faixa de nível e utilize os campos abaixo para calcular materiais necessários.',
        pokemonTypeLabel: 'Tipo de Pokémon',
        normal: 'Normal',
        shiny: 'Shiny',
        sameQuantityNote: 'Quantidade idêntica; apenas o tipo de plate muda.',
        elementItems: 'itens do elemento',
        charItems: 'itens característicos',
        stoneItems: 'pedras do elemento',
        /* catch calculator */
        catchTitle: 'Calculadora de Catchs',
        ballChoiceLabel: 'Escolha a pokébola:',
        pokemonLevelLabel: 'Nível do pokémon:',
        optionsLabel: 'Opções',
        calcCatchBtn: 'Calcular quantidade',
        logBallsLabel: 'Log de balls usadas:',
        parseLogBtn: 'Processar log',
        cardPriceTitle: 'Preço dos cards',
        cardNameLabel: 'Nome do card:',
        cardPriceLabel: 'Preço unitário:',
        cardQtyLabel: 'Quantidade:',
        calcCardBtn: 'Calcular',
        expensesMsg: 'Despesas',
        ballsCountMsg: 'Ultra: {ultra}, Story: {story}, Elemental: {elemental}',
        /* additional catch and calculator text */
        ballElemental: 'Pokébola Elemental',
        ballStory: 'Pokébola Story',
        ballUltra: 'Pokébola Ultra',
        lvlPrefix: 'Nível ',
        preLabel: 'Pré Ace',
        aceLabel: 'Ace',
        logPlaceholder: "Utilize !pokeballs 'nome do pokemon' no jogo e cole a mensagem aqui.",
        catchNote: 'Nota: os valores são uma média aproximada; geralmente gastam-se algumas balls a mais.',
        infoPlateCommon: '1 plate comum precisa de 750 itens do elemento, 24 itens característicos e 1 pedra do elemento.',
        infoShinyCost: '30 shining plates custam 30 plates comuns e 1 shining stone.',
        adjustNote: 'Valor ajustado para múltiplo de 30: {rounded}',
        forCommonLabel: 'Para {n} plate(s) comum(ns):',
        calcInfoItems: '{elementItems} itens do elemento, {charItems} itens característicos, {stones} pedra(s) do elemento',
        /* new messages for log parsing */
        noExpenseWarning: '(Despesa calculada a partir das balls.)',
        avgReached: 'Parabéns! Você já atingiu a média de {avg} {ball}.',
        overAvg: 'Você passou da média por {over} {ball}.',
        encouragement: 'Continue assim, você está no caminho certo!',
        noBallsParsed: 'Nenhuma ball reconhecida no log.'
    }
};
const lang = 'pt';
function t(k){return strings[lang][k]||'';}

function updateTextContent(){
    document.documentElement.lang = 'pt-BR';
    const titleEl = document.getElementById('page-title');
    if(tabCalcBtn && tabCalcBtn.classList.contains('active')){
        if(titleEl) titleEl.textContent = t('calculatorTitle');
        document.title = t('calculatorTitle');
    } else if(tabFossilsBtn && tabFossilsBtn.classList.contains('active')){
        if(titleEl) titleEl.textContent = t('tabFossils');
        document.title = t('tabFossils');
    } else if(tabCatchBtn && tabCatchBtn.classList.contains('active')){
        if(titleEl) titleEl.textContent = t('catchTitle');
        document.title = t('catchTitle');
    } else if(tabSpeedstersBtn && tabSpeedstersBtn.classList.contains('active')){
        if(titleEl) titleEl.textContent = t('tabSpeedsters');
        document.title = t('tabSpeedsters');
    } else {
        if(titleEl) titleEl.textContent = t('pageTitle');
        document.title = t('pageTitle');
    }
    const instr = document.getElementById('instructions');
    instr.textContent = t('instructions');
    const finstr = document.getElementById('fossil-instructions');
    if(finstr) finstr.textContent = t('fossilIntro');
    const galleryCost = document.getElementById('gallery-cost');
    if(galleryCost) galleryCost.innerHTML = t('fossilCost');
    const gtitle = document.getElementById('gallery-title');
    if(gtitle) gtitle.textContent = t('galleryTitle');
    if(searchInput){
        searchInput.placeholder = 'Buscar tipo...';
    }
    // fossil labels need explicit refresh
    document.querySelectorAll('.fossil-label').forEach(span=>{
        const type = span.previousElementSibling?.dataset.type;
        if(type && strings[lang] && strings[lang][type.toLowerCase()]){
            span.textContent = strings[lang][type.toLowerCase()];
        }
    });
    // alt text on fossil images also localized
    document.querySelectorAll('.fossil-img').forEach(img=>{
        const type = img.dataset.type;
        if(type){
            const label = t(type.toLowerCase());
            img.alt = `${label} ${t('fossilWord')}`;
        }
    });
    if(tabEffectBtn) tabEffectBtn.textContent = t('tabTypes');
    if(tabFossilsBtn) tabFossilsBtn.textContent = t('tabFossils');
    if(tabCalcBtn) tabCalcBtn.textContent = t('tabCalculator');
    if(tabCatchBtn) tabCatchBtn.textContent = t('catchTitle');
    if(tabSpeedstersBtn) tabSpeedstersBtn.textContent = t('tabSpeedsters');
    const ptLabel = document.getElementById('pokemon-type-label');
    if(ptLabel) ptLabel.textContent = t('pokemonTypeLabel') + ':';
    variantRadios.forEach(r=>{
        if(r.value === 'normal') r.nextSibling.textContent = t('normal');
        if(r.value === 'shiny') r.nextSibling.textContent = t('shiny');
    });
    // translate selects & notes in catch calculator
    const ballSelectEl = document.getElementById('ball-select');
    if(ballSelectEl){
        const elOpt = ballSelectEl.querySelector('option[value="elemental"]');
        if(elOpt) elOpt.textContent = t('ballElemental');
        const storyOpt = ballSelectEl.querySelector('option[value="story"]');
        if(storyOpt) storyOpt.textContent = t('ballStory');
        const ultraOpt = ballSelectEl.querySelector('option[value="ultra"]');
        if(ultraOpt) ultraOpt.textContent = t('ballUltra');
        if(ballImg){
            const v = ballSelectEl.value;
            const key = v === 'elemental' ? 'ballElemental' : v === 'story' ? 'ballStory' : 'ballUltra';
            ballImg.alt = t(key);
        }
    }
    const levelSelect = document.getElementById('level-select');
    if(levelSelect){
        const prefix = t('lvlPrefix');
        ['5','20','30','50','65','80','95'].forEach(v=>{
            const opt = levelSelect.querySelector(`option[value="${v}"]`);
            if(opt) opt.textContent = prefix + v;
        });
        const preOpt = levelSelect.querySelector('option[value="pre"]');
        if(preOpt) preOpt.textContent = t('preLabel');
        const aceOpt = levelSelect.querySelector('option[value="ace"]');
        if(aceOpt) aceOpt.textContent = t('aceLabel');
    }
    const logInput = document.getElementById('log-input');
    if(logInput) logInput.placeholder = t('logPlaceholder');
    const catchNoteEl = document.querySelector('.catch-note');
    if(catchNoteEl) catchNoteEl.textContent = t('catchNote');
    // update calculator info paragraphs
    if(contentCalc){
        const calcInfo = contentCalc.querySelector('.calc-info');
        if(calcInfo){
            calcInfo.innerHTML = `<p>${t('infoPlateCommon')}</p><p>${t('infoShinyCost')}</p>`;
        }
        const rangeLabel = contentCalc.querySelector('label[for="range-select"]');
        if(rangeLabel) rangeLabel.textContent = t('rangeLabel') + ':';
        const commonLabel = contentCalc.querySelector('label[for="common-plates"]');
        if(commonLabel) commonLabel.textContent = t('commonPlatesLabel') + ':';
        const shinyLabel = contentCalc.querySelector('label[for="shiny-plates"]');
        if(shinyLabel) shinyLabel.textContent = t('shinyPlatesLabel') + ':';
    }
    // translate range select options
    if(rangeSelect){
        const map = {
            '50-100': '50 ao 100',
            '65-100': '65 ao 100',
            '80-100': '80 ao 100',
            '95-100': '95 ao 100'
        };
        Object.keys(map).forEach(val=>{
            const opt = rangeSelect.querySelector(`option[value="${val}"]`);
            if(opt) opt.textContent = map[val];
        });
    }
    // catch UI labels
    const ballLabel = document.querySelector('label[for="ball-select"]');
    if(ballLabel) ballLabel.textContent = t('ballChoiceLabel');
    const lvlLabel = document.querySelector('label[for="level-select"]');
    if(lvlLabel) lvlLabel.textContent = t('pokemonLevelLabel');
    const catchBtn = document.getElementById('calc-catch-btn');
    if(catchBtn) catchBtn.textContent = t('calcCatchBtn');
    const logLabel = document.querySelector('label[for="log-input"]');
    if(logLabel) logLabel.textContent = t('logBallsLabel');
    const parseBtn = document.getElementById('parse-log');
    if(parseBtn) parseBtn.textContent = t('parseLogBtn');
    const catchTitleEl = document.querySelector('#content-catch h2');
    if(catchTitleEl) catchTitleEl.textContent = t('catchTitle');
    const cardTitle = document.querySelector('#content-catch h3');
    if(cardTitle) cardTitle.textContent = t('cardPriceTitle');
    const cardNameLbl = document.querySelector('label[for="card-name"]');
    if(cardNameLbl) cardNameLbl.textContent = t('cardNameLabel');
    const cardPriceLbl = document.querySelector('label[for="card-price"]');
    if(cardPriceLbl) cardPriceLbl.textContent = t('cardPriceLabel');
    const cardQtyLbl = document.querySelector('label[for="card-qty"]');
    if(cardQtyLbl) cardQtyLbl.textContent = t('cardQtyLabel');
    const calcCardBtnEl = document.getElementById('calc-card');
    if(calcCardBtnEl) calcCardBtnEl.textContent = t('calcCardBtn');
    if(contentCalc){
        const h2 = contentCalc.querySelector('h2');
        if(h2) h2.textContent = t('calculatorTitle');
        const instr = document.getElementById('calc-instructions');
        if(instr) instr.textContent = t('calculatorInstructions');
        const rangeLabel = contentCalc.querySelector('label[for="range-select"]');
        if(rangeLabel) rangeLabel.textContent = t('rangeLabel') + ':';
        const commonLabel = contentCalc.querySelector('label[for="common-plates"]');
        if(commonLabel) commonLabel.textContent = t('commonPlatesLabel') + ':';
        const shinyLabel = contentCalc.querySelector('label[for="shiny-plates"]');
        if(shinyLabel) shinyLabel.textContent = t('shinyPlatesLabel') + ':';
    }
    if(tabCalcBtn && tabCalcBtn.classList.contains('active') || (tabCatchBtn && tabCatchBtn.classList.contains('active'))){
        instr.style.display = 'none';
    } else {
        instr.style.display = '';
    }

    const legend = document.getElementById('legend');
    if(legend){
        legend.querySelectorAll('.legend-item').forEach((item,i)=>{
            const key = ['legendSelected','legendStrength','legendResist','legendWeakness','legendImmune','legendNeutral'][i];
            if(key) item.lastChild.textContent = t(key);
        });
    }
    buildPokemonGallery();

    const shareBtn = document.getElementById('share-btn');
    if(shareBtn){
        shareBtn.setAttribute('title', t('shareLabel'));
        shareBtn.setAttribute('aria-label', t('shareLabel'));
    }
    const printBtn = document.getElementById('print-btn');
    if(printBtn){
        printBtn.setAttribute('title', t('printLabel'));
        printBtn.setAttribute('aria-label', t('printLabel'));
    }
    const themeBtn = document.getElementById('theme-toggle');
    if(themeBtn){
        themeBtn.setAttribute('aria-label', t('themeToggle'));
        themeBtn.title = t('themeToggle');
    }
    const resetBtn = document.getElementById('reset-btn');
    if(resetBtn){
        resetBtn.setAttribute('aria-label', t('resetLabel'));
        resetBtn.title = t('resetLabel');
    }
    // fossils-specific reset button
    const fossilReset = document.getElementById('fossil-reset-btn');
    if(fossilReset){
        fossilReset.addEventListener('click', ()=>{
            fossilClearSelection();
            document.querySelectorAll('.fossil-img').forEach(i=>{
                i.classList.remove('active','compatible','incompatible');
            });
            const hintEl2 = document.getElementById('fossil-hint');
            if(hintEl2) hintEl2.textContent = '';
            const resultDiv = document.getElementById('result');
            if(resultDiv) resultDiv.innerHTML = '';
            lastFossilPair = null;
        });
    }
    // translate icon alt texts on calculator page
    const plateIcon = document.getElementById('icon-plate');
    if(plateIcon) plateIcon.alt = t('platesLabel');
    const shinyIcon = document.getElementById('icon-shiny');
    if(shinyIcon) shinyIcon.alt = t('shinyPlatesLabel');
    const drinkIcon = document.getElementById('icon-drink');
    if(drinkIcon) drinkIcon.alt = t('elementItems');
    const coinIcon = document.getElementById('icon-coin');
    if(coinIcon) coinIcon.alt = t('goldCoinsLabel');
    // if calculator is visible, recompute any dynamic output so the language updates
    if(contentCalc && !contentCalc.hidden){
        updateRangeResults();
        updateCommon();
        updateShiny();
    }
    // if a fossil result is currently shown, redraw it so strings are in correct language
    if(lastFossilPair && fossilResultDiv && fossilResultDiv.innerHTML.trim() !== ''){
        fossilShowResult(lastFossilPair);
    }
    // refresh any previously generated calculator results so text matches language
    const catchResultEl = document.getElementById('catch-result');
    const localCalcCatch = document.getElementById('calc-catch-btn');
    if(localCalcCatch && catchResultEl && catchResultEl.innerHTML.trim() !== ''){
        localCalcCatch.click();
    }
    const logResEl = document.getElementById('log-result');
    const localParse = document.getElementById('parse-log');
    if(localParse && logResEl && logResEl.innerHTML.trim() !== ''){
        localParse.click();
    }
    const cardResEl = document.getElementById('card-result');
    const localCalcCard = document.getElementById('calc-card');
    if(localCalcCard && cardResEl && cardResEl.innerHTML.trim() !== ''){
        localCalcCard.click();
    }
}

function updateColumns(){
    const btn = chart.querySelector('.type-button');
    if(btn) colCount = Math.floor(chart.clientWidth / btn.offsetWidth) || 1;
}

function showFossils(){
    if(tabFossilsBtn) tabFossilsBtn.classList.add('active');
    if(tabFossilsBtn) tabFossilsBtn.setAttribute('aria-selected','true');
    if(tabCalcBtn) { tabCalcBtn.classList.remove('active'); tabCalcBtn.setAttribute('aria-selected','false'); }
    if(tabEffectBtn) { tabEffectBtn.classList.remove('active'); tabEffectBtn.setAttribute('aria-selected','false'); }
    if(tabCatchBtn) { tabCatchBtn.classList.remove('active'); tabCatchBtn.setAttribute('aria-selected','false'); }
    if(tabSpeedstersBtn) { tabSpeedstersBtn.classList.remove('active'); tabSpeedstersBtn.setAttribute('aria-selected','false'); }
    if(contentFossils) contentFossils.hidden = false;
    if(contentCalc) contentCalc.hidden = true;
    if(contentEffect) contentEffect.hidden = true;
    if(contentSpeedsters) contentSpeedsters.hidden = true;
    const contentCatch = document.getElementById('content-catch');
    if(contentCatch) contentCatch.hidden = true;
    // clear previous catch output
    const catchRes = document.getElementById('catch-result');
    const logRes = document.getElementById('log-result');
    if(catchRes) catchRes.innerHTML = '';
    if(logRes) logRes.innerHTML = '';
    document.body.classList.remove('show-instructions');
    const legend = document.getElementById('legend');
    if(legend) legend.style.display = 'none';
    const titleEl = document.getElementById('page-title');
    if(titleEl) titleEl.textContent = t('tabFossils');
    document.title = t('tabFossils');
    const fres = document.getElementById('result');
    if(fres) fres.innerHTML = '';
    lastFossilPair = null;
    if(useGsap){
        gsap.from(contentFossils, {opacity:0, y:-10, duration:0.4});
    }
    const fh = document.getElementById('fossil-hint');
    if(fh) fh.textContent = '';
    if(useGsap){
        gsap.from(contentFossils.querySelectorAll('.card'), {opacity:0, y:20, duration:0.5, stagger:0.1});
    }
}

function fuzzyMatch(type,filter){
    if(!filter) return true;
    filter = filter.toLowerCase();
    let idx = 0;
    for(let ch of type){
        if(ch===filter[idx]) idx++;
        if(idx===filter.length) return true;
    }
    return false;
}

function createButtons(filter=""){ 
    chart.innerHTML='';
    const normalizedFilter = filter.toLowerCase();
    menuTypes.forEach(type=>{
        if(!fuzzyMatch(type,filter)) return;
        const btn=document.createElement('div');
        btn.className=`type-button ${type}`;
        btn.dataset.type=type;
        btn.tabIndex=0;
        btn.setAttribute('role','button');
        btn.setAttribute('aria-pressed','false');
        const img=document.createElement('img');
        img.src=`icons-type/${type}.png`;
        img.alt=type;
        img.className='type-icon';
        btn.appendChild(img);
        const hidden=document.createElement('span');
        hidden.className='visually-hidden';
        hidden.textContent=type.charAt(0).toUpperCase()+type.slice(1);
        btn.appendChild(hidden);
        const label=document.createElement('span');
        label.className='type-label';

        let display = type.charAt(0).toUpperCase()+type.slice(1);
        if(normalizedFilter){
            let result = '';
            let idx = 0;
            for(let ch of display){
                if(ch.toLowerCase() === normalizedFilter[idx]){
                    result += `<mark>${ch}</mark>`;
                    idx++;
                    if(idx === normalizedFilter.length) idx = normalizedFilter.length;
                } else {
                    result += ch;
                }
            }
            display = result;
        }
        label.innerHTML = display;
        btn.appendChild(label);
        btn.addEventListener('click',()=>selectType(type));
        btn.addEventListener('keydown',handleKeyNav);
        if(useGsap){
            btn.addEventListener('mouseenter',()=>gsap.to(btn,{scale:1.1,duration:0.2,ease:'power1.out'}));
            btn.addEventListener('mouseleave',()=>gsap.to(btn,{scale:1,duration:0.2,ease:'power1.out'}));
        }
        chart.appendChild(btn);
    });
    updateColumns();
}

function combineLists(arrs){return [...new Set(arrs.flat())];}
function tally(arrs){
    const m={};
    arrs.flat().forEach(t=>{m[t]=(m[t]||0)+1;});
    return m;
}
// utility: convert large number to k shorthand (e.g. 123000 -> "123k")
function formatCost(n){
    if(n>=1000){
        return Math.round(n/1000) + 'k';
    }
    return n.toString();
}

// catch calculator data
const ballPrices = { ultra:130, story:250, elemental:325 };
// counts per level differ between normal and shiny
// for levels with multiple options we store an array of alternative requirements
const captureData = {
    normal: {
        5:  [{ultra:1}],
        20: [{ultra:8}],
        30: [{ultra:31}],
        50: [{ultra:54}],
        65: [{ultra:46}],
        80: [{ultra:169}],
        95: [{ultra:192}],
        pre:[{ultra:658}],
        ace:[{ultra:889}]
    },
    shiny: {
        5:  [{ultra:100},{story:50},{elemental:38}],
        20: [{ultra:200},{story:100},{elemental:77}],
        30: [{ultra:800},{story:400},{elemental:308}],
        50: [{ultra:1000},{story:500},{elemental:385}],
        65: [{ultra:1600},{story:800},{elemental:615}],
        80: [{ultra:1600},{story:800},{elemental:615}],
        95: [{ultra:3200},{story:1600},{elemental:1231}],
        pre:[{ultra:3200},{story:1600},{elemental:1231}],
        ace:[{ultra:10400},{story:5200},{elemental:4000}]
    }
};
function computeRequired(lvl, variant){
    variant = variant || 'normal';
    const data = captureData[variant] || captureData['normal'];
    // return array of options, default to a zero requirement
    return data[lvl] || [{ultra:0,story:0,elemental:0}];
}
function parseLog(text){
    let totalCost = 0;
    const counts={ultra:0,story:0,elemental:0};
    const moneyMatch = text.match(/spent\s+([\d.,]+)\s+dollars/i);
    if(moneyMatch) totalCost = parseFloat(moneyMatch[1].replace(',','.'));
    // allow multiple entries for the same ball type and sum them
    ['ultra','story','elemental'].forEach(b=>{
        const re = new RegExp('(\\d+)\\s+'+b+'\\s+balls?', 'gi');
        let m;
        while((m=re.exec(text)) !== null){
            counts[b] += parseInt(m[1],10);
        }
    });
    // some logs list specific elemental-category balls by name; treat them as elemental
    const elementalNames = ['Net','Lure','Frost','Jungle','Neste','Dusk','Stone','Dust','Love','Quick','Repeat','Heavy','Dream','Cherish','Vile','Draco','Sport','Moon'];
    elementalNames.forEach(name=>{
        const re = new RegExp('(\\d+)\\s+'+name+'\\s+balls?', 'gi');
        let m;
        while((m=re.exec(text)) !== null){
            counts.elemental += parseInt(m[1],10);
        }
    });
    return {totalCost, counts};
}

function drawConnections(type){
    connectionsSvg.innerHTML='';
    const origin=document.querySelector(`.type-button[data-type="${type}"]`);
    if(!origin) return;
    const rect=origin.getBoundingClientRect();
    const svgRect=connectionsSvg.getBoundingClientRect();
    const ox=rect.left+rect.width/2-svgRect.left;
    const oy=rect.top+rect.height/2-svgRect.top;
    const related=[...(effectiveness[type]||[]),...(weaknesses[type]||[])];
    const otherSelected = currentSelection.length===2 ? currentSelection.find(t=>t!==type) : null;
    related.forEach(rt=>{
        const btn=document.querySelector(`.type-button[data-type="${rt}"]`);
        if(!btn) return;
        const rrect=btn.getBoundingClientRect();
        const rx=rrect.left+rrect.width/2-svgRect.left;
        const ry=rrect.top+rrect.height/2-svgRect.top;
        const line=document.createElementNS('http://www.w3.org/2000/svg','line');
        line.setAttribute('x1',ox);line.setAttribute('y1',oy);
        line.setAttribute('x2',ox);line.setAttribute('y2',oy);
        line.setAttribute('stroke','#fff');line.setAttribute('stroke-width','2');
        line.setAttribute('opacity','0.7');
        line.setAttribute('stroke-dasharray','5,5');
        line.style.strokeDashoffset='100';
        connectionsSvg.appendChild(line);
        if(useGsap){
            gsap.to(line, {x2: rx, y2: ry, stroke: (otherSelected && rt===otherSelected) ? '#0f0' : '#ff0', strokeWidth: (otherSelected && rt===otherSelected)?3:2, duration: 0.5, ease: 'power1.out'});
            gsap.to(line.style, {strokeDashoffset:0, duration:0.5, ease:'linear'});
        } else {
            setTimeout(()=>{
                line.setAttribute('x2',rx);line.setAttribute('y2',ry);
                if(otherSelected && rt===otherSelected) {
                    line.setAttribute('stroke','#0f0');
                    line.setAttribute('stroke-width','3');
                } else {
                    line.setAttribute('stroke','#ff0');
                }
                line.style.transition='stroke-dashoffset 0.5s linear';
                line.style.strokeDashoffset='0';
            },10);
        }
        const circle=document.createElementNS('http://www.w3.org/2000/svg','circle');
        circle.setAttribute('cx',ox);circle.setAttribute('cy',oy);
        circle.setAttribute('r','4');
        circle.setAttribute('fill', otherSelected && rt===otherSelected ? '#0f0' : '#ff0');
        circle.setAttribute('opacity','0.8');
        connectionsSvg.appendChild(circle);
        if(useGsap){
            gsap.to(circle, {cx: rx, cy: ry, r:2, opacity:0, duration:0.5, ease:'power1.out'});
        } else {
            setTimeout(()=>{
                circle.setAttribute('cx',rx);circle.setAttribute('cy',ry);
                circle.setAttribute('r','2');circle.setAttribute('opacity','0');
                circle.style.transition='cx 0.5s, cy 0.5s, opacity 0.5s, r 0.5s';
            },10);
        }
    });
}

function renderSelection(){
    connectionsSvg.innerHTML='';
    document.querySelectorAll('.type-button').forEach(btn=>{
        btn.classList.remove('active','effectiveness','weakness','immune','mixed','neutral');
        btn.setAttribute('aria-pressed','false');
    });
    const info=document.getElementById('info');
    info.textContent='';
    if(!currentSelection.length) return;
    currentSelection.forEach(type=>{
        const btn=document.querySelector(`.type-button[data-type="${type}"]`);
        if(btn){
            btn.classList.add('active');
            btn.setAttribute('aria-pressed','true');
            drawConnections(type);
        }
    });
    if(currentSelection.length===2){
        const [a,b]=currentSelection;
        const btnA=document.querySelector(`.type-button[data-type="${a}"]`);
        const btnB=document.querySelector(`.type-button[data-type="${b}"]`);
        if(btnA && btnB){
            const svgRect=connectionsSvg.getBoundingClientRect();
            const rectA=btnA.getBoundingClientRect();
            const rectB=btnB.getBoundingClientRect();
            const ax=rectA.left+rectA.width/2-svgRect.left;
            const ay=rectA.top+rectA.height/2-svgRect.top;
            const bx=rectB.left+rectB.width/2-svgRect.left;
            const by=rectB.top+rectB.height/2-svgRect.top;
            const link=document.createElementNS('http://www.w3.org/2000/svg','line');
            link.setAttribute('x1',ax); link.setAttribute('y1',ay);
            link.setAttribute('x2',bx); link.setAttribute('y2',by);
            link.setAttribute('stroke','#0ff');
            link.setAttribute('stroke-width','4');
            link.setAttribute('opacity','0.9');
            connectionsSvg.appendChild(link);
        }
    }
    // defensive multipliers: attacker vs currentSelection as defenders
    const multipliers = {};
    menuTypes.forEach(att=>{
        let m = 1;
        currentSelection.forEach(def=>{
            if(immunities[def] && immunities[def].includes(att)){
                m *= 0;          // defender immune to this attacker
            } else if(effectiveness[att] && effectiveness[att].includes(def)){
                m *= 2;          // attacker strong against defender
            } else if(resistances[def] && resistances[def].includes(att)){
                m *= 0.5;        // defender resists attacker
            }
        });
        multipliers[att] = m;
    });

    const strengths = combineLists(currentSelection.map(t=>effectiveness[t]||[]));
    const weakAgainst = Object.keys(multipliers).filter(t=> multipliers[t] > 1);
    const immuneList = Object.keys(multipliers).filter(t=> multipliers[t] === 0);
    const resistList = Object.keys(multipliers).filter(t=> multipliers[t] > 0 && multipliers[t] < 1);

    const strengthsCount = tally(currentSelection.map(t=>effectiveness[t]||[]));
    const weakCount = {};
    const resistCount = {};
    weakAgainst.forEach(t=>{ weakCount[t] = multipliers[t]; });
    // count how many selected types each target resists
    currentSelection.forEach(ct=>{
        menuTypes.forEach(t=>{
            if(resistances[t] && resistances[t].includes(ct)){
                resistCount[t] = (resistCount[t]||0)+1;
            }
        });
    });

    strengths.forEach(t2=>{const b=document.querySelector(`.type-button[data-type="${t2}"]`);if(b)b.classList.add('effectiveness');});
    weakAgainst.forEach(t2=>{const b=document.querySelector(`.type-button[data-type="${t2}"]`);if(b)b.classList.add('weakness');});
    resistList.forEach(t2=>{const b=document.querySelector(`.type-button[data-type="${t2}"]`);if(b)b.classList.add('resist');});
    immuneList.forEach(t2=>{const b=document.querySelector(`.type-button[data-type="${t2}"]`);if(b)b.classList.add('immune');});

    const overlapped = strengths.filter(t2=>immuneList.includes(t2));
    overlapped.forEach(t2=>{
        const b = document.querySelector(`.type-button[data-type="${t2}"]`);
        if(b){
            b.classList.add('mixed');
            b.classList.remove('effectiveness');
            b.classList.remove('immune');
        }
    });

    if(currentSelection.length) {
        document.querySelectorAll('.type-button').forEach(btn=>{
            const type = btn.dataset.type;
            if(
                !btn.classList.contains('active') &&
                !btn.classList.contains('effectiveness') &&
                !btn.classList.contains('weakness') &&
                !btn.classList.contains('immune') &&
                !btn.classList.contains('mixed')
            ) {
                btn.classList.add('neutral');
            }
        });
    }
    let html=`<div class="info-title">${currentSelection.map(s=>s.charAt(0).toUpperCase()+s.slice(1)).join(' + ')}</div>`;
    function makeIcons(list, counts){
        return list.map(t2=>{
            const count = counts[t2] || 0;
            let multlabel = '';
            if(count){
                if(count !== 1) multlabel = ` x${count}`;
            }
            return `<div class="info-icon-wrapper" data-type="${t2}">`+
                   `<img class="info-icon" src="icons-type/${t2}.png" alt="${t2}" title="${t2}" />`+
                   `<span class="info-label">${t2.charAt(0).toUpperCase()+t2.slice(1)}${multlabel}</span>`+
                   `</div>`;
        }).join('');
    }
    if(strengths.length) html+=`<div><em>${t('superEffective')}:</em><div class="info-icons">${makeIcons(strengths, strengthsCount)}</div></div>`;
    if(weakAgainst.length) html+=`<div><em>${t('vulnerable')}:</em><div class="info-icons">${makeIcons(weakAgainst, weakCount)}</div></div>`;
    if(resistList.length) html+=`<div><em>${t('resistLabel')}:</em><div class="info-icons">${makeIcons(resistList, resistCount)}</div></div>`;
    if(immuneList.length) html+=`<div><em>${t('immune')}:</em><div class="info-icons">${makeIcons(immuneList, {})}</div></div>`;
    if(!strengths.length&&!weakAgainst.length&&!resistList.length&&!immuneList.length) html+=`<div>${t('noRelation')}</div>`;
    info.innerHTML=html;
    info.querySelectorAll('.info-icon').forEach(img=>{
        img.style.cursor='pointer';
        img.addEventListener('click',()=>selectType(img.dataset.type));
        if(useGsap){
            gsap.fromTo(img, {scale:0, opacity:0}, {scale:1, opacity:1, duration:0.3, ease:'back.out(1.7)'});
        }
    });
}

function selectType(type){
    const idx=currentSelection.indexOf(type);
    if(idx!=-1){currentSelection.splice(idx,1);}else{if(currentSelection.length===2)currentSelection.shift();currentSelection.push(type);}renderSelection();updateUrl();}

function clearAll(options = {}){
    currentSelection = [];
    renderSelection();
    if(options.clearSearch){
        if(searchInput) searchInput.value = '';
        createButtons('');
    }
    updateUrl();
}

function handleKeyNav(e){
    const btns=Array.from(chart.querySelectorAll('.type-button'));
    const idx=btns.indexOf(e.currentTarget);
    if(idx===-1) return;
    switch(e.key){
        case'ArrowRight':if(idx<btns.length-1)btns[idx+1].focus();e.preventDefault();break;
        case'ArrowLeft':if(idx>0)btns[idx-1].focus();e.preventDefault();break;
        case'ArrowDown':if(idx+colCount<btns.length)btns[idx+colCount].focus();e.preventDefault();break;
        case'ArrowUp':if(idx-colCount>=0)btns[idx-colCount].focus();e.preventDefault();break;
        case'Enter':selectType(e.currentTarget.dataset.type);e.preventDefault();break;
    }
}

window.addEventListener('keydown',e=>{if(e.key==='Escape')clearAll();});
window.addEventListener('resize',()=>{updateColumns();if(currentSelection.length)renderSelection();});

function showEffectiveness(){
    if(tabEffectBtn) tabEffectBtn.classList.add('active');
    if(tabEffectBtn) tabEffectBtn.setAttribute('aria-selected','true');
    if(tabCalcBtn) { tabCalcBtn.classList.remove('active'); tabCalcBtn.setAttribute('aria-selected','false'); }
    if(tabFossilsBtn) { tabFossilsBtn.classList.remove('active'); tabFossilsBtn.setAttribute('aria-selected','false'); }
    if(tabCatchBtn) { tabCatchBtn.classList.remove('active'); tabCatchBtn.setAttribute('aria-selected','false'); }
    if(tabSpeedstersBtn) { tabSpeedstersBtn.classList.remove('active'); tabSpeedstersBtn.setAttribute('aria-selected','false'); }
    if(contentEffect) contentEffect.hidden = false;
    if(contentCalc) contentCalc.hidden = true;
    if(contentFossils) contentFossils.hidden = true;
    if(contentSpeedsters) contentSpeedsters.hidden = true;
    const contentCatch = document.getElementById('content-catch');
    if(contentCatch) contentCatch.hidden = true;
    // clear any previous catch results/logs so they don't persist in the footer
    const catchRes = document.getElementById('catch-result');
    const logRes = document.getElementById('log-result');
    if(catchRes) catchRes.innerHTML = '';
    if(logRes) logRes.innerHTML = '';
    document.body.classList.add('show-instructions');
    const legend = document.getElementById('legend');
    if(legend) legend.style.display = '';
    const titleEl = document.getElementById('page-title');
    if(titleEl) titleEl.textContent = t('pageTitle');
    document.title = t('pageTitle');
    if(useGsap){
        gsap.from(contentEffect, {opacity:0, y:-10, duration:0.4});
    }
    updateUrl();
}
function showCalculator(){
    if(tabCalcBtn) tabCalcBtn.classList.add('active');
    if(tabCalcBtn) tabCalcBtn.setAttribute('aria-selected','true');
    if(tabEffectBtn) { tabEffectBtn.classList.remove('active'); tabEffectBtn.setAttribute('aria-selected','false'); }
    if(tabFossilsBtn) { tabFossilsBtn.classList.remove('active'); tabFossilsBtn.setAttribute('aria-selected','false'); }
    if(tabCatchBtn) { tabCatchBtn.classList.remove('active'); tabCatchBtn.setAttribute('aria-selected','false'); }
    if(tabSpeedstersBtn) { tabSpeedstersBtn.classList.remove('active'); tabSpeedstersBtn.setAttribute('aria-selected','false'); }
    if(contentCalc) contentCalc.hidden = false;
    if(contentEffect) contentEffect.hidden = true;
    if(contentFossils) contentFossils.hidden = true;
    if(contentSpeedsters) contentSpeedsters.hidden = true;
    const contentCatch = document.getElementById('content-catch');
    if(contentCatch) contentCatch.hidden = true;
    // also clear catch calculator results/log so they don’t linger
    const catchRes = document.getElementById('catch-result');
    const logRes = document.getElementById('log-result');
    if(catchRes) catchRes.innerHTML = '';
    if(logRes) logRes.innerHTML = '';
    document.body.classList.remove('show-instructions');
    const legend = document.getElementById('legend');
    if(legend) legend.style.display = 'none';
    updateRangeResults();
    updateCommon();
    updateShiny();
    const titleEl = document.getElementById('page-title');
    if(titleEl) titleEl.textContent = t('calculatorTitle');
    document.title = t('calculatorTitle');
    if(useGsap){
        gsap.from(contentCalc, {opacity:0, y:-10, duration:0.4});
        gsap.from(contentCalc.querySelectorAll('.calc-card'), {opacity:0, y:20, duration:0.5, stagger:0.1});
    }
    updateUrl();
}
if(tabEffectBtn) tabEffectBtn.addEventListener('click',()=>{ showEffectiveness(); localStorage.setItem('selectedTab','effectiveness'); updateUrl(); });
if(tabFossilsBtn) tabFossilsBtn.addEventListener('click',()=>{ showFossils(); localStorage.setItem('selectedTab','fossils'); updateUrl(); });
if(tabCalcBtn) tabCalcBtn.addEventListener('click',()=>{ showCalculator(); localStorage.setItem('selectedTab','calculator'); updateUrl(); });

function showCatch(){
    if(tabCatchBtn) tabCatchBtn.classList.add('active');
    if(tabCatchBtn) tabCatchBtn.setAttribute('aria-selected','true');
    if(tabCalcBtn) { tabCalcBtn.classList.remove('active'); tabCalcBtn.setAttribute('aria-selected','false'); }
    if(tabEffectBtn) { tabEffectBtn.classList.remove('active'); tabEffectBtn.setAttribute('aria-selected','false'); }
    if(tabFossilsBtn) { tabFossilsBtn.classList.remove('active'); tabFossilsBtn.setAttribute('aria-selected','false'); }
    if(tabSpeedstersBtn) { tabSpeedstersBtn.classList.remove('active'); tabSpeedstersBtn.setAttribute('aria-selected','false'); }
    if(contentCalc) contentCalc.hidden = true;
    if(contentEffect) contentEffect.hidden = true;
    if(contentFossils) contentFossils.hidden = true;
    if(contentSpeedsters) contentSpeedsters.hidden = true;
    const contentCatch = document.getElementById('content-catch');
    if(contentCatch) contentCatch.hidden = false;
    document.body.classList.remove('show-instructions');
    const legend = document.getElementById('legend');
    if(legend) legend.style.display = 'none';
    const titleEl = document.getElementById('page-title');
    if(titleEl) titleEl.textContent = t('catchTitle');
    document.title = t('catchTitle');
    updateUrl();
}
if(tabCatchBtn) tabCatchBtn.addEventListener('click',()=>{ showCatch(); localStorage.setItem('selectedTab','catch'); updateUrl(); });
if(tabSpeedstersBtn) tabSpeedstersBtn.addEventListener('click',()=>{ showSpeedsters(); localStorage.setItem('selectedTab','speedsters'); updateUrl(); });

function showSpeedsters(){
    if(tabSpeedstersBtn) tabSpeedstersBtn.classList.add('active');
    if(tabSpeedstersBtn) tabSpeedstersBtn.setAttribute('aria-selected','true');
    if(tabEffectBtn) { tabEffectBtn.classList.remove('active'); tabEffectBtn.setAttribute('aria-selected','false'); }
    if(tabFossilsBtn) { tabFossilsBtn.classList.remove('active'); tabFossilsBtn.setAttribute('aria-selected','false'); }
    if(tabCalcBtn) { tabCalcBtn.classList.remove('active'); tabCalcBtn.setAttribute('aria-selected','false'); }
    if(tabCatchBtn) { tabCatchBtn.classList.remove('active'); tabCatchBtn.setAttribute('aria-selected','false'); }
    if(contentSpeedsters) contentSpeedsters.hidden = false;
    if(contentCalc) contentCalc.hidden = true;
    if(contentEffect) contentEffect.hidden = true;
    if(contentFossils) contentFossils.hidden = true;
    const contentCatch = document.getElementById('content-catch');
    if(contentCatch) contentCatch.hidden = true;
    document.body.classList.remove('show-instructions');
    const legend = document.getElementById('legend');
    if(legend) legend.style.display = 'none';
    const titleEl = document.getElementById('page-title');
    if(titleEl) titleEl.textContent = t('tabSpeedsters');
    document.title = t('tabSpeedsters');

    // Ensure grid is built when opening the tab (re-render if needed)
    if(typeof renderGrid === 'function') {
        renderGrid();
        const speedsterGrid = document.getElementById('speedster-grid');
        if(speedsterGrid && speedsterGrid.children.length === 0){
            const warning = document.createElement('div');
            warning.style.padding = '1rem';
            warning.style.color = '#eee';
            warning.style.background = 'rgba(255,0,0,0.08)';
            warning.textContent = 'Não foi possível carregar speedsters, tente atualizar a página.';
            speedsterGrid.appendChild(warning);
            console.warn('Speedsters grid está vazio após renderização. Possível problema no hoopa-portais.js.');
        }
    }

    if(useGsap && contentSpeedsters){
        gsap.from(contentSpeedsters, {opacity:0, y:-10, duration:0.4});
    }
    updateUrl();
}

// attempt to load tab from URL query first, fallback to localStorage
function initTabFromUrl(){
    const params=new URLSearchParams(location.search);
    const tabparam=params.get('tab');
    if(tabparam==='calculator') return showCalculator();
    if(tabparam==='fossils') return showFossils();
    if(tabparam==='catch') return showCatch();
    if(tabparam==='speedsters') return showSpeedsters();
    const saved = localStorage.getItem('selectedTab');
    if(saved==='calculator') return showCalculator();
    if(saved==='fossils') return showFossils();
    if(saved==='catch') return showCatch();
    if(saved==='speedsters') return showSpeedsters();
    return showEffectiveness();
}

// Delay initTabFromUrl to ensure all scripts are fully loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        // Add a small delay to ensure hoopa-portais.js has initialized
        setTimeout(initTabFromUrl, 100);
    });
} else {
    setTimeout(initTabFromUrl, 100);
}

const fossilCombos = {
    'Drake,Bird': { pokemon: 'dracozolt.png', dna: 'dna.gif' },
    'Bird,Drake': { pokemon: 'dracozolt.png', dna: 'dna.gif' },
    'Dino,Bird': { pokemon: 'arctozolt.png', dna: 'dna.gif' },
    'Bird,Dino': { pokemon: 'arctozolt.png', dna: 'dna.gif' },
    'Fish,Dino': { pokemon: 'arctovish.png', dna: 'dna.gif' },
    'Dino,Fish': { pokemon: 'arctovish.png', dna: 'dna.gif' },
    'Drake,Fish': { pokemon: 'dracovish.png', dna: 'dna.gif' },
    'Fish,Drake': { pokemon: 'dracovish.png', dna: 'dna.gif' },
    // new amber pairing: two ambers produce Aerodactyl
    'Amber,Amber': { pokemon: 'aerodactyl.png', dna: 'dna.gif' }
};

// mapping from generated pokémon to which side of the hunt they appear on
const huntSide = {
    dracozolt: 'left',
    dracovish: 'left',
    arctozolt: 'right',
    arctovish: 'right',
    aerodactyl: 'right'
};
// drop hints mapping for single fossil click; two possible drops each
const dropHints = {
    Drake: ['dracozolt.png','dracovish.png'],
    Bird: ['dracozolt.png','arctozolt.png'],
    Dino: ['arctozolt.png','arctovish.png'],
    Fish: ['arctovish.png','dracovish.png'],
    Amber: ['aerodactyl.png','aerodactyl.png']
};

function showDropHints(type, elem){
    const hints = dropHints[type];
    const container = document.getElementById('drop-hints');
    if(!container) return;
    container.innerHTML = '';
    if(hints && hints.length === 2){
        // add a descriptive line above the arrows
        const desc = document.createElement('div');
        desc.className = 'drop-text';
        desc.textContent = 'Pode dropar:';
        container.appendChild(desc);
        // build two-row layout: arrows on the first row, pokemon images on the second.
        const arrowRow = document.createElement('div');
        arrowRow.className = 'arrow-row';
        // if both hints refer to same pokemon, show single downward arrow
        if(hints[0] === hints[1]){
            const downArrow = document.createElement('span');
            downArrow.className = 'arrow';
            downArrow.textContent = '↓';
            arrowRow.appendChild(downArrow);
        } else {
            const leftArrow = document.createElement('span');
            leftArrow.className = 'arrow';
            leftArrow.textContent = '↙';
            leftArrow.style.transform = 'rotate(-15deg)';
            const rightArrow = document.createElement('span');
            rightArrow.className = 'arrow';
            rightArrow.textContent = '↘';
            rightArrow.style.transform = 'rotate(15deg)';
            arrowRow.appendChild(leftArrow);
            arrowRow.appendChild(rightArrow);
        }
        const imageRow = document.createElement('div');
        imageRow.className = 'image-row';
        // create each pokemon image with label below
        const unique = hints[0] === hints[1] ? [hints[0]] : [hints[0], hints[1]];
        unique.forEach(fname=>{
            const wrapper = document.createElement('div');
            wrapper.className = 'drop-item';
            const img = document.createElement('img');
            img.src = 'fosseis/' + fname;
            img.alt = fname;
            const label = document.createElement('div');
            label.className = 'drop-name';
            // use filename without extension as name
            const name = fname.split('.')[0];
            label.textContent = name.charAt(0).toUpperCase() + name.slice(1);
            wrapper.appendChild(img);
            wrapper.appendChild(label);
            imageRow.appendChild(wrapper);
        });
        container.appendChild(arrowRow);
        container.appendChild(imageRow);
        // instead of aligning relative to the whole grid, move the container
        // directly under the clicked fossil cell so the hints follow that item
        container.style.marginTop = '0.5rem';
        container.style.marginLeft = '';
        if(elem){
            const cell = elem.closest('.fossil-cell');
            if(cell){
                cell.appendChild(container); // this automatically moves element in DOM
            }
        }
        if(useGsap){
            gsap.from(container.children, {opacity:0, y:10, stagger:0.1, duration:0.4});
        }
    }
}
buildPokemonGallery();

function fossilClearSelection(){
    fossilSelections.length = 0;
    document.querySelectorAll('.fossil-img.selected').forEach(img=>{
        img.classList.remove('selected');
        if(useGsap) gsap.to(img, {scale:1, duration:0.2});
    });
    const drop = document.getElementById('drop-hints');
    if(drop) drop.innerHTML = '';
}

function fossilShowResult(pair){
    lastFossilPair = pair;
    const combo = fossilCombos[pair];
    if(!combo) return;
    const [a,b] = pair.split(',');
    // special case for amber ghost image
    // if both selected fossils are Amber, show a single amber icon
    let fossila, fossilb;
    if(a === 'Amber' && b === 'Amber'){
        fossila = fossilb = 'fosseis/old_amber.png';
    } else {
        fossila = a === 'Amber' ? 'fosseis/old_amber.png' : `fosseis/Bag_Fossilized_${a}_Sprite.png`;
        fossilb = b === 'Amber' ? 'fosseis/old_amber.png' : `fosseis/Bag_Fossilized_${b}_Sprite.png`;
    }
    // determine hunt side based on resulting pokemon
    const base = combo.pokemon.split('.')[0];
    const huntSide = {
        dracozolt: 'left',
        dracovish: 'left',
        arctozolt: 'right',
        arctovish: 'right',
        aerodactyl: 'right'
    };
    const sideKey = huntSide[base] || '';
    // never display hunt-side for Aerodactyl (respawn random)
    const sideText = (sideKey && base !== 'aerodactyl') ? `<p>${t('huntSideLabel')}: ${t(sideKey)}</p>` : '';
    // custom dna/cost for Aerodactyl
    const isAerodactyl = base === 'aerodactyl';
    const dnaQty = isAerodactyl ? 150 : 50;
    const costText = isAerodactyl ? `<p style="font-weight:bold;">Reviver este Pokémon custa 500K.</p>` : '';
    // build fossil icons section: one image if both the same
    let fossilIcons = '';
    if(a === 'Amber' && b === 'Amber'){
        fossilIcons = `<img class="result-fossil" src="${encodeURI(fossila)}" alt="${a}" />`;
    } else {
        fossilIcons = `<img class="result-fossil" src="${encodeURI(fossila)}" alt="${a}" />
          <img class="result-fossil" src="${encodeURI(fossilb)}" alt="${b}" />`;
    }
    fossilResultDiv.innerHTML = `<p>${t('result')}</p>
        <div class="result-fossils">
          ${fossilIcons}
        </div>
        <img src="${encodeURI('fosseis/' + combo.pokemon)}" alt="${combo.pokemon}" style="width:100px;height:100px;" />
        ${sideText}
        <p>${t('dnaRequired')}</p>
        <img src="${encodeURI('fosseis/' + combo.dna)}" alt="${combo.dna}" style="width:50px;height:50px;" /> <span class="dna-quantity">${dnaQty}x</span>
        ${costText}`;
    if(useGsap){
        gsap.from(fossilResultDiv, {opacity:0, y:-20, duration:0.5});
        gsap.from(fossilResultDiv.querySelectorAll('img'), {scale:0, stagger:0.1, duration:0.4, ease:'back.out(1.7)'});
    }
}

function getPartners(type){
    const set=new Set();
    Object.keys(fossilCombos).forEach(k=>{
        const [a,b]=k.split(',');
        if(a===type) set.add(b);
        if(b===type) set.add(a);
    });
    return set;
}

const pokemonToPair = {};
Object.entries(fossilCombos).forEach(([k,v])=>{
    if(v && v.pokemon){
        pokemonToPair[v.pokemon] = k;
    }
});

function highlightFossils(pair){
    const [a,b] = pair.split(',');
    document.querySelectorAll('.fossil-img').forEach(i=>{
        if(i.dataset.type===a || i.dataset.type===b){
            i.classList.add('selected','active');
        }
    });
}

function showByPokemon(pokemon){
    const pair = pokemonToPair[pokemon];
    if(!pair) return;
    fossilClearSelection();
    highlightFossils(pair);
    fossilShowResult(pair);
    setTimeout(()=>{
        fossilClearSelection();
        document.querySelectorAll('.fossil-img').forEach(i=>{
            i.classList.remove('active','compatible','incompatible');
        });
        hintEl.textContent = '';
    }, 3000);
}

const hintEl = document.getElementById('fossil-hint');
    
    document.querySelectorAll('.fossil-label').forEach(span=>{
        const type = span.previousElementSibling?.dataset.type;
        if(type && strings[lang] && strings[lang][type.toLowerCase()]){
            span.textContent = strings[lang][type.toLowerCase()];
        }
    });

function buildPokemonGallery(){
    const gallery = document.getElementById('pokemon-gallery');
    if(!gallery) return;
    gallery.innerHTML = '';
    const seen = new Set();
    // use fixed order for gallery so new pokémon can be inserted precisely
    const desiredOrder = ['dracozolt.png','dracovish.png','arctovish.png','arctozolt.png','aerodactyl.png'];
    const entries = [];
    Object.keys(fossilCombos).forEach(k=>{
        const data = fossilCombos[k];
        if(seen.has(data.pokemon)) return;
        seen.add(data.pokemon);
        entries.push(data.pokemon);
    });
    // sort according to desired order; unknown items go at end alphabetically
    entries.sort((a,b)=>{
        const iA = desiredOrder.indexOf(a);
        const iB = desiredOrder.indexOf(b);
        if(iA !== -1 && iB !== -1) return iA - iB;
        if(iA !== -1) return -1;
        if(iB !== -1) return 1;
        return a.localeCompare(b);
    });
    entries.forEach(poke=>{
        const card = document.createElement('div');
        card.className = 'pokemon-card';
        const base = poke.split('.')[0];
        const display = base.charAt(0).toUpperCase() + base.slice(1);
        const img = document.createElement('img');
        img.src = 'fosseis/' + poke;
        img.alt = display;
        card.appendChild(img);
        const label = document.createElement('div');
        const sideKey = huntSide[base];
        // omit side label for aerodactyl as it's random
        const sideText = sideKey && base !== 'aerodactyl' ? ` (${t(sideKey)})` : '';
        label.textContent = display + sideText;
        card.appendChild(label);
        card.addEventListener('click', ()=>{
            showComboForPokemon(poke);
        });
        if(useGsap){
            card.addEventListener('mouseenter', ()=>{
                gsap.to(card, {scale:1.1, duration:0.2});
            });
            card.addEventListener('mouseleave', ()=>{
                gsap.to(card, {scale:1, duration:0.2});
            });
        }
        gallery.appendChild(card);
    });
}

// build gallery early so fossils appear even if fetch fails
buildPokemonGallery();

function showComboForPokemon(pokemon){
    // clear any drop hints when coming from gallery
    const drop = document.getElementById('drop-hints');
    if(drop) drop.innerHTML = '';
    for(const k in fossilCombos){
        if(fossilCombos[k].pokemon === pokemon){
            const [a,b] = k.split(',');
            fossilClearSelection();
            document.querySelectorAll('.fossil-img').forEach(i=>{
                i.classList.remove('active','compatible','incompatible');
            });
            [a,b].forEach(t=>{
                const img = document.querySelector(`.fossil-img[data-type="${t}"]`);
                if(img){
                    img.classList.add('selected','active');
                }
            });
            fossilShowResult(k);
            setTimeout(()=>{
                fossilClearSelection();
                document.querySelectorAll('.fossil-img').forEach(i=>{
                    i.classList.remove('active','compatible','incompatible');
                });
                hintEl.textContent = '';
            }, 3000);
            break;
        }
    }
}

Array.from(document.querySelectorAll('.fossil-img')).forEach(img=>{
    img.addEventListener('click', ()=>{
        const type = img.dataset.type;
        if(fossilSelections.includes(type)) return;
        fossilSelections.push(type);
        img.classList.add('selected');
        img.classList.add('active');
        if(fossilSelections.length===1){
            // show drop hints for solo click, positioned under clicked item
            showDropHints(type, img);

            const partners = getPartners(type);
            document.querySelectorAll('.fossil-img').forEach(i=>{
                const t=i.dataset.type;
                if(t===type) return;
                if(partners.has(t)){
                    i.classList.add('compatible');
                    i.classList.remove('incompatible');
                } else {
                    i.classList.add('incompatible');
                    i.classList.remove('compatible');
                }
            });
            if(partners.size>0){
                const names = [...partners].map(p=> t(p.toLowerCase()) || p);
                hintEl.textContent = t('fossilHintCombines') + names.join(', ');
            } else {
                hintEl.textContent = t('fossilHintNone');
            }
        }
        if(fossilSelections.length === 2){
            // clear drop hints when forming pair
            const dropEl = document.getElementById('drop-hints');
            if(dropEl) dropEl.innerHTML = '';

            const key = `${fossilSelections[0]},${fossilSelections[1]}`;
            if(useGsap){
                // brief pop effect on selected fossils before showing result
                const selectedImgs = document.querySelectorAll('.fossil-img.selected');
                gsap.to(selectedImgs, {scale:1.3, duration:0.2, yoyo:true, repeat:1, ease:'power1.inOut'});
            }
            fossilShowResult(key);
            setTimeout(()=>{
                fossilClearSelection();
                document.querySelectorAll('.fossil-img').forEach(i=>{
                    i.classList.remove('active','compatible','incompatible');
                });
                hintEl.textContent = '';
            }, 3000);
        }
    });
});

function updateRangeResults(){
    const val = rangeSelect.value;
    const data = ranges[val];
    const variant = document.querySelector('input[name="poke-variant"]:checked')?.value || 'normal';
    if(data){
        const plateCount = data.plates;
        const blocks = Math.ceil(plateCount / 30);
        const totalInBlocks = blocks * 30;
        const variantLabel = variant === 'shiny' ? t('shiny') : t('normal');
        const elementItems = plateCount * 750;
        const charItems = plateCount * 24;
        const stones = plateCount;

        if(variant === 'normal'){
            if(commonInput) commonInput.value = plateCount;
            updateCommon();
        } else {
            const shinyVal = blocks * 30;
            if(shinyInput) shinyInput.value = shinyVal;
            if(commonInput) commonInput.value = shinyVal;
            updateShiny();
            updateCommon();
        }

        let html = `<p><strong>${t('pokemonTypeLabel')}:</strong> ${variantLabel}</p>`;
        if(variant === 'normal'){
            html += `<p><strong>${t('commonPlatesLabel')}:</strong> ${plateCount}</p>`;
        } else {
            html += `<p><strong>${t('shinyPlatesLabel')}:</strong> ${plateCount}</p>`;
        }
        html += `<p><strong>${t('goldCoinsLabel')}:</strong> ${data.gold}</p>`;
        html += `<p><em>${t('sameQuantityNote')}</em></p>`;
        rangeResults.innerHTML = html;
    if(useGsap) gsap.from(rangeResults, {opacity:0, y:10, duration:0.3});
    } else {
        rangeResults.innerHTML = '';
    }
}
function updateCommon(){
    const n = parseInt(commonInput.value) || 0;
    const elementItems = n * 750;
    const charItems = n * 24;
    const stones = n;
    // build using translations
    const header = t('forCommonLabel').replace('{n}', n);
    const itemsText = t('calcInfoItems')
                        .replace('{elementItems}', elementItems.toLocaleString())
                        .replace('{charItems}', charItems.toLocaleString())
                        .replace('{stones}', stones.toLocaleString());
    commonResults.innerHTML = `<p>${header}<br>${itemsText}</p>`;
    if(useGsap) gsap.from(commonResults, {opacity:0, y:10, duration:0.3});
}
function updateShiny(){
    let n = parseInt(shinyInput.value) || 0;
    let html = '';
    if(n % 30 !== 0){
        const rounded = Math.ceil(n/30)*30;
        html += `<p><em>${t('adjustNote').replace('{rounded}', rounded)}</em></p>`;
        n = rounded;
    }
    const blocks = Math.ceil(n / 30);
    const commonNeeded = blocks * 30;
    const shiningStones = blocks;
    html += `<p>${n} shining plate(s) requer ${commonNeeded} plate(s) comum(ns)` +
            ` e ${shiningStones} shining stone(s) (em ${blocks} bloco(s) de 30).</p>`;
    shinyResults.innerHTML = html;
    if(useGsap) gsap.from(shinyResults, {opacity:0, y:10, duration:0.3});
}

if(rangeSelect) rangeSelect.addEventListener('change', updateRangeResults);
variantRadios.forEach(r=>r.addEventListener('change', ()=>{
    updateRangeResults();
    localStorage.setItem('pokeVariant', document.querySelector('input[name="poke-variant"]:checked').value);
}));

if(shinyInput){
    shinyInput.addEventListener('input', ()=>{
        updateShiny();
        if(commonInput) commonInput.value = shinyInput.value;
        updateCommon();
    });
}
if(commonInput) commonInput.addEventListener('input', updateCommon);
if(shinyInput) shinyInput.addEventListener('input', updateShiny);

const savedVariant = localStorage.getItem('pokeVariant');
if(savedVariant){
    const savedRadio = document.querySelector(`input[name="poke-variant"][value="${savedVariant}"]`);
    if(savedRadio) savedRadio.checked = true;
}

if(rangeSelect) updateRangeResults();
if(commonInput) updateCommon();
if(shinyInput) updateShiny();

function updateUrl(){
    const params=new URLSearchParams(location.search);
    if(currentSelection.length) params.set('types',currentSelection.join(',')); else params.delete('types');
    const activeTab = tabEffectBtn.classList.contains('active') ? 'effectiveness' :
                      tabFossilsBtn.classList.contains('active') ? 'fossils' :
                      tabCalcBtn.classList.contains('active') ? 'calculator' :
                      tabSpeedstersBtn.classList.contains('active') ? 'speedsters' :
                      (tabCatchBtn && tabCatchBtn.classList.contains('active')) ? 'catch' : '';
    if(activeTab) params.set('tab', activeTab); else params.delete('tab');
    const query = params.toString();
    const newUrl = location.pathname + (query ? `?${query}` : '');
    history.replaceState(null, '', newUrl);

    if(currentSelection.length) localStorage.setItem('selectedTypes', currentSelection.join(','));
    else localStorage.removeItem('selectedTypes');
    if(activeTab) localStorage.setItem('selectedTab', activeTab);
}
function initFromUrl(){
    const params=new URLSearchParams(location.search);
    const tparam=params.get('types');
    if(tparam){
        tparam.split(',').forEach(type=>{if(menuTypes.includes(type))currentSelection.push(type);});
    }

    if(!currentSelection.length) {
        const stored = localStorage.getItem('selectedTypes');
        if(stored) {
            stored.split(',').forEach(type=>{if(menuTypes.includes(type))currentSelection.push(type);});
        }
    }
    if(currentSelection.length)renderSelection();
}

const shareBtn=document.getElementById('share-btn');
if(shareBtn){
    shareBtn.addEventListener('click',()=>{
        const url=location.href;
        navigator.clipboard.writeText(url).then(()=>{
            // tooltip instead of alert
            const tip=document.createElement('div');
            tip.className='share-tooltip';
            tip.textContent=t('shareSuccess');
            document.body.appendChild(tip);
            const rect=shareBtn.getBoundingClientRect();
            tip.style.top = (rect.bottom+5)+'px';
            tip.style.left = (rect.left+rect.width/2)+'px';
            if(useGsap){
                gsap.fromTo(tip,{opacity:0,y:-5},{opacity:1,y:0,duration:0.3}).then(()=>gsap.to(tip,{opacity:0,duration:0.5,delay:1, onComplete:()=>tip.remove()}));
            } else {
                setTimeout(()=>tip.remove(),1500);
            }
        }).catch(()=>alert(t('shareFail')));
    });
}
const printBtn = document.getElementById('print-btn');
if(printBtn){
    printBtn.addEventListener('click',()=>{
        window.print();
    });
}
const resetBtn = document.getElementById('reset-btn');
if(resetBtn){
    resetBtn.addEventListener('click',()=>{
        clearAll({clearSearch: true});
    });
}

if(searchInput){searchInput.addEventListener('input',()=>{createButtons(searchInput.value.trim());clearAll();});}

// catch calculator listeners
const ballSelect = document.getElementById('ball-select');
const ballImg = document.getElementById('ball-img');
if(ballSelect){
    ballSelect.addEventListener('change',()=>{
        const v=ballSelect.value;
        if(ballImg) {
            ballImg.src = `balls/${v}.png`;
            const key = v === 'elemental' ? 'ballElemental' : v === 'story' ? 'ballStory' : 'ballUltra';
            ballImg.alt = t(key);
        }
    });
}
const levelSelect = document.getElementById('level-select');
const catchResult = document.getElementById('catch-result');
const calcCatchBtn = document.getElementById('calc-catch-btn');
if(calcCatchBtn){
    calcCatchBtn.addEventListener('click',()=>{
        const lvl = levelSelect ? levelSelect.value : '5';
        const variant = document.querySelector('input[name="catch-variant"]:checked')?.value || 'normal';
        const reqList = computeRequired(lvl, variant);
        // build display text for each option
        const chosen = ballSelect ? ballSelect.value : 'ultra';
        const computeNeeded = (opt)=>{
            if(opt[chosen] && opt[chosen] > 0) return opt[chosen];
            // normal variant uses same count regardless of ball type
            if(variant==='normal' && opt.ultra) return opt.ultra;
            return 0;
        };
        let lines = reqList
            .map(opt=>{
                const needed = computeNeeded(opt);
                if(needed===0) return null;
                return `~ ${needed} ${chosen} ball${needed!==1?'s':''}`;
            })
            .filter(l=>l);
        if(catchResult){
            const optLabel = t('optionsLabel');
        catchResult.innerHTML = `<div class="calc-result-highlight">${optLabel}:<br>${lines.join('<br>')}<br>(${variant})</div>`;
        }
        // also parse log automatically if text is present
        const logText = document.getElementById('log-input')?.value || '';
        if(logText.trim()){
            processLogText(logText);
        }
    });
}

const parseLogBtn = document.getElementById('parse-log');
const logResult = document.getElementById('log-result');
// reusable log parsing/display routine
function processLogText(text){
    let {totalCost,counts} = parseLog(text);
    console.log('processLogText called', text, totalCost, counts);
    if(!logResult) return;
    const exp = t('expensesMsg');
    const usedUltra = counts.ultra || 0;
    const usedStory = counts.story || 0;
    const usedElem = counts.elemental || 0;
    const balls = `Ultra: ${usedUltra}, Story: ${usedStory}, Elemental: ${usedElem}`;
    const chosen = ballSelect ? ballSelect.value : 'ultra';
    const lvl = levelSelect ? levelSelect.value : '5';
    const variant = document.querySelector('input[name="catch-variant"]:checked')?.value || 'normal';
    const reqList = computeRequired(lvl, variant);
    const convertToChosen = (typeCountMap, target) => {
        let sum = 0;
        Object.entries(typeCountMap).forEach(([type,cnt])=>{
            if(cnt && ballPrices[target] && ballPrices[type]){
                sum += cnt * ballPrices[type] / ballPrices[target];
            }
        });
        return Math.floor(sum);
    };
    const converted = convertToChosen(counts, chosen);
    const costBased = ballPrices[chosen] ? Math.floor(totalCost / ballPrices[chosen]) : 0;
    const effectiveUsed = Math.max(converted, costBased);
    const computeNeeded = (opt)=>{
        if(chosen && opt[chosen] && opt[chosen] > 0) return opt[chosen];
        return 0;
    };
    const remMap = {};
    reqList.forEach(opt=>{
        const needed = Math.max(computeNeeded(opt) - effectiveUsed, 0);
        if(needed > 0){
            const key = `${needed}`;
            if(!remMap[key]){
                remMap[key] = {needed, text: `${needed} ${chosen} ball${needed!==1?'s':''}`};
            }
        }
    });
    const remLines = Object.values(remMap);
    const remMsg = t('remainingMsg');
    let resultText = '';
    // if no cost and no counts, show fallback message
    if(totalCost === 0 && usedUltra+usedStory+usedElem === 0){
        resultText = t('noBallsParsed');
    }
    if(totalCost === 0){
        totalCost = 0;
        Object.entries(counts).forEach(([type,cnt])=>{
            if(cnt && ballPrices[type]){
                totalCost += cnt * ballPrices[type];
            }
        });
        if(totalCost > 0){
            // ensure warning stands on its own line
            resultText += t('noExpenseWarning') + '<br>';
        }
    }
    resultText += `${exp}: $${totalCost.toFixed(2)}; ${balls}`;
    if(remLines.length){
        const lines = remLines.map(item=>`${item.text}`);
        resultText += `<br>${remMsg}:<br>${lines.join('<br>')}`;
    } else {
        let avgNeeded = 0;
        const directOpt = reqList.find(opt=>opt[chosen] && opt[chosen] > 0);
        if(directOpt){
            avgNeeded = directOpt[chosen];
        } else if(reqList.length && ballPrices[chosen]){
            avgNeeded = convertToChosen(reqList[0], chosen);
        }
        const over = effectiveUsed - avgNeeded;
        const ballLabelKey = 'ball' + chosen.charAt(0).toUpperCase() + chosen.slice(1);
        const ballLabel = t(ballLabelKey) || chosen;
        resultText += `<br>${t('avgReached').replace('{avg}',avgNeeded).replace('{ball}',ballLabel)}`;
        if(over > 0){
            resultText += `<br>${t('overAvg').replace('{over}',over).replace('{ball}',ballLabel)}`;
        }
        resultText += `<br>${t('encouragement')}`;
    }
    logResult.innerHTML = `<div class="calc-result-highlight">${resultText}</div>`;
}

if(parseLogBtn){
    parseLogBtn.addEventListener('click',()=>{
        const text = document.getElementById('log-input').value;
        processLogText(text);
    });
}

const calcCardBtn = document.getElementById('calc-card');
const cardResult = document.getElementById('card-result');
if(calcCardBtn){
    calcCardBtn.addEventListener('click',()=>{
        const price = parseFloat(document.getElementById('card-price').value) || 0;
        const qty = parseInt(document.getElementById('card-qty').value) || 0;
        const total = price * qty;
        // format total in a shorter k-style if large
        const displayTotal = total >= 1000 ? formatCost(total) : total.toFixed(2);
        if(cardResult) cardResult.innerHTML = `<div class="calc-result-highlight">${qty} unidades = $${displayTotal}</div>`;
    });
}

const themeToggle=document.getElementById('theme-toggle');
function setTheme(dark){if(dark)document.body.classList.add('dark');else document.body.classList.remove('dark');localStorage.setItem('darkMode',dark);}
const stored=localStorage.getItem('darkMode');
if(stored!==null){setTheme(stored==='true');}else{const dm=window.matchMedia('(prefers-color-scheme: dark)').matches;setTheme(dm);} 
themeToggle.addEventListener('click',()=>{setTheme(!document.body.classList.contains('dark'));});

// service worker registration is disabled to prevent caching issues during development.
// To re-enable caching in production remove the surrounding comments or set
// `enableSW` to true.
const enableSW = false;
if(enableSW && 'serviceWorker' in navigator){
    navigator.serviceWorker.register('sw.js').then(reg=>{
        if(reg.waiting){
            alert('Nova versão disponível. Atualize a página.');
        }
        reg.addEventListener('updatefound',()=>{
            const newSW = reg.installing;
            newSW.addEventListener('statechange',()=>{
                if(newSW.state==='installed' && navigator.serviceWorker.controller){
                    alert('Nova versão disponível. Atualize a página.');
                }
            });
        });
    }).catch(console.error);
}

const matrixBtn = document.getElementById('matrix-btn');
const matrixModal = document.getElementById('matrix-modal');
const matrixBody = document.getElementById('matrix-body');
if(matrixBtn && matrixModal && matrixBody){
    matrixBtn.addEventListener('click', ()=>{
        buildMatrix();
        matrixModal.setAttribute('aria-hidden','false');
    });
    matrixModal.querySelector('.modal-close').addEventListener('click', ()=>{
        matrixModal.setAttribute('aria-hidden','true');
    });
    matrixModal.addEventListener('click', e=>{
        if(e.target===matrixModal) matrixModal.setAttribute('aria-hidden','true');
    });
    window.addEventListener('keydown', e=>{
        if(e.key==='Escape') matrixModal.setAttribute('aria-hidden','true');
    });
}

function buildMatrix(){
    const types = menuTypes;
    const rows = types.map(att=>{
        const row = types.map(def=>{
            let mult = 1;
            if(immunities[def] && immunities[def].includes(att)){
                mult = 0;
            } else if(effectiveness[att] && effectiveness[att].includes(def)){
                mult *= 2;
            } else if(resistances[def] && resistances[def].includes(att)){
                mult *= 0.5;
            }
            return mult;
        });
        return row;
    });
    let html = '<table><tr><th></th>' + types.map(t=>`<th>${t}</th>`).join('') + '</tr>';
    rows.forEach((row,i)=>{
        html += '<tr><th>' + types[i] + '</th>' + row.map(v=>`<td>${v===1?'–':v}</td>`).join('') + '</tr>';
    });
    html += '</table>';
    matrixBody.innerHTML = html;
}

fetch('types.json').then(r=>r.json()).then(data=>{
    Object.assign(effectiveness,data.effectiveness);
    Object.assign(immunities,data.immunities);
    Object.assign(resistances,data.resistances || {});
        for(let t in effectiveness){weaknesses[t]=[];}
    for(let t in effectiveness){(effectiveness[t]||[]).forEach(target=>{if(!weaknesses[target])weaknesses[target]=[];weaknesses[target].push(t);});}
    menuTypes=Object.keys(effectiveness).sort();
    createButtons();
    updateTextContent();
    initFromUrl();

    if(searchInput) {
        const dl = document.createElement('datalist');
        dl.id = 'types-list';
        menuTypes.forEach(t=>{
            const opt = document.createElement('option');
            opt.value = t;
            dl.appendChild(opt);
        });
        document.body.appendChild(dl);
        searchInput.setAttribute('list','types-list');
    }
    // animate cards after data is available
    if(useGsap){
        gsap.from('.card', {opacity:0, y:20, stagger:0.1, duration:0.6});
    }
}).catch(err=>{
    console.error('fetch failed',err);
});
