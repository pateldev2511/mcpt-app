import { Resend } from 'resend';

import { NextResponse } from 'next/server';
import BookingConfirmationEmail from '@/emails';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req){

    const response= await req.json()
    
    try{

        const data = await resend.emails.send({
            from: 'booking@dev-patl.xyz',
            to: [response.data.Email],
            subject: 'Your Appointment Confirmation with Movement Care PT',
            react: BookingConfirmationEmail({response})
          });

        return NextResponse.json({data})
    }catch(err){
        return NextResponse.json({err})
    }
}