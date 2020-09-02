import { Dispatch, SetStateAction } from "react";
import { FormComponentTypes } from "../../../../App.Types";

export default interface ConfirmGameTypes extends FormComponentTypes {
    setOpen: Dispatch<SetStateAction<boolean>>
    createGame?: (game: any) =>  void
}