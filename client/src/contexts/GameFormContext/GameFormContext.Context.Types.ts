import { HeroEntry } from "../../utils/heroDictionary";


export default interface GameFormContextTypes {
    currentStep: number
    mapPlayed: undefined | string
    heroesPlayed: HeroEntry[]
    outcome: 0 | 1 | 2 | undefined
    skillRating: number | undefined
}
