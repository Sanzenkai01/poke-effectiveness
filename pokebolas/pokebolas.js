(() => {
    const materialsPerCraft = Object.freeze({
        blueprint: 1,
        emptyBall: 25,
        stone: 10,
        drop: 20
    });
    const recipes = Object.freeze([
        { name: 'Cherish Ball', type: 'Fire', image: 'balls/cherish.png', item: 'Mini Volcan', stone: 'Fire Stone', stoneImage: 'calculadora/fire_stone.gif', pokemon: [{ name: 'Camerupt', image: 'pokemons/3gen/camerupt.png' }] },
        { name: 'Draco Ball', type: 'Dragon', image: 'balls/draco.png', item: 'Cloud', stone: 'Dragon Stone', stoneImage: 'calculadora/dragon_stone.gif', pokemon: [{ name: 'Altaria', image: 'pokemons/3gen/altaria.png' }, { name: 'Swablu', image: 'pokemons/3gen/swablu.png' }] },
        { name: 'Dream Ball', type: 'Psychic', image: 'balls/dream.png', item: 'Springs', stone: 'Enigma Stone', stoneImage: 'calculadora/enigma_stone.gif', pokemon: [{ name: 'Spoink', image: 'pokemons/3gen/spoink.png' }, { name: 'Grumpig', image: 'pokemons/3gen/grumpig.png' }] },
        { name: 'Dusk Ball', type: 'Ghost', image: 'balls/dusk.png', item: 'Doll Star', stone: 'Darkness Stone', stoneImage: 'calculadora/darkness_stone.png', pokemon: [{ name: 'Banette', image: 'pokemons/3gen/banette.png' }, { name: 'Shuppet', image: 'pokemons/3gen/shuppet.png' }] },
        { name: 'Dust Ball', type: 'Earth', image: 'balls/dust.png', item: 'Nudibranch Back West', stone: 'Earth Stone', stoneImage: 'calculadora/earth_stone.gif', pokemon: [{ name: 'Shellos West', dex: 422, image: 'pokemons/4gen/shellos-west.png' }, { name: 'Gastrodon West', dex: 423, image: 'pokemons/4gen/gastrodon-west.png' }] },
        { name: 'Frost Ball', type: 'Ice', image: 'balls/frost.png', item: 'Ice Blocks', stone: 'Ice Stone', stoneImage: 'calculadora/ice_stone.png', pokemon: [{ name: 'Glalie', image: 'pokemons/3gen/glalie.png' }, { name: 'Snorunt', image: 'pokemons/3gen/snorunt.png' }] },
        { name: 'Heavy Ball', type: 'Steel', image: 'balls/heavy.png', item: 'Metal Jaw', stone: 'Metal Stone', stoneImage: 'calculadora/metal_stone.png', pokemon: [{ name: 'Mawile', image: 'pokemons/3gen/mawile.png' }] },
        { name: 'Jungle Ball', type: 'Grass', image: 'balls/jungle.png', item: 'Fungi Helm', stone: 'Leaf Stone', stoneImage: 'calculadora/leaf_stone.gif', pokemon: [{ name: 'Breloom', image: 'pokemons/3gen/breloom.png' }] },
        { name: 'Love Ball', type: 'Fairy', image: 'balls/love.png', item: 'Cure Flower', stone: 'Fairy Stone', stoneImage: 'calculadora/fairy_stone.gif', pokemon: [{ name: 'Gardevoir', image: 'pokemons/3gen/gardevoir.png' }, { name: 'Kirlia', image: 'pokemons/3gen/kirlia.png' }, { name: 'Ralts', image: 'pokemons/3gen/ralts.png' }] },
        { name: 'Lure Ball', type: 'Water', image: 'balls/lure.png', item: 'Water Plant', stone: 'Water Stone', stoneImage: 'calculadora/water_stone.gif', pokemon: [{ name: 'Lotad', image: 'pokemons/3gen/lotad.png' }, { name: 'Lombre', image: 'pokemons/3gen/lombre.png' }, { name: 'Ludicolo', image: 'pokemons/3gen/ludicolo.png' }] },
        { name: 'Nest Ball', type: 'Fly', image: 'balls/nest.png', item: 'Starling Top', stone: 'Feather Stone', stoneImage: 'calculadora/feather_stone.gif', pokemon: [{ name: 'Staraptor', image: 'pokemons/4gen/staraptor.png' }] },
        { name: 'Net Ball', type: 'Bug', image: 'balls/net.png', item: 'Moth Wings', stone: 'Cocoon Stone', stoneImage: 'calculadora/cocoon_stone.gif', pokemon: [{ name: 'Mothim', image: 'pokemons/4gen/mothim.png' }] },
        { name: 'Quick Ball', type: 'Electric', image: 'balls/quick.png', item: 'Star-Shaped Tail', stone: 'Thunder Stone', stoneImage: 'calculadora/thunder_stone.png', pokemon: [{ name: 'Luxray', image: 'pokemons/4gen/luxray.png' }] },
        { name: 'Repeat Ball', type: 'Fight', image: 'balls/repeat.png', item: 'Blade Horn', stone: 'Punch Stone', stoneImage: 'calculadora/punch_stone.png', pokemon: [{ name: 'Gallade', image: 'pokemons/4gen/gallade.png' }] },
        { name: 'Sport Ball', type: 'Normal', image: 'balls/sport.png', item: 'Tribe Mask', stone: 'Brave Stone', stoneImage: 'calculadora/brave_stone.png', pokemon: [{ name: 'Zangoose', image: 'pokemons/3gen/zangoose.png' }] },
        { name: 'Stone Ball', type: 'Rock', image: 'balls/stone.png', item: "Moai's Forehhead", stone: 'Rock Stone', stoneImage: 'calculadora/rock_stone.gif', pokemon: [{ name: 'Nosepass', image: 'pokemons/3gen/nosepass.png' }, { name: 'Probopass', image: 'pokemons/4gen/probopass.png' }] },
        { name: 'Vile Ball', type: 'Poison', image: 'balls/vile.png', item: 'Poisonous Tail', stone: 'Venom Stone', stoneImage: 'calculadora/venom_stone.gif', pokemon: [{ name: 'Seviper', image: 'pokemons/3gen/seviper.png' }] }
    ]);
    const maxBallCount = Math.floor(Number.MAX_SAFE_INTEGER / materialsPerCraft.emptyBall) * materialsPerCraft.emptyBall;
    const numberFormat = new Intl.NumberFormat('pt-BR');

    function createElement(tagName, className, text) {
        const element = document.createElement(tagName);
        if (className) element.className = className;
        if (text !== undefined) element.textContent = text;
        return element;
    }

    function createImage(src, alt, className) {
        const image = createElement('img', className);
        image.src = src;
        image.alt = alt;
        image.loading = 'lazy';
        image.decoding = 'async';
        return image;
    }

    function appendMaterial(list, label, quantity, imagePath, imageAlt) {
        const item = createElement('li', 'pokebolas-recipe__material');
        const icon = imagePath
            ? createImage(imagePath, imageAlt)
            : createElement('span', 'pokebolas-recipe__material-icon');
        if (!imagePath) icon.setAttribute('aria-hidden', 'true');
        item.append(
            icon,
            createElement('span', '', label),
            createElement('strong', '', numberFormat.format(quantity))
        );
        list.append(item);
    }

    function renderRecipes(grid, select, optionList, feedback, onSelectBall) {
        recipes.forEach((recipe, index) => {
            const option = createElement('option', '', `${recipe.name} (${recipe.type})`);
            option.value = String(index);
            select.append(option);

            const pickerOption = createElement('div', 'pokebolas-ball-picker__option');
            pickerOption.id = `pokebolas-ball-option-${index}`;
            pickerOption.setAttribute('role', 'option');
            pickerOption.setAttribute('aria-selected', 'false');
            pickerOption.append(
                createImage(recipe.image, '', 'pokebolas-ball-picker__image'),
                createElement('span', '', `${recipe.name} (${recipe.type})`)
            );
            pickerOption.addEventListener('pointerdown', event => event.preventDefault());
            pickerOption.addEventListener('click', () => onSelectBall(index));
            optionList.append(pickerOption);

            const card = createElement('article', 'pokebolas-recipe');
            const header = createElement('header', 'pokebolas-recipe__header');
            header.append(
                createImage(recipe.image, recipe.name, 'pokebolas-recipe__ball'),
            );
            const heading = createElement('div');
            heading.append(
                createElement('h4', 'pokebolas-recipe__title', `${recipe.name} (${recipe.type})`),
                createElement('span', 'pokebolas-recipe__type', 'Pokébola Elemental')
            );
            header.append(heading);

            const materials = createElement('ul', 'pokebolas-recipe__materials');
            appendMaterial(materials, 'Blueprint da Pokébola', materialsPerCraft.blueprint, 'pokebolas/blueprint.png', 'Blueprint da Pokébola');
            appendMaterial(materials, 'Story Balls', materialsPerCraft.emptyBall, 'balls/story.png', 'Story Ball');
            appendMaterial(materials, recipe.stone, materialsPerCraft.stone, recipe.stoneImage, recipe.stone);
            appendMaterial(materials, recipe.item, materialsPerCraft.drop, '', '');

            const pokemonList = createElement('ul', 'pokebolas-recipe__pokemon');
            pokemonList.setAttribute('aria-label', `Pokémon que dropam ${recipe.item}`);
            recipe.pokemon.forEach(pokemon => {
                const pokemonEntry = createElement('li');
                const pokemonButton = createElement('button', 'pokebolas-recipe__pokemon-button');
                pokemonButton.type = 'button';
                pokemonButton.setAttribute('aria-label', `Ver localização de ${pokemon.name} no Mapa Interativo`);
                pokemonButton.title = `Ver localização de ${pokemon.name} no Mapa Interativo`;
                pokemonButton.append(
                    createImage(pokemon.image, '', 'pokebolas-recipe__pokemon-image'),
                    createElement('span', '', pokemon.name)
                );
                pokemonButton.addEventListener('click', async () => {
                    const openPokemonRespawns = window.openInteractiveMapPokemonRespawns;
                    if (typeof openPokemonRespawns !== 'function') {
                        feedback.textContent = 'O Mapa Interativo não está disponível no momento.';
                        return;
                    }
                    pokemonButton.disabled = true;
                    try {
                        await openPokemonRespawns({ name: pokemon.name, dex: pokemon.dex, image: pokemon.image }, { trigger: pokemonButton });
                    } catch (error) {
                        console.error(`Não foi possível abrir a localização de ${pokemon.name}.`, error);
                        feedback.textContent = `Não foi possível abrir a localização de ${pokemon.name}. Tente novamente.`;
                    } finally {
                        pokemonButton.disabled = false;
                    }
                });
                pokemonEntry.append(pokemonButton);
                pokemonList.append(pokemonEntry);
            });

            card.append(
                header,
                createElement('p', 'pokebolas-recipe__yield', 'Materiais por 25 Pokébolas'),
                materials,
                createElement('p', 'pokebolas-recipe__drop-label', `Pokémon que dropam ${recipe.item}`),
                pokemonList
            );
            grid.append(card);
        });
    }

    function initPokebolasPage() {
        const root = document.querySelector('.pokebolas-page');
        const form = document.getElementById('pokebolas-simulator-form');
        const select = document.getElementById('pokebolas-select');
        const selectControl = document.getElementById('pokebolas-select-control');
        const selectTrigger = document.getElementById('pokebolas-select-trigger');
        const selectValue = document.getElementById('pokebolas-select-value');
        const optionList = document.getElementById('pokebolas-ball-options');
        const amountInput = document.getElementById('pokebolas-amount');
        const feedback = document.getElementById('pokebolas-page-error');
        const result = document.getElementById('pokebolas-simulator-result');
        const resultTitle = document.getElementById('pokebolas-result-title');
        const resultBall = document.getElementById('pokebolas-result-ball');
        const resultSummary = document.getElementById('pokebolas-result-summary');
        const resultMaterials = document.getElementById('pokebolas-result-materials');
        const grid = document.getElementById('pokebolas-recipe-grid');
        if (!root || !form || !select || !selectControl || !selectTrigger || !selectValue || !optionList || !amountInput || !feedback || !result || !resultTitle || !resultBall || !resultSummary || !resultMaterials || !grid) return;
        if (root.dataset.initialized === 'true') return;
        root.dataset.initialized = 'true';
        amountInput.max = String(maxBallCount);
        let activeOptionIndex = -1;
        document.body.append(optionList);

        const positionPicker = () => {
            if (optionList.hidden) return;
            const triggerRect = selectTrigger.getBoundingClientRect();
            const viewportPadding = 8;
            const menuGap = 6;
            const maxHeight = Math.min(288, window.innerHeight - viewportPadding * 2);
            const spaceBelow = window.innerHeight - triggerRect.bottom - viewportPadding - menuGap;
            const spaceAbove = triggerRect.top - viewportPadding - menuGap;
            const openBelow = spaceBelow >= Math.min(maxHeight, 160) || spaceBelow >= spaceAbove;
            const availableHeight = openBelow ? spaceBelow : spaceAbove;
            const menuHeight = Math.max(0, Math.min(maxHeight, availableHeight));
            const menuWidth = Math.min(triggerRect.width, window.innerWidth - viewportPadding * 2);
            const menuLeft = Math.max(
                viewportPadding,
                Math.min(triggerRect.left, window.innerWidth - menuWidth - viewportPadding)
            );
            const menuTop = openBelow
                ? triggerRect.bottom + menuGap
                : Math.max(viewportPadding, triggerRect.top - menuHeight - menuGap);

            optionList.style.left = `${menuLeft}px`;
            optionList.style.top = `${menuTop}px`;
            optionList.style.width = `${menuWidth}px`;
            optionList.style.maxHeight = `${menuHeight}px`;
        };

        const repositionPicker = () => {
            if (!optionList.hidden) positionPicker();
        };

        const setActiveOption = index => {
            const options = optionList.querySelectorAll('[role="option"]');
            options.forEach((option, optionIndex) => {
                option.classList.toggle('is-active', optionIndex === index);
            });
            activeOptionIndex = index;
            if (index < 0 || !options[index]) {
                selectTrigger.removeAttribute('aria-activedescendant');
                return;
            }
            selectTrigger.setAttribute('aria-activedescendant', options[index].id);
            options[index].scrollIntoView({ block: 'nearest' });
        };

        const closePicker = () => {
            optionList.hidden = true;
            selectTrigger.setAttribute('aria-expanded', 'false');
            window.removeEventListener('resize', repositionPicker);
            window.removeEventListener('scroll', repositionPicker, true);
            setActiveOption(-1);
        };

        const openPicker = () => {
            positionPicker();
            optionList.hidden = false;
            selectTrigger.setAttribute('aria-expanded', 'true');
            positionPicker();
            window.addEventListener('resize', repositionPicker);
            window.addEventListener('scroll', repositionPicker, true);
            const selectedIndex = select.value === '' ? 0 : Number(select.value);
            setActiveOption(selectedIndex);
        };

        const selectBall = index => {
            const recipe = recipes[index];
            if (!recipe) return;
            select.value = String(index);
            selectValue.textContent = `${recipe.name} (${recipe.type})`;
            optionList.querySelectorAll('[role="option"]').forEach((option, optionIndex) => {
                option.setAttribute('aria-selected', String(optionIndex === index));
            });
            closePicker();
            selectTrigger.removeAttribute('aria-invalid');
            selectTrigger.focus();
            select.dispatchEvent(new Event('change', { bubbles: true }));
        };

        renderRecipes(grid, select, optionList, feedback, selectBall);
        selectTrigger.addEventListener('click', () => {
            if (optionList.hidden) openPicker();
            else closePicker();
        });
        selectTrigger.addEventListener('keydown', event => {
            const isExpanded = !optionList.hidden;
            if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
                event.preventDefault();
                if (!isExpanded) {
                    openPicker();
                    return;
                }
                const direction = event.key === 'ArrowDown' ? 1 : -1;
                const nextIndex = (activeOptionIndex + direction + recipes.length) % recipes.length;
                setActiveOption(nextIndex);
            } else if (event.key === 'Home' && isExpanded) {
                event.preventDefault();
                setActiveOption(0);
            } else if (event.key === 'End' && isExpanded) {
                event.preventDefault();
                setActiveOption(recipes.length - 1);
            } else if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                if (!isExpanded) openPicker();
                else if (activeOptionIndex >= 0) selectBall(activeOptionIndex);
            } else if (event.key === 'Escape' && isExpanded) {
                event.preventDefault();
                closePicker();
            }
        });
        selectTrigger.addEventListener('blur', closePicker);
        document.addEventListener('pointerdown', event => {
            if (!selectControl.contains(event.target) && !optionList.contains(event.target)) closePicker();
        });

        let calculationRequested = false;
        const calculate = () => {
            const amount = Number(amountInput.value);
            const recipeIndex = select.value === '' ? -1 : Number(select.value);
            const recipe = recipes[recipeIndex];
            if (!Number.isSafeInteger(amount) || amount < 25 || amount > maxBallCount || amount % materialsPerCraft.emptyBall !== 0) {
                result.hidden = true;
                feedback.textContent = `Informe uma quantidade múltipla de 25, entre 25 e ${numberFormat.format(maxBallCount)}.`;
                amountInput.setAttribute('aria-invalid', 'true');
                return false;
            }
            if (!recipe) {
                result.hidden = true;
                feedback.textContent = 'Selecione uma Pokébola para calcular os materiais.';
                selectTrigger.setAttribute('aria-invalid', 'true');
                return false;
            }

            const crafts = amount / materialsPerCraft.emptyBall;
            const totals = [
                { label: 'Blueprint da Pokébola', quantity: crafts, image: 'pokebolas/blueprint.png', alt: 'Blueprint da Pokébola' },
                { label: 'Story Balls', quantity: crafts * materialsPerCraft.emptyBall, image: 'balls/story.png', alt: 'Story Ball' },
                { label: recipe.stone, quantity: crafts * materialsPerCraft.stone, image: recipe.stoneImage, alt: recipe.stone },
                { label: recipe.item, quantity: crafts * materialsPerCraft.drop, image: '', alt: '' }
            ];
            resultTitle.textContent = `${recipe.name} (${recipe.type})`;
            resultBall.src = recipe.image;
            resultBall.hidden = false;
            resultSummary.textContent = `${numberFormat.format(amount)} desejadas · ${numberFormat.format(crafts)} ${crafts === 1 ? 'craft' : 'crafts'} completos de 25 (rendimento: ${numberFormat.format(crafts * materialsPerCraft.emptyBall)} Pokébolas).`;
            resultMaterials.replaceChildren();
            totals.forEach(material => {
                const row = createElement('li', 'pokebolas-result__material');
                const icon = material.image
                    ? createImage(material.image, material.alt)
                    : createElement('span', 'pokebolas-result__material-icon');
                if (!material.image) icon.setAttribute('aria-hidden', 'true');
                row.append(
                    icon,
                    createElement('span', '', material.label),
                    createElement('strong', '', numberFormat.format(material.quantity))
                );
                resultMaterials.append(row);
            });
            result.hidden = false;
            feedback.textContent = '';
            amountInput.removeAttribute('aria-invalid');
            selectTrigger.removeAttribute('aria-invalid');
            return true;
        };

        form.addEventListener('submit', event => {
            event.preventDefault();
            calculationRequested = true;
            calculate();
        });
        [select, amountInput].forEach(input => {
            input.addEventListener('input', () => {
                input.removeAttribute('aria-invalid');
                if (calculationRequested) calculate();
            });
            input.addEventListener('change', () => {
                input.removeAttribute('aria-invalid');
                if (calculationRequested) calculate();
            });
        });
    }

    window.initPokebolasPage = initPokebolasPage;
})();
