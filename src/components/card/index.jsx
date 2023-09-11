import React from 'react';
import './style.css';

export default function Card(props) {
  const { title, image, price, description } = props;
  return (
    <div className='card'>
      {image && <img src={image} alt={image} className="img-fluid" />}
      <div className='d-flex justify-content-between mx-5 mt-3'>
        {title && <h4>{title}</h4>}
        {price && <span>{price}$</span>}
      </div>
      <div className='mx-5 mt-2'>
        {description && <p className='overflow-hidden h-100'>{description}</p>}

      </div>
      <button className='mb-3 mx-5 btn btn-primary'>Order a delivery</button>
    </div>
  )
}
