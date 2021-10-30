import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const ManageBookings = () => {

    const [bookings, setBookings] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/manageallbookings')
        .then(res => res.json())
        .then(data => setBookings(data))
    },[])


    const handleApprove = id => {
        fetch('http://localhost:5000/status', {
            method: 'PUT',
            headers: {'content-type':'application/json'},
            body: JSON.stringify(id)
        })
    }

    // console.log(bookings);
    return (
        <div className="container mx-auto my-5">
            <Table responsive="md">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Place</th>
                    <th>Cost (tk)</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Approval</th>
                    <th>Cancel</th>

                </tr>
                </thead>
                <tbody>
                    {bookings?.map(booking => (
                <tr key={booking._id}>
                    <td>{bookings.indexOf(booking)+1}</td>
                    <td>{booking.name}</td>
                    <td>{booking.tour?.place}</td>
                    <td>{booking.tour?.cost}</td>
                    <td>{booking.tour?.date}</td>
                    <td>{booking.status}</td>
                    <td><botton className="btn btn-primary" onClick={() => handleApprove(booking._id)}>Approve</botton></td>
                    <td><botton className="btn btn-danger">Cancel</botton></td>
                </tr>
                ))
             }
                </tbody>
            </Table>
        </div>
    );
};

export default ManageBookings;