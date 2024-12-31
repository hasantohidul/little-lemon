import { useState } from "react";

const initalFormValues = {
  date: "",
  time: "17:00",
  guests: 1, 
  occasion: "As Usual"
}

export default function BookingForm() {
  const [formData, setFormData] = useState(initalFormValues);



  // Handler for input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };


  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
      console.log("Form Data:", formData);
      setFormData(initalFormValues);
      alert("The Resrvation is completed successfully!");
  };
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
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        name="time"
        aria-label="Select a time for your reservation"
        value={formData.time}
        onChange={handleChange}
      >
        <option>17:00</option>
        <option>18:00</option>
        <option>19:00</option>
        <option>20:00</option>
        <option>21:00</option>
        <option>22:00</option>
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
      <input type="submit" value="Make Your reservation" />
    </form>
  );
}
