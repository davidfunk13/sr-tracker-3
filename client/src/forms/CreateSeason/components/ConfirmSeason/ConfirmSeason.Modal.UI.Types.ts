import {SetStateAction, Dispatch} from 'react';

export default interface ConfirmSeasonTypes{
    setOpen: Dispatch<SetStateAction<boolean>>
    createSeason: () => void;
};