// List of types and their super-effective targets
const effectiveness = {
    normal: [],
    fire: ['grass','ice','bug','steel'],
    water: ['fire','ground','rock'],
    electric: ['water','flying'],
    grass: ['water','ground','rock'],
    ice: ['grass','ground','flying','dragon'],
    fighting: ['normal','ice','rock','dark','steel'],
    poison: ['grass','fairy'],
    ground: ['fire','electric','poison','rock','steel'],
    flying: ['grass','fighting','bug'],
    psychic: ['fighting','poison'],
    bug: ['grass','psychic','dark'],
    rock: ['fire','ice','flying','bug'],
    ghost: ['psychic','ghost'],
    dragon: ['dragon'],
    dark: ['psychic','ghost'],
    steel: ['ice','rock','fairy'],
    fairy: ['fighting','dragon','dark']
};

// compute inverse mapping (weaknesses)
const weaknesses = {};
for (let t in effectiveness) {
    weaknesses[t] = [];
}
for (let t in effectiveness) {
    effectiveness[t].forEach(target => {
        if (!weaknesses[target]) weaknesses[target] = [];
        weaknesses[target].push(t);
    });
}

// immunity mapping (defending type -> move types it is immune to)
const immunities = {
    normal: ['ghost'],
    ground: ['electric'],
    flying: ['ground'],
    ghost: ['normal','fighting'],
    dark: ['psychic'],
    steel: ['poison'],
    fairy: ['dragon']
};

// draw lines between selected and related types using SVG
function drawConnections(type) {
    connectionsSvg.innerHTML = '';
    const origin = document.querySelector(`.type-button[data-type="${type}"]`);
    if (!origin) return;
    const rect = origin.getBoundingClientRect();
    const svgRect = connectionsSvg.getBoundingClientRect();
    const ox = rect.left + rect.width/2 - svgRect.left;
    const oy = rect.top + rect.height/2 - svgRect.top;
    const related = [...(effectiveness[type]||[]), ...(weaknesses[type]||[])];
    related.forEach(rt => {
        const btn = document.querySelector(`.type-button[data-type="${rt}"]`);
        if (!btn) return;
        const rrect = btn.getBoundingClientRect();
        const rx = rrect.left + rrect.width/2 - svgRect.left;
        const ry = rrect.top + rrect.height/2 - svgRect.top;
        const line = document.createElementNS('http://www.w3.org/2000/svg','line');
        line.setAttribute('x1', ox);
        line.setAttribute('y1', oy);
        line.setAttribute('x2', ox);
        line.setAttribute('y2', oy);
        line.setAttribute('stroke', '#fff');
        line.setAttribute('stroke-width', '2');
        line.setAttribute('opacity', '0.7');
        // prepare dash animation
        line.setAttribute('stroke-dasharray', '5,5');
        line.style.strokeDashoffset = '100';
        connectionsSvg.appendChild(line);
        // animate end point and dash
        setTimeout(()=>{
            line.setAttribute('x2', rx);
            line.setAttribute('y2', ry);
            line.setAttribute('stroke', '#ff0');
            line.style.transition = 'stroke-dashoffset 0.5s linear';
            line.style.strokeDashoffset = '0';
        },10);
        // add endpoint circle
        const circle = document.createElementNS('http://www.w3.org/2000/svg','circle');
        circle.setAttribute('cx', ox);
        circle.setAttribute('cy', oy);
        circle.setAttribute('r', '4');
        circle.setAttribute('fill', '#ff0');
        circle.setAttribute('opacity','0.8');
        connectionsSvg.appendChild(circle);
        setTimeout(()=>{
            circle.setAttribute('cx', rx);
            circle.setAttribute('cy', ry);
            circle.setAttribute('r', '2');
            circle.setAttribute('opacity','0');
            circle.style.transition = 'cx 0.5s, cy 0.5s, opacity 0.5s, r 0.5s';
        },10);
    });
}

// Create buttons dynamically
const chart = document.getElementById('chart');
const connectionsSvg = document.getElementById('connections');
const searchInput = document.getElementById('type-search');

