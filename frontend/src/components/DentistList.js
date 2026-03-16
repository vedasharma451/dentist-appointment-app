import React, { useEffect, useState } from "react";
import axios from "axios";
import BookAppointment from "./BookAppointment";

function DentistList() {

  const [dentists, setDentists] = useState([]);
  const [selectedDentist, setSelectedDentist] = useState(null);

  useEffect(() => {

    axios.get("http://localhost:5000/api/dentists")
      .then(res => {
        setDentists(res.data);
      })
      .catch(err => {
        console.log(err);
      });

  }, []);

  return (

    <div>

      <h4 className="mb-3">Available Dentists</h4>

      <div className="row">

        {dentists.map(d => (

          <div className="col-md-4 mb-3" key={d.id}>

            <div className="card">

              <img
                src={d.photo}
                className="card-img-top"
                alt="dentist"
              />

              <div className="card-body">

                <h5>{d.name}</h5>

                <p>{d.qualification}</p>

                <p>Experience: {d.experience} years</p>

                <p>{d.clinic}</p>

                <button
                  className="btn btn-primary"
                  onClick={() => setSelectedDentist(d)}
                >
                  Book Appointment
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

      {selectedDentist && (
        <BookAppointment dentist={selectedDentist} />
      )}

    </div>

  );
}

export default DentistList;