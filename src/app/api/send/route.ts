import { NextResponse, NextRequest } from 'next/server'
import { Resend } from 'resend'
import { EmailTemplate } from './../../../components/email-template';

const resend = new Resend(process.env.RESEND_API_KEY);


export const POST = async(req:any) => {
    const payload = await req.json()
    const name = payload.name
    const email = payload.email
    const message = payload.message

    console.log(name, email, message)

    if(!email.includes('@')){
      return NextResponse.json({ message: "Success: email was not sent", status:400 },{status:400})
    }

    try {
      const { data, error } = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: [process.env.MAILER_USERNAME as string],
        subject: 'Lets Connect',
        react: EmailTemplate({ message, name, email }),
        text: "This is only for typescript validation"
      });

      console.log(data)
      console.log(error)
  
      if (error) {
        return NextResponse.json({ error }, { status: 500 });
      }
  
      return NextResponse.json({data},{status:200});
    } catch (error) {
      return NextResponse.json({ error }, { status: 500 });
    }
}