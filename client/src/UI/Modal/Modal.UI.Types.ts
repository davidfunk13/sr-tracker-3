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
    components: FormComponentObject[];
    formState: any, //Make an interface for this. 
    setFormState: () => { [key: string]: any; }, //Do better with this too.
}