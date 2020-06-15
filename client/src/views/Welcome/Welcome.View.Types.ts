// Component

// these are all the optional props
export interface OptionalWelcomViewProps {

}

// these are all the required props
export interface WelcomeViewProps extends Partial<OptionalWelcomViewProps> {
    
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