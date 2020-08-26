import React, { useEffect } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DrawerItemProps from './DrawerItem.Types';

const DrawerItem: React.FC<DrawerItemProps> = ({ navigate, prevLocation, path, listItemKey, listItemText, IconComponent }) => {
    useEffect(() => console.log(prevLocation), []);
    
    return (
        <ListItem onClick={() => navigate(path)} button key={listItemKey}>
            <ListItemIcon>
                <IconComponent />
            </ListItemIcon>
            <ListItemText primary={listItemText} />
        </ListItem>
    );
}

export default DrawerItem;