// Edite apenas este bloco diariamente para atualizar o aviso em rolagem do Hoopa.
// `mode` aceita:
// - 'daily': monta "Os Hoopa Portais de hoje sao: ..."
// - 'all-open': mostra "Portal Break! Todos os Hoopas estao disponiveis."
// - 'custom': usa `customMessage` exatamente como foi escrito
// - 'hidden': esconde o aviso
// Em `bosses`, voce pode usar nome ou id do boss.
const hoopaPortalTickerConfig = {
  mode: 'daily',
  bosses: ['Mega Malamar', 'Mega Lucario'],
  prefix: 'Os Hoopa Portais de hoje sao:',
  customMessage: ''
};

const hoopaPortalsData = [
  {
    id: 'mega-staraptor',
    name: 'Mega Staraptor',
    clan: 'instinct',
    clanLabel: 'Instinct',
    image: 'megastaraptor.png',
    tutorialUrl: 'https://youtu.be/bIaP3XhPhoI?si=cR89WVZK_2Bm24A-',
    locationImage: 'localizações/staraptor.png',
    description: 'Se não tiver nenhuma recomendação disponível, lembre-se de usar um Speedster.',
    types: ['fighting','flying'],
    moveType: ['flying', 'fighting'],
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
          { name: "Melony's Frosmoth", image: 'frosmoth.png', tier: 'green', types: ['ice','bug'], description: 'Tipo move: Ice. Passiva: Ice Scales: Garante resistencia contra Flying e Dragon.', matchupOverrides: { 'mega-staraptor': { defenseByBossType: { fighting: 1, flying: 0.5 } } } },
          { name: 'Mantine', image: 'mantine.png', tier: 'green', types: ['water','flying'], description: 'Tipo move: Flying.' }
        ]
      },
      valor: {
        label: 'Valor',
        recommended: [
          { name: 'Ribombee', image: 'Ribombee.png', tier: 'green', types: ['bug','fairy'], description: 'Tipo move: Fairy.' },
          { name: "May's Beautifly", image: 'may-beautifly.png', tier: 'green', types: ['bug','flying'], description: 'Tipo move: Flying.' },
          { name: "Farfetch'd", image: 'farfetchd.png', tier: 'green', types: ['normal','flying'], description: 'Tipo move: Flying.' },
          { name: 'Cramorant', image: 'cramorant.png', tier: 'green', types: ['flying','water'], description: 'Tipo move: Flying.' }
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
    tutorialUrl: 'https://youtu.be/eMzej82yuy0?si=72OAgeSFPyXSNsLz',
    locationImage: 'localizações/victreebel.png',
    description: 'Use pokémons com cobertura de tipos para lidar com veneno e grama.',
    types: ['grass','poison'],
    moveType: 'poison',
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
          { name: 'Drifloom', image: 'drifloon.png', tier: 'green', types: ['ghost','flying'], description: 'Tipo move: Fire.' },
          { name: 'Mega Starmie', image: 'mega-starmie.png', tier: 'green', types: ['water','psychic'], description: 'Tipo move: Psychic.' }
        ]
      },
      valor: {
        label: 'Valor',
        recommended: [
          { name: "Farfetch'd", image: 'farfetchd.png', tier: 'green', types: ['normal','flying'], description: 'Tipo move: Flying.' },
          { name: "May's Beautifly", image: 'may-beautifly.png', tier: 'green', types: ['bug','flying'], description: 'Tipo move: Flying.' },
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
    tutorialUrl: 'https://youtu.be/WsHx1UQZ_k4?si=fk2V0TYuJYIt0tVs',
    locationImage: 'localizações/malamar.png',
    description: 'Acerte com ataques rápidos antes que comece a confusão.',
    types: ['dark','psychic'],
    moveType: 'psychic',
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
          { name: 'Dachsbun', image: 'dachsbun.png', tier: 'green', types: ['fairy'], description: 'Tipo move: Fairy.' }
        ]
      },
      valor: {
        label: 'Valor',
        recommended: [
          { name: 'Scyther', image: 'scyther.png', tier: 'green', types: ['bug','flying'], description: 'Tipo move: Bug.' },
          { name: 'Shiny Scyther', image: 'scyther.png', tier: 'green', types: ['bug','flying'], description: 'Tipo move: Bug.' },
          { name: 'Ribombee', image: 'Ribombee.png', tier: 'green', types: ['bug','fairy'], description: 'Tipo move: Fairy.' },
          { name: 'Mega Absol Z', image: 'mega-absol-z.png', tier: 'green', types: ['dark'], description: 'Tipo move: Fairy.' }
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
    tutorialUrl: 'https://youtu.be/YHYnuSjlgzo?si=5dCSF9RxOkfweYon',
    locationImage: 'localizações/hawlucha.png',
    description: 'Movimentos de luta e voo para dominar o campo.',
    types: ['fighting','flying'],
    moveType: 'fighting',
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
          { name: "Melony's Frosmoth", image: 'frosmoth.png', tier: 'green', types: ['ice','bug'], description: 'Tipo move: Ice.' },
          { name: 'Mantine', image: 'mantine.png', tier: 'green', types: ['water','flying'], description: 'Tipo move: Flying.' },
          { name: 'Mega Starmie', image: 'mega-starmie.png', tier: 'green', types: ['water','psychic'], description: 'Tipo move: Psychic.' }
        ]
      },
      valor: {
        label: 'Valor',
        recommended: [
          { name: 'Cramorant', image: 'cramorant.png', tier: 'green', types: ['flying','water'], description: 'Tipo move: Flying.' },
          { name: "Farfetch'd", image: 'farfetchd.png', tier: 'green', types: ['normal','flying'], description: 'Tipo move: Flying.' },
          { name: "May's Beautifly", image: 'may-beautifly.png', tier: 'green', types: ['bug','flying'], description: 'Tipo move: Flying.' },
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
    tutorialUrl: 'https://youtu.be/lo0LeyA6o1Y?si=ymoj9jW4YA_h6xXE',
    locationImage: 'localizações/starmie.png',
    description: 'Mega Starmie aproveita água e psíquico; comece com vantagem de tipo.',
    types: ['water','psychic'],
    moveType: 'psychic',
    clans: {
      instinct: {
        label: 'Instinct',
        recommended: [
          { name: 'Lurantis', image: 'lurantis.png', tier: 'yellow', types: ['grass'], description: 'Tipo move: Bug.' },
          { name: 'Pikachu', image: 'pikachu.png', tier: 'yellow', types: ['electric'], description: 'Tipo move: Electric.' },
          { name: 'Shiftry', image: 'shiftry.png', tier: 'green', types: ['grass','dark'], description: 'Tipo move: Dark.' },
          { name: 'Mega Sceptile', image: 'mega-sceptile.png', tier: 'yellow', types: ['grass','dragon'], description: 'Tipo move: Grass.' },
          { name: "Rosa's Serperior", image: 'serperior.png', tier: 'red', types: ['grass'], description: 'Tipo move: Grass.' },
          { name: 'Mega Raichu Y', image: 'mega-raichu-y.png', tier: 'yellow', types: ['electric'], description: 'Tipo move: Electric.' }
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
          { name: 'Mega Absol Z', image: 'mega-absol-z.png', tier: 'green', types: ['dark'], description: 'Tipo move: Dark/Fairy.' },
          { name: 'Scyther', image: 'scyther.png', tier: 'yellow', types: ['bug','flying'], description: 'Tipo move: Bug.' },
          { name: 'Shiny Scyther', image: 'scyther.png', tier: 'yellow', types: ['bug','flying'], description: 'Tipo move: Bug.' },
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
    tutorialUrl: 'https://youtu.be/5eVV408Z-ws?si=I72uhoWlzCLyXoj-',
    locationImage: 'localizações/greninja.png',
    description: 'Furtivo e rápido, aproveite vantagem de tipos.',
    types: ['water','dark'],
    moveType: 'water',
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
          { name: "Rosa's Serperior", image: 'serperior.png', tier: 'yellow', types: ['grass'], description: 'Tipo move: Grass.' },
          { name: 'Mega Raichu X', image: 'mega-raichu-x.png', tier: 'green', types: ['electric','fighting'], description: 'Tipo move: Fighting.' }
        ]
      },
      mystic: {
        label: 'Mystic',
        recommended: [
          { name: 'Dachsbun', image: 'dachsbun.png', tier: 'green', types: ['fairy'], description: 'Tipo move: Fairy.' },
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
          { name: 'Shiny Scyther', image: 'scyther.png', tier: 'green', types: ['bug','flying'], description: 'Tipo move: Bug.' },
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
    tutorialUrl: 'https://youtu.be/r-Cs02r8BJY?si=8MMOm7nP2L9mWZBh',
    locationImage: 'localizações/chesnaught.png',
    description: 'Tanque com defesa alta; utilize golpes precisos.',
    types: ['grass','fighting'],
    moveType: 'grass',
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
          { name: 'Drifloom', image: 'drifloon.png', tier: 'green', types: ['ghost','flying'], description: 'Tipo move: Fire.' },
          { name: 'Dachsbun', image: 'dachsbun.png', tier: 'green', types: ['fairy'], description: 'Tipo move: Fairy.' },
          { name: "Melony's Frosmoth", image: 'frosmoth.png', tier: 'green', types: ['ice','bug'], description: 'Tipo move: Ice.' },
          { name: 'Mantine', image: 'mantine.png', tier: 'green', types: ['water','flying'], description: 'Tipo move: Flying.' },
          { name: 'Mega Skarmory', image: 'mega-skarmory.png', tier: 'green', types: ['steel','flying'], description: 'Tipo move: Flying.' }
        ]
      },
      valor: {
        label: 'Valor',
        recommended: [
          { name: "Farfetch'd", image: 'farfetchd.png', tier: 'green', types: ['normal','flying'], description: 'Tipo move: Flying.' },
          { name: 'Delphox', image: 'delphox.png', tier: 'green', types: ['fire','psychic'], description: 'Tipo move: Fire.' },
          { name: 'CharizardTwo', image: 'charizard.png', tier: 'green', types: ['fire','flying'], description: 'Tipo move: Fire.' },
          { name: 'Weavile', image: 'weavile.png', tier: 'green', types: ['dark','ice'], description: 'Tipo move: Ice.' },
          { name: 'May\'s Beautifly', image: 'may-beautifly.png', tier: 'green', types: ['bug','flying'], description: 'Tipo move: Flying.' },
          { name: 'Mega Absol Z', image: 'mega-absol-z.png', tier: 'green', types: ['dark'], description: 'Tipo move: Fairy.' }
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
    tutorialUrl: 'https://youtu.be/NeURX_oLHWc?si=TyIQL2vSDlevec3l',
    locationImage: 'localizações/delphox.png',
    description: 'Fogo e psíquico combinados para controle de campo.',
    types: ['fire','psychic'],
    moveType: 'fire',
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
          { name: 'Bouffalant', image: 'bouffalant.png', tier: 'green', types: ['normal'], description: 'Tipo move: Ground.' },
          { name: 'Absol', image: 'absol.png', tier: 'green', types: ['dark'], description: 'Tipo move: Dark.' },
          { name: 'Mega Absol Z', image: 'mega-absol-z.png', tier: 'green', types: ['dark'], description: 'Tipo move: Dark/Fairy.' },
          { name: 'Kabutops', image: 'kabutops.png', tier: 'green', types: ['rock','water'], description: 'Tipo move: Rock.' },
          { name: 'Cramorant', image: 'cramorant.png', tier: 'green', types: ['flying','water'], description: 'Tipo move: Flying.' },
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
    tutorialUrl: 'https://youtu.be/AhYXq9BbAiA?si=GArbhaCkRCczp_qf',
    locationImage: 'localizações/scolipede.png',
    description: 'Velocidade venenosa; controle o campo com precisão.',
    types: ['bug','poison'],
    moveType: 'poison',
    clans: {
      instinct: {
        label: 'Instinct',
        recommended: [
          { name: 'Alakazam', image: 'alakazam.png', tier: 'green', types: ['psychic'], description: 'Tipo move: Psychic.' },
          { name: 'Marowak', image: 'marowak.png', types: ['ground'], description: 'Tipo move: Ground.', matchupOverrides: { 'mega-scolipede': { defenseByBossType: { poison: 0.5 } } } }
        ]
      },
      mystic: {
        label: 'Mystic',
        recommended: [
          { name: 'Drifloom', image: 'drifloon.png', tier: 'green', types: ['ghost','flying'], description: 'Tipo move: Fire.' },
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
          { name: "Farfetch'd", image: 'farfetchd.png', tier: 'green', types: ['normal','flying'], description: 'Tipo move: Flying.' },
          { name: "May's Beautifly", image: 'may-beautifly.png', tier: 'green', types: ['bug','flying'], description: 'Tipo move: Flying.' },
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
    tutorialUrl: 'https://youtu.be/Hxh3tVixH6s?si=icpjZK1OfsLs14sz',
    locationImage: 'localizações/meganium.png',
    description: 'Folhas que curam a equipe enquanto controla o campo.',
    types: ['grass','fairy'],
    moveType: 'grass',
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
          { name: 'Drifloom', image: 'drifloon.png', tier: 'green', types: ['ghost','flying'], description: 'Tipo move: Fire.' },
          { name: 'Qwilfish', image: 'qwilfish.png', tier: 'green', types: ['water','poison'], description: 'Tipo move: Poison.' },
          { name: "Melony's Frosmoth", image: 'frosmoth.png', tier: 'green', types: ['ice','bug'], description: 'Tipo move: Ice.' },
          { name: 'Mega Skarmory', image: 'mega-skarmory.png', tier: 'green', types: ['steel','flying'], description: 'Tipo move: Flying.' }
        ]
      },
      valor: {
        label: 'Valor',
        recommended: [
          { name: 'Bouffalant', image: 'bouffalant.png', tier: 'green', types: ['normal'], description: 'Tipo move: Ground.' },
          { name: "Farfetch'd", image: 'farfetchd.png', tier: 'green', types: ['normal','flying'], description: 'Tipo move: Flying.' },
          { name: 'Delphox', image: 'delphox.png', tier: 'green', types: ['fire','psychic'], description: 'Tipo move: Fire.' },
          { name: 'CharizardTwo', image: 'charizard.png', tier: 'green', types: ['fire','flying'], description: 'Tipo move: Fire.' },
          { name: 'Scolipede', image: 'scolipede.png', tier: 'green', types: ['bug','poison'], description: 'Tipo move: Poison.' },
          { name: "May's Beautifly", image: 'may-beautifly.png', tier: 'green', types: ['bug','flying'], description: 'Tipo move: Flying.' }
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
    tutorialUrl: 'https://youtu.be/e6TlBSXwt64?si=rQfvrda4fIdHDJrJ',
    locationImage: 'localizações/feraligatr.png',
    description: 'Força bruta aquática; punhos d’água devastadores.',
    types: ['water','dragon'],
    moveType: 'dragon',
    clans: {
      instinct: {
        label: 'Instinct',
        recommended: [
          { name: 'Mega Gardevoir', image: 'mega-gardevoir.png', tier: 'green', types: ['psychic','fairy'], description: 'Tipo move: Fairy.' },
          { name: 'Dragonair', image: 'dragonair.png', tier: 'green', types: ['dragon'], description: 'Tipo move: Dragon. Passiva: Marvel Scale: O Pokémon sofre menos dano de ataques super efetivos (0.5x).' },
          { name: 'Dedenne', image: 'dedenne.png', tier: 'green', types: ['electric','fairy'], description: 'Tipo move: Fairy.' },
          { name: "Rosa's Serperior", image: 'serperior.png', tier: 'red', types: ['grass'], description: 'Tipo move: Grass.' }
        ]
      },
      mystic: {
        label: 'Mystic',
        recommended: [
          { name: 'Mega Feraligatr', image: 'mega-feraligatr.png', tier: 'green', types: ['water','dragon'], description: 'Tipo move: Dragon.' },
          { name: 'Kingdra', image: 'kingdra.png', tier: 'green', types: ['water','dragon'], description: 'Tipo move: Dragon.' },
          { name: 'Dachsbun', image: 'dachsbun.png', tier: 'green', types: ['fairy'], description: 'Tipo move: Fairy.' }
        ]
      },
      valor: {
        label: 'Valor',
        recommended: [
          { name: 'Mega Absol Z', image: 'mega-absol-z.png', tier: 'green', types: ['dark'], description: 'Tipo move: Fairy.' },
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
    tutorialUrl: 'https://youtu.be/6O2a5_26LC8?si=xwZvwzDVZVPbooRb',
    locationImage: 'localizações/clefable.png',
    description: 'Milagre brilhante; suporte com magia.',
    types: ['fairy','flying'],
    moveType: 'fairy',
    clans: {
      instinct: {
        label: 'Instinct',
        recommended: [
          { name: 'Mega Raichu Y', image: 'mega-raichu-y.png', tier: 'green', types: ['electric'], description: 'Tipo move: Electric.' },
          { name: 'Excadrill', image: 'excadrill.png', tier: 'green', types: ['ground','steel'], description: 'Tipo move: Steel. Passiva: dano super efetivo em Steel.', passiveSuperEffectiveTypes: ['steel'] },
          { name: 'Seviper', image: 'seviper.png', tier: 'green', types: ['poison'], description: 'Tipo move: Poison.' },
          { name: 'Pikachu', image: 'pikachu.png', tier: 'green', types: ['electric'], description: 'Tipo move: Electric.' }
        ]
      },
      mystic: {
        label: 'Mystic',
        recommended: [
          { name: 'Mega Lucario Z', image: 'mega-lucario-z.png', tier: 'green', types: ['fighting','steel'], description: 'Tipo move: Steel.' },
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
          { name: 'Mega Scizor', image: 'mega-scizor.png', tier: 'green', types: ['bug','steel'], description: 'Tipo move: Steel.' },
          { name: 'Cramorant', image: 'cramorant.png', tier: 'green', types: ['flying','water'], description: 'Tipo move: Flying.' },
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
    tutorialUrl: 'https://youtu.be/WoVArDXDswE?si=Qui7qyhBJMZvhZbI',
    locationImage: 'localizações/skarmory.png',
    description: 'Assassino aéreo com armadura de metal.',
    types: ['steel','flying'],
    moveType: 'steel',
    clans: {
      instinct: {
        label: 'Instinct',
        recommended: [
          { name: 'Pikachu', image: 'pikachu.png', tier: 'green', types: ['electric'], description: 'Tipo move: Electric.' },
          { name: 'Mega Raichu Y', image: 'mega-raichu-y.png', tier: 'green', types: ['electric'], description: 'Tipo move: Electric.' }
        ]
      },
      mystic: {
        label: 'Mystic',
        recommended: [
          { name: 'Drifloom', image: 'drifloon.png', tier: 'green', types: ['ghost','flying'], description: 'Tipo move: Fire.' },
          { name: 'Duraludon', image: 'duraludon.png', tier: 'green', types: ['steel','dragon'], description: 'Tipo move: Electric.' },
          { name: 'Mega Lucario Z', image: 'mega-lucario-z.png', tier: 'green', types: ['fighting','steel'], description: 'Tipo move: Steel.' }
        ]
      },
      valor: {
        label: 'Valor',
        recommended: [
          { name: 'Delphox', image: 'delphox.png', tier: 'green', types: ['fire','psychic'], description: 'Tipo move: Fire.' },
          { name: 'CharizardTwo', image: 'charizard.png', tier: 'green', types: ['fire','flying'], description: 'Tipo move: Fire.' },
          { name: 'Cramorant', image: 'cramorant.png', tier: 'green', types: ['flying','water'], description: 'Tipo move: Flying.' }
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
    tutorialUrl: 'https://youtu.be/0mINoTu0vVs?si=705VKjXHq8wHRgZT',
    locationImage: 'localizações/raichu.png',
    description: 'Dupla Mega Raichu (X/Y).',
    types: ['electric'],
    moveType: 'electric',
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
          { name: 'Bouffalant', image: 'bouffalant.png', tier: 'green', types: ['normal'], description: 'Tipo move: Ground.' }
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
    tutorialUrl: 'https://youtu.be/88dRioade-4?si=U5yKCrqsDmIAUAhb',
    locationImage: 'localizações/lucario.png',
    description: 'Dupla Mega Lucario (Padrão/Z).',
    types: ['fighting','steel'],
    moveType: 'fighting',
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
          { name: 'Drifloom', image: 'drifloon.png', tier: 'green', types: ['ghost','flying'], description: 'Tipo move: Fire.' },
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
    tutorialUrl: 'https://youtu.be/dV1fS8TNIRo?si=vPEeYCiKZZEyI30t',
    locationImage: 'localizações/absol.png',
    description: 'Mega Absol e Mega Absol Z sofrem dano super efetivo de Fairy, Fighting e Bug.',
    types: ['dark'],
    moveType: 'dark',
    duo: true,
    bosses: [
      { name: 'Mega Absol', image: 'mega-absol.png' },
      { name: 'Mega Absol Z', image: 'mega-absol-z.png' }
    ],
    clans: {
      instinct: {
        label: 'Instinct',
        recommendationGroups: [
          {
            title: 'Mega Absol',
            bossId: 'mega-absol',
            bossTypes: ['dark'],
            recommended: [
              { name: 'Lurantis', image: 'lurantis.png', tier: 'green', types: ['grass'], description: 'Tipo move: Bug.' },
              { name: 'Dedenne', image: 'dedenne.png', tier: 'green', types: ['electric','fairy'], description: 'Tipo move: Fairy.' },
              { name: 'Mega Gardevoir', image: 'mega-gardevoir.png', tier: 'green', types: ['psychic','fairy'], description: 'Tipo move: Fairy.' },
              { name: 'Mega Raichu X', image: 'mega-raichu-x.png', tier: 'green', types: ['electric','fighting'], description: 'Tipo move: Fighting.' }
            ]
          },
          {
            title: 'Mega Absol Z',
            bossId: 'mega-absol-z',
            bossTypes: ['dark'],
            recommended: [
              { name: 'Dedenne', image: 'dedenne.png', tier: 'green', types: ['electric','fairy'], description: 'Tipo move: Fairy.' },
              { name: 'Mega Gardevoir', image: 'mega-gardevoir.png', tier: 'green', types: ['psychic','fairy'], description: 'Tipo move: Fairy.' }
            ]
          }
        ]
      },
      mystic: {
        label: 'Mystic',
        recommendationGroups: [
          {
            title: 'Mega Absol',
            bossId: 'mega-absol',
            bossTypes: ['dark'],
            recommended: [
              { name: 'Dachsbun', image: 'dachsbun.png', tier: 'green', types: ['fairy'], description: 'Tipo move: Fairy.' },
              { name: 'Hawlucha', image: 'hawlucha.png', tier: 'green', types: ['fighting','flying'], description: 'Tipo move: Fighting.' }
            ]
          },
          {
            title: 'Mega Absol Z',
            bossId: 'mega-absol-z',
            bossTypes: ['dark'],
            recommended: [
              { name: 'Dachsbun', image: 'dachsbun.png', tier: 'green', types: ['fairy'], description: 'Tipo move: Fairy.' }
            ]
          }
        ]
      },
      valor: {
        label: 'Valor',
        recommendationGroups: [
          {
            title: 'Mega Absol',
            bossId: 'mega-absol',
            bossTypes: ['dark'],
            recommended: [
              { name: 'Scyther', image: 'scyther.png', tier: 'green', types: ['bug','flying'], description: 'Tipo move: Bug.' },
              { name: 'Shiny Scyther', image: 'scyther.png', tier: 'green', types: ['bug','flying'], description: 'Tipo move: Bug.' },
              { name: 'Mega Absol Z', image: 'mega-absol-z.png', tier: 'green', types: ['dark'], description: 'Tipo move: Fairy.' },
              { name: 'Ribombee', image: 'Ribombee.png', tier: 'green', types: ['bug','fairy'], description: 'Tipo move: Fairy.' }
            ]
          },
          {
            title: 'Mega Absol Z',
            bossId: 'mega-absol-z',
            bossTypes: ['dark'],
            recommended: [
              { name: 'Mega Absol Z', image: 'mega-absol-z.png', tier: 'green', types: ['dark'], description: 'Tipo move: Fairy.' },
              { name: 'Ribombee', image: 'Ribombee.png', tier: 'green', types: ['bug','fairy'], description: 'Tipo move: Fairy.' }
            ]
          }
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
let activeSpeedsterContextName = null;
let knownSpeedsterNames = null;

function refreshKnownSpeedsterNames() {
  try {
    const list = typeof getRecommendedSpeedsters === 'function' ? getRecommendedSpeedsters() : [];
    knownSpeedsterNames = new Set((list || []).map((s) => String(s?.name || '').toLowerCase()));
  } catch (e) {
    knownSpeedsterNames = new Set();
  }
  return knownSpeedsterNames;
}

function setBossModalLayout(isRoleboard = false) {
  const content = modal?.querySelector('.speedster-modal-content');
  if (!content) return;
  content.classList.toggle('speedster-modal-content--roleboard', Boolean(isRoleboard));
}

const speedsterSearchInput = document.getElementById('speedster-search');
const speedsterSearchResults = document.getElementById('speedster-search-results');
const speedsterSearchNoResults = document.getElementById('speedster-search-no-results');

let currentBoss = null;
let activeBossMode = 'hoopa';
const HOOPA_BOSS_PROGRESS_STORAGE_KEY = 'hoopaBossProgressStateV1';
const HOOPA_BOSS_RESET_TIMEZONE = 'America/Sao_Paulo';
const HOOPA_BOSS_RESET_HOUR = 10;
const HOOPA_BOSS_RESET_MINUTE = 30;
const hoopaBossDateFormatter = new Intl.DateTimeFormat('en-CA', {
  timeZone: HOOPA_BOSS_RESET_TIMEZONE,
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hourCycle: 'h23'
});
const hoopaBossOffsetFormatter = new Intl.DateTimeFormat('en-US', {
  timeZone: HOOPA_BOSS_RESET_TIMEZONE,
  timeZoneName: 'shortOffset',
  hour: '2-digit',
  minute: '2-digit',
  hourCycle: 'h23'
});
let hoopaBossProgressResetTimer = null;

const roleboardRoleOrder = ['tank', 'dps', 'support'];
const roleboardRoleLabels = {
  support: 'Suporte',
  dps: 'DPS',
  tank: 'Tank'
};

const roleboardRoleNotes = {
  support: [
    'Abre a luta com utilidade e mantem a rotacao do trio segura.',
    'Ajuda a estabilizar a fase critica antes da troca de alvo.',
    'Entrega cobertura e ritmo para o time manter pressao.'
  ],
  dps: [
    'Entra para burst rapido quando a janela de dano abrir.',
    'Fica com a maior parte da pressao ofensiva da composicao.',
    'Fecha a fase com dano constante e boa cobertura.'
  ],
  tank: [
    'Segura a linha de frente e compra tempo para o resto do grupo.',
    'Absorve pressao enquanto o trio gira cooldowns com calma.',
    'Toma a frente para reduzir risco nas trocas do time.'
  ]
};

function getHoopaBossNowParts(date = new Date()) {
  const bag = {};
  hoopaBossDateFormatter.formatToParts(date).forEach((part) => {
    if (part.type !== 'literal') {
      bag[part.type] = part.value;
    }
  });

  return {
    year: Number(bag.year || 0),
    month: Number(bag.month || 1),
    day: Number(bag.day || 1),
    hour: Number(bag.hour || 0),
    minute: Number(bag.minute || 0),
    second: Number(bag.second || 0)
  };
}

function formatHoopaBossDateKey(parts) {
  return `${String(parts.year).padStart(4, '0')}-${String(parts.month).padStart(2, '0')}-${String(parts.day).padStart(2, '0')}`;
}

function shiftHoopaBossDateKey(dateKey, amount) {
  const [year, month, day] = String(dateKey || '').split('-').map((value) => Number(value));
  const baseDate = new Date(Date.UTC(year || 1970, Math.max((month || 1) - 1, 0), day || 1));
  baseDate.setUTCDate(baseDate.getUTCDate() + amount);
  return `${baseDate.getUTCFullYear()}-${String(baseDate.getUTCMonth() + 1).padStart(2, '0')}-${String(baseDate.getUTCDate()).padStart(2, '0')}`;
}

function getHoopaBossTimeZoneOffsetMinutes(date) {
  const zoneName = hoopaBossOffsetFormatter
    .formatToParts(date)
    .find((part) => part.type === 'timeZoneName')?.value || 'GMT+0';
  const match = zoneName.match(/GMT([+-])(\d{1,2})(?::?(\d{2}))?/i);
  if (!match) return 0;
  const sign = match[1] === '-' ? -1 : 1;
  const hours = Number(match[2] || 0);
  const minutes = Number(match[3] || 0);
  return sign * ((hours * 60) + minutes);
}

function makeHoopaBossDateAtReset(dateKey, hour = HOOPA_BOSS_RESET_HOUR, minute = HOOPA_BOSS_RESET_MINUTE) {
  const [year, month, day] = String(dateKey || '').split('-').map((value) => Number(value));
  let utcGuess = Date.UTC(year || 1970, Math.max((month || 1) - 1, 0), day || 1, hour, minute, 0);

  for (let attempt = 0; attempt < 3; attempt += 1) {
    const offsetMinutes = getHoopaBossTimeZoneOffsetMinutes(new Date(utcGuess));
    const corrected = Date.UTC(year || 1970, Math.max((month || 1) - 1, 0), day || 1, hour, minute, 0) - (offsetMinutes * 60000);
    if (corrected === utcGuess) break;
    utcGuess = corrected;
  }

  return new Date(utcGuess);
}

function getCurrentHoopaBossResetCycleKey(date = new Date()) {
  const parts = getHoopaBossNowParts(date);
  const todayKey = formatHoopaBossDateKey(parts);
  const isPastReset = parts.hour > HOOPA_BOSS_RESET_HOUR
    || (parts.hour === HOOPA_BOSS_RESET_HOUR && parts.minute >= HOOPA_BOSS_RESET_MINUTE);
  return isPastReset ? todayKey : shiftHoopaBossDateKey(todayKey, -1);
}

function getNextHoopaBossResetDate(date = new Date()) {
  const parts = getHoopaBossNowParts(date);
  const todayKey = formatHoopaBossDateKey(parts);
  const isPastReset = parts.hour > HOOPA_BOSS_RESET_HOUR
    || (parts.hour === HOOPA_BOSS_RESET_HOUR && parts.minute >= HOOPA_BOSS_RESET_MINUTE);
  const targetKey = isPastReset ? shiftHoopaBossDateKey(todayKey, 1) : todayKey;
  return makeHoopaBossDateAtReset(targetKey);
}

function loadHoopaBossProgressState() {
  const fallback = {
    resetCycleKey: getCurrentHoopaBossResetCycleKey(),
    completed: {}
  };

  if (typeof window === 'undefined' || !window.localStorage) return fallback;

  try {
    const raw = window.localStorage.getItem(HOOPA_BOSS_PROGRESS_STORAGE_KEY);
    if (!raw) return fallback;

    const parsed = JSON.parse(raw);
    const completed = parsed && typeof parsed.completed === 'object' && parsed.completed
      ? Object.fromEntries(
          Object.entries(parsed.completed).filter(([key, value]) => key && value === true)
        )
      : {};

    return {
      resetCycleKey: typeof parsed?.resetCycleKey === 'string' ? parsed.resetCycleKey : fallback.resetCycleKey,
      completed
    };
  } catch {
    return fallback;
  }
}

let hoopaBossProgressState = loadHoopaBossProgressState();

function saveHoopaBossProgressState() {
  if (typeof window === 'undefined' || !window.localStorage) return;
  try {
    window.localStorage.setItem(HOOPA_BOSS_PROGRESS_STORAGE_KEY, JSON.stringify(hoopaBossProgressState));
  } catch {}
}

function ensureHoopaBossProgressFresh(date = new Date()) {
  const cycleKey = getCurrentHoopaBossResetCycleKey(date);
  if (hoopaBossProgressState.resetCycleKey === cycleKey) {
    return false;
  }

  hoopaBossProgressState = {
    resetCycleKey: cycleKey,
    completed: {}
  };
  saveHoopaBossProgressState();
  return true;
}

function isHoopaBossCompleted(bossId) {
  ensureHoopaBossProgressFresh();
  return Boolean(hoopaBossProgressState.completed?.[bossId]);
}

function setHoopaBossCompleted(bossId, completed) {
  if (!bossId) return;
  ensureHoopaBossProgressFresh();
  if (completed) {
    hoopaBossProgressState.completed[bossId] = true;
  } else {
    delete hoopaBossProgressState.completed[bossId];
  }
  saveHoopaBossProgressState();
}

function scheduleHoopaBossProgressReset() {
  if (typeof window === 'undefined') return;
  if (hoopaBossProgressResetTimer) {
    window.clearTimeout(hoopaBossProgressResetTimer);
  }

  const now = new Date();
  const nextResetAt = getNextHoopaBossResetDate(now);
  const delay = Math.max(1000, nextResetAt.getTime() - now.getTime() + 250);

  hoopaBossProgressResetTimer = window.setTimeout(() => {
    const wasReset = ensureHoopaBossProgressFresh(new Date());
    if (wasReset && activeBossMode === 'hoopa') {
      renderGrid();
    }
    scheduleHoopaBossProgressReset();
  }, delay);
}

const roleboardPickPools = {
  support: [
    { name: 'Dedenne', image: 'dedenne.png', types: ['electric', 'fairy'] },
    { name: 'Mantine', image: 'mantine.png', types: ['water', 'flying'] },
    { name: 'Lombre', image: 'lombre.png', types: ['water', 'grass'] },
    { name: 'Dachsbun', image: 'dachsbun.png', types: ['fairy'] },
    { name: 'Qwilfish', image: 'qwilfish.png', types: ['water', 'poison'] }
  ],
  dps: [
    { name: 'Scyther', image: 'scyther.png', types: ['bug', 'flying'] },
    { name: 'Shiny Scyther', image: 'scyther.png', types: ['bug', 'flying'] },
    { name: 'Pikachu', image: 'pikachu.png', types: ['electric'] },
    { name: 'Alakazam', image: 'alakazam.png', types: ['psychic'] },
    { name: 'Weavile', image: 'weavile.png', types: ['dark', 'ice'] },
    { name: 'Greninja', image: 'greninja.png', types: ['water', 'dark'] },
    { name: 'Ribombee', image: 'Ribombee.png', types: ['bug', 'fairy'] },
    { name: 'Heracross', image: 'heracross.png', types: ['bug', 'fighting'] }
  ],
  tank: [
    { name: 'Orthworm', image: 'orthworm.png', types: ['steel'] },
    { name: 'Bouffalant', image: 'bouffalant.png', types: ['normal'], moveType: 'ground' },
    { name: 'Tauros', image: 'tauros.png', types: ['normal'] },
    { name: 'Kabutops', image: 'kabutops.png', types: ['rock', 'water'] },
    { name: 'Duraludon', image: 'duraludon.png', types: ['steel', 'dragon'] },
    { name: 'Mega Skarmory', image: 'mega-skarmory.png', types: ['steel', 'flying'] }
  ]
};

const roleboardClanSummaries = {
  instinct: {
    champion: 'Linha mais explosiva para abrir vantagem cedo contra mega chefes.',
    mew2: 'Equipe que acelera a raid com controle de ritmo e cobertura ofensiva.'
  },
  mystic: {
    champion: 'Composicao mais segura, pensada para leitura de dano e estabilidade.',
    mew2: 'Equilibrio entre seguranca e constancia para manter o trio vivo.'
  },
  valor: {
    champion: 'Fecha a composicao com pressao, troca curta e finalizacao forte.',
    mew2: 'Foco em janelas agressivas e fechamento rapido das fases da raid.'
  }
};

const clanSeedOffsets = {
  instinct: 0,
  mystic: 2,
  valor: 4
};

function createRoleboardPicks(seed, roleKey, clanKey) {
  const pool = roleboardPickPools[roleKey] || [];
  const notes = roleboardRoleNotes[roleKey] || [];
  if (!pool.length) return [];

  return [0, 1].map((step) => {
    const template = pool[(seed + clanSeedOffsets[clanKey] + step) % pool.length];
    return {
      ...template,
      types: Array.isArray(template.types) ? [...template.types] : [],
      note: notes[(seed + step) % notes.length]
    };
  });
}

function bossInitials(name) {
  return String(name || '')
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part.replace(/[^A-Za-z0-9]/g, '').charAt(0).toUpperCase())
    .join('')
    .slice(0, 3) || 'BS';
}

function createRoleboardBosses(entries, catalogMeta) {
  return entries.map((entry, index) => ({
    id: entry.id,
    name: entry.name,
    image: entry.image || `${entry.id}.png`,
    description: entry.description,
    encounterLabel: catalogMeta.encounterLabel,
    encounterNote: catalogMeta.encounterNote,
    types: Array.isArray(entry.types) ? entry.types : [],
    moveType: entry.moveType || (Array.isArray(entry.types) ? entry.types[0] : null),
    effectiveness: cloneBossEffectivenessConfig(entry.effectiveness),
    pokeblock: cloneBossConsumableConfig(entry.pokeblock || entry.pokebloc),
    ration: cloneBossConsumableConfig(entry.ration),
    disableAutoPokeblock: Boolean(entry.disableAutoPokeblock),
    emblem: entry.emblem || bossInitials(entry.name),
    clans: {
      instinct: {
        label: 'Instinct',
        summary: roleboardClanSummaries.instinct[catalogMeta.id],
        roles: {
          support: createRoleboardPicks(index, 'support', 'instinct'),
          dps: createRoleboardPicks(index, 'dps', 'instinct'),
          tank: createRoleboardPicks(index, 'tank', 'instinct')
        }
      },
      mystic: {
        label: 'Mystic',
        summary: roleboardClanSummaries.mystic[catalogMeta.id],
        roles: {
          support: createRoleboardPicks(index, 'support', 'mystic'),
          dps: createRoleboardPicks(index, 'dps', 'mystic'),
          tank: createRoleboardPicks(index, 'tank', 'mystic')
        }
      },
      valor: {
        label: 'Valor',
        summary: roleboardClanSummaries.valor[catalogMeta.id],
        roles: {
          support: createRoleboardPicks(index, 'support', 'valor'),
          dps: createRoleboardPicks(index, 'dps', 'valor'),
          tank: createRoleboardPicks(index, 'tank', 'valor')
        }
      }
    }
  }));
}

const rolePickImageOverrides = {
  bannet: 'banette.png',
  blastoisetwo: 'blastoisetwo.png',
  charizardtwo: 'charizard.png',
  megadelphox: 'megadelphox.png',
  megagreninja: 'megagreninja.png',
  megascizor: 'mega-scizor.png',
  shinybronzong: 'bronzong.png',
  shinyscyther: 'scyther.png',
  ribombee: 'Ribombee.png',
  venusaurtwo: 'venusaur.png'
  ,rosasserperior: 'serperior.png'
  ,shinyclaydol: 'claydol.png'
};

function getRolePickAssetKey(name) {
  return String(name || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '');
}

function resolveRolePickImage(name) {
  const assetKey = getRolePickAssetKey(name);
  if (rolePickImageOverrides[assetKey]) {
    return rolePickImageOverrides[assetKey];
  }

  const slug = String(name || '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

  return `${slug || 'unknown'}.png`;
}

function createRolePick(name, types, moveType, extra = {}) {
  const normalizedTypes = Array.isArray(types)
    ? types.filter(Boolean).map((type) => String(type).toLowerCase())
    : [];

  const pick = {
    name,
    image: extra.image || resolveRolePickImage(name),
    types: normalizedTypes,
    moveType: typeof moveType === 'string' ? moveType.toLowerCase() : (normalizedTypes[0] || null)
  };

  if (Array.isArray(extra.immunities) && extra.immunities.length) {
    pick.immunities = extra.immunities.map((type) => String(type).toLowerCase());
  }

  if (Array.isArray(extra.passiveSuperEffectiveTypes) && extra.passiveSuperEffectiveTypes.length) {
    pick.passiveSuperEffectiveTypes = extra.passiveSuperEffectiveTypes.map((type) => String(type).toLowerCase());
  }

  if (extra.defenseByBossType && typeof extra.defenseByBossType === 'object') {
    pick.defenseByBossType = mergeLowercaseNumericMap(extra.defenseByBossType);
  }

  if (extra.matchupOverrides && typeof extra.matchupOverrides === 'object') {
    pick.matchupOverrides = extra.matchupOverrides;
  }

  if (typeof extra.note === 'string' && extra.note.trim()) {
    pick.note = extra.note.trim();
  }

  if (typeof extra.passiveName === 'string' && extra.passiveName.trim()) {
    pick.passiveName = extra.passiveName.trim();
  }

  if (typeof extra.passiveDescription === 'string' && extra.passiveDescription.trim()) {
    pick.passiveDescription = extra.passiveDescription.trim();
  }

  if (typeof extra.tier === 'string' && extra.tier.trim()) {
    pick.tier = extra.tier.trim().toLowerCase();
    pick.tierLocked = true;
  }

  return pick;
}

function createManualRoleboardClan(catalogId, clanKey, roles = {}) {
  const label = clanKey.charAt(0).toUpperCase() + clanKey.slice(1);
  return {
    label,
    summary: roleboardClanSummaries[clanKey]?.[catalogId] || '',
    roles: {
      support: Array.isArray(roles.support) ? roles.support : [],
      dps: Array.isArray(roles.dps) ? roles.dps : [],
      tank: Array.isArray(roles.tank) ? roles.tank : []
    }
  };
}

function createManualRoleboardBosses(entries, catalogMeta) {
  return entries.map((entry) => ({
    id: entry.id,
    name: entry.name,
    image: entry.image || `${entry.id}.png`,
    tutorialUrl: entry.tutorialUrl || '',
    description: entry.description,
    encounterLabel: catalogMeta.encounterLabel,
    encounterNote: catalogMeta.encounterNote,
    types: Array.isArray(entry.types) ? entry.types : [],
    moveType: entry.moveType || (Array.isArray(entry.types) ? entry.types[0] : null),
    effectiveness: cloneBossEffectivenessConfig(entry.effectiveness),
    pokeblock: cloneBossConsumableConfig(entry.pokeblock || entry.pokebloc),
    ration: cloneBossConsumableConfig(entry.ration),
    disableAutoPokeblock: Boolean(entry.disableAutoPokeblock),
    emblem: entry.emblem || bossInitials(entry.name),
    comingSoon: Boolean(entry.comingSoon),
    filterSolo: Boolean(entry.filterSolo),
    clans: {
      instinct: createManualRoleboardClan(catalogMeta.id, 'instinct', entry.clans?.instinct),
      mystic: createManualRoleboardClan(catalogMeta.id, 'mystic', entry.clans?.mystic),
      valor: createManualRoleboardClan(catalogMeta.id, 'valor', entry.clans?.valor)
    }
  }));
}

const championPathBosses = createManualRoleboardBosses([
  {
    id: 'mega-tyranitar',
    name: 'Mega Tyranitar',
    tutorialUrl: 'https://youtu.be/WzBXOWvKZ6U?si=JU5ylulj2EXQ7tb5',
    types: ['rock', 'dark'],
    moveType: 'ground',
    description: 'Chefe de trio com pressao pesada e janelas curtas para burst.',
    clans: {
      instinct: {
        dps: [
          createRolePick('Marowak', ['ground'], 'ground'),
          createRolePick('Lurantis', ['grass'], 'bug'),
          createRolePick('VenusaurTwo', ['grass', 'poison'], 'grass'),
          createRolePick('Mega Raichu X', ['electric', 'fighting'], 'fighting'),
          createRolePick('Mega Gardevoir', ['psychic', 'fairy'], 'fairy'),
          createRolePick('Mega Sceptile', ['grass', 'dragon'], 'grass'),
          createRolePick("Rosa's Serperior", ['grass'], 'grass', { tier: 'otimo', matchupOverrides: { 'mega-tyranitar': { offense: 2, defenseByBossType: { ground: 0.5 } } } })
        ],
        tank: [
          createRolePick('Tangrowth', ['grass'], 'grass'),
          createRolePick('Appletun', ['grass', 'dragon'], 'grass'),
          createRolePick('Chesnaught', ['grass', 'fighting'], 'grass'),
          createRolePick('Claydol', ['ground', 'psychic'], 'ground'),
          createRolePick('Shiny Claydol', ['ground', 'psychic'], 'ground')
        ],
        support: [
          createRolePick('Bellossom', ['grass'], 'grass'),
          createRolePick('Kirlia', ['psychic', 'fairy'], 'fairy')
        ]
      },
      mystic: {
        dps: [
          createRolePick('Dachsbun', ['fairy'], 'fairy'),
          createRolePick('Seaking', ['water'], 'ground'),
          createRolePick('BlastoiseTwo', ['water'], 'water'),
          createRolePick('Lombre', ['water', 'grass'], 'grass'),
          createRolePick('Greninja', ['water', 'dark'], 'water'),
          createRolePick('Hawlucha', ['fighting', 'flying'], 'fighting'),
          createRolePick('Mega Greninja', ['water', 'dark'], 'water'),
          createRolePick('Mega Hawlucha', ['fighting', 'flying'], 'fighting')
        ],
        tank: [
          createRolePick('Bronzong', ['steel', 'psychic'], 'steel'),
          createRolePick('Shiny Bronzong', ['steel', 'psychic'], 'steel'),
          createRolePick('Drifblim', ['ghost', 'flying'], 'flying')
        ],
        support: [
          createRolePick('Politoed', ['water'], 'water'),
          createRolePick('Comfey', ['fairy'], 'fairy')
        ]
      },
      valor: {
        dps: [
          createRolePick('Bouffalant', ['normal'], 'ground'),
          createRolePick('Ribombee', ['bug', 'fairy'], 'fairy'),
          createRolePick('Scyther', ['bug', 'flying'], 'bug'),
          createRolePick('Shiny Scyther', ['bug', 'flying'], 'bug'),
          createRolePick('Cramorant', ['flying', 'water'], 'flying'),
          createRolePick('Mega Scizor', ['bug', 'steel'], 'steel')
        ],
        tank: [
          createRolePick('Orbeetle', ['bug', 'psychic'], 'psychic', { note: 'Ring target necessario.' })
        ],
        support: [
          createRolePick('Blissey', ['normal'], 'fairy'),
          createRolePick('Lopunny', ['normal'], 'fighting')
        ]
      }
    }
  },
  {
    id: 'mega-dragonite',
    name: 'Mega Dragonite',
    tutorialUrl: 'https://youtu.be/sPO5L8oVZuU?si=1tcyRhBZ2x1cW9js',
    types: ['dragon', 'flying'],
    moveType: 'flying',
    description: 'Entrada forte e dano constante; vale montar o trio com papeis bem definidos.',
    clans: {
      instinct: {
        dps: [
          createRolePick('Pikachu', ['electric'], 'electric'),
          createRolePick('Dragonair', ['dragon'], 'dragon'),
          createRolePick('Dedenne', ['electric', 'fairy'], 'fairy'),
          createRolePick('Mega Gardevoir', ['psychic', 'fairy'], 'fairy'),
          createRolePick('Mega Raichu Y', ['electric'], 'electric')
        ],
        tank: [
          createRolePick('Magnezone', ['electric', 'steel'], 'steel')
        ],
        support: [
          createRolePick('Kirlia', ['psychic', 'fairy'], 'fairy')
        ]
      },
      mystic: {
        dps: [
          createRolePick('Dewgong', ['water', 'ice'], 'ice'),
          createRolePick('Dachsbun', ['fairy'], 'fairy'),
          createRolePick('Kingdra', ['water', 'dragon'], 'dragon'),
          createRolePick('Mega Feraligatr', ['water', 'dragon'], 'dragon')
        ],
        tank: [
          createRolePick('Aegislash', ['steel', 'ghost'], 'steel'),
          createRolePick('Bronzong', ['steel', 'psychic'], 'steel'),
          createRolePick('Shiny Bronzong', ['steel', 'psychic'], 'steel'),
          createRolePick('Carracosta', ['water', 'rock'], 'rock')
        ],
        support: [
          createRolePick('Smoochum', ['ice', 'psychic'], 'ice'),
          createRolePick('Comfey', ['fairy'], 'fairy')
        ]
      },
      valor: {
        dps: [
          createRolePick('Kabutops', ['rock', 'water'], 'rock'),
          createRolePick('Weavile', ['dark', 'ice'], 'ice'),
          createRolePick('Cramorant', ['flying', 'water'], 'flying')
        ],
        tank: [
          createRolePick('Onix', ['rock', 'ground'], 'rock'),
          createRolePick('Shieldon', ['rock', 'steel'], 'rock'),
          createRolePick('Bastiodon', ['rock', 'steel'], 'steel'),
          createRolePick('Nosepass', ['rock'], 'rock'),
          createRolePick('Probopass', ['rock', 'steel'], 'rock')
        ],
        support: [
          createRolePick('Blissey', ['normal'], 'fairy')
        ]
      }
    }
  },
  {
    id: 'mega-metagross',
    name: 'Mega Metagross',
    tutorialUrl: 'https://youtu.be/Te_JA2TBKWk?si=VIm98aiKj1LDmzS3',
    disableAutoPokeblock: true,
    types: ['steel', 'psychic'],
    moveType: 'psychic',
    description: 'Mega chefe de trio que pede cobertura e rotacao limpa entre funcoes.',
    clans: {
      instinct: {
        dps: [
          createRolePick('Excadrill', ['ground', 'steel'], 'steel', {
            passiveName: 'Mold Breaker',
            passiveDescription: 'O Pokemon ignora completamente as defesas do Pokemon adversario quebrando os moldes de sua resistencia. Excadrill causa dano super efetivo ao tipo STEEL.',
            passiveSuperEffectiveTypes: ['steel']
          }),
          createRolePick('Marowak', ['ground'], 'ground'),
          createRolePick('Shiftry', ['grass', 'dark'], 'dark')
        ],
        tank: [
          createRolePick('Wynaut', ['psychic'], 'psychic'),
          createRolePick('Wobbuffet', ['psychic'], 'psychic'),
          createRolePick('Claydol', ['ground', 'psychic'], 'ground'),
          createRolePick('Magnezone', ['electric', 'steel'], 'steel')
        ],
        support: [
          createRolePick('Kadabra', ['psychic'], 'dark', { note: 'Dark ou Ghost.' })
        ]
      },
      mystic: {
        dps: [
          createRolePick('Orthworm', ['steel'], 'ground'),
          createRolePick('Banette', ['ghost'], 'ghost'),
          createRolePick('Seaking', ['water'], 'ground'),
          createRolePick('Mega Gyarados', ['water', 'dark'], 'dark')
        ],
        tank: [
          createRolePick('Aegislash', ['steel', 'ghost'], 'steel'),
          createRolePick('Bronzong', ['steel', 'psychic'], 'steel'),
          createRolePick('Shiny Bronzong', ['steel', 'psychic'], 'steel')
        ],
        support: [
          createRolePick('Misdreavus', ['ghost'], 'ghost')
        ]
      },
      valor: {
        dps: [
          createRolePick('Bouffalant', ['normal'], 'ground'),
          createRolePick('Absol', ['dark'], 'dark'),
          createRolePick('Delphox', ['fire', 'psychic'], 'fire'),
          createRolePick('CharizardTwo', ['fire', 'flying'], 'fire'),
          createRolePick('Mega Delphox', ['fire', 'psychic'], 'fire'),
          createRolePick('Mega Houndoom', ['dark', 'fire'], 'dark'),
          // Lopunny é suporte — removida de DPS
        ],
        tank: [
          createRolePick('Orbeetle', ['bug', 'psychic'], 'psychic'),
          createRolePick('Sableye', ['dark', 'ghost'], 'dark', { note: 'Dark ou Ghost.' }),
          createRolePick('Armarouge', ['fire', 'psychic'], 'fire')
        ],
        support: [
          createRolePick('Zorua', ['dark'], 'dark'),
          createRolePick('Ponyta', ['fire'], 'fire')
          ,createRolePick('Lopunny', ['normal'], 'fighting')
        ]
      }
    }
  },
  {
    id: 'mega-garchomp',
    name: 'Mega Garchomp',
    tutorialUrl: 'https://youtu.be/959M7JJejFA?si=aOR3nfggraUuFFoj',
    types: ['dragon', 'ground'],
    moveType: 'dragon',
    effectiveness: {
      attackMode: 'move-only'
    },
    description: 'Luta mais seca, ideal para composicao que segure a linha enquanto o DPS gira.',
    clans: {
      instinct: {
        dps: [
          createRolePick('Dragonair', ['dragon'], 'dragon'),
          createRolePick('Dedenne', ['electric', 'fairy'], 'fairy'),
          createRolePick('Mega Gardevoir', ['psychic', 'fairy'], 'fairy'),
          createRolePick("Rosa's Serperior", ['grass'], 'grass')
        ],
        tank: [
          createRolePick('Tangrowth', ['grass'], 'grass'),
          createRolePick('Chesnaught', ['grass', 'fighting'], 'grass')
        ],
        support: [
          createRolePick('Kirlia', ['psychic', 'fairy'], 'fairy'),
          createRolePick('Bellossom', ['grass'], 'grass')
        ]
      },
      mystic: {
        dps: [
          createRolePick('Dachsbun', ['fairy'], 'fairy'),
          createRolePick('Dewgong', ['water', 'ice'], 'ice')
        ],
        tank: [
          createRolePick('Bronzong', ['steel', 'psychic'], 'steel'),
          createRolePick('Shiny Bronzong', ['steel', 'psychic'], 'steel'),
          createRolePick('Drifblim', ['ghost', 'flying'], 'flying')
        ],
        support: [
          createRolePick('Comfey', ['fairy'], 'fairy'),
          createRolePick('Smoochum', ['ice', 'psychic'], 'ice')
        ]
      },
      valor: {
        dps: [
          createRolePick('Weavile', ['dark', 'ice'], 'ice'),
          createRolePick('Ribombee', ['bug', 'fairy'], 'fairy'),
          createRolePick('Cramorant', ['flying', 'water'], 'flying')
        ],
        tank: [
          createRolePick('Orbeetle', ['bug', 'psychic'], 'psychic'),
          createRolePick('Sableye', ['dark', 'ghost'], 'ghost')
        ],
        support: [
          createRolePick('Blissey', ['normal'], 'fairy')
        ]
      }
    }
  },
  {
    id: 'mega-chandelure',
    name: 'Mega Chandelure',
    tutorialUrl: 'https://youtu.be/6U3jsH2fJJ0?si=1vURPQDu6jliGypW',
    disableAutoPokeblock: true,
    types: ['ghost', 'fire'],
    moveType: 'ghost',
    description: 'Mega chefe mais punitivo nas trocas, entao suporte e tanque precisam aparecer.',
    clans: {
      instinct: {
        dps: [
          createRolePick('Marowak', ['ground'], 'ground'),
          createRolePick('Shiftry', ['grass', 'dark'], 'dark')
        ],
        tank: [
          createRolePick('Claydol', ['ground', 'psychic'], 'ground')
        ],
        support: [
          createRolePick('Bellossom', ['grass'], 'grass'),
          createRolePick('Pachirisu', ['electric'], 'electric')
        ]
      },
      mystic: {
        dps: [
          createRolePick('Orthworm', ['steel'], 'ground'),
          createRolePick('Seaking', ['water'], 'ground'),
          createRolePick('Greninja', ['water', 'dark'], 'water'),
          createRolePick('BlastoiseTwo', ['water'], 'water'),
          createRolePick('Mega Gyarados', ['water', 'dark'], 'dark')
        ],
        tank: [
          createRolePick('Dusclops', ['ghost'], 'ghost')
        ],
        support: [
          createRolePick('Politoed', ['water'], 'water')
        ]
      },
      valor: {
        dps: [
          createRolePick('Bouffalant', ['normal'], 'ground'),
          createRolePick('Absol', ['dark'], 'dark'),
          createRolePick('Kabutops', ['rock', 'water'], 'rock'),
          createRolePick('Cramorant', ['flying', 'water'], 'flying'),
          createRolePick('Mega Absol Z', ['dark'], 'dark'),
          createRolePick('Mega Houndoom', ['dark', 'fire'], 'dark'),
          // Lopunny é suporte — removida de DPS
        ],
        tank: [
          createRolePick('Sableye', ['dark', 'ghost'], 'ghost')
        ],
        support: [
          createRolePick('Zorua', ['dark'], 'dark'),
          createRolePick('Lopunny', ['normal'], 'fighting')
        ]
      }
    }
  },
  {
    id: 'mega-golisopod',
    name: 'Mega Golisopod',
    tutorialUrl: 'https://youtu.be/deZnrmwZ2bo?si=vMLsf4_aXM4wlY6W',
    types: ['bug', 'steel'],
    moveType: 'bug',
    description: 'Encontro de trio que favorece cobertura ampla e cadencia boa entre os clans.',
    clans: {
      instinct: {
        dps: [
          createRolePick('Excadrill', ['ground', 'steel'], 'ground'),
          createRolePick('Delphox', ['fire', 'psychic'], 'fire')
        ],
        tank: [
          createRolePick('Magnezone', ['electric', 'steel'], 'electric'),
          createRolePick('Bastiodon', ['rock', 'steel'], 'steel'),
          createRolePick('Toxapex', ['poison', 'water'], 'poison')
        ],
        support: [
          createRolePick('Pachirisu', ['electric'], 'electric'),
          createRolePick('Kirlia', ['psychic', 'fairy'], 'fairy')
        ]
      },
      mystic: {
        dps: [
          createRolePick('CharizardTwo', ['fire', 'flying'], 'fire'),
          createRolePick('Mega Delphox', ['fire', 'psychic'], 'fire')
        ],
        tank: [
          createRolePick('Bronzong', ['steel', 'psychic'], 'steel'),
          createRolePick('Aegislash', ['steel', 'ghost'], 'steel'),
          createRolePick('Dusclops', ['ghost'], 'ghost')
        ],
        support: [
          createRolePick('Comfey', ['fairy'], 'fairy'),
          createRolePick('Politoed', ['water'], 'water'),
          createRolePick('Misdreavus', ['ghost'], 'ghost'),
          createRolePick('Smoochum', ['ice', 'psychic'], 'ice')
        ]
      },
      valor: {
        dps: [
          createRolePick('Delphox', ['fire', 'psychic'], 'fire'),
          createRolePick('Mega Delphox', ['fire', 'psychic'], 'fire'),
          createRolePick('CharizardTwo', ['fire', 'flying'], 'fire')
        ],
        tank: [
          createRolePick('Onix', ['rock', 'ground'], 'rock'),
          createRolePick('Nosepass', ['rock'], 'rock'),
          createRolePick('Shuckle', ['bug', 'rock'], 'rock'),
          createRolePick('Magcargo', ['fire', 'rock'], 'rock'),
          createRolePick('Shieldon', ['rock', 'steel'], 'rock'),
          createRolePick('Bastiodon', ['rock', 'steel'], 'steel'),
          createRolePick('Probopass', ['rock', 'steel'], 'rock'),
          createRolePick('Torkoal', ['fire'], 'fire')
        ],
        support: [
          createRolePick('Ponyta', ['fire'], 'fire'),
          createRolePick('Blissey', ['normal'], 'fairy'),
          createRolePick('Porygon2', ['normal'], 'normal'),
          createRolePick('Lopunny', ['normal'], 'fighting'),
          createRolePick('Zorua', ['dark'], 'dark')
        ]
      }
    }
  },
  {
    id: 'mega-aerodactyl',
    name: 'Mega Aerodactyl',
    types: ['rock', 'flying'],
    moveType: 'rock',
    comingSoon: true,
    filterSolo: true,
    description: 'Chefe veloz que abusa de ataques Rock/Flying; atenção ao burst inicial.',
    clans: {
      instinct: {
        dps: [
          createRolePick('Mega Raichu Y', ['electric'], 'electric'),
          createRolePick('Pikachu', ['electric'], 'electric'),
          createRolePick('Mega Raichu X', ['electric', 'fighting'], 'fighting')
        ],
        tank: [
          createRolePick('Magnezone', ['electric', 'steel'], 'electric'),
          createRolePick('Chesnaught', ['grass', 'fighting'], 'grass')
        ],
        support: [
          createRolePick('Pachirisu', ['electric'], 'electric'),
          createRolePick('Bellossom', ['grass'], 'grass')
        ]
      },
      mystic: {
        dps: [
          createRolePick('Mega Lucario Z', ['fighting', 'steel'], 'steel'),
          createRolePick('Duraludon', ['steel', 'dragon'], 'electric'),
          createRolePick('Mega Greninja', ['water', 'dark'], 'water')
        ],
        tank: [
          createRolePick('Aegislash', ['steel', 'ghost'], 'steel'),
          createRolePick('Bronzong', ['steel', 'psychic'], 'steel')
        ],
        support: [
          createRolePick('Politoed', ['water'], 'water'),
          createRolePick('Comfey', ['fairy'], 'fairy')
        ]
      },
      valor: {
        dps: [
          createRolePick('Kabutops', ['rock', 'water'], 'rock'),
          createRolePick('Mega Scizor', ['bug', 'steel'], 'steel'),
          createRolePick('Tauros', ['normal'], 'electric')
        ],
        tank: [
          createRolePick('Bastiodon', ['rock', 'steel'], 'steel'),
          createRolePick('Probopass', ['rock', 'steel'], 'rock')
        ],
        support: [
          createRolePick('Lopunny', ['normal'], 'fighting'),
          createRolePick('Blissey', ['normal'], 'fairy')
        ]
      }
    }
  },
  {
    id: 'mega-aggron',
    name: 'Mega Aggron',
    types: ['steel', 'rock'],
    moveType: 'steel',
    comingSoon: true,
    filterSolo: true,
    description: 'Chefe resistente que recompensa picks com supereficacia contra Steel/Rock.',
    clans: {
      instinct: {
        dps: [
          createRolePick('Excadrill', ['ground', 'steel'], 'ground'),
          createRolePick('Mega Raichu X', ['electric', 'fighting'], 'fighting'),
          createRolePick('Marowak', ['ground'], 'ground')
        ],
        tank: [
          createRolePick('Claydol', ['ground', 'psychic'], 'ground'),
          createRolePick('Magnezone', ['electric', 'steel'], 'electric')
        ],
        support: [
          createRolePick('Pachirisu', ['electric'], 'electric'),
          createRolePick('Bellossom', ['grass'], 'grass')
        ]
      },
      mystic: {
        dps: [
          createRolePick('Orthworm', ['steel'], 'ground'),
          createRolePick('Seaking', ['water'], 'ground'),
          createRolePick('Mega Lucario', ['fighting', 'steel'], 'fighting')
        ],
        tank: [
          createRolePick('Aegislash', ['steel', 'ghost'], 'steel'),
          createRolePick('Bronzong', ['steel', 'psychic'], 'steel')
        ],
        support: [
          createRolePick('Politoed', ['water'], 'water'),
          createRolePick('Misdreavus', ['ghost'], 'ghost')
        ]
      },
      valor: {
        dps: [
          createRolePick('Heracross', ['bug', 'fighting'], 'fighting'),
          createRolePick('Bouffalant', ['normal'], 'ground'),
          createRolePick('Mega Delphox', ['fire', 'psychic'], 'fire')
        ],
        tank: [
          createRolePick('Armarouge', ['fire', 'psychic'], 'fire'),
          createRolePick('Torkoal', ['fire'], 'fire')
        ],
        support: [
          createRolePick('Lopunny', ['normal'], 'fighting'),
          createRolePick('Ponyta', ['fire'], 'fire')
        ]
      }
    }
  },
  {
    id: 'mega-salamence',
    name: 'Mega Salamence',
    types: ['dragon', 'flying'],
    moveType: 'dragon',
    comingSoon: true,
    filterSolo: true,
    description: 'Chefe Dragon/Flying que pede boa cobertura de Dragon e controle de voo.',
    clans: {
      instinct: {
        dps: [
          createRolePick('Dragonair', ['dragon'], 'dragon'),
          createRolePick('Mega Gardevoir', ['psychic', 'fairy'], 'fairy'),
          createRolePick('Mega Raichu Y', ['electric'], 'electric'),
          createRolePick("Rosa's Serperior", ['grass'], 'grass')
        ],
        tank: [
          createRolePick('Goodra', ['dragon'], 'dragon'),
          createRolePick('Magnezone', ['electric', 'steel'], 'electric')
        ],
        support: [
          createRolePick('Kirlia', ['psychic', 'fairy'], 'fairy'),
          createRolePick('Pachirisu', ['electric'], 'electric')
        ]
      },
      mystic: {
        dps: [
          createRolePick('Dachsbun', ['fairy'], 'fairy'),
          createRolePick('Dewgong', ['water', 'ice'], 'ice'),
          createRolePick("Melony's Frosmoth", ['ice', 'bug'], 'ice')
        ],
        tank: [
          createRolePick('Carracosta', ['water', 'rock'], 'rock'),
          createRolePick('Bronzong', ['steel', 'psychic'], 'steel')
        ],
        support: [
          createRolePick('Comfey', ['fairy'], 'fairy'),
          createRolePick('Smoochum', ['ice', 'psychic'], 'ice')
        ]
      },
      valor: {
        dps: [
          createRolePick('Ribombee', ['bug', 'fairy'], 'fairy'),
          createRolePick('Kabutops', ['rock', 'water'], 'rock'),
          createRolePick('Weavile', ['dark', 'ice'], 'ice')
        ],
        tank: [
          createRolePick('Probopass', ['rock', 'steel'], 'rock'),
          createRolePick('Shieldon', ['rock', 'steel'], 'rock')
        ],
        support: [
          createRolePick('Blissey', ['normal'], 'fairy')
        ]
      }
    }
  }
], {
  id: 'champion',
  encounterLabel: 'Mega trio',
  encounterNote: 'Recomendacoes definitivas por cla e funcao para os mega chefes do Champion Path.'
});

function cloneRolePickConfig(pick) {
  if (!pick || typeof pick !== 'object') return pick;

  const clonedPick = { ...pick };

  if (Array.isArray(pick.types)) {
    clonedPick.types = [...pick.types];
  }

  if (Array.isArray(pick.immunities)) {
    clonedPick.immunities = [...pick.immunities];
  }

  if (Array.isArray(pick.passiveSuperEffectiveTypes)) {
    clonedPick.passiveSuperEffectiveTypes = [...pick.passiveSuperEffectiveTypes];
  }

  if (pick.defenseByBossType && typeof pick.defenseByBossType === 'object') {
    clonedPick.defenseByBossType = { ...pick.defenseByBossType };
  }

  if (pick.matchupOverrides && typeof pick.matchupOverrides === 'object') {
    clonedPick.matchupOverrides = JSON.parse(JSON.stringify(pick.matchupOverrides));
  }

  return clonedPick;
}

function getRolePickSignature(pick) {
  return [
    pick?.name || '',
    pick?.image || '',
    Array.isArray(pick?.types) ? pick.types.join('/') : '',
    pick?.moveType || '',
    pick?.note || '',
    pick?.tier || '',
    pick?.tierLocked ? 'locked' : '',
    pick?.passiveName || '',
    pick?.passiveDescription || '',
    Array.isArray(pick?.immunities) ? pick.immunities.join('/') : '',
    Array.isArray(pick?.passiveSuperEffectiveTypes) ? pick.passiveSuperEffectiveTypes.join('/') : '',
    pick?.defenseByBossType ? JSON.stringify(pick.defenseByBossType) : '',
    pick?.matchupOverrides ? JSON.stringify(pick.matchupOverrides) : ''
  ].join('|');
}

function cloneRoleboardRoles(roles = {}) {
  return {
    support: Array.isArray(roles.support) ? roles.support.map((pick) => cloneRolePickConfig(pick)) : [],
    dps: Array.isArray(roles.dps) ? roles.dps.map((pick) => cloneRolePickConfig(pick)) : [],
    tank: Array.isArray(roles.tank) ? roles.tank.map((pick) => cloneRolePickConfig(pick)) : []
  };
}

function buildChampionPathRolePools() {
  const pools = {
    instinct: { support: [], dps: [], tank: [] },
    mystic: { support: [], dps: [], tank: [] },
    valor: { support: [], dps: [], tank: [] }
  };
  const seen = {
    instinct: { support: new Set(), dps: new Set(), tank: new Set() },
    mystic: { support: new Set(), dps: new Set(), tank: new Set() },
    valor: { support: new Set(), dps: new Set(), tank: new Set() }
  };

  championPathBosses.forEach((boss) => {
    ['instinct', 'mystic', 'valor'].forEach((clanKey) => {
      roleboardRoleOrder.forEach((roleKey) => {
        (boss.clans?.[clanKey]?.roles?.[roleKey] || []).forEach((pick) => {
          const signature = getRolePickSignature(pick);
          if (seen[clanKey][roleKey].has(signature)) return;
          seen[clanKey][roleKey].add(signature);
          pools[clanKey][roleKey].push(cloneRolePickConfig(pick));
        });
      });
    });
  });

  return pools;
}

const championPathRolePoolsForMew2 = buildChampionPathRolePools();

const mew2NeutralBossEffectiveness = Object.freeze({
  attackMode: 'move-only',
  offenseMode: 'neutral',
  rankMode: 'defense-only'
});

const mew2TypedBossEffectiveness = Object.freeze({
  attackMode: 'move-only',
  offenseMode: 'types',
  rankMode: 'defense-only'
});

function cloneChampionPathRolePoolsForMew2() {
  const cloneRoleForMew2 = (pick) => {
    const clonedPick = cloneRolePickConfig(pick);
    delete clonedPick.tier;
    delete clonedPick.tierLocked;
    return clonedPick;
  };

  const cloneRoleSetForMew2 = (roles = {}) => ({
    support: Array.isArray(roles.support) ? roles.support.map(cloneRoleForMew2) : [],
    dps: Array.isArray(roles.dps) ? roles.dps.map(cloneRoleForMew2) : [],
    tank: Array.isArray(roles.tank) ? roles.tank.map(cloneRoleForMew2) : []
  });

  return {
    instinct: cloneRoleSetForMew2(championPathRolePoolsForMew2.instinct),
    mystic: cloneRoleSetForMew2(championPathRolePoolsForMew2.mystic),
    valor: cloneRoleSetForMew2(championPathRolePoolsForMew2.valor)
  };
}

const mew2Bosses = createManualRoleboardBosses([
  { id: 'clefable', name: 'Clefable', types: ['fairy'], moveType: 'fairy', effectiveness: mew2NeutralBossEffectiveness, description: 'Chefe que pede constancia e protecao durante as trocas de frente.' },
  { id: 'primeape', name: 'Primeape', types: ['fighting'], moveType: 'fighting', effectiveness: mew2NeutralBossEffectiveness, description: 'Encontro focado em composicao limpa e resposta rapida ao dano.' },
  { id: 'dugtrio', name: 'Dugtrio', types: ['ground'], moveType: 'ground', effectiveness: mew2NeutralBossEffectiveness, description: 'Encontro de trio para trabalhar suporte e linha de frente sem perder dano.' },
  { id: 'jynx', name: 'Jynx', types: ['ice', 'psychic'], moveType: 'ice', effectiveness: mew2NeutralBossEffectiveness, description: 'Pede cobertura util e boa leitura de trocas dentro do trio.' },
  { id: 'blastoise', name: 'Blastoise', types: ['water'], moveType: 'water', effectiveness: mew2TypedBossEffectiveness, description: 'Encontro mais constante, ideal para testar sustentacao e troca segura no trio.' },
  { id: 'pinsir', name: 'Pinsir', types: ['bug'], moveType: 'bug', effectiveness: mew2NeutralBossEffectiveness, description: 'Luta curta que recompensa picks simples, organizados por papel dentro do cla.' },
  { id: 'venusaur', name: 'Venusaur', types: ['grass', 'poison'], moveType: 'grass', effectiveness: mew2TypedBossEffectiveness, description: 'Encontro com pressao progressiva, bom para testar abertura de suporte e DPS.', ration: { label: 'Rindo Ration', shortLabel: 'Rindo', image: 'rations/rindo_ration.png', description: 'Aumenta a resistencia contra ataques Grass em 30% por 60 minutos.' } },
  { id: 'charizard', name: 'Charizard', image: 'charizard.png', types: ['fire', 'flying'], moveType: 'fire', effectiveness: mew2TypedBossEffectiveness, description: 'Chefe agressivo que cobra cobertura limpa e resposta rapida ao burst.' },
  { id: 'pikachu', name: 'Pikachu', types: ['electric'], moveType: 'electric', effectiveness: mew2NeutralBossEffectiveness, description: 'Chefe rapido; deixar funcao clara por cla ajuda a compor o trio com menos erro.' },
  { id: 'mewtwo', name: 'Mewtwo', types: ['psychic'], moveType: 'psychic', effectiveness: mew2TypedBossEffectiveness, description: 'Chefe final que exige execucao limpa, com Tanque, DPS e Suporte bem definidos.' }
].map((entry) => ({
  ...entry,
  clans: cloneChampionPathRolePoolsForMew2()
})), {
  id: 'mew2',
  encounterLabel: '',
  encounterNote: 'Layout inicial por cla e funcao para a raid de Mewtwo.'
});

// Aplicar Dragonair (Marvel Scale) como DPS/speedster recomendado para Mewtwo
// em chefes cujos movimentos sao super efetivos contra Dragon (Fairy/Ice/Dragon).
['clefable', 'jynx'].forEach((id) => {
  const boss = mew2Bosses.find((b) => b.id === id);
  if (!boss) return;
  const instinctDpsList = boss.clans?.instinct?.roles?.dps;
  if (!Array.isArray(instinctDpsList)) return;

  const exists = instinctDpsList.some((pick) => getRecommendationNameKey(pick) === 'dragonair');
  if (!exists) {
    instinctDpsList.push(createRolePick('Dragonair', ['dragon'], 'dragon', { tier: 'green' }));
  }
});

const bossCatalogs = {
  hoopa: {
    id: 'hoopa',
    label: 'Hoopa Portais',
    variant: 'hoopa',
    searchEnabled: true,
    introLines: [
      'Clique em um chefe para ver recomenda\u00E7\u00F5es de pok\u00E9mons para enfrent\u00E1-lo.',
      '\u2694\uFE0F Ofensiva: quanto maior, melhor. \uD83D\uDEE1\uFE0F Defesa: quanto menor, melhor (0.5 = imune / super inafetivo, 2 = super eficaz).',
      '\u26A0\uFE0F Recomendado usar pok\u00E9mons pelo menos bronze 5 para as recomenda\u00E7\u00F5es apresentadas.'
    ],
    data: hoopaPortalsData
  },
  champion: {
    id: 'champion',
    label: 'Champion Path',
    variant: 'roleboard',
    searchEnabled: true,
    summary: 'Abra um mega chefe para ver escolhas de Tanque, DPS e Suporte separadas por cla.',
    pills: ['Mega chefes', 'Tanque / DPS / Suporte', 'Busca por Pokémon'],
    data: championPathBosses
  },
  mew2: {
    id: 'mew2',
    label: 'Mewtwo',
    variant: 'roleboard',
    searchEnabled: true,
    summary: 'Abra um chefe do Mewtwo para ver o trio ideal dividido por cla, com Tanque, DPS e Suporte.',
    pills: ['Tanque / DPS / Suporte', 'Busca por Pokémon', 'Exemplos temporários'],
    data: mew2Bosses
  },
  planner: {
    id: 'planner',
    label: 'Planejador',
    variant: 'planner',
    searchEnabled: false,
    summary: 'Monte uma composicao de bosses com picks, papeis e itens em um link compartilhavel.',
    introLines: [
      'Selecione um conteudo, adicione Tank, DPS e Suporte por chefe.',
      'Use as recomendacoes ja existentes de Mewtwo, Champion Path e Hoopa Portais para acelerar o planejamento.',
      'Ao final, gere um link unico para abrir exatamente a mesma composicao em qualquer dispositivo.'
    ],
    data: []
  }
  ,horizons: {
    id: 'horizons',
    label: 'Horizons',
    variant: 'hoopa',
    searchEnabled: false,
    introLines: [
      'Em breve.'
    ],
    data: []
  }
};

const bossModeAliases = Object.freeze({
  hoopa: 'hoopa',
  'hoopa-portais': 'hoopa',
  champion: 'champion',
  'champion-path': 'champion',
  mew2: 'mew2',
  mewtwo: 'mew2',
  planner: 'planner',
  planejador: 'planner'
  ,horizons: 'horizons'
});

const standaloneBossModePages = Object.freeze({
  hoopa: 'hoopa-portais.html',
  champion: 'champion-path.html',
  mew2: 'mewtwo.html',
  planner: 'planejador.html'
  ,horizons: 'horizons.html'
});

const plannerContentOrder = Object.freeze(['mew2', 'champion', 'hoopa']);
const plannerClanOrder = Object.freeze(['instinct', 'mystic', 'valor']);
const plannerStateCache = {
  index: null,
  map: null
};
const plannerRecommendationCache = new Map();
let plannerState = createEmptyPlannerState();
let plannerSubpage = 'compose';
let plannerShowBrowser = true; // when true, show step 1 (filter browser). set false to focus composition (step 2)
let plannerShareFieldVisible = false;
let plannerShareFeedback = {
  message: '',
  tone: ''
};

function normalizeBossMode(mode) {
  const normalizedMode = String(mode || '').trim().toLowerCase();
  return bossModeAliases[normalizedMode] || '';
}

function isStandaloneBossesPage() {
  if (typeof location === 'undefined') return false;
  return location.pathname.toLowerCase().includes('/bosses/');
}

function getStandaloneBossModePath(mode) {
  const normalizedMode = normalizeBossMode(mode) || 'hoopa';
  const targetFile = standaloneBossModePages[normalizedMode] || standaloneBossModePages.hoopa;
  const segments = String(location.pathname || '').split('/');
  const currentFile = String(segments[segments.length - 1] || '').toLowerCase();

  if (!currentFile || currentFile === 'bosses') {
    segments.push(targetFile);
  } else if (
    currentFile === 'index.html' ||
    currentFile === 'hoopa-portais.html' ||
    currentFile === 'champion-path.html' ||
    currentFile === 'mewtwo.html' ||
    currentFile === 'planejador.html'
  ) {
    segments[segments.length - 1] = targetFile;
  } else {
    segments[segments.length - 1] = targetFile;
  }

  return segments.join('/');
}

function getBossModeFromPathname(pathname) {
  const filename = String(pathname || '')
    .split('/')
    .filter(Boolean)
    .pop()
    ?.replace(/\.html?$/i, '');

  return normalizeBossMode(filename);
}

function getInitialBossModeFromLocation() {
  if (typeof location === 'undefined') return 'hoopa';

  const params = new URLSearchParams(location.search);
  return normalizeBossMode(params.get('tab'))
    || normalizeBossMode(params.get('bossmode') || params.get('mode'))
    || getBossModeFromPathname(location.pathname)
    || normalizeBossMode(document.body?.dataset?.initialBossMode || document.body?.dataset?.bossMode)
    || 'hoopa';
}

function syncStandaloneBossModeUrl(mode) {
  if (!isStandaloneBossesPage() || typeof history === 'undefined') return;

  const nextPath = getStandaloneBossModePath(mode);
  const params = new URLSearchParams(location.search);
  params.delete('tab');
  params.delete('bossmode');
  params.delete('mode');

  const query = params.toString();
  const nextUrl = `${nextPath}${query ? `?${query}` : ''}${location.hash || ''}`;
  const currentUrl = `${location.pathname}${location.search}${location.hash || ''}`;

  if (currentUrl !== nextUrl) {
    history.replaceState(null, '', nextUrl);
  }
}

function getRecommendationNameKey(nameOrPokemon) {
  const rawName = typeof nameOrPokemon === 'string'
    ? nameOrPokemon
    : nameOrPokemon?.name;

  return String(rawName || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '');
}

const fixedRecommendationClanTypes = Object.freeze({
  mystic: Object.freeze(['fairy', 'fighting', 'ghost', 'ice', 'steel', 'water']),
  instinct: Object.freeze(['dragon', 'electric', 'grass', 'ground', 'poison', 'psychic']),
  valor: Object.freeze(['bug', 'dark', 'fire', 'flying', 'normal', 'rock'])
});

const fixedRecommendationClanByPrimaryType = Object.freeze(
  Object.entries(fixedRecommendationClanTypes).reduce((acc, [clanKey, types]) => {
    types.forEach((type) => {
      acc[type] = clanKey;
    });
    return acc;
  }, {})
);

function createFixedRecommendationDefinition(name, primaryType, role, expectedClan = '') {
  const normalizedPrimaryType = String(primaryType || '').trim().toLowerCase();
  const normalizedRole = String(role || '').trim().toLowerCase();
  const derivedClan = fixedRecommendationClanByPrimaryType[normalizedPrimaryType] || '';

  if (!derivedClan && typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(`[bosses] ${name} usa um tipo principal invalido no registro global: ${primaryType}.`);
  }

  if (expectedClan && derivedClan && expectedClan !== derivedClan && typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(`[bosses] ${name} foi listado em ${expectedClan}, mas ${normalizedPrimaryType} pertence a ${derivedClan}.`);
  }

  return Object.freeze({
    name,
    primaryType: normalizedPrimaryType,
    clan: derivedClan || String(expectedClan || '').trim().toLowerCase(),
    role: normalizedRole
  });
}

// Fonte de verdade global:
// cada Pokemon recomendado precisa existir aqui com tipo principal e funcao fixos.
// O clan sempre eh derivado do tipo principal pelas regras do projeto.
const fixedRecommendationPokemonPools = Object.freeze({
  instinct: Object.freeze({
    dps: Object.freeze([
      createFixedRecommendationDefinition("Alakazam", 'psychic', 'dps', 'instinct'),
      createFixedRecommendationDefinition("Dedenne", 'electric', 'dps', 'instinct'),
      createFixedRecommendationDefinition("Dragonair", 'dragon', 'dps', 'instinct'),
      createFixedRecommendationDefinition("Excadrill", 'ground', 'dps', 'instinct'),
      createFixedRecommendationDefinition("Lurantis", 'grass', 'dps', 'instinct'),
      createFixedRecommendationDefinition("Marowak", 'ground', 'dps', 'instinct'),
      createFixedRecommendationDefinition("Mega Gardevoir", 'psychic', 'dps', 'instinct'),
      createFixedRecommendationDefinition("Mega Raichu X", 'electric', 'dps', 'instinct'),
      createFixedRecommendationDefinition("Mega Raichu Y", 'electric', 'dps', 'instinct'),
      createFixedRecommendationDefinition("Mega Sceptile", 'grass', 'dps', 'instinct'),
      createFixedRecommendationDefinition("Pikachu", 'electric', 'dps', 'instinct'),
      createFixedRecommendationDefinition("Rosa's Serperior", 'grass', 'dps', 'instinct'),
      createFixedRecommendationDefinition("Seviper", 'poison', 'dps', 'instinct'),
      createFixedRecommendationDefinition("Shiftry", 'grass', 'dps', 'instinct'),
      createFixedRecommendationDefinition("VenusaurTwo", 'grass', 'dps', 'instinct')
    ]),
    tank: Object.freeze([
      createFixedRecommendationDefinition("Appletun", 'grass', 'tank', 'instinct'),
      createFixedRecommendationDefinition("Chesnaught", 'grass', 'tank', 'instinct'),
      createFixedRecommendationDefinition("Claydol", 'ground', 'tank', 'instinct'),
      createFixedRecommendationDefinition("Goodra", 'dragon', 'tank', 'instinct'),
      createFixedRecommendationDefinition("Magnezone", 'electric', 'tank', 'instinct'),
      createFixedRecommendationDefinition("Tangrowth", 'grass', 'tank', 'instinct'),
      createFixedRecommendationDefinition("Toxapex", 'poison', 'tank', 'instinct'),
      createFixedRecommendationDefinition("Wobbuffet", 'psychic', 'tank', 'instinct'),
      createFixedRecommendationDefinition("Wynaut", 'psychic', 'tank', 'instinct')
    ]),
    support: Object.freeze([
      createFixedRecommendationDefinition("Bellossom", 'grass', 'support', 'instinct'),
      createFixedRecommendationDefinition("Kadabra", 'psychic', 'support', 'instinct'),
      createFixedRecommendationDefinition("Kirlia", 'psychic', 'support', 'instinct'),
      createFixedRecommendationDefinition("Pachirisu", 'electric', 'support', 'instinct')
    ])
  }),
  mystic: Object.freeze({
    dps: Object.freeze([
      createFixedRecommendationDefinition("Banette", 'ghost', 'dps', 'mystic'),
      createFixedRecommendationDefinition("BlastoiseTwo", 'water', 'dps', 'mystic'),
      createFixedRecommendationDefinition("Dachsbun", 'fairy', 'dps', 'mystic'),
      createFixedRecommendationDefinition("Dewgong", 'water', 'dps', 'mystic'),
      createFixedRecommendationDefinition("Drifloom", 'ghost', 'dps', 'mystic'),
      createFixedRecommendationDefinition("Duraludon", 'steel', 'dps', 'mystic'),
      createFixedRecommendationDefinition("Greninja", 'water', 'dps', 'mystic'),
      createFixedRecommendationDefinition("Hawlucha", 'fighting', 'dps', 'mystic'),
      createFixedRecommendationDefinition("Kingdra", 'water', 'dps', 'mystic'),
      createFixedRecommendationDefinition("Lombre", 'water', 'dps', 'mystic'),
      createFixedRecommendationDefinition("Mantine", 'water', 'dps', 'mystic'),
      createFixedRecommendationDefinition("Mega Feraligatr", 'water', 'dps', 'mystic'),
      createFixedRecommendationDefinition("Mega Greninja", 'water', 'dps', 'mystic'),
      createFixedRecommendationDefinition("Mega Gyarados", 'water', 'dps', 'mystic'),
      createFixedRecommendationDefinition("Mega Hawlucha", 'fighting', 'dps', 'mystic'),
      createFixedRecommendationDefinition("Mega Lucario", 'fighting', 'dps', 'mystic'),
      createFixedRecommendationDefinition("Mega Lucario Z", 'fighting', 'dps', 'mystic'),
      createFixedRecommendationDefinition("Mega Skarmory", 'steel', 'dps', 'mystic'),
      createFixedRecommendationDefinition("Mega Starmie", 'water', 'dps', 'mystic'),
      createFixedRecommendationDefinition("Melony's Frosmoth", 'ice', 'dps', 'mystic'),
      createFixedRecommendationDefinition("Orthworm", 'steel', 'dps', 'mystic'),
      createFixedRecommendationDefinition("Qwilfish", 'water', 'dps', 'mystic'),
      createFixedRecommendationDefinition("Seaking", 'water', 'dps', 'mystic')
    ]),
    tank: Object.freeze([
      createFixedRecommendationDefinition("Aegislash", 'steel', 'tank', 'mystic'),
      createFixedRecommendationDefinition("Bronzong", 'steel', 'tank', 'mystic'),
      createFixedRecommendationDefinition("Carracosta", 'water', 'tank', 'mystic'),
      createFixedRecommendationDefinition("Drifblim", 'ghost', 'tank', 'mystic'),
      createFixedRecommendationDefinition("Dusclops", 'ghost', 'tank', 'mystic')
    ]),
    support: Object.freeze([
      createFixedRecommendationDefinition("Comfey", 'fairy', 'support', 'mystic'),
      createFixedRecommendationDefinition("Misdreavus", 'ghost', 'support', 'mystic'),
      createFixedRecommendationDefinition("Politoed", 'water', 'support', 'mystic'),
      createFixedRecommendationDefinition("Smoochum", 'ice', 'support', 'mystic')
    ])
  }),
  valor: Object.freeze({
    dps: Object.freeze([
      createFixedRecommendationDefinition("Absol", 'dark', 'dps', 'valor'),
      createFixedRecommendationDefinition("Bouffalant", 'normal', 'dps', 'valor'),
      createFixedRecommendationDefinition("CharizardTwo", 'fire', 'dps', 'valor'),
      createFixedRecommendationDefinition("Cramorant", 'flying', 'dps', 'valor'),
      createFixedRecommendationDefinition("Delphox", 'fire', 'dps', 'valor'),
      createFixedRecommendationDefinition("Farfetch'd", 'normal', 'dps', 'valor'),
      createFixedRecommendationDefinition("Heracross", 'bug', 'dps', 'valor'),
      createFixedRecommendationDefinition("Kabutops", 'rock', 'dps', 'valor'),
      createFixedRecommendationDefinition("May's Beautifly", 'bug', 'dps', 'valor'),
      createFixedRecommendationDefinition("Mega Absol Z", 'dark', 'dps', 'valor'),
      createFixedRecommendationDefinition("Mega Delphox", 'fire', 'dps', 'valor'),
      createFixedRecommendationDefinition("Mega Houndoom", 'dark', 'dps', 'valor'),
      createFixedRecommendationDefinition("Mega Scizor", 'bug', 'dps', 'valor'),
      createFixedRecommendationDefinition("Pyroar Female", 'fire', 'dps', 'valor'),
      createFixedRecommendationDefinition("Ribombee", 'bug', 'dps', 'valor'),
      createFixedRecommendationDefinition("Scolipede", 'bug', 'dps', 'valor'),
      createFixedRecommendationDefinition("Scyther", 'bug', 'dps', 'valor'),
      createFixedRecommendationDefinition("Tauros", 'normal', 'dps', 'valor'),
      createFixedRecommendationDefinition("Weavile", 'dark', 'dps', 'valor')
    ]),
    tank: Object.freeze([
      createFixedRecommendationDefinition("Armarouge", 'fire', 'tank', 'valor'),
      createFixedRecommendationDefinition("Bastiodon", 'rock', 'tank', 'valor'),
      createFixedRecommendationDefinition("Magcargo", 'fire', 'tank', 'valor'),
      createFixedRecommendationDefinition("Nosepass", 'rock', 'tank', 'valor'),
      createFixedRecommendationDefinition("Onix", 'rock', 'tank', 'valor'),
      createFixedRecommendationDefinition("Orbeetle", 'bug', 'tank', 'valor'),
      createFixedRecommendationDefinition("Probopass", 'rock', 'tank', 'valor'),
      createFixedRecommendationDefinition("Sableye", 'dark', 'tank', 'valor'),
      createFixedRecommendationDefinition("Shieldon", 'rock', 'tank', 'valor'),
      createFixedRecommendationDefinition("Shuckle", 'bug', 'tank', 'valor'),
      createFixedRecommendationDefinition("Torkoal", 'fire', 'tank', 'valor')
    ]),
    support: Object.freeze([
      createFixedRecommendationDefinition("Blissey", 'normal', 'support', 'valor'),
      createFixedRecommendationDefinition("Lopunny", 'normal', 'support', 'valor'),
      createFixedRecommendationDefinition("Ponyta", 'fire', 'support', 'valor'),
      createFixedRecommendationDefinition("Porygon2", 'normal', 'support', 'valor'),
      createFixedRecommendationDefinition("Zorua", 'dark', 'support', 'valor')
    ])
  })
});

function createFixedRecommendationRegistry(pools = {}) {
  const registry = {};
  const conflicts = [];

  Object.entries(pools || {}).forEach(([clanKey, roles]) => {
    Object.entries(roles || {}).forEach(([roleKey, names]) => {
      (names || []).forEach((entry) => {
        const normalizedKey = getRecommendationNameKey(entry?.name);
        if (!normalizedKey) return;

        const existing = registry[normalizedKey];
        if (existing && (
          existing.clan !== entry?.clan
          || existing.role !== entry?.role
          || existing.primaryType !== entry?.primaryType
        )) {
          conflicts.push(`${entry?.name}: ${existing.clan}/${existing.role}/${existing.primaryType} -> ${entry?.clan}/${entry?.role}/${entry?.primaryType}`);
          return;
        }

        if (clanKey !== entry?.clan || roleKey !== entry?.role) {
          conflicts.push(`${entry?.name}: bloco ${clanKey}/${roleKey} != registro ${entry?.clan}/${entry?.role}`);
          return;
        }

        registry[normalizedKey] = entry;
      });
    });
  });

  if (conflicts.length && typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(`[bosses] Cadastro global de pokemons com conflito: ${conflicts.join('; ')}`);
  }

  return registry;
}

const fixedRecommendationPokemonRegistry = Object.freeze(createFixedRecommendationRegistry(fixedRecommendationPokemonPools));
const recommendationRegistryWarnings = new Set();
const recommendationAssignmentWarnings = new Set();

function resolveFixedRecommendationRegistryKey(nameOrPokemon) {
  const rawKey = getRecommendationNameKey(nameOrPokemon);
  if (!rawKey) return '';
  if (fixedRecommendationPokemonRegistry[rawKey]) return rawKey;

  if (rawKey.startsWith('shiny')) {
    const baseKey = rawKey.replace(/^shiny/, '');
    if (fixedRecommendationPokemonRegistry[baseKey]) {
      return baseKey;
    }
  }

  return '';
}

function getFixedRecommendationEntry(nameOrPokemon) {
  const registryKey = resolveFixedRecommendationRegistryKey(nameOrPokemon);
  return registryKey ? fixedRecommendationPokemonRegistry[registryKey] : null;
}

function normalizeRecommendationTypesByRegistry(types = [], primaryType = '') {
  const normalizedPrimaryType = String(primaryType || '').trim().toLowerCase();
  const uniqueTypes = mergeLowercaseUniqueValues(types || []);
  if (!normalizedPrimaryType) return uniqueTypes;
  return [normalizedPrimaryType, ...uniqueTypes.filter((type) => type !== normalizedPrimaryType)];
}

function applyFixedRecommendationMetadata(pick, registryEntry) {
  if (!pick || !registryEntry) return pick;

  pick.types = normalizeRecommendationTypesByRegistry(pick.types, registryEntry.primaryType);
  pick._fixedClan = registryEntry.clan;
  pick._fixedRole = registryEntry.role;
  pick._fixedPrimaryType = registryEntry.primaryType;
  return pick;
}

function warnRecommendationWithoutRegistry(boss, pick) {
  const nameKey = getRecommendationNameKey(pick);
  if (!nameKey || recommendationRegistryWarnings.has(nameKey)) return;

  recommendationRegistryWarnings.add(nameKey);

  if (typeof console !== 'undefined' && typeof console.warn === 'function') {
    console.warn(
      `[bosses] ${pick?.name || nameKey} precisa ser registrado em fixedRecommendationPokemonPools para aparecer corretamente em qualquer boss (${boss?.name || boss?.id || 'boss'}).`
    );
  }
}

function warnRecommendationAssignmentMismatch(context = {}, registryEntry) {
  const bossId = String(context?.boss?.id || '').trim().toLowerCase();
  const nameKey = getRecommendationNameKey(context?.pick);
  const currentRole = String(context?.roleKey || 'dps').trim().toLowerCase() || 'dps';
  const currentClan = String(context?.clanKey || '').trim().toLowerCase();
  if (!bossId || !nameKey || !currentClan || !registryEntry) return;

  const warningKey = `${bossId}|${currentClan}|${currentRole}|${nameKey}`;
  if (recommendationAssignmentWarnings.has(warningKey)) return;
  recommendationAssignmentWarnings.add(warningKey);

  if (typeof console !== 'undefined' && typeof console.warn === 'function') {
    console.warn(
      `[bosses] ${context?.pick?.name || nameKey} foi listado em ${currentClan}/${currentRole} no boss ${context?.boss?.name || bossId}, mas o registro global fixa ${registryEntry.clan}/${registryEntry.role} pelo tipo principal ${registryEntry.primaryType}.`
    );
  }
}

function formatNaturalLanguageList(items = []) {
  const normalizedItems = (items || []).map((item) => String(item || '').trim()).filter(Boolean);
  if (!normalizedItems.length) return '';
  if (normalizedItems.length === 1) return normalizedItems[0];
  if (normalizedItems.length === 2) return `${normalizedItems[0]} e ${normalizedItems[1]}`;
  return `${normalizedItems.slice(0, -1).join(', ')} e ${normalizedItems[normalizedItems.length - 1]}`;
}

function resolveHoopaPortalTickerBossLabel(value) {
  const rawValue = String(value || '').trim();
  if (!rawValue) return '';

  const normalizedRaw = rawValue.toLowerCase();
  const rawKey = getRecommendationNameKey(rawValue);
  const matchedBoss = hoopaPortalsData.find((boss) => (
    String(boss?.id || '').trim().toLowerCase() === normalizedRaw
    || getRecommendationNameKey(boss?.id) === rawKey
    || getRecommendationNameKey(boss?.name) === rawKey
  ));

  return matchedBoss?.name || rawValue;
}

function getHoopaPortalTickerMessage() {
  const mode = String(hoopaPortalTickerConfig?.mode || 'daily').trim().toLowerCase();

  if (mode === 'hidden' || mode === 'off' || mode === 'disabled') {
    return '';
  }

  if (mode === 'all-open') {
    return String(hoopaPortalTickerConfig?.customMessage || 'Portal Break! Todos os Hoopas estao disponiveis.')
      .trim();
  }

  if (mode === 'custom') {
    return String(hoopaPortalTickerConfig?.customMessage || '').trim();
  }

  const bosses = Array.isArray(hoopaPortalTickerConfig?.bosses)
    ? hoopaPortalTickerConfig.bosses.map(resolveHoopaPortalTickerBossLabel).filter(Boolean)
    : [];

  if (!bosses.length) {
    return '';
  }

  const prefix = String(hoopaPortalTickerConfig?.prefix || 'Os Hoopa Portais de hoje sao:')
    .trim();

  return `${prefix} ${formatNaturalLanguageList(bosses)}.`;
}

const mirroredRecommendationVariantNames = Object.freeze({
  alakazam: 'Shiny Alakazam',
  delphox: 'Shiny Delphox',
  weavile: 'Shiny Weavile',
  absol: 'Shiny Absol',
  megaabsol: 'Shiny Mega Absol',
  megaabsolz: 'Shiny Mega Absol Z',
  pachirisu: 'Shiny Pachirisu',
  seaking: 'Shiny Seaking',
  bouffalant: 'Shiny Bouffalant',
  dragonair: 'Shiny Dragonair',
  megaferaligatr: 'Shiny Mega Feraligatr',
  scyther: 'Shiny Scyther'
});

function getImplicitRecommendationProfile(poke) {
  const nameKey = getRecommendationNameKey(poke);

  if (nameKey === 'pikachu' || nameKey.includes('raichuy')) {
    return {
      passiveSuperEffectiveTypes: ['flying'],
      passiveText: 'Passiva: Resolute Heart: causa dano super efetivo em qualquer pokemon do tipo Flying.'
    };
  }

  if (nameKey === 'megaraichux') {
    return {
      immunities: ['ground'],
      passiveName: 'Levitate',
      passiveDescription: 'O Pokemon e imune a danos do tipo Ground.'
    };
  }

  if (nameKey === 'cramorant') {
    return {
      passiveSuperEffectiveTypes: ['flying'],
      passiveText: 'Passiva: Gulp Missile: causa dano super efetivo em qualquer pokemon do tipo Flying.'
    };
  }

  if (nameKey === 'alakazam' || nameKey === 'shinyalakazam') {
    return {
      passiveName: 'Synchronize',
      passiveDescription: 'Torna o Pokemon imune aos efeitos negativos Paralyze, Poison e Burn.'
    };
  }

  if (nameKey === 'shinydelphox') {
    return {
      passiveName: 'Blaze',
      passiveDescription: 'Ao chegar 33% ou menos de vida, no proximo ataque basico que receber, seu ataque especial aumenta em 30% durante 20 segundos.'
    };
  }

  if (nameKey === 'shinyweavile') {
    return {
      passiveName: 'Keen Eye',
      passiveDescription: 'O Pokemon e imune ao status negativo de cegueira (BLIND).'
    };
  }

  if (
    nameKey === 'absol' ||
    nameKey === 'shinyabsol' ||
    nameKey === 'megaabsol' ||
    nameKey === 'shinymegaabsol' ||
    nameKey === 'megaabsolz' ||
    nameKey === 'shinymegaabsolz'
  ) {
    return {
      passiveName: 'Super Luck',
      passiveDescription: 'Ao atacar fisicamente tem chance de conceder um bonus de 20% de forca para a proxima habilidade. So pode ocorrer uma vez a cada 20 segundos.'
    };
  }

  if (nameKey === 'pachirisu') {
    return {
      immunities: ['electric'],
      passiveName: 'Volt Absorb',
      passiveDescription: 'O Pokemon se torna imune a danos do tipo Electric.'
    };
  }

  if (nameKey === 'shinypachirisu') {
    return {
      immunities: ['electric'],
      passiveName: 'Volt Absorb',
      passiveDescription: 'O Pokemon se torna imune a danos do tipo Electric.'
    };
  }

  if (nameKey === 'scyther') {
    return {
      passiveName: 'Steadfast',
      passiveDescription: 'Aumentos autoinfligidos de velocidade tambem aumentam special attack.'
    };
  }

  if (nameKey === 'shinyscyther') {
    return {
      passiveName: 'Steadfast + Swarm',
      passiveDescription: 'Aumentos autoinfligidos de velocidade tambem aumentam special attack.; Ao chegar 33% ou menos de vida, no proximo ataque basico que receber, seu ataque especial aumenta em 30% durante 20 segundos.'
    };
  }

  if (nameKey === 'dragonair' || nameKey === 'shinydragonair') {
    return {
      defenseByBossType: {
        dragon: 0.5,
        fairy: 0.5,
        ice: 0.5
      },
      passiveName: 'Marvel Scale',
      passiveDescription: 'O Pokémon sofre menos dano de ataques super efetivos (0.5x).'
    };
  }

  if (nameKey === 'rosasserperior') {
    return {
      passiveSuperEffectiveTypes: ['dragon'],
      passiveName: 'Royal Garden',
      passiveDescription: 'O Pokemon torna-se capaz de causar dano super efetivo a qualquer Pokemon do tipo Dragon.'
    };
  }

  if (nameKey === 'chesnaught') {
    return {
      passiveName: 'Bulletproof',
      passiveDescription: 'O Pokemon torna-se imune a alguns ataques de alvo unico.'
    };
  }

  if (nameKey === 'seaking' || nameKey === 'shinyseaking') {
    return {
      immunities: ['electric'],
      passiveName: 'Water Veil',
      passiveDescription: 'O Pokemon se torna imune a danos do tipo Electric.'
    };
  }

  if (nameKey === 'bouffalant' || nameKey === 'shinybouffalant') {
    return {
      immunities: ['electric'],
      passiveName: 'Curly Wall',
      passiveDescription: 'O Pokemon e imune a danos do tipo Electric.'
    };
  }

  if (nameKey === 'megaferaligatr' || nameKey === 'shinymegaferaligatr') {
    return {
      passiveName: 'Torrent',
      passiveDescription: 'Ao chegar 33% ou menos de vida, no proximo ataque basico que receber, seu ataque especial aumenta em 30% durante 20 segundos.'
    };
  }

  if (nameKey === 'scizor') {
    return {
      defenseByBossType: {
        fighting: 0.5
      },
      passiveName: 'Light Metal',
      passiveDescription: 'O Pokemon leva dano reduzido de ataques lutadores (0.5x).'
    };
  }

  if (nameKey === 'shinyscizor') {
    return {
      defenseByBossType: {
        fighting: 0.5
      },
      passiveName: 'Light Metal + Swarm',
      passiveDescription: 'O Pokemon leva dano reduzido de ataques lutadores (0.5x).; Ao chegar 33% ou menos de vida, no proximo ataque basico que receber, seu ataque especial aumenta em 30% durante 20 segundos.'
    };
  }

  if (nameKey === 'orbeetle') {
    return {
      passiveName: 'Swarm',
      passiveDescription: 'Ao chegar 33% ou menos de vida, no proximo ataque basico que receber, seu ataque especial aumenta em 30% durante 20 segundos.'
    };
  }

  if (nameKey === 'miltank') {
    return {
      defenseByBossType: {
        ice: 0.5,
        fire: 0.5
      },
      passiveName: 'Thick Fat',
      passiveDescription: 'O Pokemon recebe metade do dano de ataques do tipo Ice e Fire.'
    };
  }

  if (nameKey === 'shinymiltank') {
    return {
      defenseByBossType: {
        ice: 0.5,
        fire: 0.5
      },
      passiveSuperEffectiveTypes: ['ghost'],
      passiveName: 'Thick Fat + Scrappy',
      passiveDescription: 'O Pokemon recebe metade do dano de ataques do tipo Ice e Fire. Os ataques deste Pokemon causam dano super efetivo contra Pokemon do tipo Ghost.'
    };
  }

  if (nameKey === 'goodra') {
    return {
      defenseByBossType: {
        dragon: 0.5
      },
      passiveName: 'Gooey',
      passiveDescription: 'Sua gosma espessa torna o Pokemon resistente contra ataques do tipo Dragon.'
    };
  }

  if (nameKey === 'claydol') {
    return {
      defenseByBossType: {
        psychic: 0.5,
        ghost: 0.5
      },
      passiveName: 'Force Cosmik',
      passiveDescription: 'A sua ligação transcendental com o cosmos torna a sua mente um vazio impenetrável, garantindo resistência contra ataques dos tipos Psychic e Ghost.'
    };
  }

  if (nameKey === 'shinyclaydol') {
    return {
      immunities: ['ground'],
      defenseByBossType: {
        psychic: 0.5,
        ghost: 0.5
      },
      passiveName: 'Force Cosmik + Mystery Charge',
      passiveDescription: 'A sua ligação transcendental com o cosmos torna a sua mente um vazio impenetrável, garantindo resistência contra ataques dos tipos Psychic e Ghost.; A telecinese em seu corpo de barro gera um campo magnético, concedendo imunidade a ataques do tipo Ground.'
    };
  }

  if (nameKey === 'dusclops' || nameKey === 'shinydusclops') {
    return {
      defenseByBossType: {
        ghost: 0.5,
        psychic: 0.5
      },
      passiveName: 'Cursed Glare',
      passiveDescription: 'O olhar vazio deste Pokémon atua como um buraco negro para energias místicas, garantindo resistência contra ataques dos tipos Ghost e Psychic.'
    };
  }

  if (nameKey === 'misdreavus') {
    return {
      immunities: ['ground'],
      passiveName: 'Levitate',
      passiveDescription: 'O Pokémon é imune a danos do tipo terra.'
    };
  }

  if (nameKey === 'bronzong') {
    return {
      immunities: ['ground'],
      passiveName: 'Levitate',
      passiveDescription: 'O Pokémon é imune a danos do tipo terra.'
    };
  }

  if (nameKey === 'shinybronzong') {
    return {
      immunities: ['ground'],
      defenseByBossType: {
        fire: 0.5
      },
      passiveName: 'Levitate + Heatproof',
      passiveDescription: 'O Pokémon e imune a danos do tipo terra. O Pokémon sofre menos dano de ataque do tipo Fire (0.5x).'
    };
  }

  if (nameKey === 'seviper') {
    return {
      passiveName: 'Shed Skin',
      passiveDescription: 'Seviper limpa os efeitos negativos a cada 12 segundos.'
    };
  }

  if (nameKey === 'quagsire') {
    return {
      immunities: ['water'],
      passiveName: 'Water Absorb',
      passiveDescription: 'O Pokemon se torna imune a danos tipo Water.'
    };
  }

  return null;
}

function mergeLowercaseUniqueValues(...lists) {
  return Array.from(new Set(
    lists
      .flat()
      .filter(Boolean)
      .map((value) => String(value).toLowerCase())
  ));
}

function mergeLowercaseNumericMap(...maps) {
  const merged = {};

  maps.forEach((map) => {
    if (!map || typeof map !== 'object') return;

    Object.entries(map).forEach(([key, value]) => {
      const normalizedKey = String(key || '').trim().toLowerCase();
      if (!normalizedKey || typeof value !== 'number' || Number.isNaN(value)) return;
      merged[normalizedKey] = value;
    });
  });

  return Object.keys(merged).length ? merged : undefined;
}

function cloneBossEffectivenessConfig(config) {
  if (!config || typeof config !== 'object') return undefined;

  const cloned = { ...config };
  if (Array.isArray(config.attackTypes)) {
    cloned.attackTypes = [...config.attackTypes];
  }
  if (Array.isArray(config.offenseTargetTypes)) {
    cloned.offenseTargetTypes = [...config.offenseTargetTypes];
  }

  return cloned;
}

function cloneBossConsumableConfig(config) {
  if (!config || typeof config !== 'object') return config || undefined;
  return { ...config };
}

const bossConsumableCatalog = Object.freeze({
  pokeblocks: Object.freeze({
    rainbow: Object.freeze({
      label: 'Rainbow PokéBlock',
      shortLabel: 'Rainbow',
      image: 'pokeblocks/rainbow_pokeblock.png',
      description: 'Concede imunidade a efeitos negativos por 60 minutos.'
    })
  }),
  rations: Object.freeze({
    kasib: Object.freeze({
      label: 'Kasib Ration',
      shortLabel: 'Kasib',
      image: 'rations/kasib_ration.png',
      description: 'Aumenta a resistencia contra ataques Ghost em 30% por 60 minutos.'
    }),
    wacan: Object.freeze({
      label: 'Wacan Ration',
      shortLabel: 'Wacan',
      image: 'rations/wacan_ration.png',
      description: 'Aumenta a resistencia contra ataques Electric em 30% por 60 minutos.'
    }),
    tanga: Object.freeze({
      label: 'Tanga Ration',
      shortLabel: 'Tanga',
      image: 'rations/tanga_ration.png',
      description: 'Aumenta a resistencia contra ataques Bug em 30% por 60 minutos.'
    }),
    Payapa: Object.freeze({
      label: 'Payapa Ration',
      shortLabel: 'Payapa',
      image: 'rations/payapa_ration.png',
      description: 'Aumenta a resistencia contra ataques Psychic em 30% por 60 minutos.'
    }),
    haban: Object.freeze({
      label: 'Haban Ration',
      shortLabel: 'Haban',
      image: 'rations/haban_ration.png',
      description: 'Aumenta a resistencia contra ataques Dragon em 30% por 60 minutos.'
    }),
    shuca: Object.freeze({
      label: 'Shuca Ration',
      shortLabel: 'Shuca',
      image: 'rations/shuca_ration.png',
      description: 'Aumenta a resistencia contra ataques Ground em 30% por 60 minutos.'
    }),
    coba: Object.freeze({
      label: 'Coba Ration',
      shortLabel: 'Coba',
      image: 'rations/coba_ration.png',
      description: 'Aumenta a resistencia contra ataques Flying em 30% por 60 minutos.'
    }),
    rindo: Object.freeze({
      label: 'Rindo Ration',
      shortLabel: 'Rindo',
      image: 'rations/rindo_ration.png',
      description: 'Aumenta a resistencia contra ataques Grass em 30% por 60 minutos.'
    }),
    pokemon: Object.freeze({
      label: 'Pokémon Ration',
      shortLabel: 'Pokemon',
      image: 'rations/pokemon_ration.png',
      description: 'Aumenta a resistencia contra ataques Neutral em 30% por 60 minutos.'
    }),
    yache: Object.freeze({
      label: 'Yache Ration',
      shortLabel: 'Yache',
      image: 'rations/yache_ration.png',
      description: 'Aumenta a resistencia contra ataques Ice em 30% por 60 minutos.'
    }),
    occa: Object.freeze({
      label: 'Occa Ration',
      shortLabel: 'Occa',
      image: 'rations/occa_ration.png',
      description: 'Aumenta a resistencia contra ataques Fire em 30% por 60 minutos.'
    }),
    chople: Object.freeze({
      label: 'Chople Ration',
      shortLabel: 'Chople',
      image: 'rations/chople_ration.png',
      description: 'Aumenta a resistencia contra ataques Fighting em 30% por 60 minutos.'
    }),
    charti: Object.freeze({
      label: 'Charti Ration',
      shortLabel: 'Charti',
      image: 'rations/charti_ration.png',
      description: 'Aumenta a resistência do Pokémon a ataques do tipo Rocha em 30%. Duração: 60 Minutos.'
    }),
    passho: Object.freeze({
      label: 'Passho Ration',
      shortLabel: 'Passho',
      image: '',
      description: 'Aumenta a resistencia contra ataques Water em 30% por 60 minutos.'
    }),
    sitrus: Object.freeze({
      label: 'Sitrus Ration',
      shortLabel: 'Sitrus',
      image: 'rations/sitrus_ration.png',
      description: 'Impede o nocaute uma vez e restaura metade da vida ao receber dano fatal. Dura 24 horas.'
    })
  })
});

const bossRationByAttackType = Object.freeze({
  ghost: bossConsumableCatalog.rations.kasib,
  electric: bossConsumableCatalog.rations.wacan,
  bug: bossConsumableCatalog.rations.tanga,
  grass: bossConsumableCatalog.rations.rindo,
  psychic: bossConsumableCatalog.rations.Payapa,
  dragon: bossConsumableCatalog.rations.haban,
  ground: bossConsumableCatalog.rations.shuca,
  flying: bossConsumableCatalog.rations.coba,
  fighting: bossConsumableCatalog.rations.chople,
  fire: bossConsumableCatalog.rations.occa,
  ice: bossConsumableCatalog.rations.yache,
  rock: bossConsumableCatalog.rations.charti,
  water: bossConsumableCatalog.rations.passho,
  normal: bossConsumableCatalog.rations.pokemon,
  neutral: bossConsumableCatalog.rations.pokemon
});

const bossPokeblockByAttackType = Object.freeze({
  poison: bossConsumableCatalog.pokeblocks.rainbow,
  electric: bossConsumableCatalog.pokeblocks.rainbow,
  fire: bossConsumableCatalog.pokeblocks.rainbow,
  ice: bossConsumableCatalog.pokeblocks.rainbow,
  psychic: bossConsumableCatalog.pokeblocks.rainbow,
  ghost: bossConsumableCatalog.pokeblocks.rainbow
});

const bossAutoPokeblockAllowlist = new Set([
  'mega-victreebel'
]);

function getBossConsumableCandidateTypes(boss) {
  return mergeLowercaseUniqueValues(getBossMoveTypes(boss), boss?.types);
}

function getRecommendedBossRation(boss) {
  if (!boss || typeof boss !== 'object') return undefined;
  if (boss.ration) return cloneBossConsumableConfig(boss.ration);

  const match = getBossConsumableCandidateTypes(boss)
    .find((type) => bossRationByAttackType[type]);

  return match ? cloneBossConsumableConfig(bossRationByAttackType[match]) : undefined;
}

function getRecommendedBossPokeblock(boss) {
  if (!boss || typeof boss !== 'object') return undefined;
  if (boss.pokeblock || boss.pokebloc) return cloneBossConsumableConfig(boss.pokeblock || boss.pokebloc);
  if (boss.disableAutoPokeblock) return undefined;
  if (!bossAutoPokeblockAllowlist.has(String(boss.id || '').trim().toLowerCase())) return undefined;

  const match = getBossConsumableCandidateTypes(boss)
    .find((type) => bossPokeblockByAttackType[type]);

  return match ? cloneBossConsumableConfig(bossPokeblockByAttackType[match]) : undefined;
}

function applyRecommendedConsumablesToBosses(bosses = [], options = {}) {
  const includePokeblock = options.includePokeblock !== false;
  const includeRation = options.includeRation !== false;

  bosses.forEach((boss) => {
    if (!boss || typeof boss !== 'object') return;

    if (includePokeblock) {
      const pokeblock = getRecommendedBossPokeblock(boss);
      if (pokeblock) {
        boss.pokeblock = pokeblock;
      }
    } else {
      delete boss.pokeblock;
      delete boss.pokebloc;
    }

    if (includeRation) {
      const ration = getRecommendedBossRation(boss);
      if (ration) {
        boss.ration = ration;
      }
    } else {
      delete boss.ration;
    }
  });
}

function applyRecommendedConsumablesToAllBosses() {
  Object.values(bossCatalogs).forEach((catalog) => {
    applyRecommendedConsumablesToBosses(catalog?.data || [], {
      includePokeblock: true,
      includeRation: catalog?.variant !== 'hoopa'
    });
  });
}

applyRecommendedConsumablesToAllBosses();

function bossHasDragonMoveset(boss) {
  return getBossMoveTypes(boss).some((type) => type === 'dragon');
}

function createGoodraDragonPick() {
  const pick = createRolePick('Goodra', ['dragon'], 'dragon', {
    defenseByBossType: {
      dragon: 0.5
    },
    passiveName: 'Gooey',
    passiveDescription: 'Sua gosma espessa torna o Pokemon resistente contra ataques do tipo Dragon.'
  });
  pick.description = 'Tipo move: Dragon.';
  return pick;
}

function syncGoodraRecommendation(list, shouldInclude) {
  if (!Array.isArray(list)) return;

  for (let index = list.length - 1; index >= 0; index -= 1) {
    if (getRecommendationNameKey(list[index]?.name || list[index]) === 'goodra') {
      list.splice(index, 1);
    }
  }

  if (shouldInclude) {
    list.push(createGoodraDragonPick());
  }
}

function removeGoodraRecommendation(list) {
  syncGoodraRecommendation(list, false);
}

function applyGoodraTankRolesToDragonBosses() {
  const excludedChampionBossIds = new Set(['mega-aerodactyl', 'mega-aggron']);
  Object.entries(bossCatalogs).forEach(([catalogId, catalog]) => {
    (catalog.data || []).forEach((boss) => {
      ['instinct', 'mystic', 'valor'].forEach((clanKey) => {
        const clanData = boss?.clans?.[clanKey];
        if (!clanData) return;

        const isChampionCatalog = String(catalogId || '').toLowerCase() === 'champion';
        const shouldIncludeForClan = clanKey === 'instinct' && (
          bossHasDragonMoveset(boss)
          || (isChampionCatalog && !excludedChampionBossIds.has(String(boss?.id || '').trim().toLowerCase()))
        );

        if (clanData.roles) {
          // Manter Goodra como tank extra nos Champion bosses em geral,
          // mas sem forcar a pick em Mega Aerodactyl/Mega Aggron, onde a lista foi curada manualmente.
          // Fora disso, continuar aplicando a insercao para chefes com moveset Dragon.
          syncGoodraRecommendation(clanData.roles?.tank, shouldIncludeForClan);
        }

        // Manter listas "recommended" limpas removendo duplicatas de Goodra
        if (Array.isArray(clanData.recommended)) {
          removeGoodraRecommendation(clanData.recommended);
        }

        if (Array.isArray(clanData.recommendationGroups)) {
          clanData.recommendationGroups.forEach((group) => {
            removeGoodraRecommendation(group.recommended);
          });
        }
      });
    });
  });
}

applyGoodraTankRolesToDragonBosses();

function mergeBossEffectivenessConfig(...configs) {
  const merged = configs.reduce((acc, config) => {
    if (!config || typeof config !== 'object') return acc;
    return { ...acc, ...config };
  }, {});

  if (!Object.keys(merged).length) return undefined;

  if (Array.isArray(merged.attackTypes)) {
    merged.attackTypes = mergeLowercaseUniqueValues(merged.attackTypes);
  }
  if (Array.isArray(merged.offenseTargetTypes)) {
    merged.offenseTargetTypes = mergeLowercaseUniqueValues(merged.offenseTargetTypes);
  }

  return merged;
}

function appendUniqueSentence(baseText, sentence) {
  const nextSentence = String(sentence || '').trim();
  if (!nextSentence) return typeof baseText === 'string' ? baseText : '';

  const currentText = typeof baseText === 'string' ? baseText.trim() : '';
  if (!currentText) return nextSentence;
  if (currentText.toLowerCase().includes(nextSentence.toLowerCase())) return currentText;

  const spacer = /[.!?]$/.test(currentText) ? ' ' : '. ';
  return `${currentText}${spacer}${nextSentence}`;
}

function applyImplicitRecommendationEnhancements(poke) {
  if (!poke || typeof poke !== 'object') return poke;

  const profile = getImplicitRecommendationProfile(poke);
  if (!profile) return poke;

  poke.immunities = mergeLowercaseUniqueValues(
    poke.immunities,
    profile.immunities
  );

  poke.passiveSuperEffectiveTypes = mergeLowercaseUniqueValues(
    poke.passiveSuperEffectiveTypes,
    profile.passiveSuperEffectiveTypes
  );

  poke.defenseByBossType = mergeLowercaseNumericMap(
    poke.defenseByBossType,
    profile.defenseByBossType
  );

  if (typeof profile.passiveName === 'string' && profile.passiveName.trim() && !poke.passiveName) {
    poke.passiveName = profile.passiveName.trim();
  }

  if (typeof profile.passiveDescription === 'string' && profile.passiveDescription.trim()) {
    poke.passiveDescription = appendUniqueSentence(
      poke.passiveDescription,
      profile.passiveDescription.trim()
    );
  }

  const passiveText = typeof profile.passiveText === 'string' && profile.passiveText.trim()
    ? profile.passiveText.trim()
    : (
      poke.passiveName && poke.passiveDescription
        ? `Passiva: ${poke.passiveName}: ${poke.passiveDescription}`
        : ''
    );

  if (passiveText) {
    if (typeof poke.description === 'string') {
      poke.description = appendUniqueSentence(poke.description, passiveText);
    } else if (typeof poke.note === 'string') {
      poke.note = appendUniqueSentence(poke.note, passiveText);
    } else {
      poke.note = passiveText;
    }
  }

  return poke;
}

function visitAllRecommendationPicksWithContext(visitor) {
  Object.values(bossCatalogs).forEach((catalog) => {
    (catalog.data || []).forEach((boss) => {
      Object.entries(boss.clans || {}).forEach(([clanKey, clanData]) => {
        if (Array.isArray(clanData.recommended)) {
          clanData.recommended.forEach((pick, index) => {
            visitor({
              catalogId: catalog?.id || '',
              boss,
              clanKey,
              roleKey: 'dps',
              sourceType: 'recommended',
              index,
              pick
            });
          });
        }

        if (Array.isArray(clanData.recommendationGroups)) {
          clanData.recommendationGroups.forEach((group, groupIndex) => {
            (group.recommended || []).forEach((pick, index) => {
              visitor({
                catalogId: catalog?.id || '',
                boss,
                clanKey,
                roleKey: 'dps',
                sourceType: 'recommendation-group',
                group,
                groupIndex,
                index,
                pick
              });
            });
          });
        }

        if (clanData.roles) {
          roleboardRoleOrder.forEach((roleKey) => {
            (clanData.roles?.[roleKey] || []).forEach((pick, index) => {
              visitor({
                catalogId: catalog?.id || '',
                boss,
                clanKey,
                roleKey,
                sourceType: 'role',
                index,
                pick
              });
            });
          });
        }
      });
    });
  });
}

function visitAllRecommendationPicks(visitor) {
  visitAllRecommendationPicksWithContext(({ pick }) => {
    visitor(pick);
  });
}

function applyFixedRecommendationRegistryChecks() {
  visitAllRecommendationPicksWithContext((context) => {
    const registryEntry = getFixedRecommendationEntry(context?.pick);
    if (!registryEntry) {
      warnRecommendationWithoutRegistry(context?.boss, context?.pick);
      return;
    }

    applyFixedRecommendationMetadata(context.pick, registryEntry);

    if (registryEntry.clan !== context.clanKey || registryEntry.role !== context.roleKey) {
      warnRecommendationAssignmentMismatch(context, registryEntry);
    }
  });
}

function createEmptyFixedClanBuckets() {
  return {
    instinct: [],
    mystic: [],
    valor: []
  };
}

function createEmptyFixedRoleBuckets() {
  return {
    instinct: { support: [], dps: [], tank: [] },
    mystic: { support: [], dps: [], tank: [] },
    valor: { support: [], dps: [], tank: [] }
  };
}

function normalizeBossRecommendationAssignments(boss) {
  if (!boss || !boss.clans) return;

  const clanKeys = Object.keys(boss.clans);
  const hasRoleLists = clanKeys.some((clanKey) => boss.clans?.[clanKey]?.roles);
  const hasGroupedRecommendations = clanKeys.some((clanKey) => Array.isArray(boss.clans?.[clanKey]?.recommendationGroups) && boss.clans[clanKey].recommendationGroups.length);
  const hasFlatRecommendations = !hasRoleLists && !hasGroupedRecommendations && clanKeys.some((clanKey) => Array.isArray(boss.clans?.[clanKey]?.recommended));

  if (hasRoleLists) {
    const nextBuckets = createEmptyFixedRoleBuckets();

    collectRawRecommendationPicksForBoss(boss).forEach((pick) => {
      const registryEntry = getFixedRecommendationEntry(pick);
      if (!registryEntry) {
        warnRecommendationWithoutRegistry(boss, pick);
        return;
      }

      applyFixedRecommendationMetadata(pick, registryEntry);
      nextBuckets[registryEntry.clan]?.[registryEntry.role]?.push(pick);
    });

    clanKeys.forEach((clanKey) => {
      const clanData = boss.clans?.[clanKey];
      if (!clanData?.roles) return;

      roleboardRoleOrder.forEach((roleKey) => {
        clanData.roles[roleKey] = dedupeRecommendedPicksByName(nextBuckets[clanKey]?.[roleKey] || []);
      });
    });

    return;
  }

  if (hasGroupedRecommendations) {
    const groupTemplates = new Map();
    const nextBuckets = {
      instinct: new Map(),
      mystic: new Map(),
      valor: new Map()
    };

    clanKeys.forEach((clanKey) => {
      (boss.clans?.[clanKey]?.recommendationGroups || []).forEach((group) => {
        const groupKey = getRecommendationGroupKey(boss, group);
        if (!groupTemplates.has(groupKey)) {
          groupTemplates.set(groupKey, { ...group, recommended: [] });
        }

        (group?.recommended || []).forEach((pick) => {
          const registryEntry = getFixedRecommendationEntry(pick);
          if (!registryEntry) {
            warnRecommendationWithoutRegistry(boss, pick);
            return;
          }

          applyFixedRecommendationMetadata(pick, registryEntry);
          if (registryEntry.role !== 'dps') return;

          if (!nextBuckets[registryEntry.clan].has(groupKey)) {
            nextBuckets[registryEntry.clan].set(groupKey, []);
          }

          nextBuckets[registryEntry.clan].get(groupKey).push(pick);
        });
      });
    });

    clanKeys.forEach((clanKey) => {
      const clanData = boss.clans?.[clanKey];
      if (!clanData) return;

      clanData.recommendationGroups = Array.from(groupTemplates.entries()).map(([groupKey, template]) => ({
        ...template,
        recommended: dedupeRecommendedPicksByName(nextBuckets[clanKey].get(groupKey) || [])
      }));
    });

    return;
  }

  if (hasFlatRecommendations) {
    const nextBuckets = createEmptyFixedClanBuckets();

    collectRawRecommendationPicksForBoss(boss).forEach((pick) => {
      const registryEntry = getFixedRecommendationEntry(pick);
      if (!registryEntry) {
        warnRecommendationWithoutRegistry(boss, pick);
        return;
      }

      applyFixedRecommendationMetadata(pick, registryEntry);
      if (registryEntry.role !== 'dps') return;

      nextBuckets[registryEntry.clan]?.push(pick);
    });

    clanKeys.forEach((clanKey) => {
      const clanData = boss.clans?.[clanKey];
      if (!clanData || !Array.isArray(clanData.recommended)) return;
      clanData.recommended = dedupeRecommendedPicksByName(nextBuckets[clanKey] || []);
    });
  }
}

function normalizeAllBossRecommendationAssignments() {
  Object.values(bossCatalogs).forEach((catalog) => {
    (catalog.data || []).forEach((boss) => {
      normalizeBossRecommendationAssignments(boss);
    });
  });
}

function createMirroredRecommendationVariant(pick) {
  const variantName = mirroredRecommendationVariantNames[getRecommendationNameKey(pick)];
  if (!variantName) return null;

  const variant = cloneRolePickConfig(pick);
  variant.name = variantName;
  return variant;
}

function ensureMirroredRecommendationVariantsInList(picks = []) {
  if (!Array.isArray(picks) || !picks.length) return;

  const existingNames = new Set(picks.map((pick) => getRecommendationNameKey(pick)));
  const nextPicks = [];

  picks.forEach((pick) => {
    nextPicks.push(pick);

    const variant = createMirroredRecommendationVariant(pick);
    const variantKey = getRecommendationNameKey(variant);
    if (!variant || !variantKey || existingNames.has(variantKey)) return;

    existingNames.add(variantKey);
    nextPicks.push(variant);
  });

  picks.splice(0, picks.length, ...nextPicks);
}

function ensureMirroredRecommendationVariants() {
  Object.values(bossCatalogs).forEach((catalog) => {
    (catalog.data || []).forEach((boss) => {
      Object.values(boss.clans || {}).forEach((clanData) => {
        if (Array.isArray(clanData.recommended)) {
          ensureMirroredRecommendationVariantsInList(clanData.recommended);
        }

        if (Array.isArray(clanData.recommendationGroups)) {
          clanData.recommendationGroups.forEach((group) => {
            ensureMirroredRecommendationVariantsInList(group.recommended);
          });
        }

        if (clanData.roles) {
          roleboardRoleOrder.forEach((roleKey) => {
            ensureMirroredRecommendationVariantsInList(clanData.roles?.[roleKey]);
          });
        }
      });
    });
  });
}

function hydrateRecommendationCatalog() {
  visitAllRecommendationPicks((poke) => {
    applyImplicitRecommendationEnhancements(poke);
  });
}

const bossTutorialLinks = Object.freeze({
  // Preencher depois com o id do boss e a URL do vídeo.
  // Exemplo:
  // 'mega-staraptor': 'https://www.youtube.com/watch?v=...'
});

const basePath = (() => {
  const p = location.pathname.toLowerCase();
  if (p.includes('/bosses')) return '';
  return 'bosses/';
})();

const iconBase = (() => {
  const p = location.pathname.toLowerCase();
  return (p.includes('/bosses') ? '../' : '') + 'icons-type/';
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
  ghost: ['poison','bug'],
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

const typeSuperEffectivenessOverrides = {
  ice: ['dragon'],
  fairy: ['dragon']
};

function hasForcedSuperEffectiveness(attackingType, defendingTypes = []) {
  const overrides = typeSuperEffectivenessOverrides[String(attackingType || '').toLowerCase()];
  if (!Array.isArray(overrides) || !overrides.length) return false;
  return defendingTypes.some((type) => overrides.includes(String(type || '').toLowerCase()));
}

function getTypeMultiplier(attackingType, defendingTypes, defenderImmunities = [], passiveSuperEffectiveTypes = []) {
  if (!attackingType || !defendingTypes || !defendingTypes.length) return 1;

  const normalizedPassiveTypes = mergeLowercaseUniqueValues(passiveSuperEffectiveTypes);
  const hasPassiveAdvantage = normalizedPassiveTypes.some((type) => defendingTypes.includes(type));
  let multiplier = 1;
  let hasImmunity = Array.isArray(defenderImmunities) && defenderImmunities.includes(attackingType);
  for (const def of defendingTypes) {
    if (typeImmunities[def]?.includes(attackingType)) {
      hasImmunity = true;
      continue;
    }
    if (typeEffectiveness[attackingType]?.includes(def)) {
      multiplier *= 2;
    } else if (typeResistances[def]?.includes(attackingType)) {
      multiplier *= 0.5;
    }
  }

  if (hasPassiveAdvantage) {
    return Math.max(multiplier * 2, 2);
  }

  if (hasImmunity) {
    return 0;
  }

  if (multiplier >= 2 && hasForcedSuperEffectiveness(attackingType, defendingTypes)) {
    return Math.max(multiplier, 4);
  }

  return multiplier;
}

// Normaliza valores de multiplicador de tipo para a nova escala de ATK.
// Entrada: multiplicador bruto (ex: 0, 0.5, 1, 2, 4).
// Saída: ATK na nova escala — 0 (imune), <1 (resistência), 1.0 (neutro), 1.5 (efetivo), 2.0 (super efetivo).
function normalizeOffenseValue(raw) {
  if (typeof raw !== 'number' || isNaN(raw)) return 1.0;
  // Não permitir ATK 0 — tratar imunidades como resistência mínima 0.5x
  if (raw === 0) return 0.5;
  if (raw >= 4) return 2.0;
  if (raw >= 2) return 1.5;
  if (raw >= 1) return 1.0;
  // Mantemos resistências abaixo de 1 (ex: 0.5)
  return raw;
}

// Normaliza valores de multiplicador de defesa para a nova regra de DEF.
// Dois modos:
// - automatico (isExplicit = false): valores derivados do matchup entre tipos
//   mapeiam: 0 -> 0.5 (nulo), 0.25 -> 0.5 (super inafetivo), 0.5 -> 0.75 (inafetivo)
// - explicito (isExplicit = true): valores definidos em dados (passivas/overrides)
//   são tratados como autoritativos: qualquer valor <= 0.5 é considerado super inafetivo/mitigado -> 0.5
// Valores maiores que 1 (vulnerabilidades) permanecem inalterados.
function normalizeDefenseValue(raw, isExplicit = false) {
  if (typeof raw !== 'number' || isNaN(raw)) return 1;
  if (isExplicit) {
    // Valores explicitamente definidos pelo dataset devem ser respeitados;
    // mapear imunidade/valores muito baixos para 0.5 para manter consistência
    if (raw <= 0.5) return 0.5;
    return raw;
  }

  // Automático (resultado de getTypeMultiplier)
  if (raw <= 0.25) return 0.5; // dupla resistência / imunidade -> 0.5
  if (raw === 0.5) return 0.75; // resistência simples -> 0.75
  return raw;
}

function normalizeMoveTypeValues(value) {
  return Array.from(new Set(
    (Array.isArray(value) ? value : [value])
      .flatMap((entry) => typeof entry === 'string' ? entry.split('/') : [])
      .map((entry) => entry.trim().toLowerCase())
      .filter(Boolean)
  ));
}

function parseMoveTypes(poke) {
  if (!poke || typeof poke !== 'object') return [];
  const explicitMoveTypes = normalizeMoveTypeValues(poke.moveType);
  if (explicitMoveTypes.length) {
    return explicitMoveTypes;
  }
  if (typeof poke.description !== 'string') return [];
  const match = poke.description.match(/(?:Tipo move|Tipo de golpe|Moveset|MoveType):\s*([a-zA-Z/]+)/i);
  return match ? normalizeMoveTypeValues(match[1]) : [];
}

function parseMoveType(poke) {
  return parseMoveTypes(poke)[0] || null;
}

function getBossMoveTypes(boss) {
  if (!boss || typeof boss !== 'object') return [];
  const moveTypes = parseMoveTypes(boss);
  if (moveTypes.length) return moveTypes;
  return normalizeMoveTypeValues(Array.isArray(boss.types) ? boss.types[0] : null);
}

function getBossMoveType(boss) {
  return getBossMoveTypes(boss)[0] || null;
}

function normalizeMoveTypeLabel(description) {
  if (typeof description !== 'string') return '';
  return description.replace(/(?:Tipo move|Tipo de golpe|MoveType):/gi, 'Moveset:');
}

function getMatchupOverride(poke, boss) {
  const bossId = typeof boss === 'string' ? boss : boss?.id;
  if (!bossId || !poke || typeof poke !== 'object') return null;
  return poke.matchupOverrides?.[bossId] || null;
}

const tierPriority = { green: 0, otimo: 1, yellow: 2, red: 3, solo: 4, unknown: 5 };
const tierLabels = {
  green: 'Ideal',
  otimo: 'Muito bom',
  yellow: 'Bom',
  red: 'Aceitavel',
  solo: 'Ruim',
  unknown: 'Sem informacao'
};
const recommendationScoreTitle = 'ATK: mostra o moveset do pokemon contra a tipagem que o chefe recebe. DEF: considera o pior dano do moveset do boss contra o pokemon do jogador. Em chefes configurados para defesa, o ranking prioriza somente o DEF. So passivas dos pokemons recomendados entram na conta.';

function refreshTierLegendLabels() {
  const legendEntries = [
    ['tier-green', tierLabels.green],
    ['tier-otimo', tierLabels.otimo],
    ['tier-yellow', tierLabels.yellow],
    ['tier-red', tierLabels.red],
    ['tier-solo', tierLabels.solo],
    ['tier-unknown', tierLabels.unknown]
  ];

  document.querySelectorAll('.tier-legend').forEach((legend) => {
    legendEntries.forEach(([className, label]) => {
      const dot = legend.querySelector(`.${className}`);
      if (!dot) return;
      dot.setAttribute('aria-label', label);
      const textNode = dot.nextSibling;
      if (textNode && textNode.nodeType === Node.TEXT_NODE) {
        textNode.textContent = label;
      }
    });
  });
}

function extractRegisteredPassiveDescription(text) {
  if (typeof text !== 'string') return '';
  const parts = text.split(/Passiva:\s*/i);
  if (parts.length < 2) return '';
  return parts.slice(1).join(' ').replace(/\s+/g, ' ').trim();
}

function splitPassiveDescriptionSegments(description) {
  const normalizedDescription = typeof description === 'string'
    ? description.replace(/\s+/g, ' ').trim()
    : '';

  if (!normalizedDescription) return [];

  const semicolonSegments = normalizedDescription
    .split(/\s*;\s*/)
    .map((segment) => segment.trim())
    .filter(Boolean);
  if (semicolonSegments.length > 1) {
    return semicolonSegments;
  }

  const sentenceSegments = normalizedDescription
    .match(/[^.!?]+[.!?]?/g)
    ?.map((segment) => segment.trim())
    .filter(Boolean) || [];

  return sentenceSegments.length ? sentenceSegments : [normalizedDescription];
}

function buildRecommendationPassiveItems(passiveName, passiveDescription, fallbackText) {
  const passiveNames = typeof passiveName === 'string'
    ? passiveName
      .split(/\s*\+\s*/)
      .map((entry) => entry.trim())
      .filter(Boolean)
    : [];
  const descriptionSegments = splitPassiveDescriptionSegments(passiveDescription);

  if (passiveNames.length > 1 && descriptionSegments.length === passiveNames.length) {
    return passiveNames.map((name, index) => `${name}: ${descriptionSegments[index]}`);
  }

  const normalizedFallback = typeof fallbackText === 'string' ? fallbackText.trim() : '';
  return normalizedFallback ? [normalizedFallback] : [];
}

function getRecommendationPassiveInfo(poke) {
  if (!poke || typeof poke !== 'object') return null;

  const passiveName = typeof poke.passiveName === 'string' && poke.passiveName.trim()
    ? poke.passiveName.trim()
    : '';
  const directPassiveDescription = typeof poke.passiveDescription === 'string' && poke.passiveDescription.trim()
    ? poke.passiveDescription.trim()
    : '';

  const passiveDescription = directPassiveDescription || [
    poke.passiveText,
    poke.description,
    poke.note
  ]
    .map((entry) => extractRegisteredPassiveDescription(entry))
    .find(Boolean) || '';

  if (!passiveDescription) return null;

  const normalizedDescription = passiveDescription.replace(/\s+/g, ' ').trim();
  const text = passiveName && !normalizedDescription.toLowerCase().startsWith(`${passiveName.toLowerCase()}:`)
    ? `${passiveName}: ${normalizedDescription}`
    : normalizedDescription;
  const items = buildRecommendationPassiveItems(passiveName, normalizedDescription, text);

  return {
    name: passiveName,
    description: normalizedDescription,
    text,
    items
  };
}

const passiveTooltipTriggerSelector = '.passive-tooltip-trigger, .boss-role-card__consumable-trigger[data-tooltip-items]';
const passiveTooltipId = 'passive-tooltip-surface';
const passiveTooltipTapModeQuery = typeof window !== 'undefined' && typeof window.matchMedia === 'function'
  ? window.matchMedia('(hover: none) and (pointer: coarse)')
  : null;
let passiveTooltipSurface = null;
let passiveTooltipContent = null;
let activePassiveTooltipTrigger = null;
let passiveTooltipPinned = false;
let passiveTooltipHideTimer = null;
let passiveTooltipSystemInitialized = false;

function isPassiveTooltipTapMode() {
  return Boolean(passiveTooltipTapModeQuery?.matches);
}

function clearPassiveTooltipHideTimer() {
  if (!passiveTooltipHideTimer) return;
  clearTimeout(passiveTooltipHideTimer);
  passiveTooltipHideTimer = null;
}

function ensurePassiveTooltipSurface() {
  if (passiveTooltipSurface && passiveTooltipContent && passiveTooltipSurface.isConnected) {
    return passiveTooltipSurface;
  }
  if (!document?.body) return null;

  const tooltip = document.createElement('div');
  tooltip.className = 'passive-tooltip-surface';
  tooltip.id = passiveTooltipId;
  tooltip.setAttribute('role', 'tooltip');
  tooltip.hidden = true;
  tooltip.dataset.open = 'false';
  tooltip.dataset.placement = 'top';

  const content = document.createElement('div');
  content.className = 'passive-tooltip-content';
  tooltip.appendChild(content);

  document.body.appendChild(tooltip);

  passiveTooltipSurface = tooltip;
  passiveTooltipContent = content;
  return passiveTooltipSurface;
}

function getPassiveTooltipTrigger(target) {
  if (!target || typeof target.closest !== 'function') return null;
  return target.closest(passiveTooltipTriggerSelector);
}

function getPassiveTooltipItems(trigger) {
  const rawItems = trigger?.dataset?.passiveTooltipItems || trigger?.dataset?.tooltipItems;
  if (!rawItems) return [];

  try {
    const parsed = JSON.parse(rawItems);
    return Array.isArray(parsed)
      ? parsed.map((item) => String(item || '').trim()).filter(Boolean)
      : [];
  } catch (error) {
    return [];
  }
}

function renderPassiveTooltipItems(items = []) {
  const tooltip = ensurePassiveTooltipSurface();
  if (!tooltip || !passiveTooltipContent) return;

  passiveTooltipContent.innerHTML = '';

  const list = document.createElement('div');
  list.className = 'passive-tooltip-list';

  items.forEach((item) => {
    const row = document.createElement('div');
    row.className = 'passive-tooltip-item';
    row.textContent = item;
    list.appendChild(row);
  });

  passiveTooltipContent.appendChild(list);
}

function positionPassiveTooltip(trigger) {
  const tooltip = ensurePassiveTooltipSurface();
  if (!tooltip || !trigger?.isConnected) return;

  tooltip.style.maxWidth = `${Math.min(320, Math.max(220, window.innerWidth - 24))}px`;
  tooltip.hidden = false;
  tooltip.style.visibility = 'hidden';

  const triggerRect = trigger.getBoundingClientRect();
  const tooltipRect = tooltip.getBoundingClientRect();
  const viewportMargin = 12;
  const gap = 10;
  const fitsAbove = triggerRect.top >= tooltipRect.height + gap + viewportMargin;
  const placement = fitsAbove ? 'top' : 'bottom';

  let left = triggerRect.left + (triggerRect.width / 2) - (tooltipRect.width / 2);
  left = Math.min(Math.max(left, viewportMargin), window.innerWidth - tooltipRect.width - viewportMargin);

  let top = placement === 'top'
    ? triggerRect.top - tooltipRect.height - gap
    : triggerRect.bottom + gap;
  top = Math.min(Math.max(top, viewportMargin), window.innerHeight - tooltipRect.height - viewportMargin);

  const arrowLeft = Math.min(
    Math.max(triggerRect.left + (triggerRect.width / 2) - left, 18),
    Math.max(tooltipRect.width - 18, 18)
  );

  tooltip.dataset.placement = placement;
  tooltip.style.left = `${Math.round(left)}px`;
  tooltip.style.top = `${Math.round(top)}px`;
  tooltip.style.setProperty('--passive-tooltip-arrow-left', `${Math.round(arrowLeft)}px`);
  tooltip.style.visibility = '';
}

function showPassiveTooltip(trigger, options = {}) {
  const tooltip = ensurePassiveTooltipSurface();
  if (!tooltip || !trigger) return;

  clearPassiveTooltipHideTimer();

  if (activePassiveTooltipTrigger && activePassiveTooltipTrigger !== trigger) {
    activePassiveTooltipTrigger.setAttribute('aria-expanded', 'false');
    activePassiveTooltipTrigger.removeAttribute('aria-describedby');
  }

  activePassiveTooltipTrigger = trigger;
  passiveTooltipPinned = Boolean(options.pinned);

  const items = getPassiveTooltipItems(trigger);
  if (!items.length) {
    hidePassiveTooltip({ immediate: true });
    return;
  }

  renderPassiveTooltipItems(items);
  trigger.setAttribute('aria-expanded', 'true');
  trigger.setAttribute('aria-describedby', passiveTooltipId);
  positionPassiveTooltip(trigger);
  tooltip.hidden = false;

  requestAnimationFrame(() => {
    if (activePassiveTooltipTrigger !== trigger) return;
    tooltip.dataset.open = 'true';
  });
}

function hidePassiveTooltip(options = {}) {
  const { immediate = false } = options;
  const tooltip = passiveTooltipSurface;
  if (!tooltip) return;

  clearPassiveTooltipHideTimer();

  if (activePassiveTooltipTrigger) {
    activePassiveTooltipTrigger.setAttribute('aria-expanded', 'false');
    activePassiveTooltipTrigger.removeAttribute('aria-describedby');
  }

  activePassiveTooltipTrigger = null;
  passiveTooltipPinned = false;
  tooltip.dataset.open = 'false';

  if (immediate) {
    tooltip.hidden = true;
    tooltip.style.visibility = '';
    return;
  }

  passiveTooltipHideTimer = setTimeout(() => {
    if (activePassiveTooltipTrigger) return;
    tooltip.hidden = true;
    tooltip.style.visibility = '';
  }, 180);
}

function repositionActivePassiveTooltip() {
  if (!activePassiveTooltipTrigger) return;
  if (!activePassiveTooltipTrigger.isConnected) {
    hidePassiveTooltip({ immediate: true });
    return;
  }

  positionPassiveTooltip(activePassiveTooltipTrigger);
}

function syncPassiveTooltipHoverState(target) {
  if (isPassiveTooltipTapMode() || passiveTooltipPinned || !activePassiveTooltipTrigger) return;

  const hoveredTrigger = getPassiveTooltipTrigger(target);
  if (hoveredTrigger === activePassiveTooltipTrigger) {
    clearPassiveTooltipHideTimer();
    return;
  }

  hidePassiveTooltip();
}

function createPassiveTooltipTrigger(passiveInfo, variant = '') {
  if (!passiveInfo?.text) return null;

  const trigger = document.createElement('button');
  trigger.type = 'button';
  trigger.className = `passive-tooltip-trigger${variant ? ` passive-tooltip-trigger--${variant}` : ''}`;
  trigger.dataset.passiveTooltipItems = JSON.stringify(passiveInfo.items || [passiveInfo.text]);
  trigger.setAttribute('aria-label', passiveInfo.items?.length > 1 ? 'Ver passivas' : 'Ver passiva');
  trigger.setAttribute('aria-expanded', 'false');

  const icon = document.createElement('span');
  icon.className = 'passive-tooltip-trigger-icon';
  icon.setAttribute('aria-hidden', 'true');
  icon.textContent = 'i';

  const label = document.createElement('span');
  label.className = 'passive-tooltip-trigger-label';
  label.textContent = 'Passiva(s)';

  trigger.append(icon, label);
  return trigger;
}

function initPassiveTooltipSystem() {
  if (passiveTooltipSystemInitialized) return;
  passiveTooltipSystemInitialized = true;

  document.addEventListener('pointerover', (event) => {
    if (isPassiveTooltipTapMode()) return;

    const trigger = getPassiveTooltipTrigger(event.target);
    if (!trigger) return;

    const previousTrigger = getPassiveTooltipTrigger(event.relatedTarget);
    if (previousTrigger === trigger) return;
    showPassiveTooltip(trigger);
  });

  document.addEventListener('pointerout', (event) => {
    if (isPassiveTooltipTapMode() || passiveTooltipPinned) return;

    const trigger = getPassiveTooltipTrigger(event.target);
    if (!trigger || activePassiveTooltipTrigger !== trigger) return;

    const nextTrigger = getPassiveTooltipTrigger(event.relatedTarget);
    if (nextTrigger === trigger) return;
    hidePassiveTooltip();
  });

  document.addEventListener('pointermove', (event) => {
    syncPassiveTooltipHoverState(event.target);
  }, { passive: true });

  document.addEventListener('pointercancel', () => {
    if (passiveTooltipPinned) return;
    hidePassiveTooltip({ immediate: true });
  });

  document.addEventListener('focusin', (event) => {
    const trigger = getPassiveTooltipTrigger(event.target);
    if (!trigger) return;
    showPassiveTooltip(trigger, { pinned: false });
  });

  document.addEventListener('focusout', (event) => {
    if (passiveTooltipPinned) return;

    const trigger = getPassiveTooltipTrigger(event.target);
    if (!trigger || activePassiveTooltipTrigger !== trigger) return;

    const nextTrigger = getPassiveTooltipTrigger(event.relatedTarget);
    if (nextTrigger === trigger) return;
    hidePassiveTooltip();
  });

  document.addEventListener('click', (event) => {
    const trigger = getPassiveTooltipTrigger(event.target);

    if (trigger) {
      if (isPassiveTooltipTapMode() || event.detail === 0) {
        event.preventDefault();

        if (activePassiveTooltipTrigger === trigger && passiveTooltipPinned) {
          hidePassiveTooltip({ immediate: true });
        } else {
          showPassiveTooltip(trigger, { pinned: true });
        }
      }
      return;
    }

    if (passiveTooltipPinned) {
      hidePassiveTooltip({ immediate: true });
    }
  });

  window.addEventListener('resize', repositionActivePassiveTooltip, { passive: true });
  window.addEventListener('scroll', repositionActivePassiveTooltip, true);
  window.addEventListener('blur', () => {
    if (passiveTooltipPinned) return;
    hidePassiveTooltip({ immediate: true });
  });
}

function getRecommendationExtraDescription(description) {
  if (typeof description !== 'string') return '';
  return normalizeMoveTypeLabel(description)
    .replace(/^\s*(?:Tipo move|MoveType):\s*[^.]+\.?\s*/i, '')
    .replace(/\s*Passiva:\s*.+$/i, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function getRecommendationGroupBossRef(boss, group = {}) {
  return {
    id: group.bossId || boss.id,
    name: group.title || boss.name,
    types: Array.isArray(group.bossTypes) && group.bossTypes.length ? group.bossTypes : (boss.types || []),
    moveType: group.moveType || getBossMoveTypes(boss),
    effectiveness: mergeBossEffectivenessConfig(boss?.effectiveness, group?.effectiveness)
  };
}

function resolveBossClanKey(boss, clanData) {
  return Object.entries(boss?.clans || {}).find(([, candidate]) => candidate === clanData)?.[0] || '';
}

function getRecommendationGroupKey(boss, group = {}) {
  return `${String(group?.bossId || boss?.id || '').trim().toLowerCase()}::${getRecommendationNameKey(group?.title || boss?.name || '')}`;
}

function collectRawRecommendationPicksForBoss(boss) {
  const picks = [];

  Object.values(boss?.clans || {}).forEach((clanData) => {
    if (Array.isArray(clanData?.recommended)) {
      picks.push(...clanData.recommended);
    }

    if (Array.isArray(clanData?.recommendationGroups)) {
      clanData.recommendationGroups.forEach((group) => {
        picks.push(...(group?.recommended || []));
      });
    }

    if (clanData?.roles) {
      roleboardRoleOrder.forEach((roleKey) => {
        picks.push(...(clanData.roles?.[roleKey] || []));
      });
    }
  });

  return picks;
}

function getFixedRecommendationRolePicks(boss, clanKey, roleKey) {
  const normalizedClanKey = normalizePlannerClanKey(clanKey);
  const normalizedRoleKey = String(roleKey || '').trim().toLowerCase();
  if (!boss || !normalizedClanKey || !roleboardRoleOrder.includes(normalizedRoleKey)) return [];

  return dedupeRecommendedPicksByName(
    collectRawRecommendationPicksForBoss(boss).filter((pick) => {
      const registryEntry = getFixedRecommendationEntry(pick);
      if (!registryEntry) {
        warnRecommendationWithoutRegistry(boss, pick);
        return false;
      }

      applyFixedRecommendationMetadata(pick, registryEntry);
      return registryEntry.clan === normalizedClanKey && registryEntry.role === normalizedRoleKey;
    })
  );
}

function getFixedRecommendationGroupsForClan(boss, clanKey) {
  const normalizedClanKey = normalizePlannerClanKey(clanKey);
  if (!boss || !normalizedClanKey) return [];

  const groupMap = new Map();

  Object.values(boss?.clans || {}).forEach((clanData) => {
    (clanData?.recommendationGroups || []).forEach((group) => {
      const groupKey = getRecommendationGroupKey(boss, group);
      if (groupMap.has(groupKey)) return;

      groupMap.set(groupKey, {
        groupKey,
        bossImage: group.bossImage || (Array.isArray(boss.bosses)
          ? boss.bosses.find((entry) => entry.name === (group.title || boss.name))?.image || boss.image
          : boss.image),
        title: group.title || boss.name,
        boss: getRecommendationGroupBossRef(boss, group)
      });
    });
  });

  if (!groupMap.size) {
    groupMap.set(getRecommendationGroupKey(boss), {
      groupKey: getRecommendationGroupKey(boss),
      bossImage: boss.image,
      title: boss.name,
      boss
    });
  }

  return Array.from(groupMap.values()).map((groupMeta) => {
    const rawPicks = [];

    if (groupMap.size > 1) {
      Object.values(boss?.clans || {}).forEach((clanData) => {
        (clanData?.recommendationGroups || []).forEach((group) => {
          if (getRecommendationGroupKey(boss, group) !== groupMeta.groupKey) return;
          rawPicks.push(...(group?.recommended || []));
        });
      });
    } else {
      Object.values(boss?.clans || {}).forEach((clanData) => {
        rawPicks.push(...(clanData?.recommended || []));
      });
    }

    const recommended = dedupeRecommendedPicksByName(
      rawPicks.filter((pick) => {
        const registryEntry = getFixedRecommendationEntry(pick);
        if (!registryEntry) {
          warnRecommendationWithoutRegistry(boss, pick);
          return false;
        }

        applyFixedRecommendationMetadata(pick, registryEntry);
        return registryEntry.clan === normalizedClanKey && registryEntry.role === 'dps';
      })
    );

    return {
      bossImage: groupMeta.bossImage,
      title: groupMeta.title,
      boss: groupMeta.boss,
      recommended
    };
  });
}

function getRecommendationGroupsForClan(boss, clanData) {
  if (!boss || !clanData) return [];

  const clanKey = resolveBossClanKey(boss, clanData);
  if (!clanKey) return [];

  if (clanData?.roles) {
    return [{
      bossImage: boss.image,
      title: boss.name,
      boss,
      recommended: roleboardRoleOrder.flatMap((roleKey) => getFixedRecommendationRolePicks(boss, clanKey, roleKey))
    }];
  }

  return getFixedRecommendationGroupsForClan(boss, clanKey);
}

function getAllRecommendedForClan(boss, clanData) {
  const clanKey = resolveBossClanKey(boss, clanData);
  let picks;
  if (clanData?.roles && clanKey) {
    picks = roleboardRoleOrder.flatMap((roleKey) => getFixedRecommendationRolePicks(boss, clanKey, roleKey));
  } else {
    picks = getRecommendationGroupsForClan(boss, clanData).flatMap((group) => group.recommended || []);
  }

  // Se o boss definir filterSolo, ranqueamos e removemos picks com tier 'solo'
  if (boss?.filterSolo) {
    const ranked = rankRecommendedForBoss(boss, picks || []);
    return dedupeRecommendedPicksByName((ranked || []).filter((p) => (String(p?.tier || '').toLowerCase() !== 'solo')));
  }

  return dedupeRecommendedPicksByName(picks || []);
}

function pickBetterTier(currentTier, nextTier) {
  if (!currentTier) return nextTier || 'unknown';
  if (!nextTier) return currentTier;
  return (tierPriority[nextTier] ?? tierPriority.unknown) < (tierPriority[currentTier] ?? tierPriority.unknown) ? nextTier : currentTier;
}

function getBossEffectivenessConfig(boss) {
  return boss?.effectiveness && typeof boss.effectiveness === 'object'
    ? boss.effectiveness
    : {};
}

function getBossOffenseTargetTypes(boss) {
  const config = getBossEffectivenessConfig(boss);
  if (Array.isArray(config.offenseTargetTypes) && config.offenseTargetTypes.length) {
    return mergeLowercaseUniqueValues(config.offenseTargetTypes);
  }

  const bossTypes = mergeLowercaseUniqueValues(Array.isArray(boss?.types) ? boss.types : []);
  const moveTypes = getBossMoveTypes(boss);

  if (config.offenseMode === 'neutral') {
    return [];
  }

  if (config.offenseMode === 'move-only') {
    return moveTypes;
  }

  if (config.offenseMode === 'types') {
    return bossTypes;
  }

  return bossTypes.length ? bossTypes : moveTypes;
}

function getBossAttackTypes(boss) {
  const config = getBossEffectivenessConfig(boss);
  if (Array.isArray(config.attackTypes) && config.attackTypes.length) {
    return mergeLowercaseUniqueValues(config.attackTypes);
  }

  const bossTypes = mergeLowercaseUniqueValues(Array.isArray(boss?.types) ? boss.types : []);
  const moveTypes = getBossMoveTypes(boss);

  if (config.attackMode === 'neutral') {
    return [];
  }

  if (config.attackMode === 'types-only' || config.attackMode === 'types') {
    return bossTypes;
  }

  if (config.attackMode === 'all') {
    return mergeLowercaseUniqueValues(bossTypes, moveTypes);
  }

  return moveTypes.length ? moveTypes : bossTypes;
}

function getBossRecommendationRankMode(boss) {
  const config = getBossEffectivenessConfig(boss);
  return typeof config.rankMode === 'string' && config.rankMode.trim()
    ? config.rankMode.trim().toLowerCase()
    : 'standard';
}

function classifyRecommendationTier(offense, worstDefense) {
  if (offense >= 2) {
    // Super efetivo: mapeamento específico solicitado
    // - DEF <= 0.5 => Ideal (green)
    // - DEF <= 0.75 => Muito bom (otimo)
    // - DEF <= 1 => Bom (yellow)
    // - DEF <= 2 => Aceitavel (red)
    if (worstDefense <= 0.5) return 'green';
    if (worstDefense <= 0.75) return 'otimo';
    if (worstDefense <= 1) return 'yellow';
    if (worstDefense <= 2) return 'red';
    return 'solo';
  }

  if (offense >= 1.5) {
    // Efetivo
    if (worstDefense <= 0.5) return 'otimo';
    if (worstDefense <= 0.75) return 'yellow';
    if (worstDefense <= 1) return 'red';
    return 'solo';
  }

  if (offense >= 1) {
    // Neutro
    if (worstDefense <= 0.75) return 'yellow';
    if (worstDefense <= 1) return 'red';
    return 'solo';
  }

  if (offense > 0 && worstDefense <= 0.75) {
    return 'red';
  }

  return 'solo';
}

function classifyDefenseOnlyRecommendationTier(worstDefense) {
  if (worstDefense <= 0.5) return 'green';
  if (worstDefense <= 0.75) return 'otimo';
  if (worstDefense <= 1) return 'yellow';
  if (worstDefense <= 2) return 'red';
  return 'solo';
}

function scoreRecommendationForBoss(bossOrTypes, poke) {
  const boss = Array.isArray(bossOrTypes) ? { types: bossOrTypes } : (bossOrTypes || {});
  applyImplicitRecommendationEnhancements(poke);
  const bossMoveTypes = getBossMoveTypes(boss);
  // Para DEF, o boss passa a ser lido pelo moveset sempre que ele existir.
  // Os tipos do chefe so entram quando um override explicito pedir isso
  // ou quando o dataset nao informar um moveset dedicado.
  const bossAttackTypes = getBossAttackTypes(boss);
  const offenseTargetTypes = getBossOffenseTargetTypes(boss);
  const rankMode = getBossRecommendationRankMode(boss);
  const moveType = parseMoveType(poke) || (poke.types && poke.types[0]);
  const matchupOverride = getMatchupOverride(poke, boss);
  const offenseRaw = typeof matchupOverride?.offense === 'number'
    ? matchupOverride.offense
    : (offenseTargetTypes.length
      ? getTypeMultiplier(moveType, offenseTargetTypes, [], poke.passiveSuperEffectiveTypes)
      : 1);

  // Normalizamos o valor de ATK para a nova escala (1.0 / 1.5 / 2.0) e garantimos teto de 2.0
  const offense = normalizeOffenseValue(offenseRaw);

  // Regra especial: quando estivermos avaliando recomendações no contexto de um "speedster"
  // (objetos construídos por `getRecommendedSpeedsters` possuem `bossEntries`), e o Pokémon
  // sendo avaliado for o próprio speedster, promover ATK 1.5 -> 2.0.
  try {
    const isSpeedsterContext = Boolean(boss && Array.isArray(boss.bossEntries));
    const nameLower = String(poke.name || '').toLowerCase();
    const isSamePokemon = (isSpeedsterContext && String(boss.name || '').toLowerCase() === nameLower)
      || (activeSpeedsterContextName && String(activeSpeedsterContextName).toLowerCase() === nameLower);

    // Detectar se o próprio Pokémon avaliado é um speedster (presente no mapa de speedsters)
    if (knownSpeedsterNames === null) refreshKnownSpeedsterNames();
    const isPokeSpeedster = (Array.isArray(poke?.bossEntries) && poke.bossEntries.length) || knownSpeedsterNames.has(nameLower);

    // Promover 1.5 -> 2.0 quando o Pokémon for um speedster ou estivermos no contexto do próprio speedster
    if ((isSamePokemon || isPokeSpeedster) && offense === 1.5) {
      // Aplicar promoção antes de qualquer clamp final/score
      // (respeita o teto global de 2.0)
      // Usamos uma cópia local para evitar modificar offenseRaw
      // e garantir que o valor apresentado e usado em scoring seja 2.0
      // quando o speedster é efetivo.
      // eslint-disable-next-line no-param-reassign
      // (não queremos reatribuir poke._offense aqui ainda porque _offense
      // é atribuído mais abaixo; apenas ajustamos a variável usada.)
      // eslint-disable-next-line prefer-const
      var _promotedOffense = 2.0;
      // substituir o valor de `offense` usado a seguir nas pontuações
      // (reinserimos no escopo por nome 'offense' para continuidade)
      // nota: não usamos `let offense = ...` para manter compatibilidade
      // com código existente; em JS, reassigning const isn't allowed, então
      // iremos shadowar via novo bloco abaixo ao calcular offenseScore.
    }
  } catch (e) {
    /* ignore */
  }

  const pokeTypes = Array.isArray(poke.types) ? poke.types : [];
  const attackTypesList = bossAttackTypes.filter(Boolean);

  // Collect both raw and normalized multipliers so we can apply rules that
  // consider the combination of boss attack types (e.g. if all attack types
  // are resisted, treat as super inafetivo = 0.5).
  const defenseMeta = attackTypesList.map((attackType) => {
    const customMultiplier = matchupOverride?.defenseByBossType?.[attackType];
    if (typeof customMultiplier === 'number') {
      const raw = customMultiplier;
      return { attackType, raw, normalized: normalizeDefenseValue(raw, true), explicit: true };
    }
    const passiveMultiplier = poke.defenseByBossType?.[attackType];
    if (typeof passiveMultiplier === 'number') {
      const raw = passiveMultiplier;
      return { attackType, raw, normalized: normalizeDefenseValue(raw, true), explicit: true };
    }
    const raw = getTypeMultiplier(attackType, pokeTypes, poke.immunities);
    return { attackType, raw, normalized: normalizeDefenseValue(raw, false), explicit: false };
  });

  const defenseMultipliers = defenseMeta.map((m) => m.normalized);
  const rawMultipliers = defenseMeta.map((m) => m.raw);

  let worstDefense = defenseMultipliers.length ? Math.max(...defenseMultipliers) : 1;
  const bestDefense = defenseMultipliers.length ? Math.min(...defenseMultipliers) : 1;

  // If the boss has explicit move types, prioritize them: if any move type
  // results in immunity or strong mitigation (normalized <= 0.5), treat the
  // overall interaction as super-inafetivo (0.5). This ensures Levitate/ground
  // cases (e.g., Bronzong vs Mega Tyranitar) are scored correctly.
  if (Array.isArray(bossMoveTypes) && bossMoveTypes.length) {
    const moveMeta = defenseMeta.filter((m) => bossMoveTypes.includes(m.attackType));
    if (moveMeta.length && moveMeta.some((m) => typeof m.normalized === 'number' && m.normalized <= 0.5)) {
      worstDefense = 0.5;
    }
  }

  // If every boss attack type produces a resistance (normalized <= 0.75),
  // consider the overall interaction as "super inafetivo" (0.5). This handles
  // cases like Mega Skarmory (steel + flying) where a Pokemon resists both
  // attack types and should therefore be treated as more strongly resisted.
  if (defenseMultipliers.length > 1 && defenseMultipliers.every((v) => typeof v === 'number' && v <= 0.75)) {
    worstDefense = 0.5;
  }

  // Use promoted offense value for scoring when set (speedster case)
  const effectiveOffenseForScoring = (typeof _promotedOffense === 'number' ? _promotedOffense : offense);

  const offenseScore =
    effectiveOffenseForScoring === 0 ? 0 :
    effectiveOffenseForScoring >= 2 ? 1 :
    effectiveOffenseForScoring >= 1.5 ? 0.8 :
    effectiveOffenseForScoring >= 1 ? 0.48 :
    0.18;

  const defenseScore =
    bestDefense <= 0.5 ? 1 :
    worstDefense <= 0.5 ? 0.96 :
    worstDefense <= 0.75 ? 0.9 :
    worstDefense <= 1 ? 0.68 :
    worstDefense <= 2 ? 0.18 :
    0.03;

  const combined = rankMode === 'defense-only'
    ? ((worstDefense <= 0.5 ? 100 : 1 / worstDefense) + (bestDefense <= 0.5 ? 1 : 1 / (bestDefense * 10)))
    : ((offenseScore * 0.6) + (defenseScore * 0.4));
  const explicitTier = poke?.tierLocked && typeof poke?.tier === 'string'
    ? poke.tier.trim().toLowerCase()
    : '';
  const tier = explicitTier && Object.prototype.hasOwnProperty.call(tierPriority, explicitTier)
    ? explicitTier
    : (rankMode === 'defense-only'
      ? classifyDefenseOnlyRecommendationTier(worstDefense)
      : classifyRecommendationTier(effectiveOffenseForScoring, worstDefense));

  return {
    ...poke,
    _score: combined,
    // Reportar o valor promovido para o contexto speedster quando aplicável
    _offense: (typeof _promotedOffense === 'number' ? _promotedOffense : offense),
    _defenseWorst: worstDefense,
    _defenseBest: bestDefense,
    _moveType: moveType,
    tier,
  };
}

function rankRecommendedForBoss(bossOrTypes, recommendedList) {
  return recommendedList
    .map((poke) => scoreRecommendationForBoss(bossOrTypes, poke))
    .sort((a, b) => {
      const leftPriority = tierPriority[a.tier] ?? tierPriority.unknown;
      const rightPriority = tierPriority[b.tier] ?? tierPriority.unknown;
      if (leftPriority !== rightPriority) return leftPriority - rightPriority;
      if (b._score !== a._score) return b._score - a._score;
      return a.name.localeCompare(b.name);
    });
}

function synchronizeRecommendationTiers() {
  Object.values(bossCatalogs).forEach((catalog) => {
    (catalog.data || []).forEach((boss) => {
      Object.values(boss.clans || {}).forEach((clanData) => {
        const syncList = (bossRef, list) => {
          (list || []).forEach((poke, index, entries) => {
            if (poke?.tierLocked) return;
            const computed = scoreRecommendationForBoss(bossRef, poke);
            entries[index].tier = computed.tier;
          });
        };

        if (Array.isArray(clanData.recommended)) {
          syncList(boss, clanData.recommended);
        }

        if (Array.isArray(clanData.recommendationGroups)) {
          clanData.recommendationGroups.forEach((group) => {
            syncList(getRecommendationGroupBossRef(boss, group), group.recommended);
          });
        }

        if (clanData.roles) {
          roleboardRoleOrder.forEach((roleKey) => {
            syncList(boss, clanData.roles?.[roleKey]);
          });
        }
      });
    });
  });
}

function dedupeRecommendedPicksByName(picks = []) {
  const seen = new Set();

  return (picks || []).filter((poke) => {
    const nameKey = getRecommendationNameKey(poke);
    if (!nameKey || seen.has(nameKey)) return false;
    seen.add(nameKey);
    return true;
  });
}

function limitMew2RecommendationsToTierFloor(minimumTier = 'yellow') {
  const maximumPriority = tierPriority[minimumTier] ?? tierPriority.yellow;

  mew2Bosses.forEach((boss) => {
    Object.values(boss.clans || {}).forEach((clanData) => {
      if (!clanData?.roles) return;

      const rankedByRole = {};
      roleboardRoleOrder.forEach((roleKey) => {
        const source = Array.isArray(clanData.roles[roleKey]) ? clanData.roles[roleKey] : [];
        rankedByRole[roleKey] = dedupeRecommendedPicksByName(rankRecommendedForBoss(boss, source));
      });

      const usedNames = new Set();
      const nextRoles = {
        support: [],
        dps: [],
        tank: []
      };
      const roleSeedOrder = [...roleboardRoleOrder].sort((left, right) => {
        const leftPreferred = rankedByRole[left].filter((poke) => (tierPriority[poke?.tier] ?? tierPriority.unknown) <= maximumPriority).length;
        const rightPreferred = rankedByRole[right].filter((poke) => (tierPriority[poke?.tier] ?? tierPriority.unknown) <= maximumPriority).length;
        if (leftPreferred !== rightPreferred) return leftPreferred - rightPreferred;
        return roleboardRoleOrder.indexOf(left) - roleboardRoleOrder.indexOf(right);
      });

      const reserveCandidateForRole = (roleKey, allowAnyTier = false) => {
        const candidate = rankedByRole[roleKey].find((poke) => {
          const nameKey = getRecommendationNameKey(poke);
          if (!nameKey || usedNames.has(nameKey)) return false;
          const priority = tierPriority[poke?.tier] ?? tierPriority.unknown;
          return allowAnyTier || priority <= maximumPriority;
        });

        if (!candidate) return null;
        const nameKey = getRecommendationNameKey(candidate);
        if (nameKey) {
          usedNames.add(nameKey);
        }
        return candidate;
      };

      roleSeedOrder.forEach((roleKey) => {
        const preferredCandidate = reserveCandidateForRole(roleKey, false);
        const fallbackCandidate = preferredCandidate || reserveCandidateForRole(roleKey, true) || rankedByRole[roleKey][0] || null;
        if (!fallbackCandidate) return;

        const fallbackKey = getRecommendationNameKey(fallbackCandidate);
        if (fallbackKey) {
          usedNames.add(fallbackKey);
        }
        nextRoles[roleKey].push(cloneRolePickConfig(fallbackCandidate));
      });

      roleboardRoleOrder.forEach((roleKey) => {
        rankedByRole[roleKey].forEach((poke) => {
          const priority = tierPriority[poke?.tier] ?? tierPriority.unknown;
          if (priority > maximumPriority) return;

          const nameKey = getRecommendationNameKey(poke);
          if (!nameKey || usedNames.has(nameKey)) return;

          usedNames.add(nameKey);
          nextRoles[roleKey].push(cloneRolePickConfig(poke));
        });

        clanData.roles[roleKey] = nextRoles[roleKey];
      });
    });
  });
}

function ensureRolePickNames(list = [], requiredPicks = []) {
  const targetList = Array.isArray(list) ? list : [];
  const existingNames = new Set(targetList.map((poke) => getRecommendationNameKey(poke)));

  requiredPicks.forEach((pick) => {
    const nameKey = getRecommendationNameKey(pick);
    if (!nameKey || existingNames.has(nameKey)) return;
    existingNames.add(nameKey);
    targetList.push(cloneRolePickConfig(pick));
  });

  return targetList;
}

function ensureMew2BossRolePicks(bossId, clanKey, roleKey, picks = []) {
  const boss = mew2Bosses.find((entry) => entry.id === bossId);
  const roleList = boss?.clans?.[clanKey]?.roles?.[roleKey];
  if (!boss || !Array.isArray(roleList)) return;

  ensureRolePickNames(roleList, picks);
}

function createHeracrossPick() {
  return createRolePick('Heracross', ['bug', 'fighting'], 'fighting');
}

function addHeracrossIfCompatible(bossRef, picks = []) {
  if (!Array.isArray(picks)) return;

  const scored = scoreRecommendationForBoss(bossRef, createHeracrossPick());
  const priority = tierPriority[scored?.tier] ?? tierPriority.unknown;
  if (priority > tierPriority.yellow) return;
  if ((scored?._offense ?? 0) < 2) return;
  if ((scored?._defenseWorst ?? Infinity) > 2) return;

  ensureRolePickNames(picks, [scored]);
}

function injectHeracrossRecommendations() {
  Object.values(bossCatalogs).forEach((catalog) => {
    (catalog.data || []).forEach((boss) => {
      const valorClan = boss?.clans?.valor;
      if (!valorClan) return;

      if (Array.isArray(valorClan.recommended)) {
        addHeracrossIfCompatible(boss, valorClan.recommended);
      }

      if (Array.isArray(valorClan.recommendationGroups)) {
        valorClan.recommendationGroups.forEach((group) => {
          addHeracrossIfCompatible(getRecommendationGroupBossRef(boss, group), group.recommended);
        });
      }

      if (Array.isArray(valorClan.roles?.dps)) {
        addHeracrossIfCompatible(boss, valorClan.roles.dps);
      }
    });
  });
}

ensureMirroredRecommendationVariants();
injectHeracrossRecommendations();
normalizeAllBossRecommendationAssignments();
applyFixedRecommendationRegistryChecks();
hydrateRecommendationCatalog();
synchronizeRecommendationTiers();
limitMew2RecommendationsToTierFloor('yellow');
// Remover picks classificados como 'solo' ("Ruim") em chefes do Champion Path especificados
function removeRuimPicksFromChampionPath() {
  const targets = new Set(['mega-aerodactyl', 'mega-aggron', 'mega-salamence']);
  (championPathBosses || []).forEach((boss) => {
    if (!boss || !targets.has(boss.id)) return;
    Object.values(boss.clans || {}).forEach((clanData) => {
      if (!clanData || !clanData.roles) return;
      roleboardRoleOrder.forEach((roleKey) => {
        const list = Array.isArray(clanData.roles[roleKey]) ? clanData.roles[roleKey] : [];
        const filtered = list.filter((poke) => {
          try {
            const scored = scoreRecommendationForBoss(boss, poke);
            return String(scored?.tier || '').toLowerCase() !== 'solo';
          } catch (e) {
            return true;
          }
        });
        clanData.roles[roleKey] = filtered;
      });

      if (Array.isArray(clanData.recommended)) {
        clanData.recommended = clanData.recommended.filter((poke) => {
          try {
            const scored = scoreRecommendationForBoss(boss, poke);
            return String(scored?.tier || '').toLowerCase() !== 'solo';
          } catch (e) {
            return true;
          }
        });
      }

      if (Array.isArray(clanData.recommendationGroups)) {
        clanData.recommendationGroups.forEach((group) => {
          if (!Array.isArray(group.recommended)) return;
          group.recommended = group.recommended.filter((poke) => {
            try {
              const scored = scoreRecommendationForBoss(getRecommendationGroupBossRef(boss, group), poke);
              return String(scored?.tier || '').toLowerCase() !== 'solo';
            } catch (e) {
              return true;
            }
          });
        });
      }
    });
  });
}

removeRuimPicksFromChampionPath();
ensureMew2BossRolePicks('charizard', 'mystic', 'tank', [
  createRolePick('Shiny Bronzong', ['steel', 'psychic'], 'steel')
]);
refreshTierLegendLabels();

function getActiveBossCatalog() {
  return bossCatalogs[activeBossMode] || bossCatalogs.hoopa;
}

function getActiveBossesData() {
  return getActiveBossCatalog().data || [];
}

function formatTypeLabel(type) {
  return type ? type.charAt(0).toUpperCase() + type.slice(1) : '';
}

function getBossTypeIcons(types = []) {
  return (types || []).slice(0, 2).map((type) => {
    const icon = document.createElement('img');
    icon.className = 'type-icon';
    icon.src = iconBase + `${type}.png`;
    icon.alt = `${type} type`;
    icon.loading = 'lazy';
    icon.title = formatTypeLabel(type);
    return icon;
  });
}

function createHoopaPortalTickerElement() {
  const message = getHoopaPortalTickerMessage();
  if (!message) return null;

  const ticker = document.createElement('div');
  ticker.className = 'hoopa-portal-ticker';
  ticker.setAttribute('role', 'status');
  ticker.setAttribute('aria-label', message);

  const viewport = document.createElement('div');
  viewport.className = 'hoopa-portal-ticker__viewport';

  const track = document.createElement('div');
  track.className = 'hoopa-portal-ticker__track';

  const firstItem = document.createElement('span');
  firstItem.className = 'hoopa-portal-ticker__item';
  firstItem.textContent = message;

  const secondItem = document.createElement('span');
  secondItem.className = 'hoopa-portal-ticker__item';
  secondItem.textContent = message;
  secondItem.setAttribute('aria-hidden', 'true');

  track.append(firstItem, secondItem);
  viewport.appendChild(track);
  ticker.appendChild(viewport);

  const durationSeconds = Math.max(18, Math.min(42, Math.round(message.length * 0.34)));
  ticker.style.setProperty('--hoopa-ticker-duration', `${durationSeconds}s`);

  return ticker;
}

function renderBossModeIntro() {
  const titleEl = document.getElementById('bosses-mode-title');
  const introEl = document.getElementById('bosses-mode-intro');
  const modeButtons = document.querySelectorAll('.bosses-mode-btn');
  const searchPanel = document.querySelector('.speedster-search-panel');
  const shell = document.querySelector('.bosses-shell');
  const catalog = getActiveBossCatalog();

  if (titleEl) titleEl.textContent = catalog.label;

  if (introEl) {
    introEl.innerHTML = '';

    const introLines = Array.isArray(catalog.introLines) && catalog.introLines.length
      ? catalog.introLines
      : [catalog.summary];

    introLines
      .filter(Boolean)
      .forEach((line) => {
        const summary = document.createElement('p');
        summary.className = 'bosses-mode-summary';
        summary.textContent = line;
        introEl.appendChild(summary);
      });

    if (String(catalog?.id || '').toLowerCase() === 'hoopa') {
      const ticker = createHoopaPortalTickerElement();
      if (ticker) {
        introEl.appendChild(ticker);
      }
    }
  }

  // If viewing the Mewtwo tab, add a small "Tochas" action button into the intro area
  try {
    const existingTochasBtn = document.querySelector('.bosses-tochas-btn');
    if (catalog && String(catalog.id || '').toLowerCase() === 'mew2') {
      if (!existingTochasBtn && introEl) {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'speedster-modal-location-btn bosses-tochas-btn';
        btn.setAttribute('aria-label', 'Abrir Tochas');
        btn.textContent = 'Tochas';
        btn.style.marginTop = '0.5rem';
        btn.addEventListener('click', (ev) => {
          ev.preventDefault();
          openTochasInModal();
        });
        if (shell) {
          // ensure shell is a positioned container for absolute placement
          try { shell.style.position = shell.style.position || 'relative'; } catch (e) {}
          shell.appendChild(btn);
        } else {
          introEl.appendChild(btn);
        }
      }
    } else if (existingTochasBtn) {
      existingTochasBtn.remove();
    }
  } catch (e) {}

  if (shell) {
    shell.dataset.searchEnabled = catalog.searchEnabled ? 'true' : 'false';
  }

  if (searchPanel) {
    searchPanel.hidden = !catalog.searchEnabled;
  }

  modeButtons.forEach((button) => {
    const isActive = button.dataset.bossMode === activeBossMode;
    button.classList.toggle('is-active', isActive);
    button.setAttribute('aria-selected', isActive ? 'true' : 'false');
  });

  if (document.body) {
    document.body.dataset.bossMode = activeBossMode;
  }
}

function setBossMode(mode, options = {}) {
  const nextMode = normalizeBossMode(mode) || 'hoopa';
  activeBossMode = nextMode;
  if (nextMode !== 'planner') {
    clearPlannerUrlState();
  }
  if (options.syncUrl !== false) {
    syncStandaloneBossModeUrl(activeBossMode);
  }
  renderBossModeIntro();

  if (speedsterSearchInput) {
    speedsterSearchInput.value = '';
  }
  hideSearchResults();

  if (typeof window !== 'undefined' && typeof window.dispatchEvent === 'function') {
    window.dispatchEvent(new CustomEvent('bossmodechange', { detail: { mode: activeBossMode } }));
  }

  if (options.render === false) return;
  renderGrid();
}

window.setBossMode = setBossMode;

function createEmptyPlannerState() {
  return {
    sourceFilter: '',
    entries: []
  };
}

function normalizePlannerSourceFilter(value) {
  const normalized = String(value || '').trim().toLowerCase();
  return plannerContentOrder.includes(normalized) ? normalized : '';
}

function normalizePlannerClanKey(value) {
  const normalized = String(value || '').trim().toLowerCase();
  return plannerClanOrder.includes(normalized) ? normalized : '';
}

function getPlannerContentLabel(sourceKey) {
  return bossCatalogs[sourceKey]?.label || 'Bosses';
}

function buildPlannerBossIndex() {
  const list = [];
  const map = new Map();

  plannerContentOrder.forEach((sourceKey) => {
    const catalog = bossCatalogs[sourceKey];
    (catalog?.data || []).forEach((boss) => {
      const plannerBossId = `${sourceKey}:${boss.id}`;
      const entry = {
        id: plannerBossId,
        sourceKey,
        sourceLabel: catalog.label,
        bossId: boss.id,
        bossRef: boss,
        name: boss.name,
        image: boss.image || `${boss.id}.png`
      };

      list.push(entry);
      map.set(plannerBossId, entry);
    });
  });

  plannerStateCache.index = list;
  plannerStateCache.map = map;
  return plannerStateCache;
}

function getPlannerBossEntries() {
  if (!plannerStateCache.index || !plannerStateCache.map) {
    buildPlannerBossIndex();
  }
  return plannerStateCache.index || [];
}

function getPlannerBossById(plannerBossId) {
  if (!plannerStateCache.index || !plannerStateCache.map) {
    buildPlannerBossIndex();
  }
  return plannerStateCache.map.get(String(plannerBossId || '').trim()) || null;
}

function getPlannerPokemonKey(value) {
  if (typeof value === 'string') {
    return getRecommendationNameKey(value);
  }
  return getRecommendationNameKey(value?.name || value?.pokemonKey || value?.pokemon);
}

function getPlannerConsumableOptions(kind) {
  const source = kind === 'pokeblock'
    ? bossConsumableCatalog.pokeblocks
    : bossConsumableCatalog.rations;

  return Object.entries(source || {}).map(([key, entry]) => ({
    id: String(key || '').trim().toLowerCase(),
    ...cloneBossConsumableConfig(entry)
  }));
}

function normalizePlannerConsumableId(kind, value) {
  const normalized = String(value || '').trim().toLowerCase();
  if (!normalized) return '';
  return getPlannerConsumableOptions(kind).some((option) => option.id === normalized) ? normalized : '';
}

function getPlannerConsumableOptionById(kind, value) {
  const normalized = normalizePlannerConsumableId(kind, value);
  if (!normalized) return null;
  return getPlannerConsumableOptions(kind).find((option) => option.id === normalized) || null;
}

function getPlannerRoleSourceList(bossEntry, roleKey, clanKey) {
  const boss = bossEntry?.bossRef;
  if (!boss || !roleKey || !clanKey) return [];

  return getFixedRecommendationRolePicks(boss, clanKey, roleKey);
}

function getPlannerRoleRecommendations(bossEntry, roleKey, clanKey) {
  if (!bossEntry || !roleKey || !clanKey) return [];

  const cacheKey = `${bossEntry.id}|${roleKey}|${clanKey}`;
  if (plannerRecommendationCache.has(cacheKey)) {
    return plannerRecommendationCache.get(cacheKey);
  }

  const boss = bossEntry.bossRef;
  const rawList = getPlannerRoleSourceList(bossEntry, roleKey, clanKey);
  const ranked = dedupeRecommendedPicksByName(rankRecommendedForBoss(boss, rawList || []))
    .map((pick) => ({
      ...pick,
      plannerKey: getPlannerPokemonKey(pick)
    }));

  plannerRecommendationCache.set(cacheKey, ranked);
  return ranked;
}

function findPlannerRecommendationOwner(bossEntry, roleKey, pokemonKey) {
  const normalizedKey = getPlannerPokemonKey(pokemonKey);
  if (!bossEntry || !normalizedKey) return '';

  for (const clanKey of plannerClanOrder) {
    const matches = getPlannerRoleRecommendations(bossEntry, roleKey, clanKey);
    if (matches.some((pick) => pick.plannerKey === normalizedKey)) {
      return clanKey;
    }
  }

  return '';
}

function getPlannerDefaultClanForRole(bossEntry, roleKey) {
  const preferredClan = normalizePlannerClanKey(bossEntry?.bossRef?.clan);
  if (preferredClan && getPlannerRoleRecommendations(bossEntry, roleKey, preferredClan).length) {
    return preferredClan;
  }

  return plannerClanOrder.find((clanKey) => getPlannerRoleRecommendations(bossEntry, roleKey, clanKey).length) || 'instinct';
}

function createPlannerBossState(plannerBossId) {
  const bossEntry = getPlannerBossById(plannerBossId);
  const roles = {};

  roleboardRoleOrder.forEach((roleKey) => {
    roles[roleKey] = {
      clan: bossEntry ? getPlannerDefaultClanForRole(bossEntry, roleKey) : 'instinct',
      pokemonKey: ''
    };
  });

  return {
    bossId: plannerBossId,
    roles,
    pokeblock: '',
    ration: '',
    members: []
  };
}

function clonePlannerState(state = plannerState) {
  try {
    return JSON.parse(JSON.stringify(state || createEmptyPlannerState()));
  } catch {
    return createEmptyPlannerState();
  }
}

function sanitizePlannerState(rawState) {
  const nextState = createEmptyPlannerState();
  nextState.sourceFilter = normalizePlannerSourceFilter(rawState?.sourceFilter);

  const seenBosses = new Set();
  const rawEntries = Array.isArray(rawState?.entries)
    ? rawState.entries
    : Array.isArray(rawState?.bosses)
      ? rawState.bosses
      : [];

  rawEntries.forEach((rawEntry) => {
    const plannerBossId = String(rawEntry?.bossId || rawEntry?.id || '').trim();
    const bossEntry = getPlannerBossById(plannerBossId);
    if (!bossEntry || seenBosses.has(plannerBossId)) return;

    seenBosses.add(plannerBossId);
    const nextEntry = createPlannerBossState(plannerBossId);

    roleboardRoleOrder.forEach((roleKey) => {
      const rawRole = rawEntry?.roles?.[roleKey] || rawEntry?.[roleKey] || {};
      const requestedPokemonKey = getPlannerPokemonKey(
        rawRole?.pokemonKey || rawRole?.pokemon || rawRole?.name
      );
      const ownerClan = requestedPokemonKey
        ? findPlannerRecommendationOwner(bossEntry, roleKey, requestedPokemonKey)
        : '';
      const requestedClan = normalizePlannerClanKey(rawRole?.clan);
      const nextClan = ownerClan || requestedClan || nextEntry.roles[roleKey].clan;

      nextEntry.roles[roleKey].clan = nextClan;

      if (requestedPokemonKey) {
        const matches = getPlannerRoleRecommendations(bossEntry, roleKey, nextClan);
        if (matches.some((pick) => pick.plannerKey === requestedPokemonKey)) {
          nextEntry.roles[roleKey].pokemonKey = requestedPokemonKey;
        }
      }
    });

    nextEntry.pokeblock = normalizePlannerConsumableId(
      'pokeblock',
      rawEntry?.pokeblock || rawEntry?.items?.pokeblock
    );
    nextEntry.ration = normalizePlannerConsumableId(
      'ration',
      rawEntry?.ration || rawEntry?.items?.ration
    );

    // restore saved members (player selections) if present
    nextEntry.members = [];
    if (Array.isArray(rawEntry?.members)) {
      rawEntry.members.forEach((rawMember) => {
        const member = {
          id: String(rawMember?.id || Math.random().toString(36).slice(2)),
          roles: {},
          pokeblock: normalizePlannerConsumableId('pokeblock', rawMember?.pokeblock || rawMember?.items?.pokeblock || ''),
          ration: normalizePlannerConsumableId('ration', rawMember?.ration || rawMember?.items?.ration || '')
        };

        roleboardRoleOrder.forEach((roleKey) => {
          const requested = rawMember?.roles?.[roleKey] || rawMember?.[roleKey] || '';
          member.roles[roleKey] = getPlannerPokemonKey(requested) || '';
        });

        nextEntry.members.push(member);
      });
    }

    nextState.entries.push(nextEntry);
  });

  return nextState;
}

// Compact planner state for URL to reduce payload size.
function compactPlannerStateForUrl(state) {
  const payload = sanitizePlannerState(state);
  const s = normalizePlannerSourceFilter(payload.sourceFilter) || '';
  const entries = (Array.isArray(payload.entries) ? payload.entries : []).map((entry) => {
    const bossId = String(entry.bossId || '').trim();
    const rolesClans = roleboardRoleOrder.map((rk) => normalizePlannerClanKey(entry.roles?.[rk]?.clan || ''));
    const rolesPks = roleboardRoleOrder.map((rk) => String(entry.roles?.[rk]?.pokemonKey || ''));
    const pokeblock = normalizePlannerConsumableId('pokeblock', entry.pokeblock || '');
    const ration = normalizePlannerConsumableId('ration', entry.ration || '');
    const members = (Array.isArray(entry.members) ? entry.members : []).map((m) => {
      const id = String(m.id || '');
      const memberRoles = roleboardRoleOrder.map((rk) => String(m.roles?.[rk] || ''));
      const mPokeblock = normalizePlannerConsumableId('pokeblock', m.pokeblock || '');
      const mRation = normalizePlannerConsumableId('ration', m.ration || '');
      return [id, memberRoles, mPokeblock || '', mRation || ''];
    });
    return [bossId, rolesClans, rolesPks, pokeblock || '', ration || '', members];
  });
  return { s, e: entries };
}

function expandPlannerStateFromUrl(compact) {
  const next = createEmptyPlannerState();
  next.sourceFilter = normalizePlannerSourceFilter(compact?.s || '');
  (compact?.e || []).forEach((entryArr) => {
    const bossId = String(entryArr[0] || '').trim();
    if (!bossId) return;
    const rolesClans = Array.isArray(entryArr[1]) ? entryArr[1] : [];
    const rolesPks = Array.isArray(entryArr[2]) ? entryArr[2] : [];
    const pokeblock = normalizePlannerConsumableId('pokeblock', entryArr[3] || '');
    const ration = normalizePlannerConsumableId('ration', entryArr[4] || '');
    const membersArr = Array.isArray(entryArr[5]) ? entryArr[5] : [];

    const entry = createPlannerBossState(bossId);
    roleboardRoleOrder.forEach((rk, idx) => {
      entry.roles[rk].clan = normalizePlannerClanKey(rolesClans[idx] || entry.roles[rk].clan);
      entry.roles[rk].pokemonKey = getPlannerPokemonKey(rolesPks[idx] || '') || '';
    });
    entry.pokeblock = pokeblock;
    entry.ration = ration;
    entry.members = membersArr.map((m) => {
      const id = String(m[0] || Math.random().toString(36).slice(2));
      const memberRoles = Array.isArray(m[1]) ? m[1] : [];
      const mpb = normalizePlannerConsumableId('pokeblock', m[2] || '');
      const mr = normalizePlannerConsumableId('ration', m[3] || '');
      const member = { id, roles: {}, pokeblock: mpb, ration: mr };
      roleboardRoleOrder.forEach((rk, idx2) => {
        member.roles[rk] = getPlannerPokemonKey(memberRoles[idx2] || '') || '';
      });
      return member;
    });

    next.entries.push(entry);
  });
  return sanitizePlannerState(next);
}

function encodePlannerStateToParam(state) {
  const payload = sanitizePlannerState(state);
  const compact = compactPlannerStateForUrl(payload);
  const json = JSON.stringify(compact);

  // try LZ-String first (existing fast, URL-safe encoder)
  let lz = '';
  try {
    if (typeof LZString === 'object' && typeof LZString.compressToEncodedURIComponent === 'function') {
      lz = LZString.compressToEncodedURIComponent(json) || '';
    }
  } catch (e) {
    lz = '';
  }

  // try pako (gzip) compression and base64-url encode the result
  let pakoStr = '';
  try {
    if (typeof pako === 'object' && typeof pako.deflate === 'function') {
      const deflated = pako.deflate(json);
      let binary = '';
      for (let i = 0; i < deflated.length; i++) binary += String.fromCharCode(deflated[i]);
      pakoStr = btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '');
    }
  } catch (e) {
    pakoStr = '';
  }

  // legacy: base64 of raw JSON (kept for compatibility)
  let legacy = '';
  try {
    const bytes = new TextEncoder().encode(json);
    let binary = '';
    bytes.forEach((value) => { binary += String.fromCharCode(value); });
    legacy = btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '');
  } catch (e) {
    legacy = '';
  }

  // choose the shortest non-empty encoding (pako or lzstring or legacy)
  const candidates = [];
  if (lz) candidates.push(lz);
  if (pakoStr) candidates.push(pakoStr);
  if (legacy) candidates.push(legacy);
  if (!candidates.length) return '';
  let best = candidates[0];
  for (let i = 1; i < candidates.length; i++) {
    if (candidates[i].length < best.length) best = candidates[i];
  }
  return best;
}

function decodePlannerStateFromParam(value) {
  const normalized = String(value || '').trim();
  if (!normalized) return createEmptyPlannerState();

  try {
    if (typeof LZString === 'object' && typeof LZString.decompressFromEncodedURIComponent === 'function') {
      const json = LZString.decompressFromEncodedURIComponent(normalized);
      if (json) {
        const parsed = JSON.parse(json);
        // if compact format detected, expand it
        if (parsed && typeof parsed === 'object' && Object.prototype.hasOwnProperty.call(parsed, 's') && Object.prototype.hasOwnProperty.call(parsed, 'e')) {
          return expandPlannerStateFromUrl(parsed);
        }
        return parsed;
      }
      // if decompression returned null/empty, fall through to legacy decode
    }
  } catch (e) {
    // fall through to legacy decode
  }

  const base64 = normalized.replace(/-/g, '+').replace(/_/g, '/');
  const padded = `${base64}${'='.repeat((4 - (base64.length % 4)) % 4)}`;
  const binary = atob(padded);
  const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));

  // try legacy JSON first
  try {
    const parsed = JSON.parse(new TextDecoder().decode(bytes));
    if (parsed && typeof parsed === 'object' && Object.prototype.hasOwnProperty.call(parsed, 's') && Object.prototype.hasOwnProperty.call(parsed, 'e')) {
      return expandPlannerStateFromUrl(parsed);
    }
    return parsed;
  } catch (e) {
    // not raw JSON; try pako inflate (gzip)
  }

  try {
    if (typeof pako === 'object' && typeof pako.inflate === 'function') {
      const inflated = pako.inflate(bytes);
      const text = new TextDecoder().decode(inflated);
      const parsed = JSON.parse(text);
      if (parsed && typeof parsed === 'object' && Object.prototype.hasOwnProperty.call(parsed, 's') && Object.prototype.hasOwnProperty.call(parsed, 'e')) {
        return expandPlannerStateFromUrl(parsed);
      }
      return parsed;
    }
  } catch (e) {
    // fallthrough
  }

  return createEmptyPlannerState();
}

function loadPlannerStateFromLocation() {
  if (typeof location === 'undefined') return createEmptyPlannerState();

  const params = new URLSearchParams(location.search);
  const rawPlan = params.get('plan');
  if (!rawPlan) return createEmptyPlannerState();

  try {
    return sanitizePlannerState(decodePlannerStateFromParam(rawPlan));
  } catch {
    return createEmptyPlannerState();
  }
}

function replacePlannerUrlParam(encodedPlan = '') {
  if (typeof history === 'undefined' || typeof location === 'undefined') return;

  const url = new URL(location.href);
  if (encodedPlan) {
    url.searchParams.set('plan', encodedPlan);
  } else {
    url.searchParams.delete('plan');
  }

  const nextUrl = `${url.pathname}${url.search}${url.hash}`;
  const currentUrl = `${location.pathname}${location.search}${location.hash}`;
  if (nextUrl !== currentUrl) {
    history.replaceState(null, '', nextUrl);
  }
}

function clearPlannerUrlState() {
  replacePlannerUrlParam('');
}

function syncPlannerStateToUrl() {
  if (activeBossMode !== 'planner') return;
  const encodedPlan = plannerState.entries.length ? encodePlannerStateToParam(plannerState) : '';
  replacePlannerUrlParam(encodedPlan);
}

function setPlannerShareFeedback(message = '', tone = '') {
  plannerShareFeedback = {
    message: String(message || '').trim(),
    tone: String(tone || '').trim()
  };
}

function commitPlannerState(mutator, options = {}) {
  const draft = clonePlannerState(plannerState);
  if (typeof mutator === 'function') {
    mutator(draft);
  }

  plannerState = sanitizePlannerState(draft);
  if (!plannerState.entries.length) {
    plannerShareFieldVisible = false;
  }

  if (options.feedback) {
    setPlannerShareFeedback(options.feedback.message, options.feedback.tone);
  } else if (options.resetFeedback !== false) {
    setPlannerShareFeedback('', '');
  }

  syncPlannerStateToUrl();

  if (activeBossMode === 'planner') {
    renderGrid();
  }
}

function getPlannerSelectedPick(plannerEntry, roleKey, bossEntry = getPlannerBossById(plannerEntry?.bossId)) {
  if (!plannerEntry || !roleKey || !bossEntry) return null;

  const slot = plannerEntry.roles?.[roleKey];
  const selectedKey = getPlannerPokemonKey(slot?.pokemonKey);
  if (!selectedKey) return null;

  const recommendations = getPlannerRoleRecommendations(bossEntry, roleKey, slot?.clan);
  return recommendations.find((pick) => pick.plannerKey === selectedKey) || null;
}

function countFilledPlannerSelections() {
  return plannerState.entries.reduce((total, entry) => (
    total + roleboardRoleOrder.filter((roleKey) => Boolean(getPlannerSelectedPick(entry, roleKey))).length
  ), 0);
}

function countSelectedPlannerItems() {
  return plannerState.entries.reduce((total, entry) => (
    total + (entry?.pokeblock ? 1 : 0) + (entry?.ration ? 1 : 0)
  ), 0);
}

function createPlannerMetricCard(label, value, description = '') {
  const card = document.createElement('div');
  card.className = 'planner-metric-card';

  const labelEl = document.createElement('span');
  labelEl.className = 'planner-metric-card__label';
  labelEl.textContent = label;

  const valueEl = document.createElement('strong');
  valueEl.className = 'planner-metric-card__value';
  valueEl.textContent = value;

  card.append(labelEl, valueEl);

  if (description) {
    const descEl = document.createElement('span');
    descEl.className = 'planner-metric-card__description';
    descEl.textContent = description;
    card.appendChild(descEl);
  }

  return card;
}

function createPlannerMetaChip(label, value, types = []) {
  const chip = document.createElement('div');
  chip.className = 'planner-meta-chip';

  const labelEl = document.createElement('span');
  labelEl.className = 'planner-meta-chip__label';
  labelEl.textContent = label;
  chip.appendChild(labelEl);

  const valueWrap = document.createElement('span');
  valueWrap.className = 'planner-meta-chip__value';
  getBossTypeIcons(types).forEach((icon) => valueWrap.appendChild(icon));

  const valueText = document.createElement('span');
  valueText.textContent = value;
  valueWrap.appendChild(valueText);

  chip.appendChild(valueWrap);
  return chip;
}

function createPlannerSummaryPill(label, value, tier = '') {
  const pill = document.createElement('div');
  pill.className = 'planner-summary-pill';

  const labelEl = document.createElement('span');
  labelEl.className = 'planner-summary-pill__label';
  labelEl.textContent = label;
  pill.appendChild(labelEl);

  const valueWrap = document.createElement('span');
  valueWrap.className = 'planner-summary-pill__value';

  if (tier) {
    const tierDot = document.createElement('span');
    tierDot.className = `tier-dot tier-${tier}`;
    tierDot.setAttribute('aria-hidden', 'true');
    valueWrap.appendChild(tierDot);
  }

  const valueText = document.createElement('span');
  valueText.textContent = value;
  valueWrap.appendChild(valueText);

  pill.appendChild(valueWrap);
  return pill;
}

function createPlannerConsumableToken(kind, entry, tone = 'selected') {
  const normalizedEntry = normalizeBossConsumableEntry(entry);
  const token = document.createElement('div');
  token.className = `planner-consumable-token planner-consumable-token--${kind}`;
  token.dataset.tone = tone;

  if (!normalizedEntry) {
    token.classList.add('planner-consumable-token--empty');
    token.textContent = 'Nenhum';
    return token;
  }

  if (normalizedEntry.image) {
    const image = document.createElement('img');
    image.className = 'planner-consumable-token__image';
    image.src = /^(?:https?:)?\/\//i.test(normalizedEntry.image)
      ? normalizedEntry.image
      : basePath + normalizedEntry.image;
    image.alt = '';
    image.setAttribute('aria-hidden', 'true');
    image.loading = 'lazy';
    token.appendChild(image);
  } else {
    const fallback = document.createElement('span');
    fallback.className = 'planner-consumable-token__fallback';
    fallback.textContent = kind === 'pokeblock' ? 'PB' : 'RT';
    fallback.setAttribute('aria-hidden', 'true');
    token.appendChild(fallback);
  }

  const text = document.createElement('span');
  text.className = 'planner-consumable-token__text';
  text.textContent = normalizedEntry.shortLabel || normalizedEntry.label;
  token.appendChild(text);

  return token;
}

function createPlannerBossPickerCard(bossEntry, isAdded) {
  const boss = bossEntry.bossRef;
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'planner-boss-picker';
  button.disabled = Boolean(isAdded);
  button.dataset.state = isAdded ? 'added' : 'available';
  button.setAttribute('aria-label', isAdded ? `${bossEntry.name} ja esta no planejamento` : `Adicionar ${bossEntry.name} ao planejamento`);

  const image = document.createElement('img');
  image.className = 'planner-boss-picker__image';
  image.src = basePath + bossEntry.image;
  image.alt = bossEntry.name;
  image.loading = 'lazy';

  const content = document.createElement('div');
  content.className = 'planner-boss-picker__content';

  const header = document.createElement('div');
  header.className = 'planner-boss-picker__header';

  const title = document.createElement('strong');
  title.className = 'planner-boss-picker__title';
  title.textContent = bossEntry.name;

  const badge = document.createElement('span');
  badge.className = 'planner-boss-picker__badge';
  badge.textContent = bossEntry.sourceLabel;

  header.append(title, badge);

  const chips = document.createElement('div');
  chips.className = 'planner-boss-picker__chips';
  chips.appendChild(createPlannerMetaChip('Tipos', (boss.types || []).map((type) => formatTypeLabel(type)).join(' / '), boss.types || []));

  const moveTypes = getBossMoveTypes(boss);
  if (moveTypes.length) {
    chips.appendChild(createPlannerMetaChip('Moveset', moveTypes.map((type) => formatTypeLabel(type)).join(' / '), moveTypes));
  }

  const action = document.createElement('span');
  action.className = 'planner-boss-picker__action';
  action.textContent = isAdded ? 'Ja adicionado' : 'Adicionar boss';

  content.append(header, chips, action);
  button.append(image, content);

  if (!isAdded) {
    button.addEventListener('click', () => {
      // Focus composition (step 2) when a boss is chosen from the browser
      plannerShowBrowser = false;
      plannerSubpage = 'compose';
      commitPlannerState((draft) => {
        // Clear selections on existing entries so only the newly added boss is "active"
        draft.entries.forEach((e) => {
          if (e.roles) {
            roleboardRoleOrder.forEach((rk) => {
              if (e.roles[rk]) e.roles[rk].pokemonKey = '';
            });
          }
          e.pokeblock = '';
          e.ration = '';
        });
        draft.entries.push(createPlannerBossState(bossEntry.id));
      }, {
        feedback: {
          message: `${bossEntry.name} foi adicionado ao planejamento.`,
          tone: 'success'
        }
      });
    });
  }

  return button;
}

function createPlannerRecommendationCard(plannerEntry, bossEntry, roleKey, pick) {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'planner-recommendation-card';
  button.dataset.tier = pick.tier || 'unknown';
  if (plannerEntry.roles?.[roleKey]?.pokemonKey === pick.plannerKey) {
    button.classList.add('is-selected');
  }

  const image = document.createElement('img');
  image.className = 'planner-recommendation-card__image';
  image.src = basePath + (pick.image || '');
  image.alt = pick.name;
  image.loading = 'lazy';

  const content = document.createElement('div');
  content.className = 'planner-recommendation-card__content';

  const titleRow = document.createElement('div');
  titleRow.className = 'planner-recommendation-card__title-row';

  const nameWrap = document.createElement('div');
  nameWrap.className = 'planner-recommendation-card__name-wrap';

  const tierDot = document.createElement('span');
  tierDot.className = `tier-dot tier-${pick.tier || 'unknown'}`;
  tierDot.setAttribute('aria-hidden', 'true');

  const name = document.createElement('strong');
  name.className = 'planner-recommendation-card__name';
  name.textContent = pick.name;
  nameWrap.append(tierDot, name);

  const tierText = document.createElement('span');
  tierText.className = 'planner-recommendation-card__tier';
  tierText.textContent = getTierUiLabel(pick.tier || 'unknown');

  titleRow.append(nameWrap, tierText);

  const chips = document.createElement('div');
  chips.className = 'planner-recommendation-card__chips';

  if (Array.isArray(pick.types) && pick.types.length) {
    chips.appendChild(
      createPlannerMetaChip(
        'Tipos',
        pick.types.map((type) => formatTypeLabel(type)).join(' / '),
        pick.types
      )
    );
  }

  const moveTypes = parseMoveTypes(pick);
  if (moveTypes.length) {
    chips.appendChild(
      createPlannerMetaChip(
        'Moveset',
        moveTypes.map((type) => formatTypeLabel(type)).join(' / '),
        moveTypes
      )
    );
  }

  const detail = getRecommendationExtraDescription(pick.description || pick.note || '');
  if (detail) {
    const detailEl = document.createElement('p');
    detailEl.className = 'planner-recommendation-card__detail';
    detailEl.textContent = detail;
    content.append(titleRow, chips, detailEl);
  } else {
    content.append(titleRow, chips);
  }

  button.append(image, content);
  button.addEventListener('click', () => {
    commitPlannerState((draft) => {
      const targetEntry = draft.entries.find((entry) => entry.bossId === plannerEntry.bossId);
      if (!targetEntry) return;
      targetEntry.roles[roleKey].pokemonKey = pick.plannerKey;
    });
  });

  return button;
}

function createPlannerRoleSlot(plannerEntry, bossEntry, roleKey) {
  const slot = plannerEntry.roles?.[roleKey] || { clan: getPlannerDefaultClanForRole(bossEntry, roleKey), pokemonKey: '' };
  const card = document.createElement('section');
  card.className = 'planner-role-slot';
  card.dataset.role = roleKey;

  const header = document.createElement('div');
  header.className = 'planner-role-slot__header';

  const copy = document.createElement('div');
  copy.className = 'planner-role-slot__copy';

  const eyebrow = document.createElement('span');
  eyebrow.className = 'planner-role-slot__eyebrow';
  eyebrow.textContent = roleboardRoleLabels[roleKey] || roleKey;

  const selectedPick = getPlannerSelectedPick(plannerEntry, roleKey, bossEntry);
  const current = document.createElement('strong');
  current.className = 'planner-role-slot__current';
  current.textContent = selectedPick ? selectedPick.name : 'Nenhum pokemon selecionado';

  const meta = document.createElement('span');
  meta.className = 'planner-role-slot__meta';
  meta.textContent = selectedPick
    ? `${bossEntry.bossRef.clans?.[slot.clan]?.label || slot.clan} - ${getTierUiLabel(selectedPick.tier || 'unknown')}`
    : '';

  // add line breaks: after role label (eyebrow) and after selected pokemon name (current)
  const brAfterEyebrow = document.createElement('br');
  const brAfterCurrent = document.createElement('br');
  copy.append(eyebrow, brAfterEyebrow, current, brAfterCurrent, meta);

  const clearButton = document.createElement('button');
  clearButton.type = 'button';
  clearButton.className = 'planner-role-slot__clear';
  clearButton.textContent = 'Limpar';
  clearButton.disabled = !selectedPick;
  clearButton.addEventListener('click', () => {
    commitPlannerState((draft) => {
      const targetEntry = draft.entries.find((entry) => entry.bossId === plannerEntry.bossId);
      if (!targetEntry) return;
      targetEntry.roles[roleKey].pokemonKey = '';
    });
  });

  header.append(copy, clearButton);
  card.appendChild(header);

  const clans = document.createElement('div');
  clans.className = 'planner-role-slot__clans';

  plannerClanOrder.forEach((clanKey) => {
    const options = getPlannerRoleRecommendations(bossEntry, roleKey, clanKey);
    const clanButton = document.createElement('button');
    clanButton.type = 'button';
    clanButton.className = 'planner-clan-filter';
    clanButton.dataset.active = slot.clan === clanKey ? 'true' : 'false';
    clanButton.disabled = options.length === 0;
    clanButton.setAttribute('aria-pressed', slot.clan === clanKey ? 'true' : 'false');
    clanButton.setAttribute('aria-label', `${bossEntry.bossRef.clans?.[clanKey]?.label || clanKey} para ${roleboardRoleLabels[roleKey] || roleKey}`);

    const icon = document.createElement('img');
    icon.className = 'planner-clan-filter__icon';
    icon.src = basePath + (clanIcons[clanKey] || '');
    icon.alt = '';
    icon.setAttribute('aria-hidden', 'true');
    icon.loading = 'lazy';

    const text = document.createElement('span');
    text.className = 'planner-clan-filter__text';
    text.textContent = bossEntry.bossRef.clans?.[clanKey]?.label || clanKey;

    clanButton.append(icon, text);
    clanButton.addEventListener('click', () => {
      commitPlannerState((draft) => {
        const targetEntry = draft.entries.find((entry) => entry.bossId === plannerEntry.bossId);
        if (!targetEntry) return;

        const currentKey = targetEntry.roles?.[roleKey]?.pokemonKey || '';
        targetEntry.roles[roleKey].clan = clanKey;

        if (currentKey) {
          const nextOptions = getPlannerRoleRecommendations(bossEntry, roleKey, clanKey);
          if (!nextOptions.some((pick) => pick.plannerKey === currentKey)) {
            targetEntry.roles[roleKey].pokemonKey = '';
          }
        }
      });
    });

    clans.appendChild(clanButton);
  });

  card.appendChild(clans);

  const recommendations = getPlannerRoleRecommendations(bossEntry, roleKey, slot.clan);
  if (!recommendations.length) {
    const empty = document.createElement('div');
    empty.className = 'planner-role-slot__empty';
    empty.textContent = 'Nenhuma recomendacao disponivel para esse cla.';
    card.appendChild(empty);
    return card;
  }

  const list = document.createElement('div');
  list.className = 'planner-role-slot__list';
  recommendations.forEach((pick) => {
    list.appendChild(createPlannerRecommendationCard(plannerEntry, bossEntry, roleKey, pick));
  });

  card.appendChild(list);
  return card;
}

function createPlannerConsumableField(plannerEntry, bossEntry, kind) {
  const field = document.createElement('label');
  field.className = 'planner-item-field';

  const label = document.createElement('span');
  label.className = 'planner-item-field__label';
  label.textContent = kind === 'pokeblock' ? 'Pokeblock' : 'Ration';

  const select = document.createElement('select');
  select.className = 'planner-item-field__select';

  const emptyOption = document.createElement('option');
  emptyOption.value = '';
  emptyOption.textContent = 'Nenhum';
  select.appendChild(emptyOption);

  getPlannerConsumableOptions(kind).forEach((option) => {
    const optionEl = document.createElement('option');
    optionEl.value = option.id;
    optionEl.textContent = option.label;
    select.appendChild(optionEl);
  });

  select.value = plannerEntry?.[kind] || '';
  select.addEventListener('change', () => {
    commitPlannerState((draft) => {
      const targetEntry = draft.entries.find((entry) => entry.bossId === plannerEntry.bossId);
      if (!targetEntry) return;
      targetEntry[kind] = normalizePlannerConsumableId(kind, select.value);
    });
  });

  const selected = getPlannerConsumableOptionById(kind, plannerEntry?.[kind]);
  const previewWrap = document.createElement('div');
  previewWrap.className = 'planner-item-field__preview';
  previewWrap.appendChild(createPlannerConsumableToken(kind, selected));

  const suggested = normalizeBossConsumableEntry(
    kind === 'pokeblock'
      ? (bossEntry?.bossRef?.pokeblock || bossEntry?.bossRef?.pokebloc)
      : bossEntry?.bossRef?.ration
  );

  const hint = document.createElement('div');
  hint.className = 'planner-item-field__hint';

  if (suggested) {
    const hintLabel = document.createElement('span');
    hintLabel.className = 'planner-item-field__hint-label';
    // Show a clear, contextual label for the suggested consumable
    hintLabel.textContent = kind === 'ration' ? 'Ration Recomendada' : 'Pokéblock Recomendada';
    hint.append(hintLabel, createPlannerConsumableToken(kind, suggested, 'suggested'));
  } else {
    hint.textContent = 'Opcional';
  }

  field.append(label, select, previewWrap, hint);
  return field;
}

function createPlannerCompositionCard(plannerEntry) {
  const bossEntry = getPlannerBossById(plannerEntry?.bossId);
  if (!bossEntry) return null;

  const boss = bossEntry.bossRef;
  const card = document.createElement('article');
  card.className = 'planner-composition-card';
  // Mark hoopa-sourced bosses so we can style their composition card differently
  if (bossEntry && bossEntry.sourceKey === 'hoopa') {
    card.classList.add('planner-composition-card--hoopa');
  }

  // Decide which roles we'll render for this boss (hoopa bosses only render DPS)
  const rolesToRender = (bossEntry && bossEntry.sourceKey === 'hoopa') ? ['dps'] : roleboardRoleOrder;

  // If only DPS will be shown (either because the boss is DPS-only, or because
  // only the DPS slot has a selected pick), add a modifier class so we can
  // center the title/clans and optionally hide some labels.
  const onlyDpsSelected = (rolesToRender.length === 1 && rolesToRender[0] === 'dps')
    || (rolesToRender.includes('dps') && rolesToRender.every((rk) => rk === 'dps' || !getPlannerSelectedPick(plannerEntry, rk, bossEntry)));
  if (onlyDpsSelected) card.classList.add('planner-composition-card--only-dps');

  const header = document.createElement('div');
  header.className = 'planner-composition-card__header';

  const bossWrap = document.createElement('div');
  bossWrap.className = 'planner-composition-card__boss';

  const image = document.createElement('img');
  image.className = 'planner-composition-card__image';
  image.src = basePath + bossEntry.image;
  image.alt = bossEntry.name;
  image.loading = 'lazy';

  const copy = document.createElement('div');
  copy.className = 'planner-composition-card__copy';

  const titleRow = document.createElement('div');
  titleRow.className = 'planner-composition-card__title-row';

  const title = document.createElement('h3');
  title.className = 'planner-composition-card__title';
  title.textContent = bossEntry.name;

  const source = document.createElement('span');
  source.className = 'planner-composition-card__source';
  source.textContent = bossEntry.sourceLabel;

  titleRow.append(title, source);

  const infoRow = document.createElement('div');
  infoRow.className = 'planner-composition-card__info';
  infoRow.appendChild(createPlannerMetaChip('Tipos', (boss.types || []).map((type) => formatTypeLabel(type)).join(' / '), boss.types || []));

  const moveTypes = getBossMoveTypes(boss);
  if (moveTypes.length) {
    const moveChip = createPlannerMetaChip('Moveset', moveTypes.map((type) => formatTypeLabel(type)).join(' / '), moveTypes);
    if (onlyDpsSelected) moveChip.classList.add('planner-meta-chip--no-label');
    infoRow.appendChild(moveChip);
  }

  copy.append(titleRow, infoRow);
  bossWrap.append(image, copy);

  const removeButton = document.createElement('button');
  removeButton.type = 'button';
  removeButton.className = 'planner-composition-card__remove';
  removeButton.textContent = 'Remover';
  removeButton.addEventListener('click', () => {
    // ensure UI returns to step 1 (browser) when removing a boss
    plannerShowBrowser = true;
    commitPlannerState((draft) => {
      draft.entries = draft.entries.filter((entry) => entry.bossId !== plannerEntry.bossId);
      // clear source filter so the browser panel resets to step 1
      draft.sourceFilter = '';
    }, {
      feedback: {
        message: `${bossEntry.name} foi removido do planejamento.`,
        tone: 'muted'
      }
    });
  });

  header.append(bossWrap, removeButton);
  card.appendChild(header);

  const rolesGrid = document.createElement('div');
  rolesGrid.className = 'planner-composition-card__roles';
  rolesToRender.forEach((roleKey) => {
    rolesGrid.appendChild(createPlannerRoleSlot(plannerEntry, bossEntry, roleKey));
  });
  card.appendChild(rolesGrid);

  const itemsGrid = document.createElement('div');
  itemsGrid.className = 'planner-composition-card__items';
  itemsGrid.append(
    createPlannerConsumableField(plannerEntry, bossEntry, 'pokeblock'),
    createPlannerConsumableField(plannerEntry, bossEntry, 'ration')
  );
  card.appendChild(itemsGrid);

  // Add player (member) actions: allow saving current role/item selections as a member
  const memberActions = document.createElement('div');
  memberActions.className = 'planner-member-actions';

  const addMemberBtn = document.createElement('button');
  addMemberBtn.type = 'button';
  addMemberBtn.className = 'planner-hero__button planner-hero__button--ghost';
  addMemberBtn.textContent = 'Finalizar';

  // Require at least one Pokémon pick to consider a member "ready".
  // Pokeblock / ration alone are not enough to finalize a member.
  const isMemberReady = () => (
    rolesToRender.some((roleKey) => Boolean(getPlannerSelectedPick(plannerEntry, roleKey, bossEntry)))
  );

  addMemberBtn.disabled = !isMemberReady();
  addMemberBtn.addEventListener('click', () => {
    // ensure UI returns to step 1 (browser) when finalizing
    plannerShowBrowser = true;
    commitPlannerState((draft) => {
      const targetEntry = draft.entries.find((entry) => entry.bossId === plannerEntry.bossId);
      if (!targetEntry) return;

      const member = {
        id: `m_${Date.now()}_${Math.floor(Math.random() * 1000)}`,
        roles: {},
        pokeblock: targetEntry.pokeblock || '',
        ration: targetEntry.ration || ''
      };

      roleboardRoleOrder.forEach((roleKey) => {
        member.roles[roleKey] = getPlannerPokemonKey(targetEntry.roles?.[roleKey]?.pokemonKey) || '';
      });

      targetEntry.members = targetEntry.members || [];
      targetEntry.members.push(member);

      // Reset selections for the current boss only (clear steps 2/3/4), but keep the boss and any saved members
      if (targetEntry) {
        if (targetEntry.roles) {
          roleboardRoleOrder.forEach((roleKey) => {
            if (targetEntry.roles[roleKey]) targetEntry.roles[roleKey].pokemonKey = '';
          });
        }
        targetEntry.pokeblock = '';
        targetEntry.ration = '';
      }
      // Keep the source filter cleared so the browser panel resets to step 1
      draft.sourceFilter = '';
    }, {
      feedback: {
        message: 'Jogador finalizado.',
        tone: 'success'
      }
    });
  });

  memberActions.appendChild(addMemberBtn);
  card.appendChild(memberActions);

  const summary = document.createElement('div');
  summary.className = 'planner-composition-card__summary';

  rolesToRender.forEach((roleKey) => {
    const selectedPick = getPlannerSelectedPick(plannerEntry, roleKey, bossEntry);
    if (!selectedPick) return;
    summary.appendChild(
      createPlannerSummaryPill(
        roleboardRoleLabels[roleKey] || roleKey,
        selectedPick.name,
        selectedPick.tier || 'unknown'
      )
    );
  });

  if (plannerEntry?.pokeblock) {
    const option = getPlannerConsumableOptionById('pokeblock', plannerEntry.pokeblock);
    summary.appendChild(createPlannerSummaryPill('Pokeblock', option?.shortLabel || option?.label || 'Pokeblock'));
  }

  if (plannerEntry?.ration) {
    const option = getPlannerConsumableOptionById('ration', plannerEntry.ration);
    summary.appendChild(createPlannerSummaryPill('Ration', option?.shortLabel || option?.label || 'Ration'));
  }

  // if summary is empty, intentionally render nothing (no placeholder text)

  card.appendChild(summary);

  // Render saved members (players)
  const memberList = document.createElement('div');
  memberList.className = 'planner-member-list';

  (plannerEntry.members || []).forEach((member) => {
    memberList.appendChild(createPlannerMemberCard(member, bossEntry, plannerEntry));
  });

  card.appendChild(memberList);
  return card;
}

function createPlannerMemberCard(member, bossEntry, plannerEntry) {
  // Render a richer boss-like card for finalized members (ready view)
  const wrap = document.createElement('article');
  wrap.className = 'planner-ready-member-card card';

  const header = document.createElement('div');
  header.className = 'planner-ready-member-card__header';
  // Note: boss name is shown by the group title above the cards to avoid redundancy.

  // Replace the tutorial icon with consumable badges (pokeblock / ration)
  const consumablesWrap = document.createElement('div');
  consumablesWrap.className = 'planner-ready-member-card__consumables';
  // Show ration first, then pokeblock (inverted order compared to composition view)
  if (member.ration) {
    const option = getPlannerConsumableOptionById('ration', member.ration);
    if (option) {
      const c = document.createElement('div');
      c.className = 'planner-ready-member-card__consumable planner-ready-member-card__consumable--ration';
      c.setAttribute('aria-label', option.label || option.shortLabel || '');
      if (option.description) {
        c.classList.add('passive-tooltip-trigger');
        c.dataset.passiveTooltipItems = JSON.stringify([option.description]);
      }
      if (option.image) {
        const img = document.createElement('img');
        img.src = basePath + option.image;
        img.alt = option.label || '';
        img.loading = 'lazy';
        img.className = 'planner-ready-member-card__consumable-image';
        c.appendChild(img);
      }
      const lbl = document.createElement('span');
      lbl.className = 'planner-ready-member-card__consumable-text';
      lbl.textContent = option.shortLabel || option.label || '';
      c.appendChild(lbl);
      consumablesWrap.appendChild(c);
    }
  }

  if (member.pokeblock) {
    const option = getPlannerConsumableOptionById('pokeblock', member.pokeblock);
    if (option) {
      const c = document.createElement('div');
      c.className = 'planner-ready-member-card__consumable planner-ready-member-card__consumable--pokeblock';
      c.setAttribute('aria-label', option.label || option.shortLabel || '');
      if (option.description) {
        c.classList.add('passive-tooltip-trigger');
        c.dataset.passiveTooltipItems = JSON.stringify([option.description]);
      }
      if (option.image) {
        const img = document.createElement('img');
        img.src = basePath + option.image;
        img.alt = option.label || '';
        img.loading = 'lazy';
        img.className = 'planner-ready-member-card__consumable-image';
        c.appendChild(img);
      }
      const lbl = document.createElement('span');
      lbl.className = 'planner-ready-member-card__consumable-text';
      lbl.textContent = option.shortLabel || option.label || '';
      c.appendChild(lbl);
      consumablesWrap.appendChild(c);
    }
  }

  if (consumablesWrap.childElementCount) {
    header.appendChild(consumablesWrap);
  }

  wrap.appendChild(header);

  const body = document.createElement('div');
  body.className = 'planner-ready-member-card__body';

  // Boss avatar (restore image element) — show boss artwork above picks
  const avatarWrap = document.createElement('div');
  avatarWrap.className = 'planner-ready-member-card__avatar';
  const avatarImg = document.createElement('img');
  avatarImg.src = basePath + bossEntry.image;
  avatarImg.alt = bossEntry.name;
  avatarImg.loading = 'lazy';
  avatarWrap.appendChild(avatarImg);
  body.appendChild(avatarWrap);

  const picks = document.createElement('div');
  picks.className = 'planner-ready-member-card__picks';

  roleboardRoleOrder.forEach((roleKey) => {
    const pkey = member.roles?.[roleKey];
    if (!pkey) return;

    const ownerClan = findPlannerRecommendationOwner(bossEntry, roleKey, pkey);
    const picksForRole = getPlannerRoleRecommendations(bossEntry, roleKey, ownerClan || getPlannerDefaultClanForRole(bossEntry, roleKey));
    const pick = picksForRole.find((pk) => pk.plannerKey === getPlannerPokemonKey(pkey));
    if (!pick) return;

    const pickWrap = document.createElement('div');
    pickWrap.className = 'planner-ready-member-card__pick';

    const pickImg = document.createElement('img');
    pickImg.className = 'planner-ready-member-card__pick-image';
    pickImg.src = basePath + (pick.image || '');
    pickImg.alt = pick.name;
    pickImg.loading = 'lazy';

    const pickLabel = document.createElement('div');
    pickLabel.className = 'planner-ready-member-card__pick-label';
    const roleSpan = document.createElement('span');
    roleSpan.className = 'planner-ready-member-card__pick-role';
    roleSpan.textContent = roleboardRoleLabels[roleKey] || roleKey;
    const nameStrong = document.createElement('strong');
    nameStrong.className = 'planner-ready-member-card__pick-name';
    nameStrong.textContent = pick.name;
    // Add tier badge (human-friendly label) next to the pick name
    const tierSpan = document.createElement('span');
    tierSpan.className = 'planner-ready-member-card__pick-tier ' + (pick.tier ? `tier-${pick.tier}` : 'tier-unknown');
    try {
      tierSpan.textContent = (typeof tierLabels === 'object' && tierLabels[pick.tier]) ? tierLabels[pick.tier] : (pick.tier || '');
    } catch (e) {
      tierSpan.textContent = pick.tier || '';
    }

    pickLabel.append(roleSpan, nameStrong, tierSpan);
    pickWrap.append(pickImg, pickLabel);
    picks.appendChild(pickWrap);
  });

  body.appendChild(picks);

  // intentionally omitted: boss move type chip (e.g., "Ground") — removed per request

  // Consumables are displayed in the header (badges with tooltips).
  // The bottom copies (prominent pokeblock button / ration badge) were removed to avoid duplication.

  wrap.appendChild(body);

  const actions = document.createElement('div');
  actions.className = 'planner-ready-member-card__actions';
  const removeBtn = document.createElement('button');
  removeBtn.type = 'button';
  removeBtn.className = 'planner-member-card__remove';
  removeBtn.textContent = 'Remover';
  removeBtn.addEventListener('click', (ev) => {
    ev.stopPropagation();
    commitPlannerState((draft) => {
      const targetEntry = draft.entries.find((entry) => entry.bossId === plannerEntry.bossId);
      if (!targetEntry || !Array.isArray(targetEntry.members)) return;
      targetEntry.members = targetEntry.members.filter((m) => String(m.id) !== String(member.id));
    }, {
      feedback: {
        message: 'Jogador removido.',
        tone: 'muted'
      }
    });
  });

  actions.appendChild(removeBtn);
  wrap.appendChild(actions);

  return wrap;
}

function renderPlannerGrid() {
  if (!grid) return;

  syncPlannerStateToUrl();
  grid.innerHTML = '';
  grid.dataset.catalogVariant = 'planner';
  grid.dataset.bossMode = 'planner';
  grid.setAttribute('aria-label', 'Planejador de bosses');

  const shell = document.createElement('div');
  shell.className = 'planner-shell';

  const hero = document.createElement('section');
  hero.className = 'planner-hero';

  const heroCopy = document.createElement('div');
  heroCopy.className = 'planner-hero__copy';

  const eyebrow = document.createElement('span');
  eyebrow.className = 'planner-hero__eyebrow';
  eyebrow.textContent = 'Planejamento compartilhavel';

  const title = document.createElement('h3');
  title.className = 'planner-hero__title';
  title.textContent = 'Planeje seus bosses com Tank, DPS e Suporte organizados.';

  const text = document.createElement('p');
  text.className = 'planner-hero__text';
  text.textContent = plannerState.sourceFilter
    ? `Filtro atual: ${getPlannerContentLabel(plannerState.sourceFilter)}.`
    : 'Escolha um conteudo para liberar a lista de bosses disponiveis.';

  heroCopy.append(eyebrow, title, text);

  // Subtabs: Montar / Cards prontos
  const subtabs = document.createElement('div');
  subtabs.className = 'planner-subtabs';

  const composeTab = document.createElement('button');
  composeTab.type = 'button';
  composeTab.className = 'planner-subtab';
  composeTab.textContent = 'Montar';
  composeTab.dataset.active = plannerSubpage === 'compose' ? 'true' : 'false';
  composeTab.addEventListener('click', () => {
    plannerSubpage = 'compose';
    renderGrid();
  });

  const readyTab = document.createElement('button');
  readyTab.type = 'button';
  readyTab.className = 'planner-subtab';
  readyTab.textContent = 'Cards prontos';
  readyTab.dataset.active = plannerSubpage === 'ready' ? 'true' : 'false';
  readyTab.addEventListener('click', () => {
    plannerSubpage = 'ready';
    renderGrid();
  });

  subtabs.append(composeTab, readyTab);

  const metrics = document.createElement('div');
  metrics.className = 'planner-hero__metrics';
  metrics.append(
    createPlannerMetricCard('Bosses montados', String(plannerState.entries.length), 'Sem limite de cards'),
    createPlannerMetricCard('Papeis preenchidos', `${countFilledPlannerSelections()}/${plannerState.entries.length * roleboardRoleOrder.length || 0}`, 'Tank, DPS e Suporte'),
    createPlannerMetricCard('Itens escolhidos', String(countSelectedPlannerItems()), 'Pokeblock e ration sao opcionais')
  );

  const actions = document.createElement('div');
  actions.className = 'planner-hero__actions';

  const shareButton = document.createElement('button');
  shareButton.type = 'button';
  shareButton.className = 'planner-hero__button planner-hero__button--primary';
  shareButton.textContent = 'Gerar link';
  shareButton.disabled = plannerState.entries.length === 0;
  shareButton.addEventListener('click', async () => {
    syncPlannerStateToUrl();
    plannerShareFieldVisible = true;
    const shareUrl = location.href;

    try {
      if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
        await navigator.clipboard.writeText(shareUrl);
        setPlannerShareFeedback('Link copiado para a area de transferencia.', 'success');
      } else {
        setPlannerShareFeedback('Link gerado. Copie manualmente se precisar.', 'muted');
      }
    } catch {
      setPlannerShareFeedback('Link gerado. Copie manualmente se precisar.', 'muted');
    }

    renderGrid();

    requestAnimationFrame(() => {
      const shareField = document.getElementById('planner-share-url');
      if (!shareField) return;
      shareField.focus();
      shareField.select();
    });
  });

  const clearButton = document.createElement('button');
  clearButton.type = 'button';
  clearButton.className = 'planner-hero__button planner-hero__button--ghost';
  clearButton.textContent = 'Limpar';
  clearButton.disabled = plannerState.entries.length === 0 && !plannerState.sourceFilter;
  clearButton.addEventListener('click', () => {
    commitPlannerState((draft) => {
      draft.sourceFilter = '';
      draft.entries = [];
    }, {
      feedback: {
        message: 'Planejamento limpo.',
        tone: 'muted'
      }
    });
  });

  actions.append(shareButton, clearButton);

  if (plannerState.entries.length > 0 && plannerShareFieldVisible) {
    const shareInput = document.createElement('input');
    shareInput.id = 'planner-share-url';
    shareInput.className = 'planner-hero__share-input';
    shareInput.type = 'text';
    shareInput.readOnly = true;
    shareInput.value = location.href;
    shareInput.setAttribute('aria-label', 'Link atual do planejamento');
    actions.appendChild(shareInput);
  }

  if (plannerShareFeedback.message) {
    const feedback = document.createElement('p');
    feedback.className = 'planner-hero__feedback';
    feedback.dataset.tone = plannerShareFeedback.tone || 'muted';
    feedback.setAttribute('aria-live', 'polite');
    feedback.textContent = plannerShareFeedback.message;
    actions.appendChild(feedback);
  }

  hero.append(heroCopy, subtabs, metrics, actions);
  shell.appendChild(hero);

  const layout = document.createElement('div');
  layout.className = 'planner-layout';

  const browser = document.createElement('section');
  browser.className = 'planner-panel planner-panel--browser';

  const browserHeader = document.createElement('div');
  browserHeader.className = 'planner-panel__header';

  const browserTitle = document.createElement('h4');
  browserTitle.className = 'planner-panel__title';
  browserTitle.textContent = 'Etapa 1: selecionar o boss';

  const browserText = document.createElement('p');
  browserText.className = 'planner-panel__text';
  browserText.textContent = 'Escolha um conteudo primeiro.';

  browserHeader.append(browserTitle, browserText);
  browser.appendChild(browserHeader);

  const filters = document.createElement('div');
  filters.className = 'planner-source-filters';

  plannerContentOrder.forEach((sourceKey) => {
    const filterButton = document.createElement('button');
    filterButton.type = 'button';
    filterButton.className = 'planner-source-filter';
    filterButton.dataset.active = plannerState.sourceFilter === sourceKey ? 'true' : 'false';
    filterButton.textContent = getPlannerContentLabel(sourceKey);
    filterButton.setAttribute('aria-pressed', plannerState.sourceFilter === sourceKey ? 'true' : 'false');
    filterButton.addEventListener('click', () => {
      commitPlannerState((draft) => {
        draft.sourceFilter = draft.sourceFilter === sourceKey ? '' : sourceKey;
      });
    });
    filters.appendChild(filterButton);
  });

  browser.appendChild(filters);

  const browserList = document.createElement('div');
  browserList.className = 'planner-boss-list';

  if (!plannerState.sourceFilter) {
    const empty = document.createElement('div');
    empty.className = 'planner-empty-state';
    empty.textContent = 'Selecione Mewtwo, Champion Path ou Hoopa Portais para exibir os bosses.';
    browserList.appendChild(empty);
  } else {
    const selectedSourceBosses = getPlannerBossEntries().filter((entry) => entry.sourceKey === plannerState.sourceFilter);
    selectedSourceBosses.forEach((entry) => {
      // Consider a boss "added" only when it has at least one saved member
      // (i.e., the user clicked "Finalizar"). Entries that are merely
      // pending (selected but not finalized) should not mark the boss as added.
      const isAdded = plannerState.entries.some((plannerEntry) => (
        plannerEntry.bossId === entry.id && Array.isArray(plannerEntry.members) && plannerEntry.members.length > 0
      ));
      browserList.appendChild(createPlannerBossPickerCard(entry, isAdded));
    });
  }

  browser.appendChild(browserList);

  const composition = document.createElement('section');
  composition.className = 'planner-panel planner-panel--composition';

  const compositionHeader = document.createElement('div');
  compositionHeader.className = 'planner-panel__header';

  const compositionTitle = document.createElement('h4');
  compositionTitle.className = 'planner-panel__title';
  compositionTitle.textContent = 'Etapas 2, 3 e 4: montar a composicao';

  const compositionText = document.createElement('p');
  compositionText.className = 'planner-panel__text';
  compositionText.textContent = 'Cada boss aceita 1 Tank, 1 DPS, 1 Suporte, 1 Pokeblock e 1 Ration. Itens podem ficar como nenhum.';

  compositionHeader.append(compositionTitle, compositionText);
  composition.appendChild(compositionHeader);

  const compositionList = document.createElement('div');
  compositionList.className = 'planner-composition-list';

  // Show only the single active composition card (the most-recent pending entry).
  // Entries that already have saved members are considered completed and
  // should not appear in the composition step.
  const pendingEntries = plannerState.entries.filter((entry) => !Array.isArray(entry.members) || entry.members.length === 0);
  if (!pendingEntries.length) {
    const empty = document.createElement('div');
    empty.className = 'planner-empty-state planner-empty-state--large';
    empty.textContent = 'Adicione um boss para abrir os slots de Tank, DPS, Suporte e itens.';
    compositionList.appendChild(empty);
  } else {
    const activeEntry = pendingEntries[pendingEntries.length - 1];
    const card = createPlannerCompositionCard(activeEntry);
    if (card) compositionList.appendChild(card);
  }

  composition.appendChild(compositionList);

  if (plannerSubpage === 'compose') {
    // If there are entries and the UI is focused on composition, show composition only.
    // Otherwise show the browser (step 1). This makes step 2/3/4 appear only after a boss is chosen.
    if (plannerState.entries.length > 0 && !plannerShowBrowser) {
      layout.append(composition);
    } else {
      layout.append(browser);
    }
  } else {
    const readyPanel = document.createElement('section');
    readyPanel.className = 'planner-panel planner-panel--ready';

    const readyHeader = document.createElement('div');
    readyHeader.className = 'planner-panel__header';

    const readyTitle = document.createElement('h4');
    readyTitle.className = 'planner-panel__title';
    readyTitle.textContent = 'Cards prontos';

    const readyText = document.createElement('p');
    readyText.className = 'planner-panel__text';
    readyText.textContent = 'Cards finalizados ou carregados pelo link.';

    readyHeader.append(readyTitle, readyText);
    readyPanel.appendChild(readyHeader);

    const readyList = document.createElement('div');
    readyList.className = 'planner-ready-list';

    plannerState.entries.forEach((entry) => {
      const bossEntry = getPlannerBossById(entry.bossId);
      if (!bossEntry || !Array.isArray(entry.members) || !entry.members.length) return;

      const group = document.createElement('div');
      group.className = 'planner-ready-boss-group';

      const groupTitle = document.createElement('h4');
      groupTitle.className = 'planner-ready-boss-group__title';
      groupTitle.textContent = bossEntry.name;
      group.appendChild(groupTitle);

      const cardsRow = document.createElement('div');
      cardsRow.className = 'planner-ready-cards';
      entry.members.forEach((member) => {
        cardsRow.appendChild(createPlannerMemberCard(member, bossEntry, entry));
      });
      group.appendChild(cardsRow);

      readyList.appendChild(group);
    });

    readyPanel.appendChild(readyList);
    layout.appendChild(readyPanel);
  }
  shell.appendChild(layout);
  grid.appendChild(shell);
}

function getBossTutorialUrl(boss) {
  return typeof boss?.tutorialUrl === 'string' && boss.tutorialUrl.trim()
    ? boss.tutorialUrl.trim()
    : (bossTutorialLinks[boss?.id] || '');
}

function openBossTutorial(boss) {
  const tutorialUrl = getBossTutorialUrl(boss);
  if (!tutorialUrl) return;

  if (typeof window.openSiteYouTubeModal === 'function') {
    const openedInModal = window.openSiteYouTubeModal({
      url: tutorialUrl,
      title: `Tutorial de ${boss.name}`
    });
    if (openedInModal) return;
  }

  window.open(tutorialUrl, '_blank', 'noopener,noreferrer');
}

function safeElement(el) {
  return el instanceof HTMLElement ? el : null;
}

function ensureSpeedstersElements() {
  return Boolean(grid && modal && modalTitle && modalSubtitle && modalBody && modalClan && closeBtn);
}

function makeHoopaBossCard(speedster) {
  const button = document.createElement('div');
  button.className = 'speedster-card';
  button.setAttribute('role', 'button');
  button.setAttribute('tabindex', '0');
  button.setAttribute('aria-label', `Abrir detalhes de ${speedster.name}`);
  button.dataset.catalog = 'hoopa';

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
  modeBadge.title = isDuo ? 'Chefe para dupla (2 jogadores)' : 'Chefe solo (1 jogador)';
  button.appendChild(modeBadge);

  const tutorialUrl = getBossTutorialUrl(speedster);

  const tutorialWrapper = document.createElement('div');
  tutorialWrapper.className = 'speedster-tutorial';

  const tutorialLabel = document.createElement('div');
  tutorialLabel.className = 'speedster-location-label';
  tutorialLabel.textContent = 'Tutorial';

  const tutorialBtn = document.createElement('button');
  tutorialBtn.type = 'button';
  tutorialBtn.className = 'speedster-location-btn speedster-tutorial-btn';
  tutorialBtn.setAttribute('aria-label', tutorialUrl ? 'Abrir tutorial em vídeo do chefe' : 'Tutorial em vídeo em breve');
  tutorialBtn.title = tutorialUrl ? 'Abrir um vídeo com a estratégia desse chefe' : 'O tutorial em vídeo deste chefe será adicionado em breve';
  tutorialBtn.dataset.available = tutorialUrl ? 'true' : 'false';
  tutorialBtn.setAttribute('aria-disabled', tutorialUrl ? 'false' : 'true');

  const tutorialIcon = document.createElement('img');
  tutorialIcon.className = 'speedster-tutorial-icon';
  tutorialIcon.src = basePath + 'youtube.png';
  tutorialIcon.alt = '';
  tutorialIcon.setAttribute('aria-hidden', 'true');

  tutorialBtn.appendChild(tutorialIcon);
  tutorialWrapper.append(tutorialLabel, tutorialBtn);
  button.appendChild(tutorialWrapper);

  tutorialBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    if (!tutorialUrl) return;
    openBossTutorial(speedster);
  });

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

  const moveTypes = getBossMoveTypes(speedster);
  if (moveTypes.length) {
    const moveChip = document.createElement('div');
    moveChip.className = 'speedster-boss-move-chip';
    getBossTypeIcons(moveTypes.slice(0, 2)).forEach((icon) => moveChip.appendChild(icon));

    const moveText = document.createElement('span');
    moveText.textContent = `Moveset ${moveTypes.map((type) => formatTypeLabel(type)).join(' / ')}`;
    moveChip.appendChild(moveText);
    button.appendChild(moveChip);
  }

  const consumableBadges = [
    createBossConsumableBadge('pokeblock', speedster.pokeblock || speedster.pokebloc)
  ].filter(Boolean);

  if (consumableBadges.length) {
    const consumables = document.createElement('div');
    consumables.className = 'boss-role-card__consumables';
    consumableBadges.forEach((badge) => consumables.appendChild(badge));
    button.appendChild(consumables);
  }

  const completionLabel = document.createElement('label');
  completionLabel.className = 'speedster-completion';
  completionLabel.setAttribute('aria-label', `Marcar ${speedster.name} como feito`);

  const completionCheckbox = document.createElement('input');
  completionCheckbox.type = 'checkbox';
  completionCheckbox.className = 'speedster-completion__checkbox';
  completionCheckbox.checked = isHoopaBossCompleted(speedster.id);
  completionCheckbox.setAttribute('aria-label', `Chefe ${speedster.name} concluido hoje`);

  const completionText = document.createElement('span');
  completionText.className = 'speedster-completion__text';

  const syncCompletionState = (completed) => {
    button.dataset.completed = completed ? 'true' : 'false';
    completionText.textContent = completed ? 'Feito hoje' : 'Pendente';
    completionCheckbox.checked = completed;
  };

  syncCompletionState(completionCheckbox.checked);

  completionLabel.append(completionCheckbox, completionText);
  button.appendChild(completionLabel);

  completionLabel.addEventListener('click', (event) => {
    event.stopPropagation();
  });
  completionLabel.addEventListener('pointerdown', (event) => {
    event.stopPropagation();
  });
  completionCheckbox.addEventListener('change', () => {
    const completed = completionCheckbox.checked;
    setHoopaBossCompleted(speedster.id, completed);
    syncCompletionState(completed);
  });

  button.addEventListener('click', (event) => {
    if (getPassiveTooltipTrigger(event.target)) return;
    openBossModalV2(speedster);
  });
  button.addEventListener('keydown', (event) => {
    if (event.target !== button) return;
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openBossModalV2(speedster);
    }
  });

  return button;
}

function createRoleBossAvatar(boss) {
  const avatar = document.createElement('div');
  avatar.className = 'boss-role-card__avatar';

  const image = document.createElement('img');
  image.className = 'boss-role-card__avatar-image';
  image.src = basePath + (boss.image || `${boss.id}.png`);
  image.alt = boss.name;
  image.loading = 'lazy';

  const fallback = document.createElement('span');
  fallback.className = 'boss-role-card__avatar-fallback';
  fallback.textContent = boss.emblem || bossInitials(boss.name);
  fallback.hidden = true;

  image.addEventListener('error', () => {
    image.hidden = true;
    fallback.hidden = false;
  });

  image.addEventListener('load', () => {
    image.hidden = false;
    fallback.hidden = true;
  });

  avatar.append(image, fallback);
  return avatar;
}

function normalizeBossConsumableEntry(entry) {
  if (!entry) return null;

  if (typeof entry === 'string') {
    const label = entry.trim();
    return label ? { label, shortLabel: label, image: '', tooltipItems: [] } : null;
  }

  if (typeof entry !== 'object') return null;

  const label = String(entry.label || entry.name || entry.title || '').trim();
  if (!label) return null;

  const shortLabel = String(entry.shortLabel || label).trim() || label;
  const image = typeof entry.image === 'string' && entry.image.trim()
    ? entry.image.trim()
    : '';
  const tooltipItems = Array.isArray(entry.tooltipItems)
    ? entry.tooltipItems.map((item) => String(item || '').trim()).filter(Boolean)
    : [entry.description || entry.tooltip || entry.effect]
      .map((item) => String(item || '').trim())
      .filter(Boolean);

  return { label, shortLabel, image, tooltipItems };
}

function createBossConsumableBadge(kind, entry) {
  const normalizedEntry = normalizeBossConsumableEntry(entry);
  if (!normalizedEntry) return null;

  const kindLabel = kind === 'pokeblock' ? 'Pokeblock' : 'Ration';
  const badge = document.createElement('button');
  badge.type = 'button';
  badge.className = `boss-role-card__consumable-trigger boss-role-card__consumable-trigger--${kind}`;
  badge.setAttribute('aria-label', `${kindLabel}: ${normalizedEntry.label}`);
  badge.setAttribute('aria-expanded', 'false');
  // expose external passive tooltip (not native `title`) so the tooltip panel
  // appears outside the card. Keep `title` unset to avoid native browser tooltips
  // which can overlap card content.
  if (Array.isArray(normalizedEntry.tooltipItems) && normalizedEntry.tooltipItems.length) {
    badge.dataset.tooltipItems = JSON.stringify(normalizedEntry.tooltipItems);
  }

  if (normalizedEntry.image) {
    const image = document.createElement('img');
    image.className = 'boss-role-card__consumable-icon';
    image.src = /^(?:https?:)?\/\//i.test(normalizedEntry.image)
      ? normalizedEntry.image
      : basePath + normalizedEntry.image;
    image.alt = '';
    image.setAttribute('aria-hidden', 'true');
    image.loading = 'lazy';
    badge.appendChild(image);
  } else {
    const fallback = document.createElement('span');
    fallback.className = 'boss-role-card__consumable-icon boss-role-card__consumable-icon--fallback';
    fallback.textContent = kind === 'pokeblock' ? 'PB' : 'RT';
    fallback.setAttribute('aria-hidden', 'true');
    badge.appendChild(fallback);
  }

  const text = document.createElement('span');
  text.className = 'boss-role-card__consumable-text';
  text.textContent = normalizedEntry.shortLabel;
  badge.appendChild(text);

  return badge;
}

function makeRoleBossCard(boss) {
  const button = document.createElement('div');
  button.className = 'boss-role-card';
  button.dataset.catalog = activeBossMode;
  button.setAttribute('role', 'button');
  button.setAttribute('tabindex', '0');
  button.setAttribute('aria-label', `Abrir detalhes de ${boss.name}`);

  const tutorialUrl = getBossTutorialUrl(boss);
  if (tutorialUrl) {
    const tutorialWrapper = document.createElement('div');
    tutorialWrapper.className = 'speedster-tutorial boss-role-card__tutorial';

    const tutorialLabel = document.createElement('div');
    tutorialLabel.className = 'speedster-location-label';
    tutorialLabel.textContent = 'Tutorial';

    const tutorialBtn = document.createElement('button');
    tutorialBtn.type = 'button';
    tutorialBtn.className = 'speedster-location-btn speedster-tutorial-btn';
    tutorialBtn.setAttribute('aria-label', 'Abrir tutorial em vídeo do chefe');
    tutorialBtn.title = 'Abrir um vídeo com a estratégia desse chefe';
    tutorialBtn.dataset.available = 'true';
    tutorialBtn.setAttribute('aria-disabled', 'false');

    const tutorialIcon = document.createElement('img');
    tutorialIcon.className = 'speedster-tutorial-icon';
    tutorialIcon.src = basePath + 'youtube.png';
    tutorialIcon.alt = '';
    tutorialIcon.setAttribute('aria-hidden', 'true');

    tutorialBtn.appendChild(tutorialIcon);
    tutorialWrapper.append(tutorialLabel, tutorialBtn);
    button.appendChild(tutorialWrapper);

    tutorialBtn.addEventListener('click', (event) => {
      event.stopPropagation();
      openBossTutorial(boss);
    });
  }

  const consumableBadges = [
    createBossConsumableBadge('pokeblock', boss.pokeblock || boss.pokebloc),
    createBossConsumableBadge('ration', boss.ration)
  ].filter(Boolean);

  const title = document.createElement('div');
  title.className = 'boss-role-card__title';
  title.textContent = boss.name;
  title.title = boss.name;

  // Badge será inserido no botão (não diretamente no título) para evitar sobrescritas

  const avatar = createRoleBossAvatar(boss);
  const chips = document.createElement('div');
  chips.className = 'boss-role-card__chips boss-role-card__chips--types';
  getBossTypeIcons(boss.types || []).forEach((icon) => {
    const chip = document.createElement('span');
    chip.className = 'boss-role-card__chip boss-role-card__chip--type';
    chip.appendChild(icon);
    chip.appendChild(document.createTextNode(icon.title || 'Tipo'));
    chips.appendChild(chip);
  });

  button.append(title, avatar);
  if (chips.childElementCount > 0) {
    button.appendChild(chips);
  }

  const moveTypes = getBossMoveTypes(boss);
  if (moveTypes.length) {
    const moveChip = document.createElement('span');
    moveChip.className = 'boss-role-card__chip boss-role-card__chip--wide boss-role-card__chip--move';
    getBossTypeIcons(moveTypes.slice(0, 2)).forEach((icon) => moveChip.appendChild(icon));
    moveChip.appendChild(document.createTextNode(`Moveset ${moveTypes.map((type) => formatTypeLabel(type)).join(' / ')}`));
    button.appendChild(moveChip);
  }

  if (consumableBadges.length) {
    button.classList.add('boss-role-card--with-consumables');

    const consumables = document.createElement('div');
    consumables.className = 'boss-role-card__consumables';
    consumableBadges.forEach((badge) => consumables.appendChild(badge));
    button.appendChild(consumables);
  }

  button.addEventListener('click', (event) => {
    if (getPassiveTooltipTrigger(event.target)) return;
    openBossModalV2(boss);
  });
  button.addEventListener('keydown', (event) => {
    if (event.target !== button) return;
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openBossModalV2(boss);
    }
  });
  if (boss?.comingSoon) {
    // garantir posicionamento relativo para o badge
    button.style.position = button.style.position || 'relative';
    const soon = document.createElement('span');
    soon.className = 'boss-role-card__coming-soon';
    soon.textContent = 'Em Breve!';
    soon.style.cssText = 'position:absolute;top:0.5rem;right:0.5rem;background:#ff9800;color:#fff;padding:0.12rem 0.45rem;border-radius:12px;font-size:0.75rem;font-weight:600;z-index:3;';
    button.appendChild(soon);
  }
  return button;
}

function makeSpeedsterCard(speedster) {
  return getActiveBossCatalog().variant === 'roleboard'
    ? makeRoleBossCard(speedster)
    : makeHoopaBossCard(speedster);
}

function renderGrid() {
  if (!grid) return;
  hidePassiveTooltip({ immediate: true });
  if (activeBossMode === 'hoopa') {
    ensureHoopaBossProgressFresh();
  }
  grid.innerHTML = '';
  const catalog = getActiveBossCatalog();
  grid.dataset.catalogVariant = catalog.variant;
  grid.dataset.bossMode = activeBossMode;
  if (catalog.variant === 'planner') {
    renderPlannerGrid();
    return;
  }
  getActiveBossesData().forEach((boss) => {
    grid.appendChild(makeSpeedsterCard(boss));
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
  const moveIcons = getBossMoveTypes(speedster).slice(0, 2).map((type) => {
    const img = document.createElement('img');
    img.className = 'speedster-search-item-icon';
    img.src = iconBase + `${type}.png`;
    img.alt = `${type}`;
    img.title = formatTypeLabel(type);
    img.loading = 'lazy';
    return img;
  });

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
  moveIcons.forEach((icon) => container.appendChild(icon));
  return container;
}

function getRecommendedSpeedsters() {
  const map = new Map();

  getActiveBossesData().forEach((boss) => {
    Object.values(boss.clans || {}).forEach((clanData) => {
      getAllRecommendedForClan(boss, clanData).forEach((poke) => {
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

  return Array.from(map.values()).sort((a, b) => String(a.name || '').localeCompare(String(b.name || ''), 'pt-BR'));
}

function normalizeSpeedsterSearchText(value = '') {
  return String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/['’`.]/g, '')
    .toLowerCase()
    .trim();
}

function getSpeedsterSearchBase(speedster) {
  return normalizeSpeedsterSearchText([
    speedster?.name,
    Array.isArray(speedster?.types) ? speedster.types.join(' ') : '',
    speedster?.description,
    speedster?.note
  ].filter(Boolean).join(' '));
}

function renderSearchResults(query = '') {
  if (!speedsterSearchResults || !speedsterSearchNoResults) return;
  if (!getActiveBossCatalog().searchEnabled) {
    hideSearchResults();
    return;
  }
  const q = normalizeSpeedsterSearchText(query);

  const availableSpeedsters = getRecommendedSpeedsters();
  const filtered = q
    ? availableSpeedsters.filter((st) => getSpeedsterSearchBase(st).includes(q))
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
    item.setAttribute('aria-label', `Abrir chefes que usam ${st.name}`);
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
  return getActiveBossesData().filter((boss) =>
    Object.values(boss.clans || {}).some((clanData) =>
      getAllRecommendedForClan(boss, clanData).some((poke) => String(poke.name || '').toLowerCase() === lower)
    )
  );
}

function getSpeedsterTierForBoss(boss, speedsterName) {
  const lower = String(speedsterName || '').toLowerCase();
  let bestTier = '';
  for (const clanData of Object.values(boss.clans || {})) {
    getAllRecommendedForClan(boss, clanData).forEach((poke) => {
      if (String(poke.name || '').toLowerCase() === lower) {
        bestTier = pickBetterTier(bestTier, (poke.tier || 'unknown').trim());
      }
    });
  }
  return bestTier;
}

function getComputedSpeedsterTierInBoss(boss, speedsterName) {
  const lower = String(speedsterName || '').toLowerCase();
  if (!boss || !speedsterName) return 'unknown';

  const clansOrder = ['instinct', 'mystic', 'valor'];
  let bestTier = '';
  for (const clanKey of clansOrder) {
    const clanData = boss.clans?.[clanKey];
    const groups = getRecommendationGroupsForClan(boss, clanData);
    if (!groups.length) continue;

    groups.forEach((group) => {
      const ranked = rankRecommendedForBoss(group.boss, group.recommended);
      const found = ranked.find((poke) => String(poke.name || '').toLowerCase() === lower);
      if (found) {
        // Regra especial: speedsters que causam Efetivo (1.5) viram Super Efetivo (2.0).
        // Aplicar apenas na computação de tiers para speedsters.
        let effectiveTier = found.tier || 'unknown';
        try {
          const isSpeedsterMatch = String(found.name || '').toLowerCase() === lower;
          const offenseVal = typeof found._offense === 'number' ? found._offense : null;
          if (isSpeedsterMatch && offenseVal === 1.5) {
            effectiveTier = classifyRecommendationTier(2.0, found._defenseWorst);
          }
        } catch (e) {
          // fallback para o tier já calculado
        }

        bestTier = pickBetterTier(bestTier, effectiveTier);
      }
    });
  }

  if (bestTier) return bestTier;

  // Fallback to static dataset if not found in computed ranking.
  const staticTier = getSpeedsterTierForBoss(boss, speedsterName);
  return staticTier || 'unknown';
}

function getTierUiLabel(tier = 'unknown') {
  const tierLabels = {
    green: 'Ideal',
    otimo: 'Muito bom',
    yellow: 'Bom',
    red: 'Aceitavel',
    solo: 'Ruim',
    unknown: 'Sem informacao'
  };

  return tierLabels[tier] || tierLabels.unknown;
}

function getBossResultEncounterLabel(boss) {
  if (activeBossMode === 'hoopa') {
    return boss?.duo ? 'Dupla' : 'Solo';
  }

  if (typeof boss?.encounterLabel === 'string' && boss.encounterLabel.trim()) {
    return boss.encounterLabel.trim();
  }

  return getActiveBossCatalog().label || 'Chefe';
}

function createSpeedsterSearchSummaryChip(label, value, types = []) {
  const chip = document.createElement('div');
  chip.className = 'speedster-search-results-chip';

  if (label) {
    const chipLabel = document.createElement('span');
    chipLabel.className = 'speedster-search-results-chip__label';
    chipLabel.textContent = label;
    chip.appendChild(chipLabel);
  }

  const content = document.createElement('span');
  content.className = 'speedster-search-results-chip__content';
  getBossTypeIcons((types || []).slice(0, 2)).forEach((icon) => content.appendChild(icon));

  const valueText = document.createElement('span');
  valueText.className = 'speedster-search-results-chip__value';
  valueText.textContent = value;
  content.appendChild(valueText);

  chip.appendChild(content);
  return chip;
}

function createSpeedsterSearchMetric(label, value, tone = '') {
  const card = document.createElement('div');
  card.className = 'speedster-search-results-metric';
  if (tone) {
    card.dataset.tone = tone;
  }

  const metricLabel = document.createElement('span');
  metricLabel.className = 'speedster-search-results-metric__label';
  metricLabel.textContent = label;

  const metricValue = document.createElement('strong');
  metricValue.className = 'speedster-search-results-metric__value';
  metricValue.textContent = value;

  card.append(metricLabel, metricValue);
  return card;
}

function createSpeedsterBossResultMetaChip(label, values = []) {
  const normalizedValues = Array.isArray(values) ? values.filter(Boolean) : [];
  if (!normalizedValues.length) return null;

  const chip = document.createElement('div');
  chip.className = 'speedster-boss-result-card__chip';

  const chipLabel = document.createElement('span');
  chipLabel.className = 'speedster-boss-result-card__chip-label';
  chipLabel.textContent = label;
  chip.appendChild(chipLabel);

  getBossTypeIcons(normalizedValues.slice(0, 2)).forEach((icon) => chip.appendChild(icon));

  const chipValue = document.createElement('span');
  chipValue.className = 'speedster-boss-result-card__chip-value';
  chipValue.textContent = normalizedValues.map((type) => formatTypeLabel(type)).join(' / ');
  chip.appendChild(chipValue);

  return chip;
}

function createSpeedsterBossResultCard(boss, speedsterName) {
  const tier = getComputedSpeedsterTierInBoss(boss, speedsterName) || 'unknown';
  const moveTypes = getBossMoveTypes(boss);
  const bossTypes = Array.isArray(boss?.types) ? boss.types : [];
  const catalogLabel = getActiveBossCatalog().label || 'Bosses';

  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'speedster-boss-result-card';
  button.dataset.tier = tier;
  button.setAttribute('aria-label', `Abrir detalhes de ${boss.name}. Tier ${getTierUiLabel(tier)}.`);

  const avatar = document.createElement('div');
  avatar.className = 'speedster-boss-result-card__avatar';

  const avatarImage = document.createElement('img');
  avatarImage.className = 'speedster-boss-result-card__avatar-image';
  avatarImage.src = basePath + (boss.image || `${boss.id}.png`);
  avatarImage.alt = boss.name;
  avatarImage.loading = 'lazy';
  avatar.appendChild(avatarImage);

  const encounterBadge = document.createElement('span');
  encounterBadge.className = 'speedster-boss-result-card__encounter';
  encounterBadge.textContent = getBossResultEncounterLabel(boss);
  avatar.appendChild(encounterBadge);

  const content = document.createElement('div');
  content.className = 'speedster-boss-result-card__content';

  const eyebrow = document.createElement('div');
  eyebrow.className = 'speedster-boss-result-card__eyebrow';
  eyebrow.textContent = catalogLabel;

  const title = document.createElement('div');
  title.className = 'speedster-boss-result-card__title';
  title.textContent = boss.name;

  const chips = document.createElement('div');
  chips.className = 'speedster-boss-result-card__chips';

  const bossTypesChip = createSpeedsterBossResultMetaChip('Tipos', bossTypes);
  if (bossTypesChip) {
    chips.appendChild(bossTypesChip);
  }

  const moveTypesChip = createSpeedsterBossResultMetaChip('Moveset', moveTypes);
  if (moveTypesChip) {
    chips.appendChild(moveTypesChip);
  }

  content.append(eyebrow, title);

  const aside = document.createElement('div');
  aside.className = 'speedster-boss-result-card__aside';

  const tierBadge = document.createElement('div');
  tierBadge.className = 'speedster-boss-result-card__tier';

  const tierDot = document.createElement('span');
  tierDot.className = `tier-dot tier-${tier}`;
  tierDot.setAttribute('aria-hidden', 'true');

  const tierText = document.createElement('span');
  tierText.className = 'speedster-boss-result-card__tier-text';
  tierText.textContent = getTierUiLabel(tier);

  tierBadge.append(tierDot, tierText);

  const cta = document.createElement('span');
  cta.className = 'speedster-boss-result-card__cta';
  cta.textContent = 'Abrir detalhes';

  aside.append(tierBadge, cta);

  button.append(avatar, content, aside, chips);
  button.addEventListener('click', () => {
    openBossModalV2(boss);
  });

  return button;
}

function openSpeedsterBossesModal(speedster) {
  setBossModalLayout(false);
  // marcar contexto ativo para que o sistema saiba qual speedster foi aberto
  activeSpeedsterContextName = String(speedster?.name || '').toLowerCase();
  const bosses = getBossesForSpeedster(speedster.name);
  const catalog = getActiveBossCatalog();
  const moveTypes = getBossMoveTypes(speedster);
  const bestTier = bosses.reduce((best, boss) => pickBetterTier(best, getComputedSpeedsterTierInBoss(boss, speedster.name)), '');
  const idealCount = bosses.filter((boss) => getComputedSpeedsterTierInBoss(boss, speedster.name) === 'green').length;

  modalTitle.textContent = `${speedster.name} (Pokemon)`;
  setModalChrome({
    bosses: [{ name: speedster.name, image: speedster.image }],
    showLocation: false,
    showLegend: true,
    showImages: true
  });
  setModalBossWeaknesses(null, { show: false });
  modalSubtitle.textContent = bosses.length > 0 ? `Usado por ${bosses.length} chefe(s)` : 'Não encontrado em nenhum chefe';

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
  modalBody.classList.remove('speedster-modal-body--split', 'speedster-modal-body--roleboard');
  modalBody.classList.add('speedster-modal-body--search-results');

  const shell = document.createElement('section');
  shell.className = 'speedster-clan-section speedster-search-results-shell';

  const summary = document.createElement('div');
  summary.className = 'speedster-search-results-summary';

  const summaryCopy = document.createElement('div');
  summaryCopy.className = 'speedster-search-results-summary__copy';

  const summaryEyebrow = document.createElement('span');
  summaryEyebrow.className = 'speedster-search-results-summary__eyebrow';
  summaryEyebrow.textContent = 'Pokemon pesquisado';

  const summaryLead = document.createElement('h3');
  summaryLead.className = 'speedster-search-results-summary__title';
  summaryLead.textContent = `${speedster.name} no catalogo ${catalog.label}`;

  const summaryText = document.createElement('p');
  summaryText.className = 'speedster-search-results-summary__text';
  summaryText.textContent = 'Clique em um chefe para abrir a ficha completa com composicao, tiers e detalhes do encontro.';

  const summaryChips = document.createElement('div');
  summaryChips.className = 'speedster-search-results-chip-row';
  summaryChips.appendChild(createSpeedsterSearchSummaryChip('Catalogo', catalog.label));

  if (Array.isArray(speedster?.types) && speedster.types.length) {
    summaryChips.appendChild(
      createSpeedsterSearchSummaryChip(
        'Tipos',
        speedster.types.map((type) => formatTypeLabel(type)).join(' / '),
        speedster.types
      )
    );
  }

  if (moveTypes.length) {
    summaryChips.appendChild(
      createSpeedsterSearchSummaryChip(
        'Moveset',
        moveTypes.map((type) => formatTypeLabel(type)).join(' / '),
        moveTypes
      )
    );
  }

  summaryCopy.append(summaryEyebrow, summaryLead, summaryText, summaryChips);

  const summaryMetrics = document.createElement('div');
  summaryMetrics.className = 'speedster-search-results-metrics';
  summaryMetrics.append(
    createSpeedsterSearchMetric('Chefes', String(bosses.length), 'count'),
    createSpeedsterSearchMetric('Melhor tier', getTierUiLabel(bestTier || 'unknown'), bestTier || 'unknown'),
    createSpeedsterSearchMetric('Tier ideal', idealCount > 0 ? `${idealCount}x` : '0x', idealCount > 0 ? 'green' : 'unknown')
  );

  summary.append(summaryCopy, summaryMetrics);

  const list = document.createElement('div');
  list.className = 'speedster-boss-result-grid';

  if (bosses.length === 0) {
    const empty = document.createElement('div');
    empty.className = 'speedster-clan-empty';
    empty.textContent = 'Nenhum chefe encontrado para este speedster.';
    list.appendChild(empty);
  } else {
    bosses.forEach((boss) => {
      list.appendChild(createSpeedsterBossResultCard(boss, speedster.name));
    });
  }

  shell.append(summary, list);
  modalBody.appendChild(shell);

  modal.setAttribute('data-open', 'true');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  const modalContentEl = modal.querySelector('.speedster-modal-content');
  if (modalContentEl) {
    modalContentEl.classList.add('speedster-modal-content--roleboard', 'speedster-modal-content--search-results');
  }

  if (typeof gsap !== 'undefined') {
    gsap.fromTo(
      modal.querySelector('.speedster-modal-content'),
      { opacity: 0, y: 40, scale: 0.96 },
      { opacity: 1, y: 0, scale: 1, duration: 0.35, ease: 'power2.out' }
    );

    const animatedCards = shell.querySelectorAll('.speedster-search-results-summary, .speedster-search-results-metric, .speedster-boss-result-card');
    if (animatedCards.length) {
      gsap.fromTo(
        animatedCards,
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.32, ease: 'power2.out', stagger: 0.04, delay: 0.06 }
      );
    }
  }
}

function createRecommendationCard(poke, options = {}) {
  const { showDescription = true } = options;
  {
    const formatTypeLabel = (type) => type ? type.charAt(0).toUpperCase() + type.slice(1) : '';
    const moveTypeMatch = typeof poke?.description === 'string'
      ? poke.description.match(/(?:Tipo move|MoveType):\s*([a-zA-Z/]+)/i)
      : null;
    const moveTypes = moveTypeMatch && moveTypeMatch[1]
      ? moveTypeMatch[1].split('/').map((entry) => entry.trim().toLowerCase()).filter(Boolean)
      : (poke?._moveType ? [poke._moveType] : []);
    const tier = poke.tier || 'unknown';
    const atk = typeof poke._offense === 'number' ? poke._offense.toFixed(2) : '-';
    const def = typeof poke._defenseWorst === 'number' ? poke._defenseWorst.toFixed(2) : '-';

    const tierLabels = {
      green: 'Ideal',
      otimo: 'Muito bom',
      yellow: 'Bom',
      red: 'Aceitavel',
      solo: 'Ruim',
      unknown: 'Sem informacao'
    };

    const createChip = (type, options = {}) => {
      if (!type) return null;

      const chip = document.createElement('div');
      chip.className = `speedster-reco-chip${options.move ? ' speedster-reco-chip--move' : ''}`;
      chip.title = options.label ? `${options.label}: ${formatTypeLabel(type)}` : formatTypeLabel(type);

      const icon = document.createElement('img');
      icon.className = 'speedster-reco-chip-icon';
      icon.src = iconBase + `${type}.png`;
      icon.alt = `${formatTypeLabel(type)} type`;
      icon.loading = 'lazy';

      const text = document.createElement('span');
      text.className = 'speedster-reco-chip-text';

      if (options.label) {
        const tag = document.createElement('span');
        tag.className = 'speedster-reco-chip-tag';
        tag.textContent = options.label;
        text.appendChild(tag);
      }

      const value = document.createElement('span');
      value.className = 'speedster-reco-chip-value';
      value.textContent = formatTypeLabel(type);
      text.appendChild(value);

      chip.append(icon, text);
      return chip;
    };

    const createScoreMetric = (label, value, modifierClass) => {
      const row = document.createElement('div');
      row.className = `speedster-reco-score-row ${modifierClass}`;

      const metricLabel = document.createElement('span');
      metricLabel.className = 'speedster-reco-score-label';
      metricLabel.textContent = label;

      const metricValue = document.createElement('span');
      metricValue.className = 'speedster-reco-score-value';
      metricValue.textContent = value;

      row.append(metricLabel, metricValue);
      return row;
    };

    const card = document.createElement('div');
    card.className = 'speedster-reco-card';
    card.dataset.tier = tier;

    const score = document.createElement('div');
    score.className = 'speedster-reco-score';
    score.title = recommendationScoreTitle;
    score.append(
      createScoreMetric('ATK', atk, 'speedster-reco-score-row--atk'),
      createScoreMetric('DEF', def, 'speedster-reco-score-row--def')
    );

    const img = document.createElement('img');
    img.className = 'speedster-reco-image';
    img.src = basePath + poke.image;
    img.alt = poke.name;
    img.loading = 'lazy';

    const body = document.createElement('div');
    body.className = 'speedster-reco-body';

    const nameWrapper = document.createElement('div');
    nameWrapper.className = 'speedster-reco-name-wrapper';

    const tierDot = document.createElement('span');
    tierDot.className = `tier-dot tier-${tier}`;
    tierDot.setAttribute('aria-label', tierLabels[tier] || 'Sem informação');

    const nameEl = document.createElement('div');
    nameEl.className = 'speedster-reco-name';
    nameEl.textContent = poke.name;
    nameWrapper.append(tierDot, nameEl);

    const passiveInfo = getRecommendationPassiveInfo(poke);

    const chips = document.createElement('div');
    chips.className = 'speedster-reco-chip-list';

    if (Array.isArray(poke.types) && poke.types.length) {
      const typeRow = document.createElement('div');
      typeRow.className = 'speedster-reco-chip-row speedster-reco-chip-row--types';
      poke.types.slice(0, 2).forEach((type) => {
        const chip = createChip(type);
        if (chip) typeRow.appendChild(chip);
      });
      if (typeRow.childElementCount > 0) {
        chips.appendChild(typeRow);
      }
    }

    if (moveTypes.length) {
      const moveRow = document.createElement('div');
      moveRow.className = 'speedster-reco-chip-row speedster-reco-chip-row--moves';
      moveTypes.slice(0, 2).forEach((type) => {
        const chip = createChip(type, { label: 'Moveset', move: true });
        if (chip) moveRow.appendChild(chip);
      });
      if (moveRow.childElementCount > 0) {
        chips.appendChild(moveRow);
      }
    }

    body.appendChild(nameWrapper);
    if (passiveInfo) {
      const passiveTrigger = createPassiveTooltipTrigger(passiveInfo, 'reco');
      if (passiveTrigger) {
        body.appendChild(passiveTrigger);
      }
    }
    if (chips.childElementCount > 0) {
      body.appendChild(chips);
    }

    card.append(score, img, body);

    const extraDescription = showDescription ? getRecommendationExtraDescription(poke.description) : '';
    if (extraDescription) {
      const descBand = document.createElement('div');
      descBand.className = 'speedster-reco-desc-band';

      const desc = document.createElement('div');
      desc.className = 'speedster-reco-desc';
      desc.textContent = extraDescription;

      descBand.appendChild(desc);
      card.appendChild(descBand);
    }

    return card;
  }
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
    otimo: 'Muito bom',
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

  const score = document.createElement('div');
  score.className = 'speedster-reco-score';
  const atk = typeof poke._offense === 'number' ? poke._offense.toFixed(2) : '-';
  const def = typeof poke._defenseWorst === 'number' ? poke._defenseWorst.toFixed(2) : '-';
  score.textContent = `⚔️${atk}\n🛡️${def}`;
  card.appendChild(score);

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
  desc.textContent = normalizeMoveTypeLabel(poke.description);

  card.append(img, nameWrapper, desc);
  return card;
}

function ensureModalLocationButton() {
  const modalHeader = modal?.querySelector('.speedster-modal-header');
  if (!modalHeader) return null;

  let modalLocationBtn = modalHeader.querySelector('.speedster-modal-location-btn');
  if (!modalLocationBtn) {
    modalLocationBtn = document.createElement('button');
    modalLocationBtn.type = 'button';
    modalLocationBtn.className = 'speedster-modal-location-btn';
    modalLocationBtn.setAttribute('aria-label', 'Ver localização do chefe');
    modalLocationBtn.title = 'Ver localizacao';
    modalLocationBtn.textContent = '🗺️';
    modalHeader.appendChild(modalLocationBtn);
  }

  return modalLocationBtn;
}

function ensureModalTochasButton() {
  const modalHeader = modal?.querySelector('.speedster-modal-header');
  if (!modalHeader) return null;

  let tochasBtn = modalHeader.querySelector('.speedster-modal-tochas-btn');
  if (!tochasBtn) {
    tochasBtn = document.createElement('button');
    tochasBtn.type = 'button';
    tochasBtn.className = 'speedster-modal-location-btn speedster-modal-tochas-btn';
    tochasBtn.setAttribute('aria-label', 'Abrir Tochas');
    tochasBtn.title = 'Tochas';
    tochasBtn.textContent = 'Tochas';
    modalHeader.appendChild(tochasBtn);
  }

  return tochasBtn;
}

function openTochasInModal() {
  if (!modal || !modalBody) return;

  const tochasPath = (String(location.pathname || '').toLowerCase().includes('/bosses')) ? '../tochas.html' : 'tochas.html';

  modalTitle.textContent = 'Tochas — Acenda todas';
  modalSubtitle.textContent = '';

  // mark modal as displaying tochas so we can apply specific chrome rules
  try { modal.dataset.mode = 'tochas'; } catch (e) {}

  // hide tier legend and corner images specifically for tochas modal
  try { setModalChrome({ showLegend: false, showImages: false, showLocation: false }); } catch (e) {}

  modalBody.innerHTML = '';
  modalBody.classList.remove('speedster-modal-body--roleboard', 'speedster-modal-body--split');

  const wrap = document.createElement('div');
  wrap.className = 'speedster-modal-iframe-wrap';

  const iframe = document.createElement('iframe');
  iframe.className = 'speedster-modal-iframe';
  iframe.src = tochasPath;
  iframe.setAttribute('aria-label', 'Tochas — Acenda todas');
  iframe.loading = 'lazy';
  iframe.allow = 'fullscreen';

  wrap.appendChild(iframe);
  modalBody.appendChild(wrap);

  modal.setAttribute('data-open', 'true');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  // ensure modal content has roleboard width to give more space for the embedded page
  const modalContentEl = modal.querySelector('.speedster-modal-content');
  if (modalContentEl) modalContentEl.classList.add('speedster-modal-content--roleboard');

  if (typeof gsap !== 'undefined') {
    gsap.fromTo(
      modal.querySelector('.speedster-modal-content'),
      { opacity: 0, y: 40, scale: 0.96 },
      { opacity: 1, y: 0, scale: 1, duration: 0.35, ease: 'power2.out' }
    );
  }
}

function setModalChrome({ bosses = [], locationImage = '', showLocation = false, showLegend = true, showImages = true } = {}) {
  const modalHeader = modal?.querySelector('.speedster-modal-header');
  const existingLocationBtn = modalHeader?.querySelector('.speedster-modal-location-btn') || null;
  const modalLocationBtn = showLocation ? ensureModalLocationButton() : existingLocationBtn;
  const tierLegend = modal?.querySelector('.tier-legend');
  const pokemonImgLeft = document.getElementById('modal-pokemon-img-left');
  const pokemonImgRight = document.getElementById('modal-pokemon-img');
  const modalContent = modal?.querySelector('.speedster-modal-content');

  if (modalBody) {
    modalBody.classList.remove('speedster-modal-body--search-results');
  }

  if (modalContent) {
    modalContent.classList.remove('speedster-modal-content--search-results');
  }

  if (modalLocationBtn) {
    if (!showLocation) {
      modalLocationBtn.remove();
    } else {
      modalLocationBtn.hidden = false;
      modalLocationBtn.onclick = locationImage ? () => showLocationOverlay(locationImage) : null;
    }
  }

  if (tierLegend) {
    tierLegend.hidden = !showLegend;
  }

  if (pokemonImgLeft) {
    pokemonImgLeft.hidden = !showImages;
  }
  if (pokemonImgRight) {
    pokemonImgRight.hidden = !showImages;
  }

  if (!showImages) return;

  const leftEntry = bosses[0] || {};
  const rightEntry = bosses[1] || null;

  if (pokemonImgLeft) {
    const leftImage = leftEntry.image || '';
    pokemonImgLeft.hidden = !leftImage;
    pokemonImgLeft.src = leftImage ? basePath + leftImage : '';
    pokemonImgLeft.alt = leftEntry.name || '';
    pokemonImgLeft.onerror = () => {
      pokemonImgLeft.hidden = true;
    };
    pokemonImgLeft.onload = () => {
      pokemonImgLeft.hidden = false;
    };
  }
  if (pokemonImgRight) {
    const rightImage = rightEntry?.image || '';
    pokemonImgRight.hidden = !rightImage;
    pokemonImgRight.src = rightImage ? basePath + rightImage : '';
    pokemonImgRight.alt = rightEntry?.name || '';
    pokemonImgRight.onerror = () => {
      pokemonImgRight.hidden = true;
    };
    pokemonImgRight.onload = () => {
      pokemonImgRight.hidden = false;
    };
  }
}

function ensureBossWeaknessPanel() {
  const titleWrap = modal?.querySelector('.speedster-modal-title');
  if (!titleWrap) return null;

  let panel = titleWrap.querySelector('.boss-weakness-panel');
  if (!panel) {
    panel = document.createElement('section');
    panel.className = 'boss-weakness-panel';
    panel.hidden = true;
    panel.setAttribute('aria-label', 'Fraquezas do chefe');

    const title = document.createElement('div');
    title.className = 'boss-weakness-title';
    title.textContent = 'Fraquezas';

    const groups = document.createElement('div');
    groups.className = 'boss-weakness-groups';

    panel.append(title, groups);

    const tierLegend = titleWrap.querySelector('.tier-legend');
    if (tierLegend) {
      tierLegend.insertAdjacentElement('afterend', panel);
    } else {
      titleWrap.appendChild(panel);
    }
  }

  return {
    panel,
    groups: panel.querySelector('.boss-weakness-groups')
  };
}

function ensureNeutralBadge() {
  const titleWrap = modal?.querySelector('.speedster-modal-title');
  if (!titleWrap) return null;

  let badge = titleWrap.querySelector('.boss-neutral-badge');
  if (!badge) {
    badge = document.createElement('div');
    badge.className = 'boss-neutral-badge';
    badge.hidden = true;
    badge.setAttribute('aria-hidden', 'true');
    badge.setAttribute('role', 'status');
    badge.textContent = 'Defesa Neutra';

    const tierLegend = titleWrap.querySelector('.tier-legend');
    if (tierLegend) {
      tierLegend.insertAdjacentElement('afterend', badge);
    } else {
      titleWrap.appendChild(badge);
    }
  }

  return badge;
}

function hideBossWeaknessPanel() {
  const surface = ensureBossWeaknessPanel();
  if (!surface) return;
  surface.panel.hidden = true;
  surface.groups.replaceChildren();
}

function formatTypeMultiplier(multiplier) {
  if (!Number.isFinite(multiplier)) return '-';
  if (Number.isInteger(multiplier)) return `${multiplier}x`;
  return `${String(Number(multiplier.toFixed(2))).replace(/\.0+$/, '')}x`;
}

function getBossWeaknessDisplayEntries(source) {
  if (!source || typeof source !== 'object') return [];

  if (Array.isArray(source)) {
    return source
      .map((entry, index) => ({
        id: entry?.id || `boss-${index}`,
        name: entry?.name || `Chefe ${index + 1}`,
        image: entry?.image || '',
        types: getBossOffenseTargetTypes(entry),
        immunities: mergeLowercaseUniqueValues(entry?.immunities)
      }))
      .filter((entry) => entry.types.length);
  }

  const sourceTypes = getBossOffenseTargetTypes(source);
  const sourceImmunities = mergeLowercaseUniqueValues(source.immunities);
  const sourceEffectivenessConfig = getBossEffectivenessConfig(source);
  const groupMap = new Map();

  Object.values(source.clans || {}).forEach((clanData) => {
    getRecommendationGroupsForClan(source, clanData).forEach((group) => {
      const bossRef = group?.boss;
      const entryTypes = getBossOffenseTargetTypes(bossRef);
      if (!entryTypes.length) return;

      const entryId = String(bossRef?.id || group?.title || source.id || source.name || '').trim();
      if (!entryId || groupMap.has(entryId)) return;

      groupMap.set(entryId, {
        id: entryId,
        name: bossRef?.name || group?.title || source.name || 'Chefe',
        image: group?.bossImage || source.image || '',
        types: entryTypes,
        immunities: mergeLowercaseUniqueValues(bossRef?.immunities, source.immunities)
      });
    });
  });

  if (Array.isArray(source.bosses) && source.bosses.length) {
    return source.bosses.map((entry, index) => {
      const entryNameKey = getRecommendationNameKey(entry?.name || `${source.name || 'boss'}-${index}`);
      const groupMatch = Array.from(groupMap.values()).find((candidate) => getRecommendationNameKey(candidate.name) === entryNameKey);
      const types = mergeLowercaseUniqueValues(getBossOffenseTargetTypes(entry), groupMatch?.types, sourceTypes);
      const entryEffectivenessConfig = getBossEffectivenessConfig(entry);
      const neutral = entryEffectivenessConfig.offenseMode === 'neutral' || sourceEffectivenessConfig.offenseMode === 'neutral';
      return {
        id: groupMatch?.id || `${source.id || 'boss'}-${index}`,
        name: entry?.name || groupMatch?.name || source.name || 'Chefe',
        image: entry?.image || groupMatch?.image || source.image || '',
        types,
        immunities: mergeLowercaseUniqueValues(entry?.immunities, groupMatch?.immunities, sourceImmunities),
        neutral: Boolean(neutral)
      };
    }).filter((entry) => entry.types.length || entry.neutral);
  }

  if (groupMap.size > 1) {
    return Array.from(groupMap.values());
  }

  // If the boss (single source) is configured as neutral, return a neutral marker
  if (sourceEffectivenessConfig && sourceEffectivenessConfig.offenseMode === 'neutral') {
    return [{
      id: source.id || source.name || 'boss',
      name: source.name || 'Chefe',
      image: source.image || '',
      types: [],
      immunities: sourceImmunities,
      neutral: true
    }];
  }

  if (sourceTypes.length) {
    return [{
      id: source.id || source.name || 'boss',
      name: source.name || 'Chefe',
      image: source.image || '',
      types: sourceTypes,
      immunities: sourceImmunities
    }];
  }

  return [];
}

function getWeaknessesForBossEntry(entry) {
  const bossTypes = mergeLowercaseUniqueValues(entry?.types);
  const bossImmunities = mergeLowercaseUniqueValues(entry?.immunities);

  return Object.keys(typeEffectiveness)
    .map((type) => {
      const raw = getTypeMultiplier(type, bossTypes, bossImmunities);
      const normalized = normalizeOffenseValue(raw);
      return {
        type,
        // `multiplier` passa a ser o valor normalizado conforme a escala de ATK
        multiplier: normalized,
        // mantemos raw para eventuais debug ou lógica futura
        rawMultiplier: raw
      };
    })
    .filter((item) => item.multiplier > 1)
    .sort((left, right) => {
      if (right.multiplier !== left.multiplier) {
        return right.multiplier - left.multiplier;
      }
      return formatTypeLabel(left.type).localeCompare(formatTypeLabel(right.type), 'pt-BR');
    });
}

function setModalBossWeaknesses(source, options = {}) {
  const { show = true } = options;
  const surface = ensureBossWeaknessPanel();
  if (!surface) return;

  const neutralBadge = ensureNeutralBadge();

  if (!show || !source) {
    hideBossWeaknessPanel();
    return;
  }

  const entries = getBossWeaknessDisplayEntries(source);
  const anyNeutralEntry = Array.isArray(entries) && entries.some((e) => Boolean(e.neutral));
  if (neutralBadge) {
    neutralBadge.hidden = !anyNeutralEntry;
    neutralBadge.setAttribute('aria-hidden', neutralBadge.hidden ? 'true' : 'false');
  }
  const renderedEntries = entries
    .map((entry) => ({
      ...entry,
      weaknesses: getWeaknessesForBossEntry(entry)
    }))
    .filter((entry) => entry.weaknesses.length);

  if (!renderedEntries.length) {
    // show neutral badge even when there are no explicit weaknesses
    if (neutralBadge) {
      neutralBadge.hidden = !anyNeutralEntry;
      if (neutralBadge.hidden) neutralBadge.setAttribute('aria-hidden', 'true'); else neutralBadge.setAttribute('aria-hidden', 'false');
    }
    if (!anyNeutralEntry) {
      hideBossWeaknessPanel();
    }
    return;
  }

  // If we have actual weakness entries, hide the neutral badge.
  if (neutralBadge) {
    neutralBadge.hidden = true;
    neutralBadge.setAttribute('aria-hidden', 'true');
  }

  const showBossName = renderedEntries.length > 1;
  const fragment = document.createDocumentFragment();

  renderedEntries.forEach((entry) => {
    const group = document.createElement('div');
    group.className = 'boss-weakness-group';

    if (showBossName) {
      const label = document.createElement('span');
      label.className = 'boss-weakness-group-label';
      label.textContent = entry.name;
      group.appendChild(label);
    }

    const list = document.createElement('div');
    list.className = 'boss-weakness-list';

    if (entry.weaknesses.length) {
      entry.weaknesses.forEach((item) => {
        const chip = document.createElement('span');
        chip.className = 'boss-weakness-chip';
        chip.title = `${formatTypeLabel(item.type)} ${formatTypeMultiplier(item.multiplier)}`;

        const icon = document.createElement('img');
        icon.className = 'boss-weakness-chip-icon';
        icon.src = iconBase + `${item.type}.png`;
        icon.alt = formatTypeLabel(item.type);
        icon.loading = 'lazy';

        const value = document.createElement('span');
        value.className = 'boss-weakness-chip-value';
        value.textContent = formatTypeMultiplier(item.multiplier);

        chip.append(icon, value);
        list.appendChild(chip);
      });
    }

    group.appendChild(list);
    fragment.appendChild(group);
  });

  surface.groups.replaceChildren(fragment);
  surface.panel.hidden = false;
}

function openModalWithAnimation() {
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

function createRolePickCard(poke) {
  const card = document.createElement('div');
  card.className = 'boss-role-pick';
  card.dataset.tier = poke.tier || 'unknown';
  if (poke.note) {
    card.title = poke.note;
  }

  const media = document.createElement('div');
  media.className = 'boss-role-pick-media';

  const img = document.createElement('img');
  img.className = 'boss-role-pick-image';
  img.src = basePath + poke.image;
  img.alt = poke.name;
  img.loading = 'lazy';

  const fallback = document.createElement('span');
  fallback.className = 'boss-role-pick-image-fallback';
  fallback.textContent = bossInitials(poke.name);
  fallback.hidden = true;

  img.addEventListener('error', () => {
    img.hidden = true;
    fallback.hidden = false;
  });

  img.addEventListener('load', () => {
    img.hidden = false;
    fallback.hidden = true;
  });

  media.append(img, fallback);

  const copy = document.createElement('div');
  copy.className = 'boss-role-pick-copy';

  const head = document.createElement('div');
  head.className = 'boss-role-pick-head';

  const nameWrap = document.createElement('div');
  nameWrap.className = 'boss-role-pick-name-wrap';

  const tierDot = document.createElement('span');
  tierDot.className = `tier-dot tier-${poke.tier || 'unknown'}`;
  tierDot.setAttribute('aria-label', tierLabels[poke.tier || 'unknown'] || tierLabels.unknown);

  const name = document.createElement('div');
  name.className = 'boss-role-pick-name';
  name.textContent = poke.name;
  name.title = poke.note ? `${poke.name} - ${poke.note}` : poke.name;

  nameWrap.append(tierDot, name);
  const passiveInfo = getRecommendationPassiveInfo(poke);

  const score = document.createElement('div');
  score.className = 'boss-role-pick-score';
  score.title = recommendationScoreTitle;

  const atkRow = document.createElement('div');
  atkRow.className = 'boss-role-pick-score-row boss-role-pick-score-row--atk';
  const atkLabel = document.createElement('span');
  atkLabel.className = 'boss-role-pick-score-label';
  atkLabel.textContent = 'ATK';
  const atkValue = document.createElement('span');
  atkValue.className = 'boss-role-pick-score-value';
  atkValue.textContent = typeof poke._offense === 'number' ? poke._offense.toFixed(2) : '-';
  atkRow.append(atkLabel, atkValue);

  const defRow = document.createElement('div');
  defRow.className = 'boss-role-pick-score-row boss-role-pick-score-row--def';
  const defLabel = document.createElement('span');
  defLabel.className = 'boss-role-pick-score-label';
  defLabel.textContent = 'DEF';
  const defValue = document.createElement('span');
  defValue.className = 'boss-role-pick-score-value';
  defValue.textContent = typeof poke._defenseWorst === 'number' ? poke._defenseWorst.toFixed(2) : '-';
  defRow.append(defLabel, defValue);

  score.append(atkRow, defRow);
  head.append(nameWrap, score);

  copy.append(head);

  if (passiveInfo) {
    const passiveTrigger = createPassiveTooltipTrigger(passiveInfo, 'role');
    if (passiveTrigger) {
      copy.appendChild(passiveTrigger);
    }
  }

  const chips = document.createElement('div');
  chips.className = 'boss-role-pick-types';
  const typeRow = document.createElement('div');
  typeRow.className = 'boss-role-pick-types-row';
  const moveRow = document.createElement('div');
  moveRow.className = 'boss-role-pick-types-row boss-role-pick-types-row--move';
  const typeGroup = document.createElement('div');
  typeGroup.className = 'boss-role-pick-meta';
  const typeLabel = document.createElement('div');
  typeLabel.className = 'boss-role-pick-meta-label';
  typeLabel.textContent = 'Tipos';
  typeGroup.append(typeLabel, typeRow);
  const moveGroup = document.createElement('div');
  moveGroup.className = 'boss-role-pick-meta boss-role-pick-meta--move';
  const moveLabel = document.createElement('div');
  moveLabel.className = 'boss-role-pick-meta-label';
  moveLabel.textContent = 'Moveset';
  moveGroup.append(moveLabel, moveRow);

  if (Array.isArray(poke.types) && poke.types.length) {
    poke.types.slice(0, 2).forEach((type) => {
      const chip = document.createElement('span');
      chip.className = 'boss-role-pick-chip';
      getBossTypeIcons([type]).forEach((icon) => chip.appendChild(icon));
      chip.appendChild(document.createTextNode(formatTypeLabel(type)));
      typeRow.appendChild(chip);
    });
  }

  const moveType = poke.moveType || poke._moveType || (Array.isArray(poke.types) ? poke.types[0] : null);
  if (moveType) {
    const moveChip = document.createElement('span');
    moveChip.className = 'boss-role-pick-chip boss-role-pick-chip--move';
    getBossTypeIcons([moveType]).forEach((icon) => moveChip.appendChild(icon));

    const moveValue = document.createElement('span');
    moveValue.textContent = formatTypeLabel(moveType);

    moveChip.append(moveValue);
    moveRow.appendChild(moveChip);
  }

  if (moveRow.childElementCount > 0) {
    card.appendChild(moveGroup);
  }

  if (typeRow.childElementCount > 0) {
    chips.appendChild(typeGroup);
  }

  card.append(media, copy);

  if (chips.childElementCount > 0) {
    card.appendChild(chips);
  }

  return card;
}

function openRoleBossModal(boss) {
  setBossModalLayout(true);
  currentBoss = boss;
  modalTitle.textContent = boss.name;
  modalSubtitle.textContent = '';
  setModalChrome({
    bosses: [{ name: boss.name, image: boss.image }],
    showLocation: false,
    showLegend: true,
    showImages: true
  });
  setModalBossWeaknesses(boss);

  // Add "Tochas" button only for Mewtwo (keep UI clean for others)
  try {
    const existingTochas = modal?.querySelector('.speedster-modal-tochas-btn');
    if (String(boss.id || '').toLowerCase() === 'mewtwo') {
      const tb = ensureModalTochasButton();
      if (tb) tb.onclick = (ev) => { ev.stopPropagation(); openTochasInModal(); };
    } else if (existingTochas) {
      existingTochas.remove();
    }
  } catch (e) {
    // fail silently to avoid breaking modal behavior
  }

  modalBody.innerHTML = '';
  modalBody.classList.remove('speedster-modal-body--split', 'speedster-modal-body--roleboard');
  modalBody.classList.add('speedster-modal-body--roleboard');

  const clanGrid = document.createElement('div');
  clanGrid.className = 'boss-role-clan-grid';

  ['instinct', 'mystic', 'valor'].forEach((clanKey) => {
    const clanData = boss.clans?.[clanKey];
    if (!clanData) return;

    const section = document.createElement('section');
    section.className = 'boss-role-clan-section';
    section.dataset.clan = clanKey;

    const header = document.createElement('div');
    header.className = 'boss-role-clan-header';

    const icon = document.createElement('img');
    icon.className = 'boss-role-clan-icon';
    icon.src = basePath + (clanIcons[clanKey] || '');
    icon.alt = `${clanData.label || clanKey} icon`;
    icon.loading = 'lazy';

    const title = document.createElement('div');
    title.className = 'boss-role-clan-title';
    title.textContent = clanData.label || clanKey;
    header.append(icon, title);
    section.appendChild(header);

    const roleGrid = document.createElement('div');
    roleGrid.className = 'boss-role-role-grid';

    roleboardRoleOrder.forEach((roleKey) => {
      const column = document.createElement('div');
      column.className = 'boss-role-column';
      column.dataset.role = roleKey;

      const head = document.createElement('div');
      head.className = 'boss-role-column-head';

      const label = document.createElement('span');
      label.className = 'boss-role-label';
      label.textContent = roleboardRoleLabels[roleKey];

      const picks = rankRecommendedForBoss(boss, getFixedRecommendationRolePicks(boss, clanKey, roleKey));
      const count = document.createElement('span');
      count.className = 'boss-role-count';
      count.textContent = `${picks.length} picks`;

      head.append(label, count);
      column.appendChild(head);

      const list = document.createElement('div');
      list.className = 'boss-role-picks';

      if (!picks.length) {
        const empty = document.createElement('div');
        empty.className = 'speedster-clan-empty';
        empty.textContent = 'Nenhum pick ainda.';
        list.appendChild(empty);
      } else {
        picks.forEach((poke) => {
          list.appendChild(createRolePickCard(poke));
        });
      }

      column.appendChild(list);
      roleGrid.appendChild(column);
    });

    section.appendChild(roleGrid);
    clanGrid.appendChild(section);
  });

  modalBody.appendChild(clanGrid);
  openModalWithAnimation();
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
      modalLocationBtn.setAttribute('aria-label', 'Ver localização do chefe');
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

const recommended = rankRecommendedForBoss(speedster, getAllRecommendedForClan(speedster, clanData));

      if (recommended.length === 0) {
        const empty = document.createElement('div');
        empty.className = 'speedster-clan-empty';
        empty.textContent = 'Nenhuma recomendação disponível.';
        list.appendChild(empty);
      } else {
        recommended.forEach((poke) => {
        list.appendChild(createRecommendationCard(poke));
        return;
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
          otimo: 'Muito bom',
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
        desc.textContent = normalizeMoveTypeLabel(poke.description);

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

// Dedicated boss modal renderer used by the speedsters tab.
function openBossModal(speedster) {
  setBossModalLayout(false);
  currentBoss = speedster;
  const bosses = Array.isArray(speedster.bosses) ? speedster.bosses : [{ name: speedster.name, image: speedster.image }];
  const bossNames = bosses.map((boss) => boss.name).join(' + ');
  modalTitle.textContent = bossNames;
  modalSubtitle.textContent = speedster.description || '';
  setModalChrome({
    bosses,
    locationImage: basePath + (speedster.locationImage || speedster.image),
    showLocation: true,
    showLegend: true,
    showImages: true
  });
  setModalBossWeaknesses(speedster);

  const modalHeader = modal.querySelector('.speedster-modal-header');
  if (modalHeader) {
    let modalLocationBtn = modalHeader.querySelector('.speedster-modal-location-btn');
    if (!modalLocationBtn) {
      modalLocationBtn = document.createElement('button');
      modalLocationBtn.type = 'button';
      modalLocationBtn.className = 'speedster-modal-location-btn';
      modalLocationBtn.setAttribute('aria-label', 'Ver localização do chefe');
      modalLocationBtn.title = 'Ver localização';
      modalLocationBtn.textContent = '🗺️';
      modalHeader.appendChild(modalLocationBtn);
    }
    modalLocationBtn.onclick = () => showLocationOverlay(basePath + (speedster.locationImage || speedster.image));
  }

  const pokemonImgLeft = document.getElementById('modal-pokemon-img-left');
  const pokemonImgRight = document.getElementById('modal-pokemon-img');
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
  const hasSplitRecommendations = clansOrder.some((clanKey) => {
    const clanData = speedster.clans?.[clanKey];
    return getRecommendationGroupsForClan(speedster, clanData).length > 1;
  });
  modalBody.classList.toggle('speedster-modal-body--split', hasSplitRecommendations);

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

    const recommendationGroups = getRecommendationGroupsForClan(speedster, clanData);
    const hasMultipleGroups = recommendationGroups.length > 1;
    if (hasMultipleGroups) {
      list.classList.add('speedster-clan-list--split');
    }

    if (recommendationGroups.length === 0 || recommendationGroups.every((group) => !group.recommended.length)) {
      const empty = document.createElement('div');
      empty.className = 'speedster-clan-empty';
      empty.textContent = 'Nenhuma recomendação disponível.';
      list.appendChild(empty);
    } else {
      recommendationGroups.forEach((group) => {
        const ranked = rankRecommendedForBoss(group.boss, group.recommended);
        if (hasMultipleGroups) {
          const groupBlock = document.createElement('div');
          groupBlock.className = 'speedster-reco-group';

          const groupHeader = document.createElement('div');
          groupHeader.className = 'speedster-reco-group-header';

          const groupImage = document.createElement('img');
          groupImage.className = 'speedster-reco-group-boss';
          groupImage.src = basePath + (group.bossImage || speedster.image);
          groupImage.alt = group.title;
          groupImage.loading = 'lazy';

          const groupTitle = document.createElement('div');
          groupTitle.className = 'speedster-reco-group-title';
          groupTitle.textContent = group.title;

          groupHeader.append(groupImage, groupTitle);
          groupBlock.appendChild(groupHeader);

          const groupList = document.createElement('div');
          groupList.className = 'speedster-reco-group-list';
          ranked.forEach((poke) => {
            groupList.appendChild(createRecommendationCard(poke));
          });
          groupBlock.appendChild(groupList);
          list.appendChild(groupBlock);
        } else {
          ranked.forEach((poke) => {
            list.appendChild(createRecommendationCard(poke));
          });
        }
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

function openBossModalV2(speedster) {
  if (getActiveBossCatalog().variant === 'roleboard') {
    openRoleBossModal(speedster);
    return;
  }

  setBossModalLayout(false);
  // Se abrimos o modal diretamente a partir de um card de speedster,
  // marcar contexto ativo para aplicar promoção de speedster (1.5 -> 2.0)
  if (Array.isArray(speedster?.bossEntries)) {
    activeSpeedsterContextName = String(speedster?.name || '').toLowerCase();
  }
  currentBoss = speedster;
  const bosses = Array.isArray(speedster.bosses) ? speedster.bosses : [{ name: speedster.name, image: speedster.image }];
  const bossNames = bosses.map((boss) => boss.name).join(' + ');
  modalTitle.textContent = bossNames;
  modalSubtitle.textContent = speedster.description || '';

  const modalHeader = modal.querySelector('.speedster-modal-header');
  if (modalHeader) {
    let modalLocationBtn = modalHeader.querySelector('.speedster-modal-location-btn');
    if (!modalLocationBtn) {
      modalLocationBtn = document.createElement('button');
      modalLocationBtn.type = 'button';
      modalLocationBtn.className = 'speedster-modal-location-btn';
      modalLocationBtn.setAttribute('aria-label', 'Ver localização do chefe');
      modalLocationBtn.title = 'Ver localização';
      modalLocationBtn.textContent = '🗺️';
      modalHeader.appendChild(modalLocationBtn);
    }
    modalLocationBtn.onclick = () => showLocationOverlay(basePath + (speedster.locationImage || speedster.image));
  }

  const pokemonImgLeft = document.getElementById('modal-pokemon-img-left');
  const pokemonImgRight = document.getElementById('modal-pokemon-img');
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
  modalBody.classList.remove('speedster-modal-body--split');
  const clansOrder = ['instinct', 'mystic', 'valor'];

  const choiceMap = new Map();
  clansOrder.forEach((clanKey) => {
    const clanData = speedster.clans?.[clanKey];
    getRecommendationGroupsForClan(speedster, clanData).forEach((group) => {
      const choiceId = group.boss?.id || group.title;
      if (!choiceMap.has(choiceId)) {
        choiceMap.set(choiceId, {
          id: choiceId,
          title: group.title,
          bossImage: group.bossImage || speedster.image,
          boss: group.boss || speedster
        });
      }
    });
  });

  const recommendationChoices = Array.from(choiceMap.values());
  let activeChoiceId = recommendationChoices[0]?.id || null;
  const getActiveWeaknessSource = () => {
    if (!recommendationChoices.length) return speedster;
    return recommendationChoices.find((choice) => choice.id === activeChoiceId)?.boss || speedster;
  };
  setModalBossWeaknesses(getActiveWeaknessSource());

  if (recommendationChoices.length > 1) {
    const switcher = document.createElement('div');
    switcher.className = 'speedster-variant-switch';

    const switcherLabel = document.createElement('div');
    switcherLabel.className = 'speedster-variant-switch-label';
    switcherLabel.textContent = 'Escolha qual versão você vai enfrentar';
    switcher.appendChild(switcherLabel);

    const options = document.createElement('div');
    options.className = 'speedster-variant-switch-options';

    recommendationChoices.forEach((choice) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'speedster-variant-btn';
      button.dataset.choiceId = choice.id;
      if (choice.id === activeChoiceId) button.classList.add('is-active');

      const image = document.createElement('img');
      image.className = 'speedster-variant-btn-image';
      image.src = basePath + (choice.bossImage || speedster.image);
      image.alt = choice.title;
      image.loading = 'lazy';

      const text = document.createElement('span');
      text.className = 'speedster-variant-btn-text';
      text.textContent = choice.title;

      button.append(image, text);
      button.addEventListener('click', () => {
        activeChoiceId = choice.id;
        options.querySelectorAll('.speedster-variant-btn').forEach((btn) => {
          btn.classList.toggle('is-active', btn.dataset.choiceId === activeChoiceId);
        });
        setModalBossWeaknesses(getActiveWeaknessSource());
        renderClanSections();
      });
      options.appendChild(button);
    });

    switcher.appendChild(options);
    modalBody.appendChild(switcher);
  }

  const clanGrid = document.createElement('div');
  clanGrid.className = 'speedster-clan-grid';
  modalBody.appendChild(clanGrid);

  function renderClanSections() {
    clanGrid.innerHTML = '';

    clansOrder.forEach((clanKey) => {
      const clanData = speedster.clans?.[clanKey];
      if (!clanData) return;

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

      const groups = getRecommendationGroupsForClan(speedster, clanData);
      const activeGroup = groups.find((group) => (group.boss?.id || group.title) === activeChoiceId) || groups[0];

      if (recommendationChoices.length > 1 && activeGroup) {
        const currentTarget = document.createElement('div');
        currentTarget.className = 'speedster-clan-current-target';

        const targetImage = document.createElement('img');
        targetImage.className = 'speedster-clan-current-target-image';
        targetImage.src = basePath + (activeGroup.bossImage || speedster.image);
        targetImage.alt = activeGroup.title;
        targetImage.loading = 'lazy';

        const targetText = document.createElement('span');
        targetText.textContent = `Picks para ${activeGroup.title}`;

        currentTarget.append(targetImage, targetText);
        section.appendChild(currentTarget);
      }

      const list = document.createElement('div');
      list.className = 'speedster-clan-list';

      if (!activeGroup || !activeGroup.recommended.length) {
        const empty = document.createElement('div');
        empty.className = 'speedster-clan-empty';
        empty.textContent = 'Nenhuma recomendação disponível.';
        list.appendChild(empty);
      } else {
        let ranked = rankRecommendedForBoss(activeGroup.boss, activeGroup.recommended || []);
        // Para bosses marcados com filterSolo, remover picks de tiers pior ou igual a 'red' (ruim)
        if (speedster?.filterSolo) {
          const threshold = tierPriority['red'] ?? tierPriority.red ?? 3;
          ranked = (ranked || []).filter((p) => (tierPriority[p?.tier] ?? tierPriority.unknown) < threshold);
        }
        ranked.forEach((poke) => {
          list.appendChild(createRecommendationCard(poke, { showDescription: false }));
        });
      }

      section.appendChild(list);
      clanGrid.appendChild(section);
    });
  }

  renderClanSections();

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
  setBossModalLayout(false);
  // limpar contexto de speedster ativo ao fechar modal
  activeSpeedsterContextName = null;
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
        try { modalBody.innerHTML = ''; } catch (e) {}
        try { modalBody.classList.remove('speedster-modal-body--search-results'); } catch (e) {}
        try { content.classList.remove('speedster-modal-content--search-results'); } catch (e) {}
        try { modal.removeAttribute('data-mode'); } catch (e) {}
      }
    });
  } else {
    modal.setAttribute('data-open', 'false');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    try { modalBody.innerHTML = ''; } catch (e) {}
    try { modalBody.classList.remove('speedster-modal-body--search-results'); } catch (e) {}
    try { content.classList.remove('speedster-modal-content--search-results'); } catch (e) {}
    try { modal.removeAttribute('data-mode'); } catch (e) {}
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
  img.alt = 'Localização do chefe';

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

document.querySelectorAll('.bosses-mode-btn').forEach((button) => {
  button.addEventListener('click', () => {
    setBossMode(button.dataset.bossMode || 'hoopa');
  });
});

ensureHoopaBossProgressFresh();
scheduleHoopaBossProgressReset();
initPassiveTooltipSystem();
plannerState = loadPlannerStateFromLocation();
try {
  const params = new URLSearchParams(location.search);
  plannerShareFieldVisible = Boolean(params.get('plan'));
  plannerSubpage = params.get('plan') ? 'ready' : 'compose';
} catch {
  plannerShareFieldVisible = false;
  plannerSubpage = 'compose';
}
setBossMode(getInitialBossModeFromLocation(), { render: false });
renderGrid();
