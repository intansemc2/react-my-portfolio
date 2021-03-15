import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <footer className="Footer container">
            <div className="row">
                <div className="col-sm-6">
                    <p className="mb-1">© Copyright MyPortfolio. All Rights Reserved</p>
                    <div className="credits">
                        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                    </div>
                </div>
                <div className="social col-sm-6 text-md-right">
                    <Link>
                        <span className="icofont-twitter" />
                    </Link>
                    <Link>
                        <span className="icofont-facebook" />
                    </Link>
                    <Link>
                        <span className="icofont-dribbble" />
                    </Link>
                    <Link>
                        <span className="icofont-behance" />
                    </Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
