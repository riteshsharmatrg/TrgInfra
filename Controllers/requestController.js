const {sendEmailService} = require("../service/nodemailer");

const sendGeneralEmail = async (req, res) => {
  const { name, email, phone, company, projectType, location, timeline, description } = req.body;

  try {
    const mailOptions = {
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: "New Consultation Request",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin:auto; border:1px solid #e0e0e0; border-radius:10px; padding:20px; background:#f9f9f9;">
          <h2 style="color:#2c3e50; text-align:center;">📩 New Consultation Request</h2>
          <table style="width:100%; border-collapse: collapse;">
            <tr><td><b>Name:</b></td><td>${name || "N/A"}</td></tr>
            <tr><td><b>Email:</b></td><td>${email || "N/A"}</td></tr>
            <tr><td><b>Phone:</b></td><td>${phone || "N/A"}</td></tr>
            <tr><td><b>Company:</b></td><td>${company || "N/A"}</td></tr>
            <tr><td><b>Project Type:</b></td><td>${projectType || "N/A"}</td></tr>
            <tr><td><b>Location:</b></td><td>${location || "N/A"}</td></tr>
            <tr><td><b>Timeline:</b></td><td>${timeline || "N/A"}</td></tr>
            <tr><td><b>Description:</b></td><td>${description || "N/A"}</td></tr>
          </table>
        </div>
      `,
    };

    await sendEmailService(mailOptions);
    res.status(200).json({ message: "Consultation request email sent successfully" });
  } catch (error) {
    console.error("Error sending consultation request email:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
};

// ✅ CommonJS export
module.exports = { sendGeneralEmail };
