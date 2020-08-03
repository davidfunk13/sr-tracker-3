import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import CardWithAvatar from "../../UI/CardWithAvatar/CardWithAvatar.UI";
import LinkProps from "./Link.View.Types";
import { BlizzAPIBattletag } from "../../App.Types";
import { useAuth0 } from "../../react-auth0-spa";

const Link: React.FC<LinkProps> = () => {
  const { getTokenSilently } = useAuth0();

  const [loading, setLoading] = useState<boolean>(false);

  const [search, setSearch] = useState<string>("");

  const [data, setData] = useState<[] | [BlizzAPIBattletag]>([]);

  async function fetchBattletags() {
    setData([])
    
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
          searchBattletags(battletag:"${search}") {
            id
            playerLevel
            name
          }
        }`,
      }),
    }).then((data) => data.json());
    
    setLoading(false);
    
    console.log(res.data.searchBattletags)
    
    setData(res.data.searchBattletags)
  }

  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Typography variant={"h4"}>Link New Battletag</Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="outlined-search"
          fullWidth
          required
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          label="Search for Battletag"
          type="search"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12}>
        <Button
          onClick={() => fetchBattletags()}
          variant="contained"
          color="primary"
        >
          Search
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Grid container justify={"center"} spacing={2}>
          {loading ? <CircularProgress style={{ marginTop: "10vh" }} size={100} /> : null}
          {!data.length ? null : data.map((battletag) => {
            const battletagSplit = battletag.name.split("#");
            const name: string = battletagSplit[0];
            const numbers: string = "#" + battletagSplit[1];
            const avatarLetter = Array.from(name)[0];

            return (
              <Grid key={battletag.id} item xs={12}>
                <CardWithAvatar
                  key={battletag.name}
                  avatarLetter={avatarLetter}
                  CardHeaderTitle={name}
                  CardHeaderSubtitle={numbers}
                />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Link;
