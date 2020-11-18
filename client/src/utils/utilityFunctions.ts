import Win from "../assets/icons/other/win.png";
import Loss from "../assets/icons/other/loss.png";
import Draw from "../assets/icons/other/draw.png";

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

export function generateOutcomeString(outcome: number = 0, simple?: boolean): string {
  if (simple) {
    switch (outcome) {
      case 0:
        return "Loss";
      case 1:
        return "Win";
      case 2:
        return "Tie";
      default:
        return "";
    }
  } else {
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
}

