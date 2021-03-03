import React from 'react';
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
                <div className="col-sm-6 social text-md-right">
                    <a href="#">
                        <span className="icofont-twitter"></span>
                    </a>
                    <a href="#">
                        <span className="icofont-facebook"></span>
                    </a>
                    <a href="#">
                        <span className="icofont-dribbble"></span>
                    </a>
                    <a href="#">
                        <span className="icofont-behance"></span>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
