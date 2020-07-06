import { HeroEntry } from '../../utils/dictionaries';
export default interface SeasonFormContextTypes {
    currentStep: number,
    seasonType: number | null,
    mainHeroes: HeroEntry[],
    length: number,
}