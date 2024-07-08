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
  userFirstname,
  appointmentDate,
  appointmentTime,
  therapistName,
  clinicAddress,
  additionalNotes,
  googleCalendarLink,
  outlookCalendarLink,
  office365CalendarLink,
}) => (
  <Html>
    <Head />
    <Preview>Your booking confirmation with Movement Care PT</Preview>
    <Body style={styles.main}>
      <Container style={styles.container}>
        <Img
          src="https://res.cloudinary.com/djx8uceou/image/upload/v1720232758/mcpt_logo_c98664ff62.svg"
          width="170"
          height="50"
          alt="Movement Care PT"
          style={styles.logo}
        />
        <Text style={styles.paragraph}>Hi {userFirstname},</Text>
        <Text style={styles.paragraph}>
          Thank you for booking an appointment with Movement Care PT. Below are the details of your appointment:
        </Text>
        <Text style={styles.paragraph}>
          <strong>Therapist:</strong> {therapistName} <br />
          <strong>Date:</strong> {appointmentDate} <br />
          <strong>Time:</strong> {appointmentTime} <br />
          <strong>Address:</strong> {clinicAddress}
        </Text>
        {additionalNotes && (
          <Text style={styles.paragraph}>
            <strong>Additional Notes:</strong> {additionalNotes}
          </Text>
        )}
        
        <Section style={styles.btnContainer}>
          <Button style={styles.buttonModify} href="https://www.movementcarept.com">
            Modify Appointment
          </Button>
        </Section>
        <Section style={styles.btnFlex}>
          <a style={styles.buttonGoogle} href={googleCalendarLink}>
          <Img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWUiIHZpZXdCb3g9IjAgMCAyNTYgMjU2Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTk1LjM2OCA2MC42MzJINjAuNjMydjEzNC43MzZoMTM0LjczNnoiLz48cGF0aCBmaWxsPSIjZWE0MzM1IiBkPSJNMTk1LjM2OCAyNTZMMjU2IDE5NS4zNjhsLTMwLjMxNi01LjE3MmwzMC4zMTYgNS4xNzJsLTUuNTMzIDI3LjMweiIvPjxwYXRoIGZpbGw9IiMxODgwMzgiIGQ9Ik0wIDE5NS4zNjh2NDAuNDIxQzAgMjQ2Ljk1NiA5LjA0NCAyNTYgMjAuMjEgMjU2aDQwLjQyMmw2LjIyNS0zMC4zMTZsLTYuMjI1LTMwLjMxNi0zMy4wMzMtNS4xNzJ6Ii8+PHBhdGggZmlsbD0iIzE5NjdkMiIgZD0iTTI1NiA2MC42MzJWMjAuMjFDMjU2IDkuMDQ0IDI0Ni45NTYgMCAyMzUuNzkgMGgtNDAuNDJxLTUuNTMyIDIyLjU1NC01LjUzMyAzMy4xOTZxMCAxMC42NDEgNS41MzMgMjcuNDM2cTIwLjExNSA1Ljc2IDMwLjMxNiA1Ljc2VDI1NiA2MC42MzEiLz48cGF0aCBmaWxsPSIjZmJiYzA0IiBkPSJNMjU2IDYwLjYzMkgxOTUuMzY4djEzNC43MzZIMjU2eiIvPjxwYXRoIGZpbGw9IiMzNGE4NTMiIGQ9Ik0xOTUuMzY4IDE5NS4zNjhINjAuNjMyVjI1NmgxMzQuNzM2eiIvPjxwYXRoIGZpbGw9IiM0Mjg1ZjQiIGQ9Ik0xOTUuMzY4IDBIMjAuMjExQzkuMDQ0IDAgMCA5LjA0NCAwIDIwLjIxdjE3NS4xNThoNjAuNjMyVjYwLjYzMmgxMzQuNzM2eiIvPjxwYXRoIGZpbGw9IiM0Mjg1ZjQiIGQ9Ik04OC4yNyAxNjUuMTU0Yy01LjAzNi0zLjQwMi04LjUyMy04LjM3LTEwLjQyNi0xNC45NGwxMS42ODktNC44MTZxMS41OS02LjA2MyA1LjU1OC05LjM5OGMyLjYyNy0yLjIyNSA1LjgyNy0zLjMxOCA5LjU2Ni0zLjMxOHE1LjczNCAwIDkuODUyLTMuNDg3YzIuNzQ2LTIuMzI0IDQuMTI3LTUuMjg4IDQuMTI3LTguODc1cTAtNS41MDgtNC4zNDUtOC45OTRjLTIuODk3LTIuMzI0LTYuNTM1LTMuNDg2LTEwLjg4LTMuNDg2aC02Ljc1NHYtMTEuNTdoNi4wNjNxNS42MDggMCA5LjQ0OC0zLjAzM2MyLjU2LTIuMDIgMy44NC00Ljc4MyAzLjg0LTguMzAzYzAtMy4xMzItMS4xNDUtNS42MjUtMy40MzUtNy40OTRjLTIuMjktMS44Ny01LjE4OC0yLjgxMy04LjcwOC0yLjgxM3MtNi4xNjQuOTEtOC4xODUgMi43NDVhMTYuMSAxNi4xIDAgMCAwLTQuNDEzIDYuNzU0bC0xMS41Ny00LjgxN2MxLjUzMi00LjM0NSA0LjM0NS04LjE4NSA4LjQ3MS0xMS41MDNzOS4zOTgtNC45ODUgMTUuNzk4LTQuOTg1YzQuNzMzIDAgOC45OTQuOTEgMTIuNzY3IDIuNzQ1YzMuNzcyIDEuODM2IDYuNzM2IDQuMzc5IDguODc1IDcuNjEzYzIuMTQgMy4yNSAzLjIgNi44ODggMy4yIDEwLjkzYzAgNC4xMjYtLjk5MyA3LjYxMy0yLjk4IDExLjQ3NnMtNC40MyA1LjA1Mi03LjMyNyA2LjU4NXYuN1EwIDQ2LjIzIDkgNDguNzMgYzIuNDQyIDMuMjg0IDMuNjcyIDcuMjA4IDMuNjcyIDExLjc5YzAgNC41OC0xLjE2MyA4LjY3My0zLjQ4NyAxMi4yNmMtMi4zMjQgMy41ODgtNS41NCA2LjQxNy05LjYxNyA4LjQ3MnMtOC42OSAzLjEwLTEzLjc5MyAzLjEwYy01LjkxMi4wMTYtMTEuMzY5LTEuNjg1LTE2LjQwNS01LjA4N20xNy43OTctNTguMDA1bC0xMi44MzMgOS4yOGwtNi40MTctOS43MzRsMjMuMDIzLTE2LjYwN2g4LjgyNXY3OC4zMzNoLTEyLjU5OHoiLz48L3N2Zz4="/> Add to Google
          </a>
          <a style={styles.buttonOutlook} href={outlookCalendarLink}>
          <Img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTguNTYgMTIuMDNxMCAuMzgtLjA2LjczcC0uMTEuMzRxLS4yLjI3LS40OS40M3EtLjMuMTYtLjcxLjE2cS0uNDIgMC0uNzEtLjE3dC0uNDgtLjQ1dC0uMjctLjYzcS0uMDktLjM1LS4wOS0uNzJxMC0uMzYuMDktLjcycS4wOC0uMzUuMjctLjYzdC41LS40NXEuMy0uMTcuNzItLjE3cS40MyAwIC43Mi4xN3EuMy4xOC40OC40NnEuMTguMjkuMjcuNjRxLjA2LjM2LjA2LjczTTEyIDIydi03LjgxcTAtLjM5LS4yNy0uNjlxLS4yOC0uMjUtLjY3LS4yNUg3Ljk0cS0uMzkgMC0uNjcuMjVxLS4yNy4zLS4yNy42OVYxN0gyLjgzYy0uMzMgMC0uNTktLjI0LS41OS0uNTlWMzMuODNxMC0uMzMuMjQtLjU5UTIuNSAyNyA1NSAyNyBoNS40MlY0LjEzcTAtLjM3LjI1LS42M3EuMjYtLjI1LjYzLS4yN2gxMC43NHExNy4wLjI1LjYzLS4yN3ExLjI1LS4yNi4yNS0uNzl2Ni45MWwxbzR0LjZoLjAxcC4wOS4wOHguMjFjLjA2LjA5LjA2LjIwTTguNTYgMy42MXFjMjQuNTE0IDAgNDEuMDUgMTAuNTg5IDUwLjQ3OSAxOS40MzhNNyA4Ljg4Mkg4LjkxOHYtMy41aDMuMTJWNzFoLTMuMTJjMCAuNDAzLjA1OS42NDYgLjExIDBMMTVMMTUgMTEuM1oiLz48L3N2Zz4="/> Add to Outlook
          </a>
          <a style={styles.buttonOffice365} href={office365CalendarLink}>
          <Img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWUiIHZpZXdCb3g9IjAgMCAyNTYgMjU2Ij48cGF0aCBmaWxsPSIjZjE1MTFiIiBkPSJNMTIxLjY2NiAxMjEuNjY2SDBWMFYxMjEuNjY2eiIvPjxwYXRoIGZpbGw9IiM4MGNjMjgiIGQ9Ik0yNTYgMTIxLjY2NkgxMzQuMzM1VjBIMjU2eiIvPjxwYXRoIGZpbGw9IiMwMGFkZWYiIGQ9Ik0xMjEuNjYzIDI1Ni4wMDJIMFYxMzQuMzM2aDEyMS42NjN6Ii8+PHBhdGggZmlsbD0iI2ZiYmMwOSIgaWQ9IkdvbGQiIGQ9Ik0yNTYgMjU2LjAwMkgxMzQuMzM1VjEzNC4zMzZoMTIxLjY2NXoiLz48L3N2Zz4="/> Add to Office 365
          </a>
        </Section>
        <Text style={styles.paragraph}>
          Best regards,
          <br />
          The Movement Care PT Team
        </Text>
        <Hr style={styles.hr} />
        <Text style={styles.footer}>
          {clinicAddress}
          <br />
          <a href="mailto:movementcarept@gmail.com"> movementcarept@gmail.com</a>
          </Text>
        
      </Container>
    </Body>
  </Html>
);

