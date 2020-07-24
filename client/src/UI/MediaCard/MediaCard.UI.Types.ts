import { HeroEntry } from "../../utils/heroDictionary";

export default interface MediaCardProps {
    title: string
    image?: string | NodeRequire
    subtitle?: string
    multiImage?: HeroEntry[]
    onClick?: ()=> void
}