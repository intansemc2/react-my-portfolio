import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

import Spacing from '../spacing/Spacing.js';
import NavLink from './NavLink.js';

function Navbar() {
    return (
        <React.Fragment>
            <section className={`MainNavbar navbar-collapse collapse`} id="MainNavbar">
                <div className="container py-2 py-md-5">
                    <div className="row align-items-start">
                        <div className="col-md-2">
                            <ul className="custom-menu">
                                <NavLink label="Home" to="/" exact={true} />
                                <NavLink label="About Me" to="/about" exact={false} />
                                <NavLink label="Services" to="/service" exact={false} />
                                <NavLink label="Works" to="/work" exact={false} />
                                <NavLink label="Contact" to="/contact" exact={false} />
                            </ul>
                        </div>

                        <div className="col-md-6 d-none d-md-block  mr-auto">
                            <div className="tweet d-flex">
                                <span className="icofont-twitter text-white mt-2 mr-3" />
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam necessitatibus
                                    incidunt ut officiis explicabo inventore. <br /> <Link to="#">t.co/v82jsk</Link>
                                </p>
                            </div>
                        </div>

                        <div className="col-md-4 d-none d-md-block">
                            <h3>Hire Me</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam necessitatibus
                                incidunt ut officiisexplicabo inventore. <br /> <Link to="#">myemail@gmail.com</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Spacing space="4" />

            <nav className={`Navbar container navbar navbar-light custom-navbar`}>
                <div className="row m-0">
                    <Link className="navbar-brand" to="/">
                        MyPortfolio.
                    </Link>

                    <div className="col" />

                    <span className="toggle-main-navbar collapsed" data-toggle="collapse" data-target="#MainNavbar">
                        <span />
                    </span>
                </div>
            </nav>
        </React.Fragment>
    );
}

export default Navbar;
