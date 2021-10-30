import React, { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const MyBookings = () => {
    const {user} = useAuth();
    console.log(user.email);

    // useEffect(() => {
    //     fetch('http://localhost:5000/getuserbookings', {
    //         method: 'GET',
    //         headers: {'content-type': 'application/json'},
    //         body: JSON.stringify(user.email)
    //     })
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    // },[])
    return (
        <div className="container mx-auto my-5">
            <Table responsive="md">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Place</th>
                    <th>Cost</th>
                    <th>Date</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default MyBookings;