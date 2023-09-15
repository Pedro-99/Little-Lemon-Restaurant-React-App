import React, { useState, useReducer } from 'react';
import BookingForm from '../../components/BookingForm';
import Navbar from '../../components/navbar';
import Header from '../../components/header';
import { fetchAPI, submitAPI } from '../../api/index';


export const updateTimes = (date) => {
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
};


export const initializeTimes = () => {
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
};


export default function BookingPage() {

  const [bookingForm, setBookingForm] = useState({
    date: "",
    time: '17:00',
    numberOfGuests: 1,
    occasion: 'birthday',
  });

  const [availableTimes, dispatchTimes] = useReducer(
    (state, action) => {
      switch (action.type) {
        case 'UPDATE_TIMES':
          fetchAPI(action.payload.date) // Fetch available times for the selected date
            .then((times) => {
              dispatchTimes({ type: 'SET_TIMES', payload: times });
            })
            .catch((error) => {
              // console.error('Error fetching available times:', error.message);
              dispatchTimes({ type: 'SET_TIMES', payload: [] });
            });
          return state;
        case 'SET_TIMES':
          console.log('set times', action.payload);
          return action.payload;
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
  };

  console.log("availableTimes", availableTimes);
  console.log("bookingForm", bookingForm);
  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the booking form data to the API
    submitAPI(bookingForm)
      .then(() => {
        console.log('Booking submitted successfully');
        // Optionally, you can update the available times after a successful booking
        dispatchTimes({ type: 'UPDATE_TIMES', payload: { date: bookingForm.date } });
      })
      .catch((error) => {
        console.error('Error submitting booking:', error.message);
      });
  };

  return (
    <>
      <Header>
        <Navbar />
      </Header>
      <div className='container'>
        <div className="row d-flex justify-content-center p-5">
          <BookingForm
            availableTimes={availableTimes}
            booking={bookingForm}
            dispatchTimes={dispatchTimes}
            handleChange={handleState}
            handleSubmit={handleSubmit}
            setBookingForm={setBookingForm}
          />
        </div>
      </div>
    </>
  );
}
