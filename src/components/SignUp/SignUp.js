import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import useFetchItems from '../../hooks/useFetchItems';

const SignUp = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const {tours} = useFetchItems();
    console.log(tours);
    return (
        <div className="w-75 mx-auto shadow p-4 rounded mt-5">
            
            <h4 className="fw-normal mb-4">Sign Up</h4>
                <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} placeholder="Name..." className="form-control bg-light shadow-sm p-3 mb-4 border-0"  />
                <input {...register("email")} placeholder="Email..." type="email" className="form-control bg-light shadow-sm p-3 mb-4 border-0"  />
                <input {...register("password", { required: true })} placeholder="Password" type="password" className="form-control bg-light shadow-sm p-3 mb-4 border-0" />
                {errors.exampleRequired && <span>This field is required</span>}
                
                <input type="submit" className="btn btn-danger d-block w-100 py-3 rounded-pill"  />
                </form>
                <p className="mt-4 fst-italic">Already have an account? <Link to="/login"> Login</Link></p>
                <p className="text-muted">-------------- or --------------</p>
                <button className="btn btn-success">Google Sign In</button>
                <button className="btn btn-dark ms-3">Github Sign In</button>
            
        </div>
    );
};

export default SignUp;