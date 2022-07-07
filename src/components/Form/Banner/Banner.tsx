import { Box } from '@mui/material'
import React from 'react'
import BeerImage from '../../../assets/beer4.jpeg'
import useStyles from './BannerStyles';

const Banner = () => {
    const classes = useStyles();
    return (
        <Box className={classes.container}>
            <img src={BeerImage} height="550px" width="100%" className={classes.image} />
        </Box>
    )
}

export default Banner
