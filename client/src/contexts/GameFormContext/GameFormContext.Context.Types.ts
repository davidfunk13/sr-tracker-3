import { HeroEntry } from "../../utils/heroDictionary";


export default interface GameFormContextTypes {
    currentStep: number, mapPlayed: undefined | string, heroesPlayed: HeroEntry[]
}