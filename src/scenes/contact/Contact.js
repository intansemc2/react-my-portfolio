import React from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import './Contact.css';

import Spacing from '../../components/spacing/Spacing.js';
import ContactComp from '../../components/contact/Contact.js';

function Contact() {
    AOS.init();

    return (
        <div className="ContactScene">
            <Spacing space="4" />

            <ContactComp />

            <Spacing space="4" />
        </div>
    );
}

export default Contact;
