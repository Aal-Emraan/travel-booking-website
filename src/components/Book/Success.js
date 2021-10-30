import React from 'react';
import { Link } from 'react-router-dom';

const Success = () => {
    return (
        <div>
            your booking was successfull..
            <Link to="/home" className="btn btn-dark">Go Home</Link>
        </div>
    );
};

export default Success;