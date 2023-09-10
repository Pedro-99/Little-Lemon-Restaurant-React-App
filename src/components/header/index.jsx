import React from 'react';
import './style.css';

export default function Header(props) {
    const { children } = props;
  return (
    <header className='bg-header border shadow-sm p-5 d-flex justify-content-center align-items-center'>
        {children}
    </header>
  )
}
