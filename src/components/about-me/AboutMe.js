import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './AboutMe.css';

function AboutMe() {
    let [skills] = useState([
        { name: 'WordPress', percent: 80 },
        { name: 'PhotoShop', percent: 96 },
        { name: 'HTML5/CSS3', percent: 99 },
        { name: 'Vue', percent: 87 },
        { name: 'Angular', percent: 85 },
        { name: 'React', percent: 88 },
    ]);

    return (
        <div className="AboutMe container">
            <div className="row mb-5 align-items-end">
                <div className="col-md-6" data-aos="fade-up">
                    <h2>About Me</h2>
                    <p className="mb-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam necessitatibus incidunt ut
                        officiis explicabo inventore.
                    </p>
                </div>
            </div>

            <div className="row">
                <div className="col-md-4 ml-auto order-2" data-aos="fade-up">
                    <h3 className="h3 mb-4">Skills</h3>
                    <ul className="list-unstyled">
                        {skills.map((skill, skillIndex) => {
                            let percentString = `${skill.percent}%`;
                            let percentInteger = parseInt(skill.percent);
                            return (
                                <li className="mb-3" key={skillIndex}>
                                    <div className="d-flex mb-1">
                                        <strong>{skill.name}</strong>
                                        <span className="ml-auto">{percentString}</span>
                                    </div>
                                    <div className="progress custom-progress">
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            style={{ width: percentString }}
                                            aria-valuenow={percentInteger}
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        />
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                <div className="col-md-7 mb-5 mb-md-0" data-aos="fade-up">
                    <p>
                        <img src="/images/person_1_sq.jpg" alt="Ảnh đại diện người viết CV" className="img-fluid" />
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor dignissimos delectus minima
                        reprehenderit molestias illo dolorem et, odio!
                    </p>
                    <p>
                        Fuga fugit distinctio delectus iure vitae consequatur excepturi, mollitia, consectetur molestias
                        sapiente rem consequuntur, illum adipisci, sed obcaecati!
                    </p>
                    <p>
                        Ex, dolorem qui voluptas reprehenderit provident, ad ipsum iure a consequatur voluptatem
                        incidunt nobis. Vitae reiciendis quae ex.
                    </p>
                    <p>
                        Optio consectetur culpa nemo, fugit pariatur veniam voluptate laudantium rerum fuga dolor in
                        maiores ea nisi voluptatibus. Minus?
                    </p>
                    <p>
                        <Link to="#" className="readmore">
                            Download my CV
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
