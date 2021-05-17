import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#bf5700",
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#333f48",
    },
    success: {
      main: "#579d42",
    },
  },
});

export default theme;
