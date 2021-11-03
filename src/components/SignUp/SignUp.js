import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/Firebase/useFirebase';
import useFetchItems from '../../hooks/useFetchItems';
import { useHistory, useLocation } from 'react-router';

const SignUp = () => {

    const {signInWithGoogle} = useFirebase();
    const location = useLocation();
    const history = useHistory();
    const uri = location.state?.from || "/home";
  
    const handleGoogleSignIn = () => {
      signInWithGoogle()
      .then(res => {
        history.push(uri)
      })
    }

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const {tours} = useFetchItems();
    console.log(tours);
    return (
        <div className="w-75 mx-auto shadow p-4 rounded my-5">
            
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
                <button className="btn btn-success" onClick={handleGoogleSignIn}>Google Sign In</button>
            
        </div>
    );
};

export default SignUp;