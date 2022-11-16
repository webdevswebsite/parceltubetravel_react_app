import React from 'react';
import Contacthelper from '../../../helper/Contacthelper';
import ReCAPTCHA from "react-google-recaptcha";
import { Alert } from 'react-bootstrap';

class Contactform extends Contacthelper {
    render() {
        return (
            <div className="section-padding contact-form-map">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="section-header">
                                <div className="section-heading">
                                    <h3 className="text-custom-black">Get In Touch</h3>
                                    <div className="section-description">
                                        <p className="text-light-dark">Lorem Ipsum is simply dummy text of the printing and typesetting
                                            industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                                    </div>
                                </div>
                            </div>
                            <form className="mb-md-80" onSubmit={this.handleSubmit.bind(this)} method="Get">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="text" name="name" value={this.state.name} onChange={this.onNameChange.bind(this)} className="form-control form-control-custom" placeholder="Name" required />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="email" name="email" value={this.state.email} onChange={this.onEmailChange.bind(this)} className="form-control form-control-custom" placeholder="Email I'd" required />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="text" name="subject" value={this.state.subject} onChange={this.onSubjectChange.bind(this)} className="form-control form-control-custom" placeholder="Subject" required />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="text" name="phone" value={this.state.phone} onChange={this.onPhoneChange.bind(this)} className="form-control form-control-custom" placeholder="Phone No." required />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <textarea name="message" value={this.state.message} onChange={this.onMessageChange.bind(this)} rows={5} className="form-control form-control-custom" placeholder="Message" required />
                                        </div>
                                        <button type="submit" className="btn-first btn-submit">Submit</button>
                                        <ReCAPTCHA
                                            sitekey="6LeazcwcAAAAAFTLy71rIECmWQw3mGHh-G7ELJtF"
                                            onChange={this.reCaptchaLoaded.bind(this)}
                                            size="invisible"
                                        />
                                    </div>
                                    <div className="col-md-12">
                                        {/* Form Messages */}
                                        <Alert variant="success" className="d-none mt-3 mb-0" id="server_response_success">
                                            <strong>Success!</strong> Contact form has been successfully submitted.
                                        </Alert>
                                        <Alert variant="danger" className="d-none mt-3 mb-0" id="server_response_danger">
                                            <strong>Oops!</strong> Something bad happened.Please try again later.
                                        </Alert>
                                        {/* Form Messages */}
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-5">
                            <div className="contact-map full-height">
                                <iframe title="contactmap" className="full-height" src="https://maps.google.com/maps?q=university%20of%20san%20francisco&t=&z=13&ie=UTF8&iwloc=&output=embed" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contactform;