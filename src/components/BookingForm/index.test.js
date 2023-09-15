import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import BookingForm from './index';

describe('BookingForm', () => {
  // Mock props for the component
  const mockProps = {
    booking: {},
    handleChange: jest.fn(),
    availableTimes: ['10:00 AM', '12:00 PM', '2:00 PM'],
    dispatchTimes: jest.fn(),
    setBookingForm: jest.fn(),
  };

  it('renders BookingForm component with form fields', () => {
    render(<BookingForm {...mockProps} />);

    // Check if form fields are rendered
    expect(screen.getByLabelText('Choose date')).toBeInTheDocument();
    expect(screen.getByLabelText('Choose time')).toBeInTheDocument();
    expect(screen.getByLabelText('Number of guests')).toBeInTheDocument();
    expect(screen.getByLabelText('Occasion')).toBeInTheDocument();
    expect(screen.getByText('Make Your reservation')).toBeInTheDocument();
  });

  it('handles form input changes', () => {
    render(<BookingForm {...mockProps} />);

    // Simulate user input
    fireEvent.change(screen.getByLabelText('Choose date'), {
      target: { value: '2023-09-15' },
    });
    fireEvent.change(screen.getByLabelText('Choose time'), {
      target: { value: '10:00 AM' },
    });
    fireEvent.change(screen.getByLabelText('Number of guests'), {
      target: { value: '2' },
    });
    fireEvent.change(screen.getByLabelText('Occasion'), {
      target: { value: 'Anniversary' },
    });

    // Check if input values are updated
    expect(screen.getByLabelText('Choose date')).toHaveValue('2023-09-15');
    expect(screen.getByLabelText('Choose time')).toHaveValue('10:00 AM');
    expect(screen.getByLabelText('Occasion')).toHaveValue('Anniversary');
  });

  it('displays validation errors', async () => {
    render(<BookingForm {...mockProps} />);

    // Submit the form without filling in required fields
    fireEvent.click(screen.getByText('Make Your reservation'));

    // Check if validation error messages are displayed
    expect(await screen.findByText('Date is required')).toBeInTheDocument();
    expect(await screen.findByText('Time is required')).toBeInTheDocument();

  });
});
