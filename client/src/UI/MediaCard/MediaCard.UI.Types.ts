import { CSSProperties } from "@material-ui/core/styles/withStyles";
import CSS from 'csstype';
import { HeroEntry } from "../../App.Types";

export default interface MediaCardProps {
    title: string
    image?: string | NodeRequire
    subtitle?: string
    multiImage?: HeroEntry[]
    onClick?: ()=> void
    cardMediaStyle?: CSS.Properties
}