import { FunctionComponent } from "react";

export default interface PressHoldCardProps {
    onClick?: () => void
    data?: any
    action?: (...args: any) => Promise<void>
    modalTitle: string
    modalChildren: any,
}