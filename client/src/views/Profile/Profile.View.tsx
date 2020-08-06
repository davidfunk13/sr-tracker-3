import React, { useEffect } from "react";
import { useAuth0 } from "../../react-auth0-spa";
import { ProfileProps } from './Profile.View.Types';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';


const Profile: React.FC<ProfileProps> = () => {
    const { loading, user } = useAuth0();

    useEffect(() => console.log(user), [user])

    if (loading || !user) {
        return (
            <Grid container spacing={4}>
                <Grid justify={'center'} item xs={12}>
                    <CircularProgress color="primary" />
                </Grid>
            </Grid>
        );
    }

    return (
        <Grid container spacing={4}>
            <Grid item xs={12}>
                <Typography variant={'h4'}>Profile</Typography>
            </Grid>
            {/* <Grid container justify={'center'}> */}
            <Grid item xs={12} sm={9}>
                <Card variant={'outlined'}>
                    <CardContent>
                        <img src={user.picture} style={{ width: '100%' }} alt="Profile" />
                        <Typography variant={'body1'}>Nickname: {user.nickname}</Typography>
                        <Typography variant={'body1'}>Name: {user.name}</Typography>
                        <Typography variant={'body1'}>Email: {user.email}</Typography>
                        <Typography variant={'body1'}>id: {user.sub.split('|')[1]}</Typography>
                        <Typography variant={"body1"}>{user.email_verified ? 'Email Verified.' : 'Email not verified.'}</Typography>
                    </CardContent>
                </Card>
                {/* </Grid> */}
            </Grid>
        </Grid>
    );
};

export default Profile;