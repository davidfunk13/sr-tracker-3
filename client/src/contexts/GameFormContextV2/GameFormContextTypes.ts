import { MapEntry } from '../../utils/mapDictionary';
import { HeroEntry } from '../../utils/heroDictionary';
import { Dispatch, SetStateAction } from 'react';

export interface GameFormTypes {
    mapPlayed: MapEntry
    heroesPlayed: HeroEntry[]
    outcome: 0 | 1 | 2 | undefined
    skillRating: number
    length: number
}

export type GameContextTypes = [GameFormTypes, Dispatch<SetStateAction<GameFormTypes>>];