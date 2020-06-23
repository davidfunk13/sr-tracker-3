export type Platform = "playstation" | "xbl" | "pc" | "nintendo-switch";

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

export default interface AppProps{

}