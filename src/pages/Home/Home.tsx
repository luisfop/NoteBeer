import React from 'react'

import { Box, Paper, Grid } from '@mui/material';
import useStyles from './HomeStyles';

const Home = () => {
    const classes = useStyles();
    return (
        <Box className={classes.page}>
            <Paper className={classes.card}>
                <Grid container className={classes.container}>
                    <Grid item className={classes.form} xs={12} md={8}>
                        {/* <Box>DSADSADSA</Box> */}
                    </Grid>
                    <Grid item className={classes.banner} xs={12} md={4}>
                        {/* <Box>asdasddsasda</Box> */}
                    </Grid>
                </Grid>
            </Paper>
        </Box>

    )
}

export default Home
