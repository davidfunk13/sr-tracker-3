import React, { FunctionComponent } from 'react';
import MediaCardProps from './MediaCard.UI.Types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles'
import { HeroEntry } from '../../App.Types';


const useStyles = makeStyles({
    root: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        paddingBottom: '0',
    },
    media: {
        height: 140,
    },
    heroCardFlex: {
        display: 'flex',
    },
    heroCardImg: {
        maxWidth: '33%',
    }
});

const MediaCard: FunctionComponent<MediaCardProps> = ({ children, image, title, subtitle, multiImage, onClick, cardMediaStyle }) => {
    const classes = useStyles();

    return (
        <Card elevation={0} variant={'outlined'} onClick={onClick} className={classes.root}>
            {!image ? null : <CardMedia style={cardMediaStyle} className={classes.media} image={image.toString()} title={title} />}

            {multiImage && multiImage.length ?
                <div className={classes.heroCardFlex}>
                    {multiImage.map((hero: HeroEntry) => <img key={hero.heroKey} className={classes.heroCardImg} src={hero.icon.toString()} alt={hero.name} />)}
                </div>
                :
                null}

            <CardContent style={{ textAlign: 'center', padding: '1em', display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                <Typography style={{ width: '100%' }} gutterBottom={subtitle ? true : false} variant="h5" component="h2">
                    {title}
                </Typography>

                {!subtitle ? null :
                    <Typography style={{ width: '100%' }} variant={"subtitle1"} component={"p"}>
                        {subtitle}
                    </Typography>
                }
            </CardContent>
            {children ?
                <CardActionArea>
                    {children}
                </CardActionArea> :
                null}
        </Card>
    );
}

export default MediaCard;