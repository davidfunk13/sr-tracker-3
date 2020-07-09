import React, { useEffect } from 'react';
import { DrawerRightProps } from "./DrawerRight.Component.Types";
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import useStyles from './DrawerRight.Component.Styles';
import { useTheme } from '@material-ui/core/styles';
import history from '../../utils/history';
import DrawerItem from './DrawerItem/DrawerItem.Component';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { ListItem } from '@material-ui/core';

const DrawerRight: React.ComponentType<DrawerRightProps> = ({ open, handleDrawerClose }) => {
    const classes = useStyles();

    const theme = useTheme();

    function navigate(url: string) {
        history.push(url);
        handleDrawerClose();
    }

    const selected = localStorage.getItem('selected');

    function removeSelected() {
            if (selected) {
                localStorage.removeItem('selected');
                navigate('/track')
            }
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
                <DrawerItem IconComponent={InboxIcon} navigate={navigate} path={'/stats'} listItemKey={'Profile Statistics'} listItemText={'Profile Statistics'} />
                <DrawerItem IconComponent={InboxIcon} navigate={navigate} path={'/track'} listItemKey={'Track Skill Rating'} listItemText={'Track Skill Rating'} />
                {!selected ? null : <ListItem>
                    <Button fullWidth onClick={removeSelected} variant={'contained'} color={'secondary'}>
                        <Typography variant={'button'}>Select New Battletag</Typography>
                    </Button>
                </ListItem>}
            </List>
            <Divider />
        </Drawer>
    );
}

export default DrawerRight;