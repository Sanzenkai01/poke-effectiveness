(function(){
    'use strict';

    const FLOOR_CONFIG = [
        { z: 0, label: '+7', w: 8256, h: 8000 },
        { z: 1, label: '+6', w: 8256, h: 8000 },
        { z: 2, label: '+5', w: 8256, h: 8000 },
        { z: 3, label: '+4', w: 8256, h: 8000 },
        { z: 4, label: '+3', w: 8256, h: 8000 },
        { z: 5, label: '+2', w: 8256, h: 8000 },
        { z: 6, label: '+1', w: 8256, h: 8000 },
        { z: 7, label: '0', w: 8256, h: 8000 },
        { z: 8, label: '-1', w: 8256, h: 8000 },
        { z: 9, label: '-2', w: 8256, h: 8000 },
        { z: 10, label: '-3', w: 8256, h: 8000 },
        { z: 11, label: '-4', w: 8256, h: 8000 },
        { z: 12, label: '-5', w: 8256, h: 8000 },
        { z: 13, label: '-6', w: 8256, h: 8000 },
        { z: 14, label: '-7', w: 8256, h: 8000 },
        { z: 15, label: '-8', w: 8256, h: 8000 }
    ];
    const DATA_URLS = {
        categories: 'mapa-interativo/data/categories.json?v=20260801a',
        labels: 'mapa-interativo/data/labels.json?v=20260801a',
        markers: 'mapa-interativo/data/markers.json?v=20260808a',
        bossesInfoMarkers: 'mapa-interativo/data/bosses-info-markers.json?v=20260802b',
        ligaPokemonMarkers: 'mapa-interativo/data/liga-pokemon-markers.json?v=20260802d',
        rangerBossesMarkers: 'mapa-interativo/data/ranger-bosses-markers.json?v=20260808a',
        pokemon: 'pokemons/pokemons.json?v=20260808b'
    };
    const MAP_POKEMON_NAME_ALIASES = {
        buttefree: 'butterfree',
        beedril: 'beedrill',
        electabuzzz: 'electabuzz',
        burmygrass: 'burmyplant',
        burmysand: 'burmysandy',
        wormadamgrass: 'wormadamplant',
        shellos: 'shelloswest',
        gastrodon: 'gastrodonwest'
    };
    const SHINY_ELEMENTAL_AVERAGES = {
        5: 38,
        20: 77,
        30: 308,
        50: 385,
        65: 615,
        80: 615,
        95: 1231,
        pre: 1231,
        ace: 4000
    };
    const FILTER_STORAGE_KEY = 'poke-interactive-map-hidden-categories-v1';
    const MAX_ZOOM = 3;
    const SHARE_GRID_SIZE = 1;
    const LEGACY_SHARE_GRID_SIZE = 32;
    const PIXEL_SHARE_ROUTE_PREFIX = 'pixel';
    const SHARED_VIEW_ZOOM = 0.65;
    const MAP_IMAGE_VERSION = '20260802a';
    const HOOPA_PORTAL_META = {
        staraptor: { image: 'pokemons/megas/megastaraptor.png?v=20260725a' },
        victreebel: { image: 'pokemons/megas/megavictreebel.png' },
        malamar: { image: 'pokemons/megas/megamalamar.png' },
        hawlucha: { image: 'pokemons/megas/mega-hawlucha.png' },
        starmie: { image: 'pokemons/megas/mega-starmie.png' },
        greninja: { image: 'pokemons/megas/megagreninja.png' },
        chesnaught: { image: 'pokemons/megas/megachesnaught.png' },
        delphox: { image: 'pokemons/megas/megadelphox.png' },
        scolipede: { image: 'pokemons/megas/mega-scolipede.png' },
        meganium: { image: 'pokemons/megas/mega-meganium.png' },
        feraligatr: { image: 'pokemons/megas/mega-feraligatr.png' },
        clefable: { image: 'pokemons/megas/mega-clefable.png' },
        skarmory: { image: 'pokemons/megas/mega-skarmory.png' },
        raichu: { image: 'pokemons/1gen/mega-raichu-x.png' },
        lucario: { image: 'pokemons/megas/mega-lucario.png' },
        absol: { image: 'pokemons/megas/mega-absol.png' },
        chimecho: { image: 'pokemons/megas/mega-chimeco.png' }
    };
    const TYPE_LABELS = {
        bug: 'Bug', dark: 'Dark', dragon: 'Dragon', electric: 'Electric',
        fairy: 'Fairy', fighting: 'Fighting', fire: 'Fire', flying: 'Flying',
        ghost: 'Ghost', grass: 'Grass', ground: 'Ground', ice: 'Ice',
        normal: 'Normal', poison: 'Poison', psychic: 'Psychic', rock: 'Rock',
        steel: 'Steel', water: 'Water'
    };
    const CATEGORY_SYMBOLS = {
        hunt: '🎯',
        quest: '📜',
        pokecenter: '✚',
        shop: '🛒',
        'scout-club': '🧭',
        fosseis: '🦖',
        'hoopa-portals': '⛩️',
        eeveelution: '🌈',
        'dg-boss': '☠',
        'bosses-info': '👑',
        maniacs: '💰',
        'liga-pokemon': '🏆',
        'ranger-bosses': '👹',
        npc: '⚠️'
    };
    const MANIACS_MAP_CATEGORY = Object.freeze({
        id: 'poke-utilities-maniacs',
        slug: 'maniacs',
        label: 'Maniacs',
        labelEn: 'Maniacs',
        labelEs: 'Maniacs',
        labelPl: 'Maniacs',
        icon: 'GiTwoCoins',
        image: null,
        color: '#f59e0b',
        comingSoon: false,
        hasTerritory: false,
        globalFloor: false
    });

    let initialized = false;
    let loadingPromise = null;
    let categories = [];
    let labels = [];
    let markers = [];
    let markersById = new Map();
    let pokemonCatalog = [];
    let pokemonCatalogByName = new Map();
    let floor = 7;
    let scale = 0.12;
    let translateX = 0;
    let translateY = 0;
    let selectedMarker = null;
    let selectedMarkerMediaOverride = null;
    let selectedMarkerDetailsOverride = null;
    let isolatedMarkerIds = new Set();
    let sharedPin = null;
    let placingSharedPin = false;
    let hiddenCategories = new Set();
    let query = '';
    let dragging = false;
    let dragStart = null;
    let detailDragging = false;
    let detailDragStart = null;
    let transformFrame = 0;
    let dragPreviewFrame = 0;
    const markerNodeCache = new Map();
    const labelNodeCache = new Map();

    const elements = {};

    function byId(id){
        return document.getElementById(id);
    }

    function normalize(value){
        return String(value || '')
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLowerCase()
            .trim();
    }

    function normalizePokemonName(value){
        return normalize(value).replace(/[^a-z0-9]/g, '');
    }

    function normalizeRespawnPokemonName(value){
        const normalizedName = normalize(String(value || '')
            .replace(/♀/g, ' female ')
            .replace(/♂/g, ' male '))
            .replace(/[^a-z0-9]/g, '');
        return MAP_POKEMON_NAME_ALIASES[normalizedName] || normalizedName;
    }

    function slugify(value){
        return normalize(value)
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/-+/g, '-')
            .replace(/^-+|-+$/g, '');
    }

    function getFloor(){
        return FLOOR_CONFIG.find(entry => entry.z === floor) || FLOOR_CONFIG[7];
    }

    function getCategory(marker){
        return marker?.category || categories.find(entry => entry.id === marker?.categoryId) || {};
    }

    function getHoopaPortalMeta(marker){
        if(getCategory(marker)?.slug !== 'hoopa-portals') return null;
        const portalName = String(marker?.name || '').replace(/^Hoopa Portal\s*-\s*/i, '').trim();
        return HOOPA_PORTAL_META[normalizePokemonName(portalName)] || null;
    }

    function createCategorySymbol(category, className){
        const symbol = document.createElement('span');
        symbol.className = className;
        symbol.textContent = CATEGORY_SYMBOLS[category?.slug] || '●';
        symbol.setAttribute('aria-hidden', 'true');
        return symbol;
    }

    function getMarkerSearchText(marker){
        const details = marker?.details && typeof marker.details === 'object'
            ? Object.values(marker.details).join(' ')
            : '';
        const categorySlug = getCategory(marker)?.slug;
        const portalBossName = categorySlug === 'hoopa-portals'
            ? String(marker?.name || '').replace(/^Hoopa Portal\s*-\s*/i, '').trim()
            : '';
        return normalize([
            marker?.name,
            marker?.nameEn,
            marker?.nameEs,
            marker?.description,
            getCategory(marker)?.label,
            getNearestSearchLocationLabel(marker)?.name,
            details,
            portalBossName ? `Mega ${portalBossName}` : ''
        ].join(' '));
    }

    function getVisibleMarkers(){
        if(isolatedMarkerIds.size){
            return Array.from(isolatedMarkerIds)
                .map(markerId => markersById.get(markerId))
                .filter(marker => marker && Number(marker.floor) === floor);
        }
        const normalizedQuery = normalize(query);
        return markers.filter(marker => {
            const category = getCategory(marker);
            if(!normalizedQuery && hiddenCategories.has(marker.categoryId)) return false;
            if(marker.floor !== floor && !category.globalFloor) return false;
            return !normalizedQuery || getMarkerSearchText(marker).includes(normalizedQuery);
        });
    }

    function getSearchResults(){
        if(isolatedMarkerIds.size){
            return Array.from(isolatedMarkerIds)
                .map(markerId => markersById.get(markerId))
                .filter(Boolean);
        }
        const normalizedQuery = normalize(query);
        if(!normalizedQuery) return [];
        return markers.filter(marker => getMarkerSearchText(marker).includes(normalizedQuery));
    }

    function getSearchResultTitle(marker, locationLabel){
        if(getCategory(marker)?.slug === 'pokecenter') return 'Pokecenter';
        const markerName = String(marker?.name || getCategory(marker)?.label || 'Local').trim();
        const locationName = String(locationLabel?.name || '').trim();
        if(!locationName) return markerName;
        return markerName.replace(new RegExp(`\\s*[-–—]\\s*${escapeRegExp(locationName)}\\s*$`, 'i'), '').trim() || markerName;
    }

    function escapeRegExp(value){
        return String(value || '').replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    function getVisibleLabels(){
        return labels.filter(label => label.floor === floor);
    }

    function readHiddenCategories(){
        try{
            const stored = JSON.parse(localStorage.getItem(FILTER_STORAGE_KEY) || '[]');
            hiddenCategories = new Set(Array.isArray(stored) ? stored : []);
        }catch(error){
            hiddenCategories = new Set();
        }
    }

    function saveHiddenCategories(){
        try{
            localStorage.setItem(FILTER_STORAGE_KEY, JSON.stringify(Array.from(hiddenCategories)));
        }catch(error){}
    }

    function renderCategoryFilters(){
        if(!elements.categories) return;
        const normalizedQuery = normalize(query);
        if(elements.filterActions) elements.filterActions.hidden = Boolean(normalizedQuery);
        elements.categories.classList.toggle('is-search-results', Boolean(normalizedQuery));

        if(normalizedQuery){
            renderSearchResults();
            return;
        }

        const fragment = document.createDocumentFragment();
        categories.filter(category => !category.comingSoon).forEach(category => {
            const label = document.createElement('label');
            label.className = 'interactive-map-filter';
            label.style.setProperty('--marker-color', category.color || '#65c7ff');

            const input = document.createElement('input');
            input.type = 'checkbox';
            input.checked = !hiddenCategories.has(category.id);
            input.dataset.categoryId = category.id;
            input.addEventListener('change', () => {
                if(input.checked) hiddenCategories.delete(category.id);
                else hiddenCategories.add(category.id);
                saveHiddenCategories();
                selectedMarker = null;
                render();
            });

            const swatch = document.createElement('span');
            swatch.className = 'interactive-map-filter__swatch';
            swatch.style.setProperty('--marker-color', category.color || '#65c7ff');
            swatch.appendChild(createCategorySymbol(category, 'interactive-map-filter__symbol'));

            const copy = document.createElement('span');
            copy.className = 'interactive-map-filter__copy';
            const name = document.createElement('strong');
            name.textContent = category.label || category.slug || 'Categoria';
            const count = document.createElement('span');
            count.textContent = `${markers.filter(marker => marker.categoryId === category.id).length} marcações`;
            copy.append(name, count);
            label.append(input, swatch, copy);
            fragment.appendChild(label);
        });
        elements.categories.replaceChildren(fragment);
    }

    function renderSearchResults(){
        const results = getSearchResults();
        const fragment = document.createDocumentFragment();

        results.forEach(marker => {
            const category = getCategory(marker);
            const locationLabel = getNearestSearchLocationLabel(marker);
            const button = document.createElement('button');
            button.type = 'button';
            button.className = 'interactive-map-search-result';
            button.style.setProperty('--marker-color', category.color || '#65c7ff');

            const swatch = document.createElement('span');
            swatch.className = 'interactive-map-search-result__swatch';
            swatch.appendChild(createCategorySymbol(category, 'interactive-map-search-result__symbol'));

            const copy = document.createElement('span');
            copy.className = 'interactive-map-search-result__copy';
            const title = document.createElement('strong');
            title.textContent = getSearchResultTitle(marker, locationLabel);
            const location = document.createElement('span');
            location.textContent = locationLabel?.name || `Andar ${getFloorLabel(marker.floor)}`;
            copy.append(title, location);
            button.append(swatch, copy);
            button.setAttribute('aria-label', `Ir para ${title.textContent}, ${location.textContent}`);
            button.addEventListener('click', () => {
                if(floor !== marker.floor) setFloor(marker.floor, false);
                selectedMarker = marker;
                centerAt(marker.positionX, marker.positionY, 1);
                renderSelection();
            });
            fragment.appendChild(button);
        });

        if(!results.length){
            const empty = document.createElement('p');
            empty.className = 'interactive-map-search-results__empty';
            empty.textContent = 'Nenhuma ocorrência encontrada.';
            fragment.appendChild(empty);
        }

        elements.categories.replaceChildren(fragment);
    }

    function markerScreenPoint(marker){
        const config = getFloor();
        return {
            x: (Number(marker.positionX) * scale) + translateX,
            y: ((config.h - Number(marker.positionY)) * scale) + translateY
        };
    }

    function getLinkedGroupRootId(marker){
        let current = marker;
        const visited = new Set();
        while(current?.linkedMarkerId && !visited.has(current.id)){
            visited.add(current.id);
            current = markersById.get(current.linkedMarkerId) || current;
            if(visited.has(current.id)) break;
        }
        return current?.id || marker?.id || '';
    }

    function buildMarkerDisplayPoints(visibleMarkers){
        const points = new Map();
        const groups = new Map();
        visibleMarkers.forEach(marker => {
            const key = `${marker.floor}:${getLinkedGroupRootId(marker)}`;
            if(!groups.has(key)) groups.set(key, []);
            groups.get(key).push(marker);
        });
        groups.forEach(group => {
            if(group.length === 1){
                points.set(group[0].id, markerScreenPoint(group[0]));
                return;
            }
            const naturalPoints = group.map(markerScreenPoint);
            const center = naturalPoints.reduce((acc, point) => ({
                x: acc.x + point.x / group.length,
                y: acc.y + point.y / group.length
            }), { x: 0, y: 0 });
            const ordered = group.slice().sort((a, b) => {
                const aRoot = a.id === getLinkedGroupRootId(a) ? -1 : 0;
                const bRoot = b.id === getLinkedGroupRootId(b) ? -1 : 0;
                return aRoot - bRoot || String(a.name).localeCompare(String(b.name));
            });
            const hasCenter = ordered.length % 2 === 1;
            const ring = hasCenter ? ordered.slice(1) : ordered;
            if(hasCenter) points.set(ordered[0].id, center);
            const radius = Math.max(18, ring.length * 5.8);
            ring.forEach((marker, index) => {
                const angle = ring.length === 2
                    ? Math.PI * index
                    : (-Math.PI / 2) + ((Math.PI * 2 * index) / ring.length);
                points.set(marker.id, {
                    x: center.x + Math.cos(angle) * radius,
                    y: center.y + Math.sin(angle) * radius
                });
            });
        });
        return points;
    }

    function createMarkerButton(marker, displayPoint){
        const category = getCategory(marker);
        const catalogPokemon = getMarkerPokemon(marker);
        const fossilPokemon = getMarkerFossilPokemon(marker);
        const point = displayPoint || markerScreenPoint(marker);
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'interactive-map-marker';
        if(selectedMarker?.id === marker.id) button.classList.add('is-selected');
        button.style.left = `${point.x}px`;
        button.style.top = `${point.y}px`;
        button.style.setProperty('--marker-color', category.color || '#65c7ff');
        button.title = marker.name || category.label || 'Marcação';
        button.setAttribute('aria-label', `Abrir ${marker.name || 'marcação'}`);

        const pokemonImages = category.slug === 'hunt'
            ? [catalogPokemon?.image || marker.icon || ''].filter(Boolean)
            : category.slug === 'bosses-info'
                ? [marker.icon || ''].filter(Boolean)
                : fossilPokemon.map(entry => entry.image).filter(Boolean);
        if(pokemonImages.length > 1){
            const imageGrid = document.createElement('span');
            imageGrid.className = 'interactive-map-marker__image-grid';
            pokemonImages.slice(0, 4).forEach(source => {
                const image = document.createElement('img');
                image.src = source;
                image.alt = '';
                image.loading = 'lazy';
                image.decoding = 'async';
                image.addEventListener('error', () => image.remove(), { once: true });
                imageGrid.appendChild(image);
            });
            button.appendChild(imageGrid);
        } else if(pokemonImages.length === 1){
            const pokemonImage = pokemonImages[0];
            const image = document.createElement('img');
            image.src = pokemonImage.startsWith('/uploads/')
                ? `https://pstory.mapdex.online${pokemonImage}`
                : pokemonImage;
            image.alt = '';
            image.loading = 'lazy';
            image.decoding = 'async';
            image.addEventListener('error', () => {
                if(marker.icon && image.src !== new URL(marker.icon, document.baseURI).href){
                    image.src = marker.icon.startsWith('/uploads/')
                        ? `https://pstory.mapdex.online${marker.icon}`
                        : marker.icon;
                    return;
                }
                image.replaceWith(createCategorySymbol(category, 'interactive-map-marker__symbol'));
            }, { once: true });
            button.appendChild(image);
        } else {
            button.appendChild(createCategorySymbol(category, 'interactive-map-marker__symbol'));
        }

        button.addEventListener('click', event => {
            event.stopPropagation();
            selectedMarker = selectedMarker?.id === marker.id ? null : marker;
            if(!selectedMarker) clearRequestedMarkerRoute();
            const portalMeta = selectedMarker ? getHoopaPortalMeta(selectedMarker) : null;
            selectedMarkerMediaOverride = portalMeta?.image
                ? { src: portalMeta.image, alt: `Mega ${String(selectedMarker.name || '').replace(/^Hoopa Portal\s*-\s*/i, '')}` }
                : null;
            renderSelection();
        });
        return button;
    }

    function createMapLabel(label){
        const point = markerScreenPoint(label);
        const node = document.createElement('span');
        node.className = `interactive-map-label interactive-map-label--${normalize(label.type || 'place')}`;
        node.style.left = `${point.x}px`;
        node.style.top = `${point.y}px`;
        node.textContent = label.name;
        return node;
    }

    function isPointNearViewport(point, padding = 72){
        const width = elements.viewport?.clientWidth || 0;
        const height = elements.viewport?.clientHeight || 0;
        if(width < 100 || height < 100) return true;
        return point.x >= -padding
            && point.y >= -padding
            && point.x <= width + padding
            && point.y <= height + padding;
    }

    function renderMarkers(updateSummary = true){
        if(!elements.markers || !elements.labels) return;
        const visibleMarkers = getVisibleMarkers();
        const displayPoints = buildMarkerDisplayPoints(visibleMarkers);
        const renderedMarkerIds = new Set();
        visibleMarkers.forEach(marker => {
            const point = displayPoints.get(marker.id) || markerScreenPoint(marker);
            if(!isPointNearViewport(point)) return;
            let button = markerNodeCache.get(marker.id);
            if(!button){
                button = createMarkerButton(marker, point);
                markerNodeCache.set(marker.id, button);
            }
            button.style.left = `${point.x}px`;
            button.style.top = `${point.y}px`;
            button.classList.toggle('is-selected', selectedMarker?.id === marker.id);
            if(button.parentElement !== elements.markers) elements.markers.appendChild(button);
            renderedMarkerIds.add(marker.id);
        });
        markerNodeCache.forEach((button, markerId) => {
            if(button.parentElement === elements.markers && !renderedMarkerIds.has(markerId)) button.remove();
        });

        const renderedLabelIds = new Set();
        getVisibleLabels().forEach(label => {
            const point = markerScreenPoint(label);
            if(!isPointNearViewport(point, 110)) return;
            let node = labelNodeCache.get(label.id);
            if(!node){
                node = createMapLabel(label);
                labelNodeCache.set(label.id, node);
            }
            node.style.left = `${point.x}px`;
            node.style.top = `${point.y}px`;
            if(node.parentElement !== elements.labels) elements.labels.appendChild(node);
            renderedLabelIds.add(label.id);
        });
        labelNodeCache.forEach((node, labelId) => {
            if(node.parentElement === elements.labels && !renderedLabelIds.has(labelId)) node.remove();
        });
        renderSharedPin();

        if(updateSummary && elements.summary){
            const searchResultCount = normalize(query) ? getSearchResults().length : 0;
            elements.summary.textContent = normalize(query)
                ? `${searchResultCount} ocorrência${searchResultCount === 1 ? '' : 's'} encontrada${searchResultCount === 1 ? '' : 's'}`
                : `${visibleMarkers.length} marcações visíveis`;
        }
    }

    function renderSharedPin(){
        let pin = elements.markers.querySelector('.interactive-map-shared-pin');
        if(!sharedPin || sharedPin.floor !== floor){
            pin?.remove();
            return;
        }
        if(!pin){
            pin = document.createElement('span');
            pin.className = 'interactive-map-shared-pin';
            pin.textContent = '📍';
            pin.setAttribute('aria-label', 'Ponto compartilhado');
            elements.markers.appendChild(pin);
        }
        const point = markerScreenPoint(sharedPin);
        pin.style.left = `${point.x}px`;
        pin.style.top = `${point.y}px`;
    }

    function updateTerritoryGeometry(){
        const polygon = elements.territory?.querySelector('.interactive-map-territory');
        const territory = getMarkerTerritory(selectedMarker);
        if(!polygon || !Array.isArray(territory) || territory.length < 3) return;
        polygon.setAttribute('points', territory.map(pair => {
            const point = markerScreenPoint({
                positionX: Number(pair?.[1]),
                positionY: Number(pair?.[0])
            });
            return `${point.x},${point.y}`;
        }).join(' '));
    }

    function renderTerritory(){
        if(!elements.territory) return;
        elements.territory.replaceChildren();
        const territory = getMarkerTerritory(selectedMarker);
        if(!Array.isArray(territory) || territory.length < 3) return;
        const polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
        polygon.setAttribute('class', 'interactive-map-territory');
        polygon.style.setProperty('--marker-color', getCategory(selectedMarker).color || '#65c7ff');
        elements.territory.appendChild(polygon);
        updateTerritoryGeometry();
    }

    function getMarkerTerritory(marker){
        if(Array.isArray(marker?.territory) && marker.territory.length >= 3) return marker.territory;
        if(Array.isArray(marker?.linkedMarker?.territory) && marker.linkedMarker.territory.length >= 3){
            return marker.linkedMarker.territory;
        }
        const rootId = getLinkedGroupRootId(marker);
        const familyTerritory = markers.find(candidate => (
            candidate.floor === marker?.floor
            && getLinkedGroupRootId(candidate) === rootId
            && Array.isArray(candidate.territory)
            && candidate.territory.length >= 3
        ))?.territory;
        return familyTerritory || null;
    }

    function getNearestLocationLabel(marker){
        return labels.reduce((nearest, label) => {
            const distance = Math.hypot(
                Number(label.positionX) - Number(marker?.positionX),
                Number(label.positionY) - Number(marker?.positionY)
            );
            return !nearest || distance < nearest.distance ? { label, distance } : nearest;
        }, null)?.label || null;
    }

    function getNearestSearchLocationLabel(marker){
        const cityLabels = labels.filter(label => normalize(label.type) !== 'region');
        const searchLabels = cityLabels.length ? cityLabels : labels;
        return searchLabels.reduce((nearest, label) => {
            const distance = Math.hypot(
                Number(label.positionX) - Number(marker?.positionX),
                Number(label.positionY) - Number(marker?.positionY)
            );
            return !nearest || distance < nearest.distance ? { label, distance } : nearest;
        }, null)?.label || null;
    }

    function getMarkerBaseShareSlug(marker){
        const locationLabel = getNearestLocationLabel(marker);
        const locationSlug = slugify(locationLabel?.name);
        const normalizedMarkerName = normalize(marker?.name);
        const normalizedLocationName = normalize(locationLabel?.name);
        const subjectName = normalizedLocationName && normalizedMarkerName.includes(normalizedLocationName)
            ? normalizedMarkerName.replace(normalizedLocationName, '')
            : marker?.name;
        const subjectSlug = slugify(subjectName) || slugify(marker?.name) || 'local';
        return [locationSlug, subjectSlug].filter(Boolean).join('-');
    }

    function getMarkerShareSlug(marker){
        const baseSlug = getMarkerBaseShareSlug(marker);
        const matches = markers.filter(candidate => getMarkerBaseShareSlug(candidate) === baseSlug);
        const markerIndex = matches.findIndex(candidate => candidate.id === marker?.id);
        if(markerIndex <= 0) return baseSlug;
        const floorSlug = slugify(getFloorLabel(marker?.floor));
        const sameFloorIndex = matches
            .slice(0, markerIndex + 1)
            .filter(candidate => candidate.floor === marker?.floor)
            .length;
        return `${baseSlug}-andar-${floorSlug || marker?.floor}${sameFloorIndex > 1 ? `-${sameFloorIndex}` : ''}`;
    }

    function getFloorLabel(floorValue){
        return FLOOR_CONFIG.find(entry => entry.z === Number(floorValue))?.label || String(floorValue ?? '');
    }

    function getRequestedMarkerSlug(){
        const match = String(location.pathname || '').match(/\/mapa-interativo\/([a-z0-9][a-z0-9-]*)\/?$/i);
        const requestedFromPanel = byId('content-mapa-interativo')?.dataset?.requestedMarkerSlug || '';
        return slugify(match?.[1] || requestedFromPanel);
    }

    function clearRequestedMarkerRoute(){
        const panel = byId('content-mapa-interativo');
        if(panel) panel.dataset.requestedMarkerSlug = '';
        if(/\/mapa-interativo\/[a-z0-9][a-z0-9-]*\/?$/i.test(String(location.pathname || ''))){
            history.replaceState(history.state, '', `/mapa-interativo${location.search}${location.hash}`);
        }
    }

    function getMarkerByShareSlug(routeSlug){
        const normalizedSlug = slugify(routeSlug);
        if(!normalizedSlug) return null;
        if(normalizedSlug.startsWith('marcador-')){
            const requestedMarkerId = normalizedSlug.slice('marcador-'.length);
            const markerById = markers.find(marker => slugify(marker?.id) === requestedMarkerId);
            if(markerById) return markerById;
        }
        return markers.find(marker => getMarkerShareSlug(marker) === normalizedSlug) || null;
    }

    function getSharedViewFromUrl(){
        const pathname = String(location.pathname || '');
        const pixelRouteMatch = pathname.match(/\/mapa-interativo\/pixel-([\d-]+)\/?$/i);
        const legacyRouteMatch = pathname.match(/\/mapa-interativo\/([\d-]+)\/?$/i);
        const routeMatch = pixelRouteMatch || legacyRouteMatch;
        if(routeMatch){
            const gridSize = pixelRouteMatch ? SHARE_GRID_SIZE : LEGACY_SHARE_GRID_SIZE;
            let coordinateX;
            let coordinateY;
            let coordinateZ;
            let sharedScale = SHARED_VIEW_ZOOM;
            const coordinateParts = routeMatch[1].split('-').filter(Boolean);
            if(coordinateParts.length === 3 || coordinateParts.length === 4){
                [coordinateX, coordinateY, coordinateZ] = coordinateParts.slice(0, 3).map(Number);
                if(coordinateParts[3]) sharedScale = Number(coordinateParts[3]) / 100;
            }else if((coordinateParts.length === 1 || coordinateParts.length === 2) && coordinateParts[0].length === 3){
                [coordinateX, coordinateY, coordinateZ] = coordinateParts[0].split('').map(Number);
                if(coordinateParts[1]) sharedScale = Number(coordinateParts[1]) / 100;
            }
            const config = FLOOR_CONFIG[coordinateZ - 1];
            const maxX = config ? Math.ceil(config.h / gridSize) : 0;
            const maxY = config ? Math.ceil(config.w / gridSize) : 0;
            if(config && coordinateX >= 1 && coordinateX <= maxX && coordinateY >= 1 && coordinateY <= maxY && Number.isFinite(sharedScale)){
                const topPosition = (coordinateX - 0.5) * gridSize;
                return {
                    floor: config.z,
                    x: (coordinateY - 0.5) * gridSize,
                    y: config.h - topPosition,
                    scale: Math.min(MAX_ZOOM, Math.max(0.06, sharedScale)),
                    showPin: true
                };
            }
        }

        // Mantém compatibilidade com links de visão gerados antes das coordenadas em grade.
        const params = new URLSearchParams(location.search);
        if(!['andar', 'x', 'y', 'zoom'].every(name => params.has(name))) return null;
        const sharedView = {
            floor: Number(params.get('andar')),
            x: Number(params.get('x')),
            y: Number(params.get('y')),
            scale: Number(params.get('zoom'))
        };
        const hasFloor = FLOOR_CONFIG.some(config => config.z === sharedView.floor);
        if(!hasFloor || ![sharedView.x, sharedView.y, sharedView.scale].every(Number.isFinite)) return null;
        sharedView.scale = Math.min(MAX_ZOOM, Math.max(0.06, sharedView.scale));
        return sharedView;
    }

    async function waitForViewportLayout(){
        for(let attempt = 0; attempt < 60; attempt += 1){
            const rect = elements.viewport.getBoundingClientRect();
            if(rect.width >= 300 && rect.height >= 300) return rect;
            await new Promise(resolve => requestAnimationFrame(resolve));
        }
        return elements.viewport.getBoundingClientRect();
    }

    function focusRequestedMarker(){
        const requestedMarker = getMarkerByShareSlug(getRequestedMarkerSlug());
        if(!requestedMarker) return false;
        if(floor !== requestedMarker.floor) setFloor(requestedMarker.floor, false);
        selectedMarker = requestedMarker;
        centerAt(requestedMarker.positionX, requestedMarker.positionY, 0.65);
        renderDetails();
        return true;
    }

    async function focusSearchTarget(searchValue, options = {}){
        await initialize();
        const requestedQuery = String(searchValue || '').trim();
        if(!requestedQuery || !elements.search) return false;

        elements.search.value = requestedQuery;
        query = requestedQuery;
        const normalizedQuery = normalize(requestedQuery);
        const results = getSearchResults();
        const preferredCategory = String(options.category || '').trim();
        const target = results.find(marker => {
            if(preferredCategory && getCategory(marker)?.slug !== preferredCategory) return false;
            const portalBossName = String(marker?.name || '').replace(/^Hoopa Portal\s*-\s*/i, '').trim();
            return normalize(`Mega ${portalBossName}`) === normalizedQuery;
        }) || results.find(marker => !preferredCategory || getCategory(marker)?.slug === preferredCategory)
          || results[0];

        if(!target){
            selectedMarker = null;
            selectedMarkerMediaOverride = null;
            render();
            return false;
        }

        // Reaplica o andar mesmo quando ele já está selecionado para que
        // modais abertos após uma atualização não reutilizem o PNG antigo.
        setFloor(target.floor, false);
        selectedMarker = target;
        selectedMarkerMediaOverride = options.image
            ? { src: String(options.image), alt: String(options.imageAlt || requestedQuery) }
            : null;
        await waitForViewportLayout();
        centerAt(target.positionX, target.positionY, Number(options.zoom) || 1.5);
        if(window.matchMedia('(max-width: 520px)').matches){
            const viewportRect = elements.viewport.getBoundingClientRect();
            translateY -= viewportRect.height * 0.24;
            updateTransform();
        }
        render();
        return true;
    }

    async function focusMarkerTarget(markerId, options = {}){
        await initialize();
        const normalizedMarkerId = String(markerId || '').trim();
        const target = markersById.get(normalizedMarkerId) || getMarkerByShareSlug(normalizedMarkerId);
        if(!target) return false;

        isolatedMarkerIds = options.isolate === false ? new Set() : new Set([target.id]);
        query = String(target.name || '').trim();
        if(elements.search){
            elements.search.value = query;
            elements.search.disabled = Boolean(isolatedMarkerIds.size);
        }
        if(elements.clearSearch) elements.clearSearch.disabled = Boolean(isolatedMarkerIds.size);
        if(floor !== target.floor) setFloor(target.floor, false);
        selectedMarker = target;
        selectedMarkerMediaOverride = options.image
            ? { src: String(options.image), alt: String(options.imageAlt || target.name || '') }
            : null;
        selectedMarkerDetailsOverride = options.details && typeof options.details === 'object'
            ? { ...options.details }
            : null;
        await waitForViewportLayout();
        centerAt(target.positionX, target.positionY, Number(options.zoom) || 3);
        render();
        return true;
    }

    function getPokemonRespawnMarkers(pokemonName, pokemonDex){
        const normalizedName = normalizeRespawnPokemonName(pokemonName);
        const huntMarkers = markers.filter(marker => getCategory(marker)?.slug === 'hunt');
        const nameMatches = normalizedName
            ? huntMarkers.filter(marker => normalizeRespawnPokemonName(marker?.name) === normalizedName)
            : [];
        if(nameMatches.length) return nameMatches;

        const normalizedDex = Number.parseInt(pokemonDex, 10);
        if(!Number.isFinite(normalizedDex) || normalizedDex <= 0) return [];
        return huntMarkers.filter(marker => Number.parseInt(marker?.details?.dexNumber, 10) === normalizedDex);
    }

    async function focusPokemonRespawns(pokemonName, options = {}){
        await initialize();
        const targets = getPokemonRespawnMarkers(pokemonName, options.dex);
        if(!targets.length) return false;

        const floorCounts = new Map();
        targets.forEach(target => {
            const targetFloor = Number(target.floor);
            floorCounts.set(targetFloor, (floorCounts.get(targetFloor) || 0) + 1);
        });
        const targetFloor = Array.from(floorCounts.entries())
            .sort((left, right) => right[1] - left[1] || right[0] - left[0])[0][0];
        const visibleTargets = targets.filter(target => Number(target.floor) === targetFloor);
        const positionX = (Math.min(...visibleTargets.map(target => Number(target.positionX)))
            + Math.max(...visibleTargets.map(target => Number(target.positionX)))) / 2;
        const positionY = (Math.min(...visibleTargets.map(target => Number(target.positionY)))
            + Math.max(...visibleTargets.map(target => Number(target.positionY)))) / 2;

        isolatedMarkerIds = new Set(targets.map(target => target.id));
        query = String(pokemonName || '').trim();
        selectedMarker = visibleTargets.find(target => Array.isArray(getMarkerTerritory(target))) || visibleTargets[0];
        selectedMarkerMediaOverride = null;
        selectedMarkerDetailsOverride = null;
        if(elements.search){
            elements.search.value = query;
            elements.search.disabled = true;
        }
        if(elements.clearSearch) elements.clearSearch.disabled = true;
        setFloor(targetFloor, false);
        await waitForViewportLayout();
        centerAt(positionX, positionY, Number(options.zoom) || 3);
        render();
        return true;
    }

    function clearMarkerIsolation(){
        if(!isolatedMarkerIds.size) return false;
        isolatedMarkerIds = new Set();
        query = '';
        selectedMarker = null;
        selectedMarkerMediaOverride = null;
        selectedMarkerDetailsOverride = null;
        if(elements.search){
            elements.search.value = '';
            elements.search.disabled = false;
        }
        if(elements.clearSearch) elements.clearSearch.disabled = false;
        render();
        return true;
    }

    async function copyMarkerLink(marker, button){
        const path = `/mapa-interativo/${getMarkerShareSlug(marker)}`;
        history.pushState(null, '', path);
        const url = new URL(path, location.origin).href;
        try{
            await navigator.clipboard.writeText(url);
        }catch(error){
            const field = document.createElement('textarea');
            field.value = url;
            field.style.position = 'fixed';
            field.style.opacity = '0';
            document.body.appendChild(field);
            field.select();
            document.execCommand('copy');
            field.remove();
        }
        button.textContent = 'Link copiado';
        window.setTimeout(() => {
            if(button.isConnected) button.textContent = 'Criar Link';
        }, 1800);
    }

    function getShareCoordinates(position){
        const config = getFloor();
        const coordinateX = Math.max(1, Math.min(Math.ceil(config.h / SHARE_GRID_SIZE), Math.floor((config.h - position.y) / SHARE_GRID_SIZE) + 1));
        const coordinateY = Math.max(1, Math.min(Math.ceil(config.w / SHARE_GRID_SIZE), Math.floor(position.x / SHARE_GRID_SIZE) + 1));
        const coordinateZ = FLOOR_CONFIG.findIndex(entry => entry.z === floor) + 1;
        return { coordinateX, coordinateY, coordinateZ };
    }

    async function copySharedPinLink(position){
        const { coordinateX, coordinateY, coordinateZ } = getShareCoordinates(position);
        const compactCoordinate = `${PIXEL_SHARE_ROUTE_PREFIX}-${coordinateX}-${coordinateY}-${coordinateZ}-${Math.round(scale * 100)}`;
        const path = `/mapa-interativo/${compactCoordinate}`;
        const url = new URL(path, location.origin);
        history.pushState(null, '', path);
        try{
            await navigator.clipboard.writeText(url.href);
        }catch(error){
            const field = document.createElement('textarea');
            field.value = url.href;
            field.style.position = 'fixed';
            field.style.opacity = '0';
            document.body.appendChild(field);
            field.select();
            document.execCommand('copy');
            field.remove();
        }
        const label = elements.shareView.querySelector('span:last-child');
        if(label) label.textContent = 'Link copiado';
        elements.shareView.classList.remove('is-placing');
        window.setTimeout(() => {
            if(label?.isConnected) label.textContent = 'Compartilhar visão';
        }, 1800);
    }

    function toggleSharedPinPlacement(){
        placingSharedPin = !placingSharedPin;
        elements.viewport.classList.toggle('is-placing-pin', placingSharedPin);
        elements.shareView.classList.toggle('is-placing', placingSharedPin);
        const label = elements.shareView.querySelector('span:last-child');
        if(label) label.textContent = placingSharedPin ? 'Clique no mapa' : 'Compartilhar visão';
    }

    function placeSharedPin(event){
        const config = getFloor();
        const viewportRect = elements.viewport.getBoundingClientRect();
        const rawPosition = {
            x: (event.clientX - viewportRect.left - translateX) / scale,
            y: config.h - ((event.clientY - viewportRect.top - translateY) / scale)
        };
        const { coordinateX, coordinateY } = getShareCoordinates(rawPosition);
        sharedPin = {
            floor,
            positionX: (coordinateY - 0.5) * SHARE_GRID_SIZE,
            positionY: config.h - ((coordinateX - 0.5) * SHARE_GRID_SIZE)
        };
        placingSharedPin = false;
        elements.viewport.classList.remove('is-placing-pin');
        renderSharedPin();
        copySharedPinLink({
            x: sharedPin.positionX,
            y: sharedPin.positionY
        });
    }

    function appendDetailRow(parent, label, value){
        if(value === undefined || value === null || value === '') return;
        const row = document.createElement('div');
        row.className = 'interactive-map-detail__row';
        const key = document.createElement('span');
        key.textContent = label;
        const content = document.createElement('strong');
        content.textContent = String(value);
        row.append(key, content);
        parent.appendChild(row);
    }

    function getMarkerPokemon(marker){
        if(getCategory(marker)?.slug !== 'hunt') return null;
        const markerKey = normalizePokemonName(marker?.name);
        const catalogKey = MAP_POKEMON_NAME_ALIASES[markerKey] || markerKey;
        return pokemonCatalogByName.get(catalogKey) || null;
    }

    function getMarkerFossilPokemon(marker){
        if(getCategory(marker)?.slug !== 'fosseis') return [];
        const fossilNames = String(marker?.name || '')
            .split(/\s+-\s+/)
            .slice(1)
            .join(' - ')
            .split(',')
            .map(name => name.trim())
            .filter(Boolean);
        return fossilNames
            .map(name => pokemonCatalogByName.get(normalizePokemonName(name)))
            .filter(Boolean);
    }

    function getSelectedMarkerPokemon(){
        return getMarkerPokemon(selectedMarker);
    }

    function getPokemonCaptureAverages(entry){
        if(!entry) return null;
        const specialTags = Array.isArray(entry.specialTags) ? entry.specialTags : [];
        const normalAvailable = entry.normalCaptureAvailable !== false && !specialTags.includes('pack');
        const shinyAvailable = entry.shinyCaptureAvailable !== false && !specialTags.includes('pack');
        const normalUltra = normalAvailable && Number(entry.price) > 0
            ? Math.ceil(Number(entry.price) / 130)
            : null;
        const shinyLevel = specialTags.includes('ace')
            ? 'ace'
            : specialTags.includes('pre-ace')
                ? 'pre'
                : Number(entry.level);
        const shinyElemental = shinyAvailable
            ? Number(SHINY_ELEMENTAL_AVERAGES[shinyLevel] || 0) || null
            : null;
        return { normalUltra, shinyElemental };
    }

    function renderDetails(){
        if(!elements.detail) return;
        if(!selectedMarker){
            const requestedMarker = getMarkerByShareSlug(getRequestedMarkerSlug());
            if(requestedMarker && Number(requestedMarker.floor) === floor){
                selectedMarker = requestedMarker;
                centerAt(requestedMarker.positionX, requestedMarker.positionY, 0.65);
            }
        }
        if(!selectedMarker){
            elements.detail.hidden = true;
            elements.detail.replaceChildren();
            return;
        }
        const category = getCategory(selectedMarker);
        const close = document.createElement('button');
        close.type = 'button';
        close.className = 'interactive-map-detail__close';
        close.textContent = '×';
        close.setAttribute('aria-label', 'Fechar detalhes');
        close.addEventListener('click', () => {
            selectedMarker = null;
            clearRequestedMarkerRoute();
            renderSelection();
        });

        const header = document.createElement('div');
        header.className = 'interactive-map-detail__header';
        const eyebrow = document.createElement('span');
        eyebrow.className = 'interactive-map-detail__eyebrow';
        eyebrow.textContent = category.label || 'Marcação';
        const title = document.createElement('h3');
        title.textContent = selectedMarker.name || 'Local';
        header.append(eyebrow, title, close);

        const media = document.createElement('div');
        media.className = 'interactive-map-detail__media';
        const portalMeta = getHoopaPortalMeta(selectedMarker);
        const catalogPokemon = getSelectedMarkerPokemon();
        const catalogPokemonImage = category.slug === 'hunt'
            ? String(catalogPokemon?.image || '').trim()
            : '';
        const markerIconSource = String(selectedMarker.icon || '').trim();
        const detailImageSource = String(
            selectedMarkerMediaOverride?.src
            || portalMeta?.image
            || catalogPokemonImage
            || markerIconSource
            || ''
        ).trim();
        if(detailImageSource){
            const image = document.createElement('img');
            image.src = detailImageSource.startsWith('/uploads/')
                ? `https://pstory.mapdex.online${detailImageSource}`
                : detailImageSource;
            image.alt = selectedMarkerMediaOverride?.alt
                || (portalMeta ? `Mega ${String(selectedMarker.name || '').replace(/^Hoopa Portal\s*-\s*/i, '')}` : selectedMarker.name)
                || '';
            image.addEventListener('error', () => {
                const fallbackSource = markerIconSource.startsWith('/uploads/')
                    ? `https://pstory.mapdex.online${markerIconSource}`
                    : markerIconSource;
                if(fallbackSource && image.dataset.fallback !== 'true'){
                    image.dataset.fallback = 'true';
                    image.src = fallbackSource;
                    return;
                }
                image.remove();
            });
            media.appendChild(image);
        }

        const rows = document.createElement('div');
        rows.className = 'interactive-map-detail__rows';
        appendDetailRow(rows, 'Andar', getFloor().label);
        const details = {
            ...(selectedMarker.details || {}),
            ...(selectedMarkerDetailsOverride || {})
        };
        appendDetailRow(rows, 'Pokédex', details.dexNumber);
        appendDetailRow(rows, 'Tipo', details.types ? String(details.types).split(',').map(type => TYPE_LABELS[normalize(type)] || type).join(' / ') : '');
        const captureAverages = getPokemonCaptureAverages(getSelectedMarkerPokemon());
        appendDetailRow(rows, 'Média de Ultra Balls', captureAverages?.normalUltra);
        appendDetailRow(rows, 'Média de Elementais (Shiny)', captureAverages?.shinyElemental);
        Object.entries(details).forEach(([key, value]) => {
            if(['dexNumber', 'types'].includes(key) || value === '' || value === null) return;
            appendDetailRow(rows, key, Array.isArray(value) ? value.join(', ') : value);
        });

        const description = document.createElement('p');
        description.className = 'interactive-map-detail__description';
        description.textContent = selectedMarker.description || 'Sem descrição adicional.';

        const territoryNote = document.createElement('p');
        territoryNote.className = 'interactive-map-detail__territory-note';
        territoryNote.textContent = Array.isArray(getMarkerTerritory(selectedMarker))
            ? 'A área destacada no mapa representa o território deste respawn.'
            : 'Esta marcação não possui uma área de território cadastrada.';

        const actions = document.createElement('div');
        actions.className = 'interactive-map-detail__actions';
        if(catalogPokemon){
            const pokemonInfo = document.createElement('button');
            pokemonInfo.type = 'button';
            pokemonInfo.className = 'interactive-map-detail__pokemon-info';
            pokemonInfo.textContent = 'Ver Pokémon';
            pokemonInfo.addEventListener('click', async () => {
                const openModal = window.openPokemonDetailsModalByName;
                if(typeof openModal !== 'function') return;
                pokemonInfo.disabled = true;
                pokemonInfo.textContent = 'Carregando...';
                try{
                    const opened = await openModal(catalogPokemon.name);
                    if(!opened) pokemonInfo.textContent = 'Indisponível';
                }catch(error){
                    console.error('Não foi possível abrir as informações do Pokémon.', error);
                    pokemonInfo.textContent = 'Tentar novamente';
                }finally{
                    pokemonInfo.disabled = false;
                    if(pokemonInfo.textContent === 'Carregando...') pokemonInfo.textContent = 'Ver Pokémon';
                }
            });
            actions.appendChild(pokemonInfo);
        }
        const share = document.createElement('button');
        share.type = 'button';
        share.className = 'interactive-map-detail__share';
        share.textContent = 'Criar Link';
        share.addEventListener('click', () => copyMarkerLink(selectedMarker, share));
        actions.appendChild(share);

        elements.detail.replaceChildren(header, media, rows, description, territoryNote, actions);
        elements.detail.hidden = false;
    }

    function applyTransformNow(){
        if(!elements.image) return;
        elements.image.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
        if(elements.zoomValue) elements.zoomValue.textContent = `${Math.round(scale * 100)}%`;
        renderMarkers(false);
        updateTerritoryGeometry();
    }

    function updateTransform(){
        if(!elements.image || transformFrame) return;
        transformFrame = requestAnimationFrame(() => {
            transformFrame = 0;
            applyTransformNow();
        });
    }

    function updateDragPreview(){
        if(!dragStart || dragPreviewFrame) return;
        dragPreviewFrame = requestAnimationFrame(() => {
            dragPreviewFrame = 0;
            if(!dragStart) return;
            const deltaX = translateX - dragStart.tx;
            const deltaY = translateY - dragStart.ty;
            elements.image.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
            const layerTransform = `translate3d(${deltaX}px, ${deltaY}px, 0)`;
            elements.markers.style.transform = layerTransform;
            elements.labels.style.transform = layerTransform;
            elements.territory.style.transform = layerTransform;
        });
    }

    function clearDragPreview(){
        if(dragPreviewFrame){
            cancelAnimationFrame(dragPreviewFrame);
            dragPreviewFrame = 0;
        }
        elements.markers.style.transform = '';
        elements.labels.style.transform = '';
        elements.territory.style.transform = '';
    }

    function centerAt(positionX, positionY, requestedScale){
        const config = getFloor();
        const viewportRect = elements.viewport.getBoundingClientRect();
        if(Number.isFinite(requestedScale)) scale = Math.min(MAX_ZOOM, Math.max(0.06, requestedScale));
        translateX = (viewportRect.width / 2) - (positionX * scale);
        translateY = (viewportRect.height / 2) - ((config.h - positionY) * scale);
        updateTransform();
    }

    function resetView(){
        const config = getFloor();
        const palletLabel = floor === 7
            ? labels.find(label => normalize(label.name) === 'pallet')
            : null;
        if(palletLabel){
            centerAt(palletLabel.positionX, palletLabel.positionY, 1);
            return;
        }
        const viewportRect = elements.viewport.getBoundingClientRect();
        const fitScale = Math.min(
            Math.max(0.06, (viewportRect.width - 24) / config.w),
            Math.max(0.06, (viewportRect.height - 24) / config.h)
        );
        const initialX = config.w / 2;
        const initialY = config.h / 2;
        centerAt(initialX, initialY, Math.min(0.22, fitScale * 2.15));
    }

    function getViewportCenterPosition(){
        const config = getFloor();
        const viewportRect = elements.viewport.getBoundingClientRect();
        return {
            x: ((viewportRect.width / 2) - translateX) / scale,
            y: config.h - (((viewportRect.height / 2) - translateY) / scale),
            scale
        };
    }

    function setZoom(nextScale, anchorX, anchorY){
        const rect = elements.viewport.getBoundingClientRect();
        const localX = Number.isFinite(anchorX) ? anchorX - rect.left : rect.width / 2;
        const localY = Number.isFinite(anchorY) ? anchorY - rect.top : rect.height / 2;
        const worldX = (localX - translateX) / scale;
        const worldY = (localY - translateY) / scale;
        scale = Math.min(MAX_ZOOM, Math.max(0.06, nextScale));
        translateX = localX - (worldX * scale);
        translateY = localY - (worldY * scale);
        updateTransform();
    }

    function setFloor(nextFloor, preserveView = true){
        const config = FLOOR_CONFIG.find(entry => entry.z === Number(nextFloor));
        if(!config) return;
        const savedView = preserveView ? getViewportCenterPosition() : null;
        floor = config.z;
        if(Number(selectedMarker?.floor) !== config.z) selectedMarker = null;
        elements.viewport.classList.toggle('is-surface', config.z === 7);
        elements.floorValue.textContent = config.label;
        elements.floorSelect.value = String(config.z);
        elements.image.src = `mapa-interativo/assets/minimap-v1.0.0_z${config.z}.png?v=${MAP_IMAGE_VERSION}`;
        elements.image.width = config.w;
        elements.image.height = config.h;
        elements.image.alt = `Mapa do andar ${config.label}`;
        if(savedView){
            centerAt(savedView.x, savedView.y, savedView.scale);
        }else{
            resetView();
        }
        renderDetails();
    }

    function render(){
        renderCategoryFilters();
        renderMarkers();
        renderTerritory();
        renderDetails();
    }

    function renderSelection(){
        renderMarkers(false);
        renderTerritory();
        renderDetails();
    }

    function bindControls(){
        elements.search.addEventListener('input', () => {
            query = elements.search.value || '';
            selectedMarker = null;
            render();
        });
        elements.clearSearch.addEventListener('click', () => {
            elements.search.value = '';
            query = '';
            selectedMarker = null;
            render();
            elements.search.focus();
        });
        elements.showAll.addEventListener('click', () => {
            hiddenCategories.clear();
            saveHiddenCategories();
            render();
        });
        elements.hideAll.addEventListener('click', () => {
            hiddenCategories = new Set(categories.filter(category => !category.comingSoon).map(category => category.id));
            saveHiddenCategories();
            selectedMarker = null;
            render();
        });
        elements.zoomIn.addEventListener('click', () => setZoom(scale * 1.25));
        elements.zoomOut.addEventListener('click', () => setZoom(scale / 1.25));
        elements.reset.addEventListener('click', resetView);
        elements.floorUp.addEventListener('click', () => setFloor(floor - 1));
        elements.floorDown.addEventListener('click', () => setFloor(floor + 1));
        elements.floorSelect.addEventListener('change', () => setFloor(elements.floorSelect.value));
        elements.shareView.addEventListener('click', toggleSharedPinPlacement);
        elements.viewport.addEventListener('wheel', event => {
            event.preventDefault();
            setZoom(scale * (event.deltaY < 0 ? 1.14 : 0.88), event.clientX, event.clientY);
        }, { passive: false });
        elements.viewport.addEventListener('pointerdown', event => {
            if(event.button !== 0 || event.target.closest('.interactive-map-detail')) return;
            if(placingSharedPin){
                event.preventDefault();
                placeSharedPin(event);
                return;
            }
            if(event.target.closest('.interactive-map-marker')) return;
            if(transformFrame){
                cancelAnimationFrame(transformFrame);
                transformFrame = 0;
            }
            applyTransformNow();
            dragging = true;
            dragStart = { x: event.clientX, y: event.clientY, tx: translateX, ty: translateY };
            elements.viewport.setPointerCapture(event.pointerId);
            elements.viewport.classList.add('is-dragging');
        });
        elements.viewport.addEventListener('pointermove', event => {
            if(!dragging || !dragStart) return;
            translateX = dragStart.tx + event.clientX - dragStart.x;
            translateY = dragStart.ty + event.clientY - dragStart.y;
            updateDragPreview();
        });
        const stopDrag = () => {
            if(!dragging) return;
            dragging = false;
            clearDragPreview();
            dragStart = null;
            elements.viewport.classList.remove('is-dragging');
            if(transformFrame){
                cancelAnimationFrame(transformFrame);
                transformFrame = 0;
            }
            applyTransformNow();
        };
        elements.viewport.addEventListener('pointerup', stopDrag);
        elements.viewport.addEventListener('pointercancel', stopDrag);
        elements.detail.addEventListener('pointerdown', event => {
            if(event.button !== 0 || !event.target.closest('.interactive-map-detail__header') || event.target.closest('button')) return;
            const viewportRect = elements.viewport.getBoundingClientRect();
            const detailRect = elements.detail.getBoundingClientRect();
            detailDragging = true;
            detailDragStart = {
                pointerX: event.clientX,
                pointerY: event.clientY,
                left: detailRect.left - viewportRect.left,
                top: detailRect.top - viewportRect.top
            };
            elements.detail.style.left = `${detailDragStart.left}px`;
            elements.detail.style.top = `${detailDragStart.top}px`;
            elements.detail.classList.add('is-dragging');
            elements.detail.setPointerCapture(event.pointerId);
            event.preventDefault();
        });
        elements.detail.addEventListener('pointermove', event => {
            if(!detailDragging || !detailDragStart) return;
            const maxLeft = Math.max(0, elements.viewport.clientWidth - elements.detail.offsetWidth);
            const maxTop = Math.max(0, elements.viewport.clientHeight - elements.detail.offsetHeight);
            const nextLeft = Math.min(maxLeft, Math.max(0, detailDragStart.left + event.clientX - detailDragStart.pointerX));
            const nextTop = Math.min(maxTop, Math.max(0, detailDragStart.top + event.clientY - detailDragStart.pointerY));
            elements.detail.style.left = `${nextLeft}px`;
            elements.detail.style.top = `${nextTop}px`;
        });
        const stopDetailDrag = () => {
            detailDragging = false;
            detailDragStart = null;
            elements.detail.classList.remove('is-dragging');
        };
        elements.detail.addEventListener('pointerup', stopDetailDrag);
        elements.detail.addEventListener('pointercancel', stopDetailDrag);
        elements.viewport.addEventListener('click', event => {
            if(event.target === elements.viewport || event.target === elements.mapStage){
                selectedMarker = null;
                clearRequestedMarkerRoute();
                renderSelection();
            }
        });
        window.addEventListener('resize', () => {
            if(!byId('content-mapa-interativo')?.hidden) resetView();
        });
    }

    async function loadData(){
        const responses = await Promise.all(Object.values(DATA_URLS).map(url => fetch(url)));
        if(responses.some(response => !response.ok)) throw new Error('Falha ao carregar os dados do mapa.');
        const [categoryRoot, labelRoot, markerRoot, bossesInfoRoot, ligaPokemonRoot, rangerBossesRoot, pokemonRoot] = await Promise.all(responses.map(response => response.json()));
        categories = Array.isArray(categoryRoot.categories) ? categoryRoot.categories : [];
        if(!categories.some(category => category.id === MANIACS_MAP_CATEGORY.id)){
            categories.push(MANIACS_MAP_CATEGORY);
        }
        if(bossesInfoRoot?.category && !categories.some(category => category.id === bossesInfoRoot.category.id)){
            categories.push(bossesInfoRoot.category);
        }
        if(ligaPokemonRoot?.category && !categories.some(category => category.id === ligaPokemonRoot.category.id)){
            categories.push(ligaPokemonRoot.category);
        }
        if(rangerBossesRoot?.category && !categories.some(category => category.id === rangerBossesRoot.category.id)){
            categories.push(rangerBossesRoot.category);
        }
        labels = Array.isArray(labelRoot.labels) ? labelRoot.labels : [];
        markers = Array.isArray(markerRoot.markers) ? markerRoot.markers : [];
        markers.forEach(marker => {
            if(!String(marker?.id || '').startsWith('poke-utilities-maniac-')) return;
            marker.categoryId = MANIACS_MAP_CATEGORY.id;
            marker.category = MANIACS_MAP_CATEGORY;
        });
        if(Array.isArray(bossesInfoRoot?.markers)) markers.push(...bossesInfoRoot.markers);
        if(Array.isArray(ligaPokemonRoot?.markers)) markers.push(...ligaPokemonRoot.markers);
        if(Array.isArray(rangerBossesRoot?.markers)) markers.push(...rangerBossesRoot.markers);
        markersById = new Map(markers.map(marker => [marker.id, marker]));
        pokemonCatalog = Array.isArray(pokemonRoot.pokemon) ? pokemonRoot.pokemon : [];
        pokemonCatalogByName = new Map(
            pokemonCatalog.map(entry => [normalizePokemonName(entry.name), entry])
        );
    }

    function cacheElements(){
        Object.assign(elements, {
            categories: byId('interactive-map-categories'),
            filterActions: document.querySelector('#content-mapa-interativo .interactive-map-filter-actions'),
            search: byId('interactive-map-search'),
            clearSearch: byId('interactive-map-search-clear'),
            showAll: byId('interactive-map-show-all'),
            hideAll: byId('interactive-map-hide-all'),
            viewport: byId('interactive-map-viewport'),
            mapStage: byId('interactive-map-stage'),
            image: byId('interactive-map-image'),
            markers: byId('interactive-map-markers'),
            labels: byId('interactive-map-labels'),
            territory: byId('interactive-map-territory'),
            detail: byId('interactive-map-detail'),
            summary: byId('interactive-map-summary'),
            zoomIn: byId('interactive-map-zoom-in'),
            zoomOut: byId('interactive-map-zoom-out'),
            zoomValue: byId('interactive-map-zoom-value'),
            reset: byId('interactive-map-reset'),
            floorUp: byId('interactive-map-floor-up'),
            floorDown: byId('interactive-map-floor-down'),
            floorValue: byId('interactive-map-floor-value'),
            floorSelect: byId('interactive-map-floor-select'),
            shareView: byId('interactive-map-share-view'),
            status: byId('interactive-map-status')
        });
    }

    async function initialize(){
        if(initialized) return;
        if(loadingPromise) return loadingPromise;
        loadingPromise = (async () => {
            cacheElements();
            if(!elements.viewport) return;
            readHiddenCategories();
            await loadData();
            FLOOR_CONFIG.forEach(config => {
                const option = document.createElement('option');
                option.value = String(config.z);
                option.textContent = `Andar ${config.label}`;
                elements.floorSelect.appendChild(option);
            });
            bindControls();
            initialized = true;
            elements.status.hidden = true;
            const requestedMarkerSlug = getRequestedMarkerSlug();
            const requestedMarker = getMarkerByShareSlug(requestedMarkerSlug);
            const sharedView = requestedMarker ? null : getSharedViewFromUrl();
            if(requestedMarker){
                setFloor(requestedMarker.floor, false);
                selectedMarker = requestedMarker;
                await waitForViewportLayout();
                centerAt(requestedMarker.positionX, requestedMarker.positionY, 0.65);
                render();
            }else if(sharedView){
                setFloor(sharedView.floor, false);
                if(sharedView.showPin){
                    sharedPin = {
                        floor: sharedView.floor,
                        positionX: sharedView.x,
                        positionY: sharedView.y
                    };
                }
                await waitForViewportLayout();
                centerAt(sharedView.x, sharedView.y, sharedView.scale);
                render();
            }else{
                setFloor(7, false);
                render();
            }
        })().catch(error => {
            console.error('Interactive map initialization failed', error);
            if(elements.status){
                elements.status.hidden = false;
                elements.status.textContent = 'Não foi possível carregar o mapa interativo.';
            }
            throw error;
        }).finally(() => {
            loadingPromise = null;
        });
        return loadingPromise;
    }

    window.initInteractiveMapPage = initialize;
    window.focusInteractiveMapRoute = focusRequestedMarker;
    window.focusInteractiveMapSearch = focusSearchTarget;
    window.focusInteractiveMapMarker = focusMarkerTarget;
    window.focusInteractiveMapPokemonRespawns = focusPokemonRespawns;
    window.clearInteractiveMapIsolation = clearMarkerIsolation;
    window.refreshInteractiveMapPage = function(){
        if(!initialized) return initialize();
        requestAnimationFrame(() => {
            render();
        });
        return Promise.resolve();
    };
})();
