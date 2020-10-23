import React, { useEffect, useState } from 'react';
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
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import MediaCard from '../../UI/MediaCard/MediaCard.UI';
import HomeIcon from '@material-ui/icons/Home';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AddBoxIcon from '@material-ui/icons/AddBox';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import CardWithAvatar from '../../UI/CardWithAvatar/CardWithAvatar.UI';


const DrawerRight: React.ComponentType<DrawerRightProps> = ({ open, handleDrawerClose }) => {
    const classes = useStyles();

    const [battletag, setBattletag] = useState<string>("");

    const theme = useTheme();

    function navigate(url: string) {
        history.push(url);
        handleDrawerClose();
    }

    const selected = localStorage.getItem('selected');
    const _session = localStorage.getItem('_session');

    function removeSelected() {
        if (selected) {
            localStorage.removeItem('selected');
        }

        if (_session) {
            localStorage.removeItem('_session');
        }

        navigate('/select')
    }

    useEffect(() => {
        if (selected) {
            const parsedSelected = JSON.parse(selected);
            setBattletag(parsedSelected.name);
        }

    }, [selected]);

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
            <DrawerItem IconComponent={AddBoxIcon} navigate={navigate} path={'/link'} listItemKey={'Link New Battletag'} listItemText={'Link New Battletag'} />
            <Divider />
            <List>
                <DrawerItem IconComponent={HomeIcon} navigate={navigate} path={'/'} listItemKey={'Dashboard'} listItemText={'Dashboard'} />
                <DrawerItem IconComponent={AccountBoxIcon} navigate={navigate} path={'/profile'} listItemKey={'Profile'} listItemText={'Profile'} />
                <DrawerItem IconComponent={EqualizerIcon} navigate={navigate} path={'/stats'} listItemKey={'Statistics'} listItemText={'Statistics'} />
                <DrawerItem IconComponent={TrendingUpIcon} navigate={navigate} path={'/session'} listItemKey={'Skill Rating Tracker'} listItemText={'Skill Rating Tracker'} />
            </List>
            <Divider />
            {!selected ? null : <ListItem>
                <Grid container>
                    <Grid item xs={12}>
                        <Typography gutterBottom variant={"h6"}>Currently:</Typography>
                        <Typography gutterBottom variant={"subtitle1"}>{battletag}</Typography>
                        <Typography onClick={removeSelected} gutterBottom color={'secondary'} variant={"button"}>Select New</Typography>
                    </Grid>
                </Grid>
            </ListItem>}
        </Drawer>
    );
}

export default DrawerRight;