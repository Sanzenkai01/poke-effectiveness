const hoopaPortalsData = [
  {
    id: 'mega-staraptor',
    name: 'Mega Staraptor',
    clan: 'instinct',
    clanLabel: 'Instinct',
    image: 'megastaraptor.png',
    locationImage: 'localizações/staraptor.png',
    description: 'Se não tiver nenhuma recomendação disponível, lembre-se de usar um Speedster.',
    types: ['fighting','flying'],
    clans: {
      instinct: {
        label: 'Instinct',
        recommended: [
          {
            name: 'Pikachu',
            image: 'pikachu.png',
            tier: 'green',
            types: ['electric'],
            description: 'Ótimo contra voador e normal; use ataques elétricos para obter vantagem.'
          }
        ]
      },
      mystic: {
        label: 'Mystic',
        recommended: [
          {
            name: 'Dewgong',
            image: 'dewgong.png',
            tier: 'green',
            types: ['water','ice'],
            description: 'Água/gelo para cobertura de tipos.'
          },
          {
            name: 'Mantine',
            image: 'mantine.png',
            tier: 'yellow',
            types: ['water','flying'],
            description: 'Cobertura de água com resistência extra a voador.'
          }
        ]
      },
      valor: {
        label: 'Valor',
        recommended: [
          {
            name: 'CharizardTwo',
            image: 'charizard.png',
            tier: 'green',
            types: ['fire','flying'],
            description: 'Use ataques de fogo para aproveitar a vantagem; ataque forte para maximizar o dano.'
          },
          {
            name: 'Tauros',
            image: 'tauros.png',
            tier: 'yellow',
            types: ['normal'],
            description: 'Bom para desgaste e resistência contra normal/voador.'
          },
          {
            name: 'Weavile',
            image: 'weavile.png',
            tier: 'red',
            types: ['dark','ice'],
            description: 'Rápido para pressionar e tirar vantagem de fraqueza a voador.'
          }
        ]
      }
    }
  },
  {
    id: 'mega-victreebel',
    name: 'Mega Victreebel',
    clan: 'instinct',
    clanLabel: 'Instinct',
    image: 'megavictreebel.png',
    locationImage: 'localizações/victreebel.png',
    description: 'Use pokémons com cobertura de tipos para lidar com veneno e grama.',
    types: ['grass','poison'],
    clans: {
      instinct: {
        label: 'Instinct',
        recommended: [
          { name: "Alakazam", image: 'alakazam.png', tier: 'green', types: ['psychic'], description: 'Psíquico forte e rápido.' }
        ]
      },
      mystic: {
        label: 'Mystic',
        recommended: [
          { name: 'Drifloon', image: 'drifloon.png', tier: 'green', types: ['ghost','flying'], description: 'Ideal para controle de campo aéreo.' }
        ]
      },
      valor: {
        label: 'Valor',
        recommended: [
          { name: 'CharizardTwo', image: 'charizard.png', tier: 'red', types: ['fire','flying'], description: 'Aceitável, fogo aéreo.' },
          { name: 'Delphox', image: 'delphox.png', tier: 'red', types: ['fire','psychic'], description: 'Aceitável, fogo/psíquico.' },
          { name: "Farfetch'd", image: 'farfetchd.png', tier: 'red', types: ['flying','normal'], description: 'Aceitável, voador versátil.' },
          { name: 'Weavile', image: 'weavile.png', tier: 'red', types: ['dark','ice'], description: 'Aceitável, rápido e sombrio.' }
        ]
      }
    }
  },
  {
    id: 'mega-malamar',
    name: 'Mega Malamar',
    clan: 'valor',
    clanLabel: 'Valor',
    image: 'megamalamar.png',
    locationImage: 'localizações/malamar.png',
    description: 'Acerte com ataques rápidos antes que comece a confusão.',
    types: ['dark','psychic'],
    clans: {
      instinct: {
        label: 'Instinct',
        recommended: [
          { name: 'Lurantis', image: 'lurantis.png', tier: 'green', types: ['grass'], description: 'Grama para neutralizar a escuridão.' },
          { name: 'Mega Gardevoir', image: 'mega-gardevoir.png', tier: 'green', types: ['psychic','fairy'], description: 'Psíquico/fada com alto dano especial.' }
        ]
      },
      mystic: {
        label: 'Mystic',
        recommended: [
          { name: 'Dachsbun', image: 'dachsbun.png', tier: 'solo', types: ['fairy'], description: 'Última opção para Mystic.' }
        ]
      },
      valor: {
        label: 'Valor',
        recommended: [
          { name: 'Mega Houndoom', image: 'mega-houndoom.png', tier: 'green', types: ['dark','fire'], description: 'Fogo sombrio que pressiona Malamar.' },
          { name: 'CharizardTwo', image: 'charizard.png', tier: 'red', types: ['fire','flying'], description: 'Fogo forte para lidar com a fraqueza de água.' },
          { name: 'Weavile', image: 'weavile.png', tier: 'red', types: ['dark','ice'], description: 'Ataques rápidos para quebrar a defesa de Malamar.' }
        ]
      }
    }
  },
  {
    id: 'mega-hawlucha',
    name: 'Mega Hawlucha',
    clan: 'mystic',
    clanLabel: 'Mystic',
    image: 'megahawlucha.png',
    locationImage: 'localizações/hawlucha.png',
    description: 'Movimentos de luta e voo para dominar o campo.',
    types: ['fighting','flying'],
    clans: {
      instinct: {
        label: 'Instinct',
        recommended: [
          { name: 'Alakazam', image: 'alakazam.png', tier: 'green', types: ['psychic'], description: 'Psíquico rápido e eficiente.' },
          { name: 'Pikachu', image: 'pikachu.png', tier: 'green', types: ['electric'], description: 'Verde elétrico para vantagem.' },
          { name: 'Mega Gardevoir', image: 'mega-gardevoir.png', tier: 'green', types: ['psychic','fairy'], description: 'Ataques psíquicos e fada.' }
        ]
      },
      mystic: {
        label: 'Mystic',
        recommended: [
          { name: 'Dachsbun', image: 'dachsbun.png', tier: 'green', types: ['fairy'], description: 'Ideal para Mystic.' },
          { name: 'Mantine', image: 'mantine.png', tier: 'yellow', types: ['water','flying'], description: 'Bom para cobertura aérea e aquática.' },
          { name: 'Mega Starmie', image: 'mega-starmie.png', tier: 'yellow', types: ['water','psychic'], description: 'Bom suporte com moveset de água.' }
        ]
      },
      valor: {
        label: 'Valor',
        recommended: [
          { name: 'CharizardTwo', image: 'charizard.png', tier: 'green', types: ['fire','flying'], description: 'Fogo alto para pressionar o voador.', },
          { name: 'Mega Houndoom', image: 'mega-houndoom.png', tier: 'red', types: ['dark','fire'], description: 'Fogo/escuro para controle e dano contínuo.' },
          { name: 'Weavile', image: 'weavile.png', tier: 'red', types: ['dark','ice'], description: 'Ataques rápidos para quebrar fraquezas de luta/voo.' }
        ]
      }
    }
  },
  {
    id: 'mega-greninja',
    name: 'Mega Greninja',
    clan: 'valor',
    clanLabel: 'Valor',
    image: 'megagreninja.png',
    locationImage: 'localizações/greninja.png',
    description: 'Furtivo e rápido, aproveite vantagem de tipos.',
    types: ['water','dark'],
    clans: {
      instinct: {
        label: 'Instinct',
        recommended: [
          { name: 'Lurantis', image: 'lurantis.png', tier: 'green', types: ['grass'], description: 'Grama para cobertura.' },
          { name: 'Pikachu', image: 'pikachu.png', tier: 'green', types: ['electric'], description: 'Rápido e elétrico.' },
          { name: 'Mega Gardevoir', image: 'mega-gardevoir.png', tier: 'green', types: ['psychic','fairy'], description: 'Ataques psíquicos e fada.' },
          { name: 'Venusaur', image: 'venusaur.png', tier: 'green', types: ['grass','poison'], description: 'Grama/veneno para controle.' },
          { name: 'Mega Sceptile', image: 'mega-sceptile.png', tier: 'green', types: ['grass','dragon'], description: 'Dragão/grama veloz.' }
        ]
      },
      mystic: {
        label: 'Mystic',
        recommended: [
          { name: 'Lombre', image: 'lombre.png', tier: 'green', types: ['water','grass'], description: 'Ideal para Mystic.' },
          { name: 'Duraludon', image: 'duraludon.png', tier: 'yellow', types: ['steel','dragon'], description: 'Bom para resistir e cobrir fraquezas.' },
          { name: 'Hawlucha', image: 'hawlucha.png', tier: 'red', types: ['fighting','flying'], description: 'Aceitável, boa mobilidade.' },
          { name: 'Dachsbun', image: 'dachsbun.png', tier: 'red', types: ['fairy'], description: 'Aceitável para suporte.' }
        ]
      },
      valor: {
        label: 'Valor',
        recommended: [
          { name: 'Scyther', image: 'scyther.png', tier: 'red', types: ['bug','flying'], description: 'Ataques rápidos de inseto.' },
          { name: 'Tauros', image: 'tauros.png', tier: 'red', types: ['normal'], description: 'Resistente e poderoso.' }
        ]
      }
    }
  },
  {
    id: 'mega-chesnaught',
    name: 'Mega Chesnaught',
    clan: 'instinct',
    clanLabel: 'Instinct',
    image: 'megachesnaught.png',
    locationImage: 'localizações/chesnaught.png',
    description: 'Tanque com defesa alta; utilize golpes precisos.',
    types: ['grass','fighting'],
    clans: {
      instinct: {
        label: 'Instinct',
        recommended: [
          { name: 'Alakazam', image: 'alakazam.png', tier: 'green', types: ['psychic'], description: 'Psíquico forte.' },
          { name: 'Mega Gardevoir', image: 'mega-gardevoir.png', tier: 'green', types: ['psychic','fairy'], description: 'Psíquico/fada para controle.' }
        ]
      },
      mystic: {
        label: 'Mystic',
        recommended: [
          { name: 'Drifloon', image: 'drifloon.png', tier: 'green', types: ['ghost','flying'], description: 'Ideal para controle de campo aéreo.' },
          { name: 'Dewgong', image: 'dewgong.png', tier: 'yellow', types: ['water','ice'], description: 'Água/gelo resiliente.' },
          { name: 'Dachsbun', image: 'dachsbun.png', tier: 'yellow', types: ['fairy'], description: 'Fada equilibrada.' },
          { name: 'Fidough', image: 'fidough.png', tier: 'yellow', types: ['fairy'], description: 'Bom suporte.' },
          { name: 'Mantine', image: 'mantine.png', tier: 'yellow', types: ['water','flying'], description: 'Cobertura aérea e aquática.' },
          { name: 'Qwilfish', image: 'qwilfish.png', tier: 'red', types: ['water','poison'], description: 'Aceitável, boa cobertura de status.' }
        ]
      },
      valor: {
        label: 'Valor',
        recommended: [
          { name: 'Weavile', image: 'weavile.png', tier: 'red', types: ['dark','ice'], description: 'Ataques rápidos.' },
          { name: "Farfetch'd", image: 'farfetchd.png', tier: 'red', types: ['flying','normal'], description: 'Agilidade e neutralização.' },
          { name: 'Delphox', image: 'delphox.png', tier: 'red', types: ['fire','psychic'], description: 'Ataques de longo alcance.' },
          { name: 'CharizardTwo', image: 'charizard.png', tier: 'red', types: ['fire','flying'], description: 'Poder aéreo e fogo.' }
        ]
      }
    }
  },
  {
    id: 'mega-delphox',
    name: 'Mega Delphox',
    clan: 'mystic',
    clanLabel: 'Mystic',
    image: 'megadelphox.png',
    locationImage: 'localizações/delphox.png',
    description: 'Fogo e psíquico combinados para controle de campo.',
    types: ['fire','psychic'],
    clans: {
      instinct: {
        label: 'Instinct',
        recommended: [
          { name: 'Marowak', image: 'marowak.png', tier: 'green', types: ['ground'], description: 'Solo forte para resistir a fogo.' }
        ]
      },
      mystic: {
        label: 'Mystic',
        recommended: [
          { name: 'Seaking', image: 'seaking.png', tier: 'green', types: ['water'], description: 'Ideal para Mystic.' },
          { name: 'BlastoiseTwo', image: 'blastoisetwo.png', tier: 'green', types: ['water'], description: 'Ideal como tanque aquático.' },
          { name: 'Greninja', image: 'greninja.png', tier: 'yellow', types: ['water','dark'], description: 'Bom para pressão rápida.' },
          { name: 'Banette', image: 'banette.png', tier: 'red', types: ['ghost'], description: 'Aceitável para cobertura de status.' }
        ]
      },
      valor: {
        label: 'Valor',
        recommended: [
          { name: 'Bouffalant', image: 'bouffalant.png', tier: 'red', types: ['normal','ground'], description: 'Força bruta terrestre.' },
          { name: 'Absol', image: 'absol.png', tier: 'red', types: ['dark'], description: 'Dano crítico alto.' },
          { name: 'Kabutops', image: 'kabutops.png', tier: 'red', types: ['rock','water'], description: 'Ataques de cobertura variados.' },
          { name: 'Cramorant', image: 'cramorant.png', tier: 'red', types: ['water','flying'], description: 'Ataques voadores e aquáticos.' },
          { name: 'Mega Houndoom', image: 'mega-houndoom.png', tier: 'red', types: ['dark','fire'], description: 'Fogo e escuridão em força.' }
        ]
      }
    }
  },
  {
    id: 'mega-scolipede',
    name: 'Mega Scolipede',
    clan: 'mystic',
    clanLabel: 'Mystic',
    image: 'mega-scolipede.png',
    locationImage: 'localizações/scolipede.png',
    description: 'Velocidade venenosa; controle o campo com precisão.',
    types: ['bug','poison'],
    clans: {
      instinct: {
        label: 'Instinct',
        recommended: [
          { name: 'Alakazam', image: 'alakazam.png', tier: 'green', types: ['psychic'], description: 'Psíquico forte para lidar com bug/veneno.' },
          { name: 'Lurantis', image: 'lurantis.png', tier: 'yellow', types: ['grass'], description: 'Grama útil para cobertura e dano estável.' }
        ]
      },
      mystic: {
        label: 'Mystic',
        recommended: [
          { name: 'Drifloon', image: 'drifloon.png', tier: 'green', types: ['ghost','flying'], description: 'Ideal para controle de campo aéreo.' },
          { name: 'Mantine', image: 'mantine.png', tier: 'yellow', types: ['water','flying'], description: 'Bom para cobertura aérea e aquática.' },
          { name: 'Mega Starmie', image: 'mega-starmie.png', tier: 'red', types: ['water','psychic'], description: 'Aceitável, moveset de água.' }
        ]
      },
      valor: {
        label: 'Valor',
        recommended: [
          { name: 'CharizardTwo', image: 'charizard.png', tier: 'green', types: ['fire','flying'], description: 'Bom para usar fogo contra venom/bicho.' },
          { name: 'Mega Houndoom', image: 'mega-houndoom.png', tier: 'red', types: ['dark','fire'], description: 'Fogo/dark para forçar dano rápido.' },
          { name: 'Scizor', image: 'scizor.png', tier: 'red', types: ['bug','steel'], description: 'Steel controla veneno e insectos.' }
        ]
      }
    }
  },
  {
    id: 'mega-meganium',
    name: 'Mega Meganium',
    clan: 'mystic',
    clanLabel: 'Mystic',
    image: 'mega-meganium.png',
    locationImage: 'localizações/meganium.png',
    description: 'Folhas que curam a equipe enquanto controla o campo.',
    types: ['grass'],
    clans: {
      instinct: {
        label: 'Instinct',
        recommended: [
          { name: 'Seviper', image: 'seviper.png', tier: 'green', types: ['poison'], description: 'Veneno é forte contra grama; boa opção para Instinct.' },
          { name: 'Dragonair', image: 'dragonair.png', tier: 'yellow', types: ['dragon'], description: 'Dragão com bom ataque especial e cobertura útil.' }
        ]
      },
      mystic: {
        label: 'Mystic',
        recommended: [
          { name: 'Drifloon', image: 'drifloon.png', tier: 'green', types: ['ghost','flying'], description: 'Ideal para controle de campo aéreo.' },
          { name: 'Qwilfish', image: 'qwilfish.png', tier: 'yellow', types: ['water','poison'], description: 'Bom para pressão de status.' }
        ]
      },
      valor: {
        label: 'Valor',
        recommended: [
          { name: 'CharizardTwo', image: 'charizard.png', tier: 'green', types: ['fire','flying'], description: 'Melhor opção de fogo para enfrentar grama.' },
          { name: 'Delphox', image: 'delphox.png', tier: 'red', types: ['fire','psychic'], description: 'Aceitável para cobertura com fogo e psíquico.' }
        ]
      }
    }
  },
  {
    id: 'mega-feraligatr',
    name: 'Mega Feraligatr',
    clan: 'mystic',
    clanLabel: 'Mystic',
    image: 'mega-feraligatr.png',
    locationImage: 'localizações/feraligatr.png',
    description: 'Força bruta aquática; punhos d’água devastadores.',
    types: ['water'],
    clans: {
      instinct: {
        label: 'Instinct',
        recommended: [
          { name: 'Pikachu', image: 'pikachu.png', tier: 'green', types: ['electric'], description: 'Elétrico rápido e eficaz contra água.' },
          { name: 'Dragonair', image: 'dragonair.png', tier: 'yellow', types: ['dragon'], description: 'Dragão com boas resistências e ataque especial.' }
        ]
      },
      mystic: {
        label: 'Mystic',
        recommended: [
          { name: 'Dachsbun', image: 'dachsbun.png', tier: 'green', types: ['fairy'], description: 'Ideal para suporte e resistência.' }
        ]
      },
      valor: {
        label: 'Valor',
        recommended: [
          { name: 'CharizardTwo', image: 'charizard.png', tier: 'green', types: ['fire','flying'], description: 'Fogo é ótima escolha contra água; rápido e versátil.' },
          { name: 'Delphox', image: 'delphox.png', tier: 'red', types: ['fire','psychic'], description: 'Cobertura de fogo com suporte psíquico.' },
          { name: 'Mega Houndoom', image: 'mega-houndoom.png', tier: 'red', types: ['dark','fire'], description: 'Fogo e escuridão para pressão constante.' }
        ]
      }
    }
  },
  {
    id: 'mega-clefable',
    name: 'Mega Clefable',
    clan: 'mystic',
    clanLabel: 'Mystic',
    image: 'mega-clefable.png',
    locationImage: 'localizações/clefable.png',
    description: 'Milagre brilhante; suporte com magia.',
    types: ['fairy'],
    clans: {
      instinct: {
        label: 'Instinct',
        recommended: [
          { name: 'Seviper', image: 'seviper.png', tier: 'green', types: ['poison'], description: 'Veneno é forte contra fada; escolha versátil para Instinct.' },
          { name: 'Dragonair', image: 'dragonair.png', tier: 'yellow', types: ['dragon'], description: 'Dragão resistente com bom ataque especial.' }
        ]
      },
      mystic: {
        label: 'Mystic',
        recommended: [
          { name: 'Qwilfish', image: 'qwilfish.png', tier: 'green', types: ['water','poison'], description: 'Ideal para status e cobertura.' },
          { name: 'Duraludon', image: 'duraludon.png', tier: 'yellow', types: ['steel','dragon'], description: 'Bom para defesa e resistência.' },
          { name: 'Dewgong', image: 'dewgong.png', tier: 'yellow', types: ['water','ice'], description: 'Bom para cobertura de gelo.' }
        ]
      },
      valor: {
        label: 'Valor',
        recommended: [
          { name: 'Scizor', image: 'scizor.png', tier: 'green', types: ['bug','steel'], description: 'Steel é eficaz contra fada; use golpes rápidos e consistentes.' },
          { name: 'CharizardTwo', image: 'charizard.png', tier: 'red', types: ['fire','flying'], description: 'Fogo é forte contra fada; bom para dano em área.' },
          { name: 'Mega Houndoom', image: 'mega-houndoom.png', tier: 'red', types: ['dark','fire'], description: 'Combina fogo com escuridão para pressão contínua.' }
        ]
      }
    }
  },
  {
    id: 'mega-skarmory',
    name: 'Mega Skarmory',
    clan: 'mystic',
    clanLabel: 'Mystic',
    image: 'mega-skarmory.png',
    locationImage: 'localizações/skarmory.png',
    description: 'Assassino aéreo com armadura de metal.',
    types: ['steel','flying'],
    clans: {
      instinct: {
        label: 'Instinct',
        recommended: [
          { name: 'Marowak', image: 'marowak.png', tier: 'green', types: ['ground'], description: 'Solo efetivo contra metal/flying; boa defesa.' },
          { name: 'Alakazam', image: 'alakazam.png', tier: 'yellow', types: ['psychic'], description: 'Psíquico rápido para pressão constante.' }
        ]
      },
      mystic: {
        label: 'Mystic',
        recommended: [
          { name: 'Dewgong', image: 'dewgong.png', tier: 'green', types: ['water','ice'], description: 'Gelo e água cobrem aço e voador.' },
          { name: 'Seaking', image: 'seaking.png', tier: 'yellow', types: ['water'], description: 'Água forte e simples para segurança.' }
        ]
      },
      valor: {
        label: 'Valor',
        recommended: [
          { name: 'Tauros', image: 'tauros.png', tier: 'red', types: ['normal'], description: 'Aceitável para força física.' },
          { name: 'Delphox', image: 'delphox.png', tier: 'red', types: ['fire','psychic'], description: 'Aceitável para dano à distância.' },
          { name: 'CharizardTwo', image: 'charizard.png', tier: 'red', types: ['fire','flying'], description: 'Aceitável, poderoso no ar.' }
        ]
      }
    }
  },
  {
    id: 'mega-raichu',
    name: 'Mega Raichu',
    clan: 'instinct',
    clanLabel: 'Instinct',
    image: 'mega-raichu-x.png',
    locationImage: 'localizações/raichu.png',
    description: 'Dupla Mega Raichu (X/Y).',
    types: ['electric'],
    duo: true,
    bosses: [
      { name: 'Mega Raichu X', image: 'mega-raichu-x.png' },
      { name: 'Mega Raichu Y', image: 'mega-raichu-y.png' }
    ],
    clans: {
      instinct: {
        label: 'Instinct',
        recommended: [
          { name: 'Marowak', image: 'marowak.png', tier: 'green', types: ['ground'], description: 'Ótimo contra elétrico — use golpes de solo.' },
          { name: 'Dragonair', image: 'dragonair.png', tier: 'yellow', types: ['dragon'], description: 'Dragão resistente e forte contra ataques elétricos.' }
        ]
      },
      mystic: {
        label: 'Mystic',
        recommended: [
          { name: 'Dewgong', image: 'dewgong.png', tier: 'green', types: ['water','ice'], description: 'Resiste a elétrico e oferece boa cobertura.' },
          { name: 'Mantine', image: 'mantine.png', tier: 'yellow', types: ['water','flying'], description: 'Resistente a elétrico e ótimo suporte aéreo.' }
        ]
      },
      valor: {
        label: 'Valor',
        recommended: [
          { name: 'Mega Starmie', image: 'mega-starmie.png', tier: 'green', types: ['water','psychic'], description: 'Água resiste a elétrico e oferece bom DPS.' },
          { name: 'Mega Gyarados', image: 'mega-gyarados.png', tier: 'yellow', types: ['water','dark'], description: 'Forte resistência a elétrico com alto ataque.' }
        ]
      }
    }
  },
  {
    id: 'mega-lucario',
    name: 'Mega Lucario',
    clan: 'mystic',
    clanLabel: 'Mystic',
    image: 'mega-lucario.png',
    description: 'Dupla Mega Lucario (Padrão/Z).',
    types: ['fighting','steel'],
    duo: true,
    bosses: [
      { name: 'Mega Lucario', image: 'mega-lucario.png' },
      { name: 'Mega Lucario Z', image: 'mega-lucario-z.png' }
    ],
    clans: {
      instinct: {
        label: 'Instinct',
        recommended: [
          { name: 'Marowak', image: 'marowak.png', tier: 'green', types: ['ground'], description: 'Golpes terrestres são ótimos contra aço e lutador.' },
          { name: 'Dragonair', image: 'dragonair.png', tier: 'yellow', types: ['dragon'], description: 'Dragão com bom ataque especial e cobertura útil.' }
        ]
      },
      mystic: {
        label: 'Mystic',
        recommended: [
          { name: 'Mega Starmie', image: 'mega-starmie.png', tier: 'green', types: ['water','psychic'], description: 'Água é eficaz contra aço; boa velocidade e cobertura.' },
          { name: 'Mantine', image: 'mantine.png', tier: 'yellow', types: ['water','flying'], description: 'Resistente e útil contra lutador, com suporte aéreo.' }
        ]
      },
      valor: {
        label: 'Valor',
        recommended: [
          { name: 'Delphox', image: 'delphox.png', tier: 'green', types: ['fire','psychic'], description: 'Fogo ajuda contra aço; bom alcance mágico.' },
          { name: 'Bouffalant', image: 'bouffalant.png', tier: 'yellow', types: ['normal','ground'], description: 'Terreno resistente com golpes poderosos.' }
        ]
      }
    }
  },
  {
    id: 'mega-absol',
    name: 'Mega Absol',
    clan: 'valor',
    clanLabel: 'Valor',
    image: 'mega-absol.png',
    locationImage: 'localizações/absol.png',
    description: 'Dupla Mega Absol (Normal/Z).',
    types: ['dark'],
    duo: true,
    bosses: [
      { name: 'Mega Absol', image: 'mega-absol.png' },
      { name: 'Mega Absol Z', image: 'mega-absol-z.png' }
    ],
    clans: {
      instinct: {
        label: 'Instinct',
        recommended: [
          { name: 'Mega Gardevoir', image: 'mega-gardevoir.png', tier: 'green', types: ['psychic','fairy'], description: 'Fada é ótima contra dark; use golpes especiais.' },
          { name: 'Alakazam', image: 'alakazam.png', tier: 'yellow', types: ['psychic'], description: 'Psíquico rápido que pode derrubar dark com ataques fortes.' }
        ]
      },
      mystic: {
        label: 'Mystic',
        recommended: [
          { name: 'Dachsbun', image: 'dachsbun.png', tier: 'green', types: ['fairy'], description: 'Fada acessível para lidar com dark.' },
          { name: 'Fidough', image: 'fidough.png', tier: 'yellow', types: ['fairy'], description: 'Bom para suporte e resistência contra dark.' }
        ]
      },
      valor: {
        label: 'Valor',
        recommended: [
          { name: 'Scyther', image: 'scyther.png', tier: 'green', types: ['bug','flying'], description: 'Inseto é forte contra dark; use ataques rápidos.' },
          { name: 'Weavile', image: 'weavile.png', tier: 'yellow', types: ['dark','ice'], description: 'Rápido e capaz de pressionar com golpes físicos.' }
        ]
      }
    }
  }
];

