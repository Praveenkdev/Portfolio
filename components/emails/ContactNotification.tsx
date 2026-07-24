import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
} from "@react-email/components";
import * as React from "react";

interface ContactNotificationProps {
  name: string;
  email: string;
  message: string;
}

export const ContactNotification: React.FC<Readonly<ContactNotificationProps>> = ({
  name,
  email,
  message,
}) => (
  <Html>
    <Head />
    <Preview>New Portfolio Contact from {name}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>New Contact Message</Heading>
        <Text style={text}>
          <strong>Name:</strong> {name}
        </Text>
        <Text style={text}>
          <strong>Email:</strong> {email}
        </Text>
        <Text style={text}>
          <strong>Message:</strong>
        </Text>
        <Text style={messageBlock}>{message}</Text>
      </Container>
    </Body>
  </Html>
);

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
};

const h1 = {
  color: "#333",
  fontSize: "24px",
  fontWeight: "bold",
  padding: "0 48px",
};

const text = {
  color: "#333",
  fontSize: "16px",
  padding: "0 48px",
};

const messageBlock = {
  ...text,
  backgroundColor: "#f4f4f4",
  padding: "24px",
  margin: "0 48px",
  borderRadius: "4px",
  whiteSpace: "pre-wrap" as const,
};

export default ContactNotification;
