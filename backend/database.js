const db = require("./models/db");

const dentists = [
  {
    name: "Dr. Swapna",
    qualification: "BDS",
    experience: 4,
    clinic: "Swapna Dental",
    address: "kothapett Road",
    location: "Hyderabad",
    photo: "https://i.pravatar.cc/150?img=12"
  },
  {
    name: "Dr. Anjali Mehta",
    qualification: "BDS, MDS",
    experience: 12,
    clinic: "Bright Teeth Clinic",
    address: "Banjara Hills",
    location: "Hyderabad",
    photo: "https://i.pravatar.cc/150?img=32"
  },
  {
    name: "Dr. Kiran Patel",
    qualification: "BDS",
    experience: 6,
    clinic: "Healthy Smile Center",
    address: "Kukatpally",
    location: "Hyderabad",
    photo: "https://i.pravatar.cc/150?img=15"
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