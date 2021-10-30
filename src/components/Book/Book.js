import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';

const Book = () => {
    const {id} = useParams();
    const [tour, setTour] = useState({});
    const {user} = useAuth();

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        // console.log(data);
        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => console.log(data))

        reset();
    }
    useEffect(()=> {
        fetch('/featuredplans.json')
        .then(res => res.json())
        .then(data => {
            const getPlan = data.find(item => item.id === id)
            setTour(getPlan)
        })
    },[])
    return (
        <Row className="container mx-auto my-5 shadow-sm">
            <Col md={6}>
                <img src={tour.img} alt="" />
            </Col>
            <Col md={6}>
                <h2>{tour.place}</h2>
                <p>{tour.description}</p>
                <p>{tour.date}</p>
                <span>Price: {tour.cost}</span>
                <div>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input defaultValue={user.displayName} {...register("name")} className="form-control bg-light shadow-sm p-3 mb-4 border-0"/>
            <input defaultValue={user.email} {...register("email", { required: true })} type="email" className="form-control bg-light shadow-sm p-3 mb-4 border-0"/>
            <input {...register("address", { required: true })} placeholder="Address"  className="form-control bg-light shadow-sm p-3 mb-4 border-0"/>
            <input {...register("phone", { required: true })} placeholder="Phone Number" type="number" className="form-control bg-light shadow-sm p-3 mb-4 border-0"/>
            {errors.exampleRequired && <span>This field is required</span>}
            <input type="submit" value="Book Now"  className="btn btn-danger d-block w-100 py-3 rounded-pill"/>
            {/* <Link to="/success"></Link>  */}
            </form>
                </div>
                {/* <Link to="/success" className="btn btn-danger">Book Now</Link> */}
            </Col>
        </Row>
    );
};

export default Book;