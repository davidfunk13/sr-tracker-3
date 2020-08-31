import { MapEntry } from '../../utils/mapDictionary';
import { HeroEntry } from '../../utils/heroDictionary';

export interface GameFormTypes {
    currentStep: number | undefined
    mapPlayed: MapEntry | undefined
    heroesPlayed: HeroEntry[] | []
    outcome: 0 | 1 | 2 | undefined
    skillRating: number | undefined
    length: number
}
