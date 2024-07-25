import React from "react";
import ContactForm from "./components/ContactForm";

export default function Contact() {
  return (
    <>
      <section
        id="Contact"
        className="p-custom-padding flex flex-col justify-center md:items-start md:justify-start"
      >
        <h2 className="pb-24">Contact Me</h2>
        <ContactForm />
      </section>
      <hr className="mt-4 border-t-2 border-green-400" />
    </>
  );
}
