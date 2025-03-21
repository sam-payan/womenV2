const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Dummy storage for OTPs (In production, use a database)
const otpStorage = {};

// Email transporter (Use your SMTP credentials)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your-email@gmail.com",
    pass: "your-email-password",
  },
});

// Generate 4-digit OTP
const generateOTP = () => Math.floor(1000 + Math.random() * 9000).toString();

// Send OTP API
app.post("/send-otp", async (req, res) => {
  const { email } = req.body;

  if (!email) return res.status(400).json({ message: "Email is required" });

  const otp = generateOTP();
  otpStorage[email] = otp; // Store OTP (temporary)

  const mailOptions = {
    from: "your-email@gmail.com",
    to: email,
    subject: "Your OTP Code",
    text: `Your OTP is: ${otp}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: "OTP sent successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Email sending failed" });
  }
});

// Verify OTP API
app.post("/verify-otp", (req, res) => {
  const { email, otp } = req.body;

  if (otpStorage[email] === otp) {
    delete otpStorage[email]; // Remove OTP after verification
    res.json({ success: true, message: "OTP verified" });
  } else {
    res.status(400).json({ success: false, message: "Invalid OTP" });
  }
});

// Start Server
app.listen(5000, () => console.log("Server running on port 5000"));
