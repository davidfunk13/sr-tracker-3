import { Dispatch, SetStateAction } from "react";
import { Game } from '../../App.Types';

export default interface GameTableTypes {
    setModalOpen: Dispatch<SetStateAction<boolean>>
    games: Game[]
    isLoading: boolean
}