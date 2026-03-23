	// Clan icon interaction for types page
	document.addEventListener('DOMContentLoaded', function() {
		const clanButtons = document.querySelectorAll('.clan-btn');
		clanButtons.forEach(btn => {
			btn.addEventListener('click', function() {
				// Toggle active state
				clanButtons.forEach(b => b.classList.remove('active'));
				this.classList.add('active');
				// Get selected clan
				const clan = this.getAttribute('data-clan');
				// Custom: show related elements (replace with your logic)
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
		}

		// Reset clan selection and highlights when reset button is clicked
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
	});
