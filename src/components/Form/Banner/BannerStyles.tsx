import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    container: {
        minHeight: '550px',
        lineHeight: '0px',
    },
    image: {
        [theme.breakpoints.down('md')]: {
            display: 'none',
            background: 'black'
        },
    }
}));

export default useStyles;
