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

export interface OptionalAppProps {

}

// these are all the required props
export interface AppProps extends Partial<OptionalAppProps> {

}

//   export interface IState {
  // this might not be needed if the component doesn't have internal state
//   }

//   export interface IContext {
  // this might not be needed if the component doesn't consume the context
//   }

// Container

//   export type StateProps = Pick<IProps, 'title' | 'width' | 'height'>;
//   export type OwnProps = Pick<IProps, 'id'>;
//   export type DispatchProps = Pick<IProps, 'onClick'>;