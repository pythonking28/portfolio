import { NextResponse, NextRequest } from 'next/server'
import transporter from '@/utils/EmailTransporter'

export const POST = async(req:any) => {
    const payload = await req.json()
    const name = payload.name
    const email = payload.email
    const message = payload.message

    const mailOptions = {
        from: process.env.MAILER_USERNAME,
        to: email,
        subject: "Let us connect",
        text: `name: ${name} \n message:${message}`,
      };

    try {


        const mail = transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
              console.error("Error sending email: ", error);
            } else {
              console.log("Email sent: ", info.response);
            }
          });

        return NextResponse.json({ message: "Success: email was sent" })

    } catch (error) {
        console.log(error)
        NextResponse.json({ message: "COULD NOT SEND MESSAGE" })
    }
}