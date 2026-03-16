const sqlite3 = require("sqlite3").verbose();
const path = require("path");

// database file path
const dbPath = path.join(__dirname, "..", "dentistData.db");

// create database
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.log("Database error:", err.message);
    } else {
        console.log("Connected to SQLite database");
    }
});

// create tables
db.serialize(() => {

    // Dentist table
    db.run(`
        CREATE TABLE IF NOT EXISTS dentists (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            qualification TEXT,
            experience INTEGER,
            clinic TEXT,
            address TEXT,
            location TEXT,
            photo TEXT
        )
    `);

    // Appointment table
    db.run(`
        CREATE TABLE IF NOT EXISTS appointments (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            patientName TEXT,
            age INTEGER,
            gender TEXT,
            appointmentDate TEXT,
            dentistName TEXT,
            clinicName TEXT
        )
    `);

});

module.exports = db;