import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
      display: 'flex',
      flexDirection:'column',
      height: '100%',
  },
  subcontent:{
    // border: 'solid black',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',

    
  },
  title:{
      color: theme.palette.primary.main,
      textAlign: 'center',
  },
  item:{
    paddingBottom: '20px'
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
