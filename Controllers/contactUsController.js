const { sendEmailService } = require("../service/nodemailer")


exports.sendGeneralEmail = async (req, res) => {
  const { subject = "ContactUs Enquiry Form", name, email, phone, message } = req.body;
  try {
    const mailOptions = {
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #e0e0e0; border-radius: 10px; padding: 20px; background: #f9f9f9;">
          <h2 style="color: #2c3e50; text-align: center;">📩 New Enquiry Received</h2>
          <p style="font-size: 15px; color: #333;">
            A message by <strong>${name}</strong> has been received. Kindly respond at your earliest convenience.
          </p>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
          <h3 style="color: #444;">Enquiry Details</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="background: #f4f4f4;">
              <td style="padding: 8px; font-weight: bold;">Name:</td>
              <td style="padding: 8px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold;">Email:</td>
              <td style="padding: 8px;">${email}</td>
            </tr>
            <tr style="background: #f4f4f4;">
              <td style="padding: 8px; font-weight: bold;">Phone:</td>
              <td style="padding: 8px;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold;">Message:</td>
              <td style="padding: 8px;">${message}</td>
            </tr>
          </table>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
          <p style="font-size: 12px; color: #888; text-align: center;">
            📌 This email was generated automatically by <strong>Estate 360</strong>.
          </p>
        </div>
      `,
    };
    // ✅ Use the imported mailer service here
    await sendEmailService(mailOptions);

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending general email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
};
