
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

const tabEffectBtn = document.getElementById('tab-effectiveness');
const tabFossilsBtn = document.getElementById('tab-fossils');
const tabCalcBtn = document.getElementById('tab-calculator');
const contentEffect = document.getElementById('content-effectiveness');
const contentFossils = document.getElementById('content-fossils');
const contentCalc = document.getElementById('content-calculator');

const ranges = {
    '50-100': { plates: 280, gold: 40 },
    '65-100': { plates: 284, gold: 37 },
    '80-100': { plates: 289, gold: 34 },
    '95-100': { plates: 135, gold: 15 }
};

const strings = {
    pt: {
        pageTitle: 'Efetividade de Tipos Pokémon',
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
        fossilCost: 'Reviver um Pokémon custa <strong>50K</strong>.',
        fossilHintCombines: 'Este fóssil combina com: ',
        fossilHintNone: 'Nenhuma combinação disponível para este fóssil.',
        galleryTitle: 'Pokémons disponíveis',
        result: 'Resultado:',
        dnaRequired: 'DNA exigido:',
        drake: 'Drake',
        resistLabel: 'resiste a',
        legendResist: 'Resiste',
        bird: 'Pássaro',
        dino: 'Dino',
        fish: 'Peixe',
        fossilIntro: 'Selecione dois fósseis para formar um Pokémon. Cada par produz um resultado diferente e exige um DNA específico.',
        calculatorInstructions: 'Selecione uma faixa de nível e utilize os campos abaixo para calcular materiais necessários.',
        pokemonTypeLabel: 'Tipo de Pokémon',
        normal: 'Normal',
        shiny: 'Shiny',
        sameQuantityNote: 'Quantidade idêntica; apenas o tipo de plate muda.',
        elementItems: 'itens do elemento',
        charItems: 'itens característicos',
        stoneItems: 'pedras do elemento'
    },
    en: {
        pageTitle: 'Pokémon Type Effectiveness',
        instructions: 'Click a type to see what it is effective against. Use Tab/arrow keys to navigate and Enter to select. You can choose up to two types.',
        superEffective: 'super effective against',
        vulnerable: 'vulnerable to',
        immune: 'immune to',
        noRelation: 'no special relation.',
        shareSuccess: 'Link copied to clipboard!',
        shareFail: 'Failed to copy link.',
        shareLabel: 'Share',
        printLabel: 'Print',
        resetLabel: 'Reset',
        legendSelected: 'Selected',
        legendStrength: 'Super effective',
        legendResist: 'Resists',
        legendWeakness: 'Weakness',
        legendImmune: 'Immune',
        legendNeutral: 'Neutral',
        themeToggle: 'Toggle dark/light mode',
        calculatorTitle: 'Training Calculator',
        rangeLabel: 'Level range',
        platesLabel: 'Plates',
        goldCoinsLabel: 'Golden coins',
        commonPlatesLabel: 'Common plates',
        shinyPlatesLabel: 'Shiny plates',
        resistLabel: 'resists',
        tabTypes: 'Types',
        tabCalculator: 'Calculator',
        tabFossils: 'Fossils',
        fossilCost: 'Reviving a Pokémon costs <strong>50K</strong>.',
        fossilHintCombines: 'This fossil combines with: ',
        fossilHintNone: 'No combinations available for this fossil.',
        galleryTitle: 'Available Pokémon',
        result: 'Result:',
        dnaRequired: 'DNA required:',
        drake: 'Drake',
        bird: 'Bird',
        dino: 'Dino',
        fish: 'Fish',
        fossilIntro: 'Select two fossils to form a Pokémon. Each pair yields a different result and requires specific DNA.',
        calculatorInstructions: 'Select a level range and use the fields below to calculate required materials.',
        pokemonTypeLabel: 'Pokémon type',
        normal: 'Normal',
        shiny: 'Shiny',
        sameQuantityNote: 'Same quantity; only plate type differs.',
        elementItems: 'element items',
        charItems: 'characteristic items',
        stoneItems: 'element stones'
    }
};
let lang = localStorage.getItem('lang') || (navigator.language.startsWith('en') ? 'en' : 'pt');
function t(k){return strings[lang][k]||'';}

