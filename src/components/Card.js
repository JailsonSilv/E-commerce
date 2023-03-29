import React from "react";
import { Button, Grid, makeStyles, Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center'
    },
}));


const Card = ({ namePro, price, image, children }) => {
    const classes = useStyles();

    return(
        <Grid item sx={3}>
            <Paper className={classes.paper}>
                <Grid container direction='column'>
                    <Grid item>
                        <img width="140px" src={image} alt={namePro}/>
                        <Typography variant='h6'>
                            {children}
                        </Typography>
                        <Typography variant='subtitle1'>
                            R$ {price}
                        </Typography>
                    </Grid>
                    <Button variant='contained'>Adicionar</Button>
                </Grid>
            </Paper>
        </Grid>
    )
}


export default Card;