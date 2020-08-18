import { Dispatch, SetStateAction } from "react";

export default interface ConfirmGameTypes {
    setOpen: Dispatch<SetStateAction<boolean>>
    createGame?: (game: any) =>  void
}