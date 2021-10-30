import React from 'react';
import { useForm } from "react-hook-form";

const AddNewPlan = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        fetch('http://localhost:5000/addnewplan', {
            method: 'POST',
            headers: {'content-type':'application/json'},
            body: JSON.stringify(data)
        })
    };
    return (
    <form onSubmit={handleSubmit(onSubmit)}  className="w-75 mx-auto shadow p-4 rounded mt-5">
        <input {...register("place")} placeholder="Where to go?" className="form-control bg-light shadow-sm p-3 mb-4 border-0" />
        <input {...register("cost")} placeholder="cost" className="form-control bg-light shadow-sm p-3 mb-4 border-0" />
        <input {...register("date")} placeholder="date" type="date" className="form-control bg-light shadow-sm p-3 mb-4 border-0" />
        <input {...register("rating")} placeholder="rating" type="number" className="form-control bg-light shadow-sm p-3 mb-4 border-0" />
        <input {...register("description")} placeholder="description" className="form-control bg-light shadow-sm p-3 mb-4 border-0"/>
        <input {...register("img")} placeholder="image link.."  className="form-control bg-light shadow-sm p-3 mb-4 border-0"/>
        {errors.exampleRequired && <span>This field is required</span>}
        
        <input type="submit" className="btn btn-dark ms-3" />
    </form>
    );
};

export default AddNewPlan;