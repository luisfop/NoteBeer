import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  xablau: {
    color: theme.palette.primary.main,
    width: '100%',
    
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
