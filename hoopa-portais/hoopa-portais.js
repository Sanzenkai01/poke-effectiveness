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
          { name: 'Alakazam', image: 'alakazam.png', tier: 'green', types: ['psychic'], description: 'Tipo move: Psychic.' },
          { name: 'Pikachu', image: 'pikachu.png', tier: 'green', types: ['electric'], description: 'Tipo move: Electric.' },
          { name: 'Mega Gardevoir', image: 'mega-gardevoir.png', tier: 'green', types: ['psychic','fairy'], description: 'Tipo move: Fairy.' },
          { name: 'Dedenne', image: 'dedenne.png', tier: 'green', types: ['electric','fairy'], description: 'Tipo move: Fairy.' },
          { name: 'Mega Raichu Y', image: 'mega-raichu-y.png', tier: 'green', types: ['electric'], description: 'Tipo move: Electric.' }
        ]
      },
      mystic: {
        label: 'Mystic',
        recommended: [
          { name: 'Dachsbun', image: 'dachsbun.png', tier: 'green', types: ['fairy'], description: 'Tipo move: Fairy.' },
          { name: 'Fidough', image: 'fidough.png', tier: 'green', types: ['fairy'], description: 'Tipo move: Fairy.' },
          { name: "Melony's Frosmoth", image: 'frosmoth.png', tier: 'green', types: ['ice','bug'], description: 'Tipo move: Ice.' },
          { name: 'Mantine', image: 'mantine.png', tier: 'green', types: ['water','flying'], description: 'Tipo move: Flying.' }
        ]
      },
      valor: {
        label: 'Valor',
        recommended: [
          { name: 'Ribombee', image: 'Ribombee.png', tier: 'green', types: ['bug','fairy'], description: 'Tipo move: Fairy.' },
          { name: "May's Beautifly", image: 'may-beautifly.png', tier: 'green', types: ['flying','bug'], description: 'Tipo move: Flying.' },
          { name: "Farfetch'd", image: 'farfetchd.png', tier: 'green', types: ['flying','normal'], description: 'Tipo move: Flying.' },
          { name: 'Cramorant', image: 'cramorant.png', tier: 'green', types: ['water','flying'], description: 'Tipo move: Water.' }
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
          { name: 'Dewgong', image: 'dewgong.png', tier: 'green', types: ['water','ice'], description: 'Tipo move: Ice.' },
          { name: 'Mantine', image: 'mantine.png', tier: 'green', types: ['water','flying'], description: 'Tipo move: Flying.' },
          { name: 'Orthworm', image: 'orthworm.png', tier: 'green', types: ['steel'], description: 'Tipo move: Ground.' },
          { name: 'Mega Skarmory', image: 'mega-skarmory.png', tier: 'green', types: ['steel','flying'], description: 'Tipo move: Flying.' },
          { name: "Melony's Frosmoth", image: 'frosmoth.png', tier: 'green', types: ['ice','bug'], description: 'Tipo move: Ice.' },
          { name: 'Drifloom', image: 'Drifloon.png', tier: 'green', types: ['ghost','flying'], description: 'Tipo move: Fire.' },
          { name: 'Mega Starmie', image: 'mega-starmie.png', tier: 'green', types: ['water','psychic'], description: 'Tipo move: Psychic.' }
        ]
      },
      valor: {
        label: 'Valor',
        recommended: [
          { name: "Farfetch'd", image: 'farfetchd.png', tier: 'green', types: ['flying','normal'], description: 'Tipo move: Flying.' },
          { name: 'Weavile', image: 'weavile.png', tier: 'green', types: ['dark','ice'], description: 'Tipo move: Ice.' },
          { name: 'Delphox', image: 'delphox.png', tier: 'green', types: ['fire','psychic'], description: 'Tipo move: Fire.' },
          { name: 'CharizardTwo', image: 'charizard.png', tier: 'green', types: ['fire','flying'], description: 'Tipo move: Fire.' }
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
          { name: 'Lurantis', image: 'lurantis.png', tier: 'green', types: ['grass'], description: 'Tipo move: Bug.' },
          { name: 'Dedenne', image: 'dedenne.png', tier: 'green', types: ['electric','fairy'], description: 'Tipo move: Fairy.' },
          { name: 'Mega Gardevoir', image: 'mega-gardevoir.png', tier: 'green', types: ['psychic','fairy'], description: 'Tipo move: Fairy.' }
        ]
      },
      mystic: {
        label: 'Mystic',
        recommended: [
          { name: 'Dachsbun', image: 'dachsbun.png', tier: 'green', types: ['fairy'], description: 'Tipo move: Fairy.' },
          { name: 'Fidough', image: 'fidough.png', tier: 'green', types: ['fairy'], description: 'Tipo move: Fairy.' }
        ]
      },
      valor: {
        label: 'Valor',
        recommended: [
          { name: 'Scyther', image: 'scyther.png', tier: 'green', types: ['bug','flying'], description: 'Tipo move: Bug.' },
          { name: 'Ribombee', image: 'Ribombee.png', tier: 'green', types: ['bug','fairy'], description: 'Tipo move: Fairy.' },
          { name: 'Mega Absol Z', image: 'mega-absol-z.png', tier: 'green', types: ['dark','ghost'], description: 'Tipo move: Fairy.' }
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
          { name: 'Alakazam', image: 'alakazam.png', tier: 'green', types: ['psychic'], description: 'Tipo move: Psychic.' },
          { name: 'Pikachu', image: 'pikachu.png', tier: 'green', types: ['electric'], description: 'Tipo move: Electric.' },
          { name: 'Mega Gardevoir', image: 'mega-gardevoir.png', tier: 'green', types: ['psychic','fairy'], description: 'Tipo move: Fairy.' },
          { name: 'Dedenne', image: 'dedenne.png', tier: 'green', types: ['electric','fairy'], description: 'Tipo move: Fairy.' }
        ]
      },
      mystic: {
        label: 'Mystic',
        recommended: [
          { name: 'Dachsbun', image: 'dachsbun.png', tier: 'green', types: ['fairy'], description: 'Tipo move: Fairy.' },
          { name: 'Fidough', image: 'fidough.png', tier: 'green', types: ['fairy'], description: 'Tipo move: Fairy.' },
          { name: "Melony's Frosmoth", image: 'frosmoth.png', tier: 'green', types: ['ice','bug'], description: 'Tipo move: Ice.' },
          { name: 'Mantine', image: 'mantine.png', tier: 'green', types: ['water','flying'], description: 'Tipo move: Flying.' },
          { name: 'Mega Starmie', image: 'mega-starmie.png', tier: 'green', types: ['water','psychic'], description: 'Tipo move: Psychic.' }
        ]
      },
      valor: {
        label: 'Valor',
        recommended: [
          { name: 'Cramorant', image: 'cramorant.png', tier: 'green', types: ['flying','water'], description: 'Tipo move: Water.' },
          { name: "Farfetch'd", image: 'farfetchd.png', tier: 'green', types: ['flying','normal'], description: 'Tipo move: Flying.' },
          { name: 'Ribombee', image: 'Ribombee.png', tier: 'green', types: ['bug','fairy'], description: 'Tipo move: Fairy.' }
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
          { name: 'Lurantis', image: 'lurantis.png', tier: 'green', types: ['grass'], description: 'Tipo move: Bug.' },
          { name: 'Pikachu', image: 'pikachu.png', tier: 'green', types: ['electric'], description: 'Tipo move: Electric.' },
          { name: 'VenusaurTwo', image: 'venusaur.png', tier: 'green', types: ['grass','poison'], description: 'Tipo move: Grass.' },
          { name: 'Mega Sceptile', image: 'mega-sceptile.png', tier: 'green', types: ['grass','dragon'], description: 'Tipo move: Grass.' },
          { name: 'Mega Gardevoir', image: 'mega-gardevoir.png', tier: 'green', types: ['psychic','fairy'], description: 'Tipo move: Fairy.' },
          { name: 'Dedenne', image: 'dedenne.png', tier: 'green', types: ['electric','fairy'], description: 'Tipo move: Fairy.' },
          { name: "Rosa's Serperior", image: 'serperior.png', tier: 'green', types: ['grass'], description: 'Tipo move: Grass.' },
          { name: 'Mega Raichu Y/Z', image: 'mega-raichu-y.png', tier: 'green', types: ['electric','fighting'], description: 'Tipo move: Fighting.' }
        ]
      },
      mystic: {
        label: 'Mystic',
        recommended: [
          { name: 'Dachsbun', image: 'dachsbun.png', tier: 'green', types: ['fairy'], description: 'Tipo move: Fairy.' },
          { name: 'Fidough', image: 'fidough.png', tier: 'green', types: ['fairy'], description: 'Tipo move: Fairy.' },
          { name: 'Lombre', image: 'lombre.png', tier: 'green', types: ['water','grass'], description: 'Tipo move: Grass.' },
          { name: 'Hawlucha', image: 'hawlucha.png', tier: 'green', types: ['fighting','flying'], description: 'Tipo move: Fighting.' },
          { name: 'Mega Hawlucha', image: 'mega-hawlucha.png', tier: 'green', types: ['fighting','flying'], description: 'Tipo move: Fighting.' },
          { name: 'Duraludon', image: 'duraludon.png', tier: 'green', types: ['steel','dragon'], description: 'Tipo move: Electric.' }
        ]
      },
      valor: {
        label: 'Valor',
        recommended: [
          { name: 'Scyther', image: 'scyther.png', tier: 'green', types: ['bug','flying'], description: 'Tipo move: Bug.' },
          { name: 'Tauros', image: 'tauros.png', tier: 'green', types: ['normal'], description: 'Tipo move: Electric.' },
          { name: 'Pyroar Female', image: 'pyroar-female.png', tier: 'green', types: ['fire','normal'], description: 'Tipo move: Grass.' }
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
          { name: 'Alakazam', image: 'alakazam.png', tier: 'green', types: ['psychic'], description: 'Tipo move: Psychic.' },
          { name: 'Mega Gardevoir', image: 'mega-gardevoir.png', tier: 'green', types: ['psychic','fairy'], description: 'Tipo move: Fairy.' },
          { name: 'Dedenne', image: 'dedenne.png', tier: 'green', types: ['electric','fairy'], description: 'Tipo move: Fairy.' },
          { name: 'Seviper', image: 'seviper.png', tier: 'green', types: ['poison'], description: 'Tipo move: Poison.' }
        ]
      },
      mystic: {
        label: 'Mystic',
        recommended: [
          { name: 'Dewgong', image: 'dewgong.png', tier: 'green', types: ['water','ice'], description: 'Tipo move: Ice.' },
          { name: 'Qwilfish', image: 'qwilfish.png', tier: 'green', types: ['water','poison'], description: 'Tipo move: Poison.' },
          { name: 'Drifloom', image: 'Drifloon.png', tier: 'green', types: ['ghost','flying'], description: 'Tipo move: Fire.' },
          { name: 'Dachsbun', image: 'dachsbun.png', tier: 'green', types: ['fairy'], description: 'Tipo move: Fairy.' },
          { name: 'Fidough', image: 'fidough.png', tier: 'green', types: ['fairy'], description: 'Tipo move: Fairy.' },
          { name: "Melony's Frosmoth", image: 'frosmoth.png', tier: 'green', types: ['ice','bug'], description: 'Tipo move: Ice.' },
          { name: 'Mantine', image: 'mantine.png', tier: 'green', types: ['water','flying'], description: 'Tipo move: Flying.' },
          { name: 'Mega Skarmory', image: 'mega-skarmory.png', tier: 'green', types: ['steel','flying'], description: 'Tipo move: Flying.' }
        ]
      },
      valor: {
        label: 'Valor',
        recommended: [
          { name: "Farfetch'd", image: 'farfetchd.png', tier: 'green', types: ['flying','normal'], description: 'Tipo move: Flying.' },
          { name: 'Delphox', image: 'delphox.png', tier: 'green', types: ['fire','psychic'], description: 'Tipo move: Fire.' },
          { name: 'CharizardTwo', image: 'charizard.png', tier: 'green', types: ['fire','flying'], description: 'Tipo move: Fire.' },
          { name: 'Weavile', image: 'weavile.png', tier: 'green', types: ['dark','ice'], description: 'Tipo move: Ice.' },
          { name: 'May\'s Beautifly', image: 'may-beautifly.png', tier: 'green', types: ['flying','bug'], description: 'Tipo move: Flying.' },
          { name: 'Mega Absol Z', image: 'mega-absol-z.png', tier: 'green', types: ['dark','ghost'], description: 'Tipo move: Fairy.' }
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
          { name: 'Marowak', image: 'marowak.png', tier: 'green', types: ['ground'], description: 'Tipo move: Ground.' }
        ]
      },
      mystic: {
        label: 'Mystic',
        recommended: [
          { name: 'Banette', image: 'banette.png', tier: 'green', types: ['ghost'], description: 'Tipo move: Ghost.' },
          { name: 'BlastoiseTwo', image: 'blastoisetwo.png', tier: 'green', types: ['water'], description: 'Tipo move: Water.' },
          { name: 'Greninja', image: 'greninja.png', tier: 'green', types: ['water','dark'], description: 'Tipo move: Water.' },
          { name: 'Mega Gyarados', image: 'mega-gyarados.png', tier: 'green', types: ['water','dark'], description: 'Tipo move: Dark.' },
          { name: 'Seaking', image: 'seaking.png', tier: 'green', types: ['water'], description: 'Tipo move: Ground.' }
        ]
      },
      valor: {
        label: 'Valor',
        recommended: [
          { name: 'Bouffalant', image: 'bouffalant.png', tier: 'green', types: ['normal','ground'], description: 'Tipo move: Ground.' },
          { name: 'Absol', image: 'absol.png', tier: 'green', types: ['dark'], description: 'Tipo move: Dark.' },
          { name: 'Kabutops', image: 'kabutops.png', tier: 'green', types: ['rock','water'], description: 'Tipo move: Rock.' },
          { name: 'Cramorant', image: 'cramorant.png', tier: 'green', types: ['water','flying'], description: 'Tipo move: Water.' },
          { name: 'Mega Houndoom', image: 'mega-houndoom.png', tier: 'green', types: ['dark','fire'], description: 'Tipo move: Dark.' }
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
          { name: 'Alakazam', image: 'alakazam.png', tier: 'green', types: ['psychic'], description: 'Tipo move: Psychic.' }
        ]
      },
      mystic: {
        label: 'Mystic',
        recommended: [
          { name: 'Drifloom', image: 'Drifloon.png', tier: 'green', types: ['ghost','flying'], description: 'Tipo move: Fire.' },
          { name: 'Mega Skarmory', image: 'mega-skarmory.png', tier: 'green', types: ['steel','flying'], description: 'Tipo move: Flying.' },
          { name: 'Mega Starmie', image: 'mega-starmie.png', tier: 'green', types: ['water','psychic'], description: 'Tipo move: Psychic.' },
          { name: 'Mantine', image: 'mantine.png', tier: 'green', types: ['water','flying'], description: 'Tipo move: Flying.' }
        ]
      },
      valor: {
        label: 'Valor',
        recommended: [
          { name: 'Delphox', image: 'delphox.png', tier: 'green', types: ['fire','psychic'], description: 'Tipo move: Fire.' },
          { name: 'CharizardTwo', image: 'charizard.png', tier: 'green', types: ['fire','flying'], description: 'Tipo move: Fire.' },
          { name: "Farfetch'd", image: 'farfetchd.png', tier: 'green', types: ['flying','normal'], description: 'Tipo move: Flying.' },
          { name: "May's Beautifly", image: 'may-beautifly.png', tier: 'green', types: ['flying','bug'], description: 'Tipo move: Flying.' },
          { name: 'Kabutops', image: 'kabutops.png', tier: 'green', types: ['rock','water'], description: 'Tipo move: Rock.' }
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
    types: ['grass','fairy'],
    clans: {
      instinct: {
        label: 'Instinct',
        recommended: [
          { name: 'Seviper', image: 'seviper.png', tier: 'green', types: ['poison'], description: 'Tipo move: Poison.' }
        ]
      },
      mystic: {
        label: 'Mystic',
        recommended: [
          { name: 'Mantine', image: 'mantine.png', tier: 'green', types: ['water','flying'], description: 'Tipo move: Flying.' },
          { name: 'Drifloom', image: 'Drifloon.png', tier: 'green', types: ['ghost','flying'], description: 'Tipo move: Fire.' },
          { name: 'Qwilfish', image: 'qwilfish.png', tier: 'green', types: ['water','poison'], description: 'Tipo move: Poison.' },
          { name: "Melony's Frosmoth", image: 'frosmoth.png', tier: 'green', types: ['ice','bug'], description: 'Tipo move: Ice.' },
          { name: 'Mega Skarmory', image: 'mega-skarmory.png', tier: 'green', types: ['steel','flying'], description: 'Tipo move: Flying.' }
        ]
      },
      valor: {
        label: 'Valor',
        recommended: [
          { name: 'Bouffalant', image: 'bouffalant.png', tier: 'green', types: ['normal','ground'], description: 'Tipo move: Ground.' },
          { name: "Farfetch'd", image: 'farfetchd.png', tier: 'green', types: ['flying','normal'], description: 'Tipo move: Electric.' },
          { name: 'Delphox', image: 'delphox.png', tier: 'green', types: ['fire','psychic'], description: 'Tipo move: Fire.' },
          { name: 'CharizardTwo', image: 'charizard.png', tier: 'green', types: ['fire','flying'], description: 'Tipo move: Fire.' },
          { name: 'Scolipede', image: 'scolipede.png', tier: 'green', types: ['bug','poison'], description: 'Tipo move: Poison.' },
          { name: "May's Beautifly", image: 'may-beautifly.png', tier: 'green', types: ['flying','bug'], description: 'Tipo move: Flying.' }
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
    types: ['water','dragon'],
    clans: {
      instinct: {
        label: 'Instinct',
        recommended: [
          { name: 'Mega Gardevoir', image: 'mega-gardevoir.png', tier: 'green', types: ['psychic','fairy'], description: 'Tipo move: Fairy.' },
          { name: 'Dragonair', image: 'dragonair.png', tier: 'green', types: ['dragon'], description: 'Tipo move: Dragon.' },
          { name: 'Dedenne', image: 'dedenne.png', tier: 'green', types: ['electric','fairy'], description: 'Tipo move: Fairy.' },
          { name: "Rosa's Serperior", image: 'serperior.png', tier: 'green', types: ['grass'], description: 'Tipo move: Grass.' }
        ]
      },
      mystic: {
        label: 'Mystic',
        recommended: [
          { name: 'Mega Feraligatr', image: 'mega-feraligatr.png', tier: 'green', types: ['water','dragon'], description: 'Tipo move: Dragon.' },
          { name: 'Kingdra', image: 'kingdra.png', tier: 'green', types: ['water','dragon'], description: 'Tipo move: Dragon.' },
          { name: 'Dachsbun', image: 'dachsbun.png', tier: 'green', types: ['fairy'], description: 'Tipo move: Fairy.' },
          { name: 'Fidough', image: 'fidough.png', tier: 'green', types: ['fairy'], description: 'Tipo move: Fairy.' }
        ]
      },
      valor: {
        label: 'Valor',
        recommended: [
          { name: 'Mega Absol Z', image: 'mega-absol-z.png', tier: 'green', types: ['dark','ghost'], description: 'Tipo move: Fairy.' },
          { name: 'Ribombee', image: 'Ribombee.png', tier: 'green', types: ['bug','fairy'], description: 'Tipo move: Fairy.' }
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
    types: ['fairy','flying'],
    clans: {
      instinct: {
        label: 'Instinct',
        recommended: [
          { name: 'Raichu Y', image: 'mega-raichu-y.png', tier: 'green', types: ['electric'], description: 'Tipo move: Electric.' },
          { name: 'Excadrill', image: 'excadrill.png', tier: 'green', types: ['ground','steel'], description: 'Tipo move: Steel.' },
          { name: 'Seviper', image: 'seviper.png', tier: 'green', types: ['poison'], description: 'Tipo move: Poison.' },
          { name: 'Pikachu', image: 'pikachu.png', tier: 'green', types: ['electric'], description: 'Tipo move: Electric.' }
        ]
      },
      mystic: {
        label: 'Mystic',
        recommended: [
          { name: 'Lucario Z', image: 'mega-lucario-z.png', tier: 'green', types: ['fighting','steel'], description: 'Tipo move: Steel.' },
          { name: 'Qwilfish', image: 'qwilfish.png', tier: 'green', types: ['water','poison'], description: 'Tipo move: Poison.' },
          { name: 'Dewgong', image: 'dewgong.png', tier: 'green', types: ['water','ice'], description: 'Tipo move: Ice.' },
          { name: "Melony's Frosmoth", image: 'frosmoth.png', tier: 'green', types: ['ice','bug'], description: 'Tipo move: Ice.' },
          { name: 'Duraludon', image: 'duraludon.png', tier: 'green', types: ['steel','dragon'], description: 'Tipo move: Electric.' }
        ]
      },
      valor: {
        label: 'Valor',
        recommended: [
          { name: 'Scolipede', image: 'scolipede.png', tier: 'green', types: ['bug','poison'], description: 'Tipo move: Poison.' },
          { name: 'Scizor', image: 'scizor.png', tier: 'green', types: ['bug','steel'], description: 'Tipo move: Steel.' },
          { name: 'Cramorant', image: 'cramorant.png', tier: 'green', types: ['water','flying'], description: 'Tipo move: Water.' },
          { name: 'Kabutops', image: 'kabutops.png', tier: 'green', types: ['rock','water'], description: 'Tipo move: Rock.' },
          { name: 'Tauros', image: 'tauros.png', tier: 'green', types: ['normal'], description: 'Tipo move: Electric.' }
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
          { name: 'Pikachu', image: 'pikachu.png', tier: 'green', types: ['electric'], description: 'Tipo move: Electric.' },
          { name: 'Raichu Y', image: 'mega-raichu-y.png', tier: 'green', types: ['electric'], description: 'Tipo move: Electric.' }
        ]
      },
      mystic: {
        label: 'Mystic',
        recommended: [
          { name: 'Drifloom', image: 'Drifloon.png', tier: 'green', types: ['ghost','flying'], description: 'Tipo move: Fire.' },
          { name: 'Duraludon', image: 'duraludon.png', tier: 'green', types: ['steel','dragon'], description: 'Tipo move: Electric.' },
          { name: 'Mega Lucario Z', image: 'mega-lucario-z.png', tier: 'green', types: ['fighting','steel'], description: 'Tipo move: Steel.' }
        ]
      },
      valor: {
        label: 'Valor',
        recommended: [
          { name: 'Delphox', image: 'delphox.png', tier: 'green', types: ['fire','psychic'], description: 'Tipo move: Fire.' },
          { name: 'CharizardTwo', image: 'charizard.png', tier: 'green', types: ['fire','flying'], description: 'Tipo move: Fire.' },
          { name: 'Cramorant', image: 'cramorant.png', tier: 'green', types: ['water','flying'], description: 'Tipo move: Water.' }
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
          { name: 'Marowak', image: 'marowak.png', tier: 'green', types: ['ground'], description: 'Tipo move: Ground.' }
        ]
      },
      mystic: {
        label: 'Mystic',
        recommended: [
          { name: 'Orthworm', image: 'orthworm.png', tier: 'green', types: ['steel'], description: 'Tipo move: Ground.' },
          { name: 'Seaking', image: 'seaking.png', tier: 'green', types: ['water'], description: 'Tipo move: Ground.' }
        ]
      },
      valor: {
        label: 'Valor',
        recommended: [
          { name: 'Bouffalant', image: 'bouffalant.png', tier: 'green', types: ['normal','ground'], description: 'Tipo move: Ground.' }
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
          { name: 'Marowak', image: 'marowak.png', tier: 'green', types: ['ground'], description: 'Tipo move: Ground.' },
          { name: 'Mega Raichu X', image: 'mega-raichu-x.png', tier: 'green', types: ['electric','fighting'], description: 'Tipo move: Fighting.' }
        ]
      },
      mystic: {
        label: 'Mystic',
        recommended: [
          { name: 'Seaking', image: 'seaking.png', tier: 'green', types: ['water'], description: 'Tipo move: Ground.' },
          { name: 'Drifloom', image: 'Drifloon.png', tier: 'green', types: ['ghost','flying'], description: 'Tipo move: Fire.' },
          { name: 'Hawlucha', image: 'hawlucha.png', tier: 'green', types: ['fighting','flying'], description: 'Tipo move: Fighting.' }
        ]
      },
      valor: {
        label: 'Valor',
        recommended: [
          { name: 'Delphox', image: 'delphox.png', tier: 'green', types: ['fire','psychic'], description: 'Tipo move: Fire.' },
          { name: 'CharizardTwo', image: 'charizard.png', tier: 'green', types: ['fire','flying'], description: 'Tipo move: Fire.' }
        ]
      }
    }
  },
  {
    id: 'mega-absol',
    name: 'Mega Absol + Mega Absol Z',
    clan: 'valor',
    clanLabel: 'Valor',
    image: 'mega-absol.png',
    locationImage: 'localizações/absol.png',
    description: 'Mega Absol e Mega Absol Z são fracos contra fada; o Mega Absol normal também é fraco contra luta e inseto.',
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
          { name: 'Lurantis', image: 'lurantis.png', tier: 'green', types: ['grass'], description: 'Tipo move: Bug.' },
          { name: 'Dedenne', image: 'dedenne.png', tier: 'green', types: ['electric','fairy'], description: 'Tipo move: Fairy.' },
          { name: 'Mega Gardevoir', image: 'mega-gardevoir.png', tier: 'green', types: ['psychic','fairy'], description: 'Tipo move: Fairy.' },
          { name: 'Mega Raichu X', image: 'mega-raichu-x.png', tier: 'green', types: ['electric','fighting'], description: 'Tipo move: Fighting.' }
        ]
      },
      mystic: {
        label: 'Mystic',
        recommended: [
          { name: 'Dachsbun', image: 'dachsbun.png', tier: 'green', types: ['fairy'], description: 'Tipo move: Fairy.' },
          { name: 'Fidough', image: 'fidough.png', tier: 'green', types: ['fairy'], description: 'Tipo move: Fairy.' },
          { name: 'Hawlucha', image: 'hawlucha.png', tier: 'green', types: ['fighting','flying'], description: 'Tipo move: Fighting.' }
        ]
      },
      valor: {
        label: 'Valor',
        recommended: [
          { name: 'Scyther', image: 'scyther.png', tier: 'green', types: ['bug','flying'], description: 'Tipo move: Bug.' },
          { name: 'Mega Absol Z', image: 'mega-absol-z.png', tier: 'green', types: ['dark','ghost'], description: 'Tipo move: Fairy.' },
          { name: 'Ribombee', image: 'Ribombee.png', tier: 'green', types: ['bug','fairy'], description: 'Tipo move: Fairy.' }
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

// Type effectiveness tables (from types.json)
const typeEffectiveness = {
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

const typeResistances = {
  normal: [],
  fire: ['bug','steel','fire','grass','ice','fairy'],
  water: ['steel','fire','water','ice'],
  electric: ['electric','flying','steel'],
  grass: ['water','electric','grass','ground'],
  ice: ['ice'],
  fighting: ['bug','rock','dark'],
  poison: ['fighting','poison','bug','grass','fairy'],
  ground: ['poison','rock'],
  flying: ['fighting','bug','grass'],
  psychic: ['fighting','psychic'],
  bug: ['fighting','ground','grass'],
  rock: ['normal','fire','poison','flying'],
  ghost: ['poison','bug','grass','fighting'],
  dragon: ['fire','water','electric','grass'],
  dark: ['ghost','dark'],
  steel: ['normal','grass','ice','flying','psychic','bug','rock','dragon','steel','fairy'],
  fairy: ['fighting','bug','dark']
};

const typeImmunities = {
  normal: ['ghost'],
  ground: ['electric'],
  flying: ['ground'],
  ghost: ['normal','fighting'],
  dark: ['psychic'],
  steel: ['poison']
};

function getTypeMultiplier(attackingType, defendingTypes) {
  if (!attackingType || !defendingTypes || !defendingTypes.length) return 1;

  let multiplier = 1;
  for (const def of defendingTypes) {
    // If the defender type is immune to the attacking type, damage is 0.
    if (typeImmunities[def]?.includes(attackingType)) {
      return 0; // immediate immunity
    }
    if (typeEffectiveness[attackingType]?.includes(def)) {
      multiplier *= 2;
    } else if (typeResistances[def]?.includes(attackingType)) {
      multiplier *= 0.5;
    }
  }
  return multiplier;
}

function parseMoveType(poke) {
  if (!poke || typeof poke.description !== 'string') return null;
  const match = poke.description.match(/Tipo move:\s*([a-zA-Z]+)/i);
  return match ? match[1].toLowerCase() : null;
}

function rankRecommendedForBoss(bossTypes, recommendedList) {
  return recommendedList
    .map((poke) => {
      const moveType = parseMoveType(poke) || (poke.types && poke.types[0]);
      const offense = getTypeMultiplier(moveType, bossTypes);

      // Defense is based on boss types acting as attackers against the recommended poke types.
      const pokeTypes = Array.isArray(poke.types) ? poke.types : [];
      const defenseMultipliers = bossTypes.map((bossType) => getTypeMultiplier(bossType, pokeTypes));
      const bestDefense = Math.min(...defenseMultipliers); // best case (lowest damage taken)
      const worstDefense = Math.max(...defenseMultipliers); // worst case (highest damage taken)

      // Score offense (higher is better) and defense (lower worst-case is better)
      // Offense: prioritize super-effective hits, but still treat neutral as ok.
      const offenseScore =
        offense === 0 ? 0 :
        offense >= 4 ? 1 :
        offense === 2 ? 0.75 :
        offense === 1 ? 0.45 :
        0.2;

      // Defense: we want best-case immunity and punish high worst-case damage.
      const defenseScore =
        bestDefense === 0 ? 1 :
        worstDefense === 0.5 ? 0.85 :
        worstDefense === 1 ? 0.65 :
        worstDefense === 2 ? 0.35 :
        0.1;

      // Combined gives more weight to offense but still rewards good defense.
      const combined = offenseScore * 0.7 + defenseScore * 0.3;

      let tier = 'red';
      if (combined >= 0.82) tier = 'green';
      else if (combined >= 0.58) tier = 'yellow';
      else if (combined <= 0.25) tier = 'solo';

      return {
        ...poke,
        _score: combined,
        _offense: offense,
        _defenseWorst: worstDefense,
        _defenseBest: bestDefense,
        _moveType: moveType,
        tier,
      };
    })
    .sort((a, b) => {
      if (b._score !== a._score) return b._score - a._score;
      const tierPriority = { green: 0, yellow: 1, red: 2, solo: 3, unknown: 4 };
      return (tierPriority[a.tier] ?? 4) - (tierPriority[b.tier] ?? 4);
    });
}

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

const recommended = rankRecommendedForBoss(speedster.types || [], clanData?.recommended || []);

      if (recommended.length === 0) {
        const empty = document.createElement('div');
        empty.className = 'speedster-clan-empty';
        empty.textContent = 'Nenhuma recomendação disponível.';
        list.appendChild(empty);
      } else {
        recommended.forEach((poke) => {
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

        // Show offense/defense score as a small badge (less intrusive on the card)
        const score = document.createElement('div');
        score.className = 'speedster-reco-score';
        const atk = typeof poke._offense === 'number' ? poke._offense.toFixed(2) : '-';
        const def = typeof poke._defenseWorst === 'number' ? poke._defenseWorst.toFixed(2) : '-';
        score.textContent = `⚔️${atk}\n🛡️${def}`;
        // Append to card so it sits in the corner without affecting layout
        card.appendChild(score);

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
