import indigo from '@material-ui/core/colors/indigo';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        contrastThreshold: 3,
        tonalOffset: 0.2,
        primary: indigo,
        secondary: pink,
        error: {
            main: red[500],
        },
    },
});

export default theme;