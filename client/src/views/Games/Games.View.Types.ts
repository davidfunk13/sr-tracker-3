import { Game, ModalControls, SessionType } from "../../App.Types";


export default interface GamesProps {
    isLoading: boolean
    games: Game[]
    modalControls: ModalControls
}