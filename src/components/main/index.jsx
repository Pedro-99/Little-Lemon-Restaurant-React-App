import React from 'react';
import './style.css';

export default function Main(props) {
 const { children } = props;
  return (
    <main>{children}</main>
  )
}
