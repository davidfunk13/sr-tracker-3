import {SetStateAction, Dispatch} from 'react';
import { ModalControls } from '../../../../App.Types';

export default interface ConfirmSeasonTypes{
    createSeason: () => void;
    modalControls: ModalControls
};