
export interface OptionalDrawerRightProps {
  toggleDrawer: (isOpen: boolean) => void,
}

export interface DrawerRightProps extends Partial<OptionalDrawerRightProps> {
  open: boolean,
  handleDrawerClose: () => void,
}