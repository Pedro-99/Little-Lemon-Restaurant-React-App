import React, { useState, useReducer } from 'react';
import BookingForm from '../../components/BookingForm';
import Navbar from '../../components/navbar';
import Header from '../../components/header';

export default function BookingPage() {
    const [bookingForm, setBookingForm] = useState({
        date: `${new Date().getMonth() + 1}/${new Date().getDate()}/${new Date().getFullYear()}`,
        time: '17:00',
        numberOfGuests: 1,
        occasion: 'birthday',
    });

    const updateTimes = (date) => {
        // In the Future, remember to add a switch statement - you need to display the availble times based on each date
        // for now we will let the availble times the same no matter the date is
        return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
      };


    const initializeTimes = () => {
        return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
      };

      const [availableTimes, dispatchTimes] = useReducer(
        (state, action) => {
          switch (action.type) {
            case 'UPDATE_TIMES':
              return updateTimes(action.payload.date);
            default:
              return state;
          }
        },
        initializeTimes()
      );


    const handleState = (e) => {
        e.preventDefault();
        setBookingForm((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));

        dispatchTimes({ type: 'UPDATE_TIMES', payload: { date: e.target.value } });
    };

    return (
        <>
            <Header>
                <Navbar />
            </Header>
            <div className='container'>
                <div className="row d-flex justify-content-center p-5">
                    <BookingForm availableTimes={availableTimes} dispatchTimes={dispatchTimes} booking={bookingForm} handleChange={handleState} />
                </div>
            </div>
        </>
    )
}
