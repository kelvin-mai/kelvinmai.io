'use server';

import { transporter } from '@/lib/email';
import { getBaseUrl } from '@/lib/utils';

const htmlTemplate = ({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Contact Form Submission</title>
</head>
<body>
  <h1>New Contact Form Submission from ${getBaseUrl()}</h1>
  <p><strong>Name:</strong> ${name}</p>
  <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
  <p>${message}</p>
  <hr>
  <p><small>This email was sent from the contact form on <a href="${getBaseUrl()}">${getBaseUrl()}</a>.</small></p>
</body>
</html>

`;

export const sendEmailAction = async (
  _: { submitted: boolean },
  formData: FormData,
) => {
  try {
    await transporter.verify();
    const res = await transporter.sendMail({
      to: 'me@kelvinmai.io',
      subject: '[kelvinmai.io] New Contact Form Submission',
      html: htmlTemplate({
        email: String(formData.get('email')),
        name: String(formData.get('name')),
        message: String(formData.get('message')),
      }),
    });
    console.log(res);
  } catch (e) {
    console.error(e);
  }
  return { submitted: true };
};