const clanIcons = {
  instinct: 'Instinct.png',
  mystic: 'Mystic.png',
  valor: 'Valor.png'
};

const grid = document.getElementById('speedster-grid');
const modal = document.getElementById('speedster-modal');
const modalTitle = document.getElementById('modal-title');
const modalSubtitle = document.getElementById('modal-subtitle');
const modalBody = document.getElementById('modal-body');
const modalClan = document.getElementById('modal-clan');
const closeBtn = modal ? modal.querySelector('.speedster-modal-close') : null;

const basePath = (() => {
  const p = location.pathname.toLowerCase();
  // Treat both /hoopa-portais and /hoopa-portais/ as inside the Hoopa Portais folder
  if (p.includes('/hoopa-portais')) return '';
  return 'hoopa-portais/';
})();

const iconBase = (() => {
  const p = location.pathname.toLowerCase();
  return (p.includes('/hoopa-portais') ? '../' : '') + 'icons-type/';
})();

function safeElement(el) {
  return el instanceof HTMLElement ? el : null;
}

function ensureSpeedstersElements() {
  return Boolean(grid && modal && modalTitle && modalSubtitle && modalBody && modalClan && closeBtn);
}

function makeSpeedsterCard(speedster) {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'speedster-card';
  button.setAttribute('role', 'listitem');
  button.setAttribute('aria-label', `Abrir detalhes de ${speedster.name}`);

  const img = document.createElement('img');
  img.className = 'speedster-image';
  img.src = basePath + speedster.image;
  img.alt = speedster.name;
  img.loading = 'lazy';

  const label = document.createElement('div');
  label.className = 'speedster-name';

  const bosses = Array.isArray(speedster.bosses) ? speedster.bosses : [{ name: speedster.name, image: speedster.image }];
  const bossNames = bosses.map(b => b.name).join(' + ');
  label.textContent = bossNames;

  const imageWrapper = document.createElement('div');
  imageWrapper.className = 'speedster-image-wrapper';
  bosses.forEach((b) => {
    const bossImg = document.createElement('img');
    bossImg.className = 'speedster-image';
    bossImg.src = basePath + b.image;
    bossImg.alt = b.name;
    bossImg.loading = 'lazy';
    imageWrapper.appendChild(bossImg);
  });

  button.append(imageWrapper, label);

  // show if this boss is solo or duo on the card (opposite side of location)
  const isDuo = speedster.duo || speedster.mode === 'duo';
  const modeBadge = document.createElement('span');
  modeBadge.className = 'speedster-mode-badge';
  modeBadge.textContent = isDuo ? 'Dupla' : 'Solo';
  modeBadge.title = isDuo ? 'Boss para dupla (2 jogadores)' : 'Boss solo (1 jogador)';
  button.appendChild(modeBadge);

  const locationWrapper = document.createElement('div');
  locationWrapper.className = 'speedster-location';

  const locationLabel = document.createElement('div');
  locationLabel.className = 'speedster-location-label';
  locationLabel.textContent = 'Localização';

  const locationBtn = document.createElement('button');
  locationBtn.type = 'button';
  locationBtn.className = 'speedster-location-btn';
  locationBtn.setAttribute('aria-label', 'Ver localização');
  locationBtn.title = 'Localização';

  // Show a small location marker (not a full image) to keep the card clean
  const marker = document.createElement('span');
  marker.className = 'speedster-location-marker';
  marker.textContent = '🗺️';
  marker.setAttribute('aria-hidden', 'true');

  locationBtn.appendChild(marker);
  locationWrapper.append(locationLabel, locationBtn);
  button.appendChild(locationWrapper);

  locationBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    showLocationOverlay(basePath + (speedster.locationImage || speedster.image));
  });

  const types = Array.isArray(speedster.types) ? speedster.types : [];
  if (types.length) {
    const typesContainer = document.createElement('div');
    typesContainer.className = 'speedster-boss-types';
    types.forEach((type) => {
      const typeIcon = document.createElement('img');
      typeIcon.className = 'type-icon';
      typeIcon.src = iconBase + `${type}.png`;
      typeIcon.alt = `${type} type`;
      typeIcon.loading = 'lazy';
      typeIcon.title = type.charAt(0).toUpperCase() + type.slice(1);
      typesContainer.appendChild(typeIcon);
    });
    button.appendChild(typesContainer);
  }
  button.addEventListener('click', () => openModal(speedster));

  return button;
}

