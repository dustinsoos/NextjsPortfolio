"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { sendEmail } from "@/app/apis/sendEmail";
import sendIcon from "../../../../../public/images/send-icon.svg";
import Image from "next/image";

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const controls = useAnimation();
  const { ref, inView } = useInView();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const contactVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1.5 },
    },
  };

  const handleFormSubmit = async (formData: Inputs, resetForm: () => void) => {
    const convertedFormData = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      convertedFormData.append(key, value as string);
    });
    await sendEmail(convertedFormData);
    resetForm();
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={contactVariants}
      className="mx-auto flex w-11/12 flex-col rounded-xl bg-custom-black p-4 shadow-lg shadow-green-400/60 md:mx-0 md:w-3/4"
    >
      <h4 className="pb-6 text-3xl font-medium text-green-400">
        Get in touch:
      </h4>
      <form
        onSubmit={handleSubmit((formData) => handleFormSubmit(formData, reset))}
        className="flex flex-col gap-3"
      >
        <div className="flex gap-2">
          <div className="w-1/2">
            <input
              {...register("firstName", {
                required: "First Name Required",
              })}
              type="text"
              className="mr-2 w-full rounded-md border-2 border-gray-300 bg-custom-black py-3 pl-2 pr-10 text-gray-300 outline-none focus:border-green-400"
              placeholder="First Name"
            />
            {errors.firstName && (
              <p className="pt-1 text-sm italic text-red-500">
                <span className="font-bold">*</span> {errors.firstName.message}
              </p>
            )}
          </div>
          <div className="w-1/2">
            <input
              {...register("lastName", { required: "Last Name Required" })}
              type="text"
              className="w-full rounded-md border-2 border-gray-300 bg-custom-black py-3 pl-2 pr-10 text-gray-300 outline-none focus:border-green-400"
              placeholder="Last Name"
            />
            {errors.lastName && (
              <p className="pt-1 text-sm italic text-red-500">
                <span className="font-bold">*</span> {errors.lastName.message}
              </p>
            )}
          </div>
        </div>
        <div>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email address",
              },
            })}
            type="text"
            className="w-full rounded-md border-2 border-gray-300 bg-custom-black py-3 pl-2 pr-10 text-gray-300 outline-none focus:border-green-400"
            placeholder="Email"
          />
          {errors.email && (
            <p className="pt-1 text-sm italic text-red-500">
              <span className="font-bold">*</span> {errors.email.message}
            </p>
          )}
        </div>
        <div>
          <textarea
            {...register("message", { required: "Message is required" })}
            className="w-full rounded-md border-2 border-gray-300 bg-custom-black pb-20 pl-2 pr-10 text-gray-300 outline-none focus:border-green-400"
            placeholder="Message"
          />
          {errors.message && (
            <p className="text-sm italic text-red-500">
              <span className="font-bold">*</span> {errors.message.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="mx-auto flex w-3/4 items-center justify-center gap-2 rounded-md bg-green-400 py-3 font-medium text-custom-black hover:bg-green-500 md:w-1/2 lg:w-1/3"
        >
          Send Message{" "}
          <span>
            {<Image src={sendIcon} width={24} height={24} alt="send icon" />}
          </span>
        </button>
      </form>
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
            className="text-md mx-auto rounded-md px-2 py-3 text-center font-medium text-green-400 shadow-lg shadow-gray-300/45"
          >
            Thanks for your message, I will get back to you shortly.
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
