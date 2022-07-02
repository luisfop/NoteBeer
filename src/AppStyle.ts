import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  app:{
    backgroundColor: '#1d1e24',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container:{
    padding: '20px',
  }

}));

export default useStyles;
