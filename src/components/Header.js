import React from 'react';
import { Link } from "react-router-dom";
import { Button, Grid, Typography } from "@material-ui/core";

const Header = () => {
    return(
        <Grid container direction="row" justifyContent="space-between" alignItems="center" xs={12}>
            <Link to="/">
                <Typography variant="h3">
                    Dio Shopping
                </Typography>
            </Link>
            <Link to="/">
                <Button variant="outlined">Home</Button>
            </Link>
            <Link to="/contatos">
                <Button variant="outlined">Contato</Button>
            </Link>
            

            {/* Modal */}
            <div className="modal fade" id="CartModal" tabIndex="-1" aria-labelledby="CarModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-header">
                    <h5 className="modal-title" id="CartModalLabel">Meu Carrinho</h5>
                    <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>

                <div className="modal-body table-responsive">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">Produtos</th>
                                <th scope="col">Qtd</th>
                                <th scope="col">Preço</th>
                                <th scope="col"></th>
                                <th scope="col">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th><button className='badge bg-danger'><i className='fas fa-window-close'></i></button></th>
                                <th><img className='img-fluid img-thumbnail' src='#########' alt='Flamengo 2023' width="50px"></img></th>
                                <th><span className='badge badge-pill bg-warning'>2</span></th>
                                <th>R$ 100.00</th>
                                <th><button className='badge badge-pill bg-primary'><i className='fas fa-plus'></i></button></th>
                                <th><button className='badge badge-pill bg-danger'><i className='fas fa-minus'></i></button></th>
                                <th>R$ 200.00</th>
                            </tr>
                            <tr>
                                <th colSpan="2" scope='col'>Total</th>
                                <th colSpan="3">2 itens</th>
                                <th colSpan="2">R$ 200.00</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
            </div>
    </Grid>        
    )
}

export default Header;
