import { FunctionComponent, Dispatch, SetStateAction } from "react";
import { RoleEnum } from "../../App.Types";

export interface FormComponentObject {
    label: string,
    component: FunctionComponent<any>,
    role?: RoleEnum,
}

export default interface Modal {
    children: any,
    open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>
    title?: string,
    isFullScreen?: boolean | null,
}