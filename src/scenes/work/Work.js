import React from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import './Work.css';

import Spacing from '../../components/spacing/Spacing.js';
import WorkComp from '../../components/work/Work.js';
import Testimonial from '../../components/testimonial/Testimonial.js';

function Work() {
    AOS.init();

    return (
        <div className="WorkScene">
            <Spacing space="4" />

            <WorkComp />

            <Spacing space="4" />

            <Testimonial />

            <Spacing space="4" />
        </div>
    );
}

export default Work;
