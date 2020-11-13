import React, { Fragment, useEffect, FunctionComponent, useState } from "react";
import SelectBattletagTypes from "./SelectBattletag.View.Types";
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from '@material-ui/icons/Delete';
import CardWithAvatar from "../../UI/CardWithAvatar/CardWithAvatar.UI";
import { Battletag } from "../../App.Types";
import { useHistory, useLocation } from "react-router-dom";
import { useAuth0 } from "../../react-auth0-spa";
import CircularProgress from "@material-ui/core/CircularProgress";
import fetchGraphQL from "../../utils/fetchGraphQL";
import Modal from "../../UI/Modal/Modal.UI";
import PressHoldCard from "../../UI/PressHoldCard/PressHoldCard.UI";
import DeleteBattletag from "../../forms/DeleteBattletag/DeleteBattletag.Form";

const SelectBattletag: FunctionComponent<SelectBattletagTypes> = () => {
  const history = useHistory();

  const location = useLocation();

  const { getTokenSilently, user } = useAuth0();

  const [data, setData] = useState<Battletag[]>([]);

  const [loading, setLoading] = useState<boolean>();

  const [open, setOpen] = useState<boolean>(false);

  const [isDone, setIsDone] = useState<boolean>(false);

  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  enum PrevLocation {
    Track = 'Track',
    Stats = 'Stats'
  }

  function passthrough() {
    const prevLocation = location.state;

    switch (prevLocation) {
      case PrevLocation.Track:
        history.push('/session');
        break;
      case PrevLocation.Stats:
        history.push('/stats');
        break;
      default:
        history.push('/');
        break;
    }
  }

  //when component mounts, if user checks out fetch their battletags.
  useEffect(() => {
    if (user && user.sub) {
      fetchBattletags();
    }

    return () => {
      setData([]);
    };
  }, [user]);

  //reusable instance of grabbing a token to send to the api.
  function getToken() {
    return getTokenSilently({
      audience: "AuthAPI",
      scope: "read:current_user",
    });
  }

  // function to fetch all battletags associated with a user currently.
  async function fetchBattletags() {
    if (!user.sub) {
      console.log('error getting user sub');
      return;
    }

    const query: string = `query{
      getAllBattletags(_user:"${user.sub.split('|')[1]}"){
        _id
        name
        portrait
        createdAt
        updatedAt
        _sessions {
          _id
        }
    }
}`

    console.log(query)
    setData([]);

    setLoading(true);

    const token = await getToken();

    const res = await fetchGraphQL(token, query);

    setLoading(false);

    if (!res) {
      return console.error('Battletags came back undefined');
    }

    setData(res.getAllBattletags);
  }

  // function to set the battletag you select into localstorage to be parsed again on the battletag page.
  function setSelected(selected: Battletag) {
    localStorage.setItem("selected", JSON.stringify(selected));

    passthrough();
  }

  //delete battletag function
  async function deleteBattletag(_id: string) {
    const token = await getToken();

    const selected = localStorage.getItem("selected");

    const query: string = `mutation{
      deleteBattletag(_id: "${_id}") {
        _id
      }
    }`;

    await fetchGraphQL(token, query);

    if (selected) {
      localStorage.removeItem('selected')
    }

    fetchBattletags();
  }

  const handleButtonPress = function (e: any) {
    if (timer) {
      clearTimeout(timer)
    }

    setTimer(setTimeout(handleLongPress, 500, e));
  };

  const handleLongPress = (e: any) => {
    console.log("LongPress");
    setOpen(true)
    setIsDone(true);
  };

  const handleButtonRelease = function (e: any) {
    if (!isDone) {
      console.log("Release", isDone);
      setIsDone(true);
    }

    clearTimeout(timer as any);
  };


  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography gutterBottom variant={"h5"}>
          Select Battletag
      </Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container justify={"center"} spacing={1}>
          {loading ? <CircularProgress style={{ marginTop: "10vh" }} size={100} /> : null}

          {data && data.map((battletag) => {
            const imgUrl = 'https://d1u1mce87gyfbn.cloudfront.net/game/unlocks/' + battletag.portrait + '.png';

            const modalChildren = <DeleteBattletag deleteBattletag={() => deleteBattletag(battletag._id)} />;

            function parseDate(date: string): { date: string, time: string } {
              const parsedDate = new Date(parseInt(date as unknown as string, 10));

              return {
                date: parsedDate.toLocaleDateString(),
                time: parsedDate.toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' }),
              }
            }

            return (
              <Grid key={battletag._id} item xs={12}>
                <PressHoldCard onClick={() => setSelected(battletag)} modalTitle="Delete Battletag?" action={deleteBattletag} modalChildren={modalChildren}>
                  <Grid container spacing={2}>
                    <Grid item xs={3}>
                      <img style={{ width: '100%' }} src={imgUrl} />
                    </Grid>
                    <Grid item xs={9}>
                      <Typography variant={'h6'} component={'h3'}>
                        {battletag.name}
                      </Typography>
                      <Typography variant={'subtitle1'} component={'h3'}>
                        Sessions: {battletag && battletag._sessions ? battletag._sessions.length : 0}
                      </Typography>
                      <Typography variant={'subtitle1'} component={'h3'}>
                        Last Change: {parseDate(battletag.createdAt as string).date + ' ' + parseDate(battletag.updatedAt as string).time}
                      </Typography>
                    </Grid>
                  </Grid>
                </PressHoldCard>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
      <Modal modalControls={{ modalOpen: open, setModalOpen: setOpen }} title={'Delete Battletag'} >
      </Modal>
    </Grid >
  );
};

export default SelectBattletag;
