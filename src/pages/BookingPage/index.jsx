import React from 'react';
import BookingForm from '../../components/BookingForm';
import Navbar from '../../components/navbar';
import Header from '../../components/header';

export default function BookingPage() {
    return (
        <>
            <Header>
                <Navbar />
            </Header>
            <div className='container'>
                <div className="row d-flex justify-content-center p-5">
                    <BookingForm />
                </div>
            </div>
        </>
    )
}
