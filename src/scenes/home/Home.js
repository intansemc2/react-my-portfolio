import React from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import './Home.css';

import Spacing from '../../components/spacing/Spacing.js';
import Work from '../../components/work/Work.js';
import Client from '../../components/client/Client.js';

function Home() {
    AOS.init();

    return (
        <section className="Home">
            <Work />

            <Spacing space="4" />

            <Client />

            <Spacing space="4" />

            <div className="container">Other components ...</div>
        </section>
    );
}

export default Home;
