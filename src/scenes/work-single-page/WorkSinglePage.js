import React from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import './WorkSinglePage.css';

import Spacing from '../../components/spacing/Spacing.js';
import WorkSingle from '../../components/work-single/WorkSingle.js';
import Testimonial from '../../components/testimonial/Testimonial.js';

function WorkSinglePage() {
    AOS.init();

    return (
        <section className="WorkSinglePage">
            <WorkSingle />
            <Spacing space="4" />
            <Testimonial />
        </section>
    );
}

export default WorkSinglePage;
