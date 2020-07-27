import { Context, Dispatch, SetStateAction } from 'react';
import { FormComponentObject } from '../../UI/Modal/Modal.UI.Types';
import { RoleEnum } from '../../App.Types';


export default interface VerticalStepperTypes {
    components: FormComponentObject[];
    formContext: Context<any>,
    role?: RoleEnum,
    setOpen: Dispatch<SetStateAction<boolean>>
}