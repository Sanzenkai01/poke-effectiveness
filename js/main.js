	// Interacao dos icones de clan na pagina de tipos
	function initializeClanTypeControls() {
		if(document.documentElement.dataset.clanTypeControlsInitialized === 'true') return;
		document.documentElement.dataset.clanTypeControlsInitialized = 'true';
		const clanButtons = document.querySelectorAll('.clan-btn');
		clanButtons.forEach(btn => {
			btn.addEventListener('click', function() {
				// Alternar estado ativo
				clanButtons.forEach(b => b.classList.remove('active'));
				this.classList.add('active');
				// Obter clan selecionado
				const clan = this.getAttribute('data-clan');
				// Personalizado: mostrar elementos relacionados
				highlightClanTypes(clan);
			});
		});

		function highlightClanTypes(clan) {
			// Tipos relacionados a cada clã conforme enviado pelo usuário
			const clanTypes = {
				instinct: ['dragon', 'electric', 'ground', 'grass', 'psychic', 'poison'],
				mystic: ['fairy', 'fighting', 'ghost', 'ice', 'steel', 'water'],
				valor: ['flying', 'bug', 'dark', 'fire', 'normal', 'rock']
			};
			// Limpar destaques anteriores
			document.querySelectorAll('.type-button').forEach(btn => {
				btn.classList.remove('clan-related');
			});
			// Destacar tipos do clã
			(clanTypes[clan] || []).forEach(type => {
				const btn = document.querySelector(`.type-button[data-type="${type}"]`);
				if (btn) btn.classList.add('clan-related');
			});
			// Re-desenhar conexões do tipo(s) selecionado(s), se houver
			if (window.renderSelection) {
				window.renderSelection();
			}
		}

		// Redefinir selecao de clan e destaques quando o botao de redefinicao for clicado
		const resetBtn = document.getElementById('reset-btn');
		if (resetBtn) {
			resetBtn.addEventListener('click', function() {
				// Remover seleção dos clãs
				clanButtons.forEach(b => b.classList.remove('active'));
				// Remover destaques dos tipos relacionados ao clã
				document.querySelectorAll('.type-button').forEach(btn => {
					btn.classList.remove('clan-related');
				});
			});
		}
	}

	if(document.readyState === 'loading'){
		document.addEventListener('DOMContentLoaded', initializeClanTypeControls, { once: true });
	} else {
		initializeClanTypeControls();
	}
