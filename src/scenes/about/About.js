import React from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import './About.css';

import AboutMe from '../../components/about-me/AboutMe.js';

function About() {
    AOS.init();

    return (
        <div className="About">
            <AboutMe />
        </div>
    );
}

export default About;
