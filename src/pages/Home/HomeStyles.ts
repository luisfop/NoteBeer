import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  page: {
    display: "flex",
    height: "inherit",
    width: "inherit",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "700px",
    height: "500px",
  },
  container: {
    minHeight: '100%',
    width: "inherit",
    display: "flex"
  },
  form: {
    height: "inherit",
    width: "inherit",
    border: "solid red",
  },
  banner: {
    height: "inherit",
    width: "inherit",
    border: "solid blue",
  },
}));

export default useStyles;
