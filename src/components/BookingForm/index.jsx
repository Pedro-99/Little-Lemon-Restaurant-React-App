

export default function BookingForm(props) {
    const { booking, handleChange, availableTimes } = props;
    return (
        <>
            <div className="d-flex justify-content-center m-5">
                <h1 className='m-0 p-0 w-auto'>Book Now</h1>
            </div>
            <form
                style={{ display: 'grid', maxWidth: '400px', gap: '20px', width: '400px' }}
            >
                <label htmlFor="res-date">Choose date</label>
                <input
                    type="date"
                    id="res-date"
                    name="date"
                    value={booking?.date}
                    onChange={handleChange}
                />
                <label htmlFor="res-time">Choose time</label>
                <select
                    id="res-time"
                    name="time"
                    value={booking?.time}
                    onChange={handleChange}
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
                    value={booking?.numberOfGuests}
                    onChange={handleChange}
                />
                <label htmlFor="occasion">Occasion</label>
                <select
                    id="occasion"
                    name="occasion"
                    value={booking?.occasion}
                    onChange={handleChange}
                >
                    <option>Birthday</option>
                    <option>Anniversary</option>
                    <option>Engagement</option>
                    <option>Other</option>
                </select>
                <input type="submit" value="Make Your reservation" />
            </form>
        </>
    );
}
