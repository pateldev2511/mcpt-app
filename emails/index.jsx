import {
    Body,
    Button,
    Container,
    Head,
    Hr,
    Html,
    Img,
    Preview,
    Section,
    Text,
  } from "@react-email/components";
  import * as React from "react";
  
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";
  
  export const BookingConfirmationEmail = ({
    userFirstname = "John Doe",
    appointmentDate = "Date not set",
    appointmentTime = "Time not set",
    therapistName = "Therapist",
    clinicAddress = "Clinic Address",
    additionalNotes = "",
  }) => (
    <Html>
      <Head />
      <Preview>
        Your booking confirmation with Movement Care PT
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src={`${baseUrl}/mcpt-logo.svg`}
            width="170"
            height="50"
            alt="Movement Care PT"
            style={logo}
          />
          <Text style={paragraph}>Hi {userFirstname},</Text>
          <Text style={paragraph}>
            Thank you for booking an appointment with Movement Care PT. Below are the details of your appointment:
          </Text>
          <Text style={paragraph}>
            <strong>Therapist:</strong> {therapistName} <br />
            <strong>Date:</strong> {appointmentDate} <br />
            <strong>Time:</strong> {appointmentTime} <br />
            <strong>Address:</strong> {clinicAddress}
          </Text>
          {additionalNotes && (
            <Text style={paragraph}>
              <strong>Additional Notes:</strong> {additionalNotes}
            </Text>
          )}
          <Section style={btnContainer}>
            <Button style={button} href="https://www.movementcarept.com">
              Modify Appointment
            </Button>
          </Section>
          <Text style={paragraph}>
            Best regards,
            <br />
            The Movement Care PT Team
          </Text>
          <Hr style={hr} />
          <Text style={footer}>
            {clinicAddress}
          </Text>
        </Container>
      </Body>
    </Html>
  );
  
  export default BookingConfirmationEmail;
  
  const main = {
    backgroundColor: "#ffffff",
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  };
  
  const container = {
    margin: "0 auto",
    padding: "20px 0 48px",
  };
  
  const logo = {
    margin: "0 auto",
  };
  
  const paragraph = {
    fontSize: "16px",
    lineHeight: "26px",
  };
  
  const btnContainer = {
    textAlign: "center",
  };
  
  const button = {
    backgroundColor: "#5F51E8",
    borderRadius: "3px",
    color: "#fff",
    fontSize: "16px",
    textDecoration: "none",
    textAlign: "center",
    display: "block",
    padding: "12px",
  };
  
  const hr = {
    borderColor: "#cccccc",
    margin: "20px 0",
  };
  
  const footer = {
    color: "#8898aa",
    fontSize: "12px",
  };