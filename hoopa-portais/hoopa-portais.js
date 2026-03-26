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
    id: 'mega-starmie',
    name: 'Mega Starmie',
    clan: 'mystic',
    clanLabel: 'Mystic',
    image: 'mega-starmie.png',
    locationImage: 'localizações/starmie.png',
    description: 'Mega Starmie aproveita água e psíquico; comece com vantagem de tipo.',
    types: ['water','psychic'],
    clans: {
      instinct: {
        label: 'Instinct',
        recommended: [
          { name: 'Lurantis', image: 'lurantis.png', tier: 'yellow', types: ['grass'], description: 'Tipo move: Bug.' },
          { name: 'Pikachu', image: 'pikachu.png', tier: 'yellow', types: ['electric'], description: 'Tipo move: Electric.' },
          { name: 'Shiftry', image: 'shiftry.png', tier: 'green', types: ['grass','dark'], description: 'Tipo move: Dark.' },
          { name: 'Mega Sceptile', image: 'mega-sceptile.png', tier: 'yellow', types: ['grass','dragon'], description: 'Tipo move: Grass.' },
          { name: "Rosa's Serperior", image: 'serperior.png', tier: 'yellow', types: ['grass'], description: 'Tipo move: Grass.' },
          { name: 'Raichu Y', image: 'mega-raichu-y.png', tier: 'yellow', types: ['electric'], description: 'Tipo move: Electric.' }
        ]
      },
      mystic: {
        label: 'Mystic',
        recommended: [
          { name: 'Duraludon', image: 'duraludon.png', tier: 'yellow', types: ['steel','dragon'], description: 'Tipo move: Electric.' },
          { name: 'Banette', image: 'banette.png', tier: 'yellow', types: ['ghost'], description: 'Tipo move: Ghost.' },
          { name: 'Mega Gyarados', image: 'mega-gyarados.png', tier: 'green', types: ['water','dark'], description: 'Tipo move: Dark.' },
          { name: 'Lombre', image: 'lombre.png', tier: 'yellow', types: ['water','grass'], description: 'Tipo move: Grass.' }
        ]
      },
      valor: {
        label: 'Valor',
        recommended: [
          { name: 'Tauros', image: 'tauros.png', tier: 'yellow', types: ['normal'], description: 'Tipo move: Electric.' },
          { name: 'Absol', image: 'absol.png', tier: 'green', types: ['dark'], description: 'Tipo move: Dark.' },
          { name: 'Mega Absol Z', image: 'mega-absol-z.png', tier: 'green', types: ['dark','ghost'], description: 'Tipo move: Dark/Fairy.' },
          { name: 'Scyther', image: 'scyther.png', tier: 'yellow', types: ['bug','flying'], description: 'Tipo move: Bug.' },
          { name: 'Mega Houndoom', image: 'mega-houndoom.png', tier: 'green', types: ['dark','fire'], description: 'Tipo move: Dark.' },
          { name: 'Pyroar Female', image: 'pyroar-female.png', tier: 'yellow', types: ['fire','normal'], description: 'Tipo move: Grass.' }
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
          { name: 'Seaking', image: 'seaking.png', tier: 'green', types: ['water'], immunities: ['electric'], description: 'Tipo move: Ground.' }
        ]
      },
      valor: {
        label: 'Valor',
        recommended: [
          { name: 'Bouffalant', image: 'bouffalant.png', tier: 'green', types: ['normal','ground'], description: 'Tipo move: Ground.' },
          { name: 'Absol', image: 'absol.png', tier: 'green', types: ['dark'], description: 'Tipo move: Dark.' },
          { name: 'Mega Absol Z', image: 'mega-absol-z.png', tier: 'green', types: ['dark','ghost'], description: 'Tipo move: Dark/Fairy.' },
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
          { name: 'Dragonair', image: 'dragonair.png', tier: 'green', types: ['dragon'], description: 'Tipo move: Dragon. Passiva: tanka Dragon (1x).', matchupOverrides: { 'mega-feraligatr': { defenseByBossType: { dragon: 1 } } } },
          { name: 'Dedenne', image: 'dedenne.png', tier: 'green', types: ['electric','fairy'], description: 'Tipo move: Fairy.' },
          { name: "Rosa's Serperior", image: 'serperior.png', tier: 'green', types: ['grass'], description: 'Tipo move: Grass. Passiva: 2x em Dragon.', matchupOverrides: { 'mega-feraligatr': { offense: 2 } } }
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
          { name: 'Seaking', image: 'seaking.png', tier: 'green', types: ['water'], immunities: ['electric'], description: 'Tipo move: Ground.' }
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
          { name: 'Seaking', image: 'seaking.png', tier: 'green', types: ['water'], immunities: ['electric'], description: 'Tipo move: Ground.' },
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
  },
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

const speedsterSearchInput = document.getElementById('speedster-search');
const speedsterSearchResults = document.getElementById('speedster-search-results');
const speedsterSearchNoResults = document.getElementById('speedster-search-no-results');

let currentBoss = null;

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

function getTypeMultiplier(attackingType, defendingTypes, defenderImmunities = []) {
  if (!attackingType || !defendingTypes || !defendingTypes.length) return 1;

  let multiplier = 1;
  for (const def of defendingTypes) {
    // If the defender is immune to the attacking type via passive/ability or type immunities, damage is 0.
    if (Array.isArray(defenderImmunities) && defenderImmunities.includes(attackingType)) {
      return 0; // immediate immunity
    }
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

function getMatchupOverride(poke, boss) {
  const bossId = typeof boss === 'string' ? boss : boss?.id;
  if (!bossId || !poke || typeof poke !== 'object') return null;
  return poke.matchupOverrides?.[bossId] || null;
}

function rankRecommendedForBoss(bossOrTypes, recommendedList) {
  const boss = Array.isArray(bossOrTypes) ? { types: bossOrTypes } : (bossOrTypes || {});
  const bossTypes = Array.isArray(boss.types) ? boss.types : [];
  return recommendedList
    .map((poke) => {
      const moveType = parseMoveType(poke) || (poke.types && poke.types[0]);
      const matchupOverride = getMatchupOverride(poke, boss);
      const offense = typeof matchupOverride?.offense === 'number'
        ? matchupOverride.offense
        : getTypeMultiplier(moveType, bossTypes);

      // Defense is based on boss types acting as attackers against the recommended poke types.
      const pokeTypes = Array.isArray(poke.types) ? poke.types : [];
      const defenseMultipliers = bossTypes.map((bossType) => {
        const customMultiplier = matchupOverride?.defenseByBossType?.[bossType];
        if (typeof customMultiplier === 'number') return customMultiplier;
        return getTypeMultiplier(bossType, pokeTypes, poke.immunities);
      });
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

function formatSearchLabel(speedster) {
  const sprite = document.createElement('img');
  sprite.className = 'speedster-search-item-icon';
  sprite.src = basePath + (speedster.image || '');
  sprite.alt = speedster.name;
  sprite.title = speedster.name;
  sprite.loading = 'lazy';
  sprite.style.width = '24px';
  sprite.style.height = '24px';
  sprite.style.borderRadius = '50%';

  const typeIcons = (speedster.types || []).slice(0, 2).map((type) => {
    const img = document.createElement('img');
    img.className = 'speedster-search-item-icon';
    img.src = iconBase + `${type}.png`;
    img.alt = `${type}`;
    img.title = type.charAt(0).toUpperCase() + type.slice(1);
    img.loading = 'lazy';
    return img;
  });
  const moveType = parseMoveType(speedster) || (speedster.types && speedster.types[0]);
  const moveIcon = document.createElement('img');
  moveIcon.className = 'speedster-search-item-icon';
  moveIcon.src = iconBase + `${moveType || 'normal'}.png`;
  moveIcon.alt = `${moveType || 'tipo'}`;
  moveIcon.title = moveType ? moveType.charAt(0).toUpperCase() + moveType.slice(1) : 'Tipo';
  moveIcon.loading = 'lazy';

  const name = document.createElement('span');
  name.textContent = speedster.name;
  name.style.flex = '1';

  const container = document.createElement('div');
  container.style.display = 'flex';
  container.style.alignItems = 'center';
  container.style.gap = '0.25rem';
  container.appendChild(sprite);
  typeIcons.forEach((i) => container.appendChild(i));
  container.appendChild(name);
  container.appendChild(moveIcon);
  return container;
}

function getRecommendedSpeedsters() {
  const map = new Map();

  hoopaPortalsData.forEach((boss) => {
    Object.values(boss.clans || {}).forEach((clanData) => {
      (clanData.recommended || []).forEach((poke) => {
        const key = `${poke.name.toLowerCase()}|${poke.image || ''}`;
        if (!map.has(key)) {
          map.set(key, {
            ...poke,
            bossEntries: []
          });
        }

        const entry = map.get(key);
        entry.bossEntries.push({
          bossName: boss.name,
          bossData: boss,
          sourceClan: clanData.label || '',
          sourceBossTier: poke.tier || 'unknown'
        });
      });
    });
  });

  return Array.from(map.values());
}

function renderSearchResults(query = '') {
  if (!speedsterSearchResults || !speedsterSearchNoResults) return;
  const q = String(query || '').trim().toLowerCase();

  const availableSpeedsters = getRecommendedSpeedsters();
  const filtered = q
    ? availableSpeedsters.filter((st) => {
        const bossName = currentBoss?.name || (st.bossEntries?.[0]?.bossName || '');
        const base = `${st.name} ${bossName} ${(st.types || []).join(' ')} ${st.description || ''}`.toLowerCase();
        return base.includes(q);
      })
    : availableSpeedsters;

  if (filtered.length === 0) {
    speedsterSearchResults.innerHTML = '';
    speedsterSearchResults.hidden = true;
    speedsterSearchNoResults.hidden = q ? false : true;
    return;
  }

  speedsterSearchNoResults.hidden = true;
  speedsterSearchResults.hidden = false;
  speedsterSearchResults.innerHTML = '';

  speedsterSearchNoResults.hidden = true;
  speedsterSearchResults.hidden = false;

  filtered.forEach((st) => {
    const item = document.createElement('button');
    item.type = 'button';
    item.className = 'speedster-search-item';
    item.setAttribute('aria-label', `Abrir boss que usa ${st.name}`);
    item.setAttribute('data-speedster', st.name);

    const content = formatSearchLabel(st);

    // Remover o ponto de tier na lista de busca, conforme solicitado.
    // Mantemos somente o texto do nome e demais informações.
    item.appendChild(content);
    item.addEventListener('click', () => {
      openSpeedsterBossesModal(st);
      hideSearchResults();
    });

    speedsterSearchResults.appendChild(item);
  });
}

function hideSearchResults() {
  if (!speedsterSearchResults || !speedsterSearchNoResults) return;
  speedsterSearchResults.hidden = true;
  speedsterSearchNoResults.hidden = true;
}

function closeSearchPanel() {
  hideSearchResults();
}

function getBossesForSpeedster(speedsterName) {
  const lower = String(speedsterName || '').toLowerCase();
  return hoopaPortalsData.filter((boss) =>
    Object.values(boss.clans || {}).some((clanData) =>
      (clanData.recommended || []).some((poke) => String(poke.name || '').toLowerCase() === lower)
    )
  );
}

function getSpeedsterTierForBoss(boss, speedsterName) {
  const lower = String(speedsterName || '').toLowerCase();
  for (const clanData of Object.values(boss.clans || {})) {
    const found = (clanData.recommended || []).find((poke) => String(poke.name || '').toLowerCase() === lower);
    if (found) {
      return (found.tier || '').trim();
    }
  }
  return '';
}

function getComputedSpeedsterTierInBoss(boss, speedsterName) {
  const lower = String(speedsterName || '').toLowerCase();
  if (!boss || !speedsterName) return 'unknown';

  const clansOrder = ['instinct', 'mystic', 'valor'];
  for (const clanKey of clansOrder) {
    const clanData = boss.clans?.[clanKey];
    if (!clanData?.recommended?.length) continue;

    const ranked = rankRecommendedForBoss(boss, clanData.recommended);
    const found = ranked.find((poke) => String(poke.name || '').toLowerCase() === lower);
    if (found) return found.tier || 'unknown';
  }

  // Fallback to static dataset if not found in computed ranking.
  const staticTier = getSpeedsterTierForBoss(boss, speedsterName);
  return staticTier || 'unknown';
}

function openSpeedsterBossesModal(speedster) {
  const bosses = getBossesForSpeedster(speedster.name);
  modalTitle.textContent = `${speedster.name} (Speedster)`;
  modalSubtitle.textContent = bosses.length > 0 ? `Usado por ${bosses.length} boss(es)` : 'Não encontrado em nenhum boss';

  const pokemonImgLeft = document.getElementById('modal-pokemon-img-left');
  const pokemonImgRight = document.getElementById('modal-pokemon-img');
  if (pokemonImgLeft) {
    pokemonImgLeft.src = basePath + (speedster.image || '');
    pokemonImgLeft.alt = speedster.name;
  }
  if (pokemonImgRight) {
    pokemonImgRight.src = basePath + (speedster.image || '');
    pokemonImgRight.alt = speedster.name;
  }

  modalBody.innerHTML = '';
  const section = document.createElement('div');
  section.className = 'speedster-clan-section';

  const list = document.createElement('div');
  list.className = 'speedster-clan-list';

  if (bosses.length === 0) {
    const empty = document.createElement('div');
    empty.className = 'speedster-clan-empty';
    empty.textContent = 'Nenhum boss encontrado para este speedster.';
    list.appendChild(empty);
  } else {
    bosses.forEach((boss) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'speedster-search-item';
      button.style.justifyContent = 'space-between';
      button.textContent = boss.name;

      const tier = getComputedSpeedsterTierInBoss(boss, speedster.name);
      if (tier) {
        const dot = document.createElement('span');
        dot.className = `tier-dot tier-${tier}`;
        dot.style.marginLeft = '0.5rem';
        dot.setAttribute('aria-label', `Tier ${tier}`);
        button.appendChild(dot);
      }

      button.addEventListener('click', () => {
        openModal(boss);
      });
      list.appendChild(button);
    });
  }

  section.appendChild(list);
  modalBody.appendChild(section);

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

function openModal(speedster) {
  currentBoss = speedster;
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

const recommended = rankRecommendedForBoss(speedster, clanData?.recommended || []);

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
  currentBoss = null;
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

const speedsterSearchPanel = document.querySelector('.speedster-search-panel');
const speedsterSearchDesktopQuery = window.matchMedia('(max-width: 1080px)');

if (speedsterSearchPanel) {
  const speedsterSearchDragHandle = document.createElement('div');
  speedsterSearchDragHandle.className = 'speedster-search-drag-handle';
  speedsterSearchDragHandle.textContent = 'Mover busca';
  speedsterSearchPanel.insertBefore(speedsterSearchDragHandle, speedsterSearchPanel.firstChild);

  const speedsterSearchCloseBtn = document.createElement('button');
  speedsterSearchCloseBtn.type = 'button';
  speedsterSearchCloseBtn.className = 'speedster-search-close';
  speedsterSearchCloseBtn.setAttribute('aria-label', 'Fechar pesquisa');
  speedsterSearchCloseBtn.textContent = '✖';

  speedsterSearchCloseBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    closeSearchPanel();
  });

  // Prevent clicks inside the panel from reaching document click handler
  speedsterSearchPanel.addEventListener('click', (event) => event.stopPropagation());
  speedsterSearchPanel.addEventListener('pointerdown', (event) => event.stopPropagation());

  speedsterSearchPanel.appendChild(speedsterSearchCloseBtn);

  let searchDragState = null;

  const stopSearchPanelDrag = () => {
    if (!searchDragState) return;
    searchDragState = null;
    speedsterSearchDragHandle.classList.remove('is-dragging');
  };

  const resetSearchPanelPosition = () => {
    stopSearchPanelDrag();
    speedsterSearchPanel.classList.remove('is-floating');
    speedsterSearchPanel.style.left = '';
    speedsterSearchPanel.style.top = '';
    speedsterSearchPanel.style.right = '';
    speedsterSearchPanel.style.bottom = '';
  };

  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

  speedsterSearchDragHandle.addEventListener('pointerdown', (event) => {
    if (speedsterSearchDesktopQuery.matches || event.button !== 0) return;

    const host = speedsterSearchPanel.closest('.calc-card');
    if (!host) return;

    const hostRect = host.getBoundingClientRect();
    const panelRect = speedsterSearchPanel.getBoundingClientRect();

    searchDragState = {
      host,
      offsetX: event.clientX - panelRect.left,
      offsetY: event.clientY - panelRect.top
    };

    speedsterSearchPanel.classList.add('is-floating');
    speedsterSearchPanel.style.left = `${panelRect.left - hostRect.left}px`;
    speedsterSearchPanel.style.top = `${panelRect.top - hostRect.top}px`;
    speedsterSearchPanel.style.right = 'auto';
    speedsterSearchPanel.style.bottom = 'auto';
    speedsterSearchDragHandle.classList.add('is-dragging');
    event.preventDefault();
  });

  window.addEventListener('pointermove', (event) => {
    if (!searchDragState) return;

    const hostRect = searchDragState.host.getBoundingClientRect();
    const panelWidth = speedsterSearchPanel.offsetWidth;
    const panelHeight = speedsterSearchPanel.offsetHeight;
    const maxLeft = Math.max(0, hostRect.width - panelWidth);
    const maxTop = Math.max(0, hostRect.height - panelHeight);
    const nextLeft = clamp(event.clientX - hostRect.left - searchDragState.offsetX, 0, maxLeft);
    const nextTop = clamp(event.clientY - hostRect.top - searchDragState.offsetY, 0, maxTop);

    speedsterSearchPanel.style.left = `${nextLeft}px`;
    speedsterSearchPanel.style.top = `${nextTop}px`;
  });

  window.addEventListener('pointerup', stopSearchPanelDrag);
  window.addEventListener('pointercancel', stopSearchPanelDrag);
  speedsterSearchDesktopQuery.addEventListener('change', resetSearchPanelPosition);
}

if (speedsterSearchInput) {
  speedsterSearchInput.addEventListener('focus', () => {
    const value = speedsterSearchInput.value.trim();
    if (value) renderSearchResults(value);
    else renderSearchResults('');
  });

  speedsterSearchInput.addEventListener('input', (event) => {
    renderSearchResults(event.target.value);
  });

  speedsterSearchInput.addEventListener('blur', () => {
    setTimeout(() => {
      const active = document.activeElement;
      if (!speedsterSearchPanel || !speedsterSearchPanel.contains(active)) {
        hideSearchResults();
      }
    }, 100);
  });
}

// Close search panel on click outside
// (click em qualquer lugar fora do painel fecha)
document.addEventListener('click', (event) => {
  const searchPanel = document.querySelector('.speedster-search-panel');
  if (!searchPanel || searchPanel.contains(event.target)) return;
  closeSearchPanel();
});

// Close search panel with ESC também
window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeSearchPanel();
    if (modal && modal.getAttribute('data-open') === 'true') {
      closeModal();
    }
  }
});

renderGrid();
