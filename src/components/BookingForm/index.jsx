import React, { useState, useEffect } from 'react';

export default function BookingForm() {
    const [bookingForm, setBookingForm] = useState({
        date: `${new Date().getMonth() + 1}/${new Date().getDate()}/${new Date().getFullYear()}`,
        time: '17:00',
        numberOfGuests: 1,
        occasion: 'birthday',
    });

    const [availableTimes] = useState([
        '07:00',
        '08:00',
        '09:00',
        '10:00',
        '11:00',
        '12:00',
        '13:00',
        '14:00',
        '15:00',
        '16:00',
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00',
    ]);

    const handleState = (e) => {
        e.preventDefault();
        setBookingForm((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    useEffect(() => {
        console.log(bookingForm);
    }, [bookingForm]);

    return (
        <form
            style={{ display: 'grid', maxWidth: '400px', gap: '20px', width: '400px' }}
        >
            <label htmlFor="res-date">Choose date</label>
            <input
                type="date"
                id="res-date"
                name="date"
                value={bookingForm?.date}
                onChange={handleState}
            />
            <label htmlFor="res-time">Choose time</label>
            <select
                id="res-time"
                name="time"
                value={bookingForm?.time}
                onChange={handleState}
            >
                {availableTimes?.map((time) => (
                    <option key={time} value={time}>
                        {time}
                    </option>
                ))}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input
                type="number"
                placeholder="1"
                min="1"
                max="10"
                id="guests"
                name="numberOfGuests"
                value={bookingForm?.numberOfGuests}
                onChange={handleState}
            />
            <label htmlFor="occasion">Occasion</label>
            <select
                id="occasion"
                name="occasion"
                value={bookingForm?.occasion}
                onChange={handleState}
            >
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Engagement</option>
                <option>Other</option>
            </select>
            <input type="submit" value="Make Your reservation" />
        </form>
    );
}
