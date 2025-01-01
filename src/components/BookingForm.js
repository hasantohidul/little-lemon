import {useEffect, useState } from "react";


export default function BookingForm({ availableTimes, dispatch }) {
  const [formData, setFormData] = useState({
    date: "",
    time: availableTimes[0] || "",
    guests: 1,
    occasion: "As Usual",
  });

  // Handler for input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "date") {
      dispatch({type: 'resetTimes'})
    }
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    dispatch({ type: "updateTime", time: formData.time });
    alert("The Resrvation is completed successfully!");
  
  };

  useEffect(() => {
    setFormData(prevStat => {
      return {...prevStat, time: availableTimes[0]}
  })
  }, [availableTimes])
  
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        name="date"
        id="res-date"
        aria-label="Select a date for your reservation"
        value={formData.date}
        onChange={handleChange}
        required
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        name="time"
        aria-label="Select a time for your reservation"
        value={formData.time}
        disabled={availableTimes.length === 0}
        onChange={handleChange}
      >
        {availableTimes.length > 0 ? availableTimes.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        )) : <option>No slot is availabe for {formData.date}</option> }
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        name="guests"
        id="guests"
        type="number"
        min="1"
        max="10"
        aria-label="Enter number of guests"
        value={formData.guests}
        onChange={handleChange}
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        name="occasion"
        aria-label="Select an occasion for your reservation"
        value={formData.occasion}
        onChange={handleChange}
      >
        <option>As Usual</option>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input type="submit" value="Make Your reservation" disabled={availableTimes.length === 0} />
    </form>
  );
}
