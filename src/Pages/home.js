import { Button, Container, Grid, List, ListItem, ListItemText, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';

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
        <Container maxWidth="xl">
            <Grid container spacing={3} className={classes.root}>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        <Typography variant='h5'>
                            Categorias
                        </Typography>
                        <List>
                            <ListItem>
                                <ListItemText 
                                    primary="Times nacionais"
                                    secondary="3"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="Times internacionais"
                                    secondary="3"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="Times históricos"
                                    secondary="3"
                                />
                            </ListItem>
                        </List>
                    </Paper>
                </Grid>
                <Grid container xs={9} spacing={3} className={classes.root}>
                    <Grid item sx={3}>
                        <Paper className={classes.root}>
                            <Grid container direction='column'>
                                <Grid item>
                                    <img width="140px" src='####' alt='Flamengo 2023'></img>
                                    <Typography variant='h6'>
                                        Produto 
                                    </Typography>
                                    <Typography variant='subtitle1'>
                                        R$ 349.99
                                    </Typography>
                                </Grid>
                                <Button variant='contained'>Adicionar</Button>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Home;