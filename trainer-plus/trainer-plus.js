(() => {
    const LEVELS = Object.freeze([
        { pointsToNext: 40, exp: 0, loot: 0, charm: 0 },
        { pointsToNext: 80, exp: 1, loot: 0, charm: 0 },
        { pointsToNext: 200, exp: 2, loot: 0, charm: 0 },
        { pointsToNext: 380, exp: 4, loot: 0, charm: 0 },
        { pointsToNext: 1500, exp: 7, loot: 0, charm: 0 },
        { pointsToNext: 3800, exp: 10, loot: 0, charm: 0 },
        { pointsToNext: 7600, exp: 10, loot: 0, charm: 2 },
        { pointsToNext: 15200, exp: 10, loot: 0, charm: 5 },
        { pointsToNext: 30400, exp: 10, loot: 0, charm: 10 },
        { pointsToNext: 60800, exp: 10, loot: 4, charm: 10 },
        { pointsToNext: null, exp: 10, loot: 10, charm: 10 }
    ]);
    const initializedPages = new WeakSet();

    function formatBonus(value) {
        return `+${value}%`;
    }

    function createTooltipRow(label, value) {
        const row = document.createElement('span');
        row.className = 'trainer-plus-level__tooltip-row';
        const name = document.createElement('span');
        name.textContent = label;
        const bonus = document.createElement('span');
        bonus.className = 'trainer-plus-level__tooltip-value';
        bonus.textContent = formatBonus(value);
        row.append(name, bonus);
        return row;
    }

    function createLevelButton(level) {
        const button = document.createElement('button');
        button.className = 'trainer-plus-level__segment';
        button.type = 'button';
        button.dataset.level = String(level);
        button.setAttribute('aria-pressed', 'false');

        const tooltip = document.createElement('span');
        tooltip.className = 'trainer-plus-level__tooltip';
        tooltip.id = `trainer-plus-level-tooltip-${level}`;
        tooltip.setAttribute('role', 'tooltip');

        const heading = document.createElement('span');
        heading.className = 'trainer-plus-level__tooltip-heading';
        const title = document.createElement('span');
        title.textContent = `Nível ${level}`;
        const state = document.createElement('span');
        state.className = 'trainer-plus-level__tooltip-state';
        heading.append(title, state);
        tooltip.append(
            heading,
            createTooltipRow('Experiência', LEVELS[level].exp),
            createTooltipRow('Loot', LEVELS[level].loot),
            createTooltipRow('Shiny Charm', LEVELS[level].charm)
        );

        const total = document.createElement('span');
        total.className = 'trainer-plus-level__tooltip-total';
        total.textContent = 'Bônus totais neste nível';
        tooltip.appendChild(total);
        button.appendChild(tooltip);
        button.setAttribute('aria-describedby', tooltip.id);
        return button;
    }

    function initTrainerPlusPage() {
        const page = document.querySelector('.trainer-plus-page');
        if (!page || initializedPages.has(page)) return;

        const levelSelect = page.querySelector('#trainer-plus-level');
        const pointsInput = page.querySelector('#trainer-plus-points');
        const pointsField = page.querySelector('#trainer-plus-points-field');
        const bars = page.querySelector('#trainer-plus-level-bars');
        const progressLabel = page.querySelector('#trainer-plus-progress-label');
        const progressValue = page.querySelector('#trainer-plus-progress-value');
        const progressNote = page.querySelector('#trainer-plus-progress-note');
        const feedback = page.querySelector('#trainer-plus-page-error');
        const bonusOutputs = {
            exp: page.querySelector('#trainer-plus-exp-bonus'),
            loot: page.querySelector('#trainer-plus-loot-bonus'),
            charm: page.querySelector('#trainer-plus-charm-bonus')
        };

        if (!levelSelect || !pointsInput || !pointsField || !bars || !progressLabel || !progressValue || !progressNote || !feedback
            || Object.values(bonusOutputs).some(output => !output)) {
            throw new Error('Os controles da página Trainer Plus estão incompletos.');
        }

        const levelButtons = LEVELS.slice(1).map((_, index) => createLevelButton(index + 1));
        bars.replaceChildren(...levelButtons);

        function renderLevel() {
            const level = Number(levelSelect.value);
            if (!Number.isInteger(level) || level < 0 || level >= LEVELS.length) {
                throw new Error('O nível selecionado do Trainer Plus é inválido.');
            }

            const currentBonuses = LEVELS[level];
            bonusOutputs.exp.textContent = formatBonus(currentBonuses.exp);
            bonusOutputs.loot.textContent = formatBonus(currentBonuses.loot);
            bonusOutputs.charm.textContent = formatBonus(currentBonuses.charm);
            feedback.hidden = true;
            feedback.textContent = '';

            levelButtons.forEach((button, index) => {
                const buttonLevel = index + 1;
                const reached = buttonLevel <= level;
                const state = button.querySelector('.trainer-plus-level__tooltip-state');
                const stateText = buttonLevel === level
                    ? 'Nível atual'
                    : reached
                        ? 'Alcançado'
                        : 'Ainda não alcançado';
                button.classList.toggle('is-reached', reached);
                button.setAttribute('aria-pressed', buttonLevel === level ? 'true' : 'false');
                button.setAttribute('aria-label', `Nível ${buttonLevel}, ${stateText}. Ativar para selecionar este nível.`);
                state.textContent = stateText;
            });

            const pointsNeeded = currentBonuses.pointsToNext;
            if (pointsNeeded === null) {
                pointsField.hidden = true;
                pointsInput.disabled = true;
                progressLabel.textContent = level === 10 ? 'Nível máximo alcançado' : 'Progresso para o nível 1';
                progressValue.value = level === 10 ? '100%' : '—';
                progressNote.textContent = level === 10
                    ? 'Você alcançou todos os níveis do Trainer Plus.'
                    : 'O requisito de pontos para avançar a partir do nível 0 não está informado.';
                return;
            }

            pointsField.hidden = false;
            pointsInput.disabled = false;
            pointsInput.max = String(pointsNeeded);
            const points = pointsInput.value.trim() === '' ? Number.NaN : pointsInput.valueAsNumber;
            progressLabel.textContent = `Progresso para o nível ${level + 1}`;
            if (!Number.isInteger(points) || points < 0 || points > pointsNeeded) {
                progressValue.value = '—';
                progressNote.textContent = `Informe um valor entre 0 e ${pointsNeeded.toLocaleString('pt-BR')} pontos.`;
                feedback.textContent = 'O progresso precisa estar dentro do intervalo permitido para este nível.';
                feedback.hidden = false;
                return;
            }

            const percentage = Math.min(100, (points / pointsNeeded) * 100);
            progressValue.value = `${percentage.toLocaleString('pt-BR', { maximumFractionDigits: 1 })}%`;
            progressNote.textContent = `${points.toLocaleString('pt-BR')} de ${pointsNeeded.toLocaleString('pt-BR')} pontos para subir de nível.`;
        }

        levelButtons.forEach(button => {
            button.addEventListener('click', () => {
                levelSelect.value = button.dataset.level;
                renderLevel();
            });
        });
        levelSelect.addEventListener('change', renderLevel);
        pointsInput.addEventListener('input', renderLevel);
        initializedPages.add(page);
        renderLevel();
    }

    window.initTrainerPlusPage = initTrainerPlusPage;
})();
