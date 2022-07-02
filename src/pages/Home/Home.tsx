import React from 'react'

import { Box, Paper } from '@mui/material';
import useStyles from './HomeStyles';

const Home = () => {
    const classes = useStyles();
    return (
        <Box>
            <Paper elevation={3} className={classes.card}>

            </Paper>
        </Box>
    )
}

export default Home
