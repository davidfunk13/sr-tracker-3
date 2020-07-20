import rankDictionary, { Rank } from '../../utils/rankDictionary';

export interface YourRank {
    name: string
    icon: string | NodeRequire
    skillRating: number
}

type GetRankHook = (rank: number) => YourRank;

const useGetRank: GetRankHook = (rank: number) => {

    if (rank === undefined) {
        return { ...rankDictionary.filter((item: Rank) => item.name === 'Loading...')[0], skillRating: rank };
    }

    if (rank === 0) {
        return { ...rankDictionary.filter((item: Rank) => item.name === 'Bronze')[0], skillRating: rank };
    }

    if (rank > 0 && rank < 1500) {
        return { ...rankDictionary.filter((item: Rank) => item.name === 'Bronze')[0], skillRating: rank };
    }

    if (rank >= 1500 && rank < 2000) {
        return { ...rankDictionary.filter((item: Rank) => item.name === 'Silver')[0], skillRating: rank };
    }

    if (rank >= 2000 && rank < 2500) {
        return { ...rankDictionary.filter((item: Rank) => item.name === 'Gold')[0], skillRating: rank };
    }

    if (rank >= 2500 && rank < 3000) {
        return { ...rankDictionary.filter((item: Rank) => item.name === 'Platinum')[0], skillRating: rank };
    }

    if (rank >= 3000 && rank < 3500) {
        return { ...rankDictionary.filter((item: Rank) => item.name === 'Diamond')[0], skillRating: rank };
    }

    if (rank >= 3500 && rank < 4000) {
        return { ...rankDictionary.filter((item: Rank) => item.name === 'Master')[0], skillRating: rank };
    }

    if (rank >= 4000) {
        return { ...rankDictionary.filter((item: Rank) => item.name === 'Grandmaster')[0], skillRating: rank };
    }

    return { ...rankDictionary.filter((item: Rank) => item.name === 'Bronze')[0], skillRating: 0 };
}

export default useGetRank;  