function updateTextContent(){
    document.documentElement.lang = lang === 'en' ? 'en' : 'pt-BR';
    const titleEl = document.getElementById('page-title');
    if(tabCalcBtn && tabCalcBtn.classList.contains('active')){
        if(titleEl) titleEl.textContent = t('calculatorTitle');
        document.title = t('calculatorTitle');
    } else if(tabFossilsBtn && tabFossilsBtn.classList.contains('active')){
        if(titleEl) titleEl.textContent = t('tabFossils');
        document.title = t('tabFossils');
    } else {
        if(titleEl) titleEl.textContent = t('pageTitle');
        document.title = t('pageTitle');
    }
    const instr = document.getElementById('instructions');
    instr.textContent = t('instructions');
    const finstr = document.getElementById('fossil-instructions');
    if(finstr) finstr.textContent = t('fossilIntro');
    const costEl = document.getElementById('fossil-cost');
    if(costEl) costEl.innerHTML = t('fossilCost');
    const gtitle = document.getElementById('gallery-title');
    if(gtitle) gtitle.textContent = t('galleryTitle');
    if(searchInput){
        searchInput.placeholder = lang==='en' ? 'Search type...' : 'Buscar tipo...';
    }
    if(tabEffectBtn) tabEffectBtn.textContent = t('tabTypes');
    if(tabCalcBtn) tabCalcBtn.textContent = t('tabCalculator');
    const ptLabel = document.getElementById('pokemon-type-label');
    if(ptLabel) ptLabel.textContent = t('pokemonTypeLabel') + ':';
    variantRadios.forEach(r=>{
        if(r.value === 'normal') r.nextSibling.textContent = t('normal');
        if(r.value === 'shiny') r.nextSibling.textContent = t('shiny');
    });
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
    if(tabCalcBtn && tabCalcBtn.classList.contains('active')){
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
    const langBtn = document.getElementById('lang-toggle');
    if(langBtn){
        langBtn.title = lang === 'en' ? 'PT' : 'EN';
        langBtn.setAttribute('aria-label','Switch language');
    }
    const resetBtn = document.getElementById('reset-btn');
    if(resetBtn){
        resetBtn.setAttribute('aria-label', t('resetLabel'));
        resetBtn.title = t('resetLabel');
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
    if(contentFossils) contentFossils.hidden = false;
    if(contentCalc) contentCalc.hidden = true;
    if(contentEffect) contentEffect.hidden = true;
    document.getElementById('instructions').style.display = 'none';
    const legend = document.getElementById('legend');
    if(legend) legend.style.display = 'none';
    const titleEl = document.getElementById('page-title');
    if(titleEl) titleEl.textContent = t('tabFossils');
    document.title = t('tabFossils');
    const fres = document.getElementById('result');
    if(fres) fres.innerHTML = '';
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

function clearAll(){currentSelection=[];renderSelection();updateUrl();}

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
    if(contentEffect) contentEffect.hidden = false;
    if(contentCalc) contentCalc.hidden = true;
    if(contentFossils) contentFossils.hidden = true;
    document.getElementById('instructions').style.display = '';
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
    if(contentCalc) contentCalc.hidden = false;
    if(contentEffect) contentEffect.hidden = true;
    if(contentFossils) contentFossils.hidden = true;
    document.getElementById('instructions').style.display = 'none';
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

// attempt to load tab from URL query first, fallback to localStorage
function initTabFromUrl(){
    const params=new URLSearchParams(location.search);
    const tabparam=params.get('tab');
    if(tabparam==='calculator') return showCalculator();
    if(tabparam==='fossils') return showFossils();
    return showEffectiveness();
}
initTabFromUrl();


const fossilCombos = {
    'Drake,Bird': { pokemon: 'dracozolt.png', dna: 'dna verde.png' },
    'Bird,Drake': { pokemon: 'dracozolt.png', dna: 'dna verde.png' },
    'Dino,Bird': { pokemon: 'arctozolt.png', dna: 'dna verde.png' },
    'Bird,Dino': { pokemon: 'arctozolt.png', dna: 'dna verde.png' },
    'Fish,Dino': { pokemon: 'arctovish.png', dna: 'dna azul.png' },
    'Dino,Fish': { pokemon: 'arctovish.png', dna: 'dna azul.png' },
    'Drake,Fish': { pokemon: 'dracovish.png', dna: 'dna azul.png' },
    'Fish,Drake': { pokemon: 'dracovish.png', dna: 'dna azul.png' }
};
buildPokemonGallery();

function fossilClearSelection(){
    fossilSelections.length = 0;
    document.querySelectorAll('.fossil-img.selected').forEach(img=>{
        img.classList.remove('selected');
        if(useGsap) gsap.to(img, {scale:1, duration:0.2});
    });
}

function fossilShowResult(pair){
    const combo = fossilCombos[pair];
    if(!combo) return;
    const [a,b] = pair.split(',');
    const fossila = `fosseis/Bag_Fossilized_${a}_Sprite.png`;
    const fossilb = `fosseis/Bag_Fossilized_${b}_Sprite.png`;
    fossilResultDiv.innerHTML = `<p>${t('result')}</p>
        <div class="result-fossils">
          <img class="result-fossil" src="${encodeURI(fossila)}" alt="${a}" />
          <img class="result-fossil" src="${encodeURI(fossilb)}" alt="${b}" />
        </div>
        <img src="${encodeURI('fosseis/' + combo.pokemon)}" alt="${combo.pokemon}" style="width:100px;height:100px;" />
        <p>${t('dnaRequired')}</p>
        <img src="${encodeURI('fosseis/' + combo.dna)}" alt="${combo.dna}" style="width:50px;height:50px;" />`;
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
    Object.keys(fossilCombos).forEach(k=>{
        const data = fossilCombos[k];
        if(seen.has(data.pokemon)) return;
        seen.add(data.pokemon);
        const card = document.createElement('div');
        card.className = 'pokemon-card';
        const base = data.pokemon.split('.')[0];
        const display = base.charAt(0).toUpperCase() + base.slice(1);
        const img = document.createElement('img');
        img.src = 'fosseis/' + data.pokemon;
        img.alt = display;
        card.appendChild(img);
        const label = document.createElement('div');
        label.textContent = display;
        card.appendChild(label);
        card.addEventListener('click', ()=>{
            showComboForPokemon(data.pokemon);
        });
        gallery.appendChild(card);
    });
}

// build gallery early so fossils appear even if fetch fails
buildPokemonGallery();

function showComboForPokemon(pokemon){
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
    commonResults.innerHTML = `<p>Para ${n} plate(s) comum(ns):<br>` +
        `${elementItems.toLocaleString()} itens do elemento<br>` +
        `${charItems.toLocaleString()} itens característicos<br>` +
        `${stones.toLocaleString()} pedra(s) do elemento</p>`;
    if(useGsap) gsap.from(commonResults, {opacity:0, y:10, duration:0.3});
}
function updateShiny(){
    let n = parseInt(shinyInput.value) || 0;
    let html = '';
    if(n % 30 !== 0){
        const rounded = Math.ceil(n/30)*30;
        html += `<p><em>Valor ajustado para múltiplo de 30: ${rounded}</em></p>`;
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
                      tabCalcBtn.classList.contains('active') ? 'calculator' : '';
    if(activeTab) params.set('tab', activeTab); else params.delete('tab');
    const newUrl=location.pathname+'?'+params.toString();
    history.replaceState(null,'',newUrl);

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
        clearAll();
    });
}

if(searchInput){searchInput.addEventListener('input',()=>{createButtons(searchInput.value.trim());clearAll();});}

const themeToggle=document.getElementById('theme-toggle');
const langToggle=document.getElementById('lang-toggle');
function setTheme(dark){if(dark)document.body.classList.add('dark');else document.body.classList.remove('dark');localStorage.setItem('darkMode',dark);}
const stored=localStorage.getItem('darkMode');
if(stored!==null){setTheme(stored==='true');}else{const dm=window.matchMedia('(prefers-color-scheme: dark)').matches;setTheme(dm);} 
themeToggle.addEventListener('click',()=>{setTheme(!document.body.classList.contains('dark'));});
if(langToggle){
    langToggle.addEventListener('click',()=>{
        lang = (lang === 'en' ? 'pt' : 'en');
        localStorage.setItem('lang', lang);
        updateTextContent();
    });
}

if('serviceWorker' in navigator){
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
