const db = require("./models/db");

const dentists = [
  {
    name: "Dr.Swapna",
    qualification: "BDS",
    experience: 4,
    clinic: "Swapna Dental",
    address: "kothapett Road",
    location: "Hyderabad",
    photo: "https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg?semt=ais_hybrid&w=740&q=80"
  },
  {
    name: "Dr.Adithya",
    qualification: "BDS, MDS",
    experience: 7,
    clinic: "Adithya Teeth Clinic",
    address: "Dilshuknagara",
    location: "Hyderabad",
    photo: "https://static.vecteezy.com/system/resources/thumbnails/026/375/249/small/ai-generative-portrait-of-confident-male-doctor-in-white-coat-and-stethoscope-standing-with-arms-crossed-and-looking-at-camera-photo.jpg"
  },
  {
    name: "Dr.Arjun",
    qualification: "BDS",
    experience: 13,
    clinic: "Arjun Center",
    address: "Kukatpally",
    location: "Hyderabad",
    photo: "https://i.pinimg.com/736x/4c/1c/9e/4c1c9edd3857a345d9c4868d7f1ce83d.jpg"
  }
];

// insert dentists
dentists.forEach((d) => {
  db.run(
    `INSERT INTO dentists (name, qualification, experience, clinic, address, location, photo)
     VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [d.name, d.qualification, d.experience, d.clinic, d.address, d.location, d.photo]
  );
});

console.log("Dentist sample data inserted");