function createButtons(filter="") {
    chart.innerHTML = '';
    for (let type in effectiveness) {
        if (filter && !type.includes(filter.toLowerCase())) continue;
        const btn = document.createElement('div');
        btn.className = `type-button ${type}`;
        btn.dataset.type = type;

        const img = document.createElement('img');
        img.src = `icons/${type}.png`;
        img.alt = type;
        img.className = 'type-icon';
        btn.appendChild(img);

        const hidden = document.createElement('span');
        hidden.className = 'visually-hidden';
        hidden.textContent = type.charAt(0).toUpperCase() + type.slice(1);
        btn.appendChild(hidden);
        // visible label below icon
        const label = document.createElement('span');
        label.className = 'type-label';
        label.textContent = type.charAt(0).toUpperCase() + type.slice(1);
        btn.appendChild(label);

        btn.addEventListener('click', () => selectType(type));
        chart.appendChild(btn);
    }
}

// initial render
createButtons();

// filter handling
if (searchInput) {
    searchInput.addEventListener('input', () => {
        createButtons(searchInput.value.trim());
        clearHighlights();
    });
}

let current = null;

function selectType(type) {
    if (current === type) {
        clearHighlights();
        return;
    }
    clearHighlights();
    current = type;

    // highlight selected
    const selectedBtn = document.querySelector(`.type-button[data-type="${type}"]`);
    if (selectedBtn) selectedBtn.classList.add('active');

    // draw connections
    drawConnections(type);

    // highlight effective targets (strengths)
    const strengths = effectiveness[type] || [];
    strengths.forEach(t => {
        const btn = document.querySelector(`.type-button[data-type="${t}"]`);
        if (btn) btn.classList.add('effectiveness');
    });

    // highlight weaknesses (types strong against this type)
    const weakAgainst = weaknesses[type] || [];
    weakAgainst.forEach(t => {
        const btn = document.querySelector(`.type-button[data-type="${t}"]`);
        if (btn) btn.classList.add('weakness');
    });
    // highlight immunities (types this type is immune to)
    const immuneList = immunities[type] || [];
    immuneList.forEach(t => {
        const btn = document.querySelector(`.type-button[data-type="${t}"]`);
        if (btn) btn.classList.add('immune');
    });
    // show info text with clickable icons
    const info = document.getElementById('info');
    let html = `<div class="info-title">${type.charAt(0).toUpperCase()+type.slice(1)}</div>`;
    function makeIcons(list) {
        return list.map(t =>
            `<div class="info-icon-wrapper" data-type="${t}">`+
            `<img class="info-icon" src="icons/${t}.png" alt="${t}" title="${t}" />`+
            `<span class="info-label">${t.charAt(0).toUpperCase()+t.slice(1)}</span>`+
            `</div>`
        ).join('');
    }

    if (strengths.length) {
        const icons = makeIcons(strengths);
        html += `<div><em>super eficaz contra:</em><div class="info-icons">${icons}</div></div>`;
    }
    if (weakAgainst.length) {
        const icons2 = makeIcons(weakAgainst);
        html += `<div><em>vulnerável a:</em><div class="info-icons">${icons2}</div></div>`;
    }
    if (immuneList.length) {
        const icons3 = makeIcons(immuneList);
        html += `<div><em>imune a:</em><div class="info-icons">${icons3}</div></div>`;
    }
    if (!strengths.length && !weakAgainst.length && !immuneList.length) {
        html += `<div>nenhuma relação especial.</div>`;
    }
    info.innerHTML = html;

    // add click handlers for chaining
    info.querySelectorAll('.info-icon').forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', () => {
            selectType(img.dataset.type);
        });
    });
}

function clearHighlights() {
    connectionsSvg.innerHTML = '';
    document.querySelectorAll('.type-button').forEach(btn => {
        btn.classList.remove('active');
        btn.classList.remove('effectiveness');
        btn.classList.remove('weakness');
    });
    const info = document.getElementById('info');
    info.textContent = '';
    current = null;
}

// allow escape key to reset
window.addEventListener('keydown', e => {
    if (e.key === 'Escape') clearHighlights();
});

// on resize recompute connection positions
window.addEventListener('resize', () => {
    if (current) drawConnections(current);
});

// theme toggle
const themeToggle = document.getElementById('theme-toggle');
function setTheme(dark) {
    if (dark) document.body.classList.add('dark');
    else document.body.classList.remove('dark');
    localStorage.setItem('darkMode', dark);
}

// initialize from preference or system
const stored = localStorage.getItem('darkMode');
if (stored !== null) {
    setTheme(stored === 'true');
} else {
    const dm = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(dm);
}

themeToggle.addEventListener('click', () => {
    setTheme(!document.body.classList.contains('dark'));
});
// the original clearHighlights above handles removal of all classes and svg
