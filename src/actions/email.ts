'use server';

import { render } from '@react-email/components';

import { ContactFormEmail } from '@/components/emails/contact-form-email';
import { resend } from '@/lib/email';

type EmailState = { submitted: boolean; error?: string };

export const sendEmailAction = async (
  _: EmailState,
  formData: FormData,
): Promise<EmailState> => {
  const honeypot = formData.get('website') as string;
  if (honeypot) return { submitted: true };

  const email = (formData.get('email') as string)?.trim();
  const name = (formData.get('name') as string)?.trim();
  const message = (formData.get('message') as string)?.trim();

  if (!email || !name || !message)
    return { submitted: false, error: 'All fields are required.' };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    return { submitted: false, error: 'Invalid email address.' };
  if (name.length > 100)
    return { submitted: false, error: 'Name is too long.' };
  if (message.length > 2000)
    return { submitted: false, error: 'Message is too long (max 2000 chars).' };
  if ((message.match(/https?:\/\//g) ?? []).length > 2)
    return { submitted: false, error: 'Message contains too many links.' };

  try {
    const html = await render(ContactFormEmail({ name, email, message }));
    const { error } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'kelvin.mai002@gmail.com',
      replyTo: email,
      subject: `[kelvinmai.io] New message from ${name}`,
      html,
    });
    if (error) throw error;
  } catch (e) {
    console.error(e);
    return {
      submitted: false,
      error: 'Failed to send message. Please try again.',
    };
  }
  return { submitted: true };
};
