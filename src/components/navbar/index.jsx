import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className='d-flex align-items-center justify-content-center'>
        <ul className='d-flex justify-content-around list-unstyled'>
            <li className='mt-2 px-5'><Link className='text-decoration-none' to={'/home'}>Home</Link></li>
            <li className='mt-2 px-5'><Link className='text-decoration-none' to={'/about'}>About</Link></li>
            <li className='mt-2 px-5'><Link className='text-decoration-none' to={'/menu'}>Menu</Link></li>
            <li className='mt-2 px-5'><Link className='text-decoration-none' to={'/booking'}>Booking</Link></li>
        </ul>
    </nav>
  )
}
