import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
  Section,
} from "@react-email/components";
import * as React from "react";

interface ContactConfirmationProps {
  name: string;
}

export const ContactConfirmation: React.FC<Readonly<ContactConfirmationProps>> = ({
  name,
}) => (
  <Html>
    <Head />
    <Preview>Thanks for reaching out!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Hello {name},</Heading>
        <Text style={text}>
          Thank you for reaching out! I've received your message and will get back to you as soon as possible.
        </Text>
        <Section style={divider} />
        <Text style={footer}>
          This is an automated response to confirm receipt of your inquiry.
        </Text>
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
  padding: "40px 20px",
  borderRadius: "8px",
};

const h1 = {
  color: "#333",
  fontSize: "24px",
  fontWeight: "bold",
  padding: "0 24px",
};

const text = {
  color: "#555",
  fontSize: "16px",
  padding: "0 24px",
  lineHeight: "24px",
};

const divider = {
  margin: "24px",
  borderTop: "1px solid #eaeaeb",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  padding: "0 24px",
};

export default ContactConfirmation;
