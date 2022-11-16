import React, { Component, Fragment } from 'react';
// import Aboutus from './Aboutus';
import Banner from './Banner';
// import Blogs from './Blogs';
import Category from './Category';
// import Recomcars from './Recomcars';
import Recomcruise from './Recomcruise';
import Recomflights from './Recomflights';
// import Recomhotels from './Recomhotels';
import Searchform from './Searchform';
// import Services from './Services';
// import Team from './Team';
// import Testimonials from './Testimonials';
// import Whyus from './Whyus';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Banner />
                <Searchform />
                {/* <Aboutus /> */}
                <Recomflights />
                <Recomcruise />
                <Category />
                {/* <Recomhotels /> */}
                {/* <Services /> */}
                {/* <Recomcars /> */}
                {/* <Team /> */}
                {/* <section className="section-padding why-choose-testimonials">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-5 col-lg-6">
                                <Whyus />
                            </div>
                            <div className="col-xl-7 col-lg-6">
                                <Testimonials />
                            </div>
                        </div>
                    </div>
                </section> */}
                {/* <Blogs /> */}
            </Fragment>
        );
    }
}

export default Content;