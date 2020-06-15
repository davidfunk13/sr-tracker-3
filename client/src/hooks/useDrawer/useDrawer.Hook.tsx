import { useState } from 'react';
import { UseDrawerHook, IUseDrawerState } from './useDrawer.Hook.Types';

const useDrawer: UseDrawerHook = () => {

    const [open, setOpen] = useState<IUseDrawerState>(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const toggleDrawer = () => {
        const toggled = !open;

        setOpen(toggled);
    };

    return { open, setOpen, handleDrawerOpen, handleDrawerClose, toggleDrawer }
}

export default useDrawer;