function renderGrid() {
  if (!grid) return;
  grid.innerHTML = '';
  hoopaPortalsData.forEach((portal) => {
    grid.appendChild(makeSpeedsterCard(portal));
  });
}

function openModal(speedster) {
  const bosses = Array.isArray(speedster.bosses) ? speedster.bosses : [{ name: speedster.name, image: speedster.image }];
  const bossNames = bosses.map(b => b.name).join(' + ');
  modalTitle.textContent = bossNames;
  modalSubtitle.textContent = speedster.description || '';

  // Add/refresh location button inside the modal header
  const modalHeader = modal.querySelector('.speedster-modal-header');
  if (modalHeader) {
    let modalLocationBtn = modalHeader.querySelector('.speedster-modal-location-btn');
    if (!modalLocationBtn) {
      modalLocationBtn = document.createElement('button');
      modalLocationBtn.type = 'button';
      modalLocationBtn.className = 'speedster-modal-location-btn';
      modalLocationBtn.setAttribute('aria-label', 'Ver localização do boss');
      modalLocationBtn.title = 'Ver localização';
      modalLocationBtn.textContent = '🗺️';
      modalHeader.appendChild(modalLocationBtn);
    }
    modalLocationBtn.onclick = () => showLocationOverlay(basePath + (speedster.locationImage || speedster.image));
  }

  const pokemonImgLeft = document.getElementById('modal-pokemon-img-left');
  const pokemonImgRight = document.getElementById('modal-pokemon-img');

  // If the boss represents a duo, show both bosses in the modal images.
  const leftImage = bosses[0]?.image || speedster.image;
  const rightImage = bosses[1]?.image || speedster.image;
  const leftAlt = bosses[0]?.name || speedster.name;
  const rightAlt = bosses[1]?.name || speedster.name;

  if (pokemonImgLeft) {
    pokemonImgLeft.src = basePath + leftImage;
    pokemonImgLeft.alt = leftAlt;
  }
  if (pokemonImgRight) {
    pokemonImgRight.src = basePath + rightImage;
    pokemonImgRight.alt = rightAlt;
  }

  modalBody.innerHTML = '';

  const clansOrder = ['instinct', 'mystic', 'valor'];

  clansOrder.forEach((clanKey) => {
    const clanData = speedster.clans?.[clanKey];
    const section = document.createElement('div');
    section.className = 'speedster-clan-section';

    const header = document.createElement('div');
    header.className = 'speedster-clan-header';

    const icon = document.createElement('img');
    icon.className = 'speedster-clan-icon-small';
    icon.src = basePath + (clanIcons[clanKey] || '');
    icon.alt = `${clanData?.label || clanKey} icon`;
    icon.loading = 'lazy';

    const title = document.createElement('div');
    title.className = 'speedster-clan-name';
    title.textContent = clanData?.label || clanKey;

    header.append(icon, title);
    section.appendChild(header);

    const list = document.createElement('div');
    list.className = 'speedster-clan-list';

    const recommended = clanData?.recommended || [];

    if (recommended.length === 0) {
      const empty = document.createElement('div');
      empty.className = 'speedster-clan-empty';
      empty.textContent = 'Nenhuma recomendação disponível.';
      list.appendChild(empty);
    } else {
      const tierPriority = {
        green: 0,   // Ideal
        yellow: 1,  // Bom
        red: 2,     // Aceitável
        solo: 3,    // Última opção
        unknown: 4  // Sem informação
      };

      const sortedRecommended = [...recommended].sort((a, b) => {
        const aTier = (a.tier || 'unknown');
        const bTier = (b.tier || 'unknown');
        return (tierPriority[aTier] ?? 4) - (tierPriority[bTier] ?? 4);
      });

      sortedRecommended.forEach((poke) => {
        const card = document.createElement('div');
        card.className = 'speedster-reco-card';

        const img = document.createElement('img');
        img.className = 'speedster-reco-image';
        img.src = basePath + poke.image;
        img.alt = poke.name;
        img.loading = 'lazy';

        const nameWrapper = document.createElement('div');
        nameWrapper.className = 'speedster-reco-name-wrapper';

        const tier = poke.tier || 'unknown';
        const tierDot = document.createElement('span');
        tierDot.className = `tier-dot tier-${tier}`;

        const tierLabels = {
          green: 'Ideal',
          yellow: 'Bom',
          red: 'Aceitável',
          solo: 'Última opção',
          unknown: 'Sem informação'
        };
        tierDot.setAttribute('aria-label', tierLabels[tier] || 'Sem informação');

        const nameEl = document.createElement('div');
        nameEl.className = 'speedster-reco-name';
        nameEl.textContent = poke.name;

        nameWrapper.append(tierDot, nameEl);

        // Element icon for recommended pokémon
        if (Array.isArray(poke.types) && poke.types.length) {
          const typesContainer = document.createElement('div');
          typesContainer.className = 'type-icon-reco-corner';
          poke.types.slice(0, 2).forEach((type) => {
            const elementIcon = document.createElement('img');
            elementIcon.className = 'type-icon type-icon-reco';
            elementIcon.src = iconBase + `${type}.png`;
            elementIcon.alt = `${type} type`;
            elementIcon.loading = 'lazy';
            elementIcon.title = type.charAt(0).toUpperCase() + type.slice(1);
            typesContainer.appendChild(elementIcon);
          });
          card.appendChild(typesContainer);
        }

        const desc = document.createElement('div');
        desc.className = 'speedster-reco-desc';
        desc.textContent = poke.description;

        card.append(img, nameWrapper, desc);
        list.appendChild(card);
      });
    }

    section.appendChild(list);
    modalBody.appendChild(section);
  });

  modal.setAttribute('data-open', 'true');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  if (typeof gsap !== 'undefined') {
    gsap.fromTo(
      modal.querySelector('.speedster-modal-content'),
      { opacity: 0, y: 40, scale: 0.96 },
      { opacity: 1, y: 0, scale: 1, duration: 0.35, ease: 'power2.out' }
    );
  }
}

