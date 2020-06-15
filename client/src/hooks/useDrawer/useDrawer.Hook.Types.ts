import useDrawer from "./useDrawer.Hook";

export interface OptionalIUseDrawerProps {

}

// these are all the required props
export interface IUseDrawerProps extends Partial<OptionalIUseDrawerProps> {
    // 
}

interface DrawerHook {
    open: boolean,
    setOpen: (isOpen: boolean) => void,
    handleDrawerOpen: () => void,
    handleDrawerClose: () => void,
    toggleDrawer: () => void,
}

export type UseDrawerHook = () => DrawerHook


// export interface IUseDrawerState {
//     open: boolean,
//     setOpen: (isOpen: boolean) => void,
// }

//   export interface IState {
// this might not be needed if the component doesn't have internal state
//   }

//   export interface IContext {
// this might not be needed if the component doesn't consume the context
//   }

// Container

export type IUseDrawerState = boolean;
//   export type StateProps = Pick<IProps, 'title' | 'width' | 'height'>;
//   export type OwnProps = Pick<IProps, 'id'>;
//   export type DispatchProps = Pick<IProps, 'onClick'>;