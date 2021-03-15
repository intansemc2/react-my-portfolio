import React from 'react';
import { Link } from 'react-router-dom';

import './WorkSingle.css';

function WorkSingle() {
    return (
        <div className="WorkSingle">
            <div className="container">
                <div className="row mb-4 align-items-center">
                    <div className="col-md-7" data-aos="fade-up">
                        <h2>Work Single Page</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam necessitatibus incidunt ut
                            officiis explicabo inventore.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row align-items-stretch">
                    <div className="col-md-8" data-aos="fade-up">
                        <img src="/images/img_1_big.jpg" alt="" className="img-fluid" />
                    </div>
                    <div className="col-md-4 ml-0" data-aos="fade-up" data-aos-delay="100">
                        <div className="sticky-content">
                            <h3 className="h3">Boxed Water</h3>
                            <p className="mb-4">
                                <span className="text-muted">Design</span>
                            </p>

                            <div className="mb-5">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores illo, id
                                    recusandae molestias illum unde pariatur, enim tempora.
                                </p>
                            </div>

                            <h4 className="h4 mb-3">What I did</h4>
                            <ul className="list-unstyled list-line mb-5">
                                <li>Design</li>
                                <li>HTML5/CSS3</li>
                                <li>CMS</li>
                                <li>Logo</li>
                            </ul>

                            <p>
                                <Link to="#" className="readmore">
                                    Visit Website
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WorkSingle;
