import { HeroEntry } from "../../utils/heroDictionary";
import { CSSProperties } from "@material-ui/core/styles/withStyles";

export default interface MediaCardProps {
    title: string
    image?: string | NodeRequire
    subtitle?: string
    multiImage?: HeroEntry[]
    onClick?: ()=> void
    cardMediaStyle?: CSSProperties
}