export interface Rank {
    name: string
    icon: string | NodeRequire
    skillRating?: number
};

const rankDictionary: Rank[] = [
    {
        name: 'Loading...',
        icon: '',
    },
    {
        name: 'Bronze',
        icon: require('../assets/icons/ranks/bronze.png'),
    },
    {
        name: 'Silver',
        icon: require('../assets/icons/ranks/silver.png'),
    },
    {
        name: 'Gold',
        icon: require('../assets/icons/ranks/gold.png'),
    },
    {
        name: 'Platinum',
        icon: require('../assets/icons/ranks/platinum.png'),
    },
    {
        name: 'Diamond',
        icon: require('../assets/icons/ranks/diamond.png'),
    },
    {
        name: 'Master',
        icon: require('../assets/icons/ranks/master.png'),
    },
    {
        name: 'Grandmaster',
        icon: require('../assets/icons/ranks/grandmaster.png'),
    },
    {
        name: 'Top 500',
        icon: require('../assets/icons/ranks/top500.png'),
    },
    {
        name: 'Error',
        icon: require('../assets/icons/other/loss.png'),
    },
];

export default rankDictionary;