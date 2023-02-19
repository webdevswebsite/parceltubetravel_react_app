import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CurrencyState } from '../../../Context/CurrencyContext';
import { getRecentFlight } from "../../../helper/flightHelper";
import { formatNumber } from "../../../utils";
import { useForm } from "react-hook-form"

function Flightbooking() {
    const { id } = useParams()
    const flightDetails = getRecentFlight()[ id ]
    const { price, title, airlines, flightdate, timestamp } = flightDetails
    const { register, handleSubmit, formState: { errors } } = useForm();

    const {
        state: { currency, rate }
    } = CurrencyState()
    console.log(price * rate, "priceate")

    const amount = currency !== '$' ? price * rate : price
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://checkout.flutterwave.com/v3.js";
        document.getElementsByTagName("head")[ 0 ].appendChild(script);
    }, []);


    const handlePaymentGateway = data => {
        return window.FlutterwaveCheckout({
            public_key: "FLWPUBK-00f1a8bfd678ad383f650cd6cccd643b-X",
            amount: amount,
            currency: localStorage.getItem('currency') || 'USD',
            tx_ref: new Date().toISOString(),
            customer: {
                email: data.email,
            },
            customizations: {
                title: "PARCELTUBE",
            },
            callback: async function () {
                alert('Payment successful...We will reach out to you for further details')
            },
        });
    }

    const Input = ({ type, name, placeholder, required, defaultValue, disabled, others }) =>
        <>
            <input {...register(`${name || null}`, { required: required ? true : false, maxLength: 20 })} type={type || "text"} name={name || "#"} className="form-control form-control-custom rounded" placeholder={placeholder || "..."} defaultValue={defaultValue} disabled={disabled ? true : false} {...others} />
            {errors.name && <span>This field is required</span>}
        </>
    return (
        <div className="tab-inner">
            <div className="row">
                <div className="col-lg-8">
                    <h5 className="text-custom-black">Booking Information</h5>
                    <p className="text-light-dark" style={{ fontSize: '18px' }}> <strong>Price: </strong> <Link>{currency}{currency !== '$' ? formatNumber(price * rate) : formatNumber(price)}</Link> </p>
                    <p className="text-light-dark" style={{ fontSize: '18px' }}> <strong>Flight: </strong> <Link>{title}</Link> </p>
                    <p className="text-light-dark" style={{ fontSize: '18px' }}> <strong>Booking Date: </strong> <Link>{flightdate}</Link> </p>
                    <p className="text-light-dark" style={{ fontSize: '18px' }}> <strong>Airlines: </strong> <Link>{airlines}</Link> </p>
                    <p className="text-light-dark" style={{ fontSize: '18px' }}> <strong>Time Stamp: </strong> <Link>{timestamp}</Link> </p>
                    <p className="text-light-dark">You may rest assured of your personal information safety. All the payment options are fully protected. Pay quickly and safely with Visa or Mastercard. So, go for a journey of your preferred destinations with the best airfare discounts.</p>

                    <div className="col-12">
                    </div>
                    <div className="need-help bx-wrapper padding-20">
                        <h5 className="text-custom-black">Why book flights with Parceltube?</h5>
                        <p className="text-light-dark">One-stop destination for domestic and international flights</p>
                        <p className="text-light-dark">Easy availability of tickets at competitive prices</p>
                        <p className="text-light-dark">Flawless 24*7 customer support</p>
                        <ul className="text-light-dark why-list">
                        </ul>
                        <hr className="mt-0" />

                        <h5 className="text-custom-black">Need Help?.</h5>
                        <p className="text-light-dark">We would be more than happy to help you. Our team advisor are 24/7 at
                            your service to help you.</p>
                        <ul className="custom">
                            <li className="text-custom-blue fs-18">
                                <i className="fas fa-envelope" />
                                <Link to="#" className="text-light-dark fs-14"> info@parceltube.ng</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="row">
                        <div className="col-12">
                            <div className="quick-quote bx-wrapper padding-20 mb-xl-30">
                                <h5 className="text-custom-black">More Travel Details</h5>
                                <form onSubmit={handleSubmit(handlePaymentGateway)}>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label className="fs-14 text-custom-black fw-500">Full Name</label>
                                                <Input name="fullName" placeholder="enter your full name" required />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label className="fs-14 text-custom-black fw-500">Email</label>
                                                <Input name="email" placeholder="enter your email" required />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label className="fs-14 text-custom-black fw-500">Phone No.</label>
                                                <Input name="phone" placeholder="enter your phone number" required />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <hr className="mt-0" />
                                            <div className="form-group">
                                                <label className="fs-14 text-custom-black fw-500">Travel type</label>
                                                <div style={{ borderRadius: '6px' }} className="group-form ">
                                                    <div className="nice-select custom-select form-control form-control-custom ">
                                                        <select className='rounded' {...register("travelType", { required: true })} required>
                                                            <option>Business</option>
                                                            <option>Economy</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <button type="submit" className="btn-first btn-submit rounded full-width btn-height"
                                            >Book Travel</button>
                                            {/* <input type="submit" /> */}
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Flightbooking;
