import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import CardWithAvatar from "../../UI/CardWithAvatar/CardWithAvatar.UI";
import LinkProps from "./Link.View.Types";
import { BlizzAPIBattletag } from "../../App.Types";
import { useAuth0 } from "../../react-auth0-spa";
import { fetchGraphQL } from "../../utils/utilityFunctions";
import { useHistory } from "react-router-dom";
import dispatchNotification from "../../utils/dispatchNotification";

const Link: React.FC<LinkProps> = () => {
  const history = useHistory();
  const { getTokenSilently, user } = useAuth0();

  const [loading, setLoading] = useState<boolean>(false);

  //yo you need to handle special characters here and backend.
  const [search, setSearch] = useState<string>("");

  const [data, setData] = useState<[] | [BlizzAPIBattletag]>([]);

  function getToken() {
    return getTokenSilently({
      audience: "AuthAPI",
      scope: "read:current_user",
    });
  }

  const query: string = `query{
            searchBattletags(battletag:"${search}") {
              id
              isPublic
              level
              playerLevel
              name
              platform
              portrait
              urlName
            }
          }`;

  async function fetchBattletags() {
    const token = await getToken();

    setData([]);

    setLoading(true);

    const data = await fetchGraphQL(token, query);

    setLoading(false);

    setData(data.searchBattletags);
  }

  async function linkBattletag(input: any) {
    console.log({ input }, user.sub.split('|')[1]);
    const query = `mutation{
      createBattletag(input:{
        _user:"${user.sub.split('|')[1]}"
        id: ${input.id}
        isPublic: ${input.isPublic}
        level: ${input.level}
        name: "${input.name}"
        platform: "${input.platform}"
        playerLevel: ${input.playerLevel}
        portrait: "${input.portrait}"
        urlName: "${input.urlName}"
      }){
        _id
        name
      }
  }`;

    const token = await getToken();

    const data = await fetchGraphQL(token, query);
    if (data.createBattletag && data.createBattletag._id){
      dispatchNotification({type: 'success', title: `Successfully linked ${data.createBattletag.name}`, message: "Battletag successfully linked to user" });
      return history.push('/');
    }
    console.log(data);
  }

function testNotification () {
  dispatchNotification({type: 'success', title: 'Successfully Linked Batteletag', message: "Battletag successfully linked to user" });
}

  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Typography variant={"h4"}>Link New Battletag</Typography>
      </Grid>
      <Grid item xs={12}>
    <Button onClick={()=> testNotification()}>Send Test Notification</Button>
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
        <Button onClick={() => fetchBattletags()} variant="contained" color="primary">
          Search
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Grid container justify={"center"} spacing={2}>
          {loading ? <CircularProgress style={{ marginTop: "10vh" }} size={100} /> : null}
          {data && data.length ? data.map((battletag) => {
            const battletagSplit = battletag.name.split("#");
            const name: string = battletagSplit[0];
            const numbers: string = "#" + battletagSplit[1];
            const avatarLetter = Array.from(name)[0];

            return (
              <Grid onClick={() => linkBattletag(battletag)} key={battletag.id} item xs={12}>
                <CardWithAvatar
                  key={battletag.name}
                  avatarLetter={avatarLetter}
                  CardHeaderTitle={name}
                  CardHeaderSubtitle={numbers}
                />
              </Grid>
            );
          }) : null}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Link;
