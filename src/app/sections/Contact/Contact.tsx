import React from 'react';
import ContactForm from './components/ContactForm';

export default function Contact() {
  return (
    <>
      <section
        id='Contact'
        className='flex flex-col justify-center md:justify-start md:items-start min-h-screen pb-40'
      >
        <h2 className='pb-24'>Contact Me</h2>
        <ContactForm />
      </section>
      <hr className='border-t-2 border-green-400 mt-4' />
    </>
  );
}
