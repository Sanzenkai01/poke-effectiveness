// Edite apenas este bloco diariamente para atualizar o aviso em rolagem do Hoopa.
// `mode` aceita:
// - 'daily': monta "Os Hoopa Portais de hoje sao: ..."
// - 'all-open': mostra "Portal Break! Todos os Hoopas estao disponiveis."
// - 'custom': usa `customMessage` exatamente como foi escrito
// - 'hidden': esconde o aviso
// Em `bosses`, voce pode usar nome ou id do boss.
const hoopaPortalTickerConfig = {
  mode: 'hidden',
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
          { name: 'Alakazam', image: 'alakazam.png', tier: 'excelente', types: ['psychic'], description: 'Tipo move: Psychic.' },
          { name: 'Pikachu', image: 'pikachu.png', tier: 'excelente', types: ['electric'], description: 'Tipo move: Electric.' },
          { name: 'Mega Gardevoir', image: 'mega-gardevoir.png', tier: 'excelente', types: ['psychic','fairy'], description: 'Tipo move: Fairy.' },
          { name: 'Dedenne', image: 'dedenne.png', tier: 'excelente', types: ['electric','fairy'], description: 'Tipo move: Fairy.' },
          { name: 'Mega Raichu Y', image: 'mega-raichu-y.png', tier: 'excelente', types: ['electric'], description: 'Tipo move: Electric.' }
        ]
      },
      mystic: {
        label: 'Mystic',
        recommended: [
          { name: 'Dachsbun', image: 'dachsbun.png', tier: 'excelente', types: ['fairy'], description: 'Tipo move: Fairy.' },
          { name: "Melony's Frosmoth", image: 'frosmoth.png', tier: 'excelente', types: ['ice','bug'], description: 'Tipo move: Ice. Passiva: Ice Scales: Garante resistencia contra Flying e Dragon.', matchupOverrides: { 'mega-staraptor': { defenseByBossType: { fighting: 1, flying: 0.5 } } } },
          { name: 'Mantine', image: 'mantine.png', tier: 'excelente', types: ['water','flying'], description: 'Tipo move: Flying.' },
          { name: 'Mega Starmie', image: 'mega-starmie.png', tier: 'bom', types: ['water','psychic'], description: 'Tipo move: Psychic.' }
        ]
      },
      valor: {
        label: 'Valor',
        recommended: [
          { name: 'Ribombee', image: 'Ribombee.png', tier: 'excelente', types: ['bug','fairy'], description: 'Tipo move: Fairy.' },
          { name: "May's Beautifly", image: 'may-beautifly.png', tier: 'excelente', types: ['bug','flying'], description: 'Tipo move: Flying.' },
          { name: "Farfetch'd", image: 'farfetchd.png', tier: 'excelente', types: ['normal','flying'], description: 'Tipo move: Flying.' },
          { name: 'Gorging Cramorant', image: 'gorging-cramorant.png', tier: 'excelente', types: ['flying','water'], description: 'Tipo move: Water.' }
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
          { name: "Alakazam", image: 'alakazam.png', tier: 'excelente', types: ['psychic'], description: 'Psíquico forte e rápido.' }
        ]
      },
      mystic: {
        label: 'Mystic',
        recommended: [
          { name: 'Dewgong', image: 'dewgong.png', tier: 'excelente', types: ['water','ice'], description: 'Tipo move: Ice.' },
          { name: 'Mantine', image: 'mantine.png', tier: 'excelente', types: ['water','flying'], description: 'Tipo move: Flying.' },
          { name: 'Orthworm', image: 'orthworm.png', tier: 'excelente', types: ['steel'], description: 'Tipo move: Ground.' },
          { name: 'Mega Skarmory', image: 'mega-skarmory.png', tier: 'excelente', types: ['steel','flying'], description: 'Tipo move: Flying.' },
          { name: "Melony's Frosmoth", image: 'frosmoth.png', tier: 'excelente', types: ['ice','bug'], description: 'Tipo move: Ice.' },
          { name: 'Drifloon', image: 'drifloon.png', tier: 'excelente', types: ['ghost','flying'], description: 'Tipo move: Fire.' },
          { name: 'Mega Starmie', image: 'mega-starmie.png', tier: 'bom', types: ['water','psychic'], description: 'Tipo move: Psychic.' }
        ]
      },
      valor: {
        label: 'Valor',
        recommended: [
          { name: "Farfetch'd", image: 'farfetchd.png', tier: 'excelente', types: ['normal','flying'], description: 'Tipo move: Flying.' },
          { name: "May's Beautifly", image: 'may-beautifly.png', tier: 'excelente', types: ['bug','flying'], description: 'Tipo move: Flying.' },
          { name: 'Weavile', image: 'weavile.png', tier: 'excelente', types: ['dark','ice'], description: 'Tipo move: Ice.' },
          { name: 'Delphox', image: 'delphox.png', tier: 'excelente', types: ['fire','psychic'], description: 'Tipo move: Fire.' },
          { name: 'CharizardTwo', image: 'CharizardTwo.png', tier: 'excelente', types: ['fire','flying'], description: 'Tipo move: Fire.' }
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
          { name: 'Lurantis', image: 'lurantis.png', tier: 'excelente', types: ['grass'], description: 'Tipo move: Bug.' },
          { name: 'Dedenne', image: 'dedenne.png', tier: 'excelente', types: ['electric','fairy'], description: 'Tipo move: Fairy.' },
          { name: 'Mega Gardevoir', image: 'mega-gardevoir.png', tier: 'excelente', types: ['psychic','fairy'], description: 'Tipo move: Fairy.' }
        ]
      },
      mystic: {
        label: 'Mystic',
        recommended: [
          { name: 'Dachsbun', image: 'dachsbun.png', tier: 'excelente', types: ['fairy'], description: 'Tipo move: Fairy.' }
        ]
      },
      valor: {
        label: 'Valor',
        recommended: [
          { name: 'Scyther', image: 'scyther.png', tier: 'excelente', types: ['bug','flying'], description: 'Tipo move: Bug.' },
          { name: 'Shiny Scyther', image: 'scyther.png', tier: 'excelente', types: ['bug','flying'], description: 'Tipo move: Bug.' },
          { name: 'Ribombee', image: 'Ribombee.png', tier: 'excelente', types: ['bug','fairy'], description: 'Tipo move: Fairy.' },
          { name: 'Mega Absol Z', image: 'mega-absol-z.png', tier: 'excelente', types: ['dark'], description: 'Tipo move: Fairy.' }
        ]
      }
    }
  },
  {
    id: 'mega-hawlucha',
    name: 'Mega Hawlucha',
    clan: 'mystic',
    clanLabel: 'Mystic',
    image: 'mega-hawlucha.png',
    tutorialUrl: 'https://youtu.be/YHYnuSjlgzo?si=5dCSF9RxOkfweYon',
    locationImage: 'localizações/hawlucha.png',
    description: 'Movimentos de luta e voo para dominar o campo.',
    types: ['fighting','flying'],
    moveType: 'fighting',
    clans: {
      instinct: {
        label: 'Instinct',
        recommended: [
          { name: 'Alakazam', image: 'alakazam.png', tier: 'excelente', types: ['psychic'], description: 'Tipo move: Psychic.' },
          { name: 'Pikachu', image: 'pikachu.png', tier: 'excelente', types: ['electric'], description: 'Tipo move: Electric.' },
          { name: 'Mega Gardevoir', image: 'mega-gardevoir.png', tier: 'excelente', types: ['psychic','fairy'], description: 'Tipo move: Fairy.' },
          { name: 'Dedenne', image: 'dedenne.png', tier: 'excelente', types: ['electric','fairy'], description: 'Tipo move: Fairy.' }
        ]
      },
      mystic: {
        label: 'Mystic',
        recommended: [
          { name: 'Dachsbun', image: 'dachsbun.png', tier: 'excelente', types: ['fairy'], description: 'Tipo move: Fairy.' },
          { name: "Melony's Frosmoth", image: 'frosmoth.png', tier: 'excelente', types: ['ice','bug'], description: 'Tipo move: Ice.' },
          { name: 'Mantine', image: 'mantine.png', tier: 'excelente', types: ['water','flying'], description: 'Tipo move: Flying.' },
          { name: 'Mega Starmie', image: 'mega-starmie.png', tier: 'muitobom', types: ['water','psychic'], description: 'Tipo move: Psychic.' }
        ]
      },
      valor: {
        label: 'Valor',
        recommended: [
          { name: 'Gorging Cramorant', image: 'gorging-cramorant.png', tier: 'excelente', types: ['flying','water'], description: 'Tipo move: Water.' },
          { name: "Farfetch'd", image: 'farfetchd.png', tier: 'excelente', types: ['normal','flying'], description: 'Tipo move: Flying.' },
          { name: "May's Beautifly", image: 'may-beautifly.png', tier: 'excelente', types: ['bug','flying'], description: 'Tipo move: Flying.' },
          { name: 'Ribombee', image: 'Ribombee.png', tier: 'excelente', types: ['bug','fairy'], description: 'Tipo move: Fairy.' }
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
          { name: 'Lurantis', image: 'lurantis.png', tier: 'bom', types: ['grass'], description: 'Tipo move: Bug.' },
          { name: 'Pikachu', image: 'pikachu.png', tier: 'bom', types: ['electric'], description: 'Tipo move: Electric.' },
          { name: 'Shiftry', image: 'shiftry.png', tier: 'excelente', types: ['grass','dark'], description: 'Tipo move: Dark.' },
          { name: 'Mega Sceptile', image: 'mega-sceptile.png', tier: 'bom', types: ['grass','dragon'], description: 'Tipo move: Grass.' },
          { name: "Rosa's Serperior", image: 'serperior.png', tier: 'aceitavel', types: ['grass'], description: 'Tipo move: Grass.' },
          { name: 'Mega Raichu Y', image: 'mega-raichu-y.png', tier: 'bom', types: ['electric'], description: 'Tipo move: Electric.' }
        ]
      },
      mystic: {
        label: 'Mystic',
        recommended: [
          { name: 'Duraludon', image: 'duraludon.png', tier: 'bom', types: ['steel','dragon'], description: 'Tipo move: Electric.' },
          { name: 'Banette', image: 'banette.png', tier: 'bom', types: ['ghost'], description: 'Tipo move: Ghost.' },
          { name: 'Mega Gyarados', image: 'mega-gyarados.png', tier: 'excelente', types: ['water','dark'], description: 'Tipo move: Dark.' },
          { name: 'Lombre', image: 'lombre.png', tier: 'bom', types: ['water','grass'], description: 'Tipo move: Grass.' }
        ]
      },
      valor: {
        label: 'Valor',
        recommended: [
          { name: 'Tauros', image: 'tauros.png', tier: 'bom', types: ['normal'], description: 'Tipo move: Electric.' },
          { name: 'Absol', image: 'absol.png', tier: 'excelente', types: ['dark'], description: 'Tipo move: Dark.' },
          { name: 'Scyther', image: 'scyther.png', tier: 'bom', types: ['bug','flying'], description: 'Tipo move: Bug.' },
          { name: 'Shiny Scyther', image: 'scyther.png', tier: 'bom', types: ['bug','flying'], description: 'Tipo move: Bug.' },
          { name: 'Mega Houndoom', image: 'mega-houndoom.png', tier: 'excelente', types: ['dark','fire'], description: 'Tipo move: Dark.' },
          { name: 'Raticate', image: 'raticate.png', tier: 'bom', types: ['normal'], description: 'Tipo move: Dark.' },
          { name: 'Pyroar Female', image: 'pyroar-female.png', tier: 'bom', types: ['fire','normal'], description: 'Tipo move: Grass.' }
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
          { name: 'Lurantis', image: 'lurantis.png', tier: 'excelente', types: ['grass'], description: 'Tipo move: Bug.' },
          { name: 'Pikachu', image: 'pikachu.png', tier: 'excelente', types: ['electric'], description: 'Tipo move: Electric.' },
          { name: 'VenusaurTwo', image: 'VenusaurTwo.png', tier: 'excelente', types: ['grass','poison'], description: 'Tipo move: Grass.' },
          { name: 'Mega Sceptile', image: 'mega-sceptile.png', tier: 'excelente', types: ['grass','dragon'], description: 'Tipo move: Grass.' },
          { name: 'Mega Gardevoir', image: 'mega-gardevoir.png', tier: 'excelente', types: ['psychic','fairy'], description: 'Tipo move: Fairy.' },
          { name: 'Dedenne', image: 'dedenne.png', tier: 'excelente', types: ['electric','fairy'], description: 'Tipo move: Fairy.' },
          { name: "Rosa's Serperior", image: 'serperior.png', tier: 'bom', types: ['grass'], description: 'Tipo move: Grass.' },
          { name: 'Mega Raichu X', image: 'mega-raichu-x.png', tier: 'excelente', types: ['electric','fighting'], description: 'Tipo move: Fighting.' }
        ]
      },
      mystic: {
        label: 'Mystic',
        recommended: [
          { name: 'Dachsbun', image: 'dachsbun.png', tier: 'excelente', types: ['fairy'], description: 'Tipo move: Fairy.' },
          { name: 'Lombre', image: 'lombre.png', tier: 'excelente', types: ['water','grass'], description: 'Tipo move: Grass.' },
          { name: 'Hawlucha', image: 'hawlucha.png', tier: 'excelente', types: ['fighting','flying'], description: 'Tipo move: Fighting.' },
          { name: 'Mega Hawlucha', image: 'mega-hawlucha.png', tier: 'excelente', types: ['fighting','flying'], description: 'Tipo move: Fighting.' },
          { name: 'Duraludon', image: 'duraludon.png', tier: 'excelente', types: ['steel','dragon'], description: 'Tipo move: Electric.' }
        ]
      },
      valor: {
        label: 'Valor',
        recommended: [
          { name: 'Scyther', image: 'scyther.png', tier: 'excelente', types: ['bug','flying'], description: 'Tipo move: Bug.' },
          { name: 'Shiny Scyther', image: 'scyther.png', tier: 'excelente', types: ['bug','flying'], description: 'Tipo move: Bug.' },
          { name: 'Tauros', image: 'tauros.png', tier: 'excelente', types: ['normal'], description: 'Tipo move: Electric.' },
          { name: 'Pyroar Female', image: 'pyroar-female.png', tier: 'excelente', types: ['fire','normal'], description: 'Tipo move: Grass.' }
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
          { name: 'Alakazam', image: 'alakazam.png', tier: 'excelente', types: ['psychic'], description: 'Tipo move: Psychic.' },
          { name: 'Mega Gardevoir', image: 'mega-gardevoir.png', tier: 'excelente', types: ['psychic','fairy'], description: 'Tipo move: Fairy.' },
          { name: 'Dedenne', image: 'dedenne.png', tier: 'excelente', types: ['electric','fairy'], description: 'Tipo move: Fairy.' },
          { name: 'Seviper', image: 'seviper.png', tier: 'excelente', types: ['poison'], description: 'Tipo move: Poison.' }
        ]
      },
      mystic: {
        label: 'Mystic',
        recommended: [
          { name: 'Dewgong', image: 'dewgong.png', tier: 'excelente', types: ['water','ice'], description: 'Tipo move: Ice.' },
          { name: 'Qwilfish', image: 'qwilfish.png', tier: 'excelente', types: ['water','poison'], description: 'Tipo move: Poison.' },
          { name: 'Drifloon', image: 'drifloon.png', tier: 'excelente', types: ['ghost','flying'], description: 'Tipo move: Fire.' },
          { name: 'Dachsbun', image: 'dachsbun.png', tier: 'excelente', types: ['fairy'], description: 'Tipo move: Fairy.' },
          { name: "Melony's Frosmoth", image: 'frosmoth.png', tier: 'excelente', types: ['ice','bug'], description: 'Tipo move: Ice.' },
          { name: 'Mantine', image: 'mantine.png', tier: 'excelente', types: ['water','flying'], description: 'Tipo move: Flying.' },
          { name: 'Mega Skarmory', image: 'mega-skarmory.png', tier: 'excelente', types: ['steel','flying'], description: 'Tipo move: Flying.' }
        ]
      },
      valor: {
        label: 'Valor',
        recommended: [
          { name: "Farfetch'd", image: 'farfetchd.png', tier: 'excelente', types: ['normal','flying'], description: 'Tipo move: Flying.' },
          { name: 'Delphox', image: 'delphox.png', tier: 'excelente', types: ['fire','psychic'], description: 'Tipo move: Fire.' },
          { name: 'CharizardTwo', image: 'CharizardTwo.png', tier: 'excelente', types: ['fire','flying'], description: 'Tipo move: Fire.' },
          { name: 'Weavile', image: 'weavile.png', tier: 'excelente', types: ['dark','ice'], description: 'Tipo move: Ice.' },
          { name: 'May\'s Beautifly', image: 'may-beautifly.png', tier: 'excelente', types: ['bug','flying'], description: 'Tipo move: Flying.' }
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
          { name: 'Marowak', image: 'marowak.png', tier: 'excelente', types: ['ground'], description: 'Tipo move: Ground.' }
        ]
      },
      mystic: {
        label: 'Mystic',
        recommended: [
          { name: 'Banette', image: 'banette.png', tier: 'excelente', types: ['ghost'], description: 'Tipo move: Ghost.' },
          { name: 'BlastoiseTwo', image: 'BlastoiseTwo.png', tier: 'excelente', types: ['water'], description: 'Tipo move: Water.' },
          { name: 'Greninja', image: 'greninja.png', tier: 'excelente', types: ['water','dark'], description: 'Tipo move: Water.' },
          { name: 'Mega Gyarados', image: 'mega-gyarados.png', tier: 'excelente', types: ['water','dark'], description: 'Tipo move: Dark.' },
          { name: 'Seaking', image: 'seaking.png', tier: 'excelente', types: ['water'], immunities: ['electric'], description: 'Tipo move: Ground.' }
        ]
      },
      valor: {
        label: 'Valor',
        recommended: [
          { name: 'Bouffalant', image: 'bouffalant.png', tier: 'excelente', types: ['normal'], description: 'Tipo move: Ground.' },
          { name: 'Absol', image: 'absol.png', tier: 'excelente', types: ['dark'], description: 'Tipo move: Dark.' },
          { name: 'Mega Absol Z', image: 'mega-absol-z.png', tier: 'excelente', types: ['dark'], description: 'Tipo move: Fairy.' },
          { name: 'Kabutops', image: 'kabutops.png', tier: 'excelente', types: ['rock','water'], description: 'Tipo move: Rock.' },
          { name: 'Gorging Cramorant', image: 'gorging-cramorant.png', tier: 'excelente', types: ['flying','water'], description: 'Tipo move: Water.' },
          { name: 'Raticate', image: 'raticate.png', tier: 'bom', types: ['normal'], description: 'Tipo move: Dark.' },
          { name: 'Mega Houndoom', image: 'mega-houndoom.png', tier: 'excelente', types: ['dark','fire'], description: 'Tipo move: Dark.' }
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
          { name: 'Alakazam', image: 'alakazam.png', tier: 'excelente', types: ['psychic'], description: 'Tipo move: Psychic.' },
          { name: 'Marowak', image: 'marowak.png', types: ['ground'], description: 'Tipo move: Ground.', matchupOverrides: { 'mega-scolipede': { defenseByBossType: { poison: 0.5 } } } }
        ]
      },
      mystic: {
        label: 'Mystic',
        recommended: [
          { name: 'Drifloon', image: 'drifloon.png', tier: 'excelente', types: ['ghost','flying'], description: 'Tipo move: Fire.' },
          { name: 'Mega Skarmory', image: 'mega-skarmory.png', tier: 'excelente', types: ['steel','flying'], description: 'Tipo move: Flying.' },
          { name: 'Mega Starmie', image: 'mega-starmie.png', tier: 'bom', types: ['water','psychic'], description: 'Tipo move: Psychic.' },
          { name: 'Mantine', image: 'mantine.png', tier: 'excelente', types: ['water','flying'], description: 'Tipo move: Flying.' }
        ]
      },
      valor: {
        label: 'Valor',
        recommended: [
          { name: 'Delphox', image: 'delphox.png', tier: 'excelente', types: ['fire','psychic'], description: 'Tipo move: Fire.' },
          { name: 'CharizardTwo', image: 'CharizardTwo.png', tier: 'excelente', types: ['fire','flying'], description: 'Tipo move: Fire.' },
          { name: "Farfetch'd", image: 'farfetchd.png', tier: 'excelente', types: ['normal','flying'], description: 'Tipo move: Flying.' },
          { name: "May's Beautifly", image: 'may-beautifly.png', tier: 'excelente', types: ['bug','flying'], description: 'Tipo move: Flying.' },
          { name: 'Kabutops', image: 'kabutops.png', tier: 'excelente', types: ['rock','water'], description: 'Tipo move: Rock.' }
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
          { name: 'Seviper', image: 'seviper.png', tier: 'excelente', types: ['poison'], description: 'Tipo move: Poison.' }
        ]
      },
      mystic: {
        label: 'Mystic',
        recommended: [
          { name: 'Mantine', image: 'mantine.png', tier: 'excelente', types: ['water','flying'], description: 'Tipo move: Flying.' },
          { name: 'Drifloon', image: 'drifloon.png', tier: 'excelente', types: ['ghost','flying'], description: 'Tipo move: Fire.' },
          { name: 'Qwilfish', image: 'qwilfish.png', tier: 'excelente', types: ['water','poison'], description: 'Tipo move: Poison.' },
          { name: "Melony's Frosmoth", image: 'frosmoth.png', tier: 'excelente', types: ['ice','bug'], description: 'Tipo move: Ice.' },
          { name: 'Mega Skarmory', image: 'mega-skarmory.png', tier: 'excelente', types: ['steel','flying'], description: 'Tipo move: Flying.' }
        ]
      },
      valor: {
        label: 'Valor',
        recommended: [
          { name: 'Bouffalant', image: 'bouffalant.png', tier: 'excelente', types: ['normal'], description: 'Tipo move: Ground.' },
          { name: "Farfetch'd", image: 'farfetchd.png', tier: 'excelente', types: ['normal','flying'], description: 'Tipo move: Flying.' },
          { name: 'Delphox', image: 'delphox.png', tier: 'excelente', types: ['fire','psychic'], description: 'Tipo move: Fire.' },
          { name: 'CharizardTwo', image: 'CharizardTwo.png', tier: 'excelente', types: ['fire','flying'], description: 'Tipo move: Fire.' },
          { name: 'Scolipede', image: 'scolipede.png', tier: 'excelente', types: ['bug','poison'], description: 'Tipo move: Poison.' },
          { name: "May's Beautifly", image: 'may-beautifly.png', tier: 'excelente', types: ['bug','flying'], description: 'Tipo move: Flying.' }
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
          { name: 'Mega Gardevoir', image: 'mega-gardevoir.png', tier: 'excelente', types: ['psychic','fairy'], description: 'Tipo move: Fairy.' },
          { name: 'Dragonair', image: 'dragonair.png', tier: 'excelente', types: ['dragon'], description: 'Tipo move: Dragon. Passiva: Marvel Scale: O Pokémon sofre menos dano de ataques super efetivos (0.5x).' },
          { name: 'Dedenne', image: 'dedenne.png', tier: 'excelente', types: ['electric','fairy'], description: 'Tipo move: Fairy.' },
          { name: "Rosa's Serperior", image: 'serperior.png', tier: 'aceitavel', types: ['grass'], description: 'Tipo move: Grass.' }
        ]
      },
      mystic: {
        label: 'Mystic',
        recommended: [
          { name: 'Mega Feraligatr', image: 'mega-feraligatr.png', tier: 'excelente', types: ['water','dragon'], description: 'Tipo move: Dragon.' },
          { name: 'Kingdra', image: 'kingdra.png', tier: 'excelente', types: ['water','dragon'], description: 'Tipo move: Dragon.' },
          { name: 'Dachsbun', image: 'dachsbun.png', tier: 'excelente', types: ['fairy'], description: 'Tipo move: Fairy.' }
        ]
      },
      valor: {
        label: 'Valor',
        recommended: [
          { name: 'Mega Absol Z', image: 'mega-absol-z.png', tier: 'excelente', types: ['dark'], description: 'Tipo move: Fairy.' },
          { name: 'Ribombee', image: 'Ribombee.png', tier: 'excelente', types: ['bug','fairy'], description: 'Tipo move: Fairy.' }
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
          { name: 'Mega Raichu Y', image: 'mega-raichu-y.png', tier: 'excelente', types: ['electric'], description: 'Tipo move: Electric.' },
          { name: 'Excadrill', image: 'excadrill.png', tier: 'excelente', types: ['ground','steel'], description: 'Tipo move: Steel. Passiva: dano super efetivo em Steel.', passiveSuperEffectiveTypes: ['steel'] },
          { name: 'Seviper', image: 'seviper.png', tier: 'excelente', types: ['poison'], description: 'Tipo move: Poison.' },
          { name: 'Pikachu', image: 'pikachu.png', tier: 'excelente', types: ['electric'], description: 'Tipo move: Electric.' }
        ]
      },
      mystic: {
        label: 'Mystic',
        recommended: [
          { name: 'Mega Lucario Z', image: 'mega-lucario-z.png', tier: 'excelente', types: ['fighting','steel'], description: 'Tipo move: Steel.' },
          { name: 'Qwilfish', image: 'qwilfish.png', tier: 'excelente', types: ['water','poison'], description: 'Tipo move: Poison.' },
          { name: 'Dewgong', image: 'dewgong.png', tier: 'excelente', types: ['water','ice'], description: 'Tipo move: Ice.' },
          { name: "Melony's Frosmoth", image: 'frosmoth.png', tier: 'excelente', types: ['ice','bug'], description: 'Tipo move: Ice.' },
          { name: 'Duraludon', image: 'duraludon.png', tier: 'excelente', types: ['steel','dragon'], description: 'Tipo move: Electric.' }
        ]
      },
      valor: {
        label: 'Valor',
        recommended: [
          { name: 'Scolipede', image: 'scolipede.png', tier: 'excelente', types: ['bug','poison'], description: 'Tipo move: Poison.' },
          { name: 'Mega Scizor', image: 'mega-scizor.png', tier: 'excelente', types: ['bug','steel'], description: 'Tipo move: Steel.' },
          { name: 'Gorging Cramorant', image: 'gorging-cramorant.png', tier: 'excelente', types: ['flying','water'], description: 'Tipo move: Water.' },
          { name: 'Kabutops', image: 'kabutops.png', tier: 'excelente', types: ['rock','water'], description: 'Tipo move: Rock.' },
          { name: 'Tauros', image: 'tauros.png', tier: 'excelente', types: ['normal'], description: 'Tipo move: Electric.' }
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
          { name: 'Pikachu', image: 'pikachu.png', tier: 'excelente', types: ['electric'], description: 'Tipo move: Electric.' },
          { name: 'Mega Raichu Y', image: 'mega-raichu-y.png', tier: 'excelente', types: ['electric'], description: 'Tipo move: Electric.' },
          {
            name: 'Excadrill',
            image: 'excadrill.png',
            tier: 'muitobom',
            types: ['ground','steel'],
            description: 'Tipo move: Steel. Passiva: Mold Breaker: O Pokemon ignora completamente as defesas do Pokemon adversario quebrando os moldes de sua resistencia. Excadrill causa dano super efetivo ao tipo STEEL.',
            passiveName: 'Mold Breaker',
            passiveDescription: 'O Pokemon ignora completamente as defesas do Pokemon adversario quebrando os moldes de sua resistencia. Excadrill causa dano super efetivo ao tipo STEEL.',
            passiveSuperEffectiveTypes: ['steel']
          }
        ]
      },
      mystic: {
        label: 'Mystic',
        recommended: [
          { name: 'Drifloon', image: 'drifloon.png', tier: 'excelente', types: ['ghost','flying'], description: 'Tipo move: Fire.' },
          { name: 'Duraludon', image: 'duraludon.png', tier: 'excelente', types: ['steel','dragon'], description: 'Tipo move: Electric.' },
          { name: 'Mega Lucario Z', image: 'mega-lucario-z.png', tier: 'excelente', types: ['fighting','steel'], description: 'Tipo move: Steel.' }
        ]
      },
      valor: {
        label: 'Valor',
        recommended: [
          { name: 'Delphox', image: 'delphox.png', tier: 'excelente', types: ['fire','psychic'], description: 'Tipo move: Fire.' },
          { name: 'CharizardTwo', image: 'CharizardTwo.png', tier: 'excelente', types: ['fire','flying'], description: 'Tipo move: Fire.' },
          { name: 'Gorging Cramorant', image: 'gorging-cramorant.png', tier: 'excelente', types: ['flying','water'], description: 'Tipo move: Water.' }
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
          { name: 'Marowak', image: 'marowak.png', tier: 'excelente', types: ['ground'], description: 'Tipo move: Ground.' },
          { name: 'Excadrill', image: 'excadrill.png', tier: 'excelente', types: ['ground','steel'], description: 'Tipo move: Steel.' }
        ]
      },
      mystic: {
        label: 'Mystic',
        recommended: [
          { name: 'Orthworm', image: 'orthworm.png', tier: 'excelente', types: ['steel'], description: 'Tipo move: Ground.' },
          { name: 'Seaking', image: 'seaking.png', tier: 'excelente', types: ['water'], immunities: ['electric'], description: 'Tipo move: Ground.' }
        ]
      },
      valor: {
        label: 'Valor',
        recommended: [
          { name: 'Bouffalant', image: 'bouffalant.png', tier: 'excelente', types: ['normal'], description: 'Tipo move: Ground.' }
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
          { name: 'Marowak', image: 'marowak.png', tier: 'excelente', types: ['ground'], description: 'Tipo move: Ground.' },
          { name: 'Mega Raichu X', image: 'mega-raichu-x.png', tier: 'excelente', types: ['electric','fighting'], description: 'Tipo move: Fighting.' }
        ]
      },
      mystic: {
        label: 'Mystic',
        recommended: [
          { name: 'Seaking', image: 'seaking.png', tier: 'excelente', types: ['water'], immunities: ['electric'], description: 'Tipo move: Ground.' },
          { name: 'Drifloon', image: 'drifloon.png', tier: 'excelente', types: ['ghost','flying'], description: 'Tipo move: Fire.' },
          { name: 'Hawlucha', image: 'hawlucha.png', tier: 'excelente', types: ['fighting','flying'], description: 'Tipo move: Fighting.' }
        ]
      },
      valor: {
        label: 'Valor',
        recommended: [
          { name: 'Delphox', image: 'delphox.png', tier: 'excelente', types: ['fire','psychic'], description: 'Tipo move: Fire.' },
          { name: 'CharizardTwo', image: 'CharizardTwo.png', tier: 'excelente', types: ['fire','flying'], description: 'Tipo move: Fire.' }
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
    description: 'Mega Absol sofre dano super efetivo de Fairy, Fighting e Bug. Mega Absol Z sofre dano super efetivo apenas de Fairy.',
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
              { name: 'Lurantis', image: 'lurantis.png', tier: 'excelente', types: ['grass'], moveType: 'bug', description: 'Tipo move: Bug.' },
              { name: 'Dedenne', image: 'dedenne.png', tier: 'excelente', types: ['electric','fairy'], moveType: 'fairy', description: 'Tipo move: Fairy.' },
              { name: 'Mega Gardevoir', image: 'mega-gardevoir.png', tier: 'excelente', types: ['psychic','fairy'], moveType: 'fairy', description: 'Tipo move: Fairy.' },
              { name: 'Mega Raichu X', image: 'mega-raichu-x.png', tier: 'excelente', types: ['electric','fighting'], moveType: 'fighting', description: 'Tipo move: Fighting.' }
            ]
          },
          {
            title: 'Mega Absol Z',
            bossId: 'mega-absol-z',
            bossTypes: ['dark'],
            bossImmunities: ['bug', 'fighting'],
            recommended: [
              { name: 'Dedenne', image: 'dedenne.png', tier: 'excelente', types: ['electric','fairy'], moveType: 'fairy', description: 'Tipo move: Fairy.' },
              { name: 'Mega Gardevoir', image: 'mega-gardevoir.png', tier: 'excelente', types: ['psychic','fairy'], moveType: 'fairy', description: 'Tipo move: Fairy.' }
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
              { name: 'Dachsbun', image: 'dachsbun.png', tier: 'excelente', types: ['fairy'], moveType: 'fairy', description: 'Tipo move: Fairy.' },
              { name: 'Hawlucha', image: 'hawlucha.png', tier: 'excelente', types: ['fighting','flying'], moveType: 'fighting', description: 'Tipo move: Fighting.' }
            ]
          },
          {
            title: 'Mega Absol Z',
            bossId: 'mega-absol-z',
            bossTypes: ['dark'],
            bossImmunities: ['bug', 'fighting'],
            recommended: [
              { name: 'Dachsbun', image: 'dachsbun.png', tier: 'excelente', types: ['fairy'], moveType: 'fairy', description: 'Tipo move: Fairy.' }
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
              { name: 'Scyther', image: 'scyther.png', tier: 'excelente', types: ['bug','flying'], moveType: 'bug', description: 'Tipo move: Bug.' },
              { name: 'Shiny Scyther', image: 'scyther.png', tier: 'excelente', types: ['bug','flying'], moveType: 'bug', description: 'Tipo move: Bug.' },
              { name: 'Mega Absol Z', image: 'mega-absol-z.png', tier: 'excelente', types: ['dark'], moveType: 'fairy', description: 'Tipo move: Fairy.' },
              { name: 'Ribombee', image: 'Ribombee.png', tier: 'excelente', types: ['bug','fairy'], moveType: 'fairy', description: 'Tipo move: Fairy.' }
            ]
          },
          {
            title: 'Mega Absol Z',
            bossId: 'mega-absol-z',
            bossTypes: ['dark'],
            bossImmunities: ['bug', 'fighting'],
            recommended: [
              { name: 'Mega Absol Z', image: 'mega-absol-z.png', tier: 'excelente', types: ['dark'], moveType: 'fairy', description: 'Tipo move: Fairy.' },
              { name: 'Ribombee', image: 'Ribombee.png', tier: 'excelente', types: ['bug','fairy'], moveType: 'fairy', description: 'Tipo move: Fairy.' }
            ]
          }
        ]
      }
    }
  },
  {
    id: 'mega-chimecho',
    name: 'Mega Chimecho',
    clan: 'instinct',
    clanLabel: 'Instinct',
    image: 'mega-chimeco.png',
    tutorialUrl: 'https://www.youtube.com/watch?v=kUKD74wWauQ',
    locationImage: 'localizações/chimecho.png',
    description: 'Boss Psychic e Steel com moveset Steel. Priorize speedsters Dark, Ghost e picks com passiva contra Steel.',
    types: ['psychic','steel'],
    moveType: 'steel',
    clans: {
      instinct: {
        label: 'Instinct',
        recommended: [
          { name: 'Excadrill', image: 'excadrill.png', tier: 'excelente', types: ['ground','steel'], description: 'Tipo move: Steel. Passiva: dano super efetivo em Steel.', passiveSuperEffectiveTypes: ['steel'] },
          { name: 'Shiftry', image: 'shiftry.png', tier: 'excelente', types: ['grass','dark'], description: 'Tipo move: Dark.' },
          { name: 'Lurantis', image: 'lurantis.png', tier: 'bom', types: ['grass'], description: 'Tipo move: Bug.' }
        ]
      },
      mystic: {
        label: 'Mystic',
        recommended: [
          { name: 'Mega Gyarados', image: 'mega-gyarados.png', tier: 'excelente', types: ['water','dark'], description: 'Tipo move: Dark.' },
          { name: 'Banette', image: 'banette.png', tier: 'bom', types: ['ghost'], description: 'Tipo move: Ghost.' }
        ]
      },
      valor: {
        label: 'Valor',
        recommended: [
          { name: 'Absol', image: 'absol.png', tier: 'excelente', types: ['dark'], description: 'Tipo move: Dark.' },
          { name: 'Mega Houndoom', image: 'mega-houndoom.png', tier: 'excelente', types: ['dark','fire'], description: 'Tipo move: Dark.' },
          { name: 'Mega Absol Z', image: 'mega-absol-z.png', tier: 'excelente', types: ['dark'], description: 'Tipo move: Dark.' },
          { name: 'Weavile', image: 'weavile.png', tier: 'excelente', types: ['dark','ice'], description: 'Tipo move: Ice.' },
          { name: 'Scyther', image: 'scyther.png', tier: 'bom', types: ['bug','flying'], description: 'Tipo move: Bug.' },
          { name: 'Shiny Scyther', image: 'scyther.png', tier: 'bom', types: ['bug','flying'], description: 'Tipo move: Bug.' }
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
const mainQuestNonSpeedsterNameKeys = Object.freeze(new Set([
  'gorgingcramorant',
  'lombre',
  'lurantis',
  'ribombee'
]));

function syncSharedModalOpenState() {
  if (!document.body) return;
  const hasOpenBasicModal = Boolean(document.querySelector('.modal[aria-hidden="false"]'));
  const isBossModalOpen = modal?.getAttribute('data-open') === 'true';
  document.body.classList.toggle('modal-open', hasOpenBasicModal || isBossModalOpen);
}

function setModalSubtitleText(text = '') {
  if (!modalSubtitle) return;
  const normalizedText = typeof text === 'string' ? text.trim() : '';
  modalSubtitle.textContent = normalizedText;
  modalSubtitle.hidden = !normalizedText;
}

function invalidateBossSearchCaches() {
  bossSearchRecommendedCache.clear();
  bossSearchAvailableCache.clear();
}

function setBossModalLayout(isRoleboard = false) {
  const content = modal?.querySelector('.speedster-modal-content');
  if (!content) return;
  content.classList.toggle('speedster-modal-content--roleboard', Boolean(isRoleboard));
}

const speedsterSearchInput = document.getElementById('speedster-search');
const speedsterSearchResults = document.getElementById('speedster-search-results');
const speedsterSearchNoResults = document.getElementById('speedster-search-no-results');
const bossSearchCatalogRoleMap = Object.freeze({
  speedster: 'dps',
  defender: 'tank',
  supporter: 'support'
});
let bossSearchCatalogEntries = [];
let bossSearchCatalogLoadPromise = null;
let bossSearchCatalogVersion = 0;
let bossSearchRecommendedCache = new Map();
let bossSearchAvailableCache = new Map();
let bossSearchRenderFrame = 0;
const BOSS_SEARCH_RENDER_LIMIT_DEFAULT = 24;
const BOSS_SEARCH_RENDER_LIMIT_QUERY = 48;
const BOSS_SEARCH_MODAL_RENDER_LIMIT = 36;

let currentBoss = null;
let activeBossMode = 'hoopa';
let bossModalHistoryPushed = false;
let activeBossSearchResult = null;
let activeLocationBoss = null;
let locationOverlayHistoryPushed = false;
let locationOverlayPreviousUrl = '';
let activeBossTutorialBoss = null;
let bossTutorialHistoryPushed = false;
let bossTutorialPreviousUrl = '';
let mainQuestPuzzleZoomScale = 1;
const mainQuestPuzzleImages = Object.freeze([
  { src: '/mainquest/puzzle1.png', label: 'Quebra-cabeça 1' },
  { src: '/mainquest/puzzle2.png', label: 'Quebra-cabeça 2' },
  { src: '/mainquest/puzzle3.png', label: 'Quebra-cabeça 3' }
]);
const MAIN_QUEST_TEAM_MEMBER_STORAGE_KEY = 'mainQuestTeamMemberChecklistV1';
const mainQuestTeamMemberItems = Object.freeze([
  { id: 'bug', type: 'Bug', amount: 750 },
  { id: 'dark', type: 'Dark', amount: 750 },
  { id: 'fire', type: 'Fire', amount: 750 },
  { id: 'normal', type: 'Normal', amount: 750 },
  { id: 'rock', type: 'Rock', amount: 750 },
  { id: 'steel', type: 'Steel', amount: 750 },
  { id: 'water', type: 'Water', amount: 750 },
  { id: 'fairy', type: 'Fairy', amount: 750 },
  { id: 'ghost', type: 'Ghost', amount: 750 },
  { id: 'ice', type: 'Ice', amount: 750 },
  { id: 'fighting', type: 'Fighting', amount: 750 },
  { id: 'electric', type: 'Electric', amount: 750 },
  { id: 'grass', type: 'Grass', amount: 750 },
  { id: 'psychic', type: 'Psychic', amount: 750 },
  { id: 'ground', type: 'Ground', amount: 750 },
  { id: 'poison', type: 'Poison', amount: 750 }
]);
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

function getRoleboardRoleDisplayLabel(roleKey, mode = activeBossMode) {
  const normalizedRoleKey = String(roleKey || '').trim().toLowerCase();
  if (String(mode || '').trim().toLowerCase() === 'mainquest' && normalizedRoleKey === 'dps') {
    return 'Speedster';
  }
  if (String(mode || '').trim().toLowerCase() === 'horizons' && normalizedRoleKey === 'dps') {
    return 'Speedster';
  }
  return roleboardRoleLabels[normalizedRoleKey] || normalizedRoleKey;
}

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
    cardTags: Array.isArray(entry.cardTags) ? entry.cardTags : [],
    pokeblock: cloneBossConsumableConfig(entry.pokeblock || entry.pokebloc),
    ration: cloneBossConsumableConfig(entry.ration),
    disableAutoPokeblock: Boolean(entry.disableAutoPokeblock),
    automaticRoleLimits: entry.automaticRoleLimits && typeof entry.automaticRoleLimits === 'object'
      ? { ...entry.automaticRoleLimits }
      : null,
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
  blastoisetwo: 'BlastoiseTwo.png',
  charizardtwo: 'CharizardTwo.png',
  gorgingcramorant: 'gorging-cramorant.png',
  drifloon: 'drifloon.png',
  megadelphox: 'megadelphox.png',
  megagreninja: 'megagreninja.png',
  shinybanette: 'banette.png',
  megascizor: 'mega-scizor.png',
  shinybronzong: 'bronzong.png',
  shinysableye: 'sableye.png',
  shinyscyther: 'scyther.png',
  ribombee: 'Ribombee.png',
  venusaurtwo: 'VenusaurTwo.png'
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

  if (extra.defenseDamageFactorByBossType && typeof extra.defenseDamageFactorByBossType === 'object') {
    pick.defenseDamageFactorByBossType = mergeLowercaseNumericMap(extra.defenseDamageFactorByBossType);
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
  const support = assignRecommendationRoleToList(
    Array.isArray(roles.support) ? roles.support : [],
    'support'
  );
  const dps = assignRecommendationRoleToList(
    Array.isArray(roles.dps) ? roles.dps : [],
    'dps'
  );
  const tank = assignRecommendationRoleToList(
    Array.isArray(roles.tank) ? roles.tank : [],
    'tank'
  );

  return {
    label,
    summary: roleboardClanSummaries[clanKey]?.[catalogId] || '',
    roles: {
      support,
      dps,
      tank
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
    cardTags: Array.isArray(entry.cardTags) ? entry.cardTags : [],
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
          createRolePick("Rosa's Serperior", ['grass'], 'grass', { tier: 'muitobom', matchupOverrides: { 'mega-tyranitar': { offense: 2, defenseByBossType: { ground: 0.5 } } } })
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
          createRolePick('Gorging Cramorant', ['flying', 'water'], 'water'),
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
          createRolePick('Gorging Cramorant', ['flying', 'water'], 'water')
        ],
        tank: [
          createRolePick('Onix', ['rock', 'ground'], 'rock'),
          createRolePick('Shieldon', ['rock', 'steel'], 'rock'),
          createRolePick('Bastiodon', ['rock', 'steel'], 'steel'),
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
          createRolePick('Wobbuffet', ['psychic'], 'psychic'),
          createRolePick('Claydol', ['ground', 'psychic'], 'ground'),
          createRolePick('Magnezone', ['electric', 'steel'], 'steel')
        ],
        support: [
          createRolePick('Wynaut', ['psychic'], 'psychic'),
          createRolePick('Kadabra', ['psychic'], 'psychic'),
          createRolePick('Pachirisu', ['electric'], 'electric')
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
          createRolePick('Raticate', ['normal'], 'dark'),
          createRolePick('Mega Houndoom', ['dark', 'fire'], 'dark'),
          // Lopunny é suporte — removida de DPS
        ],
        tank: [
          createRolePick('Orbeetle', ['bug', 'psychic'], 'psychic'),
          createRolePick('Sableye', ['dark', 'ghost'], 'dark', { note: 'Dark ou Ghost.' })
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
          createRolePick('Gorging Cramorant', ['flying', 'water'], 'water')
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
          createRolePick('Gorging Cramorant', ['flying', 'water'], 'water'),
          createRolePick('Raticate', ['normal'], 'dark'),
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
          createRolePick('Banette', ['ghost'], 'ghost'),
          createRolePick('Drifloon', ['ghost', 'flying'], 'ghost'),
          createRolePick('Hawlucha', ['fighting', 'flying'], 'fighting'),
          createRolePick('Mega Hawlucha', ['fighting', 'flying'], 'fighting'),
          createRolePick('Mega Lucario', ['fighting', 'steel'], 'fighting'),
          createRolePick('Mega Lucario Z', ['fighting', 'steel'], 'fighting')
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
          createRolePick('Shuckle', ['bug', 'rock'], 'rock'),
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
          createRolePick('Excadrill', ['ground', 'steel'], 'steel', {
            passiveName: 'Mold Breaker',
            passiveDescription: 'O Pokemon ignora completamente as defesas do Pokemon adversario quebrando os moldes de sua resistencia. Excadrill causa dano super efetivo ao tipo STEEL.',
            passiveSuperEffectiveTypes: ['steel']
          }),
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
    types: ['steel'],
    moveType: 'steel',
    comingSoon: true,
    filterSolo: true,
    description: 'Chefe puro Metal que recompensa picks com supereficacia Ground, Fighting e Fire.',
    clans: {
      instinct: {
        dps: [
          createRolePick('Excadrill', ['ground', 'steel'], 'steel'),
          createRolePick('Mega Raichu X', ['electric', 'fighting'], 'fighting'),
          createRolePick('Mega Raichu Y', ['electric'], 'electric')
        ],
        tank: [
          createRolePick('Magnezone', ['electric', 'steel'], 'electric'),
          createRolePick('Claydol', ['ground', 'psychic'], 'ground')
        ],
        support: [
          createRolePick('Pachirisu', ['electric'], 'electric')
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
          createRolePick('CharizardTwo', ['fire', 'flying'], 'fire'),
          createRolePick('Delphox', ['fire', 'psychic'], 'fire'),
          createRolePick('Mega Delphox', ['fire', 'psychic'], 'fire')
        ],
        tank: [
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
          createRolePick('Goodra', ['dragon'], 'water'),
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

const horizonsMediumSideABosses = createManualRoleboardBosses([
  {
    id: 'alolan-golem',
    name: 'Alolan Golem',
    image: 'pokemons/7gen/alolan-golem.png',
    types: ['rock', 'electric'],
    moveType: 'electric',
    description: 'Boss do Lado A no Medio. O moveset Electric valoriza imunidade ou resistencia eletrica.',
    clans: {
      instinct: {
        dps: [
          createRolePick('Excadrill', ['ground', 'steel'], 'steel'),
          createRolePick('Marowak', ['ground'], 'ground'),
          createRolePick('Mega Sceptile', ['grass', 'dragon'], 'grass'),
          createRolePick('Lurantis', ['grass'], 'grass')
        ],
        tank: [
          createRolePick('Claydol', ['ground', 'psychic'], 'ground'),
          createRolePick('Tangrowth', ['grass'], 'grass'),
          createRolePick('Appletun', ['grass', 'dragon'], 'grass')
        ],
        support: [
          createRolePick('Bellossom', ['grass'], 'grass'),
          createRolePick('Pachirisu', ['electric'], 'electric')
        ]
      },
      mystic: {
        dps: [
          createRolePick('Seaking', ['water'], 'water'),
          createRolePick('BlastoiseTwo', ['water'], 'water'),
          createRolePick('Lombre', ['water', 'grass'], 'grass'),
          createRolePick('Mega Gyarados', ['water', 'dark'], 'water'),
          createRolePick('Hawlucha', ['fighting', 'flying'], 'fighting'),
          createRolePick('Mega Hawlucha', ['fighting', 'flying'], 'fighting'),
          createRolePick('Mega Lucario', ['fighting', 'steel'], 'fighting'),
          createRolePick('Mega Skarmory', ['steel', 'flying'], 'steel')
        ],
        tank: [
          createRolePick('Carracosta', ['water', 'rock'], 'water'),
          createRolePick('Bronzong', ['steel', 'psychic'], 'steel'),
          createRolePick('Aegislash', ['steel', 'ghost'], 'steel')
        ],
        support: [
          createRolePick('Politoed', ['water'], 'water'),
          createRolePick('Comfey', ['fairy'], 'fairy'),
          createRolePick('Misdreavus', ['ghost'], 'ghost'),
          createRolePick('Smoochum', ['ice', 'psychic'], 'ice')
        ]
      },
      valor: {
        dps: [
          createRolePick('Bouffalant', ['normal'], 'ground'),
          createRolePick('Kabutops', ['rock', 'water'], 'water'),
          createRolePick('Heracross', ['bug', 'fighting'], 'fighting'),
          createRolePick('Gorging Cramorant', ['flying', 'water'], 'water'),
          createRolePick('Mega Scizor', ['bug', 'steel'], 'steel')
        ],
        tank: [
          createRolePick('Onix', ['rock', 'ground'], 'rock'),
          createRolePick('Miltank', ['normal'], 'ground'),
          createRolePick('Bastiodon', ['rock', 'steel'], 'steel')
        ],
        support: [
          createRolePick('Blissey', ['normal'], 'fairy'),
          createRolePick('Chansey', ['normal'], 'psychic'),
          createRolePick('Houndour', ['dark', 'fire'], 'dark'),
          createRolePick('Zorua', ['dark'], 'dark')
        ]
      }
    }
  },
  {
    id: 'stakataka',
    name: 'Stakataka',
    image: 'pokemons/7gen/stakataka.png',
    types: ['rock', 'steel'],
    moveType: 'rock',
    description: 'Boss do Lado A no Medio. O moveset Rock favorece tanques que resistem pedra e speedsters Fighting/Ground/Water.',
    clans: {
      instinct: {
        dps: [
          createRolePick('Excadrill', ['ground', 'steel'], 'steel'),
          createRolePick('Marowak', ['ground'], 'ground'),
          createRolePick('Mega Raichu X', ['electric', 'fighting'], 'fighting'),
          createRolePick('VenusaurTwo', ['grass', 'poison'], 'grass')
        ],
        tank: [
          createRolePick('Claydol', ['ground', 'psychic'], 'ground'),
          createRolePick('Chesnaught', ['grass', 'fighting'], 'grass'),
          createRolePick('Tangrowth', ['grass'], 'grass')
        ],
        support: [
          createRolePick('Bellossom', ['grass'], 'grass'),
          createRolePick('Wynaut', ['psychic'], 'psychic')
        ]
      },
      mystic: {
        dps: [
          createRolePick('Hawlucha', ['fighting', 'flying'], 'fighting'),
          createRolePick('Mega Lucario', ['fighting', 'steel'], 'fighting'),
          createRolePick('Mega Hawlucha', ['fighting', 'flying'], 'fighting'),
          createRolePick('Seaking', ['water'], 'water'),
          createRolePick('Mega Gyarados', ['water', 'dark'], 'water'),
          createRolePick('BlastoiseTwo', ['water'], 'water')
        ],
        tank: [
          createRolePick('Aegislash', ['steel', 'ghost'], 'steel'),
          createRolePick('Bronzong', ['steel', 'psychic'], 'steel'),
          createRolePick('Carracosta', ['water', 'rock'], 'water')
        ],
        support: [
          createRolePick('Politoed', ['water'], 'water'),
          createRolePick('Comfey', ['fairy'], 'fairy')
        ]
      },
      valor: {
        dps: [
          createRolePick('Heracross', ['bug', 'fighting'], 'fighting'),
          createRolePick('Bouffalant', ['normal'], 'ground'),
          createRolePick('Kabutops', ['rock', 'water'], 'water'),
          createRolePick('Gorging Cramorant', ['flying', 'water'], 'water'),
          createRolePick('Mega Scizor', ['bug', 'steel'], 'steel')
        ],
        tank: [
          createRolePick('Onix', ['rock', 'ground'], 'rock'),
          createRolePick('Bastiodon', ['rock', 'steel'], 'steel'),
          createRolePick('Shieldon', ['rock', 'steel'], 'steel'),
          createRolePick('Probopass', ['rock', 'steel'], 'rock')
        ],
        support: [
          createRolePick('Blissey', ['normal'], 'fairy'),
          createRolePick('Lopunny', ['normal'], 'fighting')
        ]
      }
    }
  }
], {
  id: 'horizons',
  encounterLabel: 'Horizons Medio - Lado A',
  encounterNote: 'Recomendacoes por cla e funcao para o Lado A do Medio.'
});

const horizonsGoldGigalithBosses = createManualRoleboardBosses([
  {
    id: 'horizons-gold-gigalith',
    name: 'Gigalith',
    image: 'pokemons/5gen/gigalith.png',
    types: ['rock'],
    moveType: 'rock',
    description: 'Boss intermediario em trio do Gold no Dificil e Especialista.',
    cardTags: ['Trio'],
    clans: {
      instinct: {
        dps: [
          createRolePick('Excadrill', ['ground', 'steel'], 'steel'),
          createRolePick('Marowak', ['ground'], 'ground'),
          createRolePick('Mega Sceptile', ['grass', 'dragon'], 'grass'),
          createRolePick('Lurantis', ['grass'], 'grass')
        ],
        tank: [
          createRolePick('Claydol', ['ground', 'psychic'], 'ground', { tier: 'muitobom' }),
          createRolePick('Tangrowth', ['grass'], 'grass'),
          createRolePick('Chesnaught', ['grass', 'fighting'], 'grass')
        ],
        support: [
          createRolePick('Bellossom', ['grass'], 'grass'),
          createRolePick('Wynaut', ['psychic'], 'psychic')
        ]
      },
      mystic: {
        dps: [
          createRolePick('Mega Lucario', ['fighting', 'steel'], 'fighting'),
          createRolePick('Hawlucha', ['fighting', 'flying'], 'fighting'),
          createRolePick('Seaking', ['water'], 'water'),
          createRolePick('Mega Gyarados', ['water', 'dark'], 'water')
        ],
        tank: [
          createRolePick('Bronzong', ['steel', 'psychic'], 'steel'),
          createRolePick('Carracosta', ['water', 'rock'], 'water'),
          createRolePick('Aegislash', ['steel', 'ghost'], 'steel')
        ],
        support: [
          createRolePick('Politoed', ['water'], 'water'),
          createRolePick('Comfey', ['fairy'], 'fairy')
        ]
      },
      valor: {
        dps: [
          createRolePick('Heracross', ['bug', 'fighting'], 'fighting'),
          createRolePick('Kabutops', ['rock', 'water'], 'water'),
          createRolePick('Bouffalant', ['normal'], 'ground'),
          createRolePick('Mega Scizor', ['bug', 'steel'], 'steel')
        ],
        tank: [
          createRolePick('Onix', ['rock', 'ground'], 'rock'),
          createRolePick('Bastiodon', ['rock', 'steel'], 'steel'),
          createRolePick('Miltank', ['normal'], 'ground')
        ],
        support: [
          createRolePick('Blissey', ['normal'], 'fairy'),
          createRolePick('Chansey', ['normal'], 'psychic'),
          createRolePick('Lopunny', ['normal'], 'fighting')
        ]
      }
    }
  }
], {
  id: 'horizons',
  encounterLabel: 'Horizons Gold - Boss intermediario',
  encounterNote: 'Boss em trio entre a primeira e a segunda parte do Gold.'
});

const horizonsBronzeRunsData = [
  {
    id: 'bronze-normal-a',
    category: 'bronze',
    difficulty: 'normal',
    side: 'a',
    title: 'Normal - Lado A',
    eyebrow: 'Solo - Em breve',
    summary: 'Categoria solo do Horizons. Informacoes em breve.',
    pathSections: [],
    bosses: []
  }
];

const horizonsSilverBosses = createManualRoleboardBosses([
  {
    id: 'horizons-silver-boss-room-1',
    name: 'Jellicent Male',
    image: 'pokemons/5gen/jellicent.png',
    types: ['water', 'ghost'],
    moveType: 'poison',
    effectiveness: {
      attackTypes: ['ghost', 'poison']
    },
    expandCardDescription: true,
    description: 'Dica: Ataque basico Ghost e Habilidades Poison.\nDepois de derrotar o boss, saia da Boss Room, vá para o portal de baixo na direita evitando as armadilhas, depois para o portal de baixo, depois para o último da sala, na esquerda.\nRecomendado 2 DPS.',
    clans: {
      instinct: {
        dps: [
          createRolePick('Mega Raichu Y', ['electric'], 'electric'),
          createRolePick('Pikachu', ['electric'], 'electric')
        ],
        tank: [
          createRolePick('Claydol', ['ground', 'psychic'], 'ground')
        ],
        support: [
          createRolePick('Kadabra', ['psychic'], 'psychic')
        ]
      },
      mystic: {
        dps: [
          createRolePick('Banette', ['ghost'], 'ghost'),
          createRolePick('Mega Gyarados', ['water', 'dark'], 'dark')
        ],
        tank: [
          createRolePick('Dusclops', ['ghost'], 'ghost')
        ],
        support: [
          createRolePick('Misdreavus', ['ghost'], 'ghost')
        ]
      },
      valor: {
        dps: [
          createRolePick('Raticate', ['normal'], 'dark'),
          createRolePick('Pyroar Female', ['fire', 'normal'], 'grass')
        ],
        tank: [
          createRolePick('Sableye', ['dark', 'ghost'], 'ghost'),
          createRolePick('Miltank', ['normal'], 'ground')
        ],
        support: [
          createRolePick('Porygon2', ['normal'], 'electric')
        ]
      }
    }
  },
  {
    id: 'horizons-silver-boss-room-2',
    name: 'Mega Gengar',
    image: 'pokemons/megas/mega-gengar.png',
    types: ['ghost', 'poison'],
    moveType: 'dark',
    effectiveness: {
      attackTypes: ['dark', 'ghost']
    },
    description: 'Dica: Ataque basico Dark e Habilidades Ghost.\nRecomendado 1 Tank e 1 DPS (Mecanica de Imortal).\nDerrote os totens para gerar curas dentro da arena.',
    clans: {
      instinct: {
        dps: [
          createRolePick('Mega Excadrill', ['ground', 'steel'], 'ground'),
          createRolePick('Shiftry', ['grass', 'dark'], 'dark')
        ],
        tank: [
          createRolePick('Hippowdon Female', ['ground'], 'ground')
        ],
        support: [
          createRolePick('Pachirisu', ['electric'], 'electric')
        ]
      },
      mystic: {
        dps: [
          createRolePick('Mega Gyarados', ['water', 'dark'], 'dark'),
          createRolePick('Orthworm', ['steel'], 'ground')
        ],
        tank: [
          createRolePick('Carracosta', ['water', 'rock'], 'rock')
        ],
        support: [
          createRolePick('Corsola', ['water', 'rock'], 'rock')
        ]
      },
      valor: {
        dps: [
          createRolePick('Bouffalant', ['normal'], 'ground'),
          createRolePick('Raticate', ['normal'], 'dark'),
        ],
        tank: [createRolePick('Miltank', ['normal'], 'ground')],
        support: [
          createRolePick('Chansey', ['normal'], 'psychic')
        ]
      }
    }
  }
], {
  id: 'horizons',
  encounterLabel: 'Horizons Silver - Boss Rooms',
  encounterNote: 'Boss rooms do Horizons Silver com recomendações por clan e função.'
});

const horizonsSilverRunsData = [
  {
    id: 'silver-normal-a',
    category: 'silver',
    difficulty: 'normal',
    side: 'a',
    title: 'Normal - Lado A',
    eyebrow: 'Duo - Configurado',
    summary: 'Categoria duo do Horizons com armadilhas, lures e boss rooms detalhadas para o Lado A.',
    pathSections: [
      {
        id: 'armadilhas',
        title: 'Armadilhas',
        subtitle: 'Dusknoir: dano vermelho no chão, em vários SQM específicos.\nHaunter 1: fica na escada como armadilha, dano em 1 SQM específico.\nHaunter 2: segurando um espelho, dano reto.',
        mobs: [
          { name: 'Dusknoir', image: '/horizons/armadilha-dusknoir.png', types: ['ghost'] },
          { name: 'Haunter 1', image: '/horizons/haunter-trap.png', types: ['ghost', 'poison'] },
          { name: 'Haunter 2', image: '/horizons/haunter-espelho.png', types: ['ghost', 'poison'] }
        ],
        effectiveTypes: ['ghost', 'psychic', 'dark'],
        superEffectiveTypes: ['ghost']
      },
      {
        id: 'lure-1',
        title: 'Lure 1',
        subtitle: 'Entre no portal à esquerda.',
        mobs: [
          { name: 'Gastly', image: 'pokemons/1gen/gastly.png', types: ['ghost', 'poison'] },
          { name: 'Haunter', image: 'pokemons/1gen/haunter.png', types: ['ghost', 'poison'] },
          { name: 'Yamask', image: 'pokemons/5gen/yamask.png', types: ['ghost'] }
        ],
        effectiveTypes: ['ghost', 'psychic', 'dark'],
        superEffectiveTypes: ['ghost']
      },
      {
        id: 'lure-2',
        title: 'Lure 2',
        subtitle: 'Suba a escada, tome cuidado com o Haunter na frente dela.\nEntre no TP, passe pelas armadilhas do Dusknoir e entre no TP novamente.',
        mobs: [
          { name: 'Phantump', image: 'pokemons/6gen/phantump.png', types: ['ghost', 'grass'] },
          { name: 'Pumpkaboo', image: 'pokemons/6gen/pumpkaboo.png', types: ['ghost', 'grass'] },
          { name: 'Yamask', image: 'pokemons/5gen/yamask.png', types: ['ghost'] },
          { name: 'Cofagrigus', image: 'pokemons/5gen/cofagrigus.png', types: ['ghost'] }
        ],
        effectiveTypes: ['ghost', 'psychic', 'dark'],
        superEffectiveTypes: ['ghost']
      },
      {
        id: 'lure-3',
        title: 'Lure 3',
        subtitle: 'Mate o lure e entre no portal ao norte.',
        mobs: [
          { name: 'Phantump', image: 'pokemons/6gen/phantump.png', types: ['ghost', 'grass'] },
          { name: 'Yamask', image: 'pokemons/5gen/yamask.png', types: ['ghost'] },
          { name: 'Cofagrigus', image: 'pokemons/5gen/cofagrigus.png', types: ['ghost'] },
          { name: 'Gengar', image: 'pokemons/1gen/gengar.png', types: ['ghost', 'poison'] },
          { name: 'Trevenant', image: 'pokemons/6gen/trevenant.png', types: ['ghost', 'grass'] },
          { name: 'Gourgeist', image: 'pokemons/6gen/gourgeist.png', types: ['ghost', 'grass'] }
        ],
        effectiveTypes: ['ghost', 'psychic', 'dark'],
        superEffectiveTypes: ['ghost']
      },
      {
        id: 'lure-4',
        title: 'Lure 4',
        subtitle: 'Suba a escada, tome cuidado com o Haunter logo após a subida.',
        mobs: [
          { name: 'Cofagrigus', image: 'pokemons/5gen/cofagrigus.png', types: ['ghost'] },
          { name: 'Trevenant', image: 'pokemons/6gen/trevenant.png', types: ['ghost', 'grass'] },
          { name: 'Gourgeist', image: 'pokemons/6gen/gourgeist.png', types: ['ghost', 'grass'] },
          { name: 'Yamask', image: 'pokemons/5gen/yamask.png', types: ['ghost'] },
          { name: 'Gengar', image: 'pokemons/1gen/gengar.png', types: ['ghost', 'poison'] }
        ],
        effectiveTypes: ['ghost', 'psychic', 'dark'],
        superEffectiveTypes: ['ghost']
      },
      {
        id: 'lure-5',
        title: 'Lure 5',
        subtitle: 'Passe pelas armadilhas do Dusknoir.\nUse Fly com Metagross e entre no portal à esquerda.\nEvitando as armadilhas do Dusknoir pegue o portal à esquerda, suba a escada e elimine o lure, cuidado com o Haunter do espelho.\nEntre no portal da esquerda, passe as armadilhas do Dusknoir e entre no portal da direita.\nSuba a escada com cuidado nas armadilhas do Haunter.',
        mobs: [
          { name: 'Yamask', image: 'pokemons/5gen/yamask.png', types: ['ghost'] },
          { name: 'Cofagrigus', image: 'pokemons/5gen/cofagrigus.png', types: ['ghost'] }
        ],
        effectiveTypes: ['ghost', 'psychic', 'dark'],
        superEffectiveTypes: ['ghost']
      },
      {
        id: 'lure-6',
        title: 'Lure 6',
        subtitle: 'Mate o lure.\nEntre no último portal da sala à esquerda e depois no da direita, cuidando as armadilhas do Dusknoir.',
        mobs: [
          { name: 'Gastly', image: 'pokemons/1gen/gastly.png', types: ['ghost', 'poison'] },
          { name: 'Haunter', image: 'pokemons/1gen/haunter.png', types: ['ghost', 'poison'] },
          { name: 'Gengar', image: 'pokemons/1gen/gengar.png', types: ['ghost', 'poison'] }
        ],
        effectiveTypes: ['ghost', 'psychic', 'dark'],
        superEffectiveTypes: ['ghost']
      },
      {
        id: 'lure-7',
        title: 'Lure 7',
        subtitle: 'Siga para o primeiro portal da esquerda no meio.\nDepois vá para o portal do sul, tomando cuidado com as armadilhas do Dusknoir.',
        mobs: [
          { name: 'Yamask', image: 'pokemons/5gen/yamask.png', types: ['ghost'] },
          { name: 'Cofagrigus', image: 'pokemons/5gen/cofagrigus.png', types: ['ghost'] },
          { name: 'Gourgeist', image: 'pokemons/6gen/gourgeist.png', types: ['ghost', 'grass'] },
          { name: 'Trevenant', image: 'pokemons/6gen/trevenant.png', types: ['ghost', 'grass'] },
          { name: 'Gengar', image: 'pokemons/1gen/gengar.png', types: ['ghost', 'poison'] }
        ],
        effectiveTypes: ['ghost', 'psychic', 'dark'],
        superEffectiveTypes: ['ghost']
      },
      {
        id: 'lure-8-terreo',
        title: 'Lure 8 Terreo',
        subtitle: 'Mate os Pokémon, tomando cuidado com as armadilhas do Haunter Espelho.',
        mobs: [
          { name: 'Yamask', image: 'pokemons/5gen/yamask.png', types: ['ghost'] },
          { name: 'Cofagrigus', image: 'pokemons/5gen/cofagrigus.png', types: ['ghost'] }
        ],
        effectiveTypes: ['ghost', 'psychic', 'dark'],
        superEffectiveTypes: ['ghost']
      },
      {
        id: 'lure-8-mais-1',
        title: 'Lure 8 +1',
        subtitle: 'Após matar todos os Pokémon entre no Portal ao Sul.\nSuba a escada e entre no portal da esquerda novamente.\nPor último, no portal de cima, que antes estava Bloqueado.',
        mobs: [
          { name: 'Phantump', image: 'pokemons/6gen/phantump.png', types: ['ghost', 'grass'] },
          { name: 'Pumpkaboo', image: 'pokemons/6gen/pumpkaboo.png', types: ['ghost', 'grass'] },
          { name: 'Gourgeist', image: 'pokemons/6gen/gourgeist.png', types: ['ghost', 'grass'] },
          { name: 'Trevenant', image: 'pokemons/6gen/trevenant.png', types: ['ghost', 'grass'] }
        ],
        effectiveTypes: ['ghost', 'psychic', 'dark'],
        superEffectiveTypes: ['ghost']
      },
    ] ,
    bosses: horizonsSilverBosses
  }
];

const horizonsSilverNormalRun = horizonsSilverRunsData.find((run) => run?.id === 'silver-normal-a');
if (horizonsSilverNormalRun) {
  horizonsSilverRunsData.push({
    ...horizonsSilverNormalRun,
    id: 'silver-medio-a',
    difficulty: 'medio',
    title: 'Medio - Lado A'
  });
}

const horizonsRunsData = [
  {
    id: 'medio-a',
    category: 'gold',
    difficulty: 'medio',
    side: 'a',
    title: 'Medio - Lado A',
    eyebrow: 'Configurado',
    summary: 'Dica: Intercale a tipagem dos times para abranger maior dano em lures com tipagens diferentes',
    pathSections: [
      {
        id: 'primeira-parte',
        title: 'Primeira Parte',
        subtitle: 'Antes do Fly',
        mobs: [
          { name: 'Minior Meteor Form', image: 'pokemons/7gen/minior-meteor.png', types: ['rock', 'flying'] },
          { name: 'Minior Core Form', image: 'pokemons/7gen/minior-core.png', types: ['rock', 'flying'] },
          { name: 'Dwebble', image: 'pokemons/5gen/dwebble.png', types: ['bug', 'rock'] },
          { name: 'Crustle', image: 'pokemons/5gen/crustle.png', types: ['bug', 'rock'] },
          { name: 'Lycanroc', image: 'pokemons/7gen/lycanroc.png', types: ['rock'] }
        ],
        effectiveTypes: ['electric', 'ice', 'grass', 'fighting'],
        superEffectiveTypes: ['water', 'rock', 'steel']
      },
      {
        id: 'apos-fly',
        title: 'Segunda Parte',
        subtitle: 'Após o Fly',
        mobs: [
          { name: 'Alolan Graveler', image: 'pokemons/7gen/alolan-graveler.png', types: ['rock', 'electric'] },
          { name: 'Alolan Geodude', image: 'pokemons/7gen/alolan-geodude.png', types: ['rock', 'electric'] }
        ],
        effectiveTypes: ['water', 'grass', 'fighting', 'steel'],
        superEffectiveTypes: ['ground']
      },
      {
        id: 'apos-alolan-golem',
        title: 'Terceira Parte',
        subtitle: '',
        mobs: [
          { name: 'Lycanroc Midnight Form', image: 'pokemons/7gen/midnight-lycanroc.png', types: ['rock'] },
          { name: 'Lycanroc Midday Form', image: 'pokemons/7gen/midday-lycanroc.png', types: ['rock'] },
          { name: 'Lycanroc', image: 'pokemons/7gen/lycanroc.png', types: ['rock'] },
          { name: 'Rockruff', image: 'pokemons/7gen/rockruff.png', types: ['rock'] },
          { name: 'Roggenrola', image: 'pokemons/5gen/roggenrola.png', types: ['rock'] },
          { name: 'Boldore', image: 'pokemons/5gen/boldore.png', types: ['rock'] }
        ],
        effectiveTypes: ['water', 'grass'],
        superEffectiveTypes: ['fighting', 'ground', 'steel']
      }
    ],
    bosses: horizonsMediumSideABosses
  }
];

function createHorizonsGoldPathSectionsWithGigalith(baseSections = []) {
  return baseSections.map((section, index) => {
    if (index !== 0) return section;
    return {
      ...section,
      bossesAfter: horizonsGoldGigalithBosses,
      bossesAfterOptions: {
        eyebrow: 'Boss intermediario',
        title: 'Gigalith',
        subtitle: 'Boss em trio entre a primeira e a segunda parte.',
        compact: true
      }
    };
  });
}

const horizonsGoldBaseRun = horizonsRunsData[0];
if (horizonsGoldBaseRun) {
  horizonsRunsData.unshift({
    ...horizonsGoldBaseRun,
    id: 'normal-a',
    difficulty: 'normal',
    title: 'Normal - Lado A'
  });
  horizonsRunsData.push(
    {
      ...horizonsGoldBaseRun,
      id: 'dificil-a',
      difficulty: 'dificil',
      title: 'Dificil - Lado A',
      summary: 'Dica: Intercale a tipagem dos times para abranger maior dano em lures com tipagens diferentes',
      pathSections: createHorizonsGoldPathSectionsWithGigalith(horizonsGoldBaseRun.pathSections)
    },
    {
      ...horizonsGoldBaseRun,
      id: 'especialista-a',
      difficulty: 'especialista',
      title: 'Especialista - Lado A',
      summary: 'Dica: Intercale a tipagem dos times para abranger maior dano em lures com tipagens diferentes',
      pathSections: createHorizonsGoldPathSectionsWithGigalith(horizonsGoldBaseRun.pathSections)
    }
  );
}

horizonsMediumSideABosses.forEach((boss) => {
  if (boss && typeof boss === 'object') {
    boss.horizonsCategory = 'gold';
    boss.horizonsCategoryLabel = 'Gold';
    boss.cardTags = ['Gold', ...(Array.isArray(boss.cardTags) ? boss.cardTags : [])];
  }
});

horizonsGoldGigalithBosses.forEach((boss) => {
  if (boss && typeof boss === 'object') {
    boss.horizonsCategory = 'gold';
    boss.horizonsCategoryLabel = 'Gold';
  }
});

const horizonsCategoriesData = Object.freeze({
  bronze: {
    id: 'bronze',
    label: 'Bronze',
    eyebrow: 'Solo',
    title: 'Bronze',
    summary: 'Categoria solo do Horizons. Informacoes em breve.',
    status: 'Em breve',
    pathSections: [],
    bosses: [],
    runs: horizonsBronzeRunsData
  },
  silver: {
    id: 'silver',
    label: 'Silver',
    eyebrow: 'Duo',
    title: 'Silver',
    summary: 'Categoria duo do Horizons com a rota do Lado A já detalhada.',
    status: '',
    tutorialUrl: 'https://youtu.be/AUYAvSpnFvo',
    pathSections: [],
    bosses: [],
    runs: horizonsSilverRunsData
  },
  gold: {
    id: 'gold',
    label: 'Gold',
    eyebrow: 'Configurado',
    title: 'Gold',
    summary: 'Categoria Gold do Horizons com rotas separadas por dificuldade e lado.',
    status: 'Configurado',
    pathSections: [],
    bosses: [],
    runs: horizonsRunsData
  }
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

  if (pick.defenseDamageFactorByBossType && typeof pick.defenseDamageFactorByBossType === 'object') {
    clonedPick.defenseDamageFactorByBossType = { ...pick.defenseDamageFactorByBossType };
  }

  if (pick.matchupOverrides && typeof pick.matchupOverrides === 'object') {
    clonedPick.matchupOverrides = JSON.parse(JSON.stringify(pick.matchupOverrides));
  }

  return clonedPick;
}

function normalizeRecommendationRoleKey(roleKey = '') {
  const normalizedRoleKey = String(roleKey || '').trim().toLowerCase();
  return roleboardRoleOrder.includes(normalizedRoleKey) ? normalizedRoleKey : '';
}

function assignRecommendationRoleToPick(pick, roleKey = '') {
  if (!pick || typeof pick !== 'object') return pick;

  const normalizedRoleKey = normalizeRecommendationRoleKey(roleKey);
  if (normalizedRoleKey) {
    pick.recommendedRole = normalizedRoleKey;
  } else {
    delete pick.recommendedRole;
  }

  return pick;
}

function assignRecommendationRoleToList(list = [], roleKey = '') {
  const normalizedRoleKey = normalizeRecommendationRoleKey(roleKey);
  if (!Array.isArray(list) || !normalizedRoleKey) return list;
  list.forEach((pick) => assignRecommendationRoleToPick(pick, normalizedRoleKey));
  return list;
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
    pick?.defenseDamageFactorByBossType ? JSON.stringify(pick.defenseDamageFactorByBossType) : '',
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
  { id: 'clefable', name: 'Clefable', types: ['fairy'], moveType: 'fairy', effectiveness: mew2TypedBossEffectiveness, description: 'Chefe que pede constancia e protecao durante as trocas de frente.' },
  { id: 'primeape', name: 'Primeape', types: ['fighting'], moveType: 'fighting', effectiveness: mew2TypedBossEffectiveness, description: 'Encontro focado em composicao limpa e resposta rapida ao dano.' },
  { id: 'dugtrio', name: 'Dugtrio', types: ['ground'], moveType: 'ground', effectiveness: mew2TypedBossEffectiveness, description: 'Encontro de trio para trabalhar suporte e linha de frente sem perder dano.' },
  { id: 'tentacruel', name: 'Tentacruel', types: ['water', 'poison'], moveType: 'poison', effectiveness: mew2TypedBossEffectiveness, description: 'Encontro que testa resistencia e resposta consistente contra pressao venenosa.' },
  { id: 'jynx', name: 'Jynx', types: ['ice', 'psychic'], moveType: 'ice', effectiveness: mew2TypedBossEffectiveness, description: 'Pede cobertura util e boa leitura de trocas dentro do trio.' },
  { id: 'blastoise', name: 'Blastoise', types: ['water'], moveType: 'water', effectiveness: mew2TypedBossEffectiveness, description: 'Encontro mais constante, ideal para testar sustentacao e troca segura no trio.' },
  { id: 'pinsir', name: 'Pinsir', types: ['bug'], moveType: 'bug', effectiveness: mew2TypedBossEffectiveness, description: 'Luta curta que recompensa picks simples, organizados por papel dentro do cla.' },
  { id: 'venusaur', name: 'Venusaur', types: ['grass', 'poison'], moveType: 'grass', effectiveness: mew2TypedBossEffectiveness, description: 'Encontro com pressao progressiva, bom para testar abertura de suporte e DPS.', ration: { label: 'Rindo Ration', shortLabel: 'Rindo', image: 'rations/rindo_ration.png', description: 'Aumenta a resistencia contra ataques Grass em 30% por 60 minutos.' } },
  { id: 'charizard', name: 'Charizard', image: 'charizard.png', types: ['fire', 'flying'], moveType: 'fire', effectiveness: mew2TypedBossEffectiveness, description: 'Chefe agressivo que cobra cobertura limpa e resposta rapida ao burst.' },
  { id: 'pikachu', name: 'Pikachu', types: ['electric'], moveType: 'electric', effectiveness: mew2TypedBossEffectiveness, description: 'Chefe rapido; deixar funcao clara por cla ajuda a compor o trio com menos erro.' },
  { id: 'mewtwo', name: 'Mewtwo', types: ['psychic'], moveType: 'psychic', effectiveness: mew2TypedBossEffectiveness, description: 'Chefe final que exige execucao limpa, com Tanque, DPS e Suporte bem definidos.' }
].map((entry) => {
  const clans = cloneChampionPathRolePoolsForMew2();
  if (entry.id === 'pinsir') {
    const blockedDpsKeys = new Set(['dedenne', 'seviper']);
    clans.instinct.dps = clans.instinct.dps.filter((pick) => !blockedDpsKeys.has(getRecommendationNameKey(pick?.name)));
  }
  return {
    ...entry,
    clans
  };
}), {
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
    instinctDpsList.push(createRolePick('Dragonair', ['dragon'], 'dragon'));
  }
});

const specialBossesData = [
  {
    id: 'zoroark',
    name: 'Zoroark',
    image: 'zoroark.png',
    mapMarkerId: 'poke-utilities-ranger-boss-zoroark',
    mapZoom: 2.67,
    description: 'Boss Dark com moveset Dark. Lista limitada a speedsters tier Bom ou maior.',
    types: ['dark'],
    moveType: 'dark',
    filterSolo: true,
    clans: {
      instinct: {
        label: 'Instinct',
        recommended: [
          createRolePick('Dedenne', ['electric', 'fairy'], 'fairy', { tier: 'muitobom' }),
          createRolePick('Mega Raichu X', ['electric', 'fighting'], 'fighting', { tier: 'muitobom' }),
          createRolePick('Lurantis', ['grass'], 'bug', { tier: 'bom' }),
          createRolePick('Mega Gardevoir', ['psychic', 'fairy'], 'fairy', { tier: 'bom' })
        ]
      },
      mystic: {
        label: 'Mystic',
        recommended: [
          createRolePick('Dachsbun', ['fairy'], 'fairy', { tier: 'muitobom' }),
          createRolePick('Hawlucha', ['fighting', 'flying'], 'fighting', { tier: 'muitobom' }),
          createRolePick('Mega Hawlucha', ['fighting', 'flying'], 'fighting', { tier: 'muitobom' }),
          createRolePick('Mega Lucario', ['fighting', 'steel'], 'fighting', { tier: 'muitobom' })
        ]
      },
      valor: {
        label: 'Valor',
        recommended: [
          createRolePick('Heracross', ['bug', 'fighting'], 'fighting', { tier: 'muitobom' }),
          createRolePick('Mega Absol Z', ['dark'], 'fairy', { tier: 'muitobom' }),
          createRolePick('Ribombee', ['bug', 'fairy'], 'fairy', { tier: 'muitobom' }),
          createRolePick('Scyther', ['bug', 'flying'], 'bug', { tier: 'bom' }),
          createRolePick('Weavile', ['dark', 'ice'], 'ice')
        ]
      }
    }
  },
  {
    id: 'hydrapple',
    name: 'Hydrapple',
    image: 'hydrapple.png',
    tutorialUrl: 'https://youtu.be/NSYv7_G2AGM',
    mapMarkerId: 'poke-utilities-ranger-boss-hydrapple',
    mapZoom: 3,
    description: 'Boss Grass / Dragon com moveset Dragon. Lista limitada a speedsters tier Bom ou maior.',
    types: ['grass', 'dragon'],
    moveType: 'dragon',
    filterSolo: true,
    clans: {
      instinct: {
        label: 'Instinct',
        recommended: [
          createRolePick('Dedenne', ['electric', 'fairy'], 'fairy', { tier: 'bom' }),
          createRolePick('Dragonair', ['dragon'], 'dragon', { tier: 'bom' }),
          createRolePick('Lurantis', ['grass'], 'bug', { tier: 'bom' }),
          createRolePick('Mega Gardevoir', ['psychic', 'fairy'], 'fairy', { tier: 'bom' }),
          createRolePick("Rosa's Serperior", ['grass'], 'grass', { tier: 'bom' }),
          createRolePick('Seviper', ['poison'], 'poison', { tier: 'bom' }),
          createRolePick('Excadrill', ['ground', 'steel'], 'steel')
        ]
      },
      mystic: {
        label: 'Mystic',
        recommended: [
          createRolePick('Mega Skarmory', ['steel', 'flying'], 'flying', { tier: 'muitobom' }),
          createRolePick('Dachsbun', ['fairy'], 'fairy', { tier: 'bom' }),
          createRolePick('Dewgong', ['water', 'ice'], 'ice', { tier: 'bom' }),
          createRolePick('Mantine', ['water', 'flying'], 'flying', { tier: 'bom' }),
          createRolePick("Melony's Frosmoth", ['ice', 'bug'], 'ice', { tier: 'bom' }),
          createRolePick('Qwilfish', ['water', 'poison'], 'poison', { tier: 'bom' }),
          createRolePick('Mega Lucario', ['fighting', 'steel'], 'fighting'),
          createRolePick('Mega Lucario Z', ['fighting', 'steel'], 'steel')
        ]
      },
      valor: {
        label: 'Valor',
        recommended: [
          createRolePick("Farfetch'd", ['normal', 'flying'], 'flying', { tier: 'bom' }),
          createRolePick("May's Beautifly", ['bug', 'flying'], 'flying', { tier: 'bom' }),
          createRolePick('Mega Absol Z', ['dark'], 'fairy', { tier: 'bom' }),
          createRolePick('Ribombee', ['bug', 'fairy'], 'fairy', { tier: 'bom' }),
          createRolePick('Scolipede', ['bug', 'poison'], 'poison', { tier: 'bom' }),
          createRolePick('Scyther', ['bug', 'flying'], 'bug', { tier: 'bom' }),
          createRolePick('Weavile', ['dark', 'ice'], 'ice', { tier: 'bom' }),
          createRolePick('Mega Scizor', ['bug', 'steel'], 'steel')
        ]
      }
    }
  },
  {
    id: 'aegislash',
    name: 'Aegislash',
    image: 'aegislash.png',
    mapMarkerId: 'poke-utilities-ranger-boss-aegislash',
    mapZoom: 1.58,
    description: 'Boss Steel / Ghost com moveset Steel. Lista limitada a speedsters tier Bom ou maior.',
    types: ['steel', 'ghost'],
    moveType: 'steel',
    filterSolo: true,
    clans: {
      instinct: {
        label: 'Instinct',
        recommended: [
          createRolePick('Excadrill', ['ground', 'steel'], 'steel', {
            tier: 'muitobom',
            passiveName: 'Mold Breaker',
            passiveDescription: 'O Pokemon ignora completamente as defesas do Pokemon adversario quebrando os moldes de sua resistencia. Excadrill causa dano super efetivo ao tipo STEEL.',
            passiveSuperEffectiveTypes: ['steel']
          }),
          createRolePick('Marowak', ['ground'], 'ground', { tier: 'bom' }),
          createRolePick('Shiftry', ['grass', 'dark'], 'dark', { tier: 'bom' }),
          createRolePick('Mega Raichu Y', ['electric'], 'electric'),
          createRolePick('Pikachu', ['electric'], 'electric')
        ]
      },
      mystic: {
        label: 'Mystic',
        recommended: [
          createRolePick('Mega Gyarados', ['water', 'dark'], 'dark', { tier: 'muitobom' }),
          createRolePick('Orthworm', ['steel'], 'ground', { tier: 'muitobom' }),
          createRolePick('Seaking', ['water'], 'ground', { tier: 'muitobom' }),
          createRolePick('Banette', ['ghost'], 'ghost', { tier: 'bom' }),
          createRolePick('Drifloon', ['ghost', 'flying'], 'fire', { tier: 'bom' }),
          createRolePick('BlastoiseTwo', ['water'], 'water'),
          createRolePick('Duraludon', ['steel', 'dragon'], 'electric'),
          createRolePick('Greninja', ['water', 'dark'], 'water'),
          createRolePick('Mega Greninja', ['water', 'dark'], 'water')
        ]
      },
      valor: {
        label: 'Valor',
        recommended: [
          createRolePick('CharizardTwo', ['fire', 'flying'], 'fire', { tier: 'muitobom' }),
          createRolePick('Delphox', ['fire', 'psychic'], 'fire', { tier: 'muitobom' }),
          createRolePick('Mega Delphox', ['fire', 'psychic'], 'fire', { tier: 'muitobom' }),
          createRolePick('Mega Houndoom', ['dark', 'fire'], 'dark', { tier: 'muitobom' }),
          createRolePick('Absol', ['dark'], 'dark', { tier: 'bom' }),
          createRolePick('Raticate', ['normal'], 'dark', { tier: 'bom' }),
          createRolePick('Bouffalant', ['normal'], 'ground', { tier: 'bom' }),
          createRolePick('Gorging Cramorant', ['flying', 'water'], 'water')
        ]
      }
    }
  }
];

const mainQuestBosses = createManualRoleboardBosses([
  {
    id: 'alpha-fearow',
    name: 'Alpha Fearow',
    image: '/mainquest/alpha-fearow.png',
    types: ['normal', 'flying'],
    moveType: 'flying',
    cardTags: ['Solo'],
    description: 'Luta 1v1 da Main Quest. Use apenas Speedsters classificados como Bom ou melhor.',
    clans: {
      instinct: {
        dps: [
          createRolePick('Dedenne', ['electric', 'fairy'], 'electric'),
          createRolePick('Mega Raichu X', ['electric'], 'electric'),
          createRolePick('Mega Raichu Y', ['electric'], 'electric'),
          createRolePick('Pikachu', ['electric'], 'electric')
        ]
      },
      mystic: {
        dps: [
          createRolePick('Duraludon', ['steel', 'dragon'], 'electric')
        ]
      },
      valor: {
        dps: [
          createRolePick('Kabutops', ['rock', 'water'], 'rock')
        ]
      }
    }
  },
  {
    id: 'alpha-marowak',
    name: 'Alpha Marowak',
    image: '/mainquest/alpha-marowak.png',
    types: ['ground'],
    moveType: 'ground',
    cardTags: ['Solo'],
    description: 'Luta 1v1 da Main Quest. Use apenas Speedsters classificados como Bom ou melhor.',
    clans: {
      instinct: {
        dps: [
          createRolePick('Mega Sceptile', ['grass', 'dragon'], 'grass'),
          createRolePick("Rosa's Serperior", ['grass'], 'grass'),
          createRolePick('Shiftry', ['grass', 'dark'], 'grass')
        ]
      },
      mystic: {
        dps: [
          createRolePick('Mantine', ['water', 'flying'], 'flying')
        ]
      },
      valor: {
        dps: [
          createRolePick('CharizardTwo', ['fire', 'flying'], 'fire'),
          createRolePick("Farfetch'd", ['normal', 'flying'], 'normal'),
          createRolePick("May's Beautifly", ['bug', 'flying'], 'bug'),
          createRolePick('Scyther', ['bug', 'flying'], 'bug'),
          createRolePick('Shiny Scyther', ['bug', 'flying'], 'bug'),
          createRolePick('Heracross', ['bug', 'fighting'], 'bug')
        ]
      }
    }
  },
  {
    id: 'alpha-kingler',
    name: 'Alpha Kingler',
    image: '/mainquest/alpha-kingler.png',
    types: ['water'],
    moveType: 'water',
    cardTags: ['Solo'],
    description: 'Luta 1v1 da Main Quest. Use apenas Speedsters classificados como Bom ou melhor.',
    clans: {
      instinct: {
        dps: [
          createRolePick('Mega Sceptile', ['grass', 'dragon'], 'grass'),
          createRolePick("Rosa's Serperior", ['grass'], 'grass'),
          createRolePick('Shiftry', ['grass', 'dark'], 'grass'),
          createRolePick('VenusaurTwo', ['grass', 'poison'], 'grass')
        ]
      },
      mystic: {
        dps: [
          createRolePick('Duraludon', ['steel', 'dragon'], 'electric')
        ]
      },
      valor: {
        dps: []
      }
    }
  },
  {
    id: 'mega-malamar',
    name: 'Mega Malamar',
    image: 'megamalamar.png',
    types: ['dark', 'psychic'],
    moveType: 'psychic',
    cardTags: ['Trio'],
    description: 'Luta 3v1 da Main Quest. Monte a composicao com Tank, Speedster e Suporte.',
    clans: {
      instinct: {
        tank: [
          createRolePick('Magnezone', ['electric', 'steel'], 'electric'),
          createRolePick('Claydol', ['ground', 'psychic'], 'ground'),
          createRolePick('Shiny Claydol', ['ground', 'psychic'], 'ground')
        ],
        dps: [
          createRolePick('Mega Gardevoir', ['psychic', 'fairy'], 'fairy'),
          createRolePick('Dedenne', ['electric', 'fairy'], 'fairy')
        ]
      },
      mystic: {
        tank: [
          createRolePick('Aegislash', ['steel', 'ghost'], 'steel'),
          createRolePick('Bronzong', ['steel', 'psychic'], 'steel'),
          createRolePick('Shiny Bronzong', ['steel', 'psychic'], 'steel'),
          createRolePick('Dusclops', ['ghost'], 'ghost')
        ],
        dps: [
          createRolePick('Dachsbun', ['fairy'], 'fairy'),
          createRolePick('Greninja', ['water', 'dark'], 'water'),
          createRolePick('Mega Greninja', ['water', 'dark'], 'water'),
          createRolePick('Mega Gyarados', ['water', 'dark'], 'water'),
          createRolePick('Banette', ['ghost'], 'ghost'),
          createRolePick('Duraludon', ['steel', 'dragon'], 'electric'),
          createRolePick('Mega Skarmory', ['steel', 'flying'], 'steel'),
          createRolePick('Mega Starmie', ['water', 'psychic'], 'water'),
          createRolePick('Orthworm', ['steel'], 'steel')
        ]
      },
      valor: {
        tank: [
          createRolePick('Orbeetle', ['bug', 'psychic'], 'bug'),
          createRolePick('Shuckle', ['bug', 'rock'], 'bug'),
          createRolePick('Sableye', ['dark', 'ghost'], 'dark'),
          createRolePick('Bastiodon', ['rock', 'steel'], 'rock'),
          createRolePick('Probopass', ['rock', 'steel'], 'rock'),
          createRolePick('Shieldon', ['rock', 'steel'], 'rock')
        ],
        dps: [
          createRolePick('Scyther', ['bug', 'flying'], 'bug'),
          createRolePick('Mega Scizor', ['bug', 'steel'], 'bug')
        ],
        support: [
          createRolePick('Houndour', ['dark', 'fire'], 'dark'),
          createRolePick('Zorua', ['dark'], 'dark')
        ]
      }
    }
  }
], {
  id: 'mainquest',
  encounterLabel: 'Main Quest',
  encounterNote: 'Lutas da campanha principal.'
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
  special: {
    id: 'special',
    label: 'Ranger Bosses',
    variant: 'hoopa',
    searchEnabled: true,
    introLines: [
      'Clique em um chefe para ver a lista de Speedsters recomendados.',
    ],
    data: specialBossesData
  },
  mainquest: {
    id: 'mainquest',
    label: 'Main Quest',
    variant: 'roleboard',
    searchEnabled: true,
    summary: 'Lutas da Main Quest com recomendações por clã. Alphas são 1v1; Mega Malamar é 3v1, obrigatóriamente de clãs diferentes.',
    pills: ['Alpha 1v1', 'Mega Malamar 3v1', 'Quebra-cabeças'],
    data: mainQuestBosses
  },
  planner: {
    id: 'planner',
    label: 'Planejador',
    variant: 'planner',
    searchEnabled: false,
    summary: 'Monte o card do boss e gere um link compartilhavel.',
    introLines: [
      'Escolha o conteudo, monte a composicao e compartilhe o resultado.'
    ],
    data: []
  }
  ,horizons: {
    id: 'horizons',
    label: 'Horizons',
    variant: 'horizons',
    searchEnabled: false,
    summary: 'Categorias Bronze, Silver e Gold com mobs do caminho e bosses finais.',
    pills: ['Bronze', 'Silver', 'Gold'],
    introLines: [
      'Escolha a categoria para liberar as rotas, sugestoes de tipos e bosses finais.'
    ],
    data: [...horizonsMediumSideABosses, ...horizonsGoldGigalithBosses],
    categories: horizonsCategoriesData,
    runs: horizonsRunsData
  }
};

const bossCatalogIdByReference = new WeakMap();
Object.entries(bossCatalogs).forEach(([catalogId, catalog]) => {
  (catalog?.data || []).forEach((boss) => {
    if (boss && typeof boss === 'object') bossCatalogIdByReference.set(boss, catalogId);
  });
});

const bossModeAliases = Object.freeze({
  hoopa: 'hoopa',
  'hoopa-portais': 'hoopa',
  champion: 'champion',
  champions: 'champion',
  'champion-path': 'champion',
  mew2: 'mew2',
  mewtwo: 'mew2',
  special: 'special',
  especiais: 'special',
  'bosses-especiais': 'special',
  'ranger-bosses': 'special',
  ranger: 'special',
  mainquest: 'mainquest',
  'main-quest': 'mainquest',
  'main-quest-bosses': 'mainquest',
  planner: 'planner',
  planejador: 'planner'
  ,horizons: 'horizons'
});

const standaloneBossModePages = Object.freeze({
  hoopa: 'hoopa-portais.html',
  champion: 'champion-path.html',
  mew2: 'mewtwo.html',
  special: 'ranger-bosses.html',
  mainquest: 'main-quest.html',
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
let plannerShowBrowser = true; // quando true, mostra etapa 1 (navegador de filtros). usar false para focar composicao (etapa 2)
let plannerShareFieldVisible = false;
let plannerShareFeedback = {
  message: '',
  tone: ''
};
let plannerMemberEditModalState = null;
const plannerStageDefinitions = Object.freeze([
  { id: 'source', index: '1', label: 'Conteudo', text: 'Escolha a trilha' },
  { id: 'boss', index: '2', label: 'Boss', text: 'Abra o alvo' },
  { id: 'compose', index: '3', label: 'Composicao', text: 'Monte o card' },
  { id: 'ready', index: '4', label: 'Cards prontos', text: 'Revise e compartilhe' }
]);
const plannerRoleQuickNotes = Object.freeze({});

function normalizeBossMode(mode) {
  const normalizedMode = String(mode || '').trim().toLowerCase();
  return bossModeAliases[normalizedMode] || '';
}

function isBossRouteableMode(mode) {
  return ['hoopa', 'champion', 'mew2', 'special', 'mainquest', 'horizons'].includes(normalizeBossMode(mode));
}

function normalizeBossRouteSlug(value) {
  return String(value || '')
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function getBossRouteBasePath(mode = activeBossMode) {
  const normalizedMode = normalizeBossMode(mode) || 'hoopa';
  if (normalizedMode === 'champion') return '/champion';
  if (normalizedMode === 'mew2') return '/mewtwo';
  if (normalizedMode === 'special') return '/ranger-bosses';
  if (normalizedMode === 'mainquest') return '/main-quest';
  return '/hoopa';
}

function getBossRouteSlug(boss) {
  if (!boss || typeof boss !== 'object') return '';
  return normalizeBossRouteSlug(boss.id || boss.name || '');
}

function findBossByRouteSlug(mode = activeBossMode, slug = '') {
  const normalizedMode = normalizeBossMode(mode) || 'hoopa';
  const normalizedSlug = normalizeBossRouteSlug(slug);
  if (!normalizedSlug || !isBossRouteableMode(normalizedMode)) return null;
  const catalog = bossCatalogs[normalizedMode];
  const entries = Array.isArray(catalog?.data) ? catalog.data : [];
  return entries.find((boss) => getBossRouteSlug(boss) === normalizedSlug) || null;
}

function getSpeedsterSearchRouteSlug(speedster) {
  if (!speedster || typeof speedster !== 'object') return '';
  return normalizeBossRouteSlug(speedster.routeSlug || speedster.id || speedster.name || '');
}

function findSpeedsterSearchResultByRouteSlug(mode = activeBossMode, slug = '') {
  const normalizedMode = normalizeBossMode(mode) || 'hoopa';
  const normalizedSlug = normalizeBossRouteSlug(slug);
  if (!normalizedSlug || !isBossRouteableMode(normalizedMode)) return null;

  const previousMode = activeBossMode;
  if (previousMode !== normalizedMode) {
    activeBossMode = normalizedMode;
  }

  let matches = [];
  try {
    matches = getRecommendedSpeedsters();
  } catch (error) {
    matches = [];
  } finally {
    activeBossMode = previousMode;
  }

  return matches.find((speedster) => getSpeedsterSearchRouteSlug(speedster) === normalizedSlug) || null;
}

function getSpeedsterSearchRoutePath(speedster, mode = activeBossMode) {
  const normalizedMode = normalizeBossMode(mode) || 'hoopa';
  const searchSlug = getSpeedsterSearchRouteSlug(speedster);
  if (!searchSlug) return '';

  const suffix = findBossByRouteSlug(normalizedMode, searchSlug) ? '/pokemon' : '';
  return `${getBossRouteBasePath(normalizedMode)}/${searchSlug}${suffix}`;
}

function getBossLocationImageSource(boss) {
  if (!boss || typeof boss !== 'object') return '';
  const locationImage = String(boss.locationImage || boss.image || '').trim();
  return locationImage ? resolveBossAssetSrc(locationImage) : '';
}

function isLocationOverlayOpen() {
  return Boolean(document.querySelector('.location-overlay'));
}

function getBossLocationRoutePath(boss = activeLocationBoss, mode = activeBossMode) {
  const normalizedMode = normalizeBossMode(mode) || 'hoopa';
  const routeBoss = isBossRouteableMode(normalizedMode)
    ? findBossByRouteSlug(normalizedMode, getBossRouteSlug(boss))
    : null;
  if (!routeBoss) return '';
  return `${getBossRouteBasePath(normalizedMode)}/${getBossRouteSlug(routeBoss)}/mapa`;
}

function getBossTutorialRoutePath(boss = activeBossTutorialBoss, mode = activeBossMode) {
  const normalizedMode = normalizeBossMode(mode) || 'hoopa';
  const routeBoss = isBossRouteableMode(normalizedMode)
    ? findBossByRouteSlug(normalizedMode, getBossRouteSlug(boss))
    : null;
  if (!routeBoss) return '';
  return `${getBossRouteBasePath(normalizedMode)}/${getBossRouteSlug(routeBoss)}/video`;
}

function getBossCurrentRelativeUrl() {
  return `${location.pathname}${location.search}${location.hash || ''}`;
}

function getBossRouteUrlWithCurrentQuery(path = '') {
  return path ? `${path}${location.search}${location.hash || ''}` : '';
}

function getBossDetailRouteUrl(boss = currentBoss, mode = activeBossMode) {
  const normalizedMode = normalizeBossMode(mode) || 'hoopa';
  const routeBoss = isBossRouteableMode(normalizedMode)
    ? findBossByRouteSlug(normalizedMode, getBossRouteSlug(boss))
    : null;
  if (!routeBoss) return '';
  return getBossRouteUrlWithCurrentQuery(
    `${getBossRouteBasePath(normalizedMode)}/${getBossRouteSlug(routeBoss)}`
  );
}

function getBossBaseRouteUrl(mode = activeBossMode) {
  return getBossRouteUrlWithCurrentQuery(getBossRouteBasePath(mode));
}

function getBossPreferredRestoreUrl(boss = null, mode = activeBossMode) {
  const detailUrl = isBossModalOpen()
    ? getBossDetailRouteUrl(currentBoss || boss, mode)
    : '';
  return detailUrl || getBossBaseRouteUrl(mode);
}

function replaceBossRelativeUrl(nextUrl = '') {
  if (!nextUrl || typeof history === 'undefined') return false;
  try {
    history.replaceState(null, '', nextUrl);
    return true;
  } catch (error) {
    return false;
  }
}

function restoreBossRouteUrl(restoreUrl = '') {
  if (replaceBossRelativeUrl(restoreUrl)) {
    if (typeof syncSidebarNavigationState === 'function') {
      try { syncSidebarNavigationState(); } catch (error) {}
    }
    return true;
  }

  if (typeof updateUrl === 'function') {
    try {
      updateUrl({ historyMode: 'replace' });
      return true;
    } catch (error) {}
  }

  return false;
}

function isBossTutorialModalOpen() {
  return Boolean(
    activeBossTutorialBoss
    && typeof window.isSiteYouTubeModalOpen === 'function'
    && window.isSiteYouTubeModalOpen()
  );
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
    currentFile === 'bosses-especiais.html' ||
    currentFile === 'ranger-bosses.html' ||
    currentFile === 'planejador.html'
  ) {
    segments[segments.length - 1] = targetFile;
  } else {
    segments[segments.length - 1] = targetFile;
  }

  return segments.join('/');
}

function getBossModeFromPathname(pathname) {
  const segments = String(pathname || '')
    .split('/')
    .filter(Boolean)
    .map((segment) => segment.replace(/\.html?$/i, ''));

  if (!segments.length) return '';

  const last = segments[segments.length - 1] || '';
  const first = segments[0] || '';

  return normalizeBossMode(last)
    || normalizeBossMode(first)
    || '';
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

// Derivado dos movesets cadastrados em /pokemons para os Pokemon usados nas recomendacoes.
const bossRecommendationCatalogMoveTypesByNameKey = Object.freeze({
  absol: Object.freeze(['dark']),
  aegislash: Object.freeze(['steel']),
  alakazam: Object.freeze(['psychic']),
  appletun: Object.freeze(['grass']),
  banette: Object.freeze(['ghost']),
  bastiodon: Object.freeze(['steel']),
  bellossom: Object.freeze(['grass']),
  blastoisetwo: Object.freeze(['water']),
  blissey: Object.freeze(['fairy']),
  bouffalant: Object.freeze(['ground']),
  bronzong: Object.freeze(['steel']),
  carracosta: Object.freeze(['rock']),
  chansey: Object.freeze(['psychic']),
  charizardtwo: Object.freeze(['fire']),
  chesnaught: Object.freeze(['grass']),
  chingling: Object.freeze(['psychic']),
  claydol: Object.freeze(['ground']),
  comfey: Object.freeze(['fairy']),
  corsola: Object.freeze(['rock']),
  dachsbun: Object.freeze(['fairy']),
  dedenne: Object.freeze(['fairy']),
  delphox: Object.freeze(['fire']),
  dewgong: Object.freeze(['ice']),
  dragonair: Object.freeze(['dragon']),
  drifblim: Object.freeze(['flying']),
  drifloon: Object.freeze(['fire']),
  duraludon: Object.freeze(['electric']),
  dusclops: Object.freeze(['ghost']),
  dustox: Object.freeze(['poison']),
  excadrill: Object.freeze(['steel']),
  farfetchd: Object.freeze(['flying']),
  goodra: Object.freeze(['water']),
  gorgingcramorant: Object.freeze(['water']),
  greninja: Object.freeze(['water']),
  grumpig: Object.freeze(['dark']),
  hawlucha: Object.freeze(['fighting']),
  heracross: Object.freeze(['fighting']),
  hippowdonfemale: Object.freeze(['ground']),
  hitmonchan: Object.freeze(['fighting']),
  houndour: Object.freeze(['dark']),
  kabutops: Object.freeze(['rock']),
  kadabra: Object.freeze(['psychic']),
  kingdra: Object.freeze(['dragon']),
  kirlia: Object.freeze(['fairy']),
  lickitung: Object.freeze(['normal']),
  lombre: Object.freeze(['grass']),
  lopunny: Object.freeze(['fighting']),
  lurantis: Object.freeze(['bug']),
  magcargo: Object.freeze(['fire']),
  magnezone: Object.freeze(['steel']),
  mantine: Object.freeze(['flying']),
  marowak: Object.freeze(['ground']),
  maysbeautifly: Object.freeze(['flying']),
  megaabsolz: Object.freeze(['dark', 'fairy']),
  megadelphox: Object.freeze(['fire']),
  megaexcadrill: Object.freeze(['ground']),
  megaferaligatr: Object.freeze(['dragon']),
  megagardevoir: Object.freeze(['fairy']),
  megagreninja: Object.freeze(['water']),
  megagyarados: Object.freeze(['dark']),
  megahawlucha: Object.freeze(['fighting']),
  megahoundoom: Object.freeze(['dark']),
  megalucario: Object.freeze(['fighting']),
  megalucarioz: Object.freeze(['steel']),
  megaraichux: Object.freeze(['fighting']),
  megaraichuy: Object.freeze(['electric']),
  megasceptile: Object.freeze(['grass']),
  megascizor: Object.freeze(['steel']),
  megaskarmory: Object.freeze(['flying']),
  megastarmie: Object.freeze(['psychic']),
  miltank: Object.freeze(['ground']),
  misdreavus: Object.freeze(['ghost']),
  munchlax: Object.freeze(['fighting']),
  onix: Object.freeze(['rock']),
  orbeetle: Object.freeze(['psychic']),
  orthworm: Object.freeze(['ground']),
  pachirisu: Object.freeze(['electric']),
  pikachu: Object.freeze(['electric']),
  politoed: Object.freeze(['water']),
  ponyta: Object.freeze(['fire']),
  porygon2: Object.freeze(['electric']),
  probopass: Object.freeze(['steel']),
  pyroarfemale: Object.freeze(['grass']),
  qwilfish: Object.freeze(['poison']),
  raticate: Object.freeze(['dark']),
  ribombee: Object.freeze(['fairy']),
  rosasserperior: Object.freeze(['grass']),
  sableye: Object.freeze(['ghost']),
  scolipede: Object.freeze(['poison']),
  scyther: Object.freeze(['bug']),
  seaking: Object.freeze(['ground']),
  serperior: Object.freeze(['grass']),
  seviper: Object.freeze(['poison']),
  shieldon: Object.freeze(['rock']),
  shiftry: Object.freeze(['dark']),
  shuckle: Object.freeze(['rock']),
  slowbro: Object.freeze(['psychic']),
  snorlax: Object.freeze(['normal']),
  swalot: Object.freeze(['poison']),
  tangrowth: Object.freeze(['grass']),
  tauros: Object.freeze(['electric']),
  tentacruel: Object.freeze(['poison']),
  torkoal: Object.freeze(['fire']),
  toxapex: Object.freeze(['poison']),
  vanilluxe: Object.freeze(['ice']),
  venusaurtwo: Object.freeze(['grass']),
  walrein: Object.freeze(['ice']),
  weavile: Object.freeze(['ice']),
  weezing: Object.freeze(['poison']),
  wobbuffet: Object.freeze(['psychic']),
  wynaut: Object.freeze(['psychic']),
  zorua: Object.freeze(['dark'])
});

const bossRecommendationMinimumLevel = 50;
const bossRecommendationKnownLevelByNameKey = Object.freeze({
  bayleef: 30,
  chikorita: 5
});

function parseBossRecommendationLevel(value) {
  const rawLevel = String(value ?? '').trim();
  if (!rawLevel) return null;

  const level = Number(rawLevel);
  return Number.isFinite(level) ? level : null;
}

function getBossRecommendationCatalogLevel(pick) {
  const directLevel = parseBossRecommendationLevel(pick?.level);
  if (directLevel !== null) return directLevel;

  if (typeof window !== 'undefined' && typeof window.getPokemonCatalogEntryLevelByName === 'function') {
    const catalogLevel = parseBossRecommendationLevel(window.getPokemonCatalogEntryLevelByName(pick?.name || pick));
    if (catalogLevel !== null) return catalogLevel;
  }

  const nameKey = getRecommendationNameKey(pick);
  if (Object.prototype.hasOwnProperty.call(bossRecommendationKnownLevelByNameKey, nameKey)) {
    return bossRecommendationKnownLevelByNameKey[nameKey];
  }

  if (nameKey.startsWith('shiny')) {
    const baseNameKey = nameKey.replace(/^shiny/, '');
    if (Object.prototype.hasOwnProperty.call(bossRecommendationKnownLevelByNameKey, baseNameKey)) {
      return bossRecommendationKnownLevelByNameKey[baseNameKey];
    }
  }

  return null;
}

function isBossRecommendationLevelEligible(pick) {
  const level = getBossRecommendationCatalogLevel(pick);
  return level === null || level >= bossRecommendationMinimumLevel;
}

function filterBossRecommendationsByMinimumLevel(picks = []) {
  return (picks || []).filter(isBossRecommendationLevelEligible);
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

function createFixedRecommendationDefinition(name, primaryType, role, expectedClan = '', options = {}) {
  const normalizedPrimaryType = String(primaryType || '').trim().toLowerCase();
  const normalizedRole = String(role || '').trim().toLowerCase();
  const normalizedMoveType = String(options?.moveType || '').trim().toLowerCase();
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
    moveType: normalizedMoveType,
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
      createFixedRecommendationDefinition("Excadrill", 'ground', 'dps', 'instinct', { moveType: 'steel' }),
      createFixedRecommendationDefinition("Lurantis", 'grass', 'dps', 'instinct'),
      createFixedRecommendationDefinition("Mega Excadrill", 'ground', 'dps', 'instinct'),
      createFixedRecommendationDefinition("Marowak", 'ground', 'dps', 'instinct'),
      createFixedRecommendationDefinition("Mega Gardevoir", 'psychic', 'dps', 'instinct'),
      createFixedRecommendationDefinition("Mega Raichu X", 'electric', 'dps', 'instinct'),
      createFixedRecommendationDefinition("Mega Raichu Y", 'electric', 'dps', 'instinct'),
      createFixedRecommendationDefinition("Mega Sceptile", 'grass', 'dps', 'instinct'),
      createFixedRecommendationDefinition("Pikachu", 'electric', 'dps', 'instinct'),
      createFixedRecommendationDefinition("Rosa's Serperior", 'grass', 'dps', 'instinct'),
      createFixedRecommendationDefinition("Serperior", 'grass', 'dps', 'instinct'),
      createFixedRecommendationDefinition("Seviper", 'poison', 'dps', 'instinct'),
      createFixedRecommendationDefinition("Shiftry", 'grass', 'dps', 'instinct'),
      createFixedRecommendationDefinition("VenusaurTwo", 'grass', 'dps', 'instinct')
    ]),
    tank: Object.freeze([
      createFixedRecommendationDefinition("Appletun", 'grass', 'tank', 'instinct'),
      createFixedRecommendationDefinition("Bayleef", 'grass', 'tank', 'instinct'),
      createFixedRecommendationDefinition("Chesnaught", 'grass', 'tank', 'instinct'),
      createFixedRecommendationDefinition("Chikorita", 'grass', 'tank', 'instinct'),
      createFixedRecommendationDefinition("Claydol", 'ground', 'tank', 'instinct'),
      createFixedRecommendationDefinition("Goodra", 'dragon', 'tank', 'instinct'),
      createFixedRecommendationDefinition("Grumpig", 'psychic', 'tank', 'instinct', { moveType: 'dark' }),
      createFixedRecommendationDefinition("Hippowdon Female", 'ground', 'tank', 'instinct'),
      createFixedRecommendationDefinition("Magnezone", 'electric', 'tank', 'instinct'),
      createFixedRecommendationDefinition("Tangrowth", 'grass', 'tank', 'instinct'),
      createFixedRecommendationDefinition("Toxapex", 'poison', 'tank', 'instinct'),
      createFixedRecommendationDefinition("Weezing", 'poison', 'tank', 'instinct'),
      createFixedRecommendationDefinition("Wobbuffet", 'psychic', 'tank', 'instinct')
    ]),
    support: Object.freeze([
      createFixedRecommendationDefinition("Bellossom", 'grass', 'support', 'instinct'),
      createFixedRecommendationDefinition("Chingling", 'psychic', 'support', 'instinct'),
      createFixedRecommendationDefinition("Kadabra", 'psychic', 'support', 'instinct'),
      createFixedRecommendationDefinition("Kirlia", 'psychic', 'support', 'instinct'),
      createFixedRecommendationDefinition("Pachirisu", 'electric', 'support', 'instinct'),
      createFixedRecommendationDefinition("Swalot", 'poison', 'support', 'instinct'),
      createFixedRecommendationDefinition("Wynaut", 'psychic', 'support', 'instinct')
    ])
  }),
  mystic: Object.freeze({
    dps: Object.freeze([
      createFixedRecommendationDefinition("Banette", 'ghost', 'dps', 'mystic'),
      createFixedRecommendationDefinition("Gengar", 'ghost', 'dps', 'mystic'),
      createFixedRecommendationDefinition("BlastoiseTwo", 'water', 'dps', 'mystic'),
      createFixedRecommendationDefinition("Dachsbun", 'fairy', 'dps', 'mystic'),
      createFixedRecommendationDefinition("Dewgong", 'water', 'dps', 'mystic'),
      createFixedRecommendationDefinition("Drifloon", 'ghost', 'dps', 'mystic'),
      createFixedRecommendationDefinition("Duraludon", 'steel', 'dps', 'mystic', { moveType: 'electric' }),
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
      createFixedRecommendationDefinition("Dusclops", 'ghost', 'tank', 'mystic'),
      createFixedRecommendationDefinition("Hitmonchan", 'fighting', 'tank', 'mystic'),
      createFixedRecommendationDefinition("Slowbro", 'water', 'tank', 'mystic', { moveType: 'psychic' }),
      createFixedRecommendationDefinition("Tentacruel", 'water', 'tank', 'mystic', { moveType: 'poison' }),
      createFixedRecommendationDefinition("Walrein", 'ice', 'tank', 'mystic')
    ]),
    support: Object.freeze([
      createFixedRecommendationDefinition("Comfey", 'fairy', 'support', 'mystic'),
      createFixedRecommendationDefinition("Corsola", 'water', 'support', 'mystic', { moveType: 'rock' }),
      createFixedRecommendationDefinition("Misdreavus", 'ghost', 'support', 'mystic'),
      createFixedRecommendationDefinition("Politoed", 'water', 'support', 'mystic'),
      createFixedRecommendationDefinition("Smoochum", 'ice', 'support', 'mystic'),
      createFixedRecommendationDefinition("Vanilluxe", 'ice', 'support', 'mystic')
    ])
  }),
  valor: Object.freeze({
    dps: Object.freeze([
      createFixedRecommendationDefinition("Absol", 'dark', 'dps', 'valor'),
      createFixedRecommendationDefinition("Bouffalant", 'normal', 'dps', 'valor'),
      createFixedRecommendationDefinition("CharizardTwo", 'fire', 'dps', 'valor'),
      createFixedRecommendationDefinition("Gorging Cramorant", 'flying', 'dps', 'valor', { moveType: 'water' }),
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
      createFixedRecommendationDefinition("Raticate", 'normal', 'dps', 'valor', { moveType: 'dark' }),
      createFixedRecommendationDefinition("Ribombee", 'bug', 'dps', 'valor'),
      createFixedRecommendationDefinition("Scolipede", 'bug', 'dps', 'valor'),
      createFixedRecommendationDefinition("Scyther", 'bug', 'dps', 'valor'),
      createFixedRecommendationDefinition("Tauros", 'normal', 'dps', 'valor'),
      createFixedRecommendationDefinition("Weavile", 'dark', 'dps', 'valor')
    ]),
    tank: Object.freeze([
      createFixedRecommendationDefinition("Bastiodon", 'rock', 'tank', 'valor'),
      createFixedRecommendationDefinition("Lickitung", 'normal', 'tank', 'valor'),
      createFixedRecommendationDefinition("Magcargo", 'fire', 'tank', 'valor'),
      createFixedRecommendationDefinition("Miltank", 'normal', 'tank', 'valor'),
      createFixedRecommendationDefinition("Onix", 'rock', 'tank', 'valor'),
      createFixedRecommendationDefinition("Orbeetle", 'bug', 'tank', 'valor'),
      createFixedRecommendationDefinition("Probopass", 'rock', 'tank', 'valor'),
      createFixedRecommendationDefinition("Sableye", 'dark', 'tank', 'valor'),
      createFixedRecommendationDefinition("Shieldon", 'rock', 'tank', 'valor'),
      createFixedRecommendationDefinition("Shuckle", 'bug', 'tank', 'valor'),
      createFixedRecommendationDefinition("Snorlax", 'normal', 'tank', 'valor'),
      createFixedRecommendationDefinition("Torkoal", 'fire', 'tank', 'valor')
    ]),
    support: Object.freeze([
      createFixedRecommendationDefinition("Blissey", 'normal', 'support', 'valor'),
      createFixedRecommendationDefinition("Chansey", 'normal', 'support', 'valor', { moveType: 'psychic' }),
      createFixedRecommendationDefinition("Dustox", 'bug', 'support', 'valor', { moveType: 'poison' }),
      createFixedRecommendationDefinition("Houndour", 'dark', 'support', 'valor'),
      createFixedRecommendationDefinition("Lopunny", 'normal', 'support', 'valor'),
      createFixedRecommendationDefinition("Munchlax", 'normal', 'support', 'valor', { moveType: 'fighting' }),
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
  if (registryEntry.moveType) {
    pick.moveType = registryEntry.moveType;
  }
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
  scyther: 'Shiny Scyther',
  claydol: 'Shiny Claydol',
  bronzong: 'Shiny Bronzong',
  miltank: 'Shiny Miltank'
});

const megaAbsolZMovesetNote = 'Possui moveset Dark e um ataque que muda seu moveset para Fairy.';

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

  if (nameKey === 'gorgingcramorant') {
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

  if (nameKey === 'megaabsolz' || nameKey === 'shinymegaabsolz') {
    return {
      passiveName: 'Super Luck',
      passiveDescription: `Ao atacar fisicamente tem chance de conceder um bonus de 20% de forca para a proxima habilidade. So pode ocorrer uma vez a cada 20 segundos. ${megaAbsolZMovesetNote}`
    };
  }

  if (
    nameKey === 'absol' ||
    nameKey === 'shinyabsol' ||
    nameKey === 'megaabsol' ||
    nameKey === 'shinymegaabsol'
  ) {
    return {
      passiveName: 'Super Luck',
      passiveDescription: 'Ao atacar fisicamente tem chance de conceder um bonus de 20% de forca para a proxima habilidade. So pode ocorrer uma vez a cada 20 segundos.'
    };
  }

  if (nameKey === 'banette' || nameKey === 'shinybanette' || nameKey === 'megabanette') {
    return {
      defenseByBossType: {
        psychic: 0.75,
        ghost: 0.75
      },
      passiveName: 'Red Eyes',
      passiveDescription: 'O Pokemon recebe dano inafetivo de ataques dos tipos Psychic e Ghost.'
    };
  }

  if (nameKey === 'sableye' || nameKey === 'shinysableye') {
    return {
      defenseByBossType: {
        ghost: 0.75
      },
      passiveName: 'Stall',
      passiveDescription: 'Sableye tem chance de ficar invisivel por segundos ao atacar, isso aumenta o dano da sua proxima habilidade em 10%. Em contraparte, isso torna seu ataque fisico mais lento. Alem disso, o Pokemon recebe dano inafetivo de ataques do tipo Ghost.'
    };
  }

  if (nameKey === 'kadabra') {
    return {
      defenseByBossType: {
        ghost: 0.75
      },
      passiveName: 'Synchronize',
      passiveDescription: 'Torna o Pokemon imune aos efeitos negativos: Paralyze, Poison e Burn. Tambem recebe dano inafetivo de ataques do tipo Ghost.'
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

  if (nameKey === 'heracross' || nameKey === 'shinyheracross') {
    return {
      passiveName: 'Guts',
      passiveDescription: 'O Pokemon se torna imune aos status Slow, Paralyze e Silence.'
    };
  }

  if (nameKey === 'dragonair' || nameKey === 'shinydragonair') {
    return {
      defenseDamageFactorByBossType: {
        dragon: 0.5,
        fairy: 0.5,
        ice: 0.5
      },
      passiveName: 'Marvel Scale',
      passiveDescription: 'O Pokémon sofre menos dano de ataques super efetivos (0.5x).'
    };
  }

  if (nameKey === 'serperior' || nameKey === 'rosasserperior') {
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
      passiveName: 'Lightning Rod',
      passiveDescription: 'O Pokemon se torna imune a danos do tipo Electric.'
    };
  }

  if (nameKey === 'megasceptile' || nameKey === 'shinymegasceptile') {
    return {
      immunities: ['electric'],
      passiveName: 'Lightning Rod',
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
      defenseDamageFactorByBossType: {
        fighting: 0.5
      },
      passiveName: 'Light Metal',
      passiveDescription: 'O Pokemon leva dano reduzido de ataques lutadores (0.5x).'
    };
  }

  if (nameKey === 'shinyscizor') {
    return {
      defenseDamageFactorByBossType: {
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
      defenseDamageFactorByBossType: {
        ice: 0.5,
        fire: 0.5
      },
      passiveName: 'Thick Fat',
      passiveDescription: 'O Pokemon recebe metade do dano de ataques do tipo Ice e Fire.'
    };
  }

  if (nameKey === 'shinymiltank') {
    return {
      defenseDamageFactorByBossType: {
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
      passiveDescription: 'Sua gosma espessa torna ataques do tipo Dragon super inefetivos contra este Pokemon (0.5x).'
    };
  }

  if (nameKey === 'wobbuffet') {
    return {
      defenseDamageFactorByBossType: {
        psychic: 0.5
      }
    };
  }

  if (nameKey === 'claydol') {
    return {
      defenseByBossType: {
        psychic: 0.75,
        ghost: 0.75
      },
      passiveName: 'Force Cosmik',
      passiveDescription: 'A sua ligação transcendental com o cosmos torna a sua mente um vazio impenetrável, garantindo resistência contra ataques dos tipos Psychic e Ghost.'
    };
  }

  if (nameKey === 'shinyclaydol') {
    return {
      immunities: ['ground'],
      defenseByBossType: {
        psychic: 0.75,
        ghost: 0.75
      },
      passiveName: 'Force Cosmik + Mystery Charge',
      passiveDescription: 'A sua ligação transcendental com o cosmos torna a sua mente um vazio impenetrável, garantindo resistência contra ataques dos tipos Psychic e Ghost.; A telecinese em seu corpo de barro gera um campo magnético, concedendo imunidade a ataques do tipo Ground.'
    };
  }

  if (nameKey === 'dusclops' || nameKey === 'shinydusclops') {
    return {
      defenseByBossType: {
        ghost: 0.75,
        psychic: 0.75
      },
      passiveName: 'Cursed Glare',
      passiveDescription: 'O olhar vazio deste Pokémon atua como um buraco negro para energias místicas, garantindo resistência contra ataques dos tipos Ghost e Psychic.'
    };
  }

  if (nameKey === 'misdreavus' || nameKey === 'misdreavous') {
    return {
      defenseByBossType: {
        ghost: 0.75
      },
      passiveName: 'Omnious Eyes',
      passiveDescription: 'O Pokemon recebe dano inafetivo de ataques do tipo Ghost.'
    };
  }

  if (nameKey === 'bronzong') {
    return {
      immunities: ['ground'],
      passiveName: 'Levitate',
      passiveDescription: 'O Pokémon é imune a danos do tipo GROUND.'
    };
  }

  if (nameKey === 'shinybronzong') {
    return {
      immunities: ['ground'],
      passiveName: 'Levitate + Protective Bell',
      passiveDescription: 'O Pokémon é imune a danos do tipo GROUND.; Sempre que o Shiny Bronzong utiliza o golpe Iron Defense, seu corpo ecoa como um sino. Esse som envolve todos os aliados proximos, garantindo a eles um bônus de 20% de Defesa durante 10 segundos.'
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
    babiri: Object.freeze({
      label: 'Babiri Ration',
      shortLabel: 'Babiri',
      image: 'rations/babiri_ration.png',
      description: 'Aumenta a resistencia contra ataques Steel em 30% por 60 minutos.'
    }),
    chilan: Object.freeze({
      label: 'Chilan Ration',
      shortLabel: 'Chilan',
      image: 'rations/chilan_ration.png',
      description: 'Aumenta a resistencia contra ataques Normal em 30% por 60 minutos.'
    }),
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
    colbur: Object.freeze({
      label: 'Colbur Ration',
      shortLabel: 'Colbur',
      image: 'rations/colbur_ration.png',
      description: 'Aumenta a resistencia contra ataques Dark em 30% por 60 minutos.'
    }),
    kebia: Object.freeze({
      label: 'Kebia Ration',
      shortLabel: 'Kebia',
      image: 'rations/kebia_ration.png',
      description: 'Aumenta a resistencia contra ataques Poison em 30% por 60 minutos.'
    }),
    payapa: Object.freeze({
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
      image: 'rations/passho_ration.png',
      description: 'Aumenta a resistencia contra ataques Water em 30% por 60 minutos.'
    }),
    roseli: Object.freeze({
      label: 'Roseli Ration',
      shortLabel: 'Roseli',
      image: 'rations/roseli_ration.png',
      description: 'Aumenta a resistencia contra ataques Fairy em 30% por 60 minutos.'
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
  steel: bossConsumableCatalog.rations.babiri,
  normal: bossConsumableCatalog.rations.chilan,
  ghost: bossConsumableCatalog.rations.kasib,
  electric: bossConsumableCatalog.rations.wacan,
  bug: bossConsumableCatalog.rations.tanga,
  dark: bossConsumableCatalog.rations.colbur,
  poison: bossConsumableCatalog.rations.kebia,
  grass: bossConsumableCatalog.rations.rindo,
  psychic: bossConsumableCatalog.rations.payapa,
  dragon: bossConsumableCatalog.rations.haban,
  ground: bossConsumableCatalog.rations.shuca,
  flying: bossConsumableCatalog.rations.coba,
  fighting: bossConsumableCatalog.rations.chople,
  fire: bossConsumableCatalog.rations.occa,
  ice: bossConsumableCatalog.rations.yache,
  rock: bossConsumableCatalog.rations.charti,
  water: bossConsumableCatalog.rations.passho,
  fairy: bossConsumableCatalog.rations.roseli,
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

function createGoodraRecommendationPick() {
  const pick = createRolePick('Goodra', ['dragon'], 'water', {
    defenseByBossType: {
      dragon: 0.5
    },
    passiveName: 'Gooey',
    passiveDescription: 'Sua gosma espessa torna ataques do tipo Dragon super inefetivos contra este Pokemon (0.5x).'
  });
  pick.description = 'Tipo move: Water.';
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
    list.push(createGoodraRecommendationPick());
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

  poke.defenseDamageFactorByBossType = mergeLowercaseNumericMap(
    poke.defenseDamageFactorByBossType,
    profile.defenseDamageFactorByBossType
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
      normalizeRecommendationTier(pick);
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
          normalizeRecommendationTier(pick);
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
      normalizeRecommendationTier(pick);
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

function isShinyRecommendationVariant(nameOrPokemon) {
  const rawName = typeof nameOrPokemon === 'string'
    ? nameOrPokemon
    : nameOrPokemon?.name;
  return /^shiny\b/i.test(String(rawName || '').trim());
}

function getRecommendationVariantBaseKey(nameOrPokemon) {
  const rawName = typeof nameOrPokemon === 'string'
    ? nameOrPokemon
    : nameOrPokemon?.name;
  const normalizedName = String(rawName || '')
    .replace(/^shiny\b[\s-]*/i, '')
    .trim();
  return getRecommendationNameKey(normalizedName);
}

function getRecommendationPassiveInfoItems(passiveInfo) {
  if (!passiveInfo?.text) return [];
  return (
    Array.isArray(passiveInfo.items) && passiveInfo.items.length
      ? passiveInfo.items
      : [passiveInfo.text]
  )
    .map((item) => String(item || '').replace(/\s+/g, ' ').trim())
    .filter(Boolean);
}

function cloneRecommendationPassiveInfo(passiveInfo) {
  const items = getRecommendationPassiveInfoItems(passiveInfo);
  if (!items.length) return null;

  return {
    ...passiveInfo,
    text: String(passiveInfo.text || '').replace(/\s+/g, ' ').trim() || items.join(' '),
    items
  };
}

function getRecommendationPassiveInfoSignature(passiveInfo) {
  const items = getRecommendationPassiveInfoItems(passiveInfo);
  return items.length ? JSON.stringify(items) : '';
}

function mergeShinyRecommendationVariantIntoBasePick(basePick, shinyPick, bossRef) {
  if (!basePick || !shinyPick || !bossRef) return;

  applyCatalogMoveTypesToRecommendation(basePick);
  applyCatalogMoveTypesToRecommendation(shinyPick);
  applyImplicitRecommendationEnhancements(basePick);
  applyImplicitRecommendationEnhancements(shinyPick);

  const shinyPassiveInfo = getRecommendationPassiveInfo(shinyPick);
  const shinyPassiveSignature = getRecommendationPassiveInfoSignature(shinyPassiveInfo);

  if (shinyPassiveSignature) {
    basePick._shinyVariantPassiveInfo = cloneRecommendationPassiveInfo(shinyPassiveInfo);
    basePick._hasShinyVariant = true;
  }

  const scoredBase = scoreRecommendationForBoss(bossRef, cloneRolePickConfig(basePick));
  const scoredShiny = scoreRecommendationForBoss(bossRef, cloneRolePickConfig(shinyPick));
  const baseTierPriority = getRecommendationTierPriority(scoredBase.tier);
  const shinyTierPriority = getRecommendationTierPriority(scoredShiny.tier);
  const shinyTier = shinyTierPriority <= baseTierPriority ? scoredShiny.tier : scoredBase.tier;
  basePick._shinyVariantTier = shinyTier;
  const shinyChangesScore = scoredBase._offense !== scoredShiny._offense
    || scoredBase._defenseWorst !== scoredShiny._defenseWorst
    || scoredBase.tier !== shinyTier;

  if (shinyChangesScore) {
    basePick._shinyVariantComparison = {
      name: shinyPick.name,
      offense: scoredShiny._offense,
      defenseWorst: scoredShiny._defenseWorst,
      tier: shinyTier
    };
  }
}

function createBaseRecommendationVariantFromShinyPick(shinyPick, seedConfigs = {}) {
  if (!shinyPick) return null;

  const registryEntry = getFixedRecommendationEntry(shinyPick);
  if (registryEntry) {
    return createFixedRecommendationPickFromRegistryEntry(registryEntry, seedConfigs);
  }

  const clonedPick = cloneRolePickConfig(shinyPick);
  clonedPick.name = String(clonedPick.name || '').replace(/^shiny\b[\s-]*/i, '').trim() || clonedPick.name;
  delete clonedPick.tier;
  delete clonedPick.tierLocked;
  return clonedPick;
}

function mergeShinyRecommendationVariantsInList(picks = [], bossRef, seedConfigs = {}) {
  if (!Array.isArray(picks) || !picks.length || !bossRef) return;

  const groupedEntries = [];
  const groupByBaseKey = new Map();

  picks.forEach((pick) => {
    const baseKey = getRecommendationVariantBaseKey(pick);
    if (!baseKey) {
      groupedEntries.push({ baseKey: '', picks: [pick] });
      return;
    }

    if (!groupByBaseKey.has(baseKey)) {
      const entry = { baseKey, picks: [] };
      groupByBaseKey.set(baseKey, entry);
      groupedEntries.push(entry);
    }

    groupByBaseKey.get(baseKey).picks.push(pick);
  });

  const mergedPicks = [];

  groupedEntries.forEach((entry) => {
    const sourcePicks = Array.isArray(entry?.picks) ? entry.picks : [];
    const explicitBasePick = sourcePicks.find((pick) => !isShinyRecommendationVariant(pick));
    const shinyPicks = sourcePicks.filter((pick) => isShinyRecommendationVariant(pick));
    const basePick = explicitBasePick || createBaseRecommendationVariantFromShinyPick(shinyPicks[0], seedConfigs);

    if (!basePick) {
      mergedPicks.push(...sourcePicks);
      return;
    }

    shinyPicks.forEach((shinyPick) => {
      mergeShinyRecommendationVariantIntoBasePick(basePick, shinyPick, bossRef);
    });

    mergedPicks.push(basePick);

    sourcePicks.forEach((pick) => {
      if (pick === basePick || shinyPicks.includes(pick)) return;
      mergedPicks.push(pick);
    });
  });

  picks.splice(0, picks.length, ...dedupeRecommendedPicksByName(mergedPicks));
}

function mergeShinyRecommendationVariantsAcrossBossCatalogs() {
  const seedConfigs = buildFixedRecommendationSeedConfigs();

  Object.values(bossCatalogs).forEach((catalog) => {
    (catalog.data || []).forEach((boss) => {
      Object.values(boss.clans || {}).forEach((clanData) => {
        if (Array.isArray(clanData.recommended)) {
          mergeShinyRecommendationVariantsInList(clanData.recommended, boss, seedConfigs);
        }

        if (Array.isArray(clanData.recommendationGroups)) {
          clanData.recommendationGroups.forEach((group) => {
            mergeShinyRecommendationVariantsInList(group.recommended, getRecommendationGroupBossRef(boss, group), seedConfigs);
          });
        }

        if (clanData.roles) {
          roleboardRoleOrder.forEach((roleKey) => {
            mergeShinyRecommendationVariantsInList(clanData.roles?.[roleKey], boss, seedConfigs);
          });
        }
      });
    });
  });
}

function mergeShinyRecommendationVariantsForRoleboardBosses(bosses = [], seedConfigs = buildFixedRecommendationSeedConfigs()) {
  (Array.isArray(bosses) ? bosses : []).forEach((boss) => {
    Object.values(boss?.clans || {}).forEach((clanData) => {
      roleboardRoleOrder.forEach((roleKey) => {
        const picks = clanData?.roles?.[roleKey];
        if (!Array.isArray(picks) || !picks.length) return;
        ensureMirroredRecommendationVariantsInList(picks);
        mergeShinyRecommendationVariantsInList(picks, boss, seedConfigs);
      });
    });
  });
}

function hydrateRecommendationCatalog() {
  visitAllRecommendationPicks((poke) => {
    applyCatalogMoveTypesToRecommendation(poke);
    applyImplicitRecommendationEnhancements(poke);
  });
}

const bossTutorialLinks = Object.freeze({
  // Preencher depois com o id do boss e a URL do vídeo.
  // Exemplo:
  // 'mega-staraptor': 'https://www.youtube.com/watch?v=...'
});

function isBossesStandaloneAssetContext() {
  const p = location.pathname.toLowerCase();
  return /(?:^|\/)bosses(?:\/|$)/.test(p.replace(/\/index\.html?$/i, '/'));
}

const basePath = (() => {
  return isBossesStandaloneAssetContext() ? '' : 'bosses/';
})();

const bossPokemonAssetAliases = Object.freeze({
  'absol.png': 'pokemons/3gen/absol.png',
  'aegislash.png': 'pokemons/6gen/aegislash.png',
  'alakazam.png': 'pokemons/1gen/alakazam.png',
  'appletun.png': 'pokemons/8gen/appletun.png',
  'armarouge.png': 'pokemons/9gen/armarouge.png',
  'banette.png': 'pokemons/3gen/banette.png',
  'bastiodon.png': 'pokemons/4gen/bastiodon.png',
  'bayleef.png': 'pokemons/2gen/bayleef.png',
  'bellossom.png': 'pokemons/2gen/bellossom.png',
  'blastoise.png': 'pokemons/1gen/blastoise.png',
  'blastoisetwo.png': 'pokemons/1gen/BlastoiseTwo.png',
  'blissey.png': 'pokemons/2gen/blissey.png',
  'bouffalant.png': 'pokemons/5gen/bouffalant.png',
  'bronzong.png': 'pokemons/4gen/bronzong.png',
  'carracosta.png': 'pokemons/5gen/carracosta.png',
  'chansey.png': 'pokemons/1gen/chansey.png',
  'charizard.png': 'pokemons/1gen/charizard.png',
  'charizardtwo.png': 'pokemons/1gen/CharizardTwo.png',
  'chesnaught.png': 'pokemons/6gen/chesnaught.png',
  'chikorita.png': 'pokemons/2gen/chikorita.png',
  'chingling.png': 'pokemons/4gen/chingling.png',
  'claydol.png': 'pokemons/3gen/claydol.png',
  'clefable.png': 'pokemons/1gen/clefable.png',
  'comfey.png': 'pokemons/7gen/comfey.png',
  'conkeldurr.png': 'pokemons/5gen/conkeldurr.png',
  'corsola.png': 'pokemons/2gen/corsola.png',
  'dachsbun.png': 'pokemons/9gen/dachsbun.png',
  'dedenne.png': 'pokemons/6gen/dedenne.png',
  'delphox.png': 'pokemons/6gen/delphox.png',
  'dewgong.png': 'pokemons/1gen/dewgong.png',
  'dragonair.png': 'pokemons/1gen/dragonair.png',
  'drifblim.png': 'pokemons/4gen/drifblim.png',
  'drifloon.png': 'pokemons/4gen/drifloon.png',
  'dustox.png': 'pokemons/3gen/dustox.png',
  'dugtrio.png': 'pokemons/1gen/dugtrio.png',
  'duraludon.png': 'pokemons/8gen/duraludon.png',
  'dusclops.png': 'pokemons/3gen/dusclops.png',
  'electrode.png': 'pokemons/1gen/electrode.png',
  'excadrill.png': 'pokemons/5gen/excadrill.png',
  'farfetch-d.png': 'pokemons/1gen/farfetchd.png',
  'farfetchd.png': 'pokemons/1gen/farfetchd.png',
  'fidough.png': 'pokemons/9gen/fidough.png',
  'gorging-cramorant.png': 'pokemons/8gen/gorging-cramorant.png',
  'frosmoth.png': 'pokemons/8gen/frosmoth.png',
  'melony-s-frosmoth.png': 'pokemons/8gen/frosmoth.png',
  'garbodor.png': 'pokemons/5gen/garbodor.png',
  'goodra.png': 'pokemons/6gen/goodra.png',
  'greninja.png': 'pokemons/6gen/greninja.png',
  'grumpig.png': 'pokemons/3gen/grumpig.png',
  'hawlucha.png': 'pokemons/6gen/hawlucha.png',
  'heracross.png': 'pokemons/2gen/heracross.png',
  'hippowdon-female.png': 'pokemons/4gen/hippowdon-female.png',
  'houndour.png': 'pokemons/2gen/houndour.png',
  'hydrapple.png': 'pokemons/9gen/hydrapple.png',
  'hitmonchan.png': 'pokemons/1gen/hitmonchan.png',
  'jynx.png': 'pokemons/1gen/jynx.png',
  'kabutops.png': 'pokemons/1gen/kabutops.png',
  'kadabra.png': 'pokemons/1gen/kadabra.png',
  'kingdra.png': 'pokemons/2gen/kingdra.png',
  'kirlia.png': 'pokemons/3gen/kirlia.png',
  'lickitung.png': 'pokemons/1gen/lickitung.png',
  'lombre.png': 'pokemons/3gen/lombre.png',
  'lopunny.png': 'pokemons/4gen/lopunny.png',
  'lurantis.png': 'pokemons/7gen/lurantis.png',
  'machamp.png': 'pokemons/1gen/machamp.png',
  'magcargo.png': 'pokemons/2gen/magcargo.png',
  'magnezone.png': 'pokemons/4gen/magnezone.png',
  'mantine.png': 'pokemons/2gen/mantine.png',
  'marowak.png': 'pokemons/1gen/marowak.png',
  'may-beautifly.png': 'pokemons/3gen/may-beautifly.png',
  'may-s-beautifly.png': 'pokemons/3gen/may-beautifly.png',
  'mega-absol.png': 'pokemons/megas/mega-absol.png',
  'mega-absol-z.png': 'pokemons/megas/mega-absol-z.png',
  'mega-aerodactyl.png': 'pokemons/megas/mega-aerodactyl.png',
  'mega-aggron.png': 'pokemons/megas/mega-aggron.png',
  'mega-banette.png': 'pokemons/megas/mega-banette.png',
  'mega-chandelure.png': 'pokemons/megas/mega-chandelure.png',
  'mega-chimeco.png': 'pokemons/megas/mega-chimeco.png',
  'mega-clefable.png': 'pokemons/megas/mega-clefable.png',
  'mega-dragonite.png': 'pokemons/megas/mega-dragonite.png',
  'mega-excadrill.png': 'pokemons/megas/mega-excadrill.png',
  'mega-feraligatr.png': 'pokemons/megas/mega-feraligatr.png',
  'mega-garchomp.png': 'pokemons/megas/mega-garchomp.png',
  'mega-gardevoir.png': 'pokemons/megas/mega-gardevoir.png',
  'mega-golisopod.png': 'pokemons/megas/mega-golisopod.png',
  'mega-gyarados.png': 'pokemons/megas/mega-gyarados.png',
  'mega-hawlucha.png': 'pokemons/megas/mega-hawlucha.png',
  'mega-houndoom.png': 'pokemons/megas/mega-houndoom.png',
  'mega-lucario.png': 'pokemons/megas/mega-lucario.png',
  'mega-lucario-z.png': 'pokemons/megas/mega-lucario-z.png',
  'mega-meganium.png': 'pokemons/megas/mega-meganium.png',
  'mega-metagross.png': 'pokemons/megas/mega-metagross.png',
  'mega-raichu-x.png': 'pokemons/1gen/mega-raichu-x.png',
  'mega-raichu-y.png': 'pokemons/1gen/mega-raichu-y.png',
  'mega-salamence.png': 'pokemons/megas/mega-salamence.png',
  'mega-sceptile.png': 'pokemons/megas/mega-sceptile.png',
  'mega-scizor.png': 'pokemons/megas/mega-scizor.png',
  'mega-scolipede.png': 'pokemons/megas/mega-scolipede.png',
  'mega-skarmory.png': 'pokemons/megas/mega-skarmory.png',
  'mega-starmie.png': 'pokemons/megas/mega-starmie.png',
  'mega-tyranitar.png': 'pokemons/megas/mega-tyranitar.png',
  'megachesnaught.png': 'pokemons/megas/megachesnaught.png',
  'megadelphox.png': 'pokemons/megas/megadelphox.png',
  'megagreninja.png': 'pokemons/megas/megagreninja.png',
  'megamalamar.png': 'pokemons/megas/megamalamar.png',
  'megastaraptor.png': 'pokemons/megas/megastaraptor.png',
  'megavictreebel.png': 'pokemons/megas/megavictreebel.png',
  'mewtwo.png': 'pokemons/1gen/mewtwo.png',
  'miltank.png': 'pokemons/2gen/miltank.png',
  'misdreavus.png': 'pokemons/2gen/misdreavus.png',
  'munchlax.png': 'pokemons/4gen/munchlax.png',
  'nosepass.png': 'pokemons/3gen/nosepass.png',
  'onix.png': 'pokemons/1gen/onix.png',
  'orbeetle.png': 'pokemons/8gen/orbeetle.png',
  'orthworm.png': 'pokemons/9gen/orthworm.png',
  'pachirisu.png': 'pokemons/4gen/pachirisu.png',
  'pikachu.png': 'pokemons/1gen/pikachu.png',
  'pinsir.png': 'pokemons/1gen/pinsir.png',
  'politoed.png': 'pokemons/2gen/politoed.png',
  'ponyta.png': 'pokemons/1gen/ponyta.png',
  'porygon2.png': 'pokemons/2gen/porygon2.png',
  'primeape.png': 'pokemons/1gen/primeape.png',
  'probopass.png': 'pokemons/4gen/probopass.png',
  'pyroar-female.png': 'pokemons/6gen/pyroar-female.png',
  'qwilfish.png': 'pokemons/2gen/qwilfish.png',
  'raticate.png': 'pokemons/1gen/raticate.png',
  'ribombee.png': 'pokemons/7gen/ribombee.png',
  'sableye.png': 'pokemons/3gen/sableye.png',
  'scizor.png': 'pokemons/2gen/scizor.png',
  'scolipede.png': 'pokemons/5gen/scolipede.png',
  'scyther.png': 'pokemons/1gen/scyther.png',
  'seaking.png': 'pokemons/1gen/seaking.png',
  'serperior.png': 'pokemons/5gen/serperior.png',
  'seviper.png': 'pokemons/3gen/seviper.png',
  'shieldon.png': 'pokemons/4gen/shieldon.png',
  'shiftry.png': 'pokemons/3gen/shiftry.png',
  'shiny-bronzong.png': 'pokemons/4gen/shiny-bronzong.png',
  'shuckle.png': 'pokemons/2gen/shuckle.png',
  'slowbro.png': 'pokemons/1gen/slowbro.png',
  'smoochum.png': 'pokemons/2gen/smoochum.png',
  'snorlax.png': 'pokemons/1gen/snorlax.png',
  'swalot.png': 'pokemons/3gen/swalot.png',
  'tangrowth.png': 'pokemons/4gen/tangrowth.png',
  'tauros.png': 'pokemons/1gen/tauros.png',
  'tentacruel.png': 'pokemons/1gen/tentacruel.png',
  'toxapex.png': 'pokemons/7gen/toxapex.png',
  'torkoal.png': 'pokemons/3gen/torkoal.png',
  'venusaur.png': 'pokemons/1gen/venusaur.png',
  'venusaurtwo.png': 'pokemons/1gen/VenusaurTwo.png',
  'vanilluxe.png': 'pokemons/5gen/vanilluxe.png',
  'walrein.png': 'pokemons/3gen/walrein.png',
  'water-cramorant.png': 'pokemons/8gen/water-cramorant.png',
  'weavile.png': 'pokemons/4gen/weavile.png',
  'weezing.png': 'pokemons/1gen/weezing.png',
  'wobbuffet.png': 'pokemons/2gen/wobbuffet.png',
  'wynaut.png': 'pokemons/3gen/wynaut.png',
  'zoroark.png': 'pokemons/5gen/zoroark.png',
  'zorua.png': 'pokemons/5gen/zorua.png'
});

function normalizeBossAssetPath(assetPath) {
  const rawPath = String(assetPath || '').trim().replace(/\\/g, '/');
  if (!rawPath) return '';
  if (/^(?:https?:)?\/\//i.test(rawPath) || /^(?:data|blob):/i.test(rawPath)) return rawPath;
  if (rawPath.includes('/')) return rawPath;

  const fileName = rawPath.split('/').pop().toLowerCase();
  return bossPokemonAssetAliases[fileName] || rawPath;
}

function resolveBossAssetSrc(assetPath) {
  const normalizedPath = normalizeBossAssetPath(assetPath);
  if (!normalizedPath) return '';
  if (/^(?:https?:)?\/\//i.test(normalizedPath) || /^(?:data|blob):/i.test(normalizedPath)) return normalizedPath;
  if (/^(?:\/|\.\/|\.\.\/)/.test(normalizedPath)) return normalizedPath;
  if (/^(?:pokemons|pokemon)\//i.test(normalizedPath)) {
    return basePath ? `/${normalizedPath}` : `../${normalizedPath}`;
  }
  return basePath ? `/${basePath}${normalizedPath}` : normalizedPath;
}

function toggleBossMegaFileNameStyle(fileName) {
  const match = /^mega(-?)(.+)\.(png|jpe?g|webp|gif|svg)$/i.exec(String(fileName || '').trim());
  if (!match) return '';

  const [, hyphen, body, extension] = match;
  return hyphen
    ? `mega${body}.${extension}`
    : `mega-${body}.${extension}`;
}

function getBossImageRetrySource(currentSource) {
  const rawSource = String(currentSource || '').trim();
  if (!rawSource) return '';

  let parsedUrl;
  try {
    parsedUrl = new URL(rawSource, location.href);
  } catch (error) {
    return '';
  }

  if (!/\/bosses\/[^/]+\.(png|jpe?g|webp|gif|svg)$/i.test(parsedUrl.pathname)) {
    return '';
  }

  const segments = parsedUrl.pathname.split('/');
  const fileName = segments[segments.length - 1] || '';
  const alternateFileName = toggleBossMegaFileNameStyle(fileName);
  if (!alternateFileName || alternateFileName.toLowerCase() === fileName.toLowerCase()) {
    return '';
  }

  segments[segments.length - 1] = alternateFileName;
  parsedUrl.pathname = segments.join('/');
  return parsedUrl.toString();
}

function retryBossImageWithAlternateNaming(imageEl) {
  if (!(imageEl instanceof HTMLImageElement)) return false;

  const currentSource = String(imageEl.currentSrc || imageEl.src || '').trim();
  if (!currentSource) return false;

  let parsedCurrentUrl;
  try {
    parsedCurrentUrl = new URL(currentSource, location.href);
  } catch (error) {
    return false;
  }

  const retryKey = parsedCurrentUrl.pathname.toLowerCase();
  if (imageEl.dataset.bossImageRetryFor === retryKey) return false;

  const retrySource = getBossImageRetrySource(currentSource);
  if (!retrySource) return false;

  imageEl.dataset.bossImageRetryFor = retryKey;
  imageEl.src = retrySource;
  return true;
}

document.addEventListener('error', (event) => {
  const target = event.target;
  if (!(target instanceof HTMLImageElement)) return;
  retryBossImageWithAlternateNaming(target);
}, true);

const iconBase = (() => {
  return (isBossesStandaloneAssetContext() ? '../' : '') + 'icons-type/';
})();

// Tabelas de efetividade de tipos (de types.json)
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

const BOSS_TYPE_UI_COLORS = Object.freeze({
  normal: '#A8A878',
  fire: '#F08030',
  water: '#6493EB',
  electric: '#F8D030',
  grass: '#78C850',
  ice: '#98D8D8',
  fighting: '#C03028',
  poison: '#A040A0',
  ground: '#E0C068',
  flying: '#A890F0',
  psychic: '#F85888',
  bug: '#A8B820',
  rock: '#B6A136',
  ghost: '#735797',
  dragon: '#6F35FC',
  dark: '#705746',
  steel: '#B7B7CE',
  fairy: '#D685AD'
});

function bossHexToRgb(hex) {
  if (!hex) return '255,255,255';
  const normalized = String(hex).replace('#', '');
  const bigint = normalized.length === 3
    ? parseInt(normalized.split('').map((char) => char + char).join(''), 16)
    : parseInt(normalized, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `${r},${g},${b}`;
}

function getBossTypeUiColor(type) {
  return BOSS_TYPE_UI_COLORS[String(type || '').toLowerCase()] || '#FFFFFF';
}

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

function formatMoveTypeDescriptionPrefix(moveTypes = []) {
  const normalizedMoveTypes = normalizeMoveTypeValues(moveTypes);
  if (!normalizedMoveTypes.length) return '';
  return `Tipo move: ${normalizedMoveTypes.map((type) => formatTypeLabel(type)).join('/')}.`;
}

function replaceRecommendationMoveTypeDescription(description, moveTypes = []) {
  const prefix = formatMoveTypeDescriptionPrefix(moveTypes);
  if (!prefix) return typeof description === 'string' ? description : '';

  const currentDescription = typeof description === 'string' ? description.trim() : '';
  const withoutMoveType = currentDescription
    .replace(/^\s*(?:Tipo move|Tipo de golpe|Moveset|MoveType):\s*[^.]+\.?\s*/i, '')
    .trim();

  return withoutMoveType ? `${prefix} ${withoutMoveType}` : prefix;
}

function getCatalogMoveTypesForRecommendation(poke) {
  const nameKey = getRecommendationNameKey(poke);
  if (!nameKey) return [];
  const variantBaseKey = getRecommendationVariantBaseKey(poke);
  return normalizeMoveTypeValues(
    bossRecommendationCatalogMoveTypesByNameKey[nameKey]
    || bossRecommendationCatalogMoveTypesByNameKey[variantBaseKey]
  );
}

function applyCatalogMoveTypesToRecommendation(poke) {
  if (!poke || typeof poke !== 'object') return poke;

  const catalogMoveTypes = getCatalogMoveTypesForRecommendation(poke);
  if (!catalogMoveTypes.length) return poke;

  poke.moveType = catalogMoveTypes.length === 1 ? catalogMoveTypes[0] : catalogMoveTypes.slice();
  poke.description = replaceRecommendationMoveTypeDescription(poke.description, catalogMoveTypes);
  return poke;
}

function parseMoveTypes(poke) {
  if (!poke || typeof poke !== 'object') return [];
  const explicitMoveTypes = normalizeMoveTypeValues(poke.moveType);
  if (explicitMoveTypes.length) {
    return explicitMoveTypes;
  }
  if (typeof poke.description !== 'string') return [];
  const match = poke.description.match(/(?:Tipo move|Tipo de golpe|Moveset|MoveType):\s*([a-zA-Z][a-zA-Z\s/-]*)/i);
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

const legacyTierAliases = Object.freeze({
  green: 'excelente',
  ideal: 'excelente',
  otimo: 'muitobom',
  yellow: 'bom',
  red: 'aceitavel',
  solo: 'ruim',
  unknown: 'seminformacao',
  seminfo: 'seminformacao'
});
const tierPriority = { excelente: 0, muitobom: 1, bom: 2, aceitavel: 3, ruim: 4, seminformacao: 5 };
const tierLabels = {
  excelente: 'Excelente',
  muitobom: 'Muito bom',
  bom: 'Bom',
  aceitavel: 'Aceitavel',
  ruim: 'Ruim',
  seminformacao: 'Única Opção'
};
const recommendationScoreTitle = 'ATK: mostra o moveset do pokemon contra a tipagem que o chefe recebe. DEF: considera o pior dano do moveset do boss contra o pokemon do jogador. Em chefes configurados para defesa, o ranking prioriza somente o DEF. So passivas dos pokemons recomendados entram na conta.';

function formatRecommendationScoreLabel(label) {
  const normalized = String(label || '').trim().toUpperCase();
  if (normalized === 'ATK') return '⚔️ ATK';
  if (normalized === 'DEF') return '🛡️ DEF';
  return label;
}

function normalizeTierKey(tier = 'seminformacao') {
  const normalized = String(tier || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '');

  if (!normalized) return 'seminformacao';

  if (Object.prototype.hasOwnProperty.call(legacyTierAliases, normalized)) {
    return legacyTierAliases[normalized];
  }

  return Object.prototype.hasOwnProperty.call(tierLabels, normalized)
    ? normalized
    : 'seminformacao';
}

function normalizeRecommendationTier(pick) {
  if (!pick || typeof pick !== 'object') return pick;
  pick.tier = normalizeTierKey(pick.tier);
  return pick;
}

function refreshTierLegendLabels() {
  const legendEntries = [
    ['tier-excelente', tierLabels.excelente],
    ['tier-muitobom', tierLabels.muitobom],
    ['tier-bom', tierLabels.bom],
    ['tier-aceitavel', tierLabels.aceitavel],
    ['tier-ruim', tierLabels.ruim],
    ['tier-seminformacao', tierLabels.seminformacao]
  ];

  document.querySelectorAll('.tier-legend').forEach((legend) => {
    legendEntries.forEach(([className, label]) => {
      const dot = legend.querySelector(`.${className}`);
      if (!dot) return;
      dot.setAttribute('aria-label', label);
      const legendItem = dot.closest('.tier-legend__item');
      const labelEl = legendItem?.querySelector('.tier-legend__label');
      if (labelEl) {
        labelEl.textContent = label;
        legendItem.setAttribute('aria-label', label);
        legendItem.dataset.tier = normalizeTierKey(className.replace('tier-', ''));
        return;
      }
      const textNode = dot.nextSibling;
      if (textNode && textNode.nodeType === Node.TEXT_NODE) {
        textNode.textContent = label;
      }
    });
  });
}

function createTierAssistBadge(tier, extraClassName = '') {
  const normalizedTier = normalizeTierKey(tier);
  const badge = document.createElement('span');
  badge.className = `tier-assist-badge ${extraClassName}`.trim();
  badge.dataset.tier = normalizedTier;
  badge.textContent = getTierUiLabel(normalizedTier);
  badge.setAttribute('aria-hidden', 'true');
  return badge;
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

function formatRecommendationPassiveVariantItem(item, variantLabel = '') {
  const normalizedItem = String(item || '').replace(/\s+/g, ' ').trim();
  if (!normalizedItem) return '';
  return variantLabel ? `${normalizedItem} (${variantLabel})` : normalizedItem;
}

function buildRecommendationDisplayPassiveItems(basePassiveInfo, shinyPassiveInfo) {
  const baseItems = getRecommendationPassiveInfoItems(basePassiveInfo);
  const shinyItems = getRecommendationPassiveInfoItems(shinyPassiveInfo);

  if (!shinyItems.length) {
    return baseItems;
  }

  if (!baseItems.length) {
    return shinyItems
      .map((item) => formatRecommendationPassiveVariantItem(item, 'shiny'))
      .filter(Boolean);
  }

  const baseItemSet = new Set(baseItems);
  const shinyItemSet = new Set(shinyItems);
  const mergedItems = [];
  const pushItem = (rawItem, variantLabel = '') => {
    const decoratedItem = formatRecommendationPassiveVariantItem(rawItem, variantLabel);
    if (!decoratedItem || mergedItems.includes(decoratedItem)) return;
    mergedItems.push(decoratedItem);
  };

  baseItems.forEach((item) => {
    pushItem(item, shinyItemSet.has(item) ? 'shiny e normal' : 'normal');
  });

  shinyItems.forEach((item) => {
    if (baseItemSet.has(item)) return;
    pushItem(item, 'shiny');
  });

  return mergedItems;
}

function getRecommendationDisplayPassiveInfo(poke) {
  const basePassiveInfo = getRecommendationPassiveInfo(poke);
  const shinyPassiveInfo = poke?._shinyVariantPassiveInfo;
  if (!shinyPassiveInfo?.text) return basePassiveInfo;
  const mergedItems = buildRecommendationDisplayPassiveItems(basePassiveInfo, shinyPassiveInfo);

  return {
    name: basePassiveInfo?.name || shinyPassiveInfo.name || '',
    description: [basePassiveInfo?.description, shinyPassiveInfo.description].filter(Boolean).join(' '),
    text: mergedItems.join(' '),
    items: mergedItems
  };
}

function getRecommendationShinyComparison(poke) {
  if (!poke || typeof poke !== 'object') return null;

  const shinyComparison = poke._shinyVariantComparison;
  if (!shinyComparison) return null;

  const currentOffense = typeof poke._offense === 'number' ? poke._offense : null;
  const currentDefenseWorst = typeof poke._defenseWorst === 'number' ? poke._defenseWorst : null;
  const shinyOffense = typeof shinyComparison.offense === 'number' ? shinyComparison.offense : null;
  const shinyDefenseWorst = typeof shinyComparison.defenseWorst === 'number' ? shinyComparison.defenseWorst : null;

  if (currentOffense === shinyOffense && currentDefenseWorst === shinyDefenseWorst) {
    return null;
  }

  return shinyComparison;
}

function getRecommendationShinyTier(poke) {
  if (!poke || typeof poke !== 'object') return '';
  const hasShinyPassiveVariant = Boolean(poke._hasShinyVariant || poke._shinyVariantPassiveInfo?.text);
  const shinyTier = typeof poke._shinyVariantTier === 'string' ? poke._shinyVariantTier.trim().toLowerCase() : '';
  const baseTier = typeof poke.tier === 'string' ? poke.tier.trim().toLowerCase() : '';
  if (!shinyTier) return hasShinyPassiveVariant ? baseTier : '';
  if (baseTier && getRecommendationTierPriority(shinyTier) > getRecommendationTierPriority(baseTier)) return '';
  if (shinyTier === baseTier && !hasShinyPassiveVariant) return '';
  return shinyTier;
}

function getRecommendationShinyTierChanges(poke, shinyTier = '') {
  if (!poke || !shinyTier) return false;
  const baseTier = typeof poke.tier === 'string' ? poke.tier.trim().toLowerCase() : '';
  return Boolean(baseTier && shinyTier !== baseTier);
}

function hasRecommendationShinyPassiveVariant(poke) {
  return Boolean(poke && typeof poke === 'object' && (poke._hasShinyVariant || poke._shinyVariantPassiveInfo?.text));
}

function createRecommendationShinyHoverPanel(options = {}) {
  const {
    panelClassName = '',
    headingClassName = '',
    shinyTier = '',
    shinyComparison = null,
    hasShinyPassiveVariant = false,
    createMetric = null,
    tierModifierClass = '',
    atkModifierClass = '',
    defModifierClass = ''
  } = options;

  if (typeof createMetric !== 'function' || (!shinyTier && !shinyComparison && !hasShinyPassiveVariant)) {
    return null;
  }

  const panel = document.createElement('div');
  panel.className = panelClassName;

  const heading = document.createElement('span');
  heading.className = headingClassName;
  heading.textContent = 'Shiny';
  panel.appendChild(heading);

  if (shinyTier) {
    panel.appendChild(
      createMetric(
        'Tier',
        getTierUiLabel(shinyTier),
        `${tierModifierClass} ${tierModifierClass}-${shinyTier}`.trim()
      )
    );
  }

  if (shinyComparison) {
    panel.append(
      createMetric(
        'ATK',
        typeof shinyComparison.offense === 'number' ? shinyComparison.offense.toFixed(2) : '-',
        atkModifierClass
      ),
      createMetric(
        'DEF',
        typeof shinyComparison.defenseWorst === 'number' ? shinyComparison.defenseWorst.toFixed(2) : '-',
        defModifierClass
      )
    );
  }

  return panel;
}

function createRecommendationShinyHoverIndicator(className = '') {
  const indicator = document.createElement('span');
  indicator.className = className;
  indicator.textContent = '✨';
  indicator.setAttribute('aria-hidden', 'true');
  return indicator;
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

  const isCompactVariant = variant === 'role' || variant === 'reco';
  const trigger = document.createElement('button');
  trigger.type = 'button';
  trigger.className = `passive-tooltip-trigger${variant ? ` passive-tooltip-trigger--${variant}` : ''}`;
  trigger.dataset.passiveTooltipItems = JSON.stringify(passiveInfo.items || [passiveInfo.text]);
  trigger.setAttribute('aria-label', passiveInfo.items?.length > 1 ? 'Ver passivas' : 'Ver passiva');
  trigger.setAttribute('aria-expanded', 'false');
  trigger.title = passiveInfo.items?.length > 1 ? 'Ver passivas' : 'Ver passiva';

  const icon = document.createElement('span');
  icon.className = 'passive-tooltip-trigger-icon';
  icon.setAttribute('aria-hidden', 'true');
  icon.textContent = isCompactVariant ? '!' : 'i';

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
    catalogId: bossCatalogIdByReference.get(boss) || boss.catalogId || '',
    types: Array.isArray(group.bossTypes) && group.bossTypes.length ? group.bossTypes : (boss.types || []),
    moveType: group.moveType || getBossMoveTypes(boss),
    immunities: mergeLowercaseUniqueValues(group.bossImmunities, group.immunities, boss.immunities),
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

  const clanData = boss.clans?.[normalizedClanKey];
  const explicitRolePicks = Array.isArray(clanData?.roles?.[normalizedRoleKey])
    ? clanData.roles[normalizedRoleKey]
    : null;

  const rawPicks = explicitRolePicks !== null
    ? explicitRolePicks
    : collectRawRecommendationPicksForBoss(boss).filter((pick) => {
      if (!isBossRecommendationLevelEligible(pick)) return false;

      const registryEntry = getFixedRecommendationEntry(pick);
      if (!registryEntry) {
        warnRecommendationWithoutRegistry(boss, pick);
        return false;
      }

      applyFixedRecommendationMetadata(pick, registryEntry);
      return registryEntry.clan === normalizedClanKey && registryEntry.role === normalizedRoleKey;
    });

  return dedupeRecommendedPicksByName(
    (rawPicks || []).map((pick) => {
      const registryEntry = getFixedRecommendationEntry(pick);
      if (registryEntry) {
        applyFixedRecommendationMetadata(pick, registryEntry);
      } else if (explicitRolePicks !== null) {
        warnRecommendationWithoutRegistry(boss, pick);
      }
      return pick;
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
        if (!isBossRecommendationLevelEligible(pick)) return false;

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
    if (isMainQuestBoss(boss)) {
      picks = roleboardRoleOrder.flatMap((roleKey) => getVisibleRolePicksForBoss('mainquest', boss, clanKey, roleKey));
    } else {
      picks = roleboardRoleOrder.flatMap((roleKey) => getFixedRecommendationRolePicks(boss, clanKey, roleKey));
    }
  } else {
    picks = getRecommendationGroupsForClan(boss, clanData).flatMap((group) => group.recommended || []);
  }
  picks = filterBossRecommendationsByMinimumLevel(picks || []);

  // Se o boss definir filterSolo, ranqueamos e removemos picks abaixo de 'bom'
  if (boss?.filterSolo) {
    const ranked = rankRecommendedForBoss(boss, picks || [], { roleKey: 'dps' });
    return dedupeRecommendedPicksByName((ranked || []).filter((p) => (
      getRecommendationTierPriority(p?.tier) <= tierPriority.bom
    )));
  }

  return dedupeRecommendedPicksByName(picks || []);
}

const pokemonBossUsageCatalogIds = Object.freeze(['hoopa', 'champion', 'horizons', 'mew2']);
const pokemonBossUsageClanOrder = Object.freeze(['instinct', 'mystic', 'valor']);
const pokemonBossUsageRoleByCatalogRole = Object.freeze({
  speedster: 'dps',
  defender: 'tank',
  supporter: 'support'
});
const pokemonBossUsageShortLabels = Object.freeze({
  hoopa: 'Hoopa',
  champion: 'Champion',
  mew2: 'Mewtwo',
  horizons: 'Horizons'
});

function getPokemonBossUsageSubjectName(subject) {
  return typeof subject === 'object' && subject !== null
    ? String(subject.name || '').trim()
    : String(subject || '').trim();
}

function getPokemonBossUsageMatchKeys(subject) {
  const rawName = getPokemonBossUsageSubjectName(subject);
  const keys = new Set();
  const addKey = (value) => {
    const key = getRecommendationNameKey(value);
    if (key) keys.add(key);
  };

  addKey(rawName);
  addKey(rawName.replace(/^shiny\s+/i, ''));
  return keys;
}

function isRecommendationPickUsedByPokemon(pick, matchKeys) {
  if (!pick || !matchKeys?.size) return false;
  const rawName = String(pick.name || '').trim();
  const pickKey = getRecommendationNameKey(rawName);
  if (pickKey && matchKeys.has(pickKey)) return true;

  if (/^shiny\s+/i.test(rawName)) {
    const baseKey = getRecommendationNameKey(rawName.replace(/^shiny\s+/i, ''));
    if (baseKey && matchKeys.has(baseKey)) return true;
  }

  return false;
}

function getPokemonBossUsageRoleKeyForSubject(subject) {
  if (!subject || typeof subject !== 'object') return '';

  const rawRoleKey = String(subject.roleKey || subject.role || '').trim().toLowerCase();
  return pokemonBossUsageRoleByCatalogRole[rawRoleKey]
    || (roleboardRoleOrder.includes(rawRoleKey) ? rawRoleKey : '');
}

function isPokemonBossUsageRoleAllowedForCatalog(catalogOrMode, roleKey) {
  const mode = typeof catalogOrMode === 'string'
    ? catalogOrMode
    : catalogOrMode?.id;
  const normalizedMode = String(mode || '').trim().toLowerCase();
  const normalizedRoleKey = String(roleKey || '').trim().toLowerCase();

  return normalizedMode !== 'hoopa' || !['tank', 'support'].includes(normalizedRoleKey);
}

function getPokemonBossUsageClanKeyForSubject(subject) {
  if (!subject || typeof subject !== 'object') return '';

  return normalizePlannerClanKey(subject.team || subject.clan || subject.clanKey || '');
}

function getPokemonBossUsageSubjectTypes(subject) {
  return mergeLowercaseUniqueValues(
    Array.isArray(subject?.types) ? subject.types : [],
    Array.isArray(subject?.naturalElements) ? subject.naturalElements : [],
    [subject?.type1, subject?.type2]
  );
}

function buildPokemonBossUsagePickFromSubject(subject) {
  if (!subject || typeof subject !== 'object') return null;

  const normalizedSubject = {
    ...subject,
    role: subject.roleKey || subject.role,
    passiveSuperEffectiveTypes: mergeLowercaseUniqueValues(
      subject.passiveSuperEffectiveTypes,
      subject.shinyPassiveSuperEffectiveTypes
    )
  };
  const catalogPick = createBossSearchEntryFromCatalogPokemon(normalizedSubject);
  if (catalogPick) {
    return catalogPick;
  }

  const name = getPokemonBossUsageSubjectName(subject);
  if (!name) return null;

  return createRolePick(
    name,
    getPokemonBossUsageSubjectTypes(subject),
    Array.isArray(subject.moveset) && subject.moveset.length
      ? subject.moveset
      : (subject.moveType || subject._moveType || null),
    {
      image: String(subject.image || '').trim() || resolveRolePickImage(name),
      passiveSuperEffectiveTypes: mergeLowercaseUniqueValues(
        subject.passiveSuperEffectiveTypes,
        subject.shinyPassiveSuperEffectiveTypes
      ),
      immunities: mergeLowercaseUniqueValues(subject.immunities),
      defenseByBossType: mergeLowercaseNumericMap(subject.defenseByBossType),
      defenseDamageFactorByBossType: mergeLowercaseNumericMap(subject.defenseDamageFactorByBossType)
    }
  );
}

function isPokemonBossUsageTierEligible(pick) {
  return getRecommendationTierPriority(pick?.tier) <= tierPriority.bom;
}

function scorePokemonBossUsagePickForBoss(bossRef, pick, roleKey) {
  const scored = scoreRecommendationForBoss(bossRef, cloneRolePickConfig(pick), { roleKey });
  if (roleKey === 'dps' && !(typeof scored?._offense === 'number' && scored._offense > 1)) {
    return null;
  }
  return scored;
}

function getPokemonBossUsageCatalogOrder(mode) {
  const index = pokemonBossUsageCatalogIds.indexOf(String(mode || '').trim().toLowerCase());
  return index === -1 ? pokemonBossUsageCatalogIds.length : index;
}

function getPokemonBossUsageClanOrder(clanKey) {
  const index = pokemonBossUsageClanOrder.indexOf(String(clanKey || '').trim().toLowerCase());
  return index === -1 ? pokemonBossUsageClanOrder.length : index;
}

function getPokemonBossUsageRoleOrder(roleKey) {
  const index = roleboardRoleOrder.indexOf(String(roleKey || '').trim().toLowerCase());
  return index === -1 ? roleboardRoleOrder.length : index;
}

function shouldApplyHorizonsTierVisibilityRules(catalogOrMode) {
  const mode = typeof catalogOrMode === 'string'
    ? catalogOrMode
    : catalogOrMode?.id;
  return String(mode || '').trim().toLowerCase() === 'horizons';
}

function isMainQuestBoss(boss) {
  return String(boss?.encounterLabel || '').trim().toLowerCase() === 'main quest';
}

function isMainQuestAlphaBoss(boss) {
  return isMainQuestBoss(boss) && String(boss?.id || '').trim().toLowerCase().startsWith('alpha-');
}

function shouldApplyMainQuestTierVisibilityRules(catalogOrMode, boss) {
  const mode = typeof catalogOrMode === 'string'
    ? catalogOrMode
    : catalogOrMode?.id;
  return String(mode || '').trim().toLowerCase() === 'mainquest' || isMainQuestBoss(boss);
}

function shouldExcludeMainQuestPick(pick, context = {}) {
  const bossId = String(context?.boss?.id || '').trim().toLowerCase();
  const roleKey = String(context?.roleKey || '').trim().toLowerCase();
  const pickKey = getRecommendationNameKey(pick);

  if (roleKey === 'dps' && mainQuestNonSpeedsterNameKeys.has(pickKey)) {
    return true;
  }

  return bossId === 'mega-malamar'
    && roleKey === 'tank'
    && pickKey === 'grumpig';
}

function shouldForceMainQuestVisiblePick(pick, context = {}) {
  const bossId = String(context?.boss?.id || '').trim().toLowerCase();
  const clanKey = String(context?.clanKey || '').trim().toLowerCase();
  const roleKey = String(context?.roleKey || '').trim().toLowerCase();
  const pickKey = getRecommendationNameKey(pick);

  return bossId === 'mega-malamar'
    && clanKey === 'valor'
    && roleKey === 'dps'
    && pickKey === 'scyther';
}

function appendUniqueMainQuestVisiblePicks(basePicks = [], extraPicks = []) {
  const seen = new Set((basePicks || []).map((pick) => getRecommendationNameKey(pick)).filter(Boolean));
  const merged = [...(basePicks || [])];

  (extraPicks || []).forEach((pick) => {
    const pickKey = getRecommendationNameKey(pick);
    if (!pickKey || seen.has(pickKey)) return;
    seen.add(pickKey);
    merged.push(pick);
  });

  return merged;
}

function filterMainQuestVisibleRolePicks(picks = [], context = {}) {
  const normalizedRoleKey = String(context?.roleKey || '').trim().toLowerCase();
  if (isMainQuestAlphaBoss(context?.boss) && normalizedRoleKey !== 'dps') {
    return [];
  }

  const maximumPriority = getRecommendationMaximumPriority('bom');
  const eligiblePicks = (Array.isArray(picks) ? picks : []).filter((pick) => {
    if (shouldExcludeMainQuestPick(pick, context)) return false;
    if (getRecommendationTierPriority(pick?.tier) > maximumPriority) return false;
    if (typeof pick?._defenseWorst === 'number' && pick._defenseWorst >= 2) return false;
    return true;
  });

  const highTierPicks = eligiblePicks.filter((pick) => (
    getRecommendationTierPriority(pick?.tier) <= tierPriority.muitobom
  ));
  const forcedPicks = eligiblePicks.filter((pick) => shouldForceMainQuestVisiblePick(pick, context));
  if (highTierPicks.length > 1) return appendUniqueMainQuestVisiblePicks(highTierPicks, forcedPicks);
  if (highTierPicks.length === 1) {
    const bomAlternatives = eligiblePicks
      .filter((pick) => getRecommendationTierPriority(pick?.tier) === tierPriority.bom)
      .slice(0, 3);
    return appendUniqueMainQuestVisiblePicks([...highTierPicks, ...bomAlternatives], forcedPicks);
  }
  return appendUniqueMainQuestVisiblePicks(eligiblePicks, forcedPicks);
}

function shouldKeepAllHorizonsNonRuimPicks(boss, clanKey, roleKey) {
  return String(boss?.id || '').trim().toLowerCase() === 'alolan-golem'
    && String(roleKey || '').trim().toLowerCase() === 'support'
    && ['mystic', 'valor'].includes(String(clanKey || '').trim().toLowerCase());
}

function filterHorizonsVisibleRolePicks(picks = [], context = {}) {
  const withoutRuim = (Array.isArray(picks) ? picks : [])
    .filter((pick) => normalizeTierKey(pick?.tier) !== 'ruim');

  if (shouldKeepAllHorizonsNonRuimPicks(context?.boss, context?.clanKey, context?.roleKey)) {
    return withoutRuim;
  }

  const bomOrBetter = withoutRuim
    .filter((pick) => getRecommendationTierPriority(pick?.tier) <= tierPriority.bom);

  if (bomOrBetter.length) return bomOrBetter;

  // Em um papel defensivo, um pick aceitavel ainda e preferivel a deixar a
  // composicao sem tank/suporte quando a luta exige esse papel.
  return String(context?.roleKey || '').trim().toLowerCase() === 'dps'
    ? []
    : withoutRuim.slice(0, 1);
}

function getVisibleRolePicksForBoss(catalogOrMode, boss, clanKey, roleKey) {
  const ranked = rankRecommendedForBoss(
    boss,
    getFixedRecommendationRolePicks(boss, clanKey, roleKey),
    { roleKey }
  );

  if (shouldApplyMainQuestTierVisibilityRules(catalogOrMode, boss)) {
    return filterMainQuestVisibleRolePicks(ranked, { boss, clanKey, roleKey });
  }

  return shouldApplyHorizonsTierVisibilityRules(catalogOrMode)
    ? filterHorizonsVisibleRolePicks(ranked, { boss, clanKey, roleKey })
    : ranked;
}

function createPokemonBossUsageRecord(catalog, boss, clanKey, clanData, pick, options = {}) {
  const mode = String(catalog?.id || '').trim().toLowerCase();
  const bossSlug = getBossRouteSlug(boss);
  if (!mode || !bossSlug) return null;

  const roleKey = String(options.roleKey || '').trim().toLowerCase();
  const tier = normalizeTierKey(pick?.tier);
  const groupTitle = String(options.groupTitle || '').trim();
  const bossImage = String(options.bossImage || boss?.image || '').trim();

  return {
    mode,
    contentLabel: catalog?.label || 'Bosses',
    shortContentLabel: pokemonBossUsageShortLabels[mode] || catalog?.label || 'Boss',
    bossName: boss?.name || bossSlug,
    bossSlug,
    image: bossImage ? resolveBossAssetSrc(bossImage) : '',
    url: `${getBossRouteBasePath(mode)}/${bossSlug}`,
    clanKey,
    clanLabel: clanData?.label || (clanKey ? clanKey.charAt(0).toUpperCase() + clanKey.slice(1) : 'Cla'),
    roleKey,
    roleLabel: roleKey
      ? (mode === 'horizons' ? getRoleboardRoleDisplayLabel(roleKey, mode) : (roleboardRoleLabels[roleKey] || roleKey))
      : '',
    groupTitle: groupTitle && getRecommendationNameKey(groupTitle) !== getRecommendationNameKey(boss?.name)
      ? groupTitle
      : '',
    tier,
    tierLabel: tierLabels[tier] || tierLabels.seminformacao,
    offenseScore: typeof pick?._offense === 'number' ? pick._offense : null,
    defenseScore: typeof pick?._defenseWorst === 'number' ? pick._defenseWorst : null,
    overallScore: typeof pick?._score === 'number' ? pick._score : null,
    pickName: pick?.name || ''
  };
}

function addPokemonBossUsageRecord(usages, seen, catalog, boss, clanKey, clanData, pick, options = {}) {
  if (!isPokemonBossUsageTierEligible(pick)) return;

  const record = createPokemonBossUsageRecord(catalog, boss, clanKey, clanData, pick, options);
  if (!record) return;

  const recordKey = [
    record.mode,
    record.bossSlug,
    record.clanKey,
    getRecommendationNameKey(record.groupTitle),
    getRecommendationNameKey(record.pickName)
  ].join('|');
  if (seen.has(recordKey)) {
    const existingIndex = seen.get(recordKey);
    const existingRecord = usages[existingIndex];
    if (existingRecord && !existingRecord.roleKey && record.roleKey) {
      usages[existingIndex] = record;
    }
    return;
  }

  seen.set(recordKey, usages.length);
  usages.push(record);
}

function collectPokemonBossUsagesFromRoleboard(usages, seen, catalog, boss, clanKey, clanData, matchKeys) {
  roleboardRoleOrder.forEach((roleKey) => {
    const ranked = getVisibleRolePicksForBoss(catalog, boss, clanKey, roleKey);

    ranked.forEach((pick) => {
      if (!isRecommendationPickUsedByPokemon(pick, matchKeys)) return;
      addPokemonBossUsageRecord(usages, seen, catalog, boss, clanKey, clanData, pick, { roleKey });
    });
  });
}

function collectPokemonBossUsagesFromGroups(usages, seen, catalog, boss, clanKey, clanData, matchKeys) {
  const groups = getRecommendationGroupsForClan(boss, clanData);
  const hasMultipleGroups = groups.length > 1;

  groups.forEach((group) => {
    if (group?.boss?.comingSoon) return;

    const ranked = rankRecommendedForBoss(group.boss, group.recommended || [], { roleKey: 'dps' });
    ranked.forEach((pick) => {
      if (!isRecommendationPickUsedByPokemon(pick, matchKeys)) return;
      addPokemonBossUsageRecord(usages, seen, catalog, boss, clanKey, clanData, pick, {
        bossImage: group.bossImage || boss.image,
        groupTitle: hasMultipleGroups ? group.title : ''
      });
    });
  });
}

function collectPokemonBossUsagesFromCatalogSubject(usages, seen, catalog, boss, clanKey, clanData, subject) {
  const roleKey = getPokemonBossUsageRoleKeyForSubject(subject);
  const subjectClanKey = getPokemonBossUsageClanKeyForSubject(subject);
  const basePick = buildPokemonBossUsagePickFromSubject(subject);
  if (!roleKey || !basePick) return;
  if (!isPokemonBossUsageRoleAllowedForCatalog(catalog, roleKey)) return;
  if (subjectClanKey && subjectClanKey !== normalizePlannerClanKey(clanKey)) return;

  if (clanData?.roles) {
    const scored = scorePokemonBossUsagePickForBoss(boss, basePick, roleKey);
    addPokemonBossUsageRecord(usages, seen, catalog, boss, clanKey, clanData, scored, { roleKey });
    return;
  }

  const groups = getRecommendationGroupsForClan(boss, clanData);
  const hasMultipleGroups = groups.length > 1;
  groups.forEach((group) => {
    if (group?.boss?.comingSoon) return;

    const scored = scorePokemonBossUsagePickForBoss(group.boss, basePick, roleKey);
    addPokemonBossUsageRecord(usages, seen, catalog, boss, clanKey, clanData, scored, {
      bossImage: group.bossImage || boss.image,
      groupTitle: hasMultipleGroups ? group.title : '',
      roleKey
    });
  });
}

function getPokemonBossUsages(subject) {
  const matchKeys = getPokemonBossUsageMatchKeys(subject);
  if (!matchKeys.size) return [];
  const subjectRoleKey = getPokemonBossUsageRoleKeyForSubject(subject);

  const usages = [];
  const seen = new Map();

  pokemonBossUsageCatalogIds.forEach((catalogId) => {
    const catalog = bossCatalogs[catalogId];
    if (!isPokemonBossUsageRoleAllowedForCatalog(catalog, subjectRoleKey)) return;
    (catalog?.data || []).forEach((boss) => {
      if (boss?.comingSoon) return;

      pokemonBossUsageClanOrder.forEach((clanKey) => {
        const clanData = boss?.clans?.[clanKey];
        if (!clanData) return;

        if (clanData.roles) {
          collectPokemonBossUsagesFromRoleboard(usages, seen, catalog, boss, clanKey, clanData, matchKeys);
        } else {
          collectPokemonBossUsagesFromGroups(usages, seen, catalog, boss, clanKey, clanData, matchKeys);
        }

        if (typeof subject === 'object' && subject !== null) {
          collectPokemonBossUsagesFromCatalogSubject(usages, seen, catalog, boss, clanKey, clanData, subject);
        }
      });
    });
  });

  return usages.sort((left, right) => (
    getPokemonBossUsageCatalogOrder(left.mode) - getPokemonBossUsageCatalogOrder(right.mode)
    || String(left.bossName || '').localeCompare(String(right.bossName || ''))
    || getPokemonBossUsageClanOrder(left.clanKey) - getPokemonBossUsageClanOrder(right.clanKey)
    || getPokemonBossUsageRoleOrder(left.roleKey) - getPokemonBossUsageRoleOrder(right.roleKey)
    || String(left.groupTitle || '').localeCompare(String(right.groupTitle || ''))
    || String(left.pickName || '').localeCompare(String(right.pickName || ''))
  ));
}

function getBossSearchEntries() {
  const entries = [];
  Object.entries(bossCatalogs).forEach(([mode, catalog]) => {
    if (!catalog || catalog.searchEnabled === false || !isBossRouteableMode(mode)) return;
    const bosses = Array.isArray(catalog.data) ? catalog.data : [];
    bosses.forEach((boss) => {
      const slug = getBossRouteSlug(boss);
      if (!slug) return;
      const types = mergeLowercaseUniqueValues([
        ...(Array.isArray(boss.types) ? boss.types : []),
        ...(Array.isArray(boss.bossTypes) ? boss.bossTypes : []),
        ...(Array.isArray(boss.effectiveness?.offenseTargetTypes) ? boss.effectiveness.offenseTargetTypes : [])
      ]);
      const names = Array.isArray(boss.bosses)
        ? boss.bosses.map((entry) => entry?.name).filter(Boolean)
        : [];
      entries.push({
        mode,
        slug,
        name: boss.name || slug,
        catalogLabel: catalog.label || 'Bosses',
        description: boss.summary || boss.description || boss.encounterNote || '',
        image: boss.image ? resolveBossAssetSrc(boss.image) : '',
        types,
        tags: names,
        searchText: [
          mode,
          catalog.label,
          boss.id,
          boss.name,
          boss.summary,
          boss.description,
          boss.encounterNote,
          ...names,
          ...types
        ].filter(Boolean).join(' ')
      });
    });
  });
  return entries;
}

if (typeof window !== 'undefined') {
  window.getPokemonBossUsages = getPokemonBossUsages;
  window.getBossSearchEntries = getBossSearchEntries;
}

function pickBetterTier(currentTier, nextTier) {
  const normalizedCurrentTier = normalizeTierKey(currentTier);
  const normalizedNextTier = normalizeTierKey(nextTier);
  if (!currentTier) return normalizedNextTier;
  if (!nextTier) return normalizedCurrentTier;
  return (tierPriority[normalizedNextTier] ?? tierPriority.seminformacao) < (tierPriority[normalizedCurrentTier] ?? tierPriority.seminformacao)
    ? normalizedNextTier
    : normalizedCurrentTier;
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

function getEffectiveRecommendationRankMode(boss, poke, options = {}) {
  const baseRankMode = getBossRecommendationRankMode(boss);
  const normalizedRoleKey = normalizeRecommendationRoleKey(options?.roleKey || poke?.recommendedRole);

  if (baseRankMode === 'defense-only' && normalizedRoleKey === 'dps') {
    return 'standard';
  }

  return baseRankMode;
}

function classifyRecommendationTier(offense, worstDefense, options = {}) {
  const normalizedRoleKey = normalizeRecommendationRoleKey(options?.roleKey);

  if (offense >= 2) {
    // Super efetivo: mapeamento específico solicitado
    // - DEF <= 0.5 => Excelente
    // - DEF <= 0.75 => Muito bom
    // - DEF <= 1 => Bom
    // - DEF <= 2 => Aceitavel
    if (worstDefense <= 0.5) return 'excelente';
    if (worstDefense <= 0.75) return 'muitobom';
    if (normalizedRoleKey === 'tank' && worstDefense <= 1) return 'aceitavel';
    if (worstDefense <= 1) return 'bom';
    if (worstDefense <= 2) return 'aceitavel';
    return 'ruim';
  }

  if (offense >= 1.5) {
    // Efetivo
    if (worstDefense <= 0.5) return 'muitobom';
    if (worstDefense <= 0.75) return 'bom';
    if (normalizedRoleKey === 'dps' && worstDefense <= 1) return 'bom';
    if (worstDefense <= 1) return 'aceitavel';
    return 'ruim';
  }

  if (offense >= 1) {
    // Neutro
    if (normalizedRoleKey === 'dps') {
      if (worstDefense <= 1) return 'aceitavel';
      return 'ruim';
    }
    if (worstDefense <= 0.75) return 'bom';
    if (worstDefense <= 1) return 'aceitavel';
    return 'ruim';
  }

  if (offense > 0 && worstDefense <= 0.75) {
    return 'aceitavel';
  }

  return 'ruim';
}

function classifyDefenseOnlyRecommendationTier(worstDefense, options = {}) {
  const normalizedRoleKey = normalizeRecommendationRoleKey(options?.roleKey);
  const offense = typeof options?.offense === 'number' ? options.offense : null;

  if (normalizedRoleKey === 'tank' && offense !== null) {
    return classifyRecommendationTier(offense, worstDefense, { roleKey: normalizedRoleKey });
  }

  if (worstDefense <= 0.5) return 'excelente';
  if (worstDefense <= 0.75) return 'muitobom';
  if (worstDefense <= 1) return 'bom';
  if (worstDefense <= 2) return 'aceitavel';
  return 'ruim';
}

function getRecommendationScoreWeights(boss) {
  const catalogId = String(bossCatalogIdByReference.get(boss) || boss?.catalogId || '').toLowerCase();
  return catalogId === 'hoopa'
    ? { offense: 0.7, defense: 0.3 }
    : { offense: 0.6, defense: 0.4 };
}

function scoreRecommendationForBoss(bossOrTypes, poke, options = {}) {
  const boss = Array.isArray(bossOrTypes) ? { types: bossOrTypes } : (bossOrTypes || {});
  applyCatalogMoveTypesToRecommendation(poke);
  applyImplicitRecommendationEnhancements(poke);
  // Para DEF, o boss passa a ser lido pelo moveset sempre que ele existir.
  // Os tipos do chefe so entram quando um override explicito pedir isso
  // ou quando o dataset nao informar um moveset dedicado.
  const bossAttackTypes = getBossAttackTypes(boss);
  const offenseTargetTypes = getBossOffenseTargetTypes(boss);
  const rankMode = getEffectiveRecommendationRankMode(boss, poke, options);
  const moveTypes = parseMoveTypes(poke);
  const fallbackType = Array.isArray(poke.types) && poke.types.length ? poke.types[0] : null;
  const offensiveMoveTypes = moveTypes.length ? moveTypes : normalizeMoveTypeValues(fallbackType);
  let moveType = offensiveMoveTypes[0] || null;
  const matchupOverride = getMatchupOverride(poke, boss);
  let offenseRaw = 1;
  if (typeof matchupOverride?.offense === 'number') {
    offenseRaw = matchupOverride.offense;
  } else if (offenseTargetTypes.length && offensiveMoveTypes.length) {
    const scoredMoveTypes = offensiveMoveTypes.map((candidateMoveType) => {
      const raw = getTypeMultiplier(candidateMoveType, offenseTargetTypes, [], poke.passiveSuperEffectiveTypes);
      return {
        moveType: candidateMoveType,
        raw,
        normalized: normalizeOffenseValue(raw)
      };
    });
    const bestMoveType = scoredMoveTypes.sort((left, right) => {
      if (right.normalized !== left.normalized) return right.normalized - left.normalized;
      return right.raw - left.raw;
    })[0];
    moveType = bestMoveType?.moveType || moveType;
    offenseRaw = typeof bestMoveType?.raw === 'number' ? bestMoveType.raw : 1;
  }

  // Normalizamos o valor de ATK para a nova escala (1.0 / 1.5 / 2.0) e garantimos teto de 2.0
  const offense = normalizeOffenseValue(offenseRaw);

  const pokeTypes = Array.isArray(poke.types) ? poke.types : [];
  const attackTypesList = bossAttackTypes.filter(Boolean);

  // Coletar multiplicadores brutos e normalizados para aplicar regras que
  // consideram a combinacao de tipos de ataque do boss (ex: se todos os tipos
  // de ataque sao resistidos, tratar como super inafetivo = 0.5).
  const defenseMeta = attackTypesList.map((attackType) => {
    const customMultiplier = matchupOverride?.defenseByBossType?.[attackType];
    if (typeof customMultiplier === 'number') {
      const raw = customMultiplier;
      return { attackType, raw, normalized: normalizeDefenseValue(raw, true), explicit: true };
    }
    const baseRaw = getTypeMultiplier(attackType, pokeTypes, poke.immunities);
    const customDamageFactor = matchupOverride?.defenseDamageFactorByBossType?.[attackType];
    if (typeof customDamageFactor === 'number') {
      const raw = baseRaw * customDamageFactor;
      return { attackType, raw, normalized: normalizeDefenseValue(raw, false), explicit: false };
    }
    const passiveDamageFactor = poke.defenseDamageFactorByBossType?.[attackType];
    if (typeof passiveDamageFactor === 'number') {
      const raw = baseRaw * passiveDamageFactor;
      return { attackType, raw, normalized: normalizeDefenseValue(raw, false), explicit: false };
    }
    const passiveMultiplier = poke.defenseByBossType?.[attackType];
    if (typeof passiveMultiplier === 'number') {
      const raw = passiveMultiplier;
      return { attackType, raw, normalized: normalizeDefenseValue(raw, true), explicit: true };
    }
    return { attackType, raw: baseRaw, normalized: normalizeDefenseValue(baseRaw, false), explicit: false };
  });

  const defenseMultipliers = defenseMeta.map((m) => m.normalized);
  let worstDefense = defenseMultipliers.length ? Math.max(...defenseMultipliers) : 1;
  const bestDefense = defenseMultipliers.length ? Math.min(...defenseMultipliers) : 1;

  // Se todos os tipos de ataque do boss geram resistencia (normalizado <= 0.75),
  // considerar a interacao geral como "super inafetivo" (0.5). Isso cobre
  // casos como Mega Skarmory (steel + flying), em que um Pokemon resiste ambos
  // os tipos de ataque e deve ser tratado como resistencia mais forte.
  if (defenseMultipliers.length > 1 && defenseMultipliers.every((v) => typeof v === 'number' && v <= 0.75)) {
    worstDefense = 0.5;
  }

  const effectiveOffenseForScoring = offense;

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

  const scoreWeights = getRecommendationScoreWeights(boss);
  const combined = rankMode === 'defense-only'
    ? ((worstDefense <= 0.5 ? 100 : 1 / worstDefense) + (bestDefense <= 0.5 ? 1 : 1 / (bestDefense * 10)))
    : ((offenseScore * scoreWeights.offense) + (defenseScore * scoreWeights.defense));
  const explicitTier = poke?.tierLocked && typeof poke?.tier === 'string'
    ? normalizeTierKey(poke.tier)
    : '';
  const tier = explicitTier && Object.prototype.hasOwnProperty.call(tierPriority, explicitTier)
    ? explicitTier
    : (rankMode === 'defense-only'
      ? classifyDefenseOnlyRecommendationTier(worstDefense, {
        offense: effectiveOffenseForScoring,
        roleKey: options?.roleKey || poke?.recommendedRole
      })
      : classifyRecommendationTier(effectiveOffenseForScoring, worstDefense, { roleKey: options?.roleKey || poke?.recommendedRole }));

  return {
    ...poke,
    _score: combined,
    _offense: offense,
    _defenseWorst: worstDefense,
    _defenseBest: bestDefense,
    _scoreWeights: scoreWeights,
    _moveType: moveType,
    tier,
  };
}

function rankRecommendedForBoss(bossOrTypes, recommendedList, options = {}) {
  const normalizedRoleKey = normalizeRecommendationRoleKey(options?.roleKey);
  return filterBossRecommendationsByMinimumLevel(recommendedList || [])
    .map((poke) => scoreRecommendationForBoss(bossOrTypes, poke, options))
    .filter((poke) => normalizedRoleKey !== 'dps' || (typeof poke?._offense === 'number' && poke._offense > 1))
    .sort((a, b) => {
      const leftPriority = getRecommendationTierPriority(a.tier);
      const rightPriority = getRecommendationTierPriority(b.tier);
      if (leftPriority !== rightPriority) return leftPriority - rightPriority;
      if (b._score !== a._score) return b._score - a._score;
      return a.name.localeCompare(b.name);
    });
}

function getAutomaticBossRoleLimits(boss, roleKeys, options = {}) {
  const fallbackLimit = Math.max(1, Number.parseInt(options?.limit, 10) || 3);
  const explicitLimits = options?.roleLimits && typeof options.roleLimits === 'object'
    ? options.roleLimits
    : (boss?.automaticRoleLimits && typeof boss.automaticRoleLimits === 'object'
      ? boss.automaticRoleLimits
      : null);

  return roleKeys.reduce((limits, roleKey) => {
    const configuredLimit = Number.parseInt(explicitLimits?.[roleKey], 10);
    limits[roleKey] = Number.isFinite(configuredLimit)
      ? Math.max(0, configuredLimit)
      : fallbackLimit;
    return limits;
  }, {});
}

function getAutomaticBossPassivePriority(pick) {
  const passiveInfo = getRecommendationPassiveInfo(pick);
  const passiveItems = getRecommendationPassiveInfoItems(passiveInfo);
  return {
    hasPassive: passiveItems.length ? 1 : 0,
    itemCount: passiveItems.length,
    isShiny: isShinyRecommendationVariant(pick) ? 1 : 0
  };
}

function compareAutomaticBossPicks(left, right, roleKey) {
  const leftPriority = getRecommendationTierPriority(left?.tier);
  const rightPriority = getRecommendationTierPriority(right?.tier);
  if (leftPriority !== rightPriority) return leftPriority - rightPriority;

  if (right?._score !== left?._score) return right._score - left._score;

  if (roleKey === 'dps' && right?._offense !== left?._offense) {
    return right._offense - left._offense;
  }

  if (roleKey !== 'dps' && left?._defenseWorst !== right?._defenseWorst) {
    return left._defenseWorst - right._defenseWorst;
  }

  const leftPassive = getAutomaticBossPassivePriority(left);
  const rightPassive = getAutomaticBossPassivePriority(right);
  if (rightPassive.hasPassive !== leftPassive.hasPassive) return rightPassive.hasPassive - leftPassive.hasPassive;
  if (rightPassive.itemCount !== leftPassive.itemCount) return rightPassive.itemCount - leftPassive.itemCount;
  if (rightPassive.isShiny !== leftPassive.isShiny) return rightPassive.isShiny - leftPassive.isShiny;

  return String(left?.name || '').localeCompare(String(right?.name || ''));
}

function isAutomaticBossPickEligible(pick, roleKey, maximumPriority, includeAcceptableDefenders) {
  if (!pick || !isBossRecommendationLevelEligible(pick)) return false;
  if (roleKey === 'dps' && (!(typeof pick._offense === 'number') || pick._offense <= 1)) return false;

  const tierPriorityValue = getRecommendationTierPriority(pick.tier);
  if (tierPriorityValue <= maximumPriority) return true;

  return Boolean(
    includeAcceptableDefenders
    && roleKey !== 'dps'
    && normalizeTierKey(pick.tier) === 'aceitavel'
  );
}

function createAutomaticBossCandidateVariants(entry, boss, roleKey, seedConfigs, includeShinyVariants) {
  const basePick = createFixedRecommendationPickFromRegistryEntry(entry, seedConfigs);
  if (!basePick) return [];

  const variants = [basePick];
  if (includeShinyVariants) {
    const shinyPick = createMirroredRecommendationVariant(basePick);
    if (shinyPick) variants.push(shinyPick);
  }

  return variants.map((pick) => {
    const candidate = cloneRolePickConfig(pick);
    delete candidate._hasShinyVariant;
    delete candidate._shinyVariantPassiveInfo;
    delete candidate._shinyVariantTier;
    delete candidate._shinyVariantComparison;
    return scoreRecommendationForBoss(boss, candidate, { roleKey });
  });
}

function AutomaticBossBestPicks(bossRef, options = {}) {
  const boss = Array.isArray(bossRef) ? { types: bossRef } : bossRef;
  if (!boss || typeof boss !== 'object') return [];

  const requestedClan = normalizePlannerClanKey(options?.clanKey);
  const requestedRole = normalizeRecommendationRoleKey(options?.roleKey);
  const clanKeys = requestedClan ? [requestedClan] : plannerClanOrder;
  const roleKeys = requestedRole ? [requestedRole] : roleboardRoleOrder;
  const roleLimits = getAutomaticBossRoleLimits(boss, roleKeys, options);
  const minimumTier = normalizeTierKey(options?.minimumTier || 'bom');
  const maximumPriority = getRecommendationMaximumPriority(minimumTier);
  const includeAcceptableDefenders = options?.includeAcceptableDefenders === true;
  const includeShinyVariants = options?.includeShinyVariants !== false;
  const seedConfigs = options?.seedConfigs && typeof options.seedConfigs === 'object'
    ? options.seedConfigs
    : buildFixedRecommendationSeedConfigs();
  const results = {};

  clanKeys.forEach((clanKey) => {
    results[clanKey] = {};

    roleKeys.forEach((roleKey) => {
      const pool = fixedRecommendationPokemonPools?.[clanKey]?.[roleKey] || [];
      const bestByPokemon = new Map();

      pool.forEach((entry) => {
        createAutomaticBossCandidateVariants(entry, boss, roleKey, seedConfigs, includeShinyVariants)
          .filter((pick) => isAutomaticBossPickEligible(pick, roleKey, maximumPriority, includeAcceptableDefenders))
          .forEach((pick) => {
            const baseKey = getRecommendationVariantBaseKey(pick);
            if (!baseKey) return;

            const currentBest = bestByPokemon.get(baseKey);
            if (!currentBest || compareAutomaticBossPicks(pick, currentBest, roleKey) < 0) {
              bestByPokemon.set(baseKey, pick);
            }
          });
      });

      results[clanKey][roleKey] = Array.from(bestByPokemon.values())
        .sort((left, right) => compareAutomaticBossPicks(left, right, roleKey))
        .slice(0, roleLimits[roleKey])
        .map((pick) => ({
          ...pick,
          _automaticBestTier: pick.tier,
          _automaticBestScore: pick._score,
          _automaticBestVariant: pick.name,
          _automaticPassivePriority: getAutomaticBossPassivePriority(pick)
        }));
    });
  });

  if (requestedClan && requestedRole) return results[requestedClan][requestedRole];
  if (requestedClan) return results[requestedClan];
  return results;
}

function synchronizeRecommendationTiers() {
  Object.values(bossCatalogs).forEach((catalog) => {
    (catalog.data || []).forEach((boss) => {
      Object.values(boss.clans || {}).forEach((clanData) => {
        const syncList = (bossRef, list, roleKey = '') => {
          (list || []).forEach((poke, index, entries) => {
            if (poke?.tierLocked) return;
            const computed = scoreRecommendationForBoss(bossRef, poke, { roleKey });
            entries[index].tier = computed.tier;
          });
        };

        if (Array.isArray(clanData.recommended)) {
          syncList(boss, clanData.recommended, 'dps');
        }

        if (Array.isArray(clanData.recommendationGroups)) {
          clanData.recommendationGroups.forEach((group) => {
            syncList(getRecommendationGroupBossRef(boss, group), group.recommended, 'dps');
          });
        }

        if (clanData.roles) {
          roleboardRoleOrder.forEach((roleKey) => {
            syncList(boss, clanData.roles?.[roleKey], roleKey);
          });
        }
      });
    });
  });
}

function dedupeRecommendedPicksByName(picks = []) {
  const seen = new Set();

  return filterBossRecommendationsByMinimumLevel(picks || []).filter((poke) => {
    const nameKey = getRecommendationNameKey(poke);
    if (!nameKey || seen.has(nameKey)) return false;
    seen.add(nameKey);
    return true;
  });
}

function limitMew2RecommendationsToTierFloor(minimumTier = 'bom') {
  const maximumPriority = getRecommendationTierPriority(minimumTier);

  mew2Bosses.forEach((boss) => {
    Object.values(boss.clans || {}).forEach((clanData) => {
      if (!clanData?.roles) return;

      const rankedByRole = {};
      roleboardRoleOrder.forEach((roleKey) => {
        const source = Array.isArray(clanData.roles[roleKey]) ? clanData.roles[roleKey] : [];
        rankedByRole[roleKey] = dedupeRecommendedPicksByName(rankRecommendedForBoss(boss, source, { roleKey }));
      });

      const usedNames = new Set();
      const nextRoles = {
        support: [],
        dps: [],
        tank: []
      };
      const roleSeedOrder = [...roleboardRoleOrder].sort((left, right) => {
        const leftPreferred = rankedByRole[left].filter((poke) => getRecommendationTierPriority(poke?.tier) <= maximumPriority).length;
        const rightPreferred = rankedByRole[right].filter((poke) => getRecommendationTierPriority(poke?.tier) <= maximumPriority).length;
        if (leftPreferred !== rightPreferred) return leftPreferred - rightPreferred;
        return roleboardRoleOrder.indexOf(left) - roleboardRoleOrder.indexOf(right);
      });

      const reserveCandidateForRole = (roleKey, allowAnyTier = false) => {
        const candidate = rankedByRole[roleKey].find((poke) => {
          const nameKey = getRecommendationNameKey(poke);
          if (!nameKey || usedNames.has(nameKey)) return false;
          const priority = getRecommendationTierPriority(poke?.tier);
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
          const priority = getRecommendationTierPriority(poke?.tier);
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

function ensureRolePickNames(list = [], requiredPicks = [], roleKey = '') {
  const targetList = Array.isArray(list) ? list : [];
  const normalizedRoleKey = normalizeRecommendationRoleKey(roleKey || targetList[0]?.recommendedRole);
  const existingNames = new Set(targetList.map((poke) => getRecommendationNameKey(poke)));

  targetList.forEach((pick) => {
    assignRecommendationRoleToPick(pick, normalizedRoleKey);
  });

  requiredPicks.forEach((pick) => {
    const nameKey = getRecommendationNameKey(pick);
    if (!nameKey || existingNames.has(nameKey)) return;
    existingNames.add(nameKey);
    targetList.push(assignRecommendationRoleToPick(cloneRolePickConfig(pick), normalizedRoleKey));
  });

  return targetList;
}

function ensureMew2BossRolePicks(bossId, clanKey, roleKey, picks = []) {
  const boss = mew2Bosses.find((entry) => entry.id === bossId);
  const roleList = boss?.clans?.[clanKey]?.roles?.[roleKey];
  if (!boss || !Array.isArray(roleList)) return;

  ensureRolePickNames(roleList, picks, roleKey);
}

function createHeracrossPick() {
  return createRolePick('Heracross', ['bug', 'fighting'], 'fighting', {
    passiveName: 'Guts',
    passiveDescription: 'O Pokemon se torna imune aos status Slow, Paralyze e Silence.'
  });
}

function createMiltankPick() {
  return createRolePick('Miltank', ['normal'], 'ground');
}

function createShinyMiltankPick() {
  return createRolePick('Shiny Miltank', ['normal'], 'ground');
}

function createHoundourPick() {
  return createRolePick('Houndour', ['dark', 'fire'], 'dark');
}

function createChanseyPick() {
  return createRolePick('Chansey', ['normal'], 'psychic');
}

function createWynautPick() {
  return createRolePick('Wynaut', ['psychic'], 'psychic');
}

const requestedSupportRecommendationFactories = Object.freeze([
  createHoundourPick,
  createChanseyPick,
  createWynautPick
]);

function getMegaAbsolZMoveTypeForBoss(bossRef) {
  const targetTypes = getBossOffenseTargetTypes(bossRef);
  if (!targetTypes.length) return 'dark';

  const darkDamage = getTypeMultiplier('dark', targetTypes);
  const fairyDamage = getTypeMultiplier('fairy', targetTypes);
  return fairyDamage > darkDamage ? 'fairy' : 'dark';
}

function createMegaAbsolZPickForBoss(bossRef) {
  const moveType = getMegaAbsolZMoveTypeForBoss(bossRef);
  const pick = createRolePick('Mega Absol Z', ['dark'], moveType, {
    note: megaAbsolZMovesetNote
  });
  pick.description = `Tipo move: ${moveType === 'fairy' ? 'Fairy' : 'Dark'}.`;
  return pick;
}

function upsertRolePickByName(list = [], pick, roleKey = '') {
  if (!Array.isArray(list) || !pick) return;

  const nameKey = getRecommendationNameKey(pick);
  if (!nameKey) return;

  const normalizedRoleKey = normalizeRecommendationRoleKey(roleKey || list[0]?.recommendedRole);
  const nextPick = assignRecommendationRoleToPick(cloneRolePickConfig(pick), normalizedRoleKey);
  const existingIndex = list.findIndex((entry) => getRecommendationNameKey(entry) === nameKey);

  if (existingIndex >= 0) {
    list[existingIndex] = nextPick;
    return;
  }

  list.push(nextPick);
}

function removeRolePickByName(list = [], name) {
  if (!Array.isArray(list)) return;

  const nameKey = getRecommendationNameKey(name);
  if (!nameKey) return;

  for (let index = list.length - 1; index >= 0; index -= 1) {
    if (getRecommendationNameKey(list[index]) === nameKey) {
      list.splice(index, 1);
    }
  }
}

function addSupportPickIfTierBomOrAbove(bossRef, picks = [], createPick) {
  if (!Array.isArray(picks) || typeof createPick !== 'function') return;

  const basePick = createPick();
  if (!isBossRecommendationLevelEligible(basePick)) return;
  const scored = scoreRecommendationForBoss(bossRef, basePick, { roleKey: 'support' });
  const priority = getRecommendationTierPriority(scored?.tier);
  if (priority > tierPriority.bom) {
    removeRolePickByName(picks, basePick?.name);
    return;
  }

  ensureRolePickNames(picks, [scored], 'support');
}

function addHeracrossIfCompatible(bossRef, picks = [], roleKey = '') {
  if (!Array.isArray(picks)) return;

  const basePick = createHeracrossPick();
  if (!isBossRecommendationLevelEligible(basePick)) return;
  const scored = scoreRecommendationForBoss(bossRef, basePick, { roleKey });
  const priority = getRecommendationTierPriority(scored?.tier);
  if (priority > tierPriority.bom) return;

  ensureRolePickNames(picks, [scored], roleKey);
}

function addMiltankIfCompatible(bossRef, picks = [], roleKey = '') {
  if (!Array.isArray(picks)) return;

  const basePick = createMiltankPick();
  const shinyPick = createShinyMiltankPick();
  if (!isBossRecommendationLevelEligible(basePick) && !isBossRecommendationLevelEligible(shinyPick)) return;
  const scored = scoreRecommendationForBoss(bossRef, basePick, { roleKey });
  const shinyScored = scoreRecommendationForBoss(bossRef, shinyPick, { roleKey });
  const priority = getRecommendationTierPriority(scored?.tier);
  if (priority > tierPriority.bom) return;

  ensureRolePickNames(picks, [scored, shinyScored].filter(isBossRecommendationLevelEligible), roleKey);
}

function addMegaAbsolZIfCompatible(bossRef, picks = [], roleKey = '') {
  if (!Array.isArray(picks)) return;

  const basePick = createMegaAbsolZPickForBoss(bossRef);
  if (!isBossRecommendationLevelEligible(basePick)) return;
  const scored = scoreRecommendationForBoss(bossRef, basePick, { roleKey });
  const priority = getRecommendationTierPriority(scored?.tier);
  if (priority > tierPriority.bom) {
    removeRolePickByName(picks, 'Mega Absol Z');
    return;
  }

  upsertRolePickByName(picks, scored, roleKey);
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
        addHeracrossIfCompatible(boss, valorClan.roles.dps, 'dps');
      }

      if (Array.isArray(valorClan.dps)) {
        addHeracrossIfCompatible(boss, valorClan.dps, 'dps');
      }
    });
  });
}

function injectMegaAbsolZRecommendations() {
  Object.values(bossCatalogs).forEach((catalog) => {
    (catalog.data || []).forEach((boss) => {
      const valorClan = boss?.clans?.valor;
      if (!valorClan) return;

      if (Array.isArray(valorClan.recommended)) {
        addMegaAbsolZIfCompatible(boss, valorClan.recommended);
      }

      if (Array.isArray(valorClan.recommendationGroups)) {
        valorClan.recommendationGroups.forEach((group) => {
          addMegaAbsolZIfCompatible(getRecommendationGroupBossRef(boss, group), group.recommended);
        });
      }

      if (Array.isArray(valorClan.roles?.dps)) {
        addMegaAbsolZIfCompatible(boss, valorClan.roles.dps, 'dps');
      }
    });
  });
}

function injectMiltankRecommendations() {
  Object.values(bossCatalogs).forEach((catalog) => {
    (catalog.data || []).forEach((boss) => {
      const valorTankList = boss?.clans?.valor?.roles?.tank;
      if (!Array.isArray(valorTankList)) return;
      addMiltankIfCompatible(boss, valorTankList, 'tank');
    });
  });
}

function injectRequestedSupportRecommendations() {
  const roleboardCatalogIds = new Set(['champion', 'mew2']);

  Object.values(bossCatalogs).forEach((catalog) => {
    if (!roleboardCatalogIds.has(catalog?.id)) return;

    (catalog.data || []).forEach((boss) => {
      Object.values(boss?.clans || {}).forEach((clanData) => {
        const supportList = clanData?.roles?.support;
        if (!Array.isArray(supportList)) return;

        requestedSupportRecommendationFactories.forEach((createPick) => {
          addSupportPickIfTierBomOrAbove(boss, supportList, createPick);
        });
      });
    });
  });
}

const catalogSpeedsterRecommendationConfigs = Object.freeze([
  { name: 'VenusaurTwo', types: ['grass', 'poison'], moveTypes: ['grass'], clan: 'instinct' },
  { name: 'BlastoiseTwo', types: ['water'], moveTypes: ['water'], clan: 'mystic' },
  { name: 'CharizardTwo', types: ['fire', 'flying'], moveTypes: ['fire'], clan: 'valor' },
  { name: 'Raticate', types: ['normal'], moveTypes: ['dark'], clan: 'valor' },
  { name: 'Pikachu', types: ['electric'], moveTypes: ['electric'], clan: 'instinct' },
  { name: 'Alakazam', types: ['psychic'], moveTypes: ['psychic'], clan: 'instinct' },
  { name: "Farfetch'd", types: ['normal', 'flying'], moveTypes: ['flying'], clan: 'valor' },
  { name: 'Dewgong', types: ['water', 'ice'], moveTypes: ['ice'], clan: 'mystic' },
  { name: 'Marowak', types: ['ground'], moveTypes: ['ground'], clan: 'instinct' },
  { name: 'Kingdra', types: ['water', 'dragon'], moveTypes: ['dragon'], clan: 'mystic' },
  { name: 'Seaking', types: ['water'], moveTypes: ['ground'], clan: 'mystic' },
  { name: 'Scyther', types: ['bug', 'flying'], moveTypes: ['bug'], clan: 'valor' },
  { name: 'Tauros', types: ['normal'], moveTypes: ['electric'], clan: 'valor' },
  { name: 'Kabutops', types: ['rock', 'water'], moveTypes: ['rock'], clan: 'valor' },
  { name: 'Dragonair', types: ['dragon'], moveTypes: ['dragon'], clan: 'instinct' },
  { name: 'Qwilfish', types: ['water', 'poison'], moveTypes: ['poison'], clan: 'mystic' },
  { name: 'Heracross', types: ['bug', 'fighting'], moveTypes: ['fighting'], clan: 'valor' },
  { name: 'Weavile', types: ['dark', 'ice'], moveTypes: ['ice'], clan: 'valor' },
  { name: 'Mantine', types: ['water', 'flying'], moveTypes: ['flying'], clan: 'mystic' },
  { name: "May's Beautifly", types: ['bug', 'flying'], moveTypes: ['flying'], clan: 'valor' },
  { name: 'Seviper', types: ['poison'], moveTypes: ['poison'], clan: 'instinct' },
  { name: 'Banette', types: ['ghost'], moveTypes: ['ghost'], clan: 'mystic' },
  { name: 'Absol', types: ['dark'], moveTypes: ['dark'], clan: 'valor' },
  { name: 'Gorging Cramorant', types: ['flying', 'water'], moveTypes: ['water'], clan: 'valor' },
  { name: 'Drifloon', types: ['ghost', 'flying'], moveTypes: ['fire'], clan: 'mystic' },
  { name: 'Serperior', types: ['grass'], moveTypes: ['grass'], clan: 'instinct' },
  { name: "Rosa's Serperior", types: ['grass'], moveTypes: ['grass'], clan: 'instinct' },
  { name: 'Excadrill', types: ['ground', 'steel'], moveTypes: ['steel'], clan: 'instinct', extra: { passiveSuperEffectiveTypes: ['steel'] } },
  { name: 'Mega Excadrill', types: ['ground', 'steel'], moveTypes: ['ground'], clan: 'instinct', requireEffectiveOffense: true },
  { name: 'Bouffalant', types: ['normal'], moveTypes: ['ground'], clan: 'valor' }
]);

function createBestCatalogSpeedsterPick(config, bossRef) {
  const scoredPicks = (config?.moveTypes || []).map((moveType) => {
    const pick = createRolePick(config.name, config.types, moveType, config?.extra || {});
    if (!isBossRecommendationLevelEligible(pick)) return null;
    pick.bossEntries = [{ bossName: bossRef?.name || bossRef?.id || '' }];
    const scored = scoreRecommendationForBoss(bossRef, pick, { roleKey: 'dps' });
    delete scored.bossEntries;
    if (config?.requireEffectiveOffense && scored._offense <= 1) return null;
    return scored;
  }).filter(Boolean);

  return scoredPicks.sort((left, right) => (
    getRecommendationTierPriority(left?.tier) - getRecommendationTierPriority(right?.tier)
    || (right?._score ?? 0) - (left?._score ?? 0)
  ))[0] || null;
}

function addCatalogSpeedstersToRecommendationList(bossRef, list, clanKey) {
  if (!Array.isArray(list)) return;
  if (
    String(bossRef?.id || '').trim().toLowerCase() === 'mega-malamar'
    && String(clanKey || '').trim().toLowerCase() === 'instinct'
    && isMainQuestBoss(bossRef)
  ) {
    return;
  }

  catalogSpeedsterRecommendationConfigs
    .filter((config) => config.clan === clanKey)
    .forEach((config) => {
      const scored = createBestCatalogSpeedsterPick(config, bossRef);
      if (!scored || getRecommendationTierPriority(scored.tier) > tierPriority.bom) return;
      ensureRolePickNames(list, [scored], 'dps');
    });
}

function injectCatalogSpeedsterRecommendations() {
  Object.values(bossCatalogs).forEach((catalog) => {
    (catalog?.data || []).forEach((boss) => {
      Object.entries(boss?.clans || {}).forEach(([clanKey, clanData]) => {
        if (Array.isArray(clanData?.recommended)) {
          addCatalogSpeedstersToRecommendationList(boss, clanData.recommended, clanKey);
        }

        (clanData?.recommendationGroups || []).forEach((group) => {
          addCatalogSpeedstersToRecommendationList(
            getRecommendationGroupBossRef(boss, group),
            group.recommended,
            clanKey
          );
        });

        if (Array.isArray(clanData?.roles?.dps)) {
          addCatalogSpeedstersToRecommendationList(boss, clanData.roles.dps, clanKey);
        }
      });
    });
  });
}

const catalogRoleRecommendationConfigs = Object.freeze([
  { name: 'Chingling', roleKey: 'support', types: ['psychic'], moveTypes: ['psychic'], clan: 'instinct' },
  { name: 'Swalot', roleKey: 'support', types: ['poison'], moveTypes: ['poison'], clan: 'instinct' },
  { name: 'Corsola', roleKey: 'support', types: ['water', 'rock'], moveTypes: ['rock'], clan: 'mystic' },
  { name: 'Vanilluxe', roleKey: 'support', types: ['ice'], moveTypes: ['ice'], clan: 'mystic' },
  { name: 'Dustox', roleKey: 'support', types: ['bug', 'poison'], moveTypes: ['poison'], clan: 'valor' },
  { name: 'Munchlax', roleKey: 'support', types: ['normal'], moveTypes: ['fighting'], clan: 'valor' },
  { name: 'Bayleef', roleKey: 'tank', types: ['grass'], moveTypes: ['grass'], clan: 'instinct' },
  { name: 'Chikorita', roleKey: 'tank', types: ['grass'], moveTypes: ['grass'], clan: 'instinct' },
  { name: 'Grumpig', roleKey: 'tank', types: ['psychic'], moveTypes: ['dark'], clan: 'instinct' },
  { name: 'Hippowdon Female', roleKey: 'tank', types: ['ground'], moveTypes: ['ground'], clan: 'instinct' },
  { name: 'Weezing', roleKey: 'tank', types: ['poison'], moveTypes: ['poison'], clan: 'instinct' },
  { name: 'Hitmonchan', roleKey: 'tank', types: ['fighting'], moveTypes: ['fighting'], clan: 'mystic' },
  { name: 'Slowbro', roleKey: 'tank', types: ['water', 'psychic'], moveTypes: ['psychic'], clan: 'mystic' },
  { name: 'Tentacruel', roleKey: 'tank', types: ['water', 'poison'], moveTypes: ['poison'], clan: 'mystic' },
  { name: 'Walrein', roleKey: 'tank', types: ['ice', 'water'], moveTypes: ['ice'], clan: 'mystic' },
  { name: 'Lickitung', roleKey: 'tank', types: ['normal'], moveTypes: ['normal'], clan: 'valor' },
  { name: 'Snorlax', roleKey: 'tank', types: ['normal'], moveTypes: ['normal'], clan: 'valor' }
]);

function createBestCatalogRolePick(config, bossRef) {
  const scoredPicks = (config?.moveTypes || []).map((moveType) => (
    createRolePick(config.name, config.types, moveType)
  ))
    .filter(isBossRecommendationLevelEligible)
    .map((pick) => scoreRecommendationForBoss(
      bossRef,
      pick,
      { roleKey: config.roleKey }
    ))
    .filter((pick) => config.roleKey !== 'dps' || (typeof pick?._offense === 'number' && pick._offense > 1));

  return scoredPicks.sort((left, right) => (
    getRecommendationTierPriority(left?.tier) - getRecommendationTierPriority(right?.tier)
    || (right?._score ?? 0) - (left?._score ?? 0)
  ))[0] || null;
}

function injectCatalogRoleRecommendations() {
  Object.values(bossCatalogs).forEach((catalog) => {
    (catalog?.data || []).forEach((boss) => {
      catalogRoleRecommendationConfigs.forEach((config) => {
        const roleList = boss?.clans?.[config.clan]?.roles?.[config.roleKey];
        if (!Array.isArray(roleList)) return;

        const scored = createBestCatalogRolePick(config, boss);
        if (!scored || getRecommendationTierPriority(scored.tier) > tierPriority.bom) return;
        ensureRolePickNames(roleList, [scored], config.roleKey);
      });
    });
  });
}

function filterMegaAbsolZBossGroupsToFairyMoveset() {
  Object.values(bossCatalogs).forEach((catalog) => {
    (catalog?.data || []).forEach((boss) => {
      Object.values(boss?.clans || {}).forEach((clanData) => {
        (clanData?.recommendationGroups || []).forEach((group) => {
          const groupKey = getRecommendationNameKey(group?.bossId || group?.title || '');
          if(groupKey !== 'megaabsolz') return;
          group.recommended = (group.recommended || []).filter((pick) => (
            parseMoveTypes(pick).includes('fairy')
          ));
        });
      });
    });
  });
}

ensureMirroredRecommendationVariants();
injectHeracrossRecommendations();
injectMiltankRecommendations();
injectMegaAbsolZRecommendations();
injectRequestedSupportRecommendations();
injectCatalogSpeedsterRecommendations();
injectCatalogRoleRecommendations();
normalizeAllBossRecommendationAssignments();
applyFixedRecommendationRegistryChecks();
filterMegaAbsolZBossGroupsToFairyMoveset();
hydrateRecommendationCatalog();
synchronizeRecommendationTiers();
limitMew2RecommendationsToTierFloor('bom');
function getRecommendationTierPriority(tier) {
  return tierPriority[normalizeTierKey(tier)] ?? tierPriority.seminformacao;
}

function buildFixedRecommendationSeedConfigs() {
  const seeds = {};
  const richnessByKey = {};
  const getSeedRichness = (pick) => {
    if (!pick || typeof pick !== 'object') return 0;

    let score = 0;
    const structuredKeys = [
      'types',
      'immunities',
      'passiveSuperEffectiveTypes',
      'defenseByBossType',
      'defenseDamageFactorByBossType',
      'matchupOverrides'
    ];
    const textKeys = ['note', 'passiveName', 'passiveDescription'];

    structuredKeys.forEach((key) => {
      const value = pick[key];
      if (Array.isArray(value)) score += value.length;
      else if (value && typeof value === 'object') score += Object.keys(value).length * 2;
    });

    textKeys.forEach((key) => {
      if (typeof pick[key] === 'string' && pick[key].trim()) {
        score += 1;
      }
    });

    return score;
  };

  visitAllRecommendationPicks((pick) => {
    const registryEntry = getFixedRecommendationEntry(pick);
    const nameKey = getRecommendationNameKey(pick);
    if (!registryEntry || !nameKey) return;

    const clonedPick = cloneRolePickConfig(pick);
    delete clonedPick.tier;
    delete clonedPick.tierLocked;

    const richness = getSeedRichness(clonedPick);
    if (!seeds[nameKey] || richness > (richnessByKey[nameKey] ?? -1)) {
      seeds[nameKey] = clonedPick;
      richnessByKey[nameKey] = richness;
    }
  });

  return seeds;
}

function createFixedRecommendationPickFromRegistryEntry(registryEntry, seedConfigs = {}) {
  if (!registryEntry) return null;

  const nameKey = getRecommendationNameKey(registryEntry.name);
  const seededPick = nameKey ? seedConfigs[nameKey] : null;
  const nextPick = seededPick
    ? cloneRolePickConfig(seededPick)
    : createRolePick(registryEntry.name, [registryEntry.primaryType], registryEntry.moveType || registryEntry.primaryType);

  delete nextPick.tier;
  delete nextPick.tierLocked;
  applyFixedRecommendationMetadata(nextPick, registryEntry);
  return assignRecommendationRoleToPick(nextPick, registryEntry.role);
}

function getRecommendationMaximumPriority(minimumTier = 'bom') {
  const normalizedMinimumTier = normalizeTierKey(minimumTier);
  return tierPriority[normalizedMinimumTier] ?? tierPriority.bom;
}

function createOnlyOptionPick(pick, roleKey = '') {
  if (!pick || typeof pick !== 'object') return null;

  const onlyOptionPick = assignRecommendationRoleToPick(cloneRolePickConfig(pick), roleKey);
  onlyOptionPick.tier = 'seminformacao';
  onlyOptionPick.tierLocked = true;
  return onlyOptionPick;
}

function getSingleOnlyOptionPick(list = [], roleKey = '') {
  const deduped = dedupeRecommendedPicksByName(list || []);
  return deduped.length === 1 ? createOnlyOptionPick(deduped[0], roleKey) : null;
}

function pickFallbackRecommendationForBoss(bossRef, clanKey, roleKey, seedConfigs = {}, excludedNameKeys = new Set(), minimumTier = 'bom') {
  const registryPool = fixedRecommendationPokemonPools?.[clanKey]?.[roleKey] || [];
  const maximumPriority = getRecommendationMaximumPriority(minimumTier);

  const rankedCandidates = registryPool
    .map((registryEntry) => createFixedRecommendationPickFromRegistryEntry(registryEntry, seedConfigs))
    .filter((pick) => pick && !excludedNameKeys.has(getRecommendationNameKey(pick)))
    .filter(isBossRecommendationLevelEligible)
    .map((pick) => {
      const scored = scoreRecommendationForBoss(bossRef, pick, { roleKey });
      return { pick, scored };
    })
    .filter(({ scored }) => roleKey !== 'dps' || (typeof scored?._offense === 'number' && scored._offense > 1))
    .filter(({ scored }) => getRecommendationTierPriority(scored?.tier) <= maximumPriority)
    .sort((left, right) => {
      const leftPriority = getRecommendationTierPriority(left?.scored?.tier);
      const rightPriority = getRecommendationTierPriority(right?.scored?.tier);
      if (leftPriority !== rightPriority) return leftPriority - rightPriority;
      if ((right?.scored?._score ?? 0) !== (left?.scored?._score ?? 0)) {
        return (right?.scored?._score ?? 0) - (left?.scored?._score ?? 0);
      }
      return String(left?.scored?.name || '').localeCompare(String(right?.scored?.name || ''));
    });

  return rankedCandidates[0]?.pick ? cloneRolePickConfig(rankedCandidates[0].pick) : null;
}

function filterRecommendationListByTier(list = [], bossRef, minimumTier = 'bom', roleKey = '') {
  const maximumPriority = getRecommendationMaximumPriority(minimumTier);
  return dedupeRecommendedPicksByName(
    rankRecommendedForBoss(bossRef, list || [], { roleKey })
      .filter((pick) => getRecommendationTierPriority(pick?.tier) <= maximumPriority)
  );
}

function removeRuimRecommendationsAndBackfillMissingBosses() {
  const seedConfigs = buildFixedRecommendationSeedConfigs();
  const targetCatalogs = Object.values(bossCatalogs)
    .filter((catalog) => Array.isArray(catalog?.data) && catalog.data.length);

  targetCatalogs.forEach((catalog) => {
    (catalog?.data || []).forEach((boss) => {
      Object.entries(boss?.clans || {}).forEach(([clanKey, clanData]) => {
        if (!clanData) return;

        if (clanData.roles) {
          roleboardRoleOrder.forEach((roleKey) => {
            const sourceList = clanData.roles?.[roleKey] || [];
            const filtered = filterRecommendationListByTier(sourceList, boss, 'bom', roleKey);
            if (filtered.length) {
              clanData.roles[roleKey] = filtered;
              return;
            }

            const acceptableFiltered = filterRecommendationListByTier(sourceList, boss, 'aceitavel', roleKey);
            if (acceptableFiltered.length) {
              clanData.roles[roleKey] = acceptableFiltered;
              return;
            }

            const onlyOptionPick = roleKey === 'dps' ? null : getSingleOnlyOptionPick(sourceList, roleKey);
            if (onlyOptionPick) {
              clanData.roles[roleKey] = [onlyOptionPick];
              return;
            }

            const fallbackPick = pickFallbackRecommendationForBoss(boss, clanKey, roleKey, seedConfigs, new Set(), 'aceitavel');
            clanData.roles[roleKey] = fallbackPick ? [fallbackPick] : [];
          });
          return;
        }

        if (Array.isArray(clanData.recommendationGroups)) {
          clanData.recommendationGroups.forEach((group) => {
            const bossRef = getRecommendationGroupBossRef(boss, group);
            const sourceList = group.recommended || [];
            const filtered = filterRecommendationListByTier(sourceList, bossRef, 'bom', 'dps');
            if (filtered.length) {
              group.recommended = filtered;
              return;
            }

            const acceptableFiltered = filterRecommendationListByTier(sourceList, bossRef, 'aceitavel', 'dps');
            if (acceptableFiltered.length) {
              group.recommended = acceptableFiltered;
              return;
            }

            const fallbackPick = pickFallbackRecommendationForBoss(bossRef, clanKey, 'dps', seedConfigs, new Set(), 'aceitavel');
            group.recommended = fallbackPick ? [fallbackPick] : [];
          });
          return;
        }

        if (Array.isArray(clanData.recommended)) {
          const sourceList = clanData.recommended;
          const filtered = filterRecommendationListByTier(sourceList, boss, 'bom', 'dps');
          if (filtered.length) {
            clanData.recommended = filtered;
            return;
          }

          const acceptableFiltered = filterRecommendationListByTier(sourceList, boss, 'aceitavel', 'dps');
          if (acceptableFiltered.length) {
            clanData.recommended = acceptableFiltered;
            return;
          }

          const fallbackPick = pickFallbackRecommendationForBoss(boss, clanKey, 'dps', seedConfigs, new Set(), 'aceitavel');
          clanData.recommended = fallbackPick ? [fallbackPick] : [];
        }
      });
    });
  });
}

ensureMew2BossRolePicks('charizard', 'mystic', 'tank', [
  createRolePick('Shiny Bronzong', ['steel', 'psychic'], 'steel')
]);
// Completa apenas os picks pedidos para o modo Mewtwo quando o score interno
// do proprio projeto os classifica como "Aceitavel" ou acima.
const mew2RequestedInstinctDpsByBoss = Object.freeze({
  clefable: [
    createRolePick('Alakazam', ['psychic'], 'psychic'),
    createRolePick('Seviper', ['poison'], 'poison')
  ],
  primeape: [
    createRolePick('Alakazam', ['psychic'], 'psychic'),
    createRolePick('Seviper', ['poison'], 'poison')
  ],
  dugtrio: [
    createRolePick('Pikachu', ['electric'], 'electric'),
    createRolePick('Alakazam', ['psychic'], 'psychic'),
    createRolePick('Seviper', ['poison'], 'poison'),
    createRolePick('Dedenne', ['electric', 'fairy'], 'fairy')
  ],
  jynx: [
    createRolePick('Alakazam', ['psychic'], 'psychic'),
    createRolePick('Seviper', ['poison'], 'poison'),
    createRolePick('Lurantis', ['grass'], 'bug'),
    createRolePick('Marowak', ['ground'], 'ground')
  ],
  blastoise: [
    createRolePick('Alakazam', ['psychic'], 'psychic'),
    createRolePick('Seviper', ['poison'], 'poison'),
    createRolePick('Marowak', ['ground'], 'ground')
  ],
  pinsir: [
    createRolePick('Alakazam', ['psychic'], 'psychic'),
    createRolePick('Lurantis', ['grass'], 'bug')
  ],
  venusaur: [
    createRolePick('Alakazam', ['psychic'], 'psychic'),
    createRolePick('Seviper', ['poison'], 'poison'),
    createRolePick('Marowak', ['ground'], 'ground')
  ],
  charizard: [
    createRolePick('Alakazam', ['psychic'], 'psychic'),
    createRolePick('Seviper', ['poison'], 'poison'),
    createRolePick('Lurantis', ['grass'], 'bug')
  ],
  pikachu: [
    createRolePick('Alakazam', ['psychic'], 'psychic'),
    createRolePick('Seviper', ['poison'], 'poison')
  ],
  mewtwo: [
    createRolePick('Alakazam', ['psychic'], 'psychic'),
    createRolePick('Seviper', ['poison'], 'poison')
  ]
});
Object.entries(mew2RequestedInstinctDpsByBoss).forEach(([bossId, picks]) => {
  ensureMew2BossRolePicks(bossId, 'instinct', 'dps', picks);
});
removeRuimRecommendationsAndBackfillMissingBosses();
synchronizeRecommendationTiers();
mergeShinyRecommendationVariantsAcrossBossCatalogs();
mergeShinyRecommendationVariantsForRoleboardBosses(horizonsSilverBosses);
removeRuimRecommendationsAndBackfillMissingBosses();
filterMegaAbsolZBossGroupsToFairyMoveset();
synchronizeRecommendationTiers();
refreshTierLegendLabels();

function getActiveBossCatalog() {
  return bossCatalogs[activeBossMode] || bossCatalogs.hoopa;
}

function getActiveBossesData() {
  return getActiveBossCatalog().data || [];
}

function isBossModalOpen() {
  return Boolean(
    modal
    && modal.getAttribute('aria-hidden') !== 'true'
    && currentBoss
    && isBossRouteableMode(activeBossMode)
  );
}

function isBossSearchResultModalOpen() {
  return Boolean(
    modal
    && modal.getAttribute('aria-hidden') !== 'true'
    && activeBossSearchResult
    && isBossRouteableMode(activeBossMode)
  );
}

function getActiveBossRouteState() {
  const routeOwnerBoss = isLocationOverlayOpen()
    ? activeLocationBoss
    : (isBossTutorialModalOpen() ? activeBossTutorialBoss : currentBoss);
  const bossSlug = getBossRouteSlug(routeOwnerBoss);
  const routeBoss = findBossByRouteSlug(activeBossMode, bossSlug);
  const searchSlug = getSpeedsterSearchRouteSlug(activeBossSearchResult);
  const searchPath = isBossSearchResultModalOpen() && searchSlug
    ? getSpeedsterSearchRoutePath(activeBossSearchResult, activeBossMode)
    : '';
  return {
    bossMode: activeBossMode,
    bossSlug: routeBoss ? bossSlug : '',
    searchSlug: isBossSearchResultModalOpen() && searchSlug ? searchSlug : '',
    searchPath,
    modalOpen: Boolean(routeBoss && isBossModalOpen()),
    searchOpen: Boolean(isBossSearchResultModalOpen() && searchSlug),
    mapOpen: Boolean(routeBoss && isLocationOverlayOpen()),
    videoOpen: Boolean(routeBoss && isBossTutorialModalOpen())
  };
}

function syncBossModalRouteOnOpen(pushState = true) {
  if (!isBossModalOpen()) {
    bossModalHistoryPushed = false;
    return false;
  }

  const previousPath = String(location?.pathname || '');
  const expectedPath = `${getBossRouteBasePath(activeBossMode)}/${getBossRouteSlug(currentBoss)}`;
  try {
    if (typeof updateUrl === 'function') {
      updateUrl({ historyMode: pushState ? 'push' : 'replace' });
    }
  } catch (error) {
    console.error('Nao foi possivel sincronizar a URL do boss.', error);
  }

  bossModalHistoryPushed = Boolean(
    pushState
    && String(location?.pathname || '') === expectedPath
    && previousPath !== expectedPath
  );
  return String(location?.pathname || '') === expectedPath;
}

function syncBossSearchRouteOnOpen(pushState = true) {
  if (!isBossSearchResultModalOpen()) {
    bossModalHistoryPushed = false;
    return false;
  }

  const searchSlug = getSpeedsterSearchRouteSlug(activeBossSearchResult);
  if (!searchSlug) {
    bossModalHistoryPushed = false;
    return false;
  }

  const previousPath = String(location?.pathname || '');
  const expectedPath = getSpeedsterSearchRoutePath(activeBossSearchResult, activeBossMode);
  if (!expectedPath) {
    bossModalHistoryPushed = false;
    return false;
  }
  try {
    if (typeof updateUrl === 'function') {
      updateUrl({ historyMode: pushState ? 'push' : 'replace' });
    }
  } catch (error) {
    console.error('Nao foi possivel sincronizar a URL da pesquisa do boss.', error);
  }

  bossModalHistoryPushed = Boolean(
    pushState
    && String(location?.pathname || '') === expectedPath
    && previousPath !== expectedPath
  );
  return String(location?.pathname || '') === expectedPath;
}

function syncBossLocationRouteOnOpen(pushState = true) {
  if (!isLocationOverlayOpen() || !activeLocationBoss) {
    locationOverlayHistoryPushed = false;
    return false;
  }

  const expectedPath = getBossLocationRoutePath(activeLocationBoss, activeBossMode);
  if (!expectedPath) {
    locationOverlayHistoryPushed = false;
    return false;
  }

  const previousPath = String(location?.pathname || '');
  try {
    if (typeof updateUrl === 'function') {
      updateUrl({ historyMode: pushState ? 'push' : 'replace' });
    }
  } catch (error) {
    console.error('Nao foi possivel sincronizar a URL do mapa do boss.', error);
  }

  locationOverlayHistoryPushed = Boolean(
    pushState
    && String(location?.pathname || '') === expectedPath
    && previousPath !== expectedPath
  );
  return String(location?.pathname || '') === expectedPath;
}

function syncBossTutorialRouteOnOpen(pushState = true) {
  if (!isBossTutorialModalOpen() || !activeBossTutorialBoss) {
    bossTutorialHistoryPushed = false;
    return false;
  }

  const expectedPath = getBossTutorialRoutePath(activeBossTutorialBoss, activeBossMode);
  if (!expectedPath) {
    bossTutorialHistoryPushed = false;
    return false;
  }

  const previousPath = String(location?.pathname || '');
  try {
    if (typeof updateUrl === 'function') {
      updateUrl({ historyMode: pushState ? 'push' : 'replace' });
    }
  } catch (error) {
    console.error('Nao foi possivel sincronizar a URL do tutorial do boss.', error);
  }

  bossTutorialHistoryPushed = Boolean(
    pushState
    && String(location?.pathname || '') === expectedPath
    && previousPath !== expectedPath
  );
  return String(location?.pathname || '') === expectedPath;
}

function hideBossModalUi() {
  currentBoss = null;
  activeBossSearchResult = null;
  setBossModalLayout(false);

  const content = modal?.querySelector('.speedster-modal-content');
  if (modal) {
    modal.setAttribute('data-open', 'false');
    modal.setAttribute('aria-hidden', 'true');
    try { modal.removeAttribute('data-mode'); } catch (e) {}
    try { modal.removeAttribute('data-overlay-parent'); } catch (e) {}
  }
  if (document.body) {
    document.body.style.overflow = '';
  }
  syncSharedModalOpenState();
  try { modalBody.innerHTML = ''; } catch (e) {}
  try { modalBody.classList.remove('speedster-modal-body--search-results'); } catch (e) {}
  try { modalBody.classList.remove('speedster-modal-body--roleboard'); } catch (e) {}
  try { modalBody.classList.remove('speedster-modal-body--split'); } catch (e) {}
  try { content?.classList.remove('speedster-modal-content--search-results'); } catch (e) {}
  try { content?.classList.remove('speedster-modal-content--roleboard'); } catch (e) {}
  closeLocationOverlay({ skipHistory: true });
}

function setBossModalOverlayParent(parent) {
  if (!modal) return;
  const normalizedParent = String(parent || '').trim().toLowerCase();
  if (normalizedParent === 'pokemon') {
    if (document.body && modal !== document.body.lastElementChild) {
      document.body.appendChild(modal);
    }
    modal.setAttribute('data-overlay-parent', 'pokemon');
    return;
  }
  modal.removeAttribute('data-overlay-parent');
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

function getUniquePlannerTypes(types = []) {
  return [...new Set((types || []).filter(Boolean))];
}

function formatPlannerTypeList(types = []) {
  return getUniquePlannerTypes(types).map((type) => formatTypeLabel(type)).join(' / ');
}

function getPlannerDistinctMoveTypes(baseTypes = [], moveTypes = []) {
  const normalizedBaseTypes = new Set(getUniquePlannerTypes(baseTypes));
  return getUniquePlannerTypes(moveTypes).filter((type) => !normalizedBaseTypes.has(type));
}

function plannerTypeListsMatch(leftTypes = [], rightTypes = []) {
  const left = getUniquePlannerTypes(leftTypes);
  const right = getUniquePlannerTypes(rightTypes);
  if (left.length !== right.length) return false;
  return left.every((type, index) => type === right[index]);
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

function closeMainQuestPuzzleZoom() {
  const zoom = document.querySelector('.mainquest-puzzle-zoom');
  if (zoom) zoom.remove();
  if (!document.querySelector('.modal[aria-hidden="false"]') && !document.querySelector('.speedster-modal[data-open="true"]')) {
    document.body.classList.remove('modal-open');
  }
}

function openMainQuestPuzzleZoom(imageData) {
  closeMainQuestPuzzleZoom();
  mainQuestPuzzleZoomScale = 1;

  const overlay = document.createElement('div');
  overlay.className = 'mainquest-puzzle-zoom';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-label', imageData?.label || 'Quebra-cabeça ampliado');

  const backdrop = document.createElement('button');
  backdrop.type = 'button';
  backdrop.className = 'mainquest-puzzle-zoom__backdrop';
  backdrop.setAttribute('aria-label', 'Fechar imagem ampliada');
  backdrop.addEventListener('click', closeMainQuestPuzzleZoom);

  const frame = document.createElement('div');
  frame.className = 'mainquest-puzzle-zoom__frame';

  const controls = document.createElement('div');
  controls.className = 'mainquest-puzzle-zoom__controls';

  const title = document.createElement('strong');
  title.className = 'mainquest-puzzle-zoom__title';
  title.textContent = imageData?.label || 'Quebra-cabeça';

  const zoomOut = document.createElement('button');
  zoomOut.type = 'button';
  zoomOut.className = 'mainquest-puzzle-zoom__btn';
  zoomOut.textContent = '-';
  zoomOut.setAttribute('aria-label', 'Diminuir zoom');

  const zoomIn = document.createElement('button');
  zoomIn.type = 'button';
  zoomIn.className = 'mainquest-puzzle-zoom__btn';
  zoomIn.textContent = '+';
  zoomIn.setAttribute('aria-label', 'Aumentar zoom');

  const close = document.createElement('button');
  close.type = 'button';
  close.className = 'mainquest-puzzle-zoom__btn mainquest-puzzle-zoom__btn--close';
  close.textContent = '×';
  close.setAttribute('aria-label', 'Fechar zoom');
  close.addEventListener('click', closeMainQuestPuzzleZoom);

  const imageWrap = document.createElement('div');
  imageWrap.className = 'mainquest-puzzle-zoom__image-wrap';

  const image = document.createElement('img');
  image.className = 'mainquest-puzzle-zoom__image';
  image.src = imageData?.src || '';
  image.alt = imageData?.label || 'Quebra-cabeça ampliado';
  image.decoding = 'async';

  const syncZoom = () => {
    image.style.transform = `scale(${mainQuestPuzzleZoomScale})`;
  };

  zoomOut.addEventListener('click', () => {
    mainQuestPuzzleZoomScale = Math.max(1, Math.round((mainQuestPuzzleZoomScale - 0.25) * 100) / 100);
    syncZoom();
  });

  zoomIn.addEventListener('click', () => {
    mainQuestPuzzleZoomScale = Math.min(3, Math.round((mainQuestPuzzleZoomScale + 0.25) * 100) / 100);
    syncZoom();
  });

  controls.append(title, zoomOut, zoomIn, close);
  imageWrap.appendChild(image);
  frame.append(controls, imageWrap);
  overlay.append(backdrop, frame);
  document.body.appendChild(overlay);
  document.body.classList.add('modal-open');
  close.focus({ preventScroll: true });
}

function closeMainQuestPuzzleModal() {
  closeMainQuestPuzzleZoom();
  const modal = document.querySelector('.mainquest-puzzle-modal');
  if (!modal) return;
  modal.remove();
  if (!document.querySelector('.modal[aria-hidden="false"]') && !document.querySelector('.speedster-modal[data-open="true"]')) {
    document.body.classList.remove('modal-open');
  }
}

function openMainQuestPuzzleModal() {
  closeMainQuestPuzzleModal();

  const overlay = document.createElement('div');
  overlay.className = 'mainquest-puzzle-modal';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-label', 'Quebra-cabeças da Main Quest');

  const backdrop = document.createElement('button');
  backdrop.type = 'button';
  backdrop.className = 'mainquest-puzzle-modal__backdrop';
  backdrop.setAttribute('aria-label', 'Fechar quebra-cabeças');
  backdrop.addEventListener('click', closeMainQuestPuzzleModal);

  const content = document.createElement('div');
  content.className = 'mainquest-puzzle-modal__content';

  const close = document.createElement('button');
  close.type = 'button';
  close.className = 'mainquest-puzzle-modal__close';
  close.textContent = '×';
  close.setAttribute('aria-label', 'Fechar quebra-cabeças');
  close.addEventListener('click', closeMainQuestPuzzleModal);

  const title = document.createElement('h2');
  title.className = 'mainquest-puzzle-modal__title';
  title.textContent = 'Quebra-cabeças';

  const grid = document.createElement('div');
  grid.className = 'mainquest-puzzle-grid';

  mainQuestPuzzleImages.forEach((imageData) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'mainquest-puzzle-card';
    button.setAttribute('aria-label', `Ampliar ${imageData.label}`);

    const image = document.createElement('img');
    image.className = 'mainquest-puzzle-card__image';
    image.src = imageData.src;
    image.alt = imageData.label;
    image.loading = 'lazy';
    image.decoding = 'async';

    const label = document.createElement('span');
    label.className = 'mainquest-puzzle-card__label';
    label.textContent = imageData.label;

    button.append(image, label);
    button.addEventListener('click', () => openMainQuestPuzzleZoom(imageData));
    grid.appendChild(button);
  });

  content.append(close, title, grid);
  overlay.append(backdrop, content);
  document.body.appendChild(overlay);
  document.body.classList.add('modal-open');
  close.focus({ preventScroll: true });
}

function closeMainQuestAdvancedJennyModal() {
  const modal = document.querySelector('.mainquest-advanced-jenny-modal');
  if (!modal) return;
  modal.remove();
  if (!document.querySelector('.modal[aria-hidden="false"]') && !document.querySelector('.speedster-modal[data-open="true"]')) {
    document.body.classList.remove('modal-open');
  }
}

function openMainQuestAdvancedJennyModal() {
  closeMainQuestAdvancedJennyModal();

  const overlay = document.createElement('div');
  overlay.className = 'mainquest-advanced-jenny-modal';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-label', 'Saffron Subway');

  const backdrop = document.createElement('button');
  backdrop.type = 'button';
  backdrop.className = 'mainquest-advanced-jenny-modal__backdrop';
  backdrop.setAttribute('aria-label', 'Fechar Advanced Jenny');
  backdrop.addEventListener('click', closeMainQuestAdvancedJennyModal);

  const content = document.createElement('div');
  content.className = 'mainquest-advanced-jenny-modal__content';

  const close = document.createElement('button');
  close.type = 'button';
  close.className = 'mainquest-advanced-jenny-modal__close';
  close.textContent = '×';
  close.setAttribute('aria-label', 'Fechar Advanced Jenny');
  close.addEventListener('click', closeMainQuestAdvancedJennyModal);

  const title = document.createElement('h2');
  title.className = 'mainquest-advanced-jenny-modal__title';
  title.textContent = 'Saffron Subway';

  const image = document.createElement('img');
  image.className = 'mainquest-advanced-jenny-modal__image';
  image.src = '/mainquest/advancedjenny.gif';
  image.alt = 'Saffron Subway - Advanced Jenny';
  image.decoding = 'async';

  const description = document.createElement('p');
  description.className = 'mainquest-advanced-jenny-modal__description';
  description.textContent = 'Desça todas as escadas até encontrar a Advanced Jenny';

  content.append(close, title, image, description);
  overlay.append(backdrop, content);
  document.body.appendChild(overlay);
  document.body.classList.add('modal-open');
  close.focus({ preventScroll: true });
}

function getMainQuestTeamMemberCompletedItems() {
  try {
    const raw = window.localStorage?.getItem(MAIN_QUEST_TEAM_MEMBER_STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return new Set(Array.isArray(parsed) ? parsed.filter(Boolean).map(String) : []);
  } catch (e) {
    return new Set();
  }
}

function saveMainQuestTeamMemberCompletedItems(completedItems) {
  try {
    window.localStorage?.setItem(
      MAIN_QUEST_TEAM_MEMBER_STORAGE_KEY,
      JSON.stringify(Array.from(completedItems || []))
    );
  } catch (e) {}
}

function closeMainQuestTeamMemberModal() {
  const modal = document.querySelector('.mainquest-team-member-modal');
  if (!modal) return;
  modal.remove();
  if (!document.querySelector('.modal[aria-hidden="false"]') && !document.querySelector('.speedster-modal[data-open="true"]')) {
    document.body.classList.remove('modal-open');
  }
}

function createMainQuestTeamMemberChecklistItem(item, completedItems) {
  const itemId = String(item?.id || '').trim().toLowerCase();
  const isDone = completedItems.has(itemId);

  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'mainquest-team-member-item';
  button.dataset.type = itemId;
  button.dataset.completed = isDone ? 'true' : 'false';
  button.setAttribute('aria-pressed', isDone ? 'true' : 'false');

  const circle = document.createElement('span');
  circle.className = 'mainquest-team-member-item__check';
  circle.setAttribute('aria-hidden', 'true');

  const text = document.createElement('span');
  text.className = 'mainquest-team-member-item__text';

  const amount = document.createElement('span');
  amount.className = 'mainquest-team-member-item__amount';
  amount.textContent = `${Number(item?.amount || 0)}x `;

  const type = document.createElement('span');
  type.className = 'mainquest-team-member-item__type';
  type.textContent = item?.type || itemId;

  text.append(amount, type);
  button.append(circle, text);

  button.addEventListener('click', () => {
    const nextDone = button.dataset.completed !== 'true';
    button.dataset.completed = nextDone ? 'true' : 'false';
    button.setAttribute('aria-pressed', nextDone ? 'true' : 'false');
    if (nextDone) completedItems.add(itemId);
    else completedItems.delete(itemId);
    saveMainQuestTeamMemberCompletedItems(completedItems);
  });

  return button;
}

function openMainQuestTeamMemberModal() {
  closeMainQuestTeamMemberModal();

  const completedItems = getMainQuestTeamMemberCompletedItems();
  const overlay = document.createElement('div');
  overlay.className = 'mainquest-team-member-modal';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-label', '🗨️ Team Member');

  const backdrop = document.createElement('button');
  backdrop.type = 'button';
  backdrop.className = 'mainquest-team-member-modal__backdrop';
  backdrop.setAttribute('aria-label', 'Fechar Team Member');
  backdrop.addEventListener('click', closeMainQuestTeamMemberModal);

  const content = document.createElement('div');
  content.className = 'mainquest-team-member-modal__content';

  const close = document.createElement('button');
  close.type = 'button';
  close.className = 'mainquest-team-member-modal__close';
  close.textContent = '×';
  close.setAttribute('aria-label', 'Fechar Team Member');
  close.addEventListener('click', closeMainQuestTeamMemberModal);

  const title = document.createElement('h2');
  title.className = 'mainquest-team-member-modal__title';
  title.textContent = '🗨️ Team Member';

  const lead = document.createElement('p');
  lead.className = 'mainquest-team-member-modal__lead';
  lead.textContent = 'Ainda falta:';

  const list = document.createElement('div');
  list.className = 'mainquest-team-member-list';
  mainQuestTeamMemberItems.forEach((item) => {
    list.appendChild(createMainQuestTeamMemberChecklistItem(item, completedItems));
  });

  const continueRow = document.createElement('button');
  continueRow.type = 'button';
  continueRow.className = 'mainquest-team-member-continue';
  continueRow.addEventListener('click', closeMainQuestTeamMemberModal);

  const continueCircle = document.createElement('span');
  continueCircle.className = 'mainquest-team-member-continue__check';
  continueCircle.setAttribute('aria-hidden', 'true');

  const continueText = document.createElement('span');
  continueText.textContent = 'Vou continuar';

  continueRow.append(continueCircle, continueText);
  content.append(close, title, lead, list, continueRow);
  overlay.append(backdrop, content);
  document.body.appendChild(overlay);
  document.body.classList.add('modal-open');
  close.focus({ preventScroll: true });
}

function createMainQuestPuzzleButton() {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'mainquest-action-btn mainquest-puzzle-open-btn';
  button.textContent = 'Quebra-cabeças';
  button.addEventListener('click', openMainQuestPuzzleModal);
  return button;
}

function createMainQuestAdvancedJennyButton() {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'mainquest-action-btn mainquest-advanced-jenny-open-btn';
  button.textContent = 'Advanced Jenny';
  button.addEventListener('click', openMainQuestAdvancedJennyModal);
  return button;
}

const MAIN_QUEST_TUTORIAL_URL = 'https://youtu.be/pSPkBjwYuYI';

function openMainQuestTutorialModal() {
  if (typeof window.openSiteYouTubeModal === 'function') {
    const openedInModal = window.openSiteYouTubeModal({
      url: MAIN_QUEST_TUTORIAL_URL,
      title: 'Tutorial Main Quest'
    });
    if (openedInModal) return;
  }
  window.open(MAIN_QUEST_TUTORIAL_URL, '_blank', 'noopener,noreferrer');
}

function createMainQuestTutorialButton() {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'mainquest-action-btn mainquest-tutorial-open-btn';

  const icon = document.createElement('img');
  icon.className = 'mainquest-tutorial-icon';
  icon.src = resolveBossAssetSrc('/mainquest/youtube_logo.png');
  icon.alt = '';
  icon.setAttribute('aria-hidden', 'true');

  const label = document.createElement('span');
  label.textContent = 'Tutorial';

  button.append(icon, label);
  button.addEventListener('click', openMainQuestTutorialModal);
  return button;
}

function createMainQuestTeamMemberButton() {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'mainquest-action-btn mainquest-team-member-open-btn';
  button.textContent = '🗨️ Team Member';
  button.addEventListener('click', openMainQuestTeamMemberModal);
  return button;
}

function createMainQuestActions() {
  const actions = document.createElement('div');
  actions.className = 'mainquest-actions';
  actions.append(
    createMainQuestPuzzleButton(),
    createMainQuestAdvancedJennyButton(),
    createMainQuestTeamMemberButton(),
    createMainQuestTutorialButton()
  );
  return actions;
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
    const hidePlannerIntro = String(catalog?.id || '').toLowerCase() === 'planner';

    const introLines = !hidePlannerIntro && Array.isArray(catalog.introLines) && catalog.introLines.length
      ? catalog.introLines
      : (!hidePlannerIntro && catalog.summary ? [catalog.summary] : []);

    introEl.hidden = introLines.length === 0;

    introLines
      .filter(Boolean)
      .forEach((line) => {
        const summary = document.createElement('p');
        summary.className = 'bosses-mode-summary';
        summary.textContent = line;
        introEl.appendChild(summary);
      });

    if (!introEl.hidden && String(catalog?.id || '').toLowerCase() === 'hoopa') {
      const ticker = createHoopaPortalTickerElement();
      if (ticker) {
        introEl.appendChild(ticker);
      }
    }
  }

  // Se estiver vendo a aba Mewtwo, adicionar um pequeno botao de acao "Tochas" na area de introducao
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
          // Garantir que shell seja um container posicionado para posicionamento absoluto
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

  try {
    const existingActions = document.querySelector('.mainquest-actions');
    if (catalog && String(catalog.id || '').toLowerCase() === 'mainquest') {
      if (!existingActions && introEl) {
        introEl.appendChild(createMainQuestActions());
      }
    } else if (existingActions) {
      existingActions.remove();
    }
  } catch (e) {}

  if (shell) {
    shell.dataset.catalogId = catalog.id || '';
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
    closePlannerMemberEditModal({ restoreFocus: false });
  }
  if (options.syncUrl !== false) {
    syncStandaloneBossModeUrl(activeBossMode);
  }
  renderBossModeIntro();

  if (speedsterSearchInput) {
    speedsterSearchInput.value = '';
  }
  closeSearchPanel();

  if (typeof window !== 'undefined' && typeof window.dispatchEvent === 'function') {
    window.dispatchEvent(new CustomEvent('bossmodechange', { detail: { mode: activeBossMode } }));
  }

  if (options.render === false) return;
  renderGrid();
}

window.setBossMode = setBossMode;
window.getActiveBossRouteState = getActiveBossRouteState;
window.isBossModalOpen = isBossModalOpen;
window.isBossSearchResultModalOpen = isBossSearchResultModalOpen;

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
  const catalog = bossCatalogs[bossEntry?.sourceKey];
  const normalizedRoleKey = String(roleKey || '').trim().toLowerCase();
  const clanData = boss?.clans?.[clanKey];
  if (!boss || !catalog || !normalizedRoleKey || !clanKey || !clanData) return [];

  if (!clanData.roles) {
    if (normalizedRoleKey !== 'dps') return [];
    return dedupeRecommendedPicksByName(
      getRecommendationGroupsForClan(boss, clanData)
        .flatMap((group) => rankRecommendedForBoss(group.boss || boss, group.recommended || [], { roleKey: 'dps' }))
    );
  }

  return getVisibleRolePicksForBoss(catalog, boss, clanKey, normalizedRoleKey);
}

function getPlannerRoleRecommendations(bossEntry, roleKey, clanKey) {
  if (!bossEntry || !roleKey || !clanKey) return [];

  const cacheKey = `${bossEntry.id}|${roleKey}|${clanKey}`;
  if (plannerRecommendationCache.has(cacheKey)) {
    return plannerRecommendationCache.get(cacheKey);
  }

  const rawList = getPlannerRoleSourceList(bossEntry, roleKey, clanKey);
  const ranked = dedupeRecommendedPicksByName(rawList || [])
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

function getPlannerRecommendationByKey(bossEntry, roleKey, pokemonKey) {
  const normalizedKey = getPlannerPokemonKey(pokemonKey);
  if (!bossEntry || !normalizedKey) return null;

  for (const clanKey of plannerClanOrder) {
    const match = getPlannerRoleRecommendations(bossEntry, roleKey, clanKey)
      .find((pick) => pick.plannerKey === normalizedKey);
    if (match) return match;
  }

  return null;
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
      const nextClan = requestedClan || ownerClan || nextEntry.roles[roleKey].clan;

      nextEntry.roles[roleKey].clan = nextClan;

      if (requestedPokemonKey) {
        const match = getPlannerRecommendationByKey(bossEntry, roleKey, requestedPokemonKey);
        if (match) {
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

    // Restaurar membros salvos (selecoes de jogadores), se existirem
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

// Compactar estado do planejador para a URL para reduzir o tamanho do payload.
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

function encodePlannerBase64Url(text) {
  try {
    return btoa(String(text || ''))
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/g, '');
  } catch {
    return '';
  }
}

function decodePlannerBase64Url(value) {
  const base64 = String(value || '').replace(/-/g, '+').replace(/_/g, '/');
  const padded = `${base64}${'='.repeat((4 - (base64.length % 4)) % 4)}`;
  return atob(padded);
}

function getPlannerSourceShareCode(value) {
  const index = plannerContentOrder.indexOf(normalizePlannerSourceFilter(value));
  return index >= 0 ? index + 1 : 0;
}

function getPlannerSourceFromShareCode(value) {
  const index = Number(value) - 1;
  return plannerContentOrder[index] || '';
}

function getPlannerBossShareCode(plannerBossId) {
  const index = getPlannerBossEntries().findIndex((entry) => entry.id === String(plannerBossId || '').trim());
  return index >= 0 ? index + 1 : 0;
}

function getPlannerBossIdFromShareCode(value) {
  const index = Number(value) - 1;
  return getPlannerBossEntries()[index]?.id || '';
}

function getPlannerConsumableShareCode(kind, value) {
  const normalized = normalizePlannerConsumableId(kind, value);
  if (!normalized) return 0;
  const index = getPlannerConsumableOptions(kind).findIndex((option) => option.id === normalized);
  return index >= 0 ? index + 1 : 0;
}

function getPlannerConsumableIdFromShareCode(kind, value) {
  const index = Number(value) - 1;
  return getPlannerConsumableOptions(kind)[index]?.id || '';
}

function getPlannerClanShareCode(value) {
  const index = plannerClanOrder.indexOf(normalizePlannerClanKey(value));
  return index >= 0 ? index + 1 : 0;
}

function getPlannerClanFromShareCode(value) {
  const index = Number(value) - 1;
  return plannerClanOrder[index] || '';
}

function getPlannerPickShareCode(bossEntry, roleKey, clanKey, pokemonKey) {
  const normalizedPokemonKey = getPlannerPokemonKey(pokemonKey);
  if (!bossEntry || !roleKey || !clanKey || !normalizedPokemonKey) return 0;
  const index = getPlannerRoleRecommendations(bossEntry, roleKey, clanKey)
    .findIndex((pick) => pick.plannerKey === normalizedPokemonKey);
  return index >= 0 ? index + 1 : 0;
}

function getPlannerPickKeyFromShareCode(bossEntry, roleKey, clanKey, value) {
  const index = Number(value) - 1;
  if (!bossEntry || !roleKey || !clanKey || index < 0) return '';
  return getPlannerRoleRecommendations(bossEntry, roleKey, clanKey)[index]?.plannerKey || '';
}

const plannerCompactShareAlphabet = '0123456789abcdefghijklmnopqrstuvwxyz';

function encodePlannerCompactNumber(value, width = 1) {
  const number = Number(value);
  const limit = Math.pow(plannerCompactShareAlphabet.length, width);
  if (!Number.isInteger(number) || number < 0 || number >= limit) return '';
  return number.toString(plannerCompactShareAlphabet.length).padStart(width, '0');
}

function decodePlannerCompactNumber(value) {
  const text = String(value || '').toLowerCase();
  if (!text || !/^[0-9a-z]+$/.test(text)) return NaN;
  return parseInt(text, plannerCompactShareAlphabet.length);
}

function packPlannerRoleSelectionForUrl(bossEntry, roleKey, roleState = {}) {
  const clan = normalizePlannerClanKey(roleState?.clan) || getPlannerDefaultClanForRole(bossEntry, roleKey);
  return [
    getPlannerClanShareCode(clan),
    getPlannerPickShareCode(bossEntry, roleKey, clan, roleState?.pokemonKey)
  ];
}

function packPlannerMemberForUrl(bossEntry, member = {}) {
  const roles = roleboardRoleOrder.map((roleKey) => {
    const pokemonKey = getPlannerPokemonKey(member?.roles?.[roleKey] || '');
    const clan = pokemonKey ? findPlannerRecommendationOwner(bossEntry, roleKey, pokemonKey) : '';
    return [
      getPlannerClanShareCode(clan),
      getPlannerPickShareCode(bossEntry, roleKey, clan, pokemonKey)
    ];
  });
  return [
    roles,
    getPlannerConsumableShareCode('pokeblock', member?.pokeblock || ''),
    getPlannerConsumableShareCode('ration', member?.ration || '')
  ];
}

function packPlannerStateForUrl(state) {
  const payload = sanitizePlannerState(state);
  return {
    v: 1,
    s: getPlannerSourceShareCode(payload.sourceFilter),
    e: (Array.isArray(payload.entries) ? payload.entries : []).map((entry) => {
      const bossEntry = getPlannerBossById(entry?.bossId);
      return [
        getPlannerBossShareCode(entry?.bossId),
        roleboardRoleOrder.map((roleKey) => packPlannerRoleSelectionForUrl(bossEntry, roleKey, entry?.roles?.[roleKey])),
        getPlannerConsumableShareCode('pokeblock', entry?.pokeblock || ''),
        getPlannerConsumableShareCode('ration', entry?.ration || ''),
        (Array.isArray(entry?.members) ? entry.members : []).map((member) => packPlannerMemberForUrl(bossEntry, member))
      ];
    })
  };
}

function unpackPlannerRoleSelectionFromUrl(bossEntry, roleKey, rawRole = []) {
  const clan = getPlannerClanFromShareCode(rawRole?.[0]) || getPlannerDefaultClanForRole(bossEntry, roleKey);
  return {
    clan,
    pokemonKey: getPlannerPickKeyFromShareCode(bossEntry, roleKey, clan, rawRole?.[1])
  };
}

function unpackPlannerMemberFromUrl(bossEntry, rawMember = [], memberIndex = 0) {
  const rawRoles = Array.isArray(rawMember?.[0]) ? rawMember[0] : [];
  const member = {
    id: `m${Date.now().toString(36)}${memberIndex.toString(36)}`,
    roles: {},
    pokeblock: getPlannerConsumableIdFromShareCode('pokeblock', rawMember?.[1]),
    ration: getPlannerConsumableIdFromShareCode('ration', rawMember?.[2])
  };

  roleboardRoleOrder.forEach((roleKey, roleIndex) => {
    const rawRole = rawRoles[roleIndex] || [];
    const clan = getPlannerClanFromShareCode(rawRole?.[0]);
    member.roles[roleKey] = getPlannerPickKeyFromShareCode(bossEntry, roleKey, clan, rawRole?.[1]);
  });

  return member;
}

function unpackPlannerStateFromUrl(packed) {
  const next = createEmptyPlannerState();
  next.sourceFilter = getPlannerSourceFromShareCode(packed?.s);
  (Array.isArray(packed?.e) ? packed.e : []).forEach((rawEntry) => {
    const bossId = getPlannerBossIdFromShareCode(rawEntry?.[0]);
    const bossEntry = getPlannerBossById(bossId);
    if (!bossEntry) return;

    const rawRoles = Array.isArray(rawEntry?.[1]) ? rawEntry[1] : [];
    const entry = createPlannerBossState(bossId);
    roleboardRoleOrder.forEach((roleKey, roleIndex) => {
      entry.roles[roleKey] = unpackPlannerRoleSelectionFromUrl(bossEntry, roleKey, rawRoles[roleIndex] || []);
    });
    entry.pokeblock = getPlannerConsumableIdFromShareCode('pokeblock', rawEntry?.[2]);
    entry.ration = getPlannerConsumableIdFromShareCode('ration', rawEntry?.[3]);
    entry.members = (Array.isArray(rawEntry?.[4]) ? rawEntry[4] : [])
      .map((rawMember, memberIndex) => unpackPlannerMemberFromUrl(bossEntry, rawMember, memberIndex));
    next.entries.push(entry);
  });
  return sanitizePlannerState(next);
}

function encodePackedPlannerStateToParam(state) {
  const packed = packPlannerStateForUrl(state);
  const encoded = encodePlannerBase64Url(JSON.stringify(packed));
  return encoded ? `pl${encoded}` : '';
}

function decodePackedPlannerStateFromParam(value) {
  const normalized = String(value || '').trim();
  if (!normalized.startsWith('pl')) return null;
  const packed = JSON.parse(decodePlannerBase64Url(normalized.slice(2)));
  return unpackPlannerStateFromUrl(packed);
}

function encodeCompactPlannerRoleForUrl(bossEntry, roleKey, roleState = {}) {
  const clan = normalizePlannerClanKey(roleState?.clan) || getPlannerDefaultClanForRole(bossEntry, roleKey);
  const clanCode = getPlannerClanShareCode(clan);
  const pickCode = getPlannerPickShareCode(bossEntry, roleKey, clan, roleState?.pokemonKey);
  const encodedClan = encodePlannerCompactNumber(clanCode, 1);
  const encodedPick = encodePlannerCompactNumber(pickCode, 2);
  return encodedClan && encodedPick ? `${encodedClan}${encodedPick}` : '';
}

function encodeCompactPlannerMemberForUrl(bossEntry, member = {}) {
  const roleTokens = roleboardRoleOrder.map((roleKey) => {
    const pokemonKey = getPlannerPokemonKey(member?.roles?.[roleKey] || '');
    const clan = pokemonKey ? findPlannerRecommendationOwner(bossEntry, roleKey, pokemonKey) : '';
    return encodeCompactPlannerRoleForUrl(bossEntry, roleKey, {
      clan,
      pokemonKey
    });
  });
  if (roleTokens.some((token) => !token)) return '';

  const pokeblock = encodePlannerCompactNumber(getPlannerConsumableShareCode('pokeblock', member?.pokeblock || ''), 1);
  const ration = encodePlannerCompactNumber(getPlannerConsumableShareCode('ration', member?.ration || ''), 1);
  return pokeblock && ration ? `${roleTokens.join('')}${pokeblock}${ration}` : '';
}

function encodeCompactPlannerStateToParam(state) {
  const payload = sanitizePlannerState(state);
  const entries = Array.isArray(payload.entries) ? payload.entries : [];
  const source = encodePlannerCompactNumber(getPlannerSourceShareCode(payload.sourceFilter), 1);
  const entryCount = encodePlannerCompactNumber(entries.length, 1);
  if (!source || !entryCount) return '';

  const entryTokens = entries.map((entry) => {
    const bossEntry = getPlannerBossById(entry?.bossId);
    const boss = encodePlannerCompactNumber(getPlannerBossShareCode(entry?.bossId), 2);
    const roleTokens = roleboardRoleOrder.map((roleKey) => encodeCompactPlannerRoleForUrl(bossEntry, roleKey, entry?.roles?.[roleKey]));
    const pokeblock = encodePlannerCompactNumber(getPlannerConsumableShareCode('pokeblock', entry?.pokeblock || ''), 1);
    const ration = encodePlannerCompactNumber(getPlannerConsumableShareCode('ration', entry?.ration || ''), 1);
    const members = Array.isArray(entry?.members) ? entry.members : [];
    const memberCount = encodePlannerCompactNumber(members.length, 1);
    const memberTokens = members.map((member) => encodeCompactPlannerMemberForUrl(bossEntry, member));

    if (!boss || roleTokens.some((token) => !token) || !pokeblock || !ration || !memberCount || memberTokens.some((token) => !token)) {
      return '';
    }

    return `${boss}${roleTokens.join('')}${pokeblock}${ration}${memberCount}${memberTokens.join('')}`;
  });

  if (entryTokens.some((token) => !token)) return '';
  return `pc${source}${entryCount}${entryTokens.join('')}`;
}

function readPlannerCompactToken(source, offset, width) {
  const token = String(source || '').slice(offset, offset + width);
  if (token.length !== width) return null;
  const value = decodePlannerCompactNumber(token);
  return Number.isFinite(value) ? { value, nextOffset: offset + width } : null;
}

function decodeCompactPlannerRoleFromUrl(source, offset, bossEntry, roleKey) {
  const clanToken = readPlannerCompactToken(source, offset, 1);
  if (!clanToken) return null;
  const pickToken = readPlannerCompactToken(source, clanToken.nextOffset, 2);
  if (!pickToken) return null;

  const clan = getPlannerClanFromShareCode(clanToken.value) || getPlannerDefaultClanForRole(bossEntry, roleKey);
  return {
    nextOffset: pickToken.nextOffset,
    role: {
      clan,
      pokemonKey: getPlannerPickKeyFromShareCode(bossEntry, roleKey, clan, pickToken.value)
    }
  };
}

function decodeCompactPlannerMemberFromUrl(source, offset, bossEntry, memberIndex = 0) {
  const member = {
    id: `m${Date.now().toString(36)}${memberIndex.toString(36)}`,
    roles: {},
    pokeblock: '',
    ration: ''
  };

  let cursor = offset;
  for (const roleKey of roleboardRoleOrder) {
    const decodedRole = decodeCompactPlannerRoleFromUrl(source, cursor, bossEntry, roleKey);
    if (!decodedRole) return null;
    cursor = decodedRole.nextOffset;
    member.roles[roleKey] = decodedRole.role.pokemonKey;
  }

  const pokeblock = readPlannerCompactToken(source, cursor, 1);
  if (!pokeblock) return null;
  cursor = pokeblock.nextOffset;
  const ration = readPlannerCompactToken(source, cursor, 1);
  if (!ration) return null;
  cursor = ration.nextOffset;

  member.pokeblock = getPlannerConsumableIdFromShareCode('pokeblock', pokeblock.value);
  member.ration = getPlannerConsumableIdFromShareCode('ration', ration.value);
  return { member, nextOffset: cursor };
}

function decodeCompactPlannerStateFromParam(value) {
  const normalized = String(value || '').trim().toLowerCase();
  if (!normalized.startsWith('pc')) return null;

  let cursor = 2;
  const source = readPlannerCompactToken(normalized, cursor, 1);
  if (!source) return null;
  cursor = source.nextOffset;
  const entryCount = readPlannerCompactToken(normalized, cursor, 1);
  if (!entryCount) return null;
  cursor = entryCount.nextOffset;

  const next = createEmptyPlannerState();
  next.sourceFilter = getPlannerSourceFromShareCode(source.value);

  for (let entryIndex = 0; entryIndex < entryCount.value; entryIndex += 1) {
    const bossCode = readPlannerCompactToken(normalized, cursor, 2);
    if (!bossCode) return null;
    cursor = bossCode.nextOffset;

    const bossId = getPlannerBossIdFromShareCode(bossCode.value);
    const bossEntry = getPlannerBossById(bossId);
    if (!bossEntry) return null;

    const entry = createPlannerBossState(bossId);
    for (const roleKey of roleboardRoleOrder) {
      const decodedRole = decodeCompactPlannerRoleFromUrl(normalized, cursor, bossEntry, roleKey);
      if (!decodedRole) return null;
      cursor = decodedRole.nextOffset;
      entry.roles[roleKey] = decodedRole.role;
    }

    const pokeblock = readPlannerCompactToken(normalized, cursor, 1);
    if (!pokeblock) return null;
    cursor = pokeblock.nextOffset;
    const ration = readPlannerCompactToken(normalized, cursor, 1);
    if (!ration) return null;
    cursor = ration.nextOffset;
    const memberCount = readPlannerCompactToken(normalized, cursor, 1);
    if (!memberCount) return null;
    cursor = memberCount.nextOffset;

    entry.pokeblock = getPlannerConsumableIdFromShareCode('pokeblock', pokeblock.value);
    entry.ration = getPlannerConsumableIdFromShareCode('ration', ration.value);
    entry.members = [];

    for (let memberIndex = 0; memberIndex < memberCount.value; memberIndex += 1) {
      const decodedMember = decodeCompactPlannerMemberFromUrl(normalized, cursor, bossEntry, memberIndex);
      if (!decodedMember) return null;
      cursor = decodedMember.nextOffset;
      entry.members.push(decodedMember.member);
    }

    next.entries.push(entry);
  }

  return cursor === normalized.length ? sanitizePlannerState(next) : null;
}

function encodePlannerStateToParam(state) {
  const payload = sanitizePlannerState(state);
  const compact = compactPlannerStateForUrl(payload);
  const json = JSON.stringify(compact);
  const compactFixed = encodeCompactPlannerStateToParam(payload);
  const packed = encodePackedPlannerStateToParam(payload);

  // Tentar LZ-String primeiro (encoder existente rapido e seguro para URL)
  let lz = '';
  try {
    if (typeof LZString === 'object' && typeof LZString.compressToEncodedURIComponent === 'function') {
      lz = LZString.compressToEncodedURIComponent(json) || '';
    }
  } catch (e) {
    lz = '';
  }

  // Tentar compressao pako (gzip) e codificar o resultado em base64-url
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

  // Legado: base64 do JSON bruto (mantido por compatibilidade)
  let legacy = '';
  try {
    const bytes = new TextEncoder().encode(json);
    let binary = '';
    bytes.forEach((value) => { binary += String.fromCharCode(value); });
    legacy = btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '');
  } catch (e) {
    legacy = '';
  }

  // Escolher a menor codificacao nao vazia (pako, lzstring ou legado)
  const candidates = [];
  if (compactFixed) candidates.push(compactFixed);
  if (packed) candidates.push(packed);
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
    const compact = decodeCompactPlannerStateFromParam(normalized);
    if (compact) return compact;
  } catch (e) {
    // Continuar para formatos de URL anteriores
  }

  try {
    const packed = decodePackedPlannerStateFromParam(normalized);
    if (packed) return packed;
  } catch (e) {
    // Continuar para formatos de URL anteriores
  }

  try {
    if (typeof LZString === 'object' && typeof LZString.decompressFromEncodedURIComponent === 'function') {
      const json = LZString.decompressFromEncodedURIComponent(normalized);
      if (json) {
        const parsed = JSON.parse(json);
        // Se detectar formato compacto, expandir
        if (parsed && typeof parsed === 'object' && Object.prototype.hasOwnProperty.call(parsed, 's') && Object.prototype.hasOwnProperty.call(parsed, 'e')) {
          return expandPlannerStateFromUrl(parsed);
        }
        return parsed;
      }
      // Se a descompressao retornou null/vazio, continuar para decode legado
    }
  } catch (e) {
    // Continuar para decode legado
  }

  const binary = decodePlannerBase64Url(normalized);
  const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));

  // Tentar JSON legado primeiro
  try {
    const parsed = JSON.parse(new TextDecoder().decode(bytes));
    if (parsed && typeof parsed === 'object' && Object.prototype.hasOwnProperty.call(parsed, 's') && Object.prototype.hasOwnProperty.call(parsed, 'e')) {
      return expandPlannerStateFromUrl(parsed);
    }
    return parsed;
  } catch (e) {
    // Nao e JSON bruto; tentar pako inflate (gzip)
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
    // Continuar
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
  return recommendations.find((pick) => pick.plannerKey === selectedKey)
    || getPlannerRecommendationByKey(bossEntry, roleKey, selectedKey);
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

function countReadyPlannerMembers() {
  return plannerState.entries.reduce((total, entry) => (
    total + (Array.isArray(entry?.members) ? entry.members.length : 0)
  ), 0);
}

function getPlannerVisibleStage() {
  if (plannerSubpage === 'ready') return 'ready';
  if (plannerShowBrowser) {
    return plannerState.sourceFilter ? 'boss' : 'source';
  }
  return 'compose';
}

function getPlannerStageState(stageId) {
  const currentStage = getPlannerVisibleStage();
  if (currentStage === stageId) return 'active';

  const hasSource = Boolean(plannerState.sourceFilter) || plannerState.entries.length > 0;
  const hasBoss = plannerState.entries.length > 0;
  const hasCompose = countFilledPlannerSelections() > 0 || countSelectedPlannerItems() > 0 || countReadyPlannerMembers() > 0;
  const hasReady = countReadyPlannerMembers() > 0;

  const completedMap = {
    source: hasSource,
    boss: hasBoss,
    compose: hasCompose,
    ready: hasReady
  };

  return completedMap[stageId] ? 'completed' : 'upcoming';
}

function getPlannerHeroTitle() {
  const currentStage = getPlannerVisibleStage();
  if (currentStage === 'ready') {
    return 'Revise os cards finalizados e compartilhe o link.';
  }
  if (currentStage === 'compose') {
    return 'Monte o card do boss ativo com foco no trio ideal.';
  }
  if (currentStage === 'boss') {
    return 'Escolha o boss e abra a composicao em um clique.';
  }
  return 'Escolha a trilha e comece o planejamento.';
}

function getPlannerHeroText() {
  const readyCount = countReadyPlannerMembers();
  const currentStage = getPlannerVisibleStage();

  if (currentStage === 'ready') {
    return readyCount
      ? `${readyCount} card${readyCount === 1 ? '' : 's'} pronto${readyCount === 1 ? '' : 's'} para revisar, remover ou compartilhar.`
      : 'Nenhum card pronto ainda. Finalize um boss na aba Montar para gerar a saida final.';
  }

  if (currentStage === 'compose') {
    return 'Preencha Tank, DPS, Suporte e itens do boss atual. Finalize quando o card estiver consistente.';
  }

  if (currentStage === 'boss') {
    return `Conteudo ativo: ${getPlannerContentLabel(plannerState.sourceFilter)}. Escolha o boss que vai abrir a composicao.`;
  }

  return 'Comece pelo conteudo para liberar a lista de bosses disponiveis.';
}

function createPlannerContextPill(label, value) {
  const pill = document.createElement('div');
  pill.className = 'planner-hero__context-pill';

  const labelEl = document.createElement('span');
  labelEl.className = 'planner-hero__context-label';
  labelEl.textContent = label;

  const valueEl = document.createElement('strong');
  valueEl.className = 'planner-hero__context-value';
  valueEl.textContent = value;

  pill.append(labelEl, valueEl);
  return pill;
}

function createPlannerStageRail() {
  const rail = document.createElement('div');
  rail.className = 'planner-stage-rail';

  plannerStageDefinitions.forEach((stage) => {
    const chip = document.createElement('div');
    chip.className = 'planner-stage-chip';
    chip.dataset.state = getPlannerStageState(stage.id);

    const index = document.createElement('span');
    index.className = 'planner-stage-chip__index';
    index.textContent = stage.index;

    const copy = document.createElement('div');
    copy.className = 'planner-stage-chip__copy';

    const label = document.createElement('strong');
    label.className = 'planner-stage-chip__label';
    label.textContent = stage.label;

    const text = document.createElement('span');
    text.className = 'planner-stage-chip__text';
    text.textContent = stage.text;

    copy.append(label, text);
    chip.append(index, copy);
    rail.appendChild(chip);
  });

  return rail;
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
  getBossTypeIcons(getUniquePlannerTypes(types)).forEach((icon) => valueWrap.appendChild(icon));

  const valueText = document.createElement('span');
  valueText.textContent = value;
  valueWrap.appendChild(valueText);

  chip.appendChild(valueWrap);
  return chip;
}

function createPlannerTypeIconChip(types = []) {
  const normalizedTypes = getUniquePlannerTypes(types);
  if (!normalizedTypes.length) return null;

  const chip = document.createElement('div');
  chip.className = 'planner-meta-chip planner-meta-chip--icons-only';

  const valueWrap = document.createElement('span');
  valueWrap.className = 'planner-meta-chip__value';
  getBossTypeIcons(normalizedTypes).forEach((icon) => valueWrap.appendChild(icon));

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
    image.src = resolveBossAssetSrc(normalizedEntry.image);
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
  image.src = resolveBossAssetSrc(bossEntry.image);
  image.alt = bossEntry.name;
  image.loading = 'lazy';

  const content = document.createElement('div');
  content.className = 'planner-boss-picker__content';

  const header = document.createElement('div');
  header.className = 'planner-boss-picker__header';

  const heading = document.createElement('div');
  heading.className = 'planner-boss-picker__heading';

  const title = document.createElement('strong');
  title.className = 'planner-boss-picker__title';
  title.textContent = bossEntry.name;

  const source = document.createElement('span');
  source.className = 'planner-boss-picker__source';
  source.textContent = bossEntry.sourceLabel;

  const state = document.createElement('span');
  state.className = 'planner-boss-picker__state';
  state.dataset.state = isAdded ? 'added' : 'available';
  state.textContent = isAdded ? 'Finalizado' : 'Disponivel';

  heading.append(title, source);
  header.append(heading, state);

  const chips = document.createElement('div');
  chips.className = 'planner-boss-picker__chips';
  chips.appendChild(createPlannerMetaChip('Tipos', formatPlannerTypeList(boss.types || []), boss.types || []));

  const moveTypes = getPlannerDistinctMoveTypes(boss.types || [], getBossMoveTypes(boss));
  if (moveTypes.length) {
    chips.appendChild(createPlannerMetaChip('Moveset', formatPlannerTypeList(moveTypes), moveTypes));
  }

  const footer = document.createElement('div');
  footer.className = 'planner-boss-picker__footer';

  const action = document.createElement('span');
  action.className = 'planner-boss-picker__action';
  action.textContent = isAdded ? 'Card salvo neste boss' : 'Abrir composicao';

  footer.appendChild(action);
  content.append(header, chips, footer);
  button.append(image, content);

  if (!isAdded) {
    button.addEventListener('click', () => {
      // Focar composicao (etapa 2) quando um boss e escolhido no navegador
      plannerShowBrowser = false;
      plannerSubpage = 'compose';
      commitPlannerState((draft) => {
        // Limpar selecoes nas entradas existentes para apenas o boss recem-adicionado ficar "ativo"
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
  button.dataset.tier = normalizeTierKey(pick.tier);
  if (plannerEntry.roles?.[roleKey]?.pokemonKey === pick.plannerKey) {
    button.classList.add('is-selected');
  }

  const image = document.createElement('img');
  image.className = 'planner-recommendation-card__image';
  image.src = resolveBossAssetSrc(pick.image || '');
  image.alt = pick.name;
  image.loading = 'lazy';

  const content = document.createElement('div');
  content.className = 'planner-recommendation-card__content';

  const titleRow = document.createElement('div');
  titleRow.className = 'planner-recommendation-card__title-row';

  const name = document.createElement('strong');
  name.className = 'planner-recommendation-card__name';
  name.textContent = pick.name;

  const tierText = document.createElement('span');
  tierText.className = 'planner-recommendation-card__tier';
  tierText.textContent = getTierUiLabel(pick.tier);

  titleRow.append(name, tierText);

  const chips = document.createElement('div');
  chips.className = 'planner-recommendation-card__chips';

  if (Array.isArray(pick.types) && pick.types.length) {
    const typeChip = createPlannerTypeIconChip(pick.types);
    if (typeChip) chips.appendChild(typeChip);
  }

  const moveTypes = getPlannerDistinctMoveTypes(pick.types || [], parseMoveTypes(pick));
  if (moveTypes.length) {
    const moveChip = createPlannerTypeIconChip(moveTypes);
    if (moveChip) chips.appendChild(moveChip);
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
  const selectedKey = getPlannerPokemonKey(slot?.pokemonKey);
  const selectedOwnerClan = selectedKey
    ? findPlannerRecommendationOwner(bossEntry, roleKey, selectedKey)
    : '';
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

  const currentRecommendations = getPlannerRoleRecommendations(bossEntry, roleKey, slot.clan);
  const selectedPick = getPlannerSelectedPick(plannerEntry, roleKey, bossEntry);
  card.dataset.state = selectedPick ? 'filled' : 'empty';

  const current = document.createElement('strong');
  current.className = 'planner-role-slot__current';
  current.textContent = selectedPick ? selectedPick.name : 'Nenhum pokemon selecionado';

  const meta = document.createElement('span');
  meta.className = 'planner-role-slot__meta';
  meta.textContent = selectedPick
    ? `${bossEntry.bossRef.clans?.[selectedOwnerClan || slot.clan]?.label || selectedOwnerClan || slot.clan} - ${getTierUiLabel(selectedPick.tier)}`
    : `${bossEntry.bossRef.clans?.[slot.clan]?.label || slot.clan} - ${currentRecommendations.length} opc${currentRecommendations.length === 1 ? 'ao' : 'oes'} disponiveis`;

  copy.append(eyebrow, current, meta);
  const noteText = plannerRoleQuickNotes[roleKey] || '';
  if (noteText) {
    const note = document.createElement('p');
    note.className = 'planner-role-slot__note';
    note.textContent = noteText;
    copy.appendChild(note);
  }

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
    icon.src = resolveBossAssetSrc(clanIcons[clanKey] || '');
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
        targetEntry.roles[roleKey].clan = clanKey;
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
    // Mostrar um rotulo claro e contextual para o consumivel sugerido
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
  // Marcar bosses vindos de Hoopa para estilizar o card de composicao de forma diferente
  if (bossEntry && bossEntry.sourceKey === 'hoopa') {
    card.classList.add('planner-composition-card--hoopa');
  }

  // Decidir quais papeis serao renderizados para este boss (bosses Hoopa renderizam apenas DPS)
  const rolesToRender = getPlannerRolesForBossEntry(bossEntry);

  // Se apenas DPS for exibido (porque o boss e somente DPS ou porque
  // apenas o slot DPS tem uma pick selecionada), adicionar classe modificadora
  // para centralizar titulo/clans e opcionalmente ocultar alguns rotulos.
  const onlyDpsSelected = (rolesToRender.length === 1 && rolesToRender[0] === 'dps')
    || (rolesToRender.includes('dps') && rolesToRender.every((rk) => rk === 'dps' || !getPlannerSelectedPick(plannerEntry, rk, bossEntry)));
  if (onlyDpsSelected) card.classList.add('planner-composition-card--only-dps');

  const header = document.createElement('div');
  header.className = 'planner-composition-card__header';

  const bossWrap = document.createElement('div');
  bossWrap.className = 'planner-composition-card__boss';

  const image = document.createElement('img');
  image.className = 'planner-composition-card__image';
  image.src = resolveBossAssetSrc(bossEntry.image);
  image.alt = bossEntry.name;
  image.loading = 'lazy';

  const copy = document.createElement('div');
  copy.className = 'planner-composition-card__copy';

  const titleRow = document.createElement('div');
  titleRow.className = 'planner-composition-card__title-row';

  const title = document.createElement('h3');
  title.className = 'planner-composition-card__title';
  title.textContent = bossEntry.name;
  titleRow.append(title);

  const infoRow = document.createElement('div');
  infoRow.className = 'planner-composition-card__info';
  infoRow.appendChild(createPlannerMetaChip('Tipos', formatPlannerTypeList(boss.types || []), boss.types || []));

  const moveTypes = getPlannerDistinctMoveTypes(boss.types || [], getBossMoveTypes(boss));
  if (moveTypes.length) {
    const moveChip = createPlannerMetaChip('Moveset', formatPlannerTypeList(moveTypes), moveTypes);
    if (onlyDpsSelected) moveChip.classList.add('planner-meta-chip--no-label');
    infoRow.appendChild(moveChip);
  }

  const lead = document.createElement('p');
  lead.className = 'planner-composition-card__lead';
  lead.textContent = bossEntry.sourceKey === 'hoopa'
    ? 'Este boss usa somente DPS nesta etapa. Finalize o card quando a recomendacao estiver definida.'
    : 'Escolha Tank, DPS, Suporte e itens. Finalize quando o card estiver pronto para ir ao link.';

  copy.append(titleRow, infoRow, lead);
  bossWrap.append(image, copy);

  const removeButton = document.createElement('button');
  removeButton.type = 'button';
  removeButton.className = 'planner-composition-card__remove';
  removeButton.textContent = 'Remover';
  removeButton.addEventListener('click', () => {
    // Garantir que a UI volte para etapa 1 (navegador) ao remover um boss
    plannerShowBrowser = true;
    commitPlannerState((draft) => {
      draft.entries = draft.entries.filter((entry) => entry.bossId !== plannerEntry.bossId);
      // Limpar filtro de origem para o painel do navegador voltar para etapa 1
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

  // Adicionar acoes de jogador (membro): permitir salvar selecoes atuais de papel/item como membro
  const memberActions = document.createElement('div');
  memberActions.className = 'planner-member-actions';

  const addMemberBtn = document.createElement('button');
  addMemberBtn.type = 'button';
  addMemberBtn.className = 'planner-hero__button planner-hero__button--ghost';
  addMemberBtn.textContent = 'Finalizar card';

  // Exigir pelo menos uma pick de Pokemon para considerar um membro "pronto".
  // Pokeblock / ration sozinhos nao bastam para finalizar um membro.
  const isMemberReady = () => (
    rolesToRender.some((roleKey) => Boolean(getPlannerSelectedPick(plannerEntry, roleKey, bossEntry)))
  );

  addMemberBtn.disabled = !isMemberReady();
  addMemberBtn.addEventListener('click', () => {
    // Garantir que a UI volte para etapa 1 (navegador) ao finalizar
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

      // Redefinir selecoes apenas do boss atual (limpar etapas 2/3/4), mas manter o boss e membros salvos
      if (targetEntry) {
        if (targetEntry.roles) {
          roleboardRoleOrder.forEach((roleKey) => {
            if (targetEntry.roles[roleKey]) targetEntry.roles[roleKey].pokemonKey = '';
          });
        }
        targetEntry.pokeblock = '';
        targetEntry.ration = '';
      }
      // Manter o filtro de origem limpo para o painel do navegador voltar para etapa 1
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
        normalizeTierKey(selectedPick.tier)
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

  // Se o resumo estiver vazio, renderizar nada intencionalmente (sem texto placeholder)

  card.appendChild(summary);

  // Renderizar membros salvos (jogadores)
  const memberList = document.createElement('div');
  memberList.className = 'planner-member-list';

  if (Array.isArray(plannerEntry.members) && plannerEntry.members.length) {
    const memberListLabel = document.createElement('div');
    memberListLabel.className = 'planner-composition-card__saved-label';
    memberListLabel.textContent = `Cards salvos neste boss: ${plannerEntry.members.length}`;
    card.appendChild(memberListLabel);
  }

  (plannerEntry.members || []).forEach((member, memberIndex) => {
    memberList.appendChild(createPlannerMemberCard(member, bossEntry, plannerEntry, memberIndex));
  });

  if (memberList.childElementCount) {
    card.appendChild(memberList);
  }
  return card;
}

function createPlannerMemberCard(member, bossEntry, plannerEntry, memberIndex = 0, options = {}) {
  const showEditAction = Boolean(options?.showEditAction);
  const wrap = document.createElement('article');
  wrap.className = 'planner-ready-member-card';

  // Substituir o icone de tutorial por badges de consumiveis (pokeblock / ration)
  const consumablesWrap = document.createElement('div');
  consumablesWrap.className = 'planner-ready-member-card__consumables';
  // Mostrar ration primeiro, depois pokeblock (ordem invertida em relacao a composicao)
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
        img.src = resolveBossAssetSrc(option.image);
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
        img.src = resolveBossAssetSrc(option.image);
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

  const body = document.createElement('div');
  body.className = 'planner-ready-member-card__body';

  // Avatar do boss (restaurar elemento de imagem); mostrar arte do boss acima das picks
  const avatarWrap = document.createElement('div');
  avatarWrap.className = 'planner-ready-member-card__avatar';
  const avatarImg = document.createElement('img');
  avatarImg.src = resolveBossAssetSrc(bossEntry.image);
  avatarImg.alt = bossEntry.name;
  avatarImg.loading = 'lazy';
  avatarWrap.appendChild(avatarImg);
  body.appendChild(avatarWrap);

  if (consumablesWrap.childElementCount) {
    body.appendChild(consumablesWrap);
  }

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
    pickImg.src = resolveBossAssetSrc(pick.image || '');
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
    // Adicionar badge de tier (rotulo amigavel) ao lado do nome da pick
    const tierSpan = document.createElement('span');
    tierSpan.className = 'planner-ready-member-card__pick-tier ' + `tier-${normalizeTierKey(pick.tier)}`;
    tierSpan.textContent = getTierUiLabel(pick.tier);

    pickLabel.append(roleSpan, nameStrong, tierSpan);
    pickWrap.append(pickImg, pickLabel);
    picks.appendChild(pickWrap);
  });

  body.appendChild(picks);

  // Omitido intencionalmente: chip de tipo de move do boss (ex: "Ground"); removido por pedido

  // Consumiveis sao exibidos no header (badges com tooltips).
  // As copias inferiores (botao pokeblock destacado / badge de ration) foram removidas para evitar duplicacao.

  wrap.appendChild(body);

  const actions = document.createElement('div');
  actions.className = 'planner-ready-member-card__actions';

  if (showEditAction) {
    const editBtn = document.createElement('button');
    editBtn.type = 'button';
    editBtn.className = 'planner-member-card__edit';
    editBtn.textContent = 'Editar';
    editBtn.addEventListener('click', (ev) => {
      ev.stopPropagation();
      openPlannerMemberEditModal(plannerEntry.bossId, member.id, editBtn);
    });
    actions.appendChild(editBtn);
  }

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

function getPlannerRolesForBossEntry(bossEntry) {
  return bossEntry && bossEntry.sourceKey === 'hoopa'
    ? ['dps']
    : roleboardRoleOrder.slice();
}

function clonePlannerMemberEditDraft(draft) {
  try {
    return JSON.parse(JSON.stringify(draft || {
      roles: {},
      roleClans: {},
      pokeblock: '',
      ration: ''
    }));
  } catch {
    return {
      roles: {},
      roleClans: {},
      pokeblock: '',
      ration: ''
    };
  }
}

function createPlannerMemberEditDraft(bossEntry, member) {
  const draft = {
    roles: {},
    roleClans: {},
    pokeblock: normalizePlannerConsumableId('pokeblock', member?.pokeblock || ''),
    ration: normalizePlannerConsumableId('ration', member?.ration || '')
  };

  roleboardRoleOrder.forEach((roleKey) => {
    const pokemonKey = getPlannerPokemonKey(member?.roles?.[roleKey]) || '';
    const ownerClan = bossEntry ? findPlannerRecommendationOwner(bossEntry, roleKey, pokemonKey) : '';
    draft.roles[roleKey] = pokemonKey;
    draft.roleClans[roleKey] = ownerClan || (bossEntry ? getPlannerDefaultClanForRole(bossEntry, roleKey) : 'instinct');
  });

  return draft;
}

function getPlannerMemberEditTarget() {
  const state = plannerMemberEditModalState;
  if (!state?.bossId || !state?.memberId) return null;

  const bossEntry = getPlannerBossById(state.bossId);
  const plannerEntry = plannerState.entries.find((entry) => entry.bossId === state.bossId);
  const member = plannerEntry?.members?.find((item) => String(item.id) === String(state.memberId));

  if (!bossEntry || !plannerEntry || !member) return null;
  return { bossEntry, plannerEntry, member };
}

function getPlannerMemberEditRoleState(draft, bossEntry, roleKey) {
  const activeClan = normalizePlannerClanKey(draft?.roleClans?.[roleKey]) || getPlannerDefaultClanForRole(bossEntry, roleKey);
  const selectedKey = getPlannerPokemonKey(draft?.roles?.[roleKey]) || '';
  const selectedClan = selectedKey
    ? findPlannerRecommendationOwner(bossEntry, roleKey, selectedKey)
    : '';

  const recommendations = getPlannerRoleRecommendations(bossEntry, roleKey, activeClan);
  const selectedPick = selectedKey
    ? getPlannerRecommendationByKey(bossEntry, roleKey, selectedKey)
    : null;

  return {
    activeClan,
    selectedClan,
    selectedKey,
    selectedPick,
    recommendations
  };
}

function isPlannerMemberEditDraftReady(draft, bossEntry) {
  return getPlannerRolesForBossEntry(bossEntry).some((roleKey) => Boolean(getPlannerPokemonKey(draft?.roles?.[roleKey])));
}

function handlePlannerMemberEditModalKeydown(event) {
  if (event.key !== 'Escape') return;
  if (plannerMemberEditModalState?.modal?.getAttribute('aria-hidden') !== 'false') return;
  closePlannerMemberEditModal();
}

function ensurePlannerMemberEditModal() {
  if (plannerMemberEditModalState?.modal?.isConnected) {
    return plannerMemberEditModalState;
  }

  const modal = document.createElement('div');
  modal.className = 'modal planner-edit-modal';
  modal.setAttribute('aria-hidden', 'true');
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  modal.setAttribute('aria-labelledby', 'planner-edit-modal-title');

  const content = document.createElement('div');
  content.className = 'modal-content planner-edit-modal__content';

  const closeButton = document.createElement('button');
  closeButton.type = 'button';
  closeButton.className = 'modal-close planner-edit-modal__close';
  closeButton.setAttribute('data-close', 'true');
  closeButton.setAttribute('aria-label', 'Fechar editor do card pronto');
  closeButton.innerHTML = '&times;';

  const header = document.createElement('div');
  header.className = 'planner-edit-modal__header';

  const eyebrow = document.createElement('span');
  eyebrow.className = 'planner-edit-modal__eyebrow';
  eyebrow.textContent = 'Cards prontos';

  const title = document.createElement('h3');
  title.id = 'planner-edit-modal-title';
  title.className = 'planner-edit-modal__title';
  title.textContent = 'Editar card pronto';

  header.append(eyebrow, title);

  const body = document.createElement('div');
  body.className = 'planner-edit-modal__body';

  const footer = document.createElement('div');
  footer.className = 'planner-edit-modal__footer';

  const footerActions = document.createElement('div');
  footerActions.className = 'planner-edit-modal__actions';

  const cancelButton = document.createElement('button');
  cancelButton.type = 'button';
  cancelButton.className = 'planner-hero__button planner-hero__button--ghost';
  cancelButton.setAttribute('data-close', 'true');
  cancelButton.textContent = 'Cancelar';

  const saveButton = document.createElement('button');
  saveButton.type = 'button';
  saveButton.className = 'planner-hero__button planner-hero__button--primary';
  saveButton.textContent = 'Salvar card';
  saveButton.addEventListener('click', savePlannerMemberEditModal);

  footerActions.append(cancelButton, saveButton);
  footer.append(footerActions);

  content.append(closeButton, header, body, footer);
  modal.appendChild(content);

  modal.addEventListener('click', (event) => {
    if (event.target === modal || event.target.closest('[data-close="true"]')) {
      closePlannerMemberEditModal();
    }
  });

  document.addEventListener('keydown', handlePlannerMemberEditModalKeydown);
  document.body.appendChild(modal);

  plannerMemberEditModalState = {
    modal,
    content,
    closeButton,
    body,
    saveButton,
    bossId: '',
    memberId: '',
    draft: null,
    triggerEl: null
  };

  return plannerMemberEditModalState;
}

function closePlannerMemberEditModal(options = {}) {
  const state = plannerMemberEditModalState;
  if (!state?.modal || state.modal.getAttribute('aria-hidden') === 'true') return;

  const restoreFocus = options.restoreFocus !== false;
  const focusTarget = state.triggerEl;

  state.modal.setAttribute('aria-hidden', 'true');
  state.body.innerHTML = '';
  state.bossId = '';
  state.memberId = '';
  state.draft = null;
  state.triggerEl = null;
  document.body.classList.remove('modal-open');

  if (restoreFocus && focusTarget?.isConnected) {
    requestAnimationFrame(() => {
      focusTarget.focus({ preventScroll: true });
    });
  }
}

function updatePlannerMemberEditDraft(mutator) {
  const state = plannerMemberEditModalState;
  const context = getPlannerMemberEditTarget();
  if (!state?.draft || !context?.bossEntry) return;

  const nextDraft = clonePlannerMemberEditDraft(state.draft);
  if (typeof mutator === 'function') {
    mutator(nextDraft, context);
  }

  nextDraft.pokeblock = normalizePlannerConsumableId('pokeblock', nextDraft.pokeblock || '');
  nextDraft.ration = normalizePlannerConsumableId('ration', nextDraft.ration || '');

  roleboardRoleOrder.forEach((roleKey) => {
    nextDraft.roles[roleKey] = getPlannerPokemonKey(nextDraft.roles?.[roleKey]) || '';
    nextDraft.roleClans[roleKey] = normalizePlannerClanKey(nextDraft.roleClans?.[roleKey]) || getPlannerDefaultClanForRole(context.bossEntry, roleKey);
  });

  state.draft = nextDraft;
  renderPlannerMemberEditModalBody();
}

function createPlannerMemberEditRecommendationCard(bossEntry, roleKey, activeClan, selectedKey, pick) {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'planner-recommendation-card';
  button.dataset.tier = normalizeTierKey(pick.tier);
  if (selectedKey === pick.plannerKey) {
    button.classList.add('is-selected');
  }

  const image = document.createElement('img');
  image.className = 'planner-recommendation-card__image';
  image.src = resolveBossAssetSrc(pick.image);
  image.alt = pick.name;
  image.loading = 'lazy';
  const content = document.createElement('div');
  content.className = 'planner-recommendation-card__content';

  const titleRow = document.createElement('div');
  titleRow.className = 'planner-recommendation-card__title-row';

  const nameWrap = document.createElement('div');
  nameWrap.className = 'planner-recommendation-card__name-wrap';

  const name = document.createElement('strong');
  name.className = 'planner-recommendation-card__name';
  name.textContent = pick.name;

  const tierText = document.createElement('span');
  tierText.className = 'planner-recommendation-card__tier';
  tierText.textContent = getTierUiLabel(pick.tier);

  nameWrap.append(name, tierText);
  titleRow.appendChild(nameWrap);

  const typeStrip = document.createElement('div');
  typeStrip.className = 'planner-recommendation-card__types';
  getBossTypeIcons(getUniquePlannerTypes(pick.types || [])).forEach((icon) => {
    typeStrip.appendChild(icon);
  });

  content.appendChild(titleRow);

  if (typeStrip.childElementCount) {
    content.appendChild(typeStrip);
  }

  const detail = getRecommendationExtraDescription(pick.description || pick.note || '');
  if (detail) {
    const detailEl = document.createElement('p');
    detailEl.className = 'planner-recommendation-card__detail';
    detailEl.textContent = detail;
    content.appendChild(detailEl);
  }

  button.append(image, content);
  button.addEventListener('click', () => {
    updatePlannerMemberEditDraft((draft) => {
      draft.roles[roleKey] = pick.plannerKey;
      draft.roleClans[roleKey] = activeClan;
    });
  });

  return button;
}

function createPlannerMemberEditRoleSlot(bossEntry, roleKey, draft) {
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

  const {
    activeClan,
    selectedClan,
    selectedKey,
    selectedPick,
    recommendations
  } = getPlannerMemberEditRoleState(draft, bossEntry, roleKey);

  card.dataset.state = selectedPick ? 'filled' : 'empty';

  const current = document.createElement('strong');
  current.className = 'planner-role-slot__current';
  current.textContent = selectedPick ? selectedPick.name : 'Nenhum pokemon selecionado';

  const meta = document.createElement('span');
  meta.className = 'planner-role-slot__meta';
  meta.textContent = selectedPick
    ? `${bossEntry.bossRef.clans?.[selectedClan || activeClan]?.label || selectedClan || activeClan} - ${getTierUiLabel(selectedPick.tier)}`
    : `${bossEntry.bossRef.clans?.[activeClan]?.label || activeClan} - ${recommendations.length} opc${recommendations.length === 1 ? 'ao' : 'oes'} disponiveis`;

  copy.append(eyebrow, current, meta);
  const noteText = plannerRoleQuickNotes[roleKey] || '';
  if (noteText) {
    const note = document.createElement('p');
    note.className = 'planner-role-slot__note';
    note.textContent = noteText;
    copy.appendChild(note);
  }

  const clearButton = document.createElement('button');
  clearButton.type = 'button';
  clearButton.className = 'planner-role-slot__clear';
  clearButton.textContent = 'Limpar';
  clearButton.disabled = !selectedPick;
  clearButton.addEventListener('click', () => {
    updatePlannerMemberEditDraft((nextDraft) => {
      nextDraft.roles[roleKey] = '';
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
    clanButton.dataset.active = activeClan === clanKey ? 'true' : 'false';
    clanButton.disabled = options.length === 0;
    clanButton.setAttribute('aria-pressed', activeClan === clanKey ? 'true' : 'false');
    clanButton.setAttribute('aria-label', `${bossEntry.bossRef.clans?.[clanKey]?.label || clanKey} para ${roleboardRoleLabels[roleKey] || roleKey}`);

    const icon = document.createElement('img');
    icon.className = 'planner-clan-filter__icon';
    icon.src = resolveBossAssetSrc(clanIcons[clanKey] || '');
    icon.alt = '';
    icon.setAttribute('aria-hidden', 'true');
    icon.loading = 'lazy';

    const text = document.createElement('span');
    text.className = 'planner-clan-filter__text';
    text.textContent = bossEntry.bossRef.clans?.[clanKey]?.label || clanKey;

    clanButton.append(icon, text);
    clanButton.addEventListener('click', () => {
      updatePlannerMemberEditDraft((nextDraft) => {
        nextDraft.roleClans[roleKey] = clanKey;
      });
    });

    clans.appendChild(clanButton);
  });

  card.appendChild(clans);

  if (!recommendations.length) {
    const empty = document.createElement('div');
    empty.className = 'planner-role-slot__empty';
    empty.textContent = 'Nenhuma recomendacao disponivel para esse cla.';
    card.appendChild(empty);
    return card;
  }

  const list = document.createElement('div');
  list.className = 'planner-role-slot__list';
  list.dataset.variant = 'modal';
  recommendations.forEach((pick) => {
    list.appendChild(createPlannerMemberEditRecommendationCard(bossEntry, roleKey, activeClan, selectedKey, pick));
  });

  card.appendChild(list);
  return card;
}

function createPlannerMemberEditConsumableField(bossEntry, draft, kind) {
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

  select.value = draft?.[kind] || '';
  select.addEventListener('change', () => {
    updatePlannerMemberEditDraft((nextDraft) => {
      nextDraft[kind] = normalizePlannerConsumableId(kind, select.value);
    });
  });

  const selected = getPlannerConsumableOptionById(kind, draft?.[kind]);
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
    hintLabel.textContent = kind === 'ration' ? 'Ration recomendada' : 'Pokeblock recomendado';
    hint.append(hintLabel, createPlannerConsumableToken(kind, suggested, 'suggested'));
  } else {
    hint.textContent = 'Opcional';
  }

  field.append(label, select, previewWrap, hint);
  return field;
}

function renderPlannerMemberEditModalBody() {
  const state = ensurePlannerMemberEditModal();
  const context = getPlannerMemberEditTarget();
  if (!context || !state.draft) {
    closePlannerMemberEditModal({ restoreFocus: false });
    return;
  }

  const { bossEntry } = context;
  const boss = bossEntry.bossRef;
  const rolesToRender = getPlannerRolesForBossEntry(bossEntry);
  const scrollTop = state.body.scrollTop;

  state.body.innerHTML = '';

  const bossPanel = document.createElement('section');
  bossPanel.className = 'planner-edit-modal__boss';

  const bossImage = document.createElement('img');
  bossImage.className = 'planner-edit-modal__boss-image';
  bossImage.src = resolveBossAssetSrc(bossEntry.image);
  bossImage.alt = bossEntry.name;
  bossImage.loading = 'lazy';
  const bossCopy = document.createElement('div');
  bossCopy.className = 'planner-edit-modal__boss-copy';

  const bossLabel = document.createElement('span');
  bossLabel.className = 'planner-edit-modal__boss-label';
  bossLabel.textContent = bossEntry.sourceLabel;

  const bossName = document.createElement('h4');
  bossName.className = 'planner-edit-modal__boss-name';
  bossName.textContent = bossEntry.name;

  bossCopy.append(bossLabel, bossName);

  bossPanel.append(bossImage, bossCopy);

  const rolesWrap = document.createElement('div');
  rolesWrap.className = 'planner-edit-modal__roles';
  rolesToRender.forEach((roleKey) => {
    rolesWrap.appendChild(createPlannerMemberEditRoleSlot(bossEntry, roleKey, state.draft));
  });

  const itemsWrap = document.createElement('div');
  itemsWrap.className = 'planner-edit-modal__items';
  itemsWrap.append(
    createPlannerMemberEditConsumableField(bossEntry, state.draft, 'pokeblock'),
    createPlannerMemberEditConsumableField(bossEntry, state.draft, 'ration')
  );

  const metaWrap = document.createElement('div');
  metaWrap.className = 'planner-edit-modal__meta';
  metaWrap.appendChild(createPlannerMetaChip('Tipos', formatPlannerTypeList(boss.types || []), boss.types || []));

  const moveTypes = getPlannerDistinctMoveTypes(boss.types || [], getBossMoveTypes(boss));
  if (moveTypes.length) {
    metaWrap.appendChild(createPlannerMetaChip('Moveset', formatPlannerTypeList(moveTypes), moveTypes));
  }

  state.body.append(bossPanel, metaWrap, rolesWrap, itemsWrap);
  state.saveButton.disabled = !isPlannerMemberEditDraftReady(state.draft, bossEntry);
  state.body.scrollTop = scrollTop;
}

function openPlannerMemberEditModal(plannerBossId, memberId, triggerEl = null) {
  if (activeBossMode !== 'planner') return;

  const bossEntry = getPlannerBossById(plannerBossId);
  const plannerEntry = plannerState.entries.find((entry) => entry.bossId === plannerBossId);
  const member = plannerEntry?.members?.find((item) => String(item.id) === String(memberId));
  if (!bossEntry || !plannerEntry || !member) return;

  const state = ensurePlannerMemberEditModal();
  state.bossId = plannerBossId;
  state.memberId = String(memberId);
  state.triggerEl = triggerEl || document.activeElement || null;
  state.draft = createPlannerMemberEditDraft(bossEntry, member);

  renderPlannerMemberEditModalBody();

  state.modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');

  requestAnimationFrame(() => {
    state.closeButton.focus({ preventScroll: true });
  });
}

function savePlannerMemberEditModal() {
  const state = plannerMemberEditModalState;
  const context = getPlannerMemberEditTarget();
  if (!state?.draft || !context?.bossEntry || !context?.plannerEntry || !context?.member) {
    closePlannerMemberEditModal({ restoreFocus: false });
    return;
  }

  const draftToSave = clonePlannerMemberEditDraft(state.draft);
  const rolesToRender = getPlannerRolesForBossEntry(context.bossEntry);
  if (!isPlannerMemberEditDraftReady(draftToSave, context.bossEntry)) {
    renderPlannerMemberEditModalBody();
    return;
  }

  closePlannerMemberEditModal({ restoreFocus: false });

  commitPlannerState((draft) => {
    const targetEntry = draft.entries.find((entry) => entry.bossId === context.plannerEntry.bossId);
    const targetMember = targetEntry?.members?.find((item) => String(item.id) === String(context.member.id));
    if (!targetMember) return;

    targetMember.roles = targetMember.roles || {};
    rolesToRender.forEach((roleKey) => {
      targetMember.roles[roleKey] = getPlannerPokemonKey(draftToSave.roles?.[roleKey]) || '';
    });

    targetMember.pokeblock = normalizePlannerConsumableId('pokeblock', draftToSave.pokeblock || '');
    targetMember.ration = normalizePlannerConsumableId('ration', draftToSave.ration || '');
  }, {
    feedback: {
      message: 'Card pronto atualizado.',
      tone: 'success'
    }
  });
}

function renderPlannerGrid() {
  if (!grid) return;

  syncPlannerStateToUrl();
  grid.innerHTML = '';
  grid.dataset.catalogVariant = 'planner';
  grid.dataset.bossMode = 'planner';
  grid.setAttribute('aria-label', 'Planejador de bosses');
  const visibleStage = getPlannerVisibleStage();
  const centerPlannerHeroCopy = visibleStage === 'source';
  const centerPlannerHeroCopyWithinColumn = visibleStage === 'boss' || visibleStage === 'compose' || visibleStage === 'ready';

  const shell = document.createElement('div');
  shell.className = 'planner-shell';

  const hero = document.createElement('section');
  hero.className = 'planner-hero';
  if (centerPlannerHeroCopy) {
    hero.dataset.copyAlign = 'center';
  } else if (centerPlannerHeroCopyWithinColumn) {
    hero.dataset.copyAlign = 'column-center';
  }

  const heroTop = document.createElement('div');
  heroTop.className = 'planner-hero__top';

  const heroCopy = document.createElement('div');
  heroCopy.className = 'planner-hero__copy';

  const eyebrow = document.createElement('span');
  eyebrow.className = 'planner-hero__eyebrow';
  eyebrow.textContent = 'Planejamento compartilhavel';

  const title = document.createElement('h3');
  title.className = 'planner-hero__title';
  title.textContent = getPlannerHeroTitle();

  const text = document.createElement('p');
  text.className = 'planner-hero__text';
  text.textContent = getPlannerHeroText();

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

  heroCopy.append(eyebrow, title, text, subtabs);

  const heroControls = document.createElement('div');
  heroControls.className = 'planner-hero__controls';

  const context = document.createElement('div');
  context.className = 'planner-hero__context';

  if (plannerState.sourceFilter) {
    context.appendChild(createPlannerContextPill('Conteudo', getPlannerContentLabel(plannerState.sourceFilter)));
  }
  if (plannerState.entries.length) {
    context.appendChild(createPlannerContextPill('Bosses', String(plannerState.entries.length)));
  }
  if (countSelectedPlannerItems()) {
    context.appendChild(createPlannerContextPill('Itens', String(countSelectedPlannerItems())));
  }
  if (countReadyPlannerMembers()) {
    context.appendChild(createPlannerContextPill('Cards', String(countReadyPlannerMembers())));
  }

  if (context.childElementCount) {
    heroControls.append(context);
    heroTop.append(heroCopy, heroControls);
  } else {
    heroTop.append(heroCopy);
  }

  const metrics = document.createElement('div');
  metrics.className = 'planner-hero__metrics';
  metrics.append(
    createPlannerMetricCard('Bosses', String(plannerState.entries.length), 'ativos no fluxo'),
    createPlannerMetricCard('Papeis', `${countFilledPlannerSelections()}/${plannerState.entries.length * roleboardRoleOrder.length || 0}`, 'slots preenchidos'),
    createPlannerMetricCard('Cards prontos', String(countReadyPlannerMembers()), 'finalizados')
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

  hero.append(heroTop, createPlannerStageRail(), metrics, actions);
  shell.appendChild(hero);

  const layout = document.createElement('div');
  layout.className = 'planner-layout';

  const browser = document.createElement('section');
  browser.className = 'planner-panel planner-panel--browser';

  const browserHeader = document.createElement('div');
  browserHeader.className = 'planner-panel__header';

  const browserTitle = document.createElement('h4');
  browserTitle.className = 'planner-panel__title';
  browserTitle.textContent = plannerState.sourceFilter ? 'Etapa 2: escolher o boss' : 'Etapa 1: escolher o conteudo';

  const browserText = document.createElement('p');
  browserText.className = 'planner-panel__text';
  browserText.textContent = plannerState.sourceFilter
    ? 'Selecione o boss que vai abrir a composicao atual.'
    : 'Comece por Mewtwo, Champion Path ou Hoopa Portais.';

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
    empty.textContent = 'Escolha um conteudo acima para liberar a lista de bosses.';
    browserList.appendChild(empty);
  } else {
    const selectedSourceBosses = getPlannerBossEntries().filter((entry) => entry.sourceKey === plannerState.sourceFilter);
    selectedSourceBosses.forEach((entry) => {
      // Considerar um boss "adicionado" apenas quando ele tem pelo menos um membro salvo
      // (ou seja, quando o usuario clicou em "Finalizar"). Entradas apenas
      // pendentes (selecionadas mas nao finalizadas) nao devem marcar o boss como adicionado.
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
  compositionTitle.textContent = 'Etapa 3: montar o card';

  const compositionText = document.createElement('p');
  compositionText.className = 'planner-panel__text';
  compositionText.textContent = 'Preencha os papeis, ajuste os itens e finalize quando o card estiver consistente.';

  compositionHeader.append(compositionTitle, compositionText);
  composition.appendChild(compositionHeader);

  const compositionList = document.createElement('div');
  compositionList.className = 'planner-composition-list';

  // Mostrar apenas o unico card de composicao ativo (a entrada pendente mais recente).
  // Entradas que ja tem membros salvos sao consideradas concluidas e
  // nao devem aparecer na etapa de composicao.
  const pendingEntries = plannerState.entries.filter((entry) => !Array.isArray(entry.members) || entry.members.length === 0);
  if (!pendingEntries.length) {
    const empty = document.createElement('div');
    empty.className = 'planner-empty-state planner-empty-state--large';
    empty.textContent = 'Escolha um boss para abrir os slots de Tank, DPS, Suporte e itens.';
    compositionList.appendChild(empty);
  } else {
    const activeEntry = pendingEntries[pendingEntries.length - 1];
    const card = createPlannerCompositionCard(activeEntry);
    if (card) compositionList.appendChild(card);
  }

  composition.appendChild(compositionList);

  if (plannerSubpage === 'compose') {
    // Se houver entradas e a UI estiver focada em composicao, mostrar apenas composicao.
    // Caso contrario, mostrar o navegador (etapa 1). Isso faz etapas 2/3/4 aparecerem apenas apos escolher um boss.
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
      entry.members.forEach((member, memberIndex) => {
        cardsRow.appendChild(createPlannerMemberCard(member, bossEntry, entry, memberIndex, { showEditAction: true }));
      });
      group.appendChild(cardsRow);

      readyList.appendChild(group);
    });

    if (!readyList.childElementCount) {
      const empty = document.createElement('div');
      empty.className = 'planner-empty-state planner-empty-state--large';
      empty.textContent = 'Nenhum card pronto ainda. Finalize um boss na aba Montar para gerar a saida final.';
      readyPanel.appendChild(empty);
    }

    if (readyList.childElementCount) {
      readyPanel.appendChild(readyList);
    }
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

function handleBossTutorialModalClosed(options = {}) {
  const { skipRouteRestore = false } = options || {};
  const restoreUrl = isBossModalOpen()
    ? getBossDetailRouteUrl(currentBoss || activeBossTutorialBoss, activeBossMode)
    : (bossTutorialPreviousUrl || getBossBaseRouteUrl(activeBossMode));
  activeBossTutorialBoss = null;
  bossTutorialHistoryPushed = false;
  bossTutorialPreviousUrl = '';

  if (!skipRouteRestore) {
    restoreBossRouteUrl(restoreUrl);
  }
}

function openBossTutorial(boss, options = {}) {
  const { pushState = true, restoreUrl = '' } = options || {};
  const tutorialUrl = getBossTutorialUrl(boss);
  if (!tutorialUrl) return false;

  const previousUrl = restoreUrl || (isBossTutorialModalOpen() && bossTutorialPreviousUrl
    ? bossTutorialPreviousUrl
    : getBossPreferredRestoreUrl(boss, activeBossMode));
  const routeBoss = isBossRouteableMode(activeBossMode)
    ? findBossByRouteSlug(activeBossMode, getBossRouteSlug(boss))
    : null;

  if (typeof window.openSiteYouTubeModal === 'function') {
    const openedInModal = window.openSiteYouTubeModal({
      url: tutorialUrl,
      title: `Tutorial de ${boss.name}`,
      onAfterClose: handleBossTutorialModalClosed
    });
    if (openedInModal) {
      activeBossTutorialBoss = routeBoss;
      bossTutorialPreviousUrl = previousUrl;
      bossTutorialHistoryPushed = false;
      if (routeBoss) {
        syncBossTutorialRouteOnOpen(pushState);
      }
      return true;
    }
  }

  window.open(tutorialUrl, '_blank', 'noopener,noreferrer');
  return true;
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
  if (speedster.comingSoon) {
    button.classList.add('speedster-card--coming-soon');
  }
  button.setAttribute('role', 'button');
  button.setAttribute('tabindex', '0');
  button.setAttribute('aria-label', `Abrir detalhes de ${speedster.name}`);
  button.dataset.catalog = 'hoopa';

  const img = document.createElement('img');
  img.className = 'speedster-image';
  img.src = resolveBossAssetSrc(speedster.image);
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
    const bossRef = { ...speedster, ...(b || {}) };
    const bossTypes = Array.isArray(bossRef.types) && bossRef.types.length
      ? bossRef.types
      : (Array.isArray(speedster.types) ? speedster.types : []);
    const bossImg = document.createElement('img');
    bossImg.className = 'speedster-image';
    bossImg.src = resolveBossAssetSrc(b.image);
    bossImg.alt = b.name;
    bossImg.loading = 'lazy';
    imageWrapper.appendChild(bossImg);
  });

  button.append(imageWrapper, label);

  // Mostrar se este boss e solo ou dupla no card (lado oposto ao local)
  const isDuo = speedster.duo || speedster.mode === 'duo';
  const modeBadge = document.createElement('span');
  modeBadge.className = 'speedster-mode-badge';
  if (speedster.comingSoon) {
    modeBadge.classList.add('speedster-mode-badge--soon');
    modeBadge.textContent = 'Em Breve';
    modeBadge.title = 'Boss em breve';
  } else {
    const isHorizonsMode = normalizeBossMode(activeBossMode) === 'horizons';
    const horizonsCategoryLabel = typeof speedster.horizonsCategoryLabel === 'string' && speedster.horizonsCategoryLabel.trim()
      ? speedster.horizonsCategoryLabel.trim()
      : '';
    modeBadge.textContent = isHorizonsMode && horizonsCategoryLabel ? horizonsCategoryLabel : (isDuo ? 'Dupla' : 'Solo');
    modeBadge.title = isDuo
      ? (isHorizonsMode && horizonsCategoryLabel ? `Chefe Horizons ${horizonsCategoryLabel}` : 'Chefe para dupla (2 jogadores)')
      : 'Chefe solo (1 jogador)';
  }
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
  tutorialIcon.src = resolveBossAssetSrc('youtube.png');
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

  // Mostrar um pequeno marcador de local (nao uma imagem completa) para manter o card limpo
  const marker = document.createElement('span');
  marker.className = 'speedster-location-marker';
  marker.textContent = '🗺️';
  marker.setAttribute('aria-hidden', 'true');

  locationBtn.appendChild(marker);
  locationWrapper.append(locationLabel, locationBtn);
  button.appendChild(locationWrapper);

  locationBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    showLocationOverlay(getBossLocationImageSource(speedster), { boss: speedster });
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

  if (activeBossMode !== 'special') {
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
  }

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
  image.src = resolveBossAssetSrc(boss.image || `${boss.id}.png`);
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
  // Expor tooltip externo de passiva (nao `title` nativo) para o painel de tooltip
  // aparecer fora do card. Manter `title` vazio para evitar tooltips nativos do navegador
  // que podem sobrepor o conteudo do card.
  if (Array.isArray(normalizedEntry.tooltipItems) && normalizedEntry.tooltipItems.length) {
    badge.dataset.tooltipItems = JSON.stringify(normalizedEntry.tooltipItems);
  }

  if (normalizedEntry.image) {
    const image = document.createElement('img');
    image.className = 'boss-role-card__consumable-icon';
    image.src = resolveBossAssetSrc(normalizedEntry.image);
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

  const modeBadgeLabel = Array.isArray(boss.cardTags)
    ? String(boss.cardTags[0] || '').trim()
    : '';
  if (modeBadgeLabel) {
    const modeBadge = document.createElement('span');
    modeBadge.className = 'boss-role-card__mode-badge';
    modeBadge.textContent = modeBadgeLabel;
    button.appendChild(modeBadge);
  }

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
    tutorialIcon.src = resolveBossAssetSrc('youtube.png');
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

  const descriptionText = typeof boss.description === 'string' ? boss.description.trim() : '';
  const description = descriptionText ? document.createElement('p') : null;
  if (description) {
    description.className = 'boss-role-card__description';
    description.textContent = descriptionText;
    if (boss.expandCardDescription) {
      description.classList.add('boss-role-card__description--expanded');
    }
  }

  // Badge será inserido no botão (não diretamente no título) para evitar sobrescritas

  const avatar = createRoleBossAvatar(boss);
  const chips = document.createElement('div');
  chips.className = 'boss-role-card__chips boss-role-card__chips--types';
  getBossTypeIcons(boss.types || []).forEach((icon) => {
    const chip = document.createElement('span');
    chip.className = 'boss-role-card__chip boss-role-card__chip--type';
    chip.title = icon.title || 'Tipo';
    chip.setAttribute('aria-label', icon.title || 'Tipo');
    chip.appendChild(icon);
    chips.appendChild(chip);
  });

  button.append(title, avatar);
  if (description) {
    button.appendChild(description);
  }
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

const horizonsDifficultyLabels = Object.freeze({
  normal: 'Normal',
  medio: 'Medio',
  dificil: 'Dificil',
  especialista: 'Especialista'
});

const horizonsSideLabels = Object.freeze({
  a: 'Lado A',
  b: 'Lado B'
});

const horizonsDifficultyOrder = Object.freeze(['normal', 'medio', 'dificil', 'especialista']);
const horizonsSideOrder = Object.freeze(['a', 'b']);
const horizonsCategoryOrder = Object.freeze(['bronze', 'silver', 'gold']);

let activeHorizonsCategoryId = '';
let activeHorizonsDifficulty = 'medio';
let activeHorizonsSide = 'a';

function getHorizonsCategories() {
  const categories = getActiveBossCatalog()?.categories;
  return categories && typeof categories === 'object' ? categories : {};
}

function getHorizonsCategory(categoryId = activeHorizonsCategoryId) {
  return getHorizonsCategories()[categoryId] || null;
}

function getHorizonsCategoryList() {
  const categories = getHorizonsCategories();
  return horizonsCategoryOrder
    .map((categoryId) => categories[categoryId])
    .filter(Boolean);
}

function getHorizonsRuns(categoryId = activeHorizonsCategoryId) {
  const category = getHorizonsCategory(categoryId);
  const runs = category?.runs;
  return Array.isArray(runs) ? runs : [];
}

function hasHorizonsRun(difficulty, side) {
  return getHorizonsRuns().some((run) => run?.difficulty === difficulty && run?.side === side);
}

function getActiveHorizonsRun() {
  const runs = getHorizonsRuns();
  return runs.find((run) => run?.difficulty === activeHorizonsDifficulty && run?.side === activeHorizonsSide)
    || runs[0]
    || null;
}

function setActiveHorizonsCategory(categoryId) {
  const category = getHorizonsCategory(categoryId);
  activeHorizonsCategoryId = category ? category.id : '';
  const run = getHorizonsRuns(activeHorizonsCategoryId)[0];
  if (run) {
    activeHorizonsDifficulty = run.difficulty || activeHorizonsDifficulty;
    activeHorizonsSide = run.side || activeHorizonsSide;
  }
}

function setActiveHorizonsRun(nextState = {}) {
  const nextDifficulty = nextState.difficulty || activeHorizonsDifficulty;
  const nextSide = nextState.side || activeHorizonsSide;
  const run = getHorizonsRuns().find((candidate) => (
    candidate?.difficulty === nextDifficulty && candidate?.side === nextSide
  ));
  if (!run) return;
  activeHorizonsDifficulty = run.difficulty;
  activeHorizonsSide = run.side;
}

function createHorizonsSelectorGroup(label, items, activeValue, type) {
  const group = document.createElement('div');
  group.className = 'horizons-selector-group';
  if (type) {
    group.classList.add(`horizons-selector-group--${type}`);
  }

  const title = document.createElement('span');
  title.className = 'horizons-selector-group__label';
  title.textContent = label;
  group.appendChild(title);

  const list = document.createElement('div');
  list.className = 'horizons-selector-group__list';

  items.forEach((item) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'horizons-selector';
    button.dataset.value = item.value;
    if (type) {
      button.classList.add(`horizons-selector--${type}`);
    }
    const available = type === 'difficulty'
      ? hasHorizonsRun(item.value, getActiveHorizonsRun()?.side || activeHorizonsSide)
      : type === 'side'
        ? hasHorizonsRun(getActiveHorizonsRun()?.difficulty || activeHorizonsDifficulty, item.value)
        : item.available !== false;
    const active = item.value === activeValue;
    button.classList.toggle('is-active', active);
    button.disabled = !available;
    button.setAttribute('aria-pressed', active ? 'true' : 'false');
    button.textContent = item.label;
    if (available && typeof item.onSelect === 'function') {
      button.addEventListener('click', item.onSelect);
    }
    const statusLabel = item.statusLabel || (!available ? 'Em breve' : '');
    if (statusLabel) {
      const soon = document.createElement('span');
      soon.className = 'horizons-selector__soon';
      soon.textContent = statusLabel;
      button.appendChild(soon);
    }
    list.appendChild(button);
  });

  group.appendChild(list);
  return group;
}

function createHorizonsTypeChip(type, tone = '') {
  const chip = document.createElement('span');
  chip.className = 'horizons-type-chip';
  if (tone) chip.dataset.tone = tone;
  getBossTypeIcons([type]).forEach((icon) => chip.appendChild(icon));
  chip.appendChild(document.createTextNode(formatTypeLabel(type)));
  return chip;
}

function formatHorizonsSubtitle(text = '') {
  return String(text).replace(/\n/g, '<br>');
}

function createHorizonsMobCard(mob, options = {}) {
  const card = document.createElement('article');
  card.className = 'horizons-mob-card';

  const imageWrap = document.createElement('div');
  imageWrap.className = 'horizons-mob-card__image-wrap';

  const image = document.createElement('img');
  image.className = 'horizons-mob-card__image';
  image.src = resolveBossAssetSrc(mob.image || '');
  image.alt = mob.name || 'Mob';
  image.loading = 'lazy';
  if (options.clickToZoom) {
    image.style.cursor = 'pointer';
    image.title = 'Clique para ampliar';
    image.addEventListener('click', () => {
      openMainQuestPuzzleZoom({
        src: resolveBossAssetSrc(mob.image || ''),
        label: mob.name || 'Imagem ampliada'
      });
    });
  }
  imageWrap.appendChild(image);

  const name = document.createElement('strong');
  name.className = 'horizons-mob-card__name';
  name.textContent = mob.name || 'Mob';

  const hideTypes = Boolean(options.hideTypes);
  if (!hideTypes) {
    const types = document.createElement('div');
    types.className = 'horizons-mob-card__types';
    (mob.types || []).forEach((type) => types.appendChild(createHorizonsTypeChip(type)));
    card.appendChild(types);
  }

  card.append(imageWrap, name);
  return card;
}

function createHorizonsPathSection(sectionData) {
  const section = document.createElement('section');
  section.className = 'horizons-path-section';

  const header = document.createElement('div');
  header.className = 'horizons-section-header';

  const copy = document.createElement('div');
  copy.className = 'horizons-section-header__copy';

  const eyebrow = document.createElement('span');
  eyebrow.className = 'horizons-section-header__eyebrow';
  eyebrow.textContent = 'Mobs no caminho';

  const title = document.createElement('h3');
  title.className = 'horizons-section-header__title';
  title.textContent = sectionData.title || 'Trecho';

  const subtitle = document.createElement('p');
  subtitle.className = 'horizons-section-header__subtitle';
  subtitle.innerHTML = formatHorizonsSubtitle(sectionData.subtitle || '');

  copy.append(eyebrow, title);
  if (subtitle.textContent) copy.appendChild(subtitle);
  header.appendChild(copy);
  section.appendChild(header);

  const mobGrid = document.createElement('div');
  mobGrid.className = 'horizons-mob-grid';
  const isSilverCategory = getHorizonsCategory()?.id === 'silver';
  const hideTypes = Boolean(sectionData?.hideTypes) || (isSilverCategory && sectionData?.id === 'armadilhas');
  const clickToZoom = isSilverCategory && sectionData?.id === 'armadilhas';
  (sectionData.mobs || []).forEach((mob) => mobGrid.appendChild(createHorizonsMobCard(mob, { hideTypes, clickToZoom })));
  section.appendChild(mobGrid);

  if (!hideTypes) {
    const suggestions = document.createElement('div');
    suggestions.className = 'horizons-type-suggestions';

    const effective = document.createElement('div');
    effective.className = 'horizons-type-suggestions__group';
    const effectiveLabel = document.createElement('span');
    effectiveLabel.className = 'horizons-type-suggestions__label';
    effectiveLabel.textContent = 'Efetivos';
    effective.appendChild(effectiveLabel);
    (sectionData.effectiveTypes || []).forEach((type) => effective.appendChild(createHorizonsTypeChip(type, 'effective')));

    const superEffective = document.createElement('div');
    superEffective.className = 'horizons-type-suggestions__group';
    const superLabel = document.createElement('span');
    superLabel.className = 'horizons-type-suggestions__label';
    superLabel.textContent = 'Super-efetivos';
    superEffective.appendChild(superLabel);
    (sectionData.superEffectiveTypes || []).forEach((type) => superEffective.appendChild(createHorizonsTypeChip(type, 'super')));

    suggestions.append(effective, superEffective);
    section.appendChild(suggestions);
  }

  return section;
}

function createHorizonsOverview(data, fallbackTitle = 'Horizons') {
  const overview = document.createElement('section');
  overview.className = 'horizons-overview';
  const overviewCopy = document.createElement('div');
  overviewCopy.className = 'horizons-overview__copy';
  const eyebrow = document.createElement('span');
  eyebrow.className = 'horizons-overview__eyebrow';
  eyebrow.textContent = data?.eyebrow || 'Horizons';
  const title = document.createElement('h3');
  title.className = 'horizons-overview__title';
  title.textContent = data?.title || fallbackTitle;
  const summary = document.createElement('p');
  summary.className = 'horizons-overview__summary';
  summary.textContent = data?.summary || '';
  overviewCopy.append(eyebrow, title, summary);
  if (data?.tutorialUrl) {
    const tutorialButton = document.createElement('button');
    tutorialButton.type = 'button';
    tutorialButton.className = 'horizons-overview__tutorial';
    const tutorialIcon = document.createElement('img');
    tutorialIcon.src = resolveBossAssetSrc('youtube.png');
    tutorialIcon.alt = '';
    tutorialIcon.setAttribute('aria-hidden', 'true');
    const tutorialLabel = document.createElement('span');
    tutorialLabel.textContent = 'Ver tutorial';
    tutorialButton.append(tutorialIcon, tutorialLabel);
    tutorialButton.addEventListener('click', () => {
      if (typeof window.openSiteYouTubeModal === 'function') {
        window.openSiteYouTubeModal({ url: data.tutorialUrl, title: `Tutorial ${data?.title || fallbackTitle}` });
        return;
      }
      window.open(data.tutorialUrl, '_blank', 'noopener,noreferrer');
    });
    overviewCopy.appendChild(tutorialButton);
  }
  overview.appendChild(overviewCopy);
  return overview;
}

function createHorizonsBossesSection(bosses = [], options = {}) {
  const bossesSection = document.createElement('section');
  bossesSection.className = 'horizons-bosses-section';
  if (options.compact) {
    bossesSection.classList.add('horizons-bosses-section--compact');
  }

  const bossHeader = document.createElement('div');
  bossHeader.className = 'horizons-section-header';
  const bossCopy = document.createElement('div');
  bossCopy.className = 'horizons-section-header__copy';
  const bossEyebrow = document.createElement('span');
  bossEyebrow.className = 'horizons-section-header__eyebrow';
  bossEyebrow.textContent = options.eyebrow || 'Bosses';
  const bossTitle = document.createElement('h3');
  bossTitle.className = 'horizons-section-header__title';
  bossTitle.textContent = options.title || 'Recomendacoes por cla e funcao';
  const bossSubtitle = document.createElement('p');
  bossSubtitle.className = 'horizons-section-header__subtitle';
  bossSubtitle.textContent = options.subtitle || 'Clique em um dos Bosses para ver os Pokemons Recomendados.';
  bossCopy.append(bossEyebrow, bossTitle, bossSubtitle);
  bossHeader.appendChild(bossCopy);
  bossesSection.appendChild(bossHeader);

  const bossGrid = document.createElement('div');
  bossGrid.className = 'horizons-boss-grid';
  bosses.forEach((boss) => bossGrid.appendChild(makeRoleBossCard(boss)));
  bossesSection.appendChild(bossGrid);
  return bossesSection;
}

function renderHorizonsCategoryGrid() {
  const wrap = document.createElement('div');
  wrap.className = 'horizons-board';

  const selectors = document.createElement('section');
  selectors.className = 'horizons-selectors';
  selectors.appendChild(
    createHorizonsSelectorGroup(
      'Categoria',
      getHorizonsCategoryList().map((category) => ({
        value: category.id,
        label: category.label,
        statusLabel: category.status === 'Em breve' ? 'Em breve' : '',
        onSelect: () => {
          setActiveHorizonsCategory(category.id);
          renderGrid();
        }
      })),
      activeHorizonsCategoryId,
      'category'
    )
  );
  wrap.appendChild(selectors);

  const activeCategory = getHorizonsCategory();
  if (!activeCategory) {
    wrap.appendChild(createHorizonsOverview({
      eyebrow: 'Horizons',
      title: 'Escolha uma categoria',
      summary: 'Selecione Bronze, Silver ou Gold para liberar dificuldade, lado, criaturas e bosses.'
    }));
    grid.appendChild(wrap);
    return;
  }

  const categoryRuns = getHorizonsRuns();
  if (categoryRuns.length) {
    const run = getActiveHorizonsRun();
    selectors.append(
      createHorizonsSelectorGroup(
        'Dificuldade',
        horizonsDifficultyOrder.map((value) => ({
          value,
          label: horizonsDifficultyLabels[value],
          onSelect: () => {
            setActiveHorizonsRun({ difficulty: value });
            renderGrid();
          }
        })),
        run?.difficulty || activeHorizonsDifficulty,
        'difficulty'
      ),
      createHorizonsSelectorGroup(
        'Lado',
        horizonsSideOrder.map((value) => ({
          value,
          label: horizonsSideLabels[value],
          onSelect: () => {
            setActiveHorizonsRun({ side: value });
            renderGrid();
          }
        })),
        run?.side || activeHorizonsSide,
        'side'
      )
    );

    if (run) {
      wrap.appendChild(createHorizonsOverview({
        ...run,
        tutorialUrl: activeCategory.tutorialUrl || run.tutorialUrl
      }, 'Rota'));
      (run.pathSections || []).forEach((sectionData) => {
        wrap.appendChild(createHorizonsPathSection(sectionData));
        if (Array.isArray(sectionData.bossesAfter) && sectionData.bossesAfter.length) {
          wrap.appendChild(createHorizonsBossesSection(sectionData.bossesAfter, sectionData.bossesAfterOptions || {}));
        }
      });
      const isSilverCategory = activeCategory?.id === 'silver';
      if (Array.isArray(run.bosses) && run.bosses.length) {
        wrap.appendChild(createHorizonsBossesSection(run.bosses));
      } else if (!isSilverCategory) {
        const empty = document.createElement('div');
        empty.className = 'speedster-clan-empty';
        empty.textContent = 'Informacoes em breve.';
        wrap.appendChild(empty);
      }
    }
  } else {
    wrap.appendChild(createHorizonsOverview(activeCategory, activeCategory.label));
    (activeCategory.pathSections || []).forEach((sectionData) => {
      wrap.appendChild(createHorizonsPathSection(sectionData));
    });
    if (activeCategory.id !== 'silver' && Array.isArray(activeCategory.bosses) && activeCategory.bosses.length) {
      wrap.appendChild(createHorizonsBossesSection(activeCategory.bosses));
    } else if (activeCategory.id !== 'silver') {
      const empty = document.createElement('div');
      empty.className = 'speedster-clan-empty';
      empty.textContent = 'Informacoes em breve.';
      wrap.appendChild(empty);
    }
  }

  grid.appendChild(wrap);
}

function renderHorizonsGrid() {
  renderHorizonsCategoryGrid();
  return;

  const run = getActiveHorizonsRun();
  if (!run) {
    const empty = document.createElement('div');
    empty.className = 'speedster-clan-empty';
    empty.textContent = 'Nenhuma rota de Horizons configurada ainda.';
    grid.appendChild(empty);
    return;
  }

  const wrap = document.createElement('div');
  wrap.className = 'horizons-board';

  const selectors = document.createElement('section');
  selectors.className = 'horizons-selectors';
  selectors.append(
    createHorizonsSelectorGroup(
      'Dificuldade',
      horizonsDifficultyOrder.map((value) => ({ value, label: horizonsDifficultyLabels[value] })),
      run.difficulty,
      'difficulty'
    ),
    createHorizonsSelectorGroup(
      'Lado',
      horizonsSideOrder.map((value) => ({ value, label: horizonsSideLabels[value] })),
      run.side,
      'side'
    )
  );
  wrap.appendChild(selectors);

  const overview = document.createElement('section');
  overview.className = 'horizons-overview';
  const overviewCopy = document.createElement('div');
  overviewCopy.className = 'horizons-overview__copy';
  const eyebrow = document.createElement('span');
  eyebrow.className = 'horizons-overview__eyebrow';
  eyebrow.textContent = run.eyebrow || 'Horizons';
  const title = document.createElement('h3');
  title.className = 'horizons-overview__title';
  title.textContent = run.title || 'Rota';
  const summary = document.createElement('p');
  summary.className = 'horizons-overview__summary';
  summary.textContent = run.summary || '';
  overviewCopy.append(eyebrow, title, summary);
  overview.appendChild(overviewCopy);
  wrap.appendChild(overview);

  (run.pathSections || []).forEach((sectionData) => {
    wrap.appendChild(createHorizonsPathSection(sectionData));
  });

  const bossesSection = document.createElement('section');
  bossesSection.className = 'horizons-bosses-section';

  const bossHeader = document.createElement('div');
  bossHeader.className = 'horizons-section-header';
  const bossCopy = document.createElement('div');
  bossCopy.className = 'horizons-section-header__copy';
  const bossEyebrow = document.createElement('span');
  bossEyebrow.className = 'horizons-section-header__eyebrow';
  bossEyebrow.textContent = 'Bosses';
  const bossTitle = document.createElement('h3');
  bossTitle.className = 'horizons-section-header__title';
  bossTitle.textContent = 'Recomendacoes por cla e funcao';
  const bossSubtitle = document.createElement('p');
  bossSubtitle.className = 'horizons-section-header__subtitle';
  bossSubtitle.textContent = 'Clique em um dos Bosses para ver os Pokémons Recomendados.';
  bossCopy.append(bossEyebrow, bossTitle, bossSubtitle);
  bossHeader.appendChild(bossCopy);
  bossesSection.appendChild(bossHeader);

  const bossGrid = document.createElement('div');
  bossGrid.className = 'horizons-boss-grid';
  (run.bosses || []).forEach((boss) => bossGrid.appendChild(makeRoleBossCard(boss)));
  bossesSection.appendChild(bossGrid);
  wrap.appendChild(bossesSection);

  grid.appendChild(wrap);
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
  if (catalog.variant === 'horizons') {
    renderHorizonsGrid();
    return;
  }
  getActiveBossesData().forEach((boss) => {
    grid.appendChild(makeSpeedsterCard(boss));
  });
}

function formatSearchLabel(speedster) {
  const sprite = document.createElement('img');
  sprite.className = 'speedster-search-item-icon';
  sprite.src = resolveBossAssetSrc(speedster.image || '');
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

function getBossSearchCatalogUrl() {
  const prefix = isBossesStandaloneAssetContext() ? '../' : '';
  return `${prefix}pokemons/pokemons.json?v=20260630g`;
}

function getBossSearchCatalogRole(entry) {
  const role = String(entry?.role || '').trim().toLowerCase();
  return Object.prototype.hasOwnProperty.call(bossSearchCatalogRoleMap, role) ? role : '';
}

function getBossSearchCatalogEntryTypes(entry) {
  return mergeLowercaseUniqueValues(
    Array.isArray(entry?.types) ? entry.types : [],
    entry?.type1,
    entry?.type2
  );
}

function getBossSearchCatalogEntryMoveTypes(entry) {
  return normalizeMoveTypeValues(
    Array.isArray(entry?.moveset) && entry.moveset.length
      ? entry.moveset
      : (entry?.moveType || entry?.moveTypes)
  );
}

function cloneBossSearchCatalogMap(value) {
  return value && typeof value === 'object' ? JSON.parse(JSON.stringify(value)) : undefined;
}

function createBossSearchEntryFromCatalogPokemon(entry) {
  if (!entry || typeof entry !== 'object') return null;
  const name = String(entry.name || '').trim();
  const catalogRole = getBossSearchCatalogRole(entry);
  if (!name || !catalogRole) return null;

  const moveTypes = getBossSearchCatalogEntryMoveTypes(entry);
  const result = {
    name,
    image: entry.image || '',
    types: getBossSearchCatalogEntryTypes(entry),
    moveType: moveTypes.length === 1 ? moveTypes[0] : moveTypes,
    description: replaceRecommendationMoveTypeDescription(entry.description || '', moveTypes),
    note: entry.note || '',
    level: entry.level,
    team: entry.team || '',
    searchCatalogRole: catalogRole,
    recommendedRole: bossSearchCatalogRoleMap[catalogRole]
  };

  [
    'passiveName',
    'passiveDescription',
    'passiveText'
  ].forEach((field) => {
    if (typeof entry[field] === 'string' && entry[field].trim()) {
      result[field] = entry[field].trim();
    }
  });

  [
    'immunities',
    'passiveSuperEffectiveTypes'
  ].forEach((field) => {
    if (Array.isArray(entry[field]) && entry[field].length) {
      result[field] = mergeLowercaseUniqueValues(entry[field]);
    }
  });

  [
    'defenseByBossType',
    'defenseDamageFactorByBossType',
    'matchupOverrides'
  ].forEach((field) => {
    const cloned = cloneBossSearchCatalogMap(entry[field]);
    if (cloned) result[field] = cloned;
  });

  applyImplicitRecommendationEnhancements(result);
  return result;
}

function mergeBossSearchCatalogEntryIntoResult(target, source) {
  if (!target || !source) return target;

  if (source.searchCatalogRole && source.name) target.name = source.name;
  if (!target.image && source.image) target.image = source.image;
  if ((!Array.isArray(target.types) || !target.types.length) && Array.isArray(source.types)) {
    target.types = [...source.types];
  }
  if (!parseMoveTypes(target).length && parseMoveTypes(source).length) {
    target.moveType = Array.isArray(source.moveType) ? [...source.moveType] : source.moveType;
    target.description = replaceRecommendationMoveTypeDescription(target.description || source.description || '', source.moveType);
  }
  [
    'passiveName',
    'passiveDescription',
    'passiveText',
    'note',
    'level',
    'team',
    'searchCatalogRole',
    'recommendedRole'
  ].forEach((field) => {
    if ((target[field] === undefined || target[field] === null || target[field] === '') && source[field] !== undefined) {
      target[field] = Array.isArray(source[field]) ? [...source[field]] : source[field];
    }
  });
  [
    'immunities',
    'passiveSuperEffectiveTypes'
  ].forEach((field) => {
    target[field] = mergeLowercaseUniqueValues(target[field], source[field]);
  });
  [
    'defenseByBossType',
    'defenseDamageFactorByBossType',
    'matchupOverrides'
  ].forEach((field) => {
    if (!target[field] && source[field]) target[field] = cloneBossSearchCatalogMap(source[field]);
  });

  applyImplicitRecommendationEnhancements(target);
  return target;
}

function loadBossSearchCatalogEntries() {
  if (bossSearchCatalogLoadPromise) return bossSearchCatalogLoadPromise;
  if (typeof fetch !== 'function') return Promise.resolve([]);

  bossSearchCatalogLoadPromise = fetch(getBossSearchCatalogUrl(), { cache: 'no-store' })
    .then((response) => {
      if (!response.ok) throw new Error(`Falha ao carregar pokemons.json (${response.status})`);
      return response.json();
    })
    .then((data) => {
      const pokemon = Array.isArray(data?.pokemon) ? data.pokemon : [];
      const seen = new Set();
      bossSearchCatalogEntries = pokemon
        .map(createBossSearchEntryFromCatalogPokemon)
        .filter((entry) => {
          const key = getRecommendationNameKey(entry);
          if (!key || seen.has(key)) return false;
          seen.add(key);
          return true;
        });

      bossSearchCatalogVersion += 1;
      invalidateBossSearchCaches();
      if (speedsterSearchInput && document.activeElement === speedsterSearchInput) {
        scheduleSearchResultsRender(speedsterSearchInput.value || '');
      }
      return bossSearchCatalogEntries;
    })
    .catch((error) => {
      console.error('Nao foi possivel carregar os Pokemon da busca de bosses.', error);
      bossSearchCatalogEntries = [];
      bossSearchCatalogVersion += 1;
      invalidateBossSearchCaches();
      return [];
    });

  return bossSearchCatalogLoadPromise;
}

function ensureBossSearchCatalogEntriesLoading() {
  if (bossSearchCatalogEntries.length || bossSearchCatalogLoadPromise) {
    return bossSearchCatalogLoadPromise || Promise.resolve(bossSearchCatalogEntries);
  }
  return loadBossSearchCatalogEntries();
}

function getRecommendedSpeedsters() {
  const cacheKey = `${activeBossMode}|${bossSearchCatalogVersion}`;
  if (bossSearchRecommendedCache.has(cacheKey)) {
    return bossSearchRecommendedCache.get(cacheKey);
  }

  const map = new Map();

  getActiveBossesData().forEach((boss) => {
    Object.values(boss.clans || {}).forEach((clanData) => {
      getAllRecommendedForClan(boss, clanData).forEach((poke) => {
        const key = getRecommendationNameKey(poke);
        if (!key) return;
        if (!map.has(key)) {
          map.set(key, {
            ...poke,
            bossEntries: []
          });
        } else {
          const existing = map.get(key);
          if (!existing.image && poke.image) existing.image = poke.image;
          if ((!Array.isArray(existing.types) || !existing.types.length) && Array.isArray(poke.types)) {
            existing.types = [...poke.types];
          }
          if (!existing.moveType && poke.moveType) existing.moveType = poke.moveType;
        }

        const entry = map.get(key);
        entry.bossEntries.push({
          bossName: boss.name,
          bossData: boss,
          sourceClan: clanData.label || '',
          sourceBossTier: normalizeTierKey(poke.tier)
        });
      });
    });
  });

  bossSearchCatalogEntries.forEach((entry) => {
    const key = getRecommendationNameKey(entry);
    if (!key) return;
    if (map.has(key)) {
      mergeBossSearchCatalogEntryIntoResult(map.get(key), entry);
    } else {
      map.set(key, {
        ...cloneRolePickConfig(entry),
        bossEntries: []
      });
    }
  });

  const recommended = Array.from(map.values()).sort((a, b) => String(a.name || '').localeCompare(String(b.name || ''), 'pt-BR'));
  bossSearchRecommendedCache.set(cacheKey, recommended);
  return recommended;
}

function getAvailableBossSearchPokemon() {
  const cacheKey = `${activeBossMode}|${bossSearchCatalogVersion}`;
  if (bossSearchAvailableCache.has(cacheKey)) {
    return bossSearchAvailableCache.get(cacheKey);
  }

  const available = getRecommendedSpeedsters().filter(canActiveCatalogShowSearchPokemon);
  bossSearchAvailableCache.set(cacheKey, available);
  return available;
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

function scoreSpeedsterSearchMatch(speedster, normalizedQuery) {
  if (!normalizedQuery) return 0;

  const name = normalizeSpeedsterSearchText(speedster?.name);
  const base = getSpeedsterSearchBase(speedster);
  if (name === normalizedQuery) return 100;
  if (name.startsWith(normalizedQuery)) return 80;
  if (base.startsWith(normalizedQuery)) return 60;
  if (name.includes(normalizedQuery)) return 40;
  if (base.includes(normalizedQuery)) return 20;
  return 0;
}

function getLimitedSpeedsterSearchResults(entries, normalizedQuery) {
  const source = Array.isArray(entries) ? entries : [];
  const renderLimit = normalizedQuery ? BOSS_SEARCH_RENDER_LIMIT_QUERY : BOSS_SEARCH_RENDER_LIMIT_DEFAULT;
  if (!normalizedQuery) return source.slice(0, renderLimit);

  return source
    .map((entry) => ({ entry, score: scoreSpeedsterSearchMatch(entry, normalizedQuery) }))
    .filter((item) => item.score > 0)
    .sort((left, right) => (
      right.score - left.score
      || String(left.entry?.name || '').localeCompare(String(right.entry?.name || ''), 'pt-BR')
    ))
    .slice(0, renderLimit)
    .map((item) => item.entry);
}

function createBossSearchLimitStatus(visibleCount, totalCount) {
  const status = document.createElement('div');
  status.className = 'speedster-search-results-status';
  status.textContent = `Mostrando ${visibleCount} de ${totalCount}; refine a busca para ver os demais.`;
  return status;
}

function renderSearchResults(query = '') {
  if (!speedsterSearchResults || !speedsterSearchNoResults) return;
  if (!getActiveBossCatalog().searchEnabled) {
    hideSearchResults();
    return;
  }
  const q = normalizeSpeedsterSearchText(query);

  const availableSpeedsters = getAvailableBossSearchPokemon();
  const filtered = q
    ? availableSpeedsters.filter((st) => getSpeedsterSearchBase(st).includes(q))
    : availableSpeedsters;
  const visibleResults = getLimitedSpeedsterSearchResults(filtered, q);

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

  visibleResults.forEach((st) => {
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
      openSpeedsterBossesModal(st, { pushState: true });
      hideSearchResults();
    });

    speedsterSearchResults.appendChild(item);
  });

  if (filtered.length > visibleResults.length) {
    speedsterSearchResults.appendChild(createBossSearchLimitStatus(visibleResults.length, filtered.length));
  }
}

function hideSearchResults() {
  if (!speedsterSearchResults || !speedsterSearchNoResults) return;
  speedsterSearchResults.hidden = true;
  speedsterSearchNoResults.hidden = true;
}

function cancelScheduledSearchResultsRender() {
  if (!bossSearchRenderFrame) return;
  window.cancelAnimationFrame(bossSearchRenderFrame);
  bossSearchRenderFrame = 0;
}

function scheduleSearchResultsRender(query = '') {
  if (bossSearchRenderFrame) {
    window.cancelAnimationFrame(bossSearchRenderFrame);
  }
  bossSearchRenderFrame = window.requestAnimationFrame(() => {
    bossSearchRenderFrame = 0;
    renderSearchResults(query);
  });
}

function closeSearchPanel() {
  cancelScheduledSearchResultsRender();
  hideSearchResults();
}

function getSearchPokemonName(speedsterOrName) {
  return typeof speedsterOrName === 'string'
    ? speedsterOrName
    : speedsterOrName?.name;
}

function findSearchPokemonByName(speedsterName) {
  const nameKey = getRecommendationNameKey(speedsterName);
  if (!nameKey) return null;
  return getRecommendedSpeedsters().find((speedster) => getRecommendationNameKey(speedster) === nameKey) || null;
}

function isCatalogScoredSearchPokemon(speedsterOrName) {
  const speedster = typeof speedsterOrName === 'object' && speedsterOrName
    ? speedsterOrName
    : findSearchPokemonByName(speedsterOrName);
  return Boolean(speedster?.searchCatalogRole && bossSearchCatalogRoleMap[speedster.searchCatalogRole]);
}

function getCatalogSearchRole(speedsterOrName) {
  const speedster = typeof speedsterOrName === 'object' && speedsterOrName
    ? speedsterOrName
    : findSearchPokemonByName(speedsterOrName);
  const role = String(speedster?.searchCatalogRole || '').trim().toLowerCase();
  return Object.prototype.hasOwnProperty.call(bossSearchCatalogRoleMap, role) ? role : '';
}

function getAllowedCatalogSearchRolesForBoss(boss, mode = activeBossMode) {
  const normalizedMode = normalizeBossMode(mode) || 'hoopa';
  if (normalizedMode === 'champion' || normalizedMode === 'mew2') {
    return Object.keys(bossSearchCatalogRoleMap);
  }

  if (normalizedMode === 'mainquest') {
    return String(boss?.id || '').trim().toLowerCase() === 'mega-malamar'
      ? Object.keys(bossSearchCatalogRoleMap)
      : ['speedster'];
  }

  return ['speedster'];
}

function canBossCalculateCatalogSearchRole(boss, speedsterOrName, mode = activeBossMode) {
  const role = getCatalogSearchRole(speedsterOrName);
  if (!role) return true;
  return getAllowedCatalogSearchRolesForBoss(boss, mode).includes(role);
}

function getVisibleDpsPicksForBoss(boss, clanKey, clanData) {
  if (!boss || !clanData) return [];

  if (clanData?.roles) {
    return getVisibleRolePicksForBoss(activeBossMode, boss, clanKey, 'dps');
  }

  return getRecommendationGroupsForClan(boss, clanData)
    .flatMap((group) => rankRecommendedForBoss(group.boss || boss, group.recommended || [], { roleKey: 'dps' }));
}

function hasVisibleDpsRecommendationForBoss(boss, speedsterOrName) {
  const lower = String(getSearchPokemonName(speedsterOrName) || '').toLowerCase();
  if (!boss || !lower) return false;

  return Object.entries(boss.clans || {}).some(([clanKey, clanData]) => (
    getVisibleDpsPicksForBoss(boss, clanKey, clanData)
      .some((poke) => String(poke.name || '').toLowerCase() === lower)
  ));
}

function canActiveCatalogShowSearchPokemon(speedsterOrName) {
  const role = getCatalogSearchRole(speedsterOrName);
  if (role) {
    return getActiveBossesData().some((boss) => Boolean(scoreSearchPokemonForBoss(boss, speedsterOrName)));
  }
  return getActiveBossesData().some((boss) => hasVisibleDpsRecommendationForBoss(boss, speedsterOrName));
}

function getBossesForSpeedster(speedsterOrName) {
  if (isCatalogScoredSearchPokemon(speedsterOrName)) {
    return getActiveBossesData().filter((boss) => Boolean(scoreSearchPokemonForBoss(boss, speedsterOrName)));
  }

  return getActiveBossesData().filter((boss) => hasVisibleDpsRecommendationForBoss(boss, speedsterOrName));
}

function getSpeedsterTierForBoss(boss, speedsterName) {
  const lower = String(speedsterName || '').toLowerCase();
  let bestTier = '';
  for (const clanData of Object.values(boss.clans || {})) {
    getAllRecommendedForClan(boss, clanData).forEach((poke) => {
      if (String(poke.name || '').toLowerCase() === lower) {
        bestTier = pickBetterTier(bestTier, poke.tier);
      }
    });
  }
  return bestTier;
}

function getBossSearchScoringRefs(boss) {
  const groupsByKey = new Map();
  Object.values(boss?.clans || {}).forEach((clanData) => {
    getRecommendationGroupsForClan(boss, clanData).forEach((group) => {
      const ref = group?.boss || boss;
      const key = `${String(ref?.id || '').trim().toLowerCase()}::${getRecommendationNameKey(ref?.name || boss?.name)}`;
      if (!groupsByKey.has(key)) groupsByKey.set(key, ref);
    });
  });
  return groupsByKey.size ? Array.from(groupsByKey.values()) : [boss];
}

function createBossSearchScoringPick(speedsterOrName) {
  const source = typeof speedsterOrName === 'object' && speedsterOrName
    ? speedsterOrName
    : findSearchPokemonByName(speedsterOrName);
  if (!source) return null;

  const pick = cloneRolePickConfig(source);
  delete pick.tier;
  delete pick.tierLocked;
  pick.recommendedRole = normalizeRecommendationRoleKey(pick.recommendedRole)
    || bossSearchCatalogRoleMap[pick.searchCatalogRole]
    || 'dps';
  applyImplicitRecommendationEnhancements(pick);
  return pick;
}

function scoreSearchPokemonForBoss(boss, speedsterOrName) {
  if (!boss || !isCatalogScoredSearchPokemon(speedsterOrName)) return null;
  if (!canBossCalculateCatalogSearchRole(boss, speedsterOrName, activeBossMode)) return null;

  const pick = createBossSearchScoringPick(speedsterOrName);
  if (!pick) return null;
  const roleKey = pick.recommendedRole;

  return getBossSearchScoringRefs(boss)
    .map((bossRef) => scoreRecommendationForBoss(bossRef, cloneRolePickConfig(pick), { roleKey }))
    .filter((scored) => roleKey !== 'dps' || (typeof scored?._offense === 'number' && scored._offense > 1))
    .sort((left, right) => {
      const leftPriority = getRecommendationTierPriority(left?.tier);
      const rightPriority = getRecommendationTierPriority(right?.tier);
      if (leftPriority !== rightPriority) return leftPriority - rightPriority;
      if ((right?._score || 0) !== (left?._score || 0)) return (right?._score || 0) - (left?._score || 0);
      return String(left?.name || '').localeCompare(String(right?.name || ''));
    })[0] || null;
}

function getComputedSpeedsterTierInBoss(boss, speedsterOrName) {
  const speedsterName = getSearchPokemonName(speedsterOrName);
  const lower = String(speedsterName || '').toLowerCase();
  if (!boss || !speedsterName) return 'seminformacao';

  const scoredSearchPokemon = scoreSearchPokemonForBoss(boss, speedsterOrName);
  if (scoredSearchPokemon) {
    return normalizeTierKey(scoredSearchPokemon.tier);
  }

  const clansOrder = ['instinct', 'mystic', 'valor'];
  let bestTier = '';
  for (const clanKey of clansOrder) {
    const clanData = boss.clans?.[clanKey];
    const groups = getRecommendationGroupsForClan(boss, clanData);
    if (!groups.length) continue;

    groups.forEach((group) => {
      const ranked = rankRecommendedForBoss(group.boss, group.recommended, { roleKey: 'dps' });
      const found = ranked.find((poke) => String(poke.name || '').toLowerCase() === lower);
      if (found) {
        bestTier = pickBetterTier(bestTier, found.tier);
      }
    });
  }

  if (bestTier) return bestTier;

  // Alternativa para dataset estatico se nao for encontrado no ranking calculado.
  const staticTier = getSpeedsterTierForBoss(boss, speedsterName);
  return normalizeTierKey(staticTier);
}

function getTierUiLabel(tier = 'seminformacao') {
  const normalizedTier = normalizeTierKey(tier);
  return tierLabels[normalizedTier] || tierLabels.seminformacao;
}

function getBossResultEncounterLabel(boss) {
  if (activeBossMode === 'horizons' && typeof boss?.horizonsCategoryLabel === 'string' && boss.horizonsCategoryLabel.trim()) {
    return boss.horizonsCategoryLabel.trim();
  }

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
    card.dataset.tone = tone === 'count' ? tone : normalizeTierKey(tone);
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

function createSpeedsterBossResultCard(boss, speedsterOrName, precomputedTier = '') {
  const speedsterName = getSearchPokemonName(speedsterOrName);
  const tier = normalizeTierKey(precomputedTier || getComputedSpeedsterTierInBoss(boss, speedsterOrName));
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
  avatarImage.src = resolveBossAssetSrc(boss.image || `${boss.id}.png`);
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

function openSpeedsterBossesModal(speedster, options = {}) {
  const { pushState = true, skipRouteSync = false } = options || {};
  setBossModalLayout(false);
  currentBoss = null;
  activeBossSearchResult = speedster;
  const bosses = getBossesForSpeedster(speedster);
  const bossResults = bosses
    .map((boss) => ({
      boss,
      tier: normalizeTierKey(getComputedSpeedsterTierInBoss(boss, speedster))
    }))
    .sort((left, right) => {
      const leftPriority = getRecommendationTierPriority(left.tier);
      const rightPriority = getRecommendationTierPriority(right.tier);
      if (leftPriority !== rightPriority) return leftPriority - rightPriority;
      return String(left.boss?.name || '').localeCompare(String(right.boss?.name || ''), 'pt-BR');
    });
  const catalog = getActiveBossCatalog();
  const moveTypes = getBossMoveTypes(speedster);
  const bestTier = bossResults.reduce((best, entry) => pickBetterTier(best, entry.tier), '');
  const excelenteCount = bossResults.filter((entry) => entry.tier === 'excelente').length;

  modalTitle.textContent = `${speedster.name} (Pokemon)`;
  setModalChrome({
    bosses: [{ name: speedster.name, image: speedster.image }],
    showLocation: false,
    showLegend: true,
    showImages: true
  });
  setModalBossWeaknesses(null, { show: false });
  setModalSubtitleText(bosses.length > 0 ? `Usado por ${bosses.length} chefe(s)` : 'Não encontrado em nenhum chefe');

  const pokemonImgLeft = document.getElementById('modal-pokemon-img-left');
  const pokemonImgRight = document.getElementById('modal-pokemon-img');
  if (pokemonImgLeft) {
    pokemonImgLeft.src = resolveBossAssetSrc(speedster.image || '');
    pokemonImgLeft.alt = speedster.name;
  }
  if (pokemonImgRight) {
    pokemonImgRight.src = resolveBossAssetSrc(speedster.image || '');
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
    createSpeedsterSearchMetric('Melhor tier', getTierUiLabel(bestTier || 'seminformacao'), bestTier || 'seminformacao'),
    createSpeedsterSearchMetric('Tier excelente', excelenteCount > 0 ? `${excelenteCount}x` : '0x', excelenteCount > 0 ? 'excelente' : 'seminformacao')
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
    let renderedBossResults = 0;
    const appendBossResultsBatch = () => {
      const nextResults = bossResults.slice(renderedBossResults, renderedBossResults + BOSS_SEARCH_MODAL_RENDER_LIMIT);
      renderedBossResults += nextResults.length;

      nextResults.forEach(({ boss, tier }) => {
        list.appendChild(createSpeedsterBossResultCard(boss, speedster, tier));
      });

      if (renderedBossResults < bossResults.length) {
        const showMore = document.createElement('button');
        showMore.type = 'button';
        showMore.className = 'speedster-search-item speedster-search-results-show-more';
        showMore.textContent = `Mostrar mais ${Math.min(BOSS_SEARCH_MODAL_RENDER_LIMIT, bossResults.length - renderedBossResults)} (${bossResults.length - renderedBossResults} restantes)`;
        showMore.addEventListener('click', () => {
          showMore.remove();
          appendBossResultsBatch();
        });
        list.appendChild(showMore);
      }
    };
    appendBossResultsBatch();
  }

  shell.append(summary, list);
  modalBody.appendChild(shell);

  modal.setAttribute('data-open', 'true');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  syncSharedModalOpenState();
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

  if (skipRouteSync) {
    bossModalHistoryPushed = false;
  } else {
    syncBossSearchRouteOnOpen(pushState);
  }
}

function createRecommendationCard(poke, options = {}) {
  const { showDescription = true } = options;
  {
    const formatTypeLabel = (type) => type ? type.charAt(0).toUpperCase() + type.slice(1) : '';
    const moveTypes = parseMoveTypes(poke).length
      ? parseMoveTypes(poke)
      : normalizeMoveTypeValues(poke?._moveType);
    const tier = normalizeTierKey(poke.tier);
    const atk = typeof poke._offense === 'number' ? poke._offense.toFixed(2) : '-';
    const def = typeof poke._defenseWorst === 'number' ? poke._defenseWorst.toFixed(2) : '-';

    const createChip = (type, options = {}) => {
      if (!type) return null;

      const chip = document.createElement('div');
      chip.className = `speedster-reco-chip${options.move ? ' speedster-reco-chip--move' : ''}`;
      const titleLabel = options.titleLabel || options.label;
      chip.title = titleLabel ? `${titleLabel}: ${formatTypeLabel(type)}` : formatTypeLabel(type);

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
      metricLabel.textContent = formatRecommendationScoreLabel(label);

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

    const shinyComparison = getRecommendationShinyComparison(poke);
    const shinyTier = getRecommendationShinyTier(poke);
    const hasShinyPassiveVariant = hasRecommendationShinyPassiveVariant(poke);
    const shinyHoverPanel = createRecommendationShinyHoverPanel({
      panelClassName: 'speedster-reco-score-hover',
      headingClassName: 'speedster-reco-score-hover__heading',
      shinyTier,
      shinyComparison,
      hasShinyPassiveVariant,
      createMetric: createScoreMetric,
      tierModifierClass: 'speedster-reco-score-row--tier',
      atkModifierClass: 'speedster-reco-score-row--atk',
      defModifierClass: 'speedster-reco-score-row--def'
    });
    if (shinyHoverPanel) {
      card.classList.add('speedster-reco-card--has-hover-details');
      score.classList.add('speedster-reco-score--has-hover-details');
      score.tabIndex = 0;
      score.title = `${recommendationScoreTitle}${getRecommendationShinyTierChanges(poke, shinyTier) ? ' Este Pokemon muda de tier na versao shiny.' : ''} Passe o mouse sobre o card de ATK/DEF para ver os valores do shiny.`;
      if (shinyTier) {
        score.appendChild(createRecommendationShinyHoverIndicator('speedster-reco-score-indicator'));
      }
      score.appendChild(shinyHoverPanel);
    }

    const img = document.createElement('img');
    img.className = 'speedster-reco-image';
    img.src = resolveBossAssetSrc(poke.image);
    img.alt = poke.name;
    img.loading = 'lazy';
    const body = document.createElement('div');
    body.className = 'speedster-reco-body';

    const nameWrapper = document.createElement('div');
    nameWrapper.className = 'speedster-reco-name-wrapper';

    const tierDot = document.createElement('span');
    tierDot.className = `tier-dot tier-${tier}`;
    tierDot.setAttribute('aria-label', getTierUiLabel(tier));

    const nameEl = document.createElement('div');
    nameEl.className = 'speedster-reco-name';
    nameEl.textContent = poke.name;
    nameWrapper.append(tierDot, nameEl, createTierAssistBadge(tier, 'tier-assist-badge--reco'));

    const passiveInfo = getRecommendationDisplayPassiveInfo(poke);

    const chips = document.createElement('div');
    chips.className = 'speedster-reco-chip-list';

    if (moveTypes.length) {
      const moveGroup = document.createElement('div');
      moveGroup.className = 'speedster-reco-meta speedster-reco-meta--move';
      const moveLabel = document.createElement('div');
      moveLabel.className = 'speedster-reco-meta-label';
      moveLabel.textContent = 'Moveset';

      const moveRow = document.createElement('div');
      moveRow.className = 'speedster-reco-chip-row speedster-reco-chip-row--moves';
      moveTypes.slice(0, 2).forEach((type) => {
        const chip = createChip(type, { titleLabel: 'Moveset', move: true });
        if (chip) moveRow.appendChild(chip);
      });

      if (moveRow.childElementCount > 0) {
        moveGroup.append(moveLabel, moveRow);
        chips.appendChild(moveGroup);
      }
    }

    if (Array.isArray(poke.types) && poke.types.length) {
      const typeGroup = document.createElement('div');
      typeGroup.className = 'speedster-reco-meta';
      const typeLabel = document.createElement('div');
      typeLabel.className = 'speedster-reco-meta-label';
      typeLabel.textContent = 'Tipos';

      const typeRow = document.createElement('div');
      typeRow.className = 'speedster-reco-chip-row speedster-reco-chip-row--types';
      poke.types.slice(0, 2).forEach((type) => {
        const chip = createChip(type);
        if (chip) typeRow.appendChild(chip);
      });

      if (typeRow.childElementCount > 0) {
        typeGroup.append(typeLabel, typeRow);
        chips.appendChild(typeGroup);
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
  img.src = resolveBossAssetSrc(poke.image);
  img.alt = poke.name;
  img.loading = 'lazy';

  const nameWrapper = document.createElement('div');
  nameWrapper.className = 'speedster-reco-name-wrapper';

  const tier = normalizeTierKey(poke.tier);
  const tierDot = document.createElement('span');
  tierDot.className = `tier-dot tier-${tier}`;

  tierDot.setAttribute('aria-label', getTierUiLabel(tier));

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
  setModalSubtitleText('');

  // Marcar modal como exibindo Tochas para aplicar regras especificas de chrome
  try { modal.dataset.mode = 'tochas'; } catch (e) {}

  // Ocultar legenda de tier e imagens de canto especificamente no modal de Tochas
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
  syncSharedModalOpenState();

  // Garantir que o conteudo do modal use largura de roleboard para dar mais espaco a pagina embutida
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
      modalLocationBtn.onclick = locationImage
        ? () => showLocationOverlay(locationImage, { boss: currentBoss || bosses[0] || null })
        : null;
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
    pokemonImgLeft.src = leftImage ? resolveBossAssetSrc(leftImage) : '';
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
    pokemonImgRight.src = rightImage ? resolveBossAssetSrc(rightImage) : '';
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

  // Se o boss (fonte unica) estiver configurado como neutro, retornar marcador neutro
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
        // mantemos valor bruto para eventual depuracao ou logica futura
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

function getBossWeaknessSignature(weaknesses = []) {
  return (Array.isArray(weaknesses) ? weaknesses : [])
    .map((item) => {
      const multiplier = Number.isFinite(item?.multiplier)
        ? Number(item.multiplier).toFixed(4)
        : 'na';
      return `${String(item?.type || '').trim().toLowerCase()}:${multiplier}`;
    })
    .join('|');
}

function dedupeBossWeaknessEntries(entries = []) {
  const deduped = new Map();

  (Array.isArray(entries) ? entries : []).forEach((entry, index) => {
    const weaknesses = Array.isArray(entry?.weaknesses) ? entry.weaknesses : [];
    const signature = getBossWeaknessSignature(weaknesses);
    if (!signature) return;

    if (!deduped.has(signature)) {
      deduped.set(signature, {
        ...entry,
        names: entry?.name ? [entry.name] : [],
        order: index
      });
      return;
    }

    const current = deduped.get(signature);
    const nextName = String(entry?.name || '').trim();
    if (nextName && !current.names.includes(nextName)) {
      current.names.push(nextName);
      current.name = current.names.join(' + ');
    }
  });

  return Array.from(deduped.values())
    .sort((left, right) => left.order - right.order)
    .map(({ order, ...entry }) => entry);
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
  const renderedEntries = dedupeBossWeaknessEntries(
    entries
      .map((entry) => ({
        ...entry,
        weaknesses: getWeaknessesForBossEntry(entry)
      }))
      .filter((entry) => entry.weaknesses.length)
  );

  if (!renderedEntries.length) {
    // Mostrar badge neutro mesmo quando nao ha fraquezas explicitas
    if (neutralBadge) {
      neutralBadge.hidden = !anyNeutralEntry;
      if (neutralBadge.hidden) neutralBadge.setAttribute('aria-hidden', 'true'); else neutralBadge.setAttribute('aria-hidden', 'false');
    }
    if (!anyNeutralEntry) {
      hideBossWeaknessPanel();
    }
    return;
  }

  // Se houver entradas reais de fraqueza, ocultar o badge neutro.
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
        const typeColor = getBossTypeUiColor(item.type);
        chip.style.setProperty('--type-color', typeColor);
        chip.style.setProperty('--type-color-rgb', bossHexToRgb(typeColor));

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

function openModalWithAnimation(options = {}) {
  setBossModalOverlayParent(options?.overlayParent);
  modal.setAttribute('data-open', 'true');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  syncSharedModalOpenState();

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
  card.dataset.tier = normalizeTierKey(poke.tier);
  if (poke.note) {
    card.title = poke.note;
  }

  const media = document.createElement('div');
  media.className = 'boss-role-pick-media';

  const img = document.createElement('img');
  img.className = 'boss-role-pick-image';
  img.src = resolveBossAssetSrc(poke.image);
  img.alt = poke.name;
  img.loading = 'lazy';
  const moveTypes = parseMoveTypes(poke).length
    ? parseMoveTypes(poke)
    : normalizeMoveTypeValues(poke._moveType || (Array.isArray(poke.types) ? poke.types[0] : null));

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
  tierDot.className = `tier-dot tier-${normalizeTierKey(poke.tier)}`;
  tierDot.setAttribute('aria-label', getTierUiLabel(poke.tier));

  const name = document.createElement('div');
  name.className = 'boss-role-pick-name';
  name.textContent = poke.name;
  name.title = poke.note ? `${poke.name} - ${poke.note}` : poke.name;

  nameWrap.append(tierDot, name, createTierAssistBadge(poke.tier, 'tier-assist-badge--role'));
  const passiveInfo = getRecommendationDisplayPassiveInfo(poke);

  const score = document.createElement('div');
  score.className = 'boss-role-pick-score';
  score.title = recommendationScoreTitle;

  const atkRow = document.createElement('div');
  atkRow.className = 'boss-role-pick-score-row boss-role-pick-score-row--atk';
  const atkLabel = document.createElement('span');
  atkLabel.className = 'boss-role-pick-score-label';
  atkLabel.textContent = formatRecommendationScoreLabel('ATK');
  const atkValue = document.createElement('span');
  atkValue.className = 'boss-role-pick-score-value';
  atkValue.textContent = typeof poke._offense === 'number' ? poke._offense.toFixed(2) : '-';
  atkRow.append(atkLabel, atkValue);

  const defRow = document.createElement('div');
  defRow.className = 'boss-role-pick-score-row boss-role-pick-score-row--def';
  const defLabel = document.createElement('span');
  defLabel.className = 'boss-role-pick-score-label';
  defLabel.textContent = formatRecommendationScoreLabel('DEF');
  const defValue = document.createElement('span');
  defValue.className = 'boss-role-pick-score-value';
  defValue.textContent = typeof poke._defenseWorst === 'number' ? poke._defenseWorst.toFixed(2) : '-';
  defRow.append(defLabel, defValue);

  score.append(atkRow, defRow);
  const shinyComparison = getRecommendationShinyComparison(poke);
  const shinyTier = getRecommendationShinyTier(poke);
  const hasShinyPassiveVariant = hasRecommendationShinyPassiveVariant(poke);
  const shinyHoverPanel = createRecommendationShinyHoverPanel({
    panelClassName: 'boss-role-pick-score-hover',
    headingClassName: 'boss-role-pick-score-hover__heading',
    shinyTier,
    shinyComparison,
    hasShinyPassiveVariant,
    createMetric: (label, value, modifierClass) => {
      const row = document.createElement('div');
      row.className = `boss-role-pick-score-row ${modifierClass}`;

      const metricLabel = document.createElement('span');
      metricLabel.className = 'boss-role-pick-score-label';
      metricLabel.textContent = formatRecommendationScoreLabel(label);

      const metricValue = document.createElement('span');
      metricValue.className = 'boss-role-pick-score-value';
      metricValue.textContent = value;

      row.append(metricLabel, metricValue);
      return row;
    },
    tierModifierClass: 'boss-role-pick-score-row--tier',
    atkModifierClass: 'boss-role-pick-score-row--atk',
    defModifierClass: 'boss-role-pick-score-row--def'
  });
  if (shinyHoverPanel) {
    card.classList.add('boss-role-pick--has-hover-details');
    score.classList.add('boss-role-pick-score--has-hover-details');
    score.tabIndex = 0;
    score.title = `${recommendationScoreTitle}${getRecommendationShinyTierChanges(poke, shinyTier) ? ' Este Pokemon muda de tier na versao shiny.' : ''} Passe o mouse sobre o card de ATK/DEF para ver os valores do shiny.`;
    if (shinyTier) {
      score.appendChild(createRecommendationShinyHoverIndicator('boss-role-pick-score-indicator'));
    }
    score.appendChild(shinyHoverPanel);
  }
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

  moveTypes.slice(0, 2).forEach((moveType) => {
    const moveChip = document.createElement('span');
    moveChip.className = 'boss-role-pick-chip boss-role-pick-chip--move';
    getBossTypeIcons([moveType]).forEach((icon) => moveChip.appendChild(icon));

    const moveValue = document.createElement('span');
    moveValue.textContent = formatTypeLabel(moveType);

    moveChip.append(moveValue);
    moveRow.appendChild(moveChip);
  });

  if (moveRow.childElementCount > 0) {
    chips.appendChild(moveGroup);
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

function openRoleBossModal(boss, options = {}) {
  const { pushState = true, skipRouteSync = false } = options || {};
  setBossModalLayout(true);
  currentBoss = boss;
  activeBossSearchResult = null;
  modalTitle.textContent = boss.name;
  setModalSubtitleText('');
  setModalChrome({
    bosses: [{ name: boss.name, image: boss.image }],
    showLocation: false,
    showLegend: true,
    showImages: true
  });
  setModalBossWeaknesses(boss);

  // Adicionar botao "Tochas" apenas para Mewtwo (manter UI limpa para os demais)
  try {
    const existingTochas = modal?.querySelector('.speedster-modal-tochas-btn');
    if (String(boss.id || '').toLowerCase() === 'mewtwo') {
      const tb = ensureModalTochasButton();
      if (tb) tb.onclick = (ev) => { ev.stopPropagation(); openTochasInModal(); };
    } else if (existingTochas) {
      existingTochas.remove();
    }
  } catch (e) {
    // Falhar silenciosamente para evitar quebrar o comportamento do modal
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
    icon.src = resolveBossAssetSrc(clanIcons[clanKey] || '');
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
      const picks = getVisibleRolePicksForBoss(activeBossMode, boss, clanKey, roleKey);
      if (activeBossMode === 'mainquest' && !picks.length) return;

      const column = document.createElement('div');
      column.className = 'boss-role-column';
      column.dataset.role = roleKey;

      const head = document.createElement('div');
      head.className = 'boss-role-column-head';

      const label = document.createElement('span');
      label.className = 'boss-role-label';
      label.textContent = getRoleboardRoleDisplayLabel(roleKey);

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
  openModalWithAnimation(options);
  if (skipRouteSync) {
    bossModalHistoryPushed = false;
  } else {
    syncBossModalRouteOnOpen(pushState);
  }
}

function openModal(speedster) {
  currentBoss = speedster;
  activeBossSearchResult = null;
  const bosses = Array.isArray(speedster.bosses) ? speedster.bosses : [{ name: speedster.name, image: speedster.image }];
  const bossNames = bosses.map(b => b.name).join(' + ');
  modalTitle.textContent = bossNames;
  setModalSubtitleText('');

  // Adicionar/atualizar botao de local dentro do header do modal
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
    modalLocationBtn.onclick = () => showLocationOverlay(getBossLocationImageSource(speedster), { boss: speedster });
  }

  const pokemonImgLeft = document.getElementById('modal-pokemon-img-left');
  const pokemonImgRight = document.getElementById('modal-pokemon-img');

  // Se o boss representa uma dupla, mostrar ambos os bosses nas imagens do modal.
  const leftImage = bosses[0]?.image || speedster.image;
  const rightImage = bosses[1]?.image || speedster.image;
  const leftAlt = bosses[0]?.name || speedster.name;
  const rightAlt = bosses[1]?.name || speedster.name;

  if (pokemonImgLeft) {
    pokemonImgLeft.src = resolveBossAssetSrc(leftImage);
    pokemonImgLeft.alt = leftAlt;
  }
  if (pokemonImgRight) {
    pokemonImgRight.src = resolveBossAssetSrc(rightImage);
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
    icon.src = resolveBossAssetSrc(clanIcons[clanKey] || '');
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
        img.src = resolveBossAssetSrc(poke.image);
        img.alt = poke.name;
        img.loading = 'lazy';

        const nameWrapper = document.createElement('div');
        nameWrapper.className = 'speedster-reco-name-wrapper';

        const tier = normalizeTierKey(poke.tier);
        const tierDot = document.createElement('span');
        tierDot.className = `tier-dot tier-${tier}`;

        tierDot.setAttribute('aria-label', getTierUiLabel(tier));

        const nameEl = document.createElement('div');
        nameEl.className = 'speedster-reco-name';
        nameEl.textContent = poke.name;

        nameWrapper.append(tierDot, nameEl);

        // Mostrar pontuacao de ataque/defesa como badge pequeno (menos intrusivo no card)
        const score = document.createElement('div');
        score.className = 'speedster-reco-score';
        const atk = typeof poke._offense === 'number' ? poke._offense.toFixed(2) : '-';
        const def = typeof poke._defenseWorst === 'number' ? poke._defenseWorst.toFixed(2) : '-';
        score.textContent = `⚔️${atk}\n🛡️${def}`;
        // Anexar ao card para ficar no canto sem afetar o layout
        card.appendChild(score);

        // Icone de elemento para Pokemon recomendado
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
  syncSharedModalOpenState();

  if (typeof gsap !== 'undefined') {
    gsap.fromTo(
      modal.querySelector('.speedster-modal-content'),
      { opacity: 0, y: 40, scale: 0.96 },
      { opacity: 1, y: 0, scale: 1, duration: 0.35, ease: 'power2.out' }
    );
  }
}

// Renderizador dedicado de modal de boss usado pela aba speedsters.
function openBossModal(speedster) {
  setBossModalLayout(false);
  currentBoss = speedster;
  activeBossSearchResult = null;
  const bosses = Array.isArray(speedster.bosses) ? speedster.bosses : [{ name: speedster.name, image: speedster.image }];
  const bossNames = bosses.map((boss) => boss.name).join(' + ');
  modalTitle.textContent = bossNames;
  setModalSubtitleText('');
  setModalChrome({
    bosses,
    locationImage: resolveBossAssetSrc(speedster.locationImage || speedster.image),
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
    modalLocationBtn.onclick = () => showLocationOverlay(getBossLocationImageSource(speedster), { boss: speedster });
  }

  const pokemonImgLeft = document.getElementById('modal-pokemon-img-left');
  const pokemonImgRight = document.getElementById('modal-pokemon-img');
  const leftImage = bosses[0]?.image || speedster.image;
  const rightImage = bosses[1]?.image || speedster.image;
  const leftAlt = bosses[0]?.name || speedster.name;
  const rightAlt = bosses[1]?.name || speedster.name;

  if (pokemonImgLeft) {
    pokemonImgLeft.src = resolveBossAssetSrc(leftImage);
    pokemonImgLeft.alt = leftAlt;
  }
  if (pokemonImgRight) {
    pokemonImgRight.src = resolveBossAssetSrc(rightImage);
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
    icon.src = resolveBossAssetSrc(clanIcons[clanKey] || '');
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
        const ranked = rankRecommendedForBoss(group.boss, group.recommended, { roleKey: 'dps' });
        if (hasMultipleGroups) {
          const groupBlock = document.createElement('div');
          groupBlock.className = 'speedster-reco-group';

          const groupHeader = document.createElement('div');
          groupHeader.className = 'speedster-reco-group-header';

          const groupImage = document.createElement('img');
          groupImage.className = 'speedster-reco-group-boss';
          groupImage.src = resolveBossAssetSrc(group.bossImage || speedster.image);
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
  syncSharedModalOpenState();

  if (typeof gsap !== 'undefined') {
    gsap.fromTo(
      modal.querySelector('.speedster-modal-content'),
      { opacity: 0, y: 40, scale: 0.96 },
      { opacity: 1, y: 0, scale: 1, duration: 0.35, ease: 'power2.out' }
    );
  }
}

function openBossModalV2(speedster, options = {}) {
  const { pushState = true, skipRouteSync = false } = options || {};
  const activeCatalogVariant = getActiveBossCatalog().variant;
  if (activeCatalogVariant === 'roleboard' || activeCatalogVariant === 'horizons') {
    openRoleBossModal(speedster, options);
    return;
  }

  setBossModalLayout(true);
  currentBoss = speedster;
  activeBossSearchResult = null;
  const bosses = Array.isArray(speedster.bosses) ? speedster.bosses : [{ name: speedster.name, image: speedster.image }];
  const bossNames = bosses.map((boss) => boss.name).join(' + ');
  modalTitle.textContent = bossNames;
  setModalSubtitleText('');

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
    modalLocationBtn.onclick = () => showLocationOverlay(getBossLocationImageSource(speedster), { boss: speedster });
  }

  const pokemonImgLeft = document.getElementById('modal-pokemon-img-left');
  const pokemonImgRight = document.getElementById('modal-pokemon-img');
  const leftImage = bosses[0]?.image || speedster.image;
  const rightImage = bosses[1]?.image || speedster.image;
  const leftAlt = bosses[0]?.name || speedster.name;
  const rightAlt = bosses[1]?.name || speedster.name;

  if (pokemonImgLeft) {
    pokemonImgLeft.src = resolveBossAssetSrc(leftImage);
    pokemonImgLeft.alt = leftAlt;
  }
  if (pokemonImgRight) {
    pokemonImgRight.src = resolveBossAssetSrc(rightImage);
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
      image.src = resolveBossAssetSrc(choice.bossImage || speedster.image);
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
      icon.src = resolveBossAssetSrc(clanIcons[clanKey] || '');
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
        targetImage.src = resolveBossAssetSrc(activeGroup.bossImage || speedster.image);
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
        let ranked = rankRecommendedForBoss(activeGroup.boss, activeGroup.recommended || [], { roleKey: 'dps' });
        // Para bosses marcados com filterSolo, remover picks de tiers pior ou igual a 'aceitavel'
        if (speedster?.filterSolo) {
          const threshold = tierPriority.aceitavel ?? 3;
          ranked = (ranked || []).filter((p) => getRecommendationTierPriority(p?.tier) < threshold);
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

  setBossModalOverlayParent(options?.overlayParent);
  modal.setAttribute('data-open', 'true');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  syncSharedModalOpenState();

  if (typeof gsap !== 'undefined') {
    gsap.fromTo(
      modal.querySelector('.speedster-modal-content'),
      { opacity: 0, y: 40, scale: 0.96 },
      { opacity: 1, y: 0, scale: 1, duration: 0.35, ease: 'power2.out' }
    );
  }
  if (skipRouteSync) {
    bossModalHistoryPushed = false;
  } else {
    syncBossModalRouteOnOpen(pushState);
  }
}

function openBossModalByRouteSlug(mode, slug, options = {}) {
  const normalizedMode = normalizeBossMode(mode) || 'hoopa';
  const boss = findBossByRouteSlug(normalizedMode, slug);
  if (!boss) return false;

  if (activeBossMode !== normalizedMode) {
    setBossMode(normalizedMode, {
      syncUrl: false,
      render: options?.renderBossGrid !== false
    });
  }

  openBossModalV2(boss, options);
  return true;
}

window.openBossModalByRouteSlug = openBossModalByRouteSlug;

function openSpeedsterSearchResultByRouteSlug(mode, slug, options = {}) {
  const normalizedMode = normalizeBossMode(mode) || 'hoopa';
  const speedster = findSpeedsterSearchResultByRouteSlug(normalizedMode, slug);
  if (!speedster) return false;

  if (activeBossMode !== normalizedMode) {
    setBossMode(normalizedMode, {
      syncUrl: false,
      render: options?.renderBossGrid !== false
    });
  }

  openSpeedsterBossesModal(speedster, options);
  return true;
}

window.openSpeedsterSearchResultByRouteSlug = openSpeedsterSearchResultByRouteSlug;

function openBossLocationByRouteSlug(mode, slug, options = {}) {
  const { pushState = true } = options || {};
  const normalizedMode = normalizeBossMode(mode) || 'hoopa';
  const boss = findBossByRouteSlug(normalizedMode, slug);
  if (!boss) return false;

  if (activeBossMode !== normalizedMode) {
    setBossMode(normalizedMode, { syncUrl: false });
  }

  const locationImage = getBossLocationImageSource(boss);
  if (!locationImage) return false;
  showLocationOverlay(locationImage, { boss, pushState });
  return true;
}

window.openBossLocationByRouteSlug = openBossLocationByRouteSlug;

function openBossTutorialByRouteSlug(mode, slug, options = {}) {
  const normalizedMode = normalizeBossMode(mode) || 'hoopa';
  const boss = findBossByRouteSlug(normalizedMode, slug);
  if (!boss) return false;

  if (activeBossMode !== normalizedMode) {
    setBossMode(normalizedMode, { syncUrl: false });
  }

  return openBossTutorial(boss, {
    ...options,
    restoreUrl: options.restoreUrl || getBossDetailRouteUrl(boss, normalizedMode)
  });
}

window.openBossTutorialByRouteSlug = openBossTutorialByRouteSlug;

function closeBossTutorialModal(options = {}) {
  const { skipRouteRestore = false, skipFocusRestore = false } = options || {};
  if (!isBossTutorialModalOpen()) {
    activeBossTutorialBoss = null;
    bossTutorialHistoryPushed = false;
    bossTutorialPreviousUrl = '';
    return false;
  }

  window.closeSiteYouTubeModal({ skipFocusRestore, skipRouteRestore });
  return true;
}

window.closeBossTutorialModal = closeBossTutorialModal;

function closeModal(options = {}) {
  const { skipHistory = false } = options || {};
  if (skipHistory) {
    bossModalHistoryPushed = false;
    hideBossModalUi();
    return;
  }

  bossModalHistoryPushed = false;
  const content = modal.querySelector('.speedster-modal-content');
  const syncBaseRoute = () => {
    if (!skipHistory && typeof updateUrl === 'function') {
      try { updateUrl(); } catch (error) {}
    }
  };
  if (typeof gsap !== 'undefined') {
    gsap.to(content, {
      opacity: 0,
      y: 30,
      scale: 0.96,
      duration: 0.25,
      ease: 'power2.in',
      onComplete: () => {
        hideBossModalUi();
        syncBaseRoute();
      }
    });
  } else {
    hideBossModalUi();
    syncBaseRoute();
  }
}

window.closeBossModal = closeModal;

function getBossInteractiveMapQuery(boss) {
  const bossName = String(boss?.name || '').trim();
  return bossName.split(/\s*\+\s*/)[0].trim() || bossName;
}

function showLocationOverlay(src, options = {}) {
  const { boss = null, pushState = true, mapReady = false } = options || {};
  const mapPanel = document.getElementById('content-mapa-interativo');
  if (!mapPanel || !boss) return false;
  if (!mapReady && typeof window.ensureInteractiveMapPanelReady === 'function') {
    window.ensureInteractiveMapPanelReady()
      .then(() => showLocationOverlay(src, { ...options, mapReady: true }))
      .catch((error) => {
        console.error('Nao foi possivel carregar o mapa interativo.', error);
      });
    return true;
  }

  const previousUrl = isLocationOverlayOpen() && locationOverlayPreviousUrl
    ? locationOverlayPreviousUrl
    : getBossPreferredRestoreUrl(boss, activeBossMode);
  closeLocationOverlay({ skipHistory: true, skipRouteRestore: true });
  activeLocationBoss = isBossRouteableMode(activeBossMode)
    ? findBossByRouteSlug(activeBossMode, getBossRouteSlug(boss))
    : null;
  locationOverlayHistoryPushed = false;
  locationOverlayPreviousUrl = previousUrl;
  const overlay = document.createElement('div');
  overlay.className = 'location-overlay location-overlay--interactive-map';
  overlay.tabIndex = -1;

  const dialog = document.createElement('section');
  dialog.className = 'boss-map-dialog';
  dialog.setAttribute('role', 'dialog');
  dialog.setAttribute('aria-modal', 'true');
  dialog.setAttribute('aria-label', `Localização de ${boss.name || 'boss'} no mapa interativo`);

  const header = document.createElement('header');
  header.className = 'boss-map-dialog__header';
  const heading = document.createElement('div');
  heading.className = 'boss-map-dialog__heading';
  const eyebrow = document.createElement('span');
  eyebrow.textContent = 'Mapa interativo';
  const title = document.createElement('strong');
  title.textContent = boss.name || 'Localização do boss';
  heading.append(eyebrow, title);

  const close = document.createElement('button');
  close.type = 'button';
  close.className = 'boss-map-dialog__close';
  close.setAttribute('aria-label', 'Fechar mapa interativo');
  close.textContent = '×';
  close.addEventListener('click', () => closeLocationOverlay());
  header.append(heading, close);

  const body = document.createElement('div');
  body.className = 'boss-map-dialog__body';
  const originalParent = mapPanel.parentNode;
  const originalNextSibling = mapPanel.nextSibling;
  const wasHidden = mapPanel.hidden;
  mapPanel.hidden = false;
  mapPanel.classList.add('interactive-map-modal-panel');
  body.appendChild(mapPanel);
  dialog.append(header, body);
  overlay.appendChild(dialog);
  overlay._interactiveMapMount = { mapPanel, originalParent, originalNextSibling, wasHidden };

  overlay.addEventListener('click', (event) => {
    if (event.target === overlay) {
      closeLocationOverlay();
    }
  });

  overlay.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      event.stopPropagation();
      closeLocationOverlay();
    }
  });

  document.body.appendChild(overlay);
  overlay.focus({ preventScroll: true });
  Promise.resolve(typeof window.initInteractiveMapPage === 'function'
    ? window.initInteractiveMapPage()
    : false)
    .then(() => {
      if (!overlay.isConnected) return false;
      const mapOptions = {
        zoom: Number.isFinite(Number(boss.mapZoom)) ? Number(boss.mapZoom) : 1.5,
        image: resolveBossAssetSrc(boss.image || ''),
        imageAlt: boss.name || ''
      };
      if (boss.mapMarkerId && typeof window.focusInteractiveMapMarker === 'function') {
        return window.focusInteractiveMapMarker(boss.mapMarkerId, {
          ...mapOptions,
          isolate: true
        });
      }
      if (typeof window.focusInteractiveMapSearch !== 'function') return false;
      return window.focusInteractiveMapSearch(getBossInteractiveMapQuery(boss), {
        ...mapOptions,
        category: 'hoopa-portals'
      });
    })
    .catch((error) => {
      console.error('Nao foi possivel abrir o boss no mapa interativo.', error);
    });
  if (activeLocationBoss) {
    syncBossLocationRouteOnOpen(pushState);
  }
  return true;
}

function removeLocationOverlayElement(overlay) {
  if (!overlay) return;
  const mount = overlay._interactiveMapMount;
  if (mount?.mapPanel && mount?.originalParent) {
    mount.mapPanel.classList.remove('interactive-map-modal-panel');
    mount.mapPanel.hidden = Boolean(mount.wasHidden);
    if (mount.originalNextSibling && mount.originalNextSibling.parentNode === mount.originalParent) {
      mount.originalParent.insertBefore(mount.mapPanel, mount.originalNextSibling);
    } else {
      mount.originalParent.appendChild(mount.mapPanel);
    }
  }
  overlay.remove();
}

function closeLocationOverlay(options = {}) {
  const { skipRouteRestore = false } = options || {};
  const existing = document.querySelector('.location-overlay');
  if (!existing) {
    activeLocationBoss = null;
    locationOverlayHistoryPushed = false;
    locationOverlayPreviousUrl = '';
    return false;
  }

  const restoreUrl = locationOverlayPreviousUrl;
  locationOverlayHistoryPushed = false;
  activeLocationBoss = null;
  locationOverlayPreviousUrl = '';
  removeLocationOverlayElement(existing);
  if (!skipRouteRestore) {
    restoreBossRouteUrl(restoreUrl);
  }
  return true;
}

window.closeBossLocationOverlay = closeLocationOverlay;

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

  // Impedir que cliques dentro do painel cheguem ao manipulador de clique do documento
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
    ensureBossSearchCatalogEntriesLoading();
    if (value) scheduleSearchResultsRender(value);
    else scheduleSearchResultsRender('');
  });

  speedsterSearchInput.addEventListener('input', (event) => {
    ensureBossSearchCatalogEntriesLoading();
    scheduleSearchResultsRender(event.target.value);
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

// Fechar painel de busca ao clicar fora
// (clique em qualquer lugar fora do painel fecha)
document.addEventListener('click', (event) => {
  const searchPanel = document.querySelector('.speedster-search-panel');
  if (!searchPanel || searchPanel.contains(event.target)) return;
  closeSearchPanel();
});

// Fechar painel de busca tambem com ESC
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



