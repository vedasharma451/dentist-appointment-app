import React from "react";
import DentistList from "./components/DentistList";
import AdminPanel from "./components/AdminPanel";

function App() {
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Dentist Appointment Booking</h2>

      <DentistList />

      <hr />

      <AdminPanel />
    </div>
  );
}

export default App;