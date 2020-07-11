import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Aside from './components/Aside';
import Footer from './components/Footer';
import Inicio from './components/templates/Inicio';
import Producto from './components/templates/Producto';

const Error404 = () => (
    <div className="ed-grid">
        <h1>Error de página</h1>
        <span>Paágina no encontrada</span>
    </div>
)
class Application extends Component {

    render() {
        return (
            <Router>
                <div className="wrapper">

                    <Header />
                    <Aside />

                    <div className="content-wrapper">
                        <section className="content">
                            <Switch>
                                <Route exact path='/laravelreact/public' component={Inicio} />
                                <Route exact path='/laravelreact/public/producto' component={Producto} />
                                <Route component={Error404} />
                            </Switch>
                        </section>
                    </div>

                    <Footer />
                </div>
            </Router>
        );
    }
}

export default Application;