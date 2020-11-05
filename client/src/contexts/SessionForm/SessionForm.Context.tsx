import { createContext } from "react";
import { SessionForm, SessionFormContextType } from "../../App.Types";

export const initialSessionFormState: SessionForm = {
    step: 0,
    skillRating: 0,
    role: 3
}

const SessionFormContext = createContext<SessionFormContextType>([initialSessionFormState, () => null]);

export default SessionFormContext