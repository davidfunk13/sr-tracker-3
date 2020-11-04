import React, { FunctionComponent, useContext, useEffect, useState } from 'react';
import { SessionFormContextType } from '../../../../App.Types';
import SkillRatingProps from './SkillRating.AddSession.Types';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import useStyles from './SkillRating.AddSession.Styles';
import MediaCard from '../../../../UI/MediaCard/MediaCard.UI';
import useGetRank, { YourRank } from '../../../../hooks/useGetRank/useGetRank';
import CSS from 'csstype';
import FormComponentWrapper from '../../../../UI/FormComponentWrapper/FormComponentWrapper.UI.Component';
import Stepper from '../../../Stepper';
import SessionFormContext from '../../../../contexts/SessionForm/SessionForm.Context';

const SkillRating: FunctionComponent<SkillRatingProps> = () => {
    const cardPictureStyles: CSS.Properties = { backgroundSize: "contain", margin: '1em' };

    const classes = useStyles();

    const [state, setState]: SessionFormContextType = useContext(SessionFormContext);

    const [disabled, setDisabled] = useState<boolean>(true);

    const [error, setError] = useState<boolean>(false);

    const [input, setInput] = useState<string>('');

    const skillRating = state.skillRating || 0;

    const rank: YourRank = useGetRank(skillRating);

    function setSkillrating(val: number) {
        const newState = {
            ...state,
            skillRating: val
        };

        setState(newState);
    }

    function next() {
        const newState = {
            ...state,
            step: state.step + 1,
        };

        setState(newState);
    }

    function validateInput(value: number) {
        console.log(value)

        if (isNaN(value)) {
            setError(true);
            setDisabled(true);
            return;
        } else if (value > 5000) {
            setError(true);
            setDisabled(true);
            return;
        } else if (value <= 0) {
            setError(true);
            setDisabled(true);
            return;
        } else {
            setError(false);
            setDisabled(false)
        }
    };

    function handleChange(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
        const value: number = parseInt(e.target.value, 10);
        validateInput(value);
        setInput(value.toString());
        setSkillrating(value);
    }

    //if undefined on mount, will be disabled by default. else, there is a previous SR value
    useEffect(() => {
        if (state.skillRating !== undefined) {
            validateInput(state.skillRating);
        }

        return () => {
            setDisabled(true);
        }
    }, []);

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography style={{ lineHeight: '1' }} variant={'subtitle1'} component={'strong'}>
                    Please enter a skillrating to start this session from.
                </Typography>
            </Grid>
            <Grid style={{ height: '60%' }} item xs={12}>
                <MediaCard
                    cardMediaStyle={cardPictureStyles}
                    title={skillRating.toString()}
                    subtitle={rank.name}
                    image={rank.icon}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    required
                    type="number"
                    variant="outlined"
                    className={classes.numInputHideArrows}
                    value={input}
                    error={error}
                    inputProps={{ min: 1, max: 5000 }}
                    onChange={(e) => handleChange(e)}
                    label="New Skill Rating"
                />
            </Grid>
            <Stepper formContext={SessionFormContext} disabled={disabled} />
        </Grid>
    );
}

export default SkillRating;