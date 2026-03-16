const express = require("express");
const router = express.Router();

let appointments = [];

// create appointment
router.post("/", (req, res) => {
  const newAppointment = {
    id: Date.now(),
    ...req.body
  };

  appointments.push(newAppointment);

  res.json({
    message: "Appointment booked successfully"
  });
});

// admin panel
router.get("/", (req, res) => {
  res.json(appointments);
});

module.exports = router;