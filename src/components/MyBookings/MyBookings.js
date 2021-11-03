import React, { useEffect, useState } from 'react';
import { Spinner, Table } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const MyBookings = () => {
    const {user} = useAuth();
    // console.log(user.email);
    const [bookings, setBookings] = useState([]);

   useEffect(()=>{
       fetch(`https://dry-beach-57081.herokuapp.com/bookings/${user.email}`)
       .then(res => res.json())
       .then(data => {
        //    const userBookings = data.filter(booking => booking.email === user.email);
        //    setBookings(userBookings);
           setBookings(data);

       })
   },[user]);

   if(bookings.length === 0){
    return <Spinner animation="grow" variant="primary" />
}

   const handleDelete = id => {
       const confirmation = window.confirm('Are you sure you want to delete?');
       if(confirmation){
        fetch(`https://dry-beach-57081.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                window.alert('item deleted');
                const remainingOrders = bookings.filter(booking => booking._id !== id);
                setBookings(remainingOrders);
            }
        })

       }

}

//    console.log(bookings);
    return (
        <div className="container mx-auto my-5">
            <h3 className="text-3xl my-2">My Bookings</h3>
            <Table responsive="md">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Place</th>
                    <th>Cost</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Cancel Order</th>
                </tr>
                </thead>
                <tbody>
                {bookings.map(booking => (
                <tr key={booking._id}>
                    <td>{bookings.indexOf(booking)+1}</td>
                    <td>{booking.tour?.place}</td>
                    <td>{booking.tour?.cost}</td>
                    <td>{booking.tour?.date}</td>
                    <td>{booking.status}</td>
                    <td><button className="btn btn-danger" onClick={()=> handleDelete(booking._id)}>Cancel</button></td>
                </tr>))
                }
                </tbody>
            </Table>
        </div>
    );
};

export default MyBookings;