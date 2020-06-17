import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
        h1: {
            fontSize: '1.75em',
        }
    }
});

console.log(theme)
export default theme;