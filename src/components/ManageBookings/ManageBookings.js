import React, { useEffect } from 'react';

const ManageBookings = () => {

    useEffect(()=>{
        fetch('http://localhost:5000/manageallbookings')
        .then(res => res.json())
        .then(data => console.log(data))
    },[])
    return (
        <div>
            manage bookings
        </div>
    );
};

export default ManageBookings;