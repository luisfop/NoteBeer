
import React, { useState } from 'react'
import { Grid, Typography, TextField, Rating, Checkbox, Button, Box, RadioGroup, FormControlLabel, Radio } from '@mui/material'
import useStyles from './FormStyle';
import SportsBarIcon from '@mui/icons-material/SportsBar';
import { Color } from '../../container/constants/color'

export interface BeerSpecs {
    name: string,
    percentage: number,
    ibu: number,
    nota: number,
    coloracao: string
};

const Form = () => {

    const [beerRate, setBeerRate] = useState<BeerSpecs>({} as BeerSpecs);

    const classes = useStyles();

    const submitHandler = () => {
        console.log('Beer to save ->', beerRate);

        //TODO: add the localStorage handler
    }


    return (
        <Grid container>
            <Box className={classes.container}>
                <Grid item className={classes.item}>
                    <Typography variant="h4" className={classes.title}>Saúde!</Typography>
                    <Typography>Adicione aquela gelada no seu notebeer para guardar as especificações e as boas memórias!!</Typography>
                </Grid>

                <Grid container className={classes.subcontent}>
                    <Grid item className={classes.item} sm={12} md={5}>
                        <Typography>Nome da cerveja</Typography>
                        <TextField fullWidth variant="outlined" className={classes.input} onChange={(e) => setBeerRate({ ...beerRate, name: e.target.value })} />
                    </Grid>
                    <Grid item md={1} />
                    <Grid item className={classes.item} sm={12} md={5}>
                        <Typography>Teor alcoolico</Typography>
                        <TextField fullWidth type="number" variant="outlined" className={classes.input} onChange={(e) => setBeerRate({ ...beerRate, percentage: Number(e.target.value) })} />
                    </Grid>
                </Grid>

                <Grid container className={classes.subcontent}>
                    <Grid item className={classes.item} sm={12} md={5}>
                        <Typography>IBU</Typography>
                        <TextField fullWidth variant="outlined" className={classes.input} onChange={(e) => setBeerRate({ ...beerRate, ibu: Number(e.target.value) })} />
                    </Grid>
                    <Grid item md={1} />
                    <Grid item className={classes.item} sm={12} md={5}>
                        <Typography style={{ paddingTop: '20px' }}>Nota</Typography>
                        <Rating name="half-rating" defaultValue={2.5} precision={0.5} className={classes.input} onChange={(_, nota) => setBeerRate({ ...beerRate, nota: nota || 0 })} />
                    </Grid>
                </Grid>
                <Typography className={classes.item}>Coloração:</Typography>
                <Grid container className={classes.subcontent}>
                    <RadioGroup row onChange={(e) => setBeerRate({ ...beerRate, coloracao: e.target.value as string })}>
                        <Grid item xs={12} md={4}>
                            <FormControlLabel value="Clara" control={<Radio icon={<SportsBarIcon />} checkedIcon={<SportsBarIcon sx={{ color: Color.primaryTheme, }} />} />} label="Clara" />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <FormControlLabel value="Média" control={<Radio icon={<SportsBarIcon />} checkedIcon={<SportsBarIcon sx={{ color: Color.primaryTheme, }} />} />} label="Média" />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <FormControlLabel value="Escura" control={<Radio icon={<SportsBarIcon />} checkedIcon={<SportsBarIcon sx={{ color: Color.primaryTheme, }} />} />} label="Escura" />
                        </Grid>
                    </RadioGroup>
                </Grid>
                <Button variant="outlined" className={classes.button} onClick={submitHandler}>Salvar</Button>
            </Box>
        </Grid>
    )
}

export default Form
