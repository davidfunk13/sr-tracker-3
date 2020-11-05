import React, { Fragment, useEffect, FunctionComponent, useState } from "react";
import SelectBattletagTypes from "./SelectBattletag.View.Types";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import CardWithAvatar from "../../UI/CardWithAvatar/CardWithAvatar.UI";
import { Battletag } from "../../App.Types";
import { useHistory, useLocation } from "react-router-dom";
import { useAuth0 } from "../../react-auth0-spa";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Button } from "@material-ui/core";
import fetchGraphQL from "../../utils/fetchGraphQL";

const SelectBattletag: FunctionComponent<SelectBattletagTypes> = () => {
  // use these to get where to send the user when they select a tag.
  const history = useHistory();
  const location = useLocation();

  // auth0 hooks
  const { getTokenSilently, user } = useAuth0();

  // when data arrives from the api it is stored here
  const [data, setData] = useState<Battletag[]>([]);

  // handles application loading state 
  const [loading, setLoading] = useState<boolean>();

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
      }
    }
    `
    setData([]);

    setLoading(true);

    const token = await getToken();

    const res = await fetchGraphQL(token, query);

    setLoading(false);

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

    const query: string = `mutation{
      deleteBattletag(_id: "${_id}") {
        _id
      }
    }`;

    await fetchGraphQL(token, query);

    fetchBattletags();
  }


  return (
    <Fragment>
      <Typography gutterBottom variant={"h5"}>
        Select Battletag
      </Typography>
      <Grid container justify={"center"} spacing={2}>
        {loading ? <CircularProgress style={{ marginTop: "10vh" }} size={100} /> : null}
        {data.length ? 'yes' : 'no'}
        {data && data.map((battletag) => {
          const battletagSplit = battletag.name.split("#");
          const name: string = battletagSplit[0];
          const numbers: string = "#" + battletagSplit[1];
          const avatarLetter = Array.from(name)[0];

          return (
            <Grid key={battletag._id} item xs={12}>
              <CardWithAvatar
                avatarLetter={avatarLetter}
                CardHeaderTitle={name}
                CardHeaderSubtitle={numbers}
              >
                <Button onClick={() => setSelected(battletag)}>Select</Button>
                <Button color={'secondary'} onClick={() => deleteBattletag(battletag._id)}>Delete</Button>
              </CardWithAvatar>
            </Grid>
          );
        })}
      </Grid>
    </Fragment>
  );
};

export default SelectBattletag;
