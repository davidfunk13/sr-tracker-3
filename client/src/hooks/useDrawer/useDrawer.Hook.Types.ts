export interface IUseDrawerProps {
    // 
};

interface DrawerHook {
    open: boolean,
    setOpen: (isOpen: boolean) => void,
    handleDrawerOpen: () => void,
    handleDrawerClose: () => void,
    toggleDrawer: () => void,
};

export type UseDrawerHook = () => DrawerHook;

export type IUseDrawerState = boolean;