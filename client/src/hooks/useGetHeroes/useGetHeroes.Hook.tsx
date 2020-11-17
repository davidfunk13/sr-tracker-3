import { useEffect, useState } from 'react';
import { HeroEntry } from '../../App.Types';
import heroDictionary from '../../utils/heroDictionary';

const useGetHeroes = (heroStrings: string[]) => {
    const [heroes, setHeroes] = useState<HeroEntry[]>([]);

    useEffect(() => {
        if (!heroStrings || !heroStrings.length) {
            return console.error('ERROR: Bad hero hook input');
        }

        const arr: HeroEntry[] = [];

        heroStrings.map(hero => {
            const heroObj: HeroEntry = heroDictionary.filter(heroEntry => heroEntry.name === hero)[0];

            if (!heroObj) {
                console.warn('ERROR: Heroes came back undefined');
                return;
            }

            arr.push(heroObj)
        });

        setHeroes(arr);
    }, [])


    return heroes;
}

export default useGetHeroes;