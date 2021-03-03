import React from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import './Home.css';

import Work from '../../components/work/Work.js';

function Home() {
    AOS.init();

    return (
        <section className="Home">
            <Work />
            <hr />
            Other components ...
        </section>
    );
}

export default Home;
