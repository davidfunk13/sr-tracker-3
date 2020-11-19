import React, { FunctionComponent } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CircularProgress from '@material-ui/core/CircularProgress';
import LineChart from '../../../UI/Charts/LineChart/LineChart.UI';
import SkillratingChartProps from './Skillrating.Component.Types';
import { Game, LineChartData } from '../../../App.Types';
import { generateOutcomeString } from '../../../utils/utilityFunctions';
import useGetRank from '../../../hooks/useGetRank/useGetRank';
import useStyles from './Skillrating.Component.Styles';

function processGames(input: Game[]): LineChartData[] {
    const processed: LineChartData[] = [];

    input.map((game, index) => {
        if (index === 0) {
            const startingSr: LineChartData = {
                x: 0, y: game.rankIn, label: 'Start'
            };

            processed.push(startingSr);
        }

        const chartObj: LineChartData = { x: index + 1, y: game.rankOut, label: generateOutcomeString(game.outcome, true).charAt(0) };

        processed.push(chartObj);
    });

    return processed;
};

const SkillratingChart: FunctionComponent<SkillratingChartProps> = ({ games }) => {

    const classes = useStyles();
    const srStart = games && games.length ? games[0].rankIn : 0;
    const srCurrent = games && games.length ? games[games.length - 1].rankOut : 0;
    const rankStart = useGetRank(srStart);
    const rankCurrent = useGetRank(srCurrent);

    return (
        <Grid item xs={12} sm={6}>
            <Typography variant={'h6'}>Skillrating Over Session</Typography>
            {games.length ?
                <Card>
                    <LineChart data={processGames(games)} />
                    <Grid container>
                        <Grid item xs={4}>
                            <Typography align={'center'} variant={'subtitle1'}>
                                Starting:
                            </Typography>
                            <img className={classes.rankIcon} src={rankStart.icon.toString()} alt="" />
                            <Typography align={'center'} variant={'subtitle1'}> {games[0].rankIn}</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography align={'center'} variant={'subtitle1'}>
                                Current:
                            </Typography>
                            <img className={classes.rankIcon} src={rankCurrent.icon.toString()} alt="" />
                            <Typography align={'center'} variant={'subtitle1'}>{games[games.length - 1].rankOut}</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography align={'center'} variant={'subtitle1'}>
                                Difference:
                            </Typography>
                            <img className={classes.rankIcon} src={rankCurrent.icon.toString()} alt="" />
                            <Typography align={'center'} variant={'subtitle1'}>
                                {/* all this trash just shows you either gained (+) or lost (-) sr and the differential. */}
                                {games[games.length - 1].rankOut - games[0].rankIn > 0 ?
                                    ('+ ' + (games[games.length - 1].rankOut - games[0].rankIn)) : ('- ' + Math.abs(games[games.length - 1].rankOut - games[0].rankIn))
                                }
                            </Typography>
                        </Grid>
                    </Grid>
                </Card>
                :
                <Grid container justify={'center'}>
                    <CircularProgress style={{ margin: "5vh 0" }} size={100} />
                </Grid>
            }
        </Grid>
    )
}

export default SkillratingChart;
