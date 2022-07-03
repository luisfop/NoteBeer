import { Button, Grid, Typography, TextField } from '@mui/material'
import React from 'react'
import useStyles from './FormStyle';

const Form = () => {

    const classes = useStyles();
    
    return (
        <Grid container>
            {/* adicionar uma classe pro grid item e add tbm width: 100% */}
            <Grid item>
                <Typography>Nome</Typography>
                <TextField variant="outlined" className={classes.xablau} />
            </Grid>
        </Grid>
    )
}

export default Form
