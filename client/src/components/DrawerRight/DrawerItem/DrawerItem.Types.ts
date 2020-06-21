

export interface DrawerItemOptionalProps {

}

export default interface DrawerItemProps extends Partial<DrawerItemProps> {
    navigate: (path: string) => void,
    path: string,
    listItemKey: string,
    listItemText: string
    IconComponent: React.FC
}

