
export type Platform = "playstation" | "xbl" | "pc" | "nintendo-switch";

export enum RoleEnum {
  Tank = 'tank', Damage = 'damage', Support = 'support'
}

export type RoleName = "tank" | "damage" | "support";

export type RoleKey = 0 | 1 | 2 | 3;

export interface Game {
  role: 0 | 1 | 2
  mapPlayed: string
  heroesPlayed: [string, string?, string?]
  outcome: 0 | 1 | 2
  rankIn: number
  rankOut: number
}

export interface Battletag {
  _id: string,
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