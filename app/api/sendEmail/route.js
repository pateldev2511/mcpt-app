import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import BookingConfirmationEmail from '@/emails';
import { google, outlook, office365 } from "calendar-link";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
    const response = await req.json();

    const event = {
        title: "Movement Care PT Appointment",
        description: "Be thereWe are looking forward to seeing you for your physical therapy session at Movement Care PT. Our expert therapist will provide personalized care to help you achieve your wellness goals. Please arrive a few minutes early.",
        start: [response.data.Date],
        duration: [1, "hour"],
        location: "19 W 45th St STE 501, New York, NY 10036"
      };

    try {
        const data = await resend.emails.send({
            from: 'booking@dev-patl.xyz',
            to: [response.data.Email],
            subject: 'Your Appointment Confirmation with Movement Care PT',
            react: BookingConfirmationEmail({
                userFirstname: response.data.UserName,
                appointmentDate: response.data.Date,
                appointmentTime: response.data.Time,
                therapistName: response.data.TherapistName || 'Dr. Nidhi Patel', // assuming response contains TherapistName
                clinicAddress: "19 W 45th St STE 501, New York, NY 10036", // or from response if available
                additionalNotes: response.data.Note,
                googleCalendarLink: google(event),
                outlookCalendarLink: outlook(event),
                office365CalendarLink: office365(event),
            })
        });

        return NextResponse.json({ data });
    } catch (err) {
        return NextResponse.json({ err });
    }
}