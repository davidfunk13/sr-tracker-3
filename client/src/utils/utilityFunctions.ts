import Win from "../assets/icons/other/win.png";
import Loss from "../assets/icons/other/loss.png";
import Draw from "../assets/icons/other/draw.png";
import { useAuth0 } from "../react-auth0-spa";
export function generateOutcomeIcon(outcome: number = 3): string {
  switch (outcome) {
    case 0:
      return Loss;
    case 1:
      return Win;
    case 2:
      return Draw;
    case 3:
      return "";
    default:
      return "";
  }
}

export function generateOutcomeString(outcome: number = 0): string {
  switch (outcome) {
    case 0:
      return "Defeat";
    case 1:
      return "Victory";
    case 2:
      return "Draw";
    default:
      return "";
  }
}

export async function fetchGraphQL(token: string, query: string) {
  const res = await fetch("/api", {
    method: "POST",
    headers: {
      Authorization: `bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: query,
    }),
  }).then((data) => {
    console.log(data);
    return data.json();
  });
  console.log(res);
  return res.data;
}
