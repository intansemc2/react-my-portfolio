import React from 'react';

import './Client.css';

function Client() {
    return (
        <div className="Client container">
            <div className="row justify-content-center text-center mb-4">
                <div className="col-7">
                    <h3 className="h3">My Clients</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit explicabo inventore.</p>
                </div>
            </div>

            <div className="row">
                <div className="col-4 col-sm-4 col-md-2">
                    <a href="#" className="client-logo">
                        <img src="/images/logo-adobe.png" alt="Image" className="img-fluid" />
                    </a>
                </div>
                <div className="col-4 col-sm-4 col-md-2">
                    <a href="#" className="client-logo">
                        <img src="/images/logo-uber.png" alt="Image" className="img-fluid" />
                    </a>
                </div>
                <div className="col-4 col-sm-4 col-md-2">
                    <a href="#" className="client-logo">
                        <img src="/images/logo-apple.png" alt="Image" className="img-fluid" />
                    </a>
                </div>
                <div className="col-4 col-sm-4 col-md-2">
                    <a href="#" className="client-logo">
                        <img src="/images/logo-netflix.png" alt="Image" className="img-fluid" />
                    </a>
                </div>
                <div className="col-4 col-sm-4 col-md-2">
                    <a href="#" className="client-logo">
                        <img src="/images/logo-nike.png" alt="Image" className="img-fluid" />
                    </a>
                </div>
                <div className="col-4 col-sm-4 col-md-2">
                    <a href="#" className="client-logo">
                        <img src="/images/logo-google.png" alt="Image" className="img-fluid" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Client;
