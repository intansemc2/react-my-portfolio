import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import './App.css';

import Navbar from '../../components/navbar/Navbar.js';
import Home from '../home/Home.js';
import About from '../about/About.js';
import Service from '../service/Service.js';
import Work from '../work/Work.js';
import Contact from '../contact/Contact.js';
import WorkSinglePage from '../work-single-page/WorkSinglePage.js';
import Footer from '../../components/footer/Footer.js';

import Spacing from '../../components/spacing/Spacing.js';

function App() {
    return (
        <BrowserRouter>
            <Navbar />

            <Spacing space="4" />

            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>

                <Route path="/about">
                    <About />
                </Route>

                <Route path="/service">
                    <Service />
                </Route>

                <Route path="/work">
                    <Work />
                </Route>

                <Route path="/contact">
                    <Contact />
                </Route>

                <Route path="/work-single-page">
                    <WorkSinglePage />
                </Route>

                <Route path="*">
                    <div className="w-100 text-center" style={{ paddingBottom: '4rem' }}>
                        <div className="display-4">404</div>
                        <div className="lead">Page not found</div>
                    </div>
                </Route>
            </Switch>

            <Spacing space="4" />

            <Footer />

            <Spacing space="4" />
        </BrowserRouter>
    );
}

export default App;
