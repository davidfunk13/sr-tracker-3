function generateGameOutcomeString(outcome: number | undefined) {
    switch (outcome) {
        case 0:
            return 'Loss';
        case 1:
            return 'Win';
        case 2:
            return 'Tie';
        default:
            break;
    }
}

export default generateGameOutcomeString