import React from 'react';
import { Grid, List, makeStyles, Paper, Typography } from '@material-ui/core';
import Item from '../components/Item';
import Card from '../components/Card';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: '5px',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center'
    },
}));

const Home = () => {
    const classes = useStyles();

    return(
        <Grid container spacing={3} className={classes.root}>
            <Grid item xs={3}>
                <Paper className={classes.paper}>
                    <Typography variant='h5'>
                        Categorias
                    </Typography>
                    <List>
                        <Item
                            name="Times Nacionais"
                            details="592"
                        />
                        <Item
                            name="Times Internacionais"
                            details="9249"
                        />
                        <Item
                            name="Seleções"
                            details="2894"
                        />
                    </List>
                </Paper>
            </Grid>
            <Grid container xs={9} spacing={3} className={classes.root}>
                <Card name="Flamengo 2023" price="349.99" image="./images/Camisa-fla-2023.webp">
                    Flamengo
                </Card>
            </Grid>
    </Grid>
    )
}

export default Home;