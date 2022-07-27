
import React, { useState } from 'react'
import { Grid, Typography, TextField, Rating, Button, Box, RadioGroup, FormControlLabel, Radio, Alert } from '@mui/material'
import useStyles from './FormStyle';
import SportsBarIcon from '@mui/icons-material/SportsBar';
import { Color } from '../../../container/constants/color'

export interface BeerSpecs {
    name: string,
    percentage: number,
    ibu: number,
    nota: number,
    coloracao: string
};

const Form = () => {

    const [beerRate, setBeerRate] = useState<BeerSpecs>({} as BeerSpecs);
    const [xablau, setXablau] = useState<String[]>([]);
    const [alert, setAlert] = useState(false);

    const classes = useStyles();

    const submitHandler = () => {
        let erro = valida(beerRate);

        if (erro.length === 0) {
            localStorage.setItem('BeerList', JSON.stringify(beerRate));
        } else {
            setXablau(erro);
            setAlert(true);
        }

    }

    function valida(beer: BeerSpecs) {
        let error: string[] = []
        if (!beer.name) {
            error.push('Sem nome')
        };
        if (!beer.percentage) {
            error.push('Adicione a porcentagem')
        };
        if (!beer.ibu) {
            error.push('Adicione o IBU')
        };
        if (!beer.nota) {
            error.push('Adicione a sua nota')
        };

        return error;
    };

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
                        <TextField required placeholder="GodsBeer" fullWidth variant="outlined" className={classes.input} onChange={(e) => setBeerRate({ ...beerRate, name: e.target.value })} />
                    </Grid>
                    <Grid item md={1} />
                    <Grid item className={classes.item} sm={12} md={5}>
                        <Typography>Teor alcoolico</Typography>
                        <TextField required placeholder="8%" fullWidth variant="outlined" className={classes.input} onChange={(e) => setBeerRate({ ...beerRate, percentage: Number(e.target.value) })} />
                    </Grid>
                </Grid>

                <Grid container className={classes.subcontent}>
                    <Grid item className={classes.item} sm={12} md={5}>
                        <Typography>IBU</Typography>
                        <TextField required placeholder="07" fullWidth variant="outlined" className={classes.input} onChange={(e) => setBeerRate({ ...beerRate, ibu: Number(e.target.value) })} />
                    </Grid>
                    <Grid item md={1} />
                    <Grid item className={classes.item} sm={12} md={5}>
                        <Typography style={{ paddingTop: '20px' }}>Nota</Typography>
                        <Rating name="half-rating" defaultValue={2.5} precision={0.5} className={classes.input} onChange={(_, nota) => setBeerRate({ ...beerRate, nota: nota || 0 })} />
                    </Grid>
                </Grid>
                <Typography className={classes.item}>Coloração:</Typography>
                <Grid container className={classes.subcontent}>
                    <RadioGroup defaultValue="Clara" row onChange={(e) => setBeerRate({ ...beerRate, coloracao: e.target.value as string })}>
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
                {alert ? <Alert severity="error">{xablau.map(error => <Typography>{error}</Typography> )}</Alert> : null}
            </Box>
        </Grid>
    )
}

export default Form
