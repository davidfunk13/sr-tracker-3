import { Dispatch, SetStateAction } from "react";
import { ModalControls } from "../../../../App.Types";

export default interface ConfirmGameTypes{
    modalControls: ModalControls
    createGame?: (game: any) =>  void
}