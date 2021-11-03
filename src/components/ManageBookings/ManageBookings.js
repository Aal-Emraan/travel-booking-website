import React, { useEffect, useState } from 'react';
import { Spinner, Table } from 'react-bootstrap';

const ManageBookings = () => {

    const [bookings, setBookings] = useState([]);
    const [isApproved, setIsApproved] = useState(false);

    useEffect(()=>{
        fetch('https://dry-beach-57081.herokuapp.com/manageallbookings')
        .then(res => res.json())
        .then(data => setBookings(data))
    },[isApproved])

    if(bookings.length === 0){
        return <Spinner animation="grow" variant="primary" />
    }


    const handleApprove = id => {
        fetch(`https://dry-beach-57081.herokuapp.com/status/${id}`, {
            method: 'PUT',
            headers: {'content-type':'application/json'},
            
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount>0){
                console.log(data);
                window.alert("Status Approved");
                setIsApproved(true);
            }
        })
    }

    const handleDelete = id => {
        const confirmation = window.confirm('Are you sure?');
        if(confirmation){
            fetch(`https://dry-beach-57081.herokuapp.com/delete/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    window.alert('Booking Cancelled');
                    const remainingOrders = bookings.filter(booking => booking._id !== id);
                    setBookings(remainingOrders);
                }
            })

        }

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
                    <td><botton className="btn btn-danger" onClick={() => handleDelete(booking._id)}>Cancel</botton></td>
                </tr>
                ))
             }
                </tbody>
            </Table>
        </div>
    );
};

export default ManageBookings;