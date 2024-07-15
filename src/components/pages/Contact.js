import React, { Fragment, useState } from 'react';
import MetaTags from "react-meta-tags";
import Footer from '../layouts/Footer';
import Header from '../layouts/Header';
import { Link } from 'react-router-dom';

const Contact = () => {
    const [successModalShowing, setSuccessModalSHowing] = useState(false)
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        message: ''
    })
    function onSubmit(e) {
        e.preventDefault()
        setSuccessModalSHowing(true)
        setFormValues({
            name: '',
            email: '',
            phoneNumber: '',
            message: ''
        })
    }

    const allowOnlyNumbers = (evt) => {
        const keysAllowed = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+']
        const keyPressed = evt.key

        if (!keysAllowed.includes(keyPressed)) {
            evt.preventDefault()
        }
    }

    return (
        <Fragment>
            <MetaTags>
                <title> Contact Us </title>
                <meta
                    name="description"
                    content="#"
                />
            </MetaTags>
            <Header />
            <div className='contact-us-page'>
                <section className='container'>
                    <h1>General Support </h1>
                    <p className='subtext'>Have any questions or complaints, feel free to get in touch and
and we will be happy to help</p>
                </section>
                <section className='contact-us-grid'>
                    <figure>
                        <img alt="customer care" className='full-image' src="/assets/images/customer-care.jpg" />
                    </figure>
                    <form onSubmit={onSubmit} className='contact-us-page-container'>
                        <input required onChange={(e) => setFormValues({ ...formValues, name: e.target.values })} value={formValues.name} class="contact-us-input" placeholder='Your Full Name' />
                        <input required type="email" onChange={(e) => setFormValues({ ...formValues, email: e.target.values })} value={formValues.email} class="contact-us-input" placeholder='Email Address' />
                        <input onKeyPress={allowOnlyNumbers} required onChange={(e) => setFormValues({ ...formValues, phoneNumber: e.target.values })} value={formValues.phoneNumber} class="contact-us-input" placeholder='Phone Number' />
                        <textarea required onChange={(e) => setFormValues({ ...formValues, message: e.target.values })} value={formValues.message} class="contact-us-input" placeholder='Your Message' />
                        <button type="submit" className='contact-us-button'>Send Mail</button>
                    </form>
                    <div className='contact-us-icon-text-group-container contact-us-page-container'>
                        <div className='contact-us-icon-text-group'>
                            <figure><img alt='mail icon' src="/assets/images/icon-mail.svg" /></figure>
                            <div><p className='text-group-header'>Sen us an email</p>
                                <p className='text-group-text'>info@parceltube.ng</p>
                            </div>
                        </div>
                        <div className='contact-us-icon-text-group'>
                            <figure><img alt="location icon" src="/assets/images/icon-location.svg" /></figure>
                            <div><p className='text-group-header'>Office Addresss</p>
                                <p className='text-group-text'>
                                Bera Estate Chevron Drive, Lekki Phase II, <br/> Lagos Nigeria.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            {successModalShowing && <div className='success-modal-container'>
                <div className='success-modal'>
                    <Link to="/">
                        <img alt="close icon" className='close-icon' src='/assets/images/icon-close.svg' />
                    </Link>
                    <div></div>
                    <figure>
                        <img alt="green tick" src="/assets/images/green-tick.svg" />
                    </figure>
                    <p className="succes-modal-header"> Success</p>
                    <p className='success-modal-text'>
                        Your response has been recorded successfully
                    </p>
                </div>
            </div>}
            <Footer />
        </Fragment>
    );
}

export default Contact;



// import React, { Component, Fragment } from 'react';
// import MetaTags from "react-meta-tags";
// import Header from '../layouts/Header';
// import Footer from '../layouts/Footer';
// import Breadcrumbs from '../layouts/Breadcrumbs';
// import Content from '../sections/contact/Content';

// const pagelocation = "Review page";

// class Contact extends Component {
//     render() {
//         return (
//             <Fragment>
//                 <MetaTags>
//                     <title> Travel Booking | {pagelocation}</title>
//                     <meta
//                         name="description"
//                         content="#"
//                     />
//                 </MetaTags>
//                 <Header />
//                 <Breadcrumbs breadcrumb={{ pagename: pagelocation }} />
//                 <Content />
//                 <Footer />
//             </Fragment>
//         );
//     }
// }

// export default Contact;
