import { SessionForm } from "../../../../App.Types";

export default interface ConfirmSessionProps {
    createSession: (form: SessionForm) => void
}