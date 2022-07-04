import { Grid, Typography, TextField, Rating } from '@mui/material'
import React from 'react'
import useStyles from './FormStyle';

const Form = () => {

    const classes = useStyles();

    return (
        <Grid container>
            <div className={classes.container}>
                <Grid item className={classes.item}>
                    <Typography variant="h4" className={classes.title}>Saúde!</Typography>
                    <Typography>Adicione aquela gelada no seu notebeer para guardar as especificações e as boas memórias!!</Typography>
                </Grid>
                <Grid item className={classes.item}>
                    <Typography>Nome da cerveja</Typography>
                    <TextField variant="outlined" className={classes.input} fullWidth />
                </Grid>
                <Grid container className={classes.subcontent}>
                    <Grid item className={classes.item}>
                        <Typography>Teor alcoolico</Typography>
                        <TextField variant="outlined" className={classes.input} />
                    </Grid>
                    <Grid item className={classes.item}>
                        <Typography>IBU</Typography>
                        <TextField variant="outlined" className={classes.input} />
                    </Grid>
                <Grid item>
                <Typography style={{paddingTop: '20px'}}>Nota</Typography>
                <Rating name="half-rating" defaultValue={2.5} precision={0.5} className={classes.input} />
                </Grid>
                </Grid>

            </div>
        </Grid>
    )
}

export default Form
