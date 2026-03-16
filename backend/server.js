const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const dentistRoutes = require("./routes/dentistRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");

// initialize express
const app = express();

// middlewares
app.use(cors());
app.use(bodyParser.json());

// routes
app.use("/api/dentists", dentistRoutes);
app.use("/api/appointments", appointmentRoutes);

// simple home route
app.get("/", (req, res) => {
    res.send("Dentist Appointment Backend Running");
});

// server port
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});