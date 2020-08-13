import React, { Fragment, useEffect, FunctionComponent, useState } from "react";
import SelectBattletagTypes from "./SelectBattletag.View.Types";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import CardWithAvatar from "../../UI/CardWithAvatar/CardWithAvatar.UI";
import { Battletag } from "../../App.Types";
import { useHistory } from "react-router-dom";
import { useAuth0 } from "../../react-auth0-spa";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Button } from "@material-ui/core";
import fetchGraphQL from "../../utils/fetchGraphQL";
import Modal from "../../UI/Modal/Modal.UI";

const SelectBattletag: FunctionComponent<SelectBattletagTypes> = () => {
  const history = useHistory();

  const { getTokenSilently, user } = useAuth0();

  const [data, setData] = useState<Array<Battletag>>([]);

  const [loading, setLoading] = useState<boolean>();

  const [open, setOpen] = useState<boolean>(false);

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

    const token = await getTokenSilently({
      audience: "AuthAPI",
      scope: "read:current_user",
    });

    const res = await fetchGraphQL(token, query);

    setLoading(false);

    setData(res.getAllBattletags);
  }

  function setSelected(selected: Battletag) {
    localStorage.setItem("selected", JSON.stringify(selected));
    history.push("/season");
  }

  async function deleteBattletag(_id: string) {

    const token = await getTokenSilently({
      audience: "AuthAPI",
      scope: "read:current_user",
    });

    const query: string = `mutation{
      deleteBattletag(_id: "${_id}") {
        _id
      }
    }`;

    await fetchGraphQL(token, query).then(data => console.log(data));
    fetchBattletags();
  }

  useEffect(() => {
    const selected = localStorage.getItem("selected");

    if (selected) {
      history.push("/season");
    }
  }, [history]);

  useEffect(() => {
    if (user && user.sub) {
      fetchBattletags();
    }

    return () => {
      setData([]);
    };
  }, [user]);

  return (
    <Fragment>
      <Typography gutterBottom variant={"h5"}>
        Select Battletag
      </Typography>
      {loading ?
        <Grid container justify={"center"} spacing={2}>
          <CircularProgress style={{ marginTop: "10vh" }} size={100} />
        </Grid> : null}
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
    </Fragment>
  );
};

export default SelectBattletag;
