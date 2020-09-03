import { RoleEnum, FormComponentTypes } from "../../../../App.Types";

export default interface SelectMapProps extends FormComponentTypes {
    role: RoleEnum,
    formControls: any
}