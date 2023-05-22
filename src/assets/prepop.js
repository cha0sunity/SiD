const preMonster = () => {


    const Minotaur = {
    monsterName: "Minotaur",
    description: "Ferocious bull-men with hooves and curved horns. They live in mazelike tunnels",
    alignment: "Chaos",
    ac: 14,
    hp: 34,
    Mv:{
      type: "walk",
      distance: "near"
    },
    lvl: 7,
    Str: 4,
    Dex: 1,
    Con: 3,
    Int: 1,
    Wis: 2,
    Cha: 1,
    ATK: [{
      weapon: "geataxe",
      numberOfAttacks: 2,
      atkBonus: 6,
      numOfDamageDice: 1,
      sizeOfDamageDice: 10,
    },
      {
        weapon: "-and- horns",
        numberOfAttacks: 1,
        atkBonus: 6,
        numOfDamageDice: 1,
        sizeOfDamageDice: 12,
      },
      {
        weapon: null,
        numberOfAttacks: null,
        atkBonus: null,
        numOfDamageDice: null,
        sizeOfDamageDice: null,
      }
    ],
    Special:[{
      specialName: "Charge",
      specialDescription: "In place of attacks, move up to double near in a straight line and make 1 horn attack. If hit, x2 damage."
    },
    {
      specialName: null,
      specialDescription: null
    },
    {
      specialName: null,
      specialDescription: null
    }]     
  }

    const Skeleton = {
    monsterName: "Skeleton",
    description: "A bleach-boned skeleton with red pinpoints of light in its eyes.",
    alignment: "Chaos",
    ac: 13,
    hp: 11,
    Mv:{
      type: "walk",
      distance: "near"
    },
    lvl: 2,
    Str: 1,
    Dex: 0,
    Con: 2,
    Int: -2,
    Wis: 0,
    Cha: -1,
    ATK: [{
      weapon: "shortsword",
      numberOfAttacks: 1,
      atkBonus: 1,
      numOfDamageDice: 1,
      sizeOfDamageDice: 6,
    },
      {
        weapon: "-or- shortbow",
        numberOfAttacks: 1,
        atkBonus: 0,
        numOfDamageDice: 1,
        sizeOfDamageDice: 4,
      },
      {
        weapon: null,
        numberOfAttacks: null,
        atkBonus: null,
        numOfDamageDice: null,
        sizeOfDamageDice: null,
      }
    ],
    Special:[{
      specialName: "Undead",
      specialDescription: "Immune to morale checks"
    },
    {
      specialName: null,
      specialDescription: null
    },
    {
      specialName: null,
      specialDescription: null
    }]     
  }

  const Beastman = {
    monsterName: "Beastman",
    description: "A cave hominid with scraggly fur and a stone-tipped spear.",
    alignment: "Chaos",
    ac: 12,
    hp: 35,
    Mv:{
      type: "walk",
      distance: "near"
    },
    lvl: 1,
    Str: 2,
    Dex: 1,
    Con: 1,
    Int: -2,
    Wis: 1,
    Cha: -1,
    ATK: [{
      weapon: "spear",
      numberOfAttacks: 1,
      atkBonus: 2,
      numOfDamageDice: 1,
      sizeOfDamageDice: 6,
    },
      {
        weapon: null,
        numberOfAttacks: null,
        atkBonus: null,
        numOfDamageDice: null,
        sizeOfDamageDice: null,
      },
      {
        weapon: null,
        numberOfAttacks: null,
        atkBonus: null,
        numOfDamageDice: null,
        sizeOfDamageDice: null,
      }
    ],
    Special:[{
      specialName: "Brutal",
      specialDescription: "+1 damage with melee weapons"
    },
    {
      specialName: null,
      specialDescription: null
    },
    {
      specialName: null,
      specialDescription: null
    }]     
  }

  const Darkmantle = {
    monsterName: "Darkmantle",
    description: "A floating, black octopus with rows of red eyes and a webbed skirt of tentacles.",
    alignment: "Neutral",
    ac: 13,
    hp: 4,
    Mv:{
      type: "fly",
      distance: "near"
    },
    lvl: 1,
    Str: -2,
    Dex: 3,
    Con: 0,
    Int: -3,
    Wis: 0,
    Cha: -3,
    ATK: [{
      weapon: "bite",
      numberOfAttacks: 1,
      atkBonus: 3,
      numOfDamageDice: 1,
      sizeOfDamageDice: 4,
    },
      {
        weapon: "-or- darkness",
        numberOfAttacks: 1,
        atkBonus: 0,
        numOfDamageDice: 0,
        sizeOfDamageDice: 0,
      },
      {
        weapon: null,
        numberOfAttacks: null,
        atkBonus: null,
        numOfDamageDice: null,
        sizeOfDamageDice: null,
      }
    ],
    Special:[{
      specialName: "Darkness",
      specialDescription: "Extinguish all light sources in near"
    },
    {
      specialName: null,
      specialDescription: null
    },
    {
      specialName: null,
      specialDescription: null
    }]     
  }

  const Cave_Creeper = {
    monsterName: "Cave Creeper",
    description: "Chittering, green centipedes the size of horses. Their grasping tentacles are coated in a paralytic venom.",
    alignment: "Neutral",
    ac: 12,
    hp: 18,
    Mv:{
      type: "climb",
      distance: "near"
    },
    lvl: 4,
    Str: 2,
    Dex: 2,
    Con: 0,
    Int: -3,
    Wis: 1,
    Cha: -3,
    ATK: [{
      weapon: "bite",
      numberOfAttacks: 1,
      atkBonus: 3,
      numOfDamageDice: 1,
      sizeOfDamageDice: 6,
    },
      {
        weapon: "-and- tentacles + toxin",
        numberOfAttacks: 1,
        atkBonus: 3,
        numOfDamageDice: 1,
        sizeOfDamageDice: 8,
      },
      {
        weapon: null,
        numberOfAttacks: null,
        atkBonus: null,
        numOfDamageDice: null,
        sizeOfDamageDice: null,
      }
    ],
    Special:[{
      specialName: "Toxin",
      specialDescription: "DC 12 CON or paralyzed 1d4 rounds."
    },
    {
      specialName: null,
      specialDescription: null
    },
    {
      specialName: null,
      specialDescription: null
    }]     
  }

  const Ettercap = {
    monsterName: "Ettercap",
    description: "Bipedal, eight-eyed spiderfolk with spindly legs and purple fur",
    alignment: "Chaos",
    ac: 12,
    hp: 14,
    Mv:{
      type: "climb",
      distance: "near"
    },
    lvl: 3,
    Str: 0,
    Dex: 2,
    Con: 1,
    Int: 0,
    Wis: 0,
    Cha: -1,
    ATK: [{
      weapon: "bite",
      numberOfAttacks: 2,
      atkBonus: 2,
      numOfDamageDice: 1,
      sizeOfDamageDice: 6,
    },
      {
        weapon: "-or- poison web",
        numberOfAttacks: 1,
        atkBonus: 2,
        numOfDamageDice: 0,
        sizeOfDamageDice: 0,
      },
      {
        weapon: null,
        numberOfAttacks: null,
        atkBonus: null,
        numOfDamageDice: null,
        sizeOfDamageDice: null,
      }
    ],
    Special:[{
      specialName: "Poison Web",
      specialDescription: "One target stuck in place and 1d4 damage/round. DC 12 DEX on turn to escape"
    },
    {
      specialName: null,
      specialDescription: null
    },
    {
      specialName: null,
      specialDescription: null
    }]     
  }
  
    if (localStorage.getItem("SiD-Minotaur") === null) {
        localStorage.setItem("SiD-Minotaur", JSON.stringify(Minotaur));
    }

    if (localStorage.getItem("SiD-Skeleton") === null) {
        localStorage.setItem("SiD-Skeleton", JSON.stringify(Skeleton));
    }

    if (localStorage.getItem("SiD-Darkmantle") === null) {
        localStorage.setItem("SiD-Darkmantle", JSON.stringify(Darkmantle));
    }

    if (localStorage.getItem("SiD-Ettercap") === null) {
        localStorage.setItem("SiD-Ettercap", JSON.stringify(Ettercap));
    }

    if (localStorage.getItem("SiD-Beastman") === null) {
        localStorage.setItem("SiD-Beastman", JSON.stringify(Beastman));
    }
    
    if (localStorage.getItem("SiD-Cave-Creeper") === null) {
        localStorage.setItem("SiD-Cave-Creeper", JSON.stringify(Cave_Creeper));
    }
  };
