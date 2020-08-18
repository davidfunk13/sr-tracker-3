import { Dispatch, SetStateAction } from "react";

export default interface StepButtonsProps {
    disabled: boolean
    confirm?: boolean
    setOpen?: Dispatch<SetStateAction<boolean>>
    createGame?: (game: any) => void
}
