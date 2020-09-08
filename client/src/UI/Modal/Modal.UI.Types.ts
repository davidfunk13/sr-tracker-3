import { FunctionComponent, Dispatch, SetStateAction } from "react";
import { RoleEnum, ModalControls } from "../../App.Types";

export interface FormComponentObject {
    label: string,
    component: FunctionComponent<any>,
    role?: RoleEnum,
}

export default interface Modal {
    children: any,
    modalControls: ModalControls
    title?: string,
    isFullScreen?: boolean | null,
}