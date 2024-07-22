import { NextResponse, NextRequest } from 'next/server'
import createTransporter from '@/utils/EmailTransporter'

export const POST = async(req:any) => {
    const payload = await req.json()
    const name = payload.name
    const email = payload.email
    const message = payload.message

    if(!email.includes('@')){
      return NextResponse.json({ message: "Success: email was not sent", status:400 },{status:400})
    }

    const mailOptions = {
        from: email,
        to: process.env.MAILER_USERNAME,
        subject: "Let us connect",
        text: `name: ${name} \n email: ${email} \n message: ${message}`,
      };

    try {

      const transporter = await createTransporter();
        const mail = await transporter.sendMail(mailOptions);
        console.log(mail)
        if(!mail){
          console.log("No mail")
          return NextResponse.json({ message: "Success: email was not sent", status:400 },{status:400})
        }

        return NextResponse.json({ message: "Success: email was sent", status:200 },{status:200})

    } catch (error) {
        console.log(error)
        NextResponse.json({ message: "COULD NOT SEND MESSAGE", status:400 },{status:400})
    }
}