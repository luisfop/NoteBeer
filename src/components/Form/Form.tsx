import { Button, Grid, Typography, TextField } from '@mui/material'
import React from 'react'
import useStyles from './FormStyle';

const Form = () => {

    const classes = useStyles();
    
    return (
        <Grid container>
            <Grid item>
                <Typography>Nome</Typography>
                <TextField variant="outlined" className={classes.xablau} />
            </Grid>
        </Grid>
    )
}

export default Form
