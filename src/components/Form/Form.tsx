
import React from 'react'
import { Grid, Typography, TextField, Rating, Checkbox, Button, Box } from '@mui/material'
import useStyles from './FormStyle';
import SportsBarIcon from '@mui/icons-material/SportsBar';
import { Color } from '../../container/constants/color'

const Form = () => {

    const classes = useStyles();

    return (
        <Grid container>
            <Box className={classes.container}>
                <Grid item className={classes.item}>
                    <Typography variant="h4" className={classes.title}>Saúde!</Typography>
                    <Typography>Adicione aquela gelada no seu notebeer para guardar as especificações e as boas memórias!!</Typography>
                </Grid>

                <Grid container className={classes.subcontent}>
                    <Grid item className={classes.item} sm={6} md={5}>
                        <Typography>Nome da cerveja</Typography>
                        <TextField fullWidth variant="outlined" className={classes.input} />
                    </Grid>
                    <Grid item md={1} />
                    <Grid item className={classes.item} sm={6} md={5}>
                        <Typography>Teor alcoolico</Typography>
                        <TextField fullWidth variant="outlined" className={classes.input} />
                    </Grid>
                </Grid>

                <Grid container className={classes.subcontent}>
                    <Grid item className={classes.item} sm={12} md={5}>
                        <Typography>IBU</Typography>
                        <TextField fullWidth variant="outlined" className={classes.input} />
                    </Grid>
                    <Grid item md={1} />
                    <Grid item className={classes.item} sm={12} md={5}>
                        <Typography style={{ paddingTop: '20px' }}>Nota</Typography>
                        <Rating name="half-rating" defaultValue={2.5} precision={0.5} className={classes.input} />
                    </Grid>
                </Grid>
                <Typography>Coloração:</Typography>
                <Grid container className={classes.subcontent}>
                    <Grid item>
                        <Typography>Clara</Typography>
                        <Checkbox inputProps={{ 'aria-label': 'controlled' }} icon={<SportsBarIcon />} checkedIcon={<SportsBarIcon sx={{ color: Color.primaryTheme, }} />} />
                    </Grid>
                    <Grid item>
                        <Typography>Media</Typography>
                        <Checkbox inputProps={{ 'aria-label': 'controlled' }} icon={<SportsBarIcon />} checkedIcon={<SportsBarIcon sx={{ color: Color.primaryTheme, }} />} />
                    </Grid>
                    <Grid item>
                        <Typography>Escura</Typography>
                        <Checkbox inputProps={{ 'aria-label': 'controlled' }} icon={<SportsBarIcon />} checkedIcon={<SportsBarIcon sx={{ color: Color.primaryTheme, }} />} />
                    </Grid>
                </Grid>
                <Button variant="outlined" className={classes.button}
                >Salvar</Button>
            </Box>
        </Grid>
    )
}

export default Form
