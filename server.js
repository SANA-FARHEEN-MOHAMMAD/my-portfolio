const express = require("express")
const bodyparser = require("body-parser")
const nodemailer = require("nodemailer")
const path = require("path")

require("dotenv").config();

const app = express()

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, "public")))

// Parse form data
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"))
})

app.post("/", (req, res) => {
  console.log("Form submission received:", req.body)

  const name = req.body.nameofperson || "Unknown"
  const email = req.body.username || "no-email@example.com"
  const message = req.body.message || "No message"
  const subject = req.body.subject || "Contact Form Submission"

  // Create a test SMTP transporter
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  // Setup email data
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    cc: process.env.EMAIL_USER,
    subject: "Thanks for contacting me about : " + subject,
    text: `Hello ${name},\n\nThank you for contacting me. I've received your message:\n\n"${message}"\n\nI'll get back to you soon.\n\nBest regards,\nSana Farheen`,
  }

  // Send mail
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Email sending error:", error)
      return res.status(500).json({ success: false, error: error.message })
    } else {
      console.log("Email sent successfully:", info.response)
      return res.status(200).json({ success: true, message: "Email sent successfully" })
    }
  })
})


const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`)
})
