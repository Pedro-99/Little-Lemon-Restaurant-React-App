import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./index";

// Mock the submit function for testing
const mockSubmit = jest.fn();

// Define initial booking data for testing
const initialBooking = {
  date: "2023-09-13",
  time: "17:00",
  numberOfGuests: 2,
  occasion: "Birthday",
};

test("Renders the BookingForm heading", () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
});

test("Renders and updates booking inputs", () => {
  render(<BookingForm booking={initialBooking} handleChange={mockSubmit} />);

  // Check if the date input renders and updates correctly
  const dateInput = screen.getByLabelText("Choose date");
  expect(dateInput).toBeInTheDocument();
  fireEvent.change(dateInput, { target: { value: "2023-09-14" } });
  expect(mockSubmit).toHaveBeenCalledTimes(1); // Ensure handleChange is called

  // Similarly, you can add tests for other input fields (time, numberOfGuests, occasion)

  // Check if the time select input renders and updates correctly
  const timeSelect = screen.getByLabelText("Choose time");
  expect(timeSelect).toBeInTheDocument();
  fireEvent.change(timeSelect, { target: { value: "18:00" } });
  expect(mockSubmit).toHaveBeenCalledTimes(2);

  // Check if the numberOfGuests input renders and updates correctly
  const guestsInput = screen.getByLabelText("Number of guests");
  expect(guestsInput).toBeInTheDocument();
  fireEvent.change(guestsInput, { target: { value: "4" } });
  expect(mockSubmit).toHaveBeenCalledTimes(3);

  // Check if the occasion select input renders and updates correctly
  const occasionSelect = screen.getByLabelText("Occasion");
  expect(occasionSelect).toBeInTheDocument();
  fireEvent.change(occasionSelect, { target: { value: "Anniversary" } });
  expect(mockSubmit).toHaveBeenCalledTimes(4);
});

test("Renders available times in the select input", () => {
  // Provide availableTimes data for testing
  const availableTimes = ["17:00", "18:00", "19:00"];
  render(
    <BookingForm
      booking={initialBooking}
      availableTimes={availableTimes}
      handleChange={mockSubmit}
    />
  );

  // Check if the available times are rendered in the select input
  const timeSelect = screen.getByLabelText("Choose time");
  expect(timeSelect).toBeInTheDocument();

  availableTimes.forEach((time) => {
    expect(screen.getByText(time)).toBeInTheDocument();
  });
});
