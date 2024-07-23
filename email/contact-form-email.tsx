import React from 'react';
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';

type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
  firstName: string;
  lastName: string;
};

export default function ContactFormEmail({
  message,
  senderEmail,
  firstName,
  lastName,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio site</Preview>
      <Tailwind>
        <Body className='bg-gray-300 py-8'>
          <Container className='bg-slate-950 my-10 px-10 py-4 rounded-md'>
            <Section>
              <Heading className=' text-green-400 leading-tight'>
                You recieved the following message from {firstName} {lastName}
              </Heading>
              <Text className=' text-gray-300'>{message}</Text>
              <Hr />
              <Text className=' text-gray-300'>
                The sender's email is: {senderEmail}
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
