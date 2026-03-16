const express = require("express");
const router = express.Router();

const dentists = [
  {
    id: 1,
    name: "Dr.Swapna",
    qualification: "BDS",
    experience: 4,
    clinic: "Swapna Dental",
    address: "Kothapet Road",
    location: "Hyderabad",
    photo: "https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg"
  },
  {
    id: 2,
    name: "Dr.Adithya",
    qualification: "BDS, MDS",
    experience: 7,
    clinic: "Adithya Teeth Clinic",
    address: "Dilsukhnagar",
    location: "Hyderabad",
    photo: "https://static.vecteezy.com/system/resources/thumbnails/026/375/249/small/ai-generative-portrait-of-confident-male-doctor.jpg"
  },
  {
    id: 3,
    name: "Dr.Arjun",
    qualification: "BDS",
    experience: 13,
    clinic: "Arjun Center",
    address: "Kukatpally",
    location: "Hyderabad",
    photo: "https://i.pinimg.com/736x/4c/1c/9e/4c1c9edd3857a345d9c4868d7f1ce83d.jpg"
  }
];

router.get("/", (req, res) => {
  res.json(dentists);
});

module.exports = router;