"use server";

import React from "react";
import { Resend } from "resend";
import ContactFormEmail from "../../../email/contact-form-email";

import { validateString } from "../../../utils/utils";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const senderEmail = formData.get("email");
  const message = formData.get("message");

  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }

  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  await resend.emails.send({
    from: "contact@dustinmsoos.com",
    to: "dustinmsoos@gmail.com",
    subject: "New message from your portfolio!",
    replyTo: senderEmail as string,
    text: message as string,
    react: React.createElement(ContactFormEmail, {
      message: message as string,
      senderEmail: senderEmail as string,
      firstName: firstName as string,
      lastName: lastName as string,
    }),
  });
};
