const nodemailer = require("nodemailer");
require("dotenv").config();  

const sendEmailService = async (mailOptions) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASS,
        },
    });

    await transporter.sendMail(mailOptions);
};

module.exports = {
    sendEmailService,
};
