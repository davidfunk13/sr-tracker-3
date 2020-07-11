export type Platform = "playstation" | "xbl" | "pc" | "nintendo-switch";

// export type Role = 'damage' | 'tank' | 'support'

export enum RoleEnum {
  Tank = 'tank', Damage = 'damage', Support = 'support'
}

export interface Battletag {
  userId: number,
  name: string,
  urlName: string,
  level: number,
  playerLevel: number,
  isPublic: boolean,
  platform: Platform,
  portrait: string,
}

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

export default interface AppProps {

}