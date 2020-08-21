const heroList = [
    {
        name: "All Heroes",
        heroKey: '0x02E00000FFFFFFFF',
        roleKey: 0,
        roleName: 'tank',
        subCategory: 'All Heroes',
        icon: '../assets/icons/heroes/Ana.png',
    },
    {
        name: 'Ana',
        heroKey: '0x02E000000000013B',
        roleKey: 2,
        roleName: 'support',
        subCategory: 'Main Support',
        icon: '../assets/icons/heroes/Ana.png',
    },
    {
        name: 'Ashe',
        heroKey: '0x02E0000000000200',
        roleKey: 1,
        roleName: 'damage',
        subCategory: 'Ranged DPS',
        icon: '../assets/icons/heroes/Ashe.png',
    },
    {
        name: 'Baptiste',
        heroKey: '0x02E0000000000221',
        roleKey: 2,
        roleName: 'support',
        subCategory: 'Main Support',
        icon: '../assets/icons/heroes/Baptiste.png',
    },
    {
        name: 'Bastion',
        heroKey: '0x02E0000000000015',
        roleKey: 1,
        roleName: 'damage',
        subCategory: 'Builder DPS',
        icon: '../assets/icons/heroes/Bastion.png',
    },
    {
        name: 'Brigitte',
        heroKey: '0x02E0000000000195',
        roleKey: 2,
        roleName: 'support',
        subCategory: 'Secondary Support',
        icon: '../assets/icons/heroes/Brigitte.png',
    },
    {
        name: 'Doomfist',
        heroKey: '0x02E000000000012F',
        roleKey: 1,
        roleName: 'damage',
        subCategory: 'Flanker DPS',
        icon: '../assets/icons/heroes/Doomfist.png',
    },
    {
        name: 'D.VA',
        heroKey: '0x02E000000000007A',
        roleKey: 0,
        roleName: 'tank',
        subCategory: 'Off Tank',
        icon: '../assets/icons/heroes/Dva.png',
    },
    {
        name: 'Echo',
        heroKey: '0x02E0000000000206',
        roleKey: 1,
        roleName: 'damage',
        subCategory: 'Flank DPS',
        icon: '../assets/icons/heroes/Echo.png',
    },
    {
        name: 'Genji',
        heroKey: '0x02E0000000000029',
        roleKey: 1,
        roleName: 'damage',
        subCategory: 'Flanker DPS',
        icon: '../assets/icons/heroes/Genji.png',
    },
    {
        name: 'Hanzo',
        heroKey: '0x02E0000000000005',
        roleKey: 1,
        roleName: 'damage',
        subCategory: 'Ranged DPS',
        icon: '../assets/icons/heroes/Hanzo.png',
    },
    {
        name: 'Junkrat',
        heroKey: '0x02E0000000000065',
        roleKey: 1,
        roleName: 'damage',
        subCategory: 'Defensive DPS',
        icon: '../assets/icons/heroes/Junkrat.png',
    },
    {
        name: 'Lucio',
        heroKey: '0x02E0000000000079',
        roleKey: 2,
        roleName: 'support',
        subCategory: 'Secondary Support',
        icon: '../assets/icons/heroes/Lucio.png',
    },
    {
        name: 'McCree',
        heroKey: '0x02E0000000000042',
        roleKey: 1,
        roleName: 'damage',
        subCategory: "Midrange DPS",
        icon: '../assets/icons/heroes/McCree.png',
    },
    {
        name: 'Mei',
        heroKey: '0x02E00000000000DD',
        roleKey: 1,
        roleName: 'damage',
        subCategory: 'Defensive DPS',
        icon: '../assets/icons/heroes/Mei.png',
    },
    {
        name: 'Mercy',
        heroKey: '0x02E0000000000004',
        roleKey: 2,
        roleName: 'support',
        subCategory: 'Main Support',
        icon: '../assets/icons/heroes/Mercy.png',
    },
    {
        name: 'Moira',
        heroKey: '0x02E00000000001A2',
        roleKey: 2,
        roleName: 'support',
        subCategory: 'Main Support',
        icon: '../assets/icons/heroes/Moira.png',
    },
    {
        name: 'Orisa',
        heroKey: '0x02E000000000013E',
        roleKey: 0,
        roleName: 'tank',
        subCategory: 'Main Tank',
        icon: '../assets/icons/heroes/Orisa.png',
    },
    {
        name: 'Phara',
        heroKey: '0x02E0000000000008',
        roleKey: 1,
        roleName: 'damage',
        subCategory: 'Ranged DPS',
        icon: '../assets/icons/heroes/Phara.png',
    },
    {
        name: 'Reaper',
        heroKey: '0x02E0000000000002',
        roleKey: 1,
        roleName: 'damage',
        subCategory: 'Flanker DPS',
        icon: '../assets/icons/heroes/Reaper.png',
    },
    {
        name: 'Reinhardt',
        heroKey: '0x02E0000000000007',
        roleKey: 0,
        roleName: 'tank',
        subCategory: 'Main Tank',
        icon: '../assets/icons/heroes/Reinhardt.png',
    },
    {
        name: 'Roadhog',
        heroKey: '0x02E0000000000040',
        roleKey: 0,
        roleName: 'tank',
        subCategory: 'Off Tank',
        icon: '../assets/icons/heroes/Roadhog.png',
    },
    {
        name: 'Sigma',
        heroKey: '0x02E000000000023B',
        roleKey: 0,
        roleName: 'tank',
        subCategory: 'Off Tank',
        icon: '../assets/icons/heroes/Sigma.png',
    },
    {
        name: 'Soldier: 76',
        heroKey: '0x02E000000000006E',
        roleKey: 1,
        roleName: 'damage',
        subCategory: "Midrange DPS",
        icon: '../assets/icons/heroes/Soldier_76.png',
    },
    {
        name: 'Sombra',
        heroKey: '0x02E000000000012E',
        roleKey: 1,
        roleName: 'damage',
        subCategory: 'Flanker DPS',
        icon: '../assets/icons/heroes/Sombra.png',
    },
    {
        name: 'Symmetra',
        heroKey: '0x02E0000000000016',
        roleKey: 1,
        roleName: 'damage',
        subCategory: 'Builder DPS',
        icon: '../assets/icons/heroes/Symmetra.png',
    },
    {
        name: 'Torbjorn',
        heroKey: '0x02E0000000000006',
        roleKey: 1,
        roleName: 'damage',
        subCategory: 'Builder DPS',
        icon: '../assets/icons/heroes/Torbjorn.png',
    },
    {
        name: 'Tracer',
        heroKey: '0x02E0000000000003',
        roleKey: 1,
        roleName: 'damage',
        subCategory: 'Flanker DPS',
        icon: '../assets/icons/heroes/Tracer.png',
    },
    {
        name: 'Widowmaker',
        heroKey: '0x02E000000000000A',
        roleKey: 1,
        roleName: 'damage',
        subCategory: 'Ranged DPS',
        icon: '../assets/icons/heroes/Widowmaker.png',
    },
    {
        name: 'Winston',
        heroKey: '0x02E0000000000009',
        roleKey: 0,
        roleName: 'tank',
        subCategory: 'Main Tank',
        icon: '../assets/icons/heroes/Winston.png',
    },
    {
        name: 'Wrecking Ball',
        heroKey: '0x02E00000000001CA',
        roleKey: 0,
        roleName: 'tank',
        subCategory: 'Main Tank',
        icon: '../assets/icons/heroes/WreckingBall.png',
    },
    {
        name: 'Zarya',
        heroKey: '0x02E0000000000068',
        roleKey: 0,
        roleName: 'tank',
        subCategory: 'Off Tank',
        icon: '../assets/icons/heroes/Zarya.png',
    },
    {
        name: 'Zenyatta',
        heroKey: '0x02E0000000000020',
        roleKey: 2,
        roleName: 'support',
        subCategory: 'Secondary Support',
        icon: '../assets/icons/heroes/Zenyatta.png',
    }
];

console.log({what: heroList[0]})
module.exports = heroList;