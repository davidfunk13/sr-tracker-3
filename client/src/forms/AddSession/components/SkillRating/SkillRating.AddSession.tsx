import React, { FunctionComponent, useContext, useEffect, useState } from 'react';
import SkillRatingProps from './SkillRating.AddSession.Types';
import Grid from '@material-ui/core/Grid';
import useStyles from './SkillRating.AddSession.Styles';
import TextField from '@material-ui/core/TextField';
import MediaCard from '../../../../UI/MediaCard/MediaCard.UI';
import useGetRank, { YourRank } from '../../../../hooks/useGetRank/useGetRank';
import CSS from 'csstype';
import { SessionFormContextType } from '../../../../App.Types';
import FormComponentWrapper from '../../../../UI/FormComponentWrapper/FormComponentWrapper.UI.Component';
import Stepper from '../../../Stepper';
import SessionFormContext from '../../../../contexts/SessionForm/SessionForm.Context';

const SkillRating: FunctionComponent<SkillRatingProps> = () => {
    const cardPictureStyles: CSS.Properties = { backgroundSize: "contain", margin: '1em', height: '80%' };

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
        <FormComponentWrapper spacing={2}>
            <Grid style={{ height: '65%' }} item xs={12}>
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
        </FormComponentWrapper>
    );
}

export default SkillRating;