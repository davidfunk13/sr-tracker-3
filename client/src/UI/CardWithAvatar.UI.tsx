import React, { Fragment } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import { CardWithAvatarProps } from './CardWithAvatar.UI.Types';

const CardWithAvatar: React.ComponentType<CardWithAvatarProps> = ({ avatarLetter, CardHeaderTitle, CardHeaderSubtitle, children }) => {
    return (
        <Card >
            <CardHeader avatar={<Avatar>{avatarLetter}</Avatar>} title={CardHeaderTitle} subheader={CardHeaderSubtitle} />
            <CardContent>
                {children}
            </CardContent>
        </Card>
    );
};

export default CardWithAvatar;