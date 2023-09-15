import React from 'react';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ element: Component, ...rest }) {
  const user = true; // Replace this with your actual user authentication logic

  return user ? <Component {...rest} /> : <Navigate to="/" />;
}

