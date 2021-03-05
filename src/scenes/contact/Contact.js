import React from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import './Contact.css';

import Spacing from '../../components/spacing/Spacing.js';

function Contact() {
    AOS.init();

    return (
        <div className="ServiceScene">
            <Spacing space="4" />

            <Spacing space="4" />
        </div>
    );
}

export default Contact;
