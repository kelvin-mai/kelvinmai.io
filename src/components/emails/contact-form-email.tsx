import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components';

interface ContactFormEmailProps {
  name: string;
  email: string;
  message: string;
}

export const ContactFormEmail = ({
  name,
  email,
  message,
}: ContactFormEmailProps) => (
  <Html>
    <Head />
    <Preview>New message from {name} via kelvinmai.io</Preview>
    <Body style={body}>
      <Container style={container}>
        <Section style={header}>
          <Heading style={heading}>New Contact Form Submission</Heading>
          <Text style={subheading}>kelvinmai.io</Text>
        </Section>
        <Section style={content}>
          <Text style={label}>From</Text>
          <Text style={value}>{name}</Text>
          <Text style={label}>Reply to</Text>
          <Text style={value}>
            <Link href={`mailto:${email}`} style={link}>
              {email}
            </Link>
          </Text>
          <Hr style={divider} />
          <Text style={label}>Message</Text>
          <Text style={messageText}>{message}</Text>
        </Section>
        <Hr style={divider} />
        <Text style={footer}>
          Sent from the contact form on{' '}
          <Link href='https://kelvinmai.io' style={link}>
            kelvinmai.io
          </Link>
        </Text>
      </Container>
    </Body>
  </Html>
);

const body = {
  backgroundColor: '#f4f4f5',
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  margin: '0',
  padding: '40px 0',
};

const container = {
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  margin: '0 auto',
  maxWidth: '560px',
  overflow: 'hidden',
};

const header = {
  backgroundColor: '#0f172a',
  padding: '32px 40px',
};

const heading = {
  color: '#ffffff',
  fontSize: '20px',
  fontWeight: '700',
  margin: '0 0 4px',
};

const subheading = {
  color: '#94a3b8',
  fontSize: '13px',
  margin: '0',
};

const content = {
  padding: '32px 40px 24px',
};

const label = {
  color: '#64748b',
  fontSize: '11px',
  fontWeight: '600',
  letterSpacing: '0.05em',
  margin: '0 0 4px',
  textTransform: 'uppercase' as const,
};

const value = {
  color: '#0f172a',
  fontSize: '15px',
  margin: '0 0 20px',
};

const messageText = {
  color: '#0f172a',
  fontSize: '15px',
  lineHeight: '1.6',
  margin: '0',
  whiteSpace: 'pre-wrap' as const,
};

const divider = {
  borderColor: '#e2e8f0',
  margin: '24px 0',
};

const link = {
  color: '#6d28d9',
  textDecoration: 'none',
};

const footer = {
  color: '#94a3b8',
  fontSize: '12px',
  padding: '0 40px 32px',
  margin: '0',
};
