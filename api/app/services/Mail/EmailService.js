const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD
    }
});

exports.sendEmail = async (to, subject, text) => {
    try {
        const mailOptions = {
            from: process.env.MAIL_FROM_ADDRESS, // Замените на ваш адрес электронной почты
            to,
            subject,
            text
        };

        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
    }
};