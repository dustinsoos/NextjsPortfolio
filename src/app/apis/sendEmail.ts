'use server';

import React from 'react';
import { Resend } from 'resend';
import ContactFormEmail from '../../../email/contact-form-email';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const firstName = formData.get('firstName');
  const lastName = formData.get('lastName');
  const senderEmail = formData.get('email');
  const message = formData.get('message');

  await resend.emails.send({
    from: 'contact@dustinmsoos.com',
    to: 'dustinmsoos@gmail.com',
    subject: 'New message from your portfolio!',
    reply_to: senderEmail as string,
    text: message as string,
    react: React.createElement(ContactFormEmail, {
      message: message as string,
      senderEmail: senderEmail as string,
      firstName: firstName as string,
      lastName: lastName as string,
    }),
  });
};
