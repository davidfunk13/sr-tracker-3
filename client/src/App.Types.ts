import { Dispatch, SetStateAction } from 'react';

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

export interface Game {
  _id?: string
  _session?: string
  role: 0 | 1 | 2
  mapPlayed: string
  heroesPlayed: [string, string?, string?]
  outcome: 0 | 1 | 2
  rankIn: number
  rankOut: number
  createdAt?: Date,
  updatedAt?: Date,
}

export interface GameForm {
  step: number
  mapPlayed: MapEntry | undefined
  heroesPlayed: HeroEntry[]
  outcome: 0 | 1 | 2 | undefined
  skillRating: number | undefined
}

export interface SessionForm {
  step: number
  role: RoleKey
  skillRating: number
}

export type GameFormContextType = [GameForm, Dispatch<SetStateAction<GameForm>>];

export type SessionFormContextType = [SessionForm, Dispatch<SetStateAction<SessionForm>>];

export interface HeroEntry {
  name: string,
  heroKey: string,
  roleKey: RoleKey,
  roleName: RoleName,
  icon: NodeRequire,
  subCategory: string,
};

export interface Location {
  pathname?: string
  state: LocationStateRole
  search?: string
  hash?: string
  key?: string
}

export interface LocationStateRole {
  role: RoleEnum
}

export interface MapEntry {
  name: string
  type: string
  icon: NodeRequire | string
}

export interface ModalControls {
  modalOpen: boolean,
  setModalOpen: Dispatch<SetStateAction<boolean>>
}

export type Platform = "playstation" | "xbl" | "pc" | "nintendo-switch";

export enum RoleEnum {
  Tank = 'tank', Damage = 'damage', Support = 'support'
}

export type RoleName = "tank" | "damage" | "support";

export type RoleKey = 0 | 1 | 2 | 3;

export type SessionType = {
  _id: string
  sessionRole: RoleKey
  skillRatingStart: number
  skillRatingCurrent: number
  _games?: Game[]
  createdAt: string
};

export default interface AppProps {

}