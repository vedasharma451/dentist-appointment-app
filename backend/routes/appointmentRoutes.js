const express = require("express");
const router = express.Router();
const db = require("../models/db");

// create appointment
router.post("/", (req, res) => {

    const { patientName, age, gender, appointmentDate, dentistName, clinicName } = req.body;

    const sql = `
        INSERT INTO appointments 
        (patientName, age, gender, appointmentDate, dentistName, clinicName)
        VALUES (?, ?, ?, ?, ?, ?)
    `;

    db.run(sql,
        [patientName, age, gender, appointmentDate, dentistName, clinicName],
        function (err) {

            if (err) {
                return res.status(500).json({ error: err.message });
            }

            res.json({
                message: "Appointment booked successfully"
            });

        });

});


// get all appointments (admin)
router.get("/", (req, res) => {

    db.all("SELECT * FROM appointments", [], (err, rows) => {

        if (err) {
            return res.status(500).json({ error: err.message });
        }

        res.json(rows);

    });

});

module.exports = router;