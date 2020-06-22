import { Platform } from '../../App.Types';


export interface BlizzAPIBattletag {
    name: string,
    urlName: string,
    id: number,
    level: number,
    playerLevel: number,
    isPublic: boolean,
    platform: Platform,
    portrait: string
}

export interface OptionalLinkProps {

}

export default interface LinkProps extends Partial<OptionalLinkProps> {

}