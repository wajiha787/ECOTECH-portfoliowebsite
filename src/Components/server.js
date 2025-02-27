const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config(); // Load environment variables from .env file
const app = express();

// Middleware
app.use(express.json()); // Allow JSON body parsing
app.use(cors()); // Enable CORS

// Email sending route
app.post("/send-email", async (req, res) => {
    const { to, subject, text, html } = req.body; // Extract email details from request body

    if (!to || !subject || !text) {
        return res.status(400).json({ error: "Missing email details" });
    }

    // Configure mail transporter
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL, // Load from .env file
            pass: process.env.PASSWORD // Load from .env file
        }
    });

    // Email options
    const mailOptions = {
        from: process.env.EMAIL,
        to,
        subject,
        text,
        html,
        attachments: [{ filename: "txt.txt", path: "./txt.txt" }]
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent:", info.response);
        res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ error: "Failed to send email" });
    }
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
