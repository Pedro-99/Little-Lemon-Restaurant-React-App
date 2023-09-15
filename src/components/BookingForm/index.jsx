import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { fetchAPI, submitAPI } from '../../api/index';

const BookingForm = (props) => {

    const navigate = useNavigate();

    // Define the initial form values
    const initialValues = {
        date: props.booking?.date || '',
        time: props.booking?.time || '',
        numberOfGuests: props.booking?.numberOfGuests || '',
        occasion: props.booking?.occasion || 'Birthday',
    };

    // Define the validation schema using Yup
    const validationSchema = Yup.object().shape({
        date: Yup.date().required('Date is required'),
        time: Yup.string().required('Time is required'),
        numberOfGuests: Yup.number()
            .required('Number of guests is required')
            .min(1, 'Number of guests must be at least 1')
            .max(10, 'Number of guests cannot exceed 10'),
        occasion: Yup.string().required('Occasion is required'),
    });

    // Use Formik to handle form state and submission
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: async (values, { setSubmitting }) => {
            try {
                // Simulate fetching available times
                const availableTimes = await fetchAPI(values.date);

                // Check if the selected time is available
                // if (!availableTimes.includes(values.time)) {
                //     formik.setFieldError('time', 'Selected time is no longer available');
                //     setSubmitting(false);
                //     return;
                // }

                // If available, submit the form data
                await submitAPI(values);

                // Redirect to the success page upon successful submission
                
                // Handle successful submission (e.g., show a success message)
                console.log('Form submitted successfully:', values);
                navigate("/success");

                // You can reset the form here if needed
                formik.resetForm();
            } catch (error) {
                // Handle API errors or other submission errors
                console.error('Form submission error:', error.message);
            }
        },
    });

    return (
        <>
            <div className="d-flex justify-content-center m-5">
                <h1 className="m-0 p-0 w-auto">Book Now</h1>
            </div>
            <form
                style={{ display: 'grid', maxWidth: '400px', gap: '20px', width: '400px' }}
                onSubmit={formik.handleSubmit}
            >
                <label htmlFor="res-date">Choose date</label>
                <input
                    type="date"
                    id="res-date"
                    name="date"
                    value={formik.values.date}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    aria-label="Choose date"
                    aria-required="true"
                    aria-invalid={formik.errors.date ? 'true' : 'false'}
                />
                {formik.touched.date && formik.errors.date && (
                    <div className="error">{formik.errors.date}</div>
                )}

                <label htmlFor="res-time">Choose time</label>
                <select
                    id="res-time"
                    name="time"
                    value={formik.values.time}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    aria-label="Choose time"
                    aria-required="true"
                    aria-invalid={formik.errors.time ? 'true' : 'false'}
                >
                    {props.availableTimes.map((time) => (
                        <option key={time} value={time}>
                            {time}
                        </option>
                    ))}
                </select>
                {formik.touched.time && formik.errors.time && (
                    <div className="error">{formik.errors.time}</div>
                )}

                <label htmlFor="guests">Number of guests</label>
                <input
                    type="number"
                    placeholder="1"
                    min="1"
                    max="10"
                    id="guests"
                    name="numberOfGuests"
                    value={formik.values.numberOfGuests}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    aria-label="Number of guests"
                    aria-required="true"
                    aria-invalid={formik.errors.numberOfGuests ? 'true' : 'false'}
                />
                {formik.touched.numberOfGuests && formik.errors.numberOfGuests && (
                    <div className="error">{formik.errors.numberOfGuests}</div>
                )}

                <label htmlFor="occasion">Occasion</label>
                <select
                    id="occasion"
                    name="occasion"
                    value={formik.values.occasion}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    aria-label="Occasion"
                    aria-required="true"
                    aria-invalid={formik.errors.occasion ? 'true' : 'false'}
                >
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                    <option value="Engagement">Engagement</option>
                    <option value="Other">Other</option>
                </select>
                {formik.touched.occasion && formik.errors.occasion && (
                    <div className="error">{formik.errors.occasion}</div>
                )}

                <button type="submit" disabled={formik.isSubmitting}>
                    {formik.isSubmitting ? 'Submitting...' : 'Make Your reservation'}
                </button>
            </form>
        </>
    );
};

export default BookingForm;
