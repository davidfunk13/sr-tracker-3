import { Grid, Typography } from "@material-ui/core";
import React, { FunctionComponent, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Game, RoleObject, SessionType } from "../../App.Types";
import useGetRank from "../../hooks/useGetRank/useGetRank";
import { useAuth0 } from "../../react-auth0-spa";
import MediaCard from "../../UI/MediaCard/MediaCard.UI";
import convertRoleKey from "../../utils/convertRoleKey";
import fetchGraphQL from "../../utils/fetchGraphQL";
import useStyles from "./SessionInfo.Styles";
import getSelectedSession from '../../utils/getSelectedSession'
import SessionInfoProps from "./SessionInfo.Types";

const cardMediaStyle = {
    margin: '1em',
    backgroundSize: 'contain',
};

const initialSessionState: SessionType = { _id: '', _games: [], sessionRole: 3, skillRatingStart: 0, skillRatingCurrent: 0, createdAt: '' };

const SessionInfo: FunctionComponent<SessionInfoProps> = () => {
    const sessionStorage = JSON.parse(localStorage.getItem('_session') as string) as { _session: string };

    const { getTokenSilently, user } = useAuth0();

    const classes = useStyles();

    const history = useHistory();

    const [sessionLoading, setSessionLoading] = useState<boolean>(false);

    const [loading, setIsLoading] = useState<boolean>(false);

    const [games, setGames] = useState<Game[]>([]);

    const [session, setSession] = useState<SessionType>(initialSessionState);

    const start = useGetRank(session.skillRatingStart);
    const current = useGetRank(session.skillRatingCurrent);

    const role: RoleObject = convertRoleKey(session.sessionRole);

    // async function getSelectedSession(_session: string) {
    //     setSessionLoading(true);

    //     const query: string = `{
    //     getOneSession(_id: "${_session}") {
    //         _id
    //         skillRatingStart
    //         skillRatingCurrent
    //         sessionRole
    //         createdAt
    //         _games {
    //             _id
    //             _session
    //             outcome
    //             createdAt
    //             }
    //         }
    //     }` ;

    //     const token = await getTokenSilently({
    //         audience: "AuthAPI",
    //         scope: "read:current_user",
    //     });

    //     const res: { getOneSession: any } = await fetchGraphQL(token, query);

    //     if (res === undefined) {
    //         console.error('ALL SESSIONS RETURNED UNDEFINED');
    //         return;
    //     }
    //     console.log('hit it')
    //     setSession(res.getOneSession);

    //     setSessionLoading(false);
    // };


    async function getAllGames(_session: string) {
        setIsLoading(true);

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
        // conosole.log(query)
        const games = await fetchGraphQL(token, query);

        if (games && games.getAllGames) {
            setGames(games.getAllGames);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (!sessionStorage) {
            console.error('No Session found in storage.');
            history.push('/');
            return;
        }

        async function fetchData() {
            const token = await getTokenSilently({
                audience: "AuthAPI",
                scope: "read:current_user",
            });

            const query: string = `{
                getOneSession(_id: "${sessionStorage._session}") {
                    _id
                    skillRatingStart
                    skillRatingCurrent
                    sessionRole
                    createdAt
                    _games {
                        _id
                        _session
                        outcome
                        createdAt
                        }
                    }
                }` ;

            getSelectedSession(token, setSession, setIsLoading, query);
        }

        fetchData();
        // getAllGames(sessionStorage._session);

        return () => {
            setSession(initialSessionState)
        }
    }, []);

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography gutterBottom variant={'h4'}>
                    {role.name} Session
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <MediaCard
                    cardMediaStyle={cardMediaStyle}
                    title={start.skillRating.toString()}
                    subtitle={start.name}
                    image={start.icon}
                />
            </Grid>
            <Grid item xs={6}>
                <MediaCard
                    cardMediaStyle={cardMediaStyle}
                    title={current.skillRating.toString()}
                    subtitle={current.name}
                    image={current.icon}
                />
            </Grid>
            {/* <Typography gutterBottom variant={'h5'}>
                    Skillrating Start - Skillrating Current
                </Typography>
                <Typography gutterBottom variant={'h5'}>
                    {session.skillRatingStart} - {session.skillRatingCurrent}
                </Typography>
                <MediaCard
                    cardMediaStyle={cardMediaStyle}
                    title={start.name}
                    image={start.icon}
                />
                <Typography gutterBottom variant={'h5'}>
                    Wins - Losses - Draws
                </Typography>
                <Typography gutterBottom variant={'h5'}>
                    {wins} - {losses} - {ties}
                </Typography> */}
        </Grid>
    );

}
export default SessionInfo;
