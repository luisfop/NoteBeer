import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  page: {
    display: "flex",
    height: "inherit",
    width: "inherit",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down('sm')]: {
      height: 'unset'
  },
  },
  card: {
    width: "90vw",
    minHeight: "550px",
    margin: '10px',
  },
  container: {
    height: '100%',
    width: "100%",
    display: "flex",
  },
  form: {
    padding: '10px',
    height: "100%",
    width: '100%',
  },
  banner: {
    minHeight: "550px",
    background: '#fbbb01',
  },
}));

export default useStyles;
