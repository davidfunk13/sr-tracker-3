import { FunctionComponent } from "react";

export interface FormComponentObject {
    label: string;
    component: FunctionComponent<any>;
}

export default interface Modal {
    children: any,
    open: boolean,
    title?: string,
    isFullScreen?: boolean | null,
}