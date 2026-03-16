import React, { useEffect, useState } from "react";
import axios from "axios";

function AdminPanel() {

  const [appointments, setAppointments] = useState([]);

  useEffect(() => {

    axios.get("http://localhost:5000/api/appointments")
      .then(res => {
        setAppointments(res.data);
      })
      .catch(err => console.log(err));

  }, []);

  return (

    <div>

      <h4 className="mt-4">Admin Panel - Appointments</h4>

      <table className="table table-bordered">

        <thead>
          <tr>
            <th>Patient</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Date</th>
            <th>Dentist</th>
            <th>Clinic</th>
          </tr>
        </thead>

        <tbody>

          {appointments.map(a => (

            <tr key={a.id}>

              <td>{a.patientName}</td>
              <td>{a.age}</td>
              <td>{a.gender}</td>
              <td>{a.appointmentDate}</td>
              <td>{a.dentistName}</td>
              <td>{a.clinicName}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );
}

export default AdminPanel;