function closeModal() {
  const content = modal.querySelector('.speedster-modal-content');
  if (typeof gsap !== 'undefined') {
    gsap.to(content, {
      opacity: 0,
      y: 30,
      scale: 0.96,
      duration: 0.25,
      ease: 'power2.in',
      onComplete: () => {
        modal.setAttribute('data-open', 'false');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      }
    });
  } else {
    modal.setAttribute('data-open', 'false');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
  closeLocationOverlay();
}

function showLocationOverlay(src) {
  closeLocationOverlay();
  const overlay = document.createElement('div');
  overlay.className = 'location-overlay';
  overlay.tabIndex = -1;

  const img = document.createElement('img');
  img.src = src;
  img.alt = 'Localização do boss';

  overlay.appendChild(img);

  overlay.addEventListener('click', (event) => {
    if (event.target === overlay) {
      closeLocationOverlay();
    }
  });

  overlay.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeLocationOverlay();
    }
  });

  document.body.appendChild(overlay);
  overlay.focus({ preventScroll: true });
}

function closeLocationOverlay() {
  const existing = document.querySelector('.location-overlay');
  if (existing) existing.remove();
}

if (modal) {
  modal.addEventListener('click', (event) => {
    if (event.target.matches('[data-close]') || event.target === modal) {
      closeModal();
    }
  });
}

if (closeBtn) {
  closeBtn.addEventListener('click', closeModal);
}

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal && modal.getAttribute('data-open') === 'true') {
    closeModal();
  }
});

renderGrid();
