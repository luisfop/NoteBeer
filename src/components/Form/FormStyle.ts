import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%",
  },
  subcontent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: '20px',
  },
  title: {
    color: theme.palette.primary.main,
    textAlign: "center",
  },
  item: {
    paddingBottom: "20px",
    width: '100%',
    textAlign: 'center'
  },
  button: {
    "&.MuiButton-outlined": {
        border: `${theme.palette.primary.main} solid`,
        color: `${theme.palette.primary.main}`,
        "&:hover ": {
            backgroundColor: `${theme.palette.primary.main}4D`,
            border: `${theme.palette.primary.main} solid`,
          },
      }
  },
  input: {
    color: theme.palette.primary.main,
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: `${theme.palette.primary.main}`,
      },
      "&:hover fieldset": {
        borderColor: "black",
      },
      "&.Mui-focused fieldset": {
        borderColor: `${theme.palette.primary.main}`,
      },
    },
  },
}));

export default useStyles;
