import {createMuiTheme} from "@material-ui/core/styles";
import {responsiveFontSizes} from "@material-ui/core";

const color = "#64b5f6";
let theme = createMuiTheme({
    palette: {
        primary: { main: color, contrastText: '#ffffff'},
        secondary: { main: color, contrastText: '#ffffff'},
    }
});

theme = responsiveFontSizes(theme);

export default theme;