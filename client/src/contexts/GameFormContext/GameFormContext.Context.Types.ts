import { HeroEntry } from "../../utils/heroDictionary";
import { MapEntry } from "../../utils/mapDictionary";

export default interface GameForm {
    currentStep: number
    mapPlayed: MapEntry
    heroesPlayed: HeroEntry[]
    outcome: 0 | 1 | 2
    skillRating: number 
}
