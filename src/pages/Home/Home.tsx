import React from 'react'

import { Box, Paper, Grid } from '@mui/material';
import useStyles from './HomeStyles';
import Form from '../../components/Form/Form/Form';
import Banner from '../../components/Form/Banner/Banner';

const Home = () => {
    const classes = useStyles();
    return (
        <Box className={classes.page}>
            <Paper className={classes.card}>
                <Grid container className={classes.container}>
                    <Grid item className={classes.form} xs={10} md={8}>
                        <Form />
                    </Grid>
                    <Grid item className={classes.banner} xs={2} md={4}>
                        <Banner />
                    </Grid>
                </Grid>
            </Paper>
        </Box>

    )
}

export default Home
