import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import React, { FunctionComponent, useEffect, useState } from 'react'
import { Game, LineChartData, SessionType } from '../../App.Types';
import { useAuth0 } from '../../react-auth0-spa';
import LineChart from '../../UI/Charts/LineChart/LineChart.UI';
import PercentPie from '../../UI/Charts/PercentPie/PercentPie.UI';
import fetchGraphQL from '../../utils/fetchGraphQL';
import getSelectedSession from '../../utils/getSelectedSession';
import { SessionStatsProps } from './SessionStats.View.Types';
import { generateOutcomeString } from '../../utils/utilityFunctions';
import useGetRank from '../../hooks/useGetRank/useGetRank';
import SkillratingChart from '../../components/Charts/Skillrating/SkillratingChart.Component';
import WinPercentage from '../../components/Charts/WinPercentage/WinPercentage.Component';

const SessionStats: FunctionComponent<SessionStatsProps> = () => {
    const { getTokenSilently } = useAuth0();

    // const [session, setSession] = useState<SessionType | undefined>(undefined);

    const [games, setGames] = useState<Game[]>([]);

    const [loading, setLoading] = useState<boolean>(false);

    const sessionStorage = JSON.parse(localStorage.getItem('_session') as string) as { _session: string };

    // async function fetchData() {
    //     const token = await getTokenSilently({
    //         audience: "AuthAPI",
    //         scope: "read:current_user",
    //     });

    //     const query: string = `{
    //         getOneSession(_id: "${sessionStorage._session}") {
    //             _id
    //             skillRatingStart
    //             skillRatingCurrent
    //             sessionRole
    //             createdAt
    //             _games {
    //                 _id
    //                 _session
    //                 outcome
    //                 createdAt
    //                 }
    //             }
    //         }` ;

    //     // getSelectedSession(token, setSession, setLoading, query);

    // };

    async function getAllGames(_session: string) {
        setLoading(true);

        const token = await getTokenSilently({
            audience: "AuthAPI",
            scope: "read:current_user",
        });

        const query: string = `
        query{
            getAllGames(_session: "${_session}"){
                role
                mapPlayed
                heroesPlayed
                outcome
                rankIn
                rankOut
            }
        }`;

        const games = await fetchGraphQL(token, query);

        if (games && games.getAllGames) {
            setGames(games.getAllGames);
            setLoading(false);
        }
    };

    useEffect(() => {
        getAllGames(sessionStorage._session);
    }, []);

    useEffect(() => {
        console.log(games);
    }, [games]);

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} >
                <Typography variant={'h4'} >
                    This Session
                </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Card>
                    <SkillratingChart games={games} />
                </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
                <WinPercentage games={games} />
            </Grid>
            {/* <Grid item xs={12} sm={6}>
                <Card>
                    <PercentPie value={20} />
                </Card>
            </Grid> */}
        </Grid >
    )

}

export default SessionStats;