import React from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import './ServiceScene.css';

import Spacing from '../../components/spacing/Spacing.js';
import ServiceShowCase from '../../components/service-showcase/ServiceShowCase.js';
import Testimonial from '../../components/testimonial/Testimonial.js';

function Service() {
    AOS.init();

    return (
        <div className="ServiceScene">
            <Spacing space="4" />

            <ServiceShowCase />

            <Spacing space="8" />

            <Testimonial />

            <Spacing space="4" />
        </div>
    );
}

export default Service;
