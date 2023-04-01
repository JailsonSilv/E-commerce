import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import  store from "./components/Store"
import MainRoutes from "./routes";
import { Container } from '@material-ui/core';
import Header from "./components/Header";
import Footer from "./components/Footer";


const App = () => {
    return(
        <Provider store={store}>
            <Container maxWidth="xl">
                <Router>
                    <Header />
                    <MainRoutes />
                    <Footer />
                </Router>  
            </Container>
        </Provider>
    )
}

export default App;