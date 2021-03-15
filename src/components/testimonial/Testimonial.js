import React, { useEffect } from 'react';

import './Testimonial.css';

import Splide from '@splidejs/splide';

function Testimonial() {
    useEffect(() => {
        new Splide('.Testimonial .splide', {
            rewind: true,
            speed: 400,
            arrows: false,
            pagination: true,
            autoplay: true,
            drag: true,
            perPage: 1,
            perMove: 1,
            pauseOnFocus: false,
        }).mount();
    });

    return (
        <div className="Testimonial container">
            <div className="splide">
                <div className="splide__track">
                    <ul className="splide__list">
                        {/** testimonial */}
                        <li className="testimonial-wrap splide__slide">
                            <div className="testimonial">
                                <img
                                    src="/images/person_1.jpg"
                                    alt="Ảnh đại diện khách hàng Jean Hicks"
                                    className="img-fluid"
                                />
                                <blockquote>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam necessitatibus
                                        incidunt ut officiis explicabo inventore.
                                    </p>
                                </blockquote>
                                <p>&mdash; Jean Hicks</p>
                            </div>
                        </li>

                        {/** testimonial */}
                        <li className="testimonial-wrap splide__slide">
                            <div className="testimonial">
                                <img
                                    src="/images/person_2.jpg"
                                    alt="Ảnh đại diện khách hàng Chris Stanworth"
                                    className="img-fluid"
                                />
                                <blockquote>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam necessitatibus
                                        incidunt ut officiis explicabo inventore.
                                    </p>
                                </blockquote>
                                <p>&mdash; Chris Stanworth</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Testimonial;
