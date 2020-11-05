export default interface DrawerItemProps {
    navigate: (path: string) => void,
    path: string
    prevLocation?: string
    listItemKey: string
    listItemText: string
    IconComponent: React.FC
}

