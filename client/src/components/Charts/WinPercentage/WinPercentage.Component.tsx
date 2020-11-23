import React, { FunctionComponent, MutableRefObject, RefObject, useEffect, useRef, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import WinPercentageProps from './WinPercentage.Types';
import useStyles from './WinPercentage.Styles';
import PercentPie from '../../../UI/Charts/PercentPie/PercentPie.UI';
import { Game } from '../../../App.Types';

const WinPercentage: FunctionComponent<WinPercentageProps> = ({ games }) => {
    const classes = useStyles();

    const [value, setValue] = useState<number>(0);

    const chartRef = useRef(null);
    let losses = games.filter(game => game.outcome === 0).length;
    let wins = games.filter(game => game.outcome === 1).length;
    let draws = games.filter(game => game.outcome === 2).length;

    useEffect(() => {
        if (games.length) {
            const winPercentage = ((wins + 0.5 * draws) / games.length) * 100;
            setValue(winPercentage);
        }
    }, [games]);

    return (
        <Grid item xs={12} sm={6}>
            <Typography variant={'h6'}>Win Percentage</Typography>
            <Card>
                <div ref={chartRef}>
                    <PercentPie value={value} />
                </div>
            </Card>
            <Typography align={'center'} variant={'h6'}>Wins Losses Draws</Typography>
            <Typography align={'center'} variant={'h6'}>{wins} - {losses} - {draws}</Typography>
        </Grid>
    )
}

export default WinPercentage;
