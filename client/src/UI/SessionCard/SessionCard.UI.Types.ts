import { SessionType } from "../../App.Types";

export default interface SessionCardProps {
    onClick?: () => any
    session: SessionType
    deleteSession: (_id: string) => Promise<void>
}