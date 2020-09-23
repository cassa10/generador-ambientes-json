import {createMuiTheme} from "@material-ui/core/styles";
import {responsiveFontSizes} from "@material-ui/core";

const color = "#64b5f6";
let theme = createMuiTheme({
    palette: {
        primary: { main: color, contrastText: '#ffffff'},
        secondary: { main: color, contrastText: '#ffffff'},
    },
    typography: {
        fontFamily: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','),
      },
});

theme = responsiveFontSizes(theme);

export default theme;