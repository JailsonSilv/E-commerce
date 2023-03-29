import React from 'react';
import { Button, Grid, TextField } from "@material-ui/core";

const Contatos = () => {
    return(
        <>
            <Grid container direction="row" xs={12}>
                <TextField id="mame" label="Name" fullWidth></TextField>
                <TextField id="message" label="Message" fullWidth></TextField>
            </Grid>
            <Button variant='contained' color='primary'>
                Sent
            </Button>
        </>
    )
}

export default Contatos;