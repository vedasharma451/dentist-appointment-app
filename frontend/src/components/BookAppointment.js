import React, { useState } from "react";
import axios from "axios";

function BookAppointment({ dentist }) {

  const [form, setForm] = useState({
    patientName: "",
    age: "",
    gender: "",
    appointmentDate: ""
  });

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    });

  };

  const submitForm = (e) => {

    e.preventDefault();

    const data = {
      ...form,
      dentistName: dentist.name,
      clinicName: dentist.clinic
    };

    axios.post("http://localhost:5000/api/appointments", data)
      .then(() => {
        alert("Appointment booked successfully");
      })
      .catch(err => console.log(err));

  };

  return (

    <div className="card p-3 mt-3">

      <h5>Book Appointment with {dentist.name}</h5>

      <form onSubmit={submitForm}>

        <input
          type="text"
          name="patientName"
          placeholder="Patient Name"
          className="form-control mb-2"
          onChange={handleChange}
        />

        <input
          type="number"
          name="age"
          placeholder="Age"
          className="form-control mb-2"
          onChange={handleChange}
        />

        <select
          name="gender"
          className="form-control mb-2"
          onChange={handleChange}
        >
          <option>Gender</option>
          <option>Male</option>
          <option>Female</option>
        </select>

        <input
          type="date"
          name="appointmentDate"
          className="form-control mb-2"
          onChange={handleChange}
        />

        <button className="btn btn-success">
          Submit
        </button>

      </form>

    </div>

  );
}

export default BookAppointment;