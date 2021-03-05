import React, { useState } from 'react';

import './Contact.css';

const STATES = {
    NOTHING: 'NOTHING',
    LOADING: 'LOADING',
    ERROR: 'ERROR',
    SENDED: 'SENDED',
};

let validateName = (value) => `${value}`.length >= 4;
let validateEmail = (value) => `${value}`.length >= 5 && /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i.test(`${value}`);
let validateSubject = (value) => `${value}`.length >= 8;
let validateMessage = (value) => `${value}`.length > 0;

function Contact() {
    let [isFirstTime, setIsFirstTime] = useState(true);

    let [name, setName] = useState({ value: '', isValid: false });
    let [email, setEmail] = useState({ value: '', isValid: false });
    let [subject, setSubject] = useState({ value: '', isValid: false });
    let [message, setMessage] = useState({ value: '', isValid: false });

    let [state, setState] = useState(STATES.NOTHING);
    let [returnMessage, setReturnMessage] = useState(null);

    let handleOnSubmit = (event) => {
        event.preventDefault();
        if (isFirstTime) {
            setIsFirstTime(false);
        }

        let form = event.target;

        if (name.isValid && email.isValid && subject.isValid && message.isValid) {
            setState(STATES.LOADING);

            setTimeout(() => {
                if (Math.random() > 0.3) {
                    setState(STATES.SENDED);
                    setReturnMessage('Your message has been sent. Thank you!');
                } else {
                    setState(STATES.ERROR);
                    setReturnMessage('Form submission failed! Status: error');
                }
            }, 1000);
        }
    };

    return (
        <div className="Contact container">
            <div className="row mb-5 align-items-end">
                <div className="col-md-6" data-aos="fade-up">
                    <h2>Contact</h2>
                    <p className="mb-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam necessitatibus incidunt ut
                        officiis explicabo inventore.
                    </p>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6 mb-5 mb-md-0" data-aos="fade-up">
                    <form
                        action="forms/contact.php"
                        method="post"
                        role="form"
                        className="php-email-form"
                        onSubmit={handleOnSubmit}
                    >
                        <div className="row">
                            <div className="col-md-6 form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    id="name"
                                    data-msg="Please enter at least 4 chars"
                                    value={name.value}
                                    onChange={(e) =>
                                        setName({ value: e.target.value, isValid: validateName(e.target.value) })
                                    }
                                />
                                {!name.isValid && !isFirstTime && (
                                    <div className="validate">Please enter at least 4 chars</div>
                                )}
                            </div>
                            <div className="col-md-6 form-group">
                                <label htmlFor="name">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    id="email"
                                    data-msg="Please enter a valid email"
                                    value={email.value}
                                    onChange={(e) =>
                                        setEmail({ value: e.target.value, isValid: validateEmail(e.target.value) })
                                    }
                                />
                                {!email.isValid && !isFirstTime && (
                                    <div className="validate">Please enter a valid email</div>
                                )}
                            </div>
                            <div className="col-md-12 form-group">
                                <label htmlFor="name">Subject</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="subject"
                                    id="subject"
                                    data-msg="Please enter at least 8 chars of subject"
                                    value={subject.value}
                                    onChange={(e) =>
                                        setSubject({ value: e.target.value, isValid: validateSubject(e.target.value) })
                                    }
                                />
                                {!subject.isValid && !isFirstTime && (
                                    <div className="validate">Please enter at least 8 chars of subject</div>
                                )}
                            </div>
                            <div className="col-md-12 form-group">
                                <label htmlFor="name">Message</label>
                                <textarea
                                    className="form-control"
                                    name="message"
                                    cols="30"
                                    rows="10"
                                    data-msg="Please write something for us"
                                    value={message.value}
                                    onChange={(e) =>
                                        setMessage({ value: e.target.value, isValid: validateMessage(e.target.value) })
                                    }
                                />
                                {!message.isValid && !isFirstTime && (
                                    <div className="validate">Please write something for us</div>
                                )}
                            </div>

                            <div className="col-md-12 mb-3">
                                {state == STATES.LOADING && <div className="loading">Loading</div>}
                                {state == STATES.ERROR && <div className="error-message">{returnMessage}</div>}
                                {state == STATES.SENDED && <div className="sent-message">{returnMessage}</div>}
                            </div>

                            <div className="col-md-6 form-group">
                                {state != STATES.LOADING && (
                                    <input type="submit" className="readmore d-block w-100" value="Send Message" />
                                )}
                            </div>
                        </div>
                    </form>
                </div>

                <div className="col-md-4 ml-auto order-2" data-aos="fade-up">
                    <ul className="list-unstyled">
                        <li className="mb-3">
                            <strong className="d-block mb-1">Address</strong>
                            <span>203 Fake St. Mountain View, San Francisco, California, USA</span>
                        </li>
                        <li className="mb-3">
                            <strong className="d-block mb-1">Phone</strong>
                            <span>+1 232 3235 324</span>
                        </li>
                        <li className="mb-3">
                            <strong className="d-block mb-1">Email</strong>
                            <span>youremail@domain.com</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Contact;
