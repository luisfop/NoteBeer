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
    width: "800px",
    height: "500px",
  },
  container: {
    height: '100%',
    width: "100%",
    display: "flex",
  },
  form: {
    padding: '10px',
    height: "100%",
    border: "solid red",
  },
  banner: {
    height: "inherit",
    // border: "solid blue",
    background: '#fbbb01',

  },
}));

export default useStyles;
