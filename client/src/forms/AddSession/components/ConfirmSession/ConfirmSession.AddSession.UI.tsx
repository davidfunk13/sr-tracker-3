import React, { useContext, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useStyles from './ConfirmSession.UI.Styles';
import ConfirmSessionProps from './ConfirmSession.AddSession.UI.Types';
import Stepper from '../../../Stepper';
import SessionFormContext from '../../../../contexts/SessionForm/SessionForm.Context';
import FormComponentWrapper from '../../../../UI/FormComponentWrapper/FormComponentWrapper.UI.Component';
import MediaCard from '../../../../UI/MediaCard/MediaCard.UI';
import useGetRank, { YourRank } from '../../../../hooks/useGetRank/useGetRank';
import convertRoleKey from '../../../../utils/convertRoleKey';

const ConfirmSession: React.FC<ConfirmSessionProps> = ({ createSession }) => {

    const [state] = useContext(SessionFormContext);

    const classes = useStyles();

    useEffect(() => {
        console.log(state);
    }, []);

    const skillRating: number = state.skillRating ? state.skillRating : 0;

    const rank: YourRank = useGetRank(skillRating);

    const roleCard = convertRoleKey(state.role);

    const cardMediaStyle = { backgroundSize: "contain", margin: '1em', };

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography gutterBottom align={'center'} variant={'h5'} component={'h3'}>
                    Is this correct?
            </Typography>
            </Grid>
            <Grid item xs={6}>
                <MediaCard
                    cardMediaStyle={cardMediaStyle}
                    title={state.skillRating ? state.skillRating.toString() : '----'}
                    subtitle={rank.name}
                    image={rank.icon}
                />
            </Grid>
            <Grid item xs={6}>
                <MediaCard
                    cardMediaStyle={cardMediaStyle}
                    title={roleCard.name}
                    image={roleCard.icon}
                />
            </Grid>
            <Stepper submit={() => createSession(state)} formContext={SessionFormContext} disabled={false} />
        </Grid>
    );
};

export default ConfirmSession;