import { Dispatch, SetStateAction } from "react";
import { ModalControls, FormComponentTypes } from "../../../../App.Types";

export default interface ConfirmGameTypes extends FormComponentTypes {
    modalControls: ModalControls
    createGame?: (game: any) =>  void
}