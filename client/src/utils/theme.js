import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
    }
});

console.log(theme)
export default theme;