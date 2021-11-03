import React from 'react';

const Footer = () => {
    return (
        <div className="bg-dark text-white py-3">
            <div className="d-flex justify-around container mx-auto border rounded-lg py-3">
                <div className="mt-5">
                    <h2 className="text-4xl"><span className="text-green-200">Travel</span><span className="text-blue-400">Booking</span></h2>
                </div>
                <div className="">
                    <ul>
                        <li>Home</li>
                        <li>Orders</li>
                        <li>Services</li>
                        <li>About us</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>
            <div>
                <p className="mt-3">&copy; Copyright 2021. All rights reserved</p>
            </div>
        </div>
    );
};

export default Footer;