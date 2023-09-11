import React from 'react';
import './style.css';

export default function Testimonial(props) {

    const { rating, avatar, username, review } = props;
    return (
        <div className='testimonial-card'>
            <span className='text-center'><b>{rating}</b></span>
            <div className='d-flex justify-content-between align-items-center'>
                <img src={avatar} alt='avatar' width={200} height={200} />
                { username && <span><b>{username}</b></span> }
            </div>
            { review && <p className='text-center'><b> <q>{review}</q> </b></p> }
        </div>
    )
}
