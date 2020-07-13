export interface MapEntry {
    name: string
    type: string
    icon: NodeRequire
}

const mapDictionary: MapEntry[] = [
    {
        name: "Hanamura",
        type: "Assault",
        icon: require('../assets/icons/maps/assault/hanamura.png'),
    },
    {
        name: "Temple of Anubis",
        type: "Assault",
        icon: require('../assets/icons/maps/assault/anubis.png'),
    },
    {
        name: "King's Row",
        type: "Hybrid",
        icon: require('../assets/icons/maps/hybrid/kingsrow.png'),
    },
    {
        name: "Watchpoint Gibraltar",
        type: "Escort",
        icon: require('../assets/icons/maps/escort/gibraltar.png'),
    },
    {
        name: "Numbani",
        type: "Hybrid",
        icon: require('../assets/icons/maps/hybrid/numbani.png'),
    },
    {
        name: "Volskaya Industries",
        type: "Assault",
        icon: require('../assets/icons/maps/assault/volskaya.png'),
    },
    {
        name: "Dorado",
        type: "Escort",
        icon: require('../assets/icons/maps/escort/dorado.png'),
    },
    {
        name: "Hollywood",
        type: "Hybrid",
        icon: require('../assets/icons/maps/hybrid/hollywood.png'),
    },
    {
        name: "Lijiang Tower",
        type: "Control",
        icon: require('../assets/icons/maps/control/lijiang.png'),
    },
    {
        name: "Nepal",
        type: "Control",
        icon: require('../assets/icons/maps/control/nepal.png'),
    },
    {
        name: "Ilios",
        type: "Control",
        icon: require('../assets/icons/maps/control/ilios.png'),
    },
    {
        name: "Route 66",
        type: "Escort",
        icon: require('../assets/icons/maps/escort/route66.png'),
    },
    {
        name: "Eichenwalde",
        type: "Hybrid",
        icon: require('../assets/icons/maps/hybrid/eichenwalde.png'),
    },
    {
        name: "Oasis",
        type: "Control",
        icon: require('../assets/icons/maps/control/oasis.png'),
    },
    {
        name: "Horizon Lunar Colony",
        type: "Assault",
        icon: require('../assets/icons/maps/assault/horizon.png')
    },
    {
        name: "Junkertown",
        type: "Escort",
        icon: require('../assets/icons/maps/escort/junkertown.png'),
    },
    {
        name: "Blizzard World",
        type: "Hybrid",
        icon: require('../assets/icons/maps/hybrid/blizzardworld.png'),
    },
    {
        name: "Rialto",
        type: "Escort",
        icon: require('../assets/icons/maps/escort/rialto.png'),
    },
    {
        name: "Busan",
        type: "Control",
        icon: require('../assets/icons/maps/control/busan.png'),
    },
    {
        name: "Paris",
        type: "Assault",
        icon: require('../assets/icons/maps/assault/paris.png'),
    },
    {
        name: "Havana",
        type: "Escort",
        icon: require('../assets/icons/maps/escort/havana.png'),
    },
];

export default mapDictionary;