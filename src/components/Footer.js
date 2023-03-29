import React from "react";
import { Typography, AppBar, Toolbar, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    top: 'auto',
    bottom: 0,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2),
    textAlign: 'center',
}));

const Footer = () => {
    const classes = useStyles();

    return(
        <>
            <AppBar position="static"  className={classes.footer}>
                <Toolbar>
                    <Typography variant="body1" color="inherit">
                    <p>&copy; 2023 Dio Shopping. Todos os direitos reservados.</p>
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Footer;