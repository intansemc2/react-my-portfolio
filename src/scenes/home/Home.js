import React from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import './Home.css';

import Spacing from '../../components/spacing/Spacing.js';
import Work from '../../components/work/Work.js';
import Client from '../../components/client/Client.js';
import Service from '../../components/service/Service.js';
import Testimonial from '../../components/testimonial/Testimonial.js';

function Home() {
    AOS.init();

    return (
        <section className="Home">
            <Work />

            <Spacing space="12" />

            <Client />

            <Spacing space="12" />

            <Service />

            <Spacing space="12" />

            <Testimonial />

            <Spacing space="12" />

            <div className="container">Other components ...</div>
        </section>
    );
}

export default Home;
