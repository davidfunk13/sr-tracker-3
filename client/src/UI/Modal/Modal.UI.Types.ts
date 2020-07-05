import { FunctionComponent } from "react";

export interface FormComponentObject {
    label: string;
    component: FunctionComponent<any>;
}

export default interface Modal {
    modalOpen: boolean,
    handleModalOpen?: () => void,
    handleModalClose: () => void,
    toggleModal?: () => void,
}