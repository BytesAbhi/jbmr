const nodemailer = require('nodemailer');

exports.otpEmailSender = async ({email , otp}, next) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'OTP Verification',
            text: `Your OTP is ${otp}`
        };
        await transporter.sendMail(mailOptions);
        return true;
    }catch(error){
        next(error);
    }
}  