import React from 'react';
import './contact.css';

class Contact extends React.Component {
    render() {
        return (
            <div className="parent">
                <div className="contact-container" id="contact">
                    <div className="contact-box">
                        <div className="contact-title">
                            <h1>Contact</h1><br /><br />
                        </div>
                        <div className="contact-form">
                            <form className="formctl" action="https://formspree.io/austinmscholl@gmail.com" method="POST">
                                <div className="contact-name">
                                    <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Your Name"
                                    id="name"
                                    required
                                    data-validation-required-message="Please enter your name"
                                    name="name"
                                    />
                                </div><br />
                                <div className="contact-email">
                                    <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Email Address"
                                    id="email"
                                    required
                                    data-validation-required-message="Please enter your email"
                                    name="_replyto"
                                    />
                                </div><br />
                                <div className="contact-message">
                                    <textarea
                                    className="form-control"
                                    rows="7"
                                    placeholder="Your Message"
                                    id="message"
                                    required
                                    data-validation-required-message="Please leave a message"
                                    name="message"
                                    ></textarea>
                                </div><br />
                                <div className="contact-button">
                                    <button type="submit">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Contact;