import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  container: {
    height: "100vh",
    position: "absolute",
    top: "0",
  },
  header: {
    backgroundColor: "#bf5700",
    color: "white",
  },
  bgImage: {
    backgroundImage: "url(https://wallpaperaccess.com/full/1566134.jpg)",
    backgroundPosition: "top center",
    filter: "blur(6px)",
    height: "100vh",
  },
}));
