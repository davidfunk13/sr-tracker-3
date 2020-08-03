import React, { Fragment, useEffect, FunctionComponent, useState } from "react";
import SelectBattletagTypes from "./SelectBattletag.View.Types";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import CardWithAvatar from "../../UI/CardWithAvatar/CardWithAvatar.UI";
import { Battletag } from "../../App.Types";
import { useHistory } from "react-router-dom";
import { useAuth0 } from "../../react-auth0-spa";
import CircularProgress from "@material-ui/core/CircularProgress";

const SelectBattletag: FunctionComponent<SelectBattletagTypes> = () => {
  const history = useHistory();

  const { getTokenSilently, user } = useAuth0();

  const [data, setData] = useState<Array<Battletag>>([]);

  const [loading, setLoading] = useState<boolean>(false);

  async function fetchBattletags() {
    setData([]);

    setLoading(true);

    const token = await getTokenSilently({
      audience: "AuthAPI",
      scope: "read:current_user",
    });

    const res = await fetch("/api", {
      method: "POST",
      headers: {
        Authorization: `bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `query{
                allBattletags {
                  _id
                  id
                  name
                  platform
                  urlName
                  isPublic
                  level
                  playerLevel
                }
              }`,
      }),
    }).then((data) => data.json());

    setLoading(false);

    console.log(res.data.allBattletags);

    setData(res.data.allBattletags);
  }

  useEffect(() => {
    const selected = localStorage.getItem("selected");

    if (selected) {
      history.push("/season");
    }
  }, [history]);

  function setSelected(selected: Battletag) {
    localStorage.setItem("selected", JSON.stringify(selected));
    history.push("/season");
  }

  useEffect(() => {
    fetchBattletags();

    return () => {
      setData([]);
    };
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <Fragment>
      <Typography gutterBottom variant={"h5"}>
        Select Battletag
      </Typography>
      <Grid container spacing={2}>
        {loading ? <CircularProgress style={{ marginTop: "10vh" }} size={100} /> : null}
        {data &&
          data.map((battletag) => {
            const battletagSplit = battletag.name.split("#");
            const name: string = battletagSplit[0];
            const numbers: string = "#" + battletagSplit[1];
            const avatarLetter = Array.from(name)[0];

            return (
              <Grid key={battletag._id} onClick={() => setSelected(battletag)} item xs={12}>
                <CardWithAvatar
                  avatarLetter={avatarLetter}
                  CardHeaderTitle={name}
                  CardHeaderSubtitle={numbers}
                />
              </Grid>
            );
          })}
      </Grid>
    </Fragment>
  );
};

export default SelectBattletag;
