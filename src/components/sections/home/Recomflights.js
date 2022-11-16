import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getRecentFlight, getRoute } from "../../../helper/flightHelper";
import Slider from 'react-slick';

const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    dotsClass: "d-flex slick-dots",
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    cssEase: 'linear',
    responsive: [{
        breakpoint: 992,
        settings: {
            arrows: true,
            slidesToShow: 2
        }
    }, {
        breakpoint: 768,
        settings: {
            arrows: false,
            dots: true,
            slidesToShow: 1
        }
    }, {
        breakpoint: 576,
        settings: {
            arrows: false,
            dots: true,
            slidesToShow: 1
        }
    }]
};

class Recomflights extends Component {
    render() {
        return (
            <section className="section-padding flights-sec bg-light-white">
                <div className="container">
                    <div className="section-header">
                        <div className="section-heading">
                            <h3 className="text-custom-black">Flights</h3>
                            {/* <div className="section-description">
                                <p className="text-light-dark">Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                            </div> */}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <Slider {...settings} className="flights-slider arrow-layout-2 row">
                                {/* Data */}
                                {getRecentFlight().map((item, i) => (
                                    <div key={i} className="slide-item col-12">
                                        <div className="flights-grid">
                                            <div className="flights-grid-wrapper bx-wrapper">
                                                <div className="image-sec animate-img">
                                                    <Link to={"/flight-details/" + item.id}>
                                                        <img src={process.env.PUBLIC_URL + "/" + item.image} className="full-width" alt={item.title} />
                                                    </Link>
                                                </div>
                                                <div className="flights-grid-caption padding-20 bg-custom-white p-relative">
                                                    <div className="heading-sec">
                                                        <div className="left-side">
                                                            <i className="fas fa-plane text-gray" />
                                                            <div className="title">
                                                                <h4 className="fs-16">
                                                                    <Link to={"/flight-details/" + item.id} className="text-custom-black">{item.title}</Link>
                                                                    {getRoute(item.flightroute).map((route, i) => (
                                                                        <span className="text-light-dark" key={i}>{route.title}
                                                                            Flight</span>
                                                                    ))}
                                                                </h4>
                                                            </div>
                                                        </div>
                                                        <div className="right-side">
                                                            <span className="price"><small>From</small>${new Intl.NumberFormat().format((item.price).toFixed(0))}</span>
                                                        </div>
                                                    </div>
                                                    <div className="action">
                                                        {/* <Link to={"/flight-details/" + item.id} className="btn-second btn-small">View</Link> */}
                                                        <Link to={"/flight-details/" + item.id} className="btn-first btn-submit">Book</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {/* Data */}
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Recomflights;