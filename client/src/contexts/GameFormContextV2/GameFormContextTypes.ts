import { MapEntry } from '../../utils/mapDictionary';
import { HeroEntry } from '../../utils/heroDictionary';
import HeroesPlayedTypes from '../../forms/AddGame/components/HeroesPlayed/HeroesPlayed.AddGame.Types';
import OutcomeProps from '../../forms/AddGame/components/Outcome/Outcome.AddGame.Types';
import SelectMapProps from '../../forms/AddGame/components/SelectMap/SelectMap.AddGame.Types';
import ConfirmGameTypes from '../../forms/AddGame/components/ConfirmGame/ConfirmGame.AddGame.Types';
import { FunctionComponent } from 'react';
import SkillratingProps from '../../forms/AddGame/components/SkillRating/SkillRating.AddGame.Types';

export interface GameFormTypes {
    currentStep: number | undefined
    mapPlayed: MapEntry | undefined
    heroesPlayed: HeroEntry[] | []
    outcome: 0 | 1 | 2 | undefined
    skillRating: number | undefined
    length: number
}
