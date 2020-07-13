import { HeroEntry } from '../../utils/heroDictionary';

export default interface SeasonFormContextTypes {
    currentStep: number,
    seasonType: number | null,
    mainHeroes: HeroEntry[],
    length: number,
}