export default BookingConfirmationEmail;

const styles = {
  main: {
    backgroundColor: "#ffffff",
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  },
  container: {
    margin: "0 auto",
    padding: "20px 0 48px",
  },
  logo: {
    margin: "0 auto",
  },
  paragraph: {
    fontSize: "16px",
    lineHeight: "26px",
  },
  btnFlex: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    marginTop: '20px',
  },
  buttonGoogle: {
  backgroundColor: '#4285f4',
  color: '#fff',
  borderRadius: '3px',
  fontSize: '12px',
  textDecoration: 'none',
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '8px',
  margin: '5px',
  },
  buttonOutlook: {
  backgroundColor: '#0072c6',
  color: '#fff',
  borderRadius: '3px',
  fontSize: '12px',
  textDecoration: 'none',
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '8px',
  margin: '5px',
  },
  buttonOffice365: {
  backgroundColor: '#f1511b',
  color: '#fff',
  borderRadius: '3px',
  fontSize: '12px',
  textDecoration: 'none',
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '8px',
  margin: '5px',
  },
  btnContainer: {
  textAlign: 'center',
  marginTop: '20px',
  },
  buttonModify: {
  backgroundColor: '#5F51E8',
  borderRadius: '3px',
  color: '#fff',
  fontSize: '16px',
  textDecoration: 'none',
  textAlign: 'center',
  display: 'block',
  padding: '12px',
  },
  hr: {
  borderColor: '#cccccc',
  margin: '20px 0',
  },
  footer: {
  color: '#8898aa',
  fontSize: '12px',
  },
  };