import React, { Component, Fragment } from 'react';
import Aboutus from './Aboutus';
import Counter from './Counter';
import Team from './Team';
import Testimonials from './Testimonials';
import Whyus from './Whyus';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Aboutus />
                <Counter />
                <section className="section-padding why-choose-testimonials">
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
                </section>
                <Team />
            </Fragment>
        );
    }
}

export default Content;