// Arquivo gerado por scripts/generate_boss_recommendation_catalog.js.
// Fonte: pokemons/pokemons.json e pokemons/mega-pokemons.json.
(function exposeBossRecommendationCatalog(globalScope) {
  'use strict';

  globalScope.BossRecommendationCatalog = Object.freeze({
  "alakazam": {
    "sourceName": "Alakazam",
    "catalogRole": "speedster",
    "types": [
      "psychic"
    ],
    "moveTypes": [
      "psychic"
    ],
    "level": 95,
    "passiveName": "Synchronize",
    "passiveDescription": "Torna o Pokemon imune aos efeitos negativos Paralyze, Poison e Burn."
  },
  "dedenne": {
    "sourceName": "Dedenne",
    "catalogRole": "speedster",
    "specialTags": [
      "maniac"
    ],
    "types": [
      "electric",
      "fairy"
    ],
    "moveTypes": [
      "fairy"
    ],
    "level": 50
  },
  "dragonair": {
    "sourceName": "Dragonair",
    "catalogRole": "speedster",
    "specialTags": [
      "pre-ace"
    ],
    "types": [
      "dragon"
    ],
    "moveTypes": [
      "dragon"
    ],
    "level": 80,
    "passiveName": "Marvel Scale",
    "passiveDescription": "O Pokémon sofre menos dano de ataques super efetivos (0.5x).",
    "defenseDamageFactorByBossType": {
      "dragon": 0.5,
      "fairy": 0.5,
      "ice": 0.5
    }
  },
  "excadrill": {
    "sourceName": "Excadrill",
    "catalogRole": "speedster",
    "types": [
      "ground",
      "steel"
    ],
    "moveTypes": [
      "steel"
    ],
    "level": 80,
    "passiveName": "Mold Breaker",
    "passiveDescription": "O Pokemon ignora completamente as defesas do Pokemon adversario quebrando os moldes de sua resistencia. Excadrill causa dano super efetivo ao tipo Steel.",
    "passiveSuperEffectiveTypes": [
      "steel"
    ]
  },
  "lurantis": {
    "sourceName": "Lurantis",
    "catalogRole": "speedster",
    "specialTags": [
      "maniac"
    ],
    "types": [
      "grass"
    ],
    "moveTypes": [
      "bug"
    ],
    "level": 80
  },
  "megaexcadrill": {
    "sourceName": "Mega Excadrill",
    "catalogRole": "speedster",
    "subFunctions": [
      "Area Pull"
    ],
    "types": [
      "ground",
      "steel"
    ],
    "moveTypes": [
      "ground"
    ],
    "level": 80,
    "passiveDescription": "Rock Head: torna o Pokémon resistente a golpes do tipo FIRE."
  },
  "marowak": {
    "sourceName": "Marowak",
    "catalogRole": "speedster",
    "types": [
      "ground"
    ],
    "moveTypes": [
      "ground"
    ],
    "level": 50
  },
  "megagardevoir": {
    "sourceName": "Mega Gardevoir",
    "catalogRole": "speedster",
    "types": [
      "psychic",
      "fairy"
    ],
    "moveTypes": [
      "fairy"
    ],
    "level": 95
  },
  "megaraichux": {
    "sourceName": "Mega Raichu X",
    "catalogRole": "speedster",
    "types": [
      "electric"
    ],
    "moveTypes": [
      "fighting"
    ],
    "level": 80,
    "passiveName": "Levitate",
    "passiveDescription": "O Pokemon e imune a danos do tipo Ground."
  },
  "megaraichuy": {
    "sourceName": "Mega Raichu Y",
    "catalogRole": "speedster",
    "types": [
      "electric"
    ],
    "moveTypes": [
      "electric"
    ],
    "level": 80,
    "passiveName": "Resolute Heart",
    "passiveDescription": "Os ataques do usuario causam dano super efetivo a qualquer Pokemon que possua a tipagem Flying.",
    "passiveSuperEffectiveTypes": [
      "flying"
    ]
  },
  "megasceptile": {
    "sourceName": "Mega Sceptile",
    "catalogRole": "speedster",
    "types": [
      "grass",
      "dragon"
    ],
    "moveTypes": [
      "grass"
    ],
    "level": 80,
    "passiveName": "Lightning Rod",
    "passiveDescription": "O Pokemon se torna imune a danos do tipo Electric."
  },
  "pikachu": {
    "sourceName": "Pikachu",
    "catalogRole": "speedster",
    "types": [
      "electric"
    ],
    "moveTypes": [
      "electric"
    ],
    "level": 50,
    "passiveText": "Passiva: Resolute Heart: causa dano super efetivo em qualquer pokemon do tipo Flying.",
    "passiveSuperEffectiveTypes": [
      "flying"
    ]
  },
  "rosasserperior": {
    "sourceName": "Rosa's Serperior",
    "catalogRole": "speedster",
    "specialTags": [
      "pack",
      "shiny"
    ],
    "types": [
      "grass"
    ],
    "moveTypes": [
      "grass"
    ],
    "level": 100,
    "passiveName": "Royal Garden",
    "passiveDescription": "O Pokemon torna-se capaz de causar dano super efetivo a qualquer Pokemon do tipo Dragon.",
    "passiveSuperEffectiveTypes": [
      "dragon"
    ],
    "matchupOverrides": {
      "mega-tyranitar": {
        "offense": 2,
        "defenseByBossType": {
          "ground": 0.5
        }
      }
    }
  },
  "serperior": {
    "sourceName": "Serperior",
    "catalogRole": "speedster",
    "types": [
      "grass"
    ],
    "moveTypes": [
      "grass"
    ],
    "level": 80,
    "passiveName": "Royal Garden",
    "passiveDescription": "O Pokemon torna-se capaz de causar dano super efetivo a qualquer Pokemon do tipo Dragon.",
    "passiveSuperEffectiveTypes": [
      "dragon"
    ]
  },
  "salazzle": {
    "sourceName": "Salazzle",
    "catalogRole": "speedster",
    "specialTags": [
      "maniac"
    ],
    "types": [
      "poison",
      "fire"
    ],
    "moveTypes": [
      "fire"
    ],
    "level": 80
  },
  "seviper": {
    "sourceName": "Seviper",
    "catalogRole": "speedster",
    "types": [
      "poison"
    ],
    "moveTypes": [
      "poison"
    ],
    "level": 80,
    "passiveName": "Shed Skin",
    "passiveDescription": "Seviper limpa os efeitos negativos a cada 12 segundos."
  },
  "shiftry": {
    "sourceName": "Shiftry",
    "catalogRole": "speedster",
    "types": [
      "grass",
      "dark"
    ],
    "moveTypes": [
      "dark"
    ],
    "level": 80
  },
  "venusaurtwo": {
    "sourceName": "VenusaurTwo",
    "catalogRole": "speedster",
    "specialTags": [
      "mewtwo-solo"
    ],
    "types": [
      "grass",
      "poison"
    ],
    "moveTypes": [
      "grass"
    ],
    "level": 100
  },
  "electabuzzchargedbatteryform": {
    "sourceName": "Electabuzz Charged Battery Form",
    "catalogRole": "striker",
    "types": [
      "electric"
    ],
    "moveTypes": [
      "electric"
    ],
    "level": 80
  },
  "marowakthickclubform": {
    "sourceName": "Marowak Thick Club Form",
    "catalogRole": "striker",
    "types": [
      "ground"
    ],
    "moveTypes": [
      "ground"
    ],
    "level": 50
  },
  "tatsugirisplashpartnerform": {
    "sourceName": "Tatsugiri Splash Partner Form",
    "catalogRole": "striker",
    "types": [
      "dragon",
      "water"
    ],
    "moveTypes": [
      "water"
    ],
    "level": 95
  },
  "ferrothorn": {
    "sourceName": "Ferrothorn",
    "catalogRole": "striker",
    "types": [
      "grass",
      "steel"
    ],
    "moveTypes": [
      "steel"
    ],
    "level": 80
  },
  "galladeshiningbladeform": {
    "sourceName": "Gallade Shining Blade Form",
    "catalogRole": "striker",
    "types": [
      "psychic",
      "fighting"
    ],
    "moveTypes": [
      "fighting"
    ],
    "level": 95
  },
  "krookodiledarkclawform": {
    "sourceName": "Krookodile Dark Claw Form",
    "catalogRole": "striker",
    "types": [
      "ground",
      "dark"
    ],
    "moveTypes": [
      "dark"
    ],
    "level": 95
  },
  "magnetonextramagnetform": {
    "sourceName": "Magneton Extra Magnet Form",
    "catalogRole": "striker",
    "types": [
      "electric",
      "steel"
    ],
    "moveTypes": [
      "steel"
    ],
    "level": 80
  },
  "shinyalolanraichu": {
    "sourceName": "Shiny Alolan Raichu",
    "catalogRole": "striker",
    "types": [
      "electric",
      "psychic"
    ],
    "moveTypes": [
      "psychic"
    ],
    "level": 100
  },
  "appletun": {
    "sourceName": "Appletun",
    "catalogRole": "defender",
    "types": [
      "grass",
      "dragon"
    ],
    "moveTypes": [
      "grass"
    ],
    "level": 80
  },
  "bayleef": {
    "sourceName": "Bayleef",
    "catalogRole": "defender",
    "types": [
      "grass"
    ],
    "moveTypes": [
      "grass"
    ],
    "level": 30
  },
  "chesnaught": {
    "sourceName": "Chesnaught",
    "catalogRole": "defender",
    "types": [
      "grass",
      "fighting"
    ],
    "moveTypes": [
      "grass"
    ],
    "level": 80,
    "passiveName": "Bulletproof",
    "passiveDescription": "O Pokemon torna-se imune a alguns ataques de alvo unico."
  },
  "chikorita": {
    "sourceName": "Chikorita",
    "catalogRole": "defender",
    "types": [
      "grass"
    ],
    "moveTypes": [
      "grass"
    ],
    "level": 5
  },
  "claydol": {
    "sourceName": "Claydol",
    "catalogRole": "defender",
    "types": [
      "ground",
      "psychic"
    ],
    "moveTypes": [
      "ground"
    ],
    "level": 80,
    "passiveName": "Force Cosmik",
    "passiveDescription": "A sua ligação transcendental com o cosmos torna a sua mente um vazio impenetrável, garantindo resistência contra ataques dos tipos Psychic e Ghost.",
    "defenseByBossType": {
      "psychic": 0.75,
      "ghost": 0.75
    },
    "shinyPassiveName": "Force Cosmik + Mystery Charge",
    "shinyPassiveDescription": "A sua ligação transcendental com o cosmos torna a sua mente um vazio impenetrável, garantindo resistência contra ataques dos tipos Psychic e Ghost.; A telecinese em seu corpo de barro gera um campo magnético, concedendo imunidade a ataques do tipo Ground.",
    "shinyImmunities": [
      "ground"
    ]
  },
  "goodra": {
    "sourceName": "Goodra",
    "catalogRole": "defender",
    "specialTags": [
      "ace"
    ],
    "types": [
      "dragon"
    ],
    "moveTypes": [
      "water"
    ],
    "level": 100,
    "passiveName": "Gooey",
    "passiveDescription": "Sua gosma a torna resistente contra ataques do tipo dragon.",
    "defenseByBossType": {
      "dragon": 0.5
    }
  },
  "grumpig": {
    "sourceName": "Grumpig",
    "catalogRole": "defender",
    "types": [
      "psychic"
    ],
    "moveTypes": [
      "dark"
    ],
    "level": 80
  },
  "hippowdonfemale": {
    "sourceName": "Hippowdon Female",
    "catalogRole": "defender",
    "types": [
      "ground"
    ],
    "moveTypes": [
      "ground"
    ],
    "level": 95
  },
  "magnezone": {
    "sourceName": "Magnezone",
    "catalogRole": "defender",
    "types": [
      "electric",
      "steel"
    ],
    "moveTypes": [
      "steel"
    ],
    "level": 95
  },
  "tangrowth": {
    "sourceName": "Tangrowth",
    "catalogRole": "defender",
    "specialTags": [
      "boss"
    ],
    "types": [
      "grass"
    ],
    "moveTypes": [
      "grass"
    ],
    "level": 100
  },
  "toxapex": {
    "sourceName": "Toxapex",
    "catalogRole": "defender",
    "specialTags": [
      "maniac"
    ],
    "types": [
      "poison",
      "water"
    ],
    "moveTypes": [
      "poison"
    ],
    "level": 95
  },
  "weezing": {
    "sourceName": "Weezing",
    "catalogRole": "defender",
    "types": [
      "poison"
    ],
    "moveTypes": [
      "poison"
    ],
    "level": 50
  },
  "wobbuffet": {
    "sourceName": "Wobbuffet",
    "catalogRole": "defender",
    "types": [
      "psychic"
    ],
    "moveTypes": [
      "psychic"
    ],
    "level": 95,
    "defenseDamageFactorByBossType": {
      "psychic": 0.5
    }
  },
  "bellossom": {
    "sourceName": "Bellossom",
    "catalogRole": "supporter",
    "types": [
      "grass"
    ],
    "moveTypes": [
      "grass"
    ],
    "level": 50
  },
  "chingling": {
    "sourceName": "Chingling",
    "catalogRole": "supporter",
    "types": [
      "psychic"
    ],
    "moveTypes": [
      "psychic"
    ],
    "level": 50
  },
  "kadabra": {
    "sourceName": "Kadabra",
    "catalogRole": "supporter",
    "types": [
      "psychic"
    ],
    "moveTypes": [
      "psychic"
    ],
    "level": 65,
    "passiveName": "Synchronize",
    "passiveDescription": "Torna o Pokemon imune aos efeitos negativos: Paralyze, Poison e Burn. Tambem recebe dano inafetivo de ataques do tipo Ghost.",
    "defenseByBossType": {
      "ghost": 0.75
    }
  },
  "kirlia": {
    "sourceName": "Kirlia",
    "catalogRole": "supporter",
    "types": [
      "psychic",
      "fairy"
    ],
    "moveTypes": [
      "fairy"
    ],
    "level": 65
  },
  "pachirisu": {
    "sourceName": "Pachirisu",
    "catalogRole": "supporter",
    "types": [
      "electric"
    ],
    "moveTypes": [
      "electric"
    ],
    "level": 80,
    "passiveName": "Volt Absorb",
    "passiveDescription": "O Pokemon se torna imune a danos do tipo Electric."
  },
  "swalot": {
    "sourceName": "Swalot",
    "catalogRole": "supporter",
    "types": [
      "poison"
    ],
    "moveTypes": [
      "poison"
    ],
    "level": 80
  },
  "wynaut": {
    "sourceName": "Wynaut",
    "catalogRole": "supporter",
    "types": [
      "psychic"
    ],
    "moveTypes": [
      "psychic"
    ],
    "level": 65
  },
  "banette": {
    "sourceName": "Banette",
    "catalogRole": "speedster",
    "types": [
      "ghost"
    ],
    "moveTypes": [
      "ghost"
    ],
    "level": 80,
    "passiveName": "Red Eyes",
    "passiveDescription": "O Pokemon recebe dano inafetivo de ataques dos tipos Psychic e Ghost.",
    "defenseByBossType": {
      "psychic": 0.75,
      "ghost": 0.75
    }
  },
  "gengar": {
    "sourceName": "Gengar",
    "catalogRole": "attacker",
    "subFunctions": [
      "Finisher"
    ],
    "types": [
      "ghost",
      "poison"
    ],
    "moveTypes": [
      "ghost"
    ],
    "level": 95
  },
  "blastoisetwo": {
    "sourceName": "BlastoiseTwo",
    "catalogRole": "speedster",
    "specialTags": [
      "mewtwo-solo"
    ],
    "types": [
      "water"
    ],
    "moveTypes": [
      "water"
    ],
    "level": 100
  },
  "dachsbun": {
    "sourceName": "Dachsbun",
    "catalogRole": "speedster",
    "specialTags": [
      "maniac"
    ],
    "types": [
      "fairy"
    ],
    "moveTypes": [
      "fairy"
    ],
    "level": 80
  },
  "dewgong": {
    "sourceName": "Dewgong",
    "catalogRole": "speedster",
    "types": [
      "water",
      "ice"
    ],
    "moveTypes": [
      "ice"
    ],
    "level": 80
  },
  "drifloon": {
    "sourceName": "Drifloon",
    "catalogRole": "speedster",
    "types": [
      "ghost",
      "flying"
    ],
    "moveTypes": [
      "fire"
    ],
    "level": 50
  },
  "duraludon": {
    "sourceName": "Duraludon",
    "catalogRole": "speedster",
    "specialTags": [
      "pre-ace"
    ],
    "types": [
      "steel",
      "dragon"
    ],
    "moveTypes": [
      "electric"
    ],
    "level": 80
  },
  "greninja": {
    "sourceName": "Greninja",
    "catalogRole": "speedster",
    "types": [
      "water",
      "dark"
    ],
    "moveTypes": [
      "water"
    ],
    "level": 80
  },
  "hawlucha": {
    "sourceName": "Hawlucha",
    "catalogRole": "speedster",
    "specialTags": [
      "maniac"
    ],
    "types": [
      "fighting",
      "flying"
    ],
    "moveTypes": [
      "fighting"
    ],
    "level": 95,
    "passiveName": "Unburden / Limber",
    "passiveDescription": "Unburden: Aumenta a velocidade base do pokémon. Limber: Torna o Pokémon imune ao status Paralyze."
  },
  "kingdra": {
    "sourceName": "Kingdra",
    "catalogRole": "speedster",
    "types": [
      "water",
      "dragon"
    ],
    "moveTypes": [
      "dragon"
    ],
    "level": 95
  },
  "lombre": {
    "sourceName": "Lombre",
    "catalogRole": "speedster",
    "subFunctions": [
      "Silencer",
      "Finisher"
    ],
    "types": [
      "water",
      "grass"
    ],
    "moveTypes": [
      "grass"
    ],
    "level": 50
  },
  "mantine": {
    "sourceName": "Mantine",
    "catalogRole": "speedster",
    "types": [
      "water",
      "flying"
    ],
    "moveTypes": [
      "flying"
    ],
    "level": 95
  },
  "megaferaligatr": {
    "sourceName": "Mega Feraligatr",
    "catalogRole": "speedster",
    "types": [
      "water",
      "dragon"
    ],
    "moveTypes": [
      "dragon"
    ],
    "level": 80,
    "passiveName": "Torrent",
    "passiveDescription": "Ao chegar 33% ou menos de vida, no proximo ataque basico que receber, seu ataque especial aumenta em 30% durante 20 segundos."
  },
  "megagreninja": {
    "sourceName": "Mega Greninja",
    "catalogRole": "speedster",
    "types": [
      "water",
      "dark"
    ],
    "moveTypes": [
      "water"
    ],
    "level": 80
  },
  "megagyarados": {
    "sourceName": "Mega Gyarados",
    "catalogRole": "speedster",
    "types": [
      "water",
      "dark"
    ],
    "moveTypes": [
      "dark"
    ],
    "level": 80
  },
  "megahawlucha": {
    "sourceName": "Mega Hawlucha",
    "catalogRole": "speedster",
    "types": [
      "fighting",
      "flying"
    ],
    "moveTypes": [
      "fighting"
    ],
    "level": 95,
    "passiveName": "Unburden / Limber",
    "passiveDescription": "Unburden: Aumenta a velocidade base do pokémon. Limber: Torna o Pokémon imune ao status Paralyze."
  },
  "megalucario": {
    "sourceName": "Mega Lucario",
    "catalogRole": "attacker",
    "subFunctions": [
      "Stunner"
    ],
    "types": [
      "fighting",
      "steel"
    ],
    "moveTypes": [
      "fighting"
    ],
    "level": 80
  },
  "megalucarioz": {
    "sourceName": "Mega Lucario Z",
    "catalogRole": "speedster",
    "types": [
      "fighting",
      "steel"
    ],
    "moveTypes": [
      "steel"
    ],
    "level": 80
  },
  "megaskarmory": {
    "sourceName": "Mega Skarmory",
    "catalogRole": "speedster",
    "types": [
      "steel",
      "flying"
    ],
    "moveTypes": [
      "flying"
    ],
    "level": 80
  },
  "megastarmie": {
    "sourceName": "Mega Starmie",
    "catalogRole": "speedster",
    "types": [
      "water",
      "psychic"
    ],
    "moveTypes": [
      "psychic"
    ],
    "level": 80
  },
  "melonysfrosmoth": {
    "sourceName": "Melony's Frosmoth",
    "catalogRole": "speedster",
    "specialTags": [
      "pack"
    ],
    "naturalShiny": true,
    "types": [
      "ice",
      "bug"
    ],
    "moveTypes": [
      "ice"
    ],
    "level": 100,
    "matchupOverrides": {
      "mega-staraptor": {
        "defenseByBossType": {
          "fighting": 1,
          "flying": 0.5
        }
      }
    }
  },
  "lanturnburstlightform": {
    "sourceName": "Lanturn Burst Light Form",
    "catalogRole": "striker",
    "types": [
      "water",
      "electric"
    ],
    "moveTypes": [
      "electric"
    ],
    "level": 80
  },
  "piloswinemudstickform": {
    "sourceName": "Piloswine Mud Stick Form",
    "catalogRole": "striker",
    "types": [
      "ice",
      "ground"
    ],
    "moveTypes": [
      "ground"
    ],
    "level": 80
  },
  "seadraflappingbubblesform": {
    "sourceName": "Seadra Flapping Bubbles Form",
    "catalogRole": "striker",
    "types": [
      "water"
    ],
    "moveTypes": [
      "water"
    ],
    "level": 65
  },
  "sawk": {
    "sourceName": "Sawk",
    "catalogRole": "striker",
    "types": [
      "fighting"
    ],
    "moveTypes": [
      "fighting"
    ],
    "level": 95
  },
  "lucarioauraboneforme": {
    "sourceName": "Lucario Aura Bone Forme",
    "catalogRole": "striker",
    "types": [
      "fighting",
      "steel"
    ],
    "moveTypes": [
      "steel"
    ],
    "level": 95
  },
  "panchamdarkfistform": {
    "sourceName": "Pancham Dark Fist Form",
    "catalogRole": "striker",
    "types": [
      "fighting",
      "dark"
    ],
    "moveTypes": [
      "dark"
    ],
    "level": 65
  },
  "poliwrathchampionbeltform": {
    "sourceName": "Poliwrath Champion Belt Form",
    "catalogRole": "striker",
    "types": [
      "water",
      "fighting"
    ],
    "moveTypes": [
      "fighting"
    ],
    "level": 80
  },
  "shinyalolanninetales": {
    "sourceName": "Shiny Alolan Ninetales",
    "catalogRole": "striker",
    "types": [
      "ice",
      "fairy"
    ],
    "moveTypes": [
      "fairy"
    ],
    "level": 80
  },
  "shinyalolansandslash": {
    "sourceName": "Shiny Alolan Sandslash",
    "catalogRole": "striker",
    "types": [
      "ice",
      "steel"
    ],
    "moveTypes": [
      "ice"
    ],
    "level": 100
  },
  "orthworm": {
    "sourceName": "Orthworm",
    "catalogRole": "speedster",
    "specialTags": [
      "maniac"
    ],
    "types": [
      "steel"
    ],
    "moveTypes": [
      "ground"
    ],
    "level": 95
  },
  "qwilfish": {
    "sourceName": "Qwilfish",
    "catalogRole": "speedster",
    "types": [
      "water",
      "poison"
    ],
    "moveTypes": [
      "poison"
    ],
    "level": 50
  },
  "relicanth": {
    "sourceName": "Relicanth",
    "catalogRole": "speedster",
    "types": [
      "water",
      "rock"
    ],
    "moveTypes": [
      "rock"
    ],
    "level": 95
  },
  "seaking": {
    "sourceName": "Seaking",
    "catalogRole": "speedster",
    "types": [
      "water"
    ],
    "moveTypes": [
      "ground"
    ],
    "level": 50,
    "passiveName": "Lightning Rod",
    "passiveDescription": "O Pokemon se torna imune a danos do tipo Electric."
  },
  "aegislash": {
    "sourceName": "Aegislash (shield form)",
    "catalogRole": "defender",
    "specialTags": [
      "boss",
      "ranger"
    ],
    "types": [
      "steel",
      "ghost"
    ],
    "moveTypes": [
      "steel"
    ],
    "level": 100
  },
  "bronzong": {
    "sourceName": "Bronzong",
    "catalogRole": "defender",
    "types": [
      "steel",
      "psychic"
    ],
    "moveTypes": [
      "steel"
    ],
    "level": 80,
    "passiveName": "Levitate",
    "passiveDescription": "O Pokémon é imune a danos do tipo GROUND.",
    "immunities": [
      "ground"
    ],
    "shinyPassiveName": "Levitate + Protective Bell",
    "shinyPassiveDescription": "O Pokémon é imune a danos do tipo GROUND.; Sempre que o Shiny Bronzong utiliza o golpe Iron Defense, seu corpo ecoa como um sino. Esse som envolve todos os aliados proximos, garantindo a eles um bônus de 20% de Defesa durante 10 segundos."
  },
  "carracosta": {
    "sourceName": "Carracosta",
    "catalogRole": "defender",
    "specialTags": [
      "fossil"
    ],
    "types": [
      "water",
      "rock"
    ],
    "moveTypes": [
      "rock"
    ],
    "level": 95
  },
  "drifblim": {
    "sourceName": "Drifblim",
    "catalogRole": "all-rounder",
    "types": [
      "ghost",
      "flying"
    ],
    "moveTypes": [
      "flying"
    ],
    "level": 95
  },
  "dondozo": {
    "sourceName": "Dondozo",
    "catalogRole": "defender",
    "specialTags": [
      "maniac"
    ],
    "types": [
      "water"
    ],
    "moveTypes": [
      "water"
    ],
    "level": 95
  },
  "dusclops": {
    "sourceName": "Dusclops",
    "catalogRole": "defender",
    "types": [
      "ghost"
    ],
    "moveTypes": [
      "ghost"
    ],
    "level": 80,
    "passiveName": "Cursed Glare",
    "passiveDescription": "O olhar vazio deste Pokémon atua como um buraco negro para energias místicas, garantindo resistência contra ataques dos tipos Ghost e Psychic.",
    "defenseByBossType": {
      "ghost": 0.75,
      "psychic": 0.75
    }
  },
  "slowbro": {
    "sourceName": "Slowbro",
    "catalogRole": "defender",
    "types": [
      "water",
      "psychic"
    ],
    "moveTypes": [
      "psychic"
    ],
    "level": 80
  },
  "tentacruel": {
    "sourceName": "Tentacruel",
    "catalogRole": "defender",
    "types": [
      "water",
      "poison"
    ],
    "moveTypes": [
      "poison"
    ],
    "level": 80
  },
  "walrein": {
    "sourceName": "Walrein",
    "catalogRole": "defender",
    "types": [
      "ice",
      "water"
    ],
    "moveTypes": [
      "ice"
    ],
    "level": 95
  },
  "comfey": {
    "sourceName": "Comfey",
    "catalogRole": "supporter",
    "specialTags": [
      "maniac"
    ],
    "types": [
      "fairy"
    ],
    "moveTypes": [
      "fairy"
    ],
    "level": 80
  },
  "corsola": {
    "sourceName": "Corsola",
    "catalogRole": "supporter",
    "types": [
      "water",
      "rock"
    ],
    "moveTypes": [
      "rock"
    ],
    "level": 50
  },
  "misdreavus": {
    "sourceName": "Misdreavus",
    "catalogRole": "supporter",
    "types": [
      "ghost"
    ],
    "moveTypes": [
      "ghost"
    ],
    "level": 80,
    "passiveName": "Omnious Eyes",
    "passiveDescription": "O Pokemon recebe dano inafetivo de ataques do tipo Ghost.",
    "defenseByBossType": {
      "ghost": 0.75
    }
  },
  "politoed": {
    "sourceName": "Politoed",
    "catalogRole": "supporter",
    "types": [
      "water"
    ],
    "moveTypes": [
      "water"
    ],
    "level": 80
  },
  "smoochum": {
    "sourceName": "Smoochum",
    "catalogRole": "supporter",
    "types": [
      "ice",
      "psychic"
    ],
    "moveTypes": [
      "psychic"
    ],
    "level": 65
  },
  "vanilluxe": {
    "sourceName": "Vanilluxe",
    "catalogRole": "supporter",
    "types": [
      "ice"
    ],
    "moveTypes": [
      "ice"
    ],
    "level": 80
  },
  "absol": {
    "sourceName": "Absol",
    "catalogRole": "speedster",
    "types": [
      "dark"
    ],
    "moveTypes": [
      "dark"
    ],
    "level": 95,
    "passiveName": "Super Luck",
    "passiveDescription": "Ao atacar fisicamente tem chance de conceder um bonus de 20% de forca para a proxima habilidade. So pode ocorrer uma vez a cada 20 segundos."
  },
  "bouffalant": {
    "sourceName": "Bouffalant",
    "catalogRole": "speedster",
    "specialTags": [
      "maniac"
    ],
    "types": [
      "normal"
    ],
    "moveTypes": [
      "ground"
    ],
    "level": 80,
    "passiveName": "Curly Wall",
    "passiveDescription": "O Pokemon e imune a danos do tipo Electric.",
    "defenseByBossType": {
      "electric": 0
    }
  },
  "charizardtwo": {
    "sourceName": "CharizardTwo",
    "catalogRole": "speedster",
    "specialTags": [
      "mewtwo-solo"
    ],
    "types": [
      "fire",
      "flying"
    ],
    "moveTypes": [
      "fire"
    ],
    "level": 100
  },
  "gorgingcramorant": {
    "sourceName": "Gorging Cramorant",
    "catalogRole": "speedster",
    "specialTags": [
      "maniac"
    ],
    "types": [
      "flying",
      "water"
    ],
    "moveTypes": [
      "water"
    ],
    "level": 80,
    "passiveText": "Passiva: Gulp Missile: causa dano super efetivo em qualquer pokemon do tipo Flying.",
    "passiveSuperEffectiveTypes": [
      "flying"
    ]
  },
  "delphox": {
    "sourceName": "Delphox",
    "catalogRole": "speedster",
    "types": [
      "fire",
      "psychic"
    ],
    "moveTypes": [
      "fire"
    ],
    "level": 80,
    "shinyPassiveName": "Blaze",
    "shinyPassiveDescription": "Ao chegar 33% ou menos de vida, no proximo ataque basico que receber, seu ataque especial aumenta em 30% durante 20 segundos."
  },
  "farfetchd": {
    "sourceName": "Farfetch'd",
    "catalogRole": "speedster",
    "types": [
      "normal",
      "flying"
    ],
    "moveTypes": [
      "flying"
    ],
    "level": 50
  },
  "heracross": {
    "sourceName": "Heracross",
    "catalogRole": "speedster",
    "types": [
      "bug",
      "fighting"
    ],
    "moveTypes": [
      "fighting"
    ],
    "level": 95,
    "passiveName": "Guts",
    "passiveDescription": "O Pokemon se torna imune aos status Slow, Paralyze e Silence."
  },
  "kabutops": {
    "sourceName": "Kabutops",
    "catalogRole": "speedster",
    "specialTags": [
      "fossil"
    ],
    "types": [
      "rock",
      "water"
    ],
    "moveTypes": [
      "rock"
    ],
    "level": 95
  },
  "maysbeautifly": {
    "sourceName": "May's Beautifly",
    "catalogRole": "speedster",
    "specialTags": [
      "pack"
    ],
    "naturalShiny": true,
    "types": [
      "bug",
      "flying"
    ],
    "moveTypes": [
      "flying"
    ],
    "level": 100
  },
  "megaabsolz": {
    "sourceName": "Mega Absol Z",
    "catalogRole": "speedster",
    "types": [
      "dark"
    ],
    "moveTypes": [
      "dark",
      "fairy"
    ],
    "level": 95,
    "passiveName": "Super Luck",
    "passiveDescription": "Ao atacar fisicamente tem chance de conceder um bonus de 20% de forca para a proxima habilidade. So pode ocorrer uma vez a cada 20 segundos. Possui moveset Dark e um ataque que muda seu moveset para Fairy.",
    "defenseByBossType": {
      "bug": 1,
      "fighting": 1
    }
  },
  "megadelphox": {
    "sourceName": "Mega Delphox",
    "catalogRole": "speedster",
    "types": [
      "fire",
      "psychic"
    ],
    "moveTypes": [
      "fire"
    ],
    "level": 80
  },
  "megahoundoom": {
    "sourceName": "Mega Houndoom",
    "catalogRole": "speedster",
    "types": [
      "dark",
      "fire"
    ],
    "moveTypes": [
      "dark"
    ],
    "level": 95
  },
  "megascizor": {
    "sourceName": "Mega Scizor",
    "catalogRole": "speedster",
    "types": [
      "bug",
      "steel"
    ],
    "moveTypes": [
      "steel"
    ],
    "level": 95
  },
  "pyroarfemale": {
    "sourceName": "Pyroar Female",
    "catalogRole": "speedster",
    "types": [
      "fire",
      "normal"
    ],
    "moveTypes": [
      "grass"
    ],
    "level": 80,
    "passiveName": "Scorching Aura",
    "passiveDescription": "O Pokémon emite um calor extremo que evapora a água e reduz o solo ao seu redor em cinzas. Devido à intensidade dessa aura, o usuário recebe dano reduzido de ataques do tipo Water e Ground.",
    "defenseDamageFactorByBossType": {
      "water": 0.5,
      "ground": 0.5
    }
  },
  "raticate": {
    "sourceName": "Raticate",
    "catalogRole": "speedster",
    "types": [
      "normal"
    ],
    "moveTypes": [
      "dark"
    ],
    "level": 50
  },
  "ribombee": {
    "sourceName": "Ribombee",
    "catalogRole": "speedster",
    "specialTags": [
      "maniac"
    ],
    "types": [
      "bug",
      "fairy"
    ],
    "moveTypes": [
      "fairy"
    ],
    "level": 50
  },
  "scolipede": {
    "sourceName": "Scolipede",
    "catalogRole": "speedster",
    "subFunctions": [
      "Area Pull"
    ],
    "specialTags": [
      "maniac"
    ],
    "types": [
      "bug",
      "poison"
    ],
    "moveTypes": [
      "poison"
    ],
    "level": 80
  },
  "scyther": {
    "sourceName": "Scyther",
    "catalogRole": "speedster",
    "types": [
      "bug",
      "flying"
    ],
    "moveTypes": [
      "bug"
    ],
    "level": 80,
    "passiveName": "Steadfast",
    "passiveDescription": "Aumentos autoinfligidos de velocidade tambem aumentam special attack.",
    "shinyPassiveName": "Steadfast + Swarm",
    "shinyPassiveDescription": "Aumentos autoinfligidos de velocidade tambem aumentam special attack.; Ao chegar 33% ou menos de vida, no proximo ataque basico que receber, seu ataque especial aumenta em 30% durante 20 segundos."
  },
  "tauros": {
    "sourceName": "Tauros",
    "catalogRole": "speedster",
    "types": [
      "normal"
    ],
    "moveTypes": [
      "electric"
    ],
    "level": 80
  },
  "weavile": {
    "sourceName": "Weavile",
    "catalogRole": "speedster",
    "types": [
      "dark",
      "ice"
    ],
    "moveTypes": [
      "ice"
    ],
    "level": 95,
    "shinyPassiveName": "Keen Eye",
    "shinyPassiveDescription": "O Pokemon e imune ao status negativo de cegueira (BLIND)."
  },
  "binaclesplashpartnerform": {
    "sourceName": "Binacle Splash Partner Form",
    "catalogRole": "striker",
    "types": [
      "rock",
      "water"
    ],
    "moveTypes": [
      "water"
    ],
    "level": 65
  },
  "pupitardrillpupaform": {
    "sourceName": "Pupitar Drill Pupa Form",
    "catalogRole": "striker",
    "types": [
      "rock",
      "ground"
    ],
    "moveTypes": [
      "ground"
    ],
    "level": 80
  },
  "escavalier": {
    "sourceName": "Escavalier",
    "catalogRole": "striker",
    "types": [
      "bug",
      "steel"
    ],
    "moveTypes": [
      "steel"
    ],
    "level": 80
  },
  "vikavoltchargedelytraform": {
    "sourceName": "Vikavolt Charged Elytra Form",
    "catalogRole": "striker",
    "types": [
      "bug",
      "electric"
    ],
    "moveTypes": [
      "electric"
    ],
    "level": 80
  },
  "bisharpdarkbladeform": {
    "sourceName": "Bisharp Dark Blade Form",
    "catalogRole": "striker",
    "types": [
      "dark",
      "steel"
    ],
    "moveTypes": [
      "dark"
    ],
    "level": 80
  },
  "magmarlavacharcoalform": {
    "sourceName": "Magmar Lava Charcoal Form",
    "catalogRole": "striker",
    "types": [
      "fire"
    ],
    "moveTypes": [
      "fire"
    ],
    "level": 80
  },
  "probopassmininoseform": {
    "sourceName": "Probopass Mini Nose Form",
    "catalogRole": "striker",
    "types": [
      "rock"
    ],
    "moveTypes": [
      "steel"
    ],
    "level": 95
  },
  "shinyalolanmarowak": {
    "sourceName": "Shiny Alolan Marowak",
    "catalogRole": "striker",
    "types": [
      "fire",
      "ghost"
    ],
    "moveTypes": [
      "ghost"
    ],
    "level": 100
  },
  "shinyalolangolem": {
    "sourceName": "Shiny Alolan Golem",
    "catalogRole": "striker",
    "types": [
      "rock",
      "electric"
    ],
    "moveTypes": [
      "electric"
    ],
    "level": 80
  },
  "bastiodon": {
    "sourceName": "Bastiodon",
    "catalogRole": "defender",
    "specialTags": [
      "fossil"
    ],
    "types": [
      "rock",
      "steel"
    ],
    "moveTypes": [
      "steel"
    ],
    "level": 95
  },
  "lickitung": {
    "sourceName": "Lickitung",
    "catalogRole": "defender",
    "types": [
      "normal"
    ],
    "moveTypes": [
      "normal"
    ],
    "level": 65
  },
  "miltank": {
    "sourceName": "Miltank",
    "catalogRole": "defender",
    "types": [
      "normal"
    ],
    "moveTypes": [
      "ground"
    ],
    "level": 80,
    "passiveName": "Thick Fat",
    "passiveDescription": "O Pokemon recebe metade do dano de ataques do tipo Ice e Fire.",
    "defenseDamageFactorByBossType": {
      "ice": 0.5,
      "fire": 0.5
    },
    "shinyPassiveName": "Thick Fat + Scrappy",
    "shinyPassiveDescription": "O Pokemon recebe metade do dano de ataques do tipo Ice e Fire. Os ataques deste Pokemon causam dano super efetivo contra Pokemon do tipo Ghost."
  },
  "onix": {
    "sourceName": "Onix",
    "catalogRole": "defender",
    "types": [
      "rock",
      "ground"
    ],
    "moveTypes": [
      "rock"
    ],
    "level": 80
  },
  "orbeetle": {
    "sourceName": "Orbeetle",
    "catalogRole": "defender",
    "specialTags": [
      "maniac"
    ],
    "types": [
      "bug",
      "psychic"
    ],
    "moveTypes": [
      "psychic"
    ],
    "level": 80,
    "passiveName": "Swarm",
    "passiveDescription": "Ao chegar 33% ou menos de vida, no proximo ataque basico que receber, seu ataque especial aumenta em 30% durante 20 segundos."
  },
  "probopass": {
    "sourceName": "Probopass",
    "catalogRole": "defender",
    "types": [
      "rock",
      "steel"
    ],
    "moveTypes": [
      "steel"
    ],
    "level": 95
  },
  "sableye": {
    "sourceName": "Sableye",
    "catalogRole": "defender",
    "types": [
      "dark",
      "ghost"
    ],
    "moveTypes": [
      "ghost"
    ],
    "level": 80,
    "passiveName": "Stall",
    "passiveDescription": "Sableye tem chance de ficar invisivel por segundos ao atacar, isso aumenta o dano da sua proxima habilidade em 10%. Em contraparte, isso torna seu ataque fisico mais lento. Alem disso, o Pokemon recebe dano inafetivo de ataques do tipo Ghost.",
    "defenseByBossType": {
      "ghost": 0.75
    }
  },
  "shieldon": {
    "sourceName": "Shieldon",
    "catalogRole": "defender",
    "specialTags": [
      "fossil"
    ],
    "types": [
      "rock",
      "steel"
    ],
    "moveTypes": [
      "rock"
    ],
    "level": 65
  },
  "shuckle": {
    "sourceName": "Shuckle",
    "catalogRole": "defender",
    "types": [
      "bug",
      "rock"
    ],
    "moveTypes": [
      "rock"
    ],
    "level": 50
  },
  "snorlax": {
    "sourceName": "Snorlax",
    "catalogRole": "defender",
    "types": [
      "normal"
    ],
    "moveTypes": [
      "normal"
    ],
    "level": 95
  },
  "torkoal": {
    "sourceName": "Torkoal",
    "catalogRole": "defender",
    "types": [
      "fire"
    ],
    "moveTypes": [
      "fire"
    ],
    "level": 95
  },
  "blissey": {
    "sourceName": "Blissey",
    "catalogRole": "supporter",
    "types": [
      "normal"
    ],
    "moveTypes": [
      "fairy"
    ],
    "level": 95
  },
  "chansey": {
    "sourceName": "Chansey",
    "catalogRole": "supporter",
    "types": [
      "normal"
    ],
    "moveTypes": [
      "psychic"
    ],
    "level": 65
  },
  "dustox": {
    "sourceName": "Dustox",
    "catalogRole": "all-rounder",
    "subFunctions": [
      "Stunner"
    ],
    "types": [
      "bug",
      "poison"
    ],
    "moveTypes": [
      "poison"
    ],
    "level": 50
  },
  "houndour": {
    "sourceName": "Houndour",
    "catalogRole": "supporter",
    "types": [
      "dark",
      "fire"
    ],
    "moveTypes": [
      "dark"
    ],
    "level": 65
  },
  "lopunny": {
    "sourceName": "Lopunny",
    "catalogRole": "supporter",
    "types": [
      "normal"
    ],
    "moveTypes": [
      "fighting"
    ],
    "level": 80
  },
  "munchlax": {
    "sourceName": "Munchlax",
    "catalogRole": "supporter",
    "types": [
      "normal"
    ],
    "moveTypes": [
      "fighting"
    ],
    "level": 65
  },
  "ponyta": {
    "sourceName": "Ponyta",
    "catalogRole": "supporter",
    "types": [
      "fire"
    ],
    "moveTypes": [
      "fire"
    ],
    "level": 65
  },
  "porygon2": {
    "sourceName": "Porygon 2",
    "catalogRole": "supporter",
    "specialTags": [
      "pre-ace"
    ],
    "types": [
      "normal"
    ],
    "moveTypes": [
      "electric"
    ],
    "level": 80
  },
  "zorua": {
    "sourceName": "Zorua",
    "catalogRole": "supporter",
    "specialTags": [
      "pre-ace"
    ],
    "types": [
      "dark"
    ],
    "moveTypes": [
      "dark"
    ],
    "level": 65
  }
});
})(typeof window !== 'undefined' ? window : globalThis);
