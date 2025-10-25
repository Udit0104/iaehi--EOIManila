const mongoose = require("mongoose");
const Admin = require("./models/Admin");
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI); // Change to your DB

async function createAdmins() {
  await Admin.deleteMany({}); // Optional: clear existing admins

  await Admin.create([
    {
      username: "EOIManila",
      password: "EOIManila", // will be hashed automatically
      role: "superadmin",
      department: null,
    },
    // Add more admins as needed
  ]);

  console.log("Admins created!");
  mongoose.disconnect();
}

createAdmins();