import React from 'react';

import './Service.css';

function Service() {
    return (
        <div className="Service container">
            <div className="row justify-content-center text-center mb-4">
                <div className="col-7">
                    <h3 className="h3">My Services</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit explicabo inventore.</p>
                </div>
            </div>

            <div className="row">
                <div className="col-12 col-sm-6 col-md-6 col-lg-3">
                    <span className="la la-cube la-3x mb-4" />
                    <h4 className="h4 mb-2">Web Design</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit explicabo inventore.</p>
                    <ul className="list-unstyled list-line">
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing</li>
                        <li>Non pariatur nisi</li>
                        <li>Magnam soluta quod</li>
                        <li>Lorem ipsum dolor</li>
                        <li>Cumque quae aliquam</li>
                    </ul>
                </div>

                <div className="col-12 col-sm-6 col-md-6 col-lg-3">
                    <span className="la la-mobile la-3x mb-4" />
                    <h4 className="h4 mb-2">Mobile Applications</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit explicabo inventore.</p>
                    <ul className="list-unstyled list-line">
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing</li>
                        <li>Non pariatur nisi</li>
                        <li>Magnam soluta quod</li>
                        <li>Lorem ipsum dolor</li>
                        <li>Cumque quae aliquam</li>
                    </ul>
                </div>

                <div className="col-12 col-sm-6 col-md-6 col-lg-3">
                    <span className="la la-image la-3x mb-4" />
                    <h4 className="h4 mb-2">Graphic Design</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit explicabo inventore.</p>
                    <ul className="list-unstyled list-line">
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing</li>
                        <li>Non pariatur nisi</li>
                        <li>Magnam soluta quod</li>
                        <li>Lorem ipsum dolor</li>
                        <li>Cumque quae aliquam</li>
                    </ul>
                </div>

                <div className="col-12 col-sm-6 col-md-6 col-lg-3">
                    <span className="la la-search la-3x mb-4" />
                    <h4 className="h4 mb-2">SEO</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit explicabo inventore.</p>
                    <ul className="list-unstyled list-line">
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing</li>
                        <li>Non pariatur nisi</li>
                        <li>Magnam soluta quod</li>
                        <li>Lorem ipsum dolor</li>
                        <li>Cumque quae aliquam</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Service;
