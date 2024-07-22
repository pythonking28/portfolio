import nodemailer from 'nodemailer';

const createTransporter = async () => {
  try {
    const transporter = await nodemailer.createTransport({
      service: "Gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.MAILER_USERNAME,
        pass: process.env.MAILER_PASSWORD
      }
    });

    // Verify the connection configuration
    await transporter.verify();
    return transporter;
  } catch (error) {
    throw new Error("Could not create transporter");
  }
};

export default createTransporter;
