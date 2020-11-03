import React, { useContext, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useStyles from './ConfirmSession.UI.Styles';
import ConfirmSessionProps from './ConfirmSession.AddSession.UI.Types';
import Stepper from '../../../Stepper';
import SessionFormContext from '../../../../contexts/SessionForm/SessionForm.Context';
import FormComponentWrapper from '../../../../UI/FormComponentWrapper/FormComponentWrapper.UI.Component';
import { RoleKey } from '../../../../App.Types';
import TankIcon from '../../../../assets/icons/roles/Tank.png';
import SupportIcon from '../../../../assets/icons/roles/Support.png';
import DamageIcon from '../../../../assets/icons/roles/Damage.png';
import ErrorIcon from '../../../../assets/icons/other/loss.png';
import MediaCard from '../../../../UI/MediaCard/MediaCard.UI';
import useGetRank, { YourRank } from '../../../../hooks/useGetRank/useGetRank';

const ConfirmSession: React.FC<ConfirmSessionProps> = ({ createSession }) => {

    const [state] = useContext(SessionFormContext);

    const classes = useStyles();

    useEffect(() => {
        console.log(state);
    }, []);

    const skillRating: number = state.skillRating ? state.skillRating : 0;

    const rank: YourRank = useGetRank(skillRating);

    function generateCard(role: RoleKey): { name: string, icon: string } {
        switch (role) {
            case 0:
                return { name: 'Tank', icon: TankIcon };
            case 1:
                return { name: 'Damage', icon: DamageIcon };
            case 2:
                return { name: 'Support', icon: SupportIcon };
            default:
                return { name: 'Error!', icon: ErrorIcon };
        }
    };

    const roleCard = generateCard(state.role);

    return (
        <FormComponentWrapper spacing={2}>
            <Typography gutterBottom align={'center'} variant={'h5'} component={'h3'}>
                Is this correct?
            </Typography>
            <Grid container justify={'center'} spacing={2} style={{ height: "75%", overflow: 'auto' }}>
                <Grid item xs={12}>
                    <MediaCard
                        cardMediaStyle={{ backgroundSize: "contain" }}
                        title={state.skillRating ? state.skillRating.toString() : '----'}
                        subtitle={rank.name}
                        image={rank.icon}
                    />
                </Grid>
                <Grid item xs={12}>
                    <MediaCard
                        cardMediaStyle={{ backgroundSize: "contain" }}
                        title={roleCard.name}
                        image={roleCard.icon}
                    />
                </Grid>
            </Grid>
            <Stepper submit={() => createSession(state)} formContext={SessionFormContext} disabled={false} />
        </FormComponentWrapper>
    );
};

export default ConfirmSession;