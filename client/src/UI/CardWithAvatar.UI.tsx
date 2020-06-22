import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import { CardWithAvatarProps } from './CardWithAvatar.UI.Types';

const CardWithAvatar: React.ComponentType<CardWithAvatarProps> = ({ avatarLetter, CardHeaderTitle, CardHeaderSubtitle, children }) => {

    return (
        <Card >
            <CardHeader avatar={<Avatar style={{ width: '2.75em', height: '2.75em' }} >{avatarLetter}</Avatar>} title={CardHeaderTitle} subheader={CardHeaderSubtitle} />
            {children ? <CardContent>{children}</CardContent> : null}
        </Card>
    );
};

export default CardWithAvatar;