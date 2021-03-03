import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import './App.css';

import Home from '../home/Home.js';
import Footer from '../../components/footer/Footer.js';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>

            <Footer />
        </BrowserRouter>
    );
}

export default App;
