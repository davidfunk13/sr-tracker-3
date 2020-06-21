import React from 'react';
import { DrawerRightProps } from "./DrawerRight.Component.Types";
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import useStyles from './DrawerRight.Component.Styles';
import { useTheme } from '@material-ui/core/styles';
import history from '../../utils/history';
import DrawerItem from './DrawerItem/DrawerItem.Component';
const DrawerRight: React.ComponentType<DrawerRightProps> = ({ open, handleDrawerClose }) => {
    const classes = useStyles();

    const theme = useTheme();

    function navigate(url: string) {
        history.push(url);
        handleDrawerClose();
    }



    return (
        <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="right"
            open={open}
            classes={{ paper: classes.drawerPaper, }}>
            <div className={classes.drawerHeader}>
                <IconButton onClick={() => handleDrawerClose()}>
                    {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
            </div>
            <Divider />
            <List>
                <DrawerItem IconComponent={InboxIcon} navigate={navigate} path={'/'} listItemKey={'Home'} listItemText={'Home'} />
                <DrawerItem IconComponent={InboxIcon} navigate={navigate} path={'/profile'} listItemKey={'Profile'} listItemText={'Profile'} />
                <DrawerItem IconComponent={InboxIcon} navigate={navigate} path={'/link'} listItemKey={'Link New Battletag'} listItemText={'Link New Battletag'} />
            </List>
            <Divider />
            {/* <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List> */}
        </Drawer>
    );
}

export default DrawerRight;