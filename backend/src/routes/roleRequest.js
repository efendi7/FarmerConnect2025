// routes/roleRequest.js
const express = require("express");
const router = express.Router();
const { RoleRequest } = require("../models/RoleRequest"); // Sesuaikan dengan model

// Route untuk mengajukan role
router.post("/role-request", async (req, res) => {
  try {
    const { role } = req.body;
    if (!role || (role !== "petani" && role !== "admin")) {
      return res.status(400).json({ message: "Invalid role requested" });
    }

    // Simpan permintaan role ke database atau lakukan validasi lebih lanjut
    await RoleRequest.create({ role }); // Simpan ke database

    res.status(201).json({ message: "Role request submitted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error: error.message });
  }
});

module.exports = router;
