"use client";

import React, { useEffect, useState } from "react";
import fetchQuotes from "../../apis/QuoteApi";
import "@/app/styles/quoteStyle.css";
import Button from "@/app/components/Button";
import { motion } from "framer-motion"; // Import Framer Motion
import { useInView } from "react-intersection-observer"; // Import useInView hook

export default function IntroQuote() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger animation only once
  });

  const getQuote = async () => {
    const quotes = await fetchQuotes();
    if (quotes.length > 0) {
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      setQuote(randomQuote.q);
      setAuthor(randomQuote.a);
    } else {
      setQuote("Failed to fetch quote.");
      setAuthor("");
    }
  };

  useEffect(() => {
    getQuote();
  }, []);

  // Animation variants
  const variants = {
    hidden: { opacity: 0, x: -100 },
    show: { opacity: 1, x: 0, transition: { duration: 1.5 } },
  };

  return (
    <>
      <section className="pb-40" ref={ref}>
        <motion.div
          className="quote-container mx-auto flex w-full flex-col items-center justify-center gap-3 text-center md:w-3/4"
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={variants}
        >
          <h2 className="pb-0 text-2xl md:text-4xl">Inspiration Quote Api</h2>
          <p className="quote text-lg md:text-2xl">{quote}</p>
          <p className="italic">- {author}</p>
          <Button onClick={getQuote} variant="custom-black">
            New Quote
          </Button>
        </motion.div>
      </section>
      <hr className="mt-4 w-full border-t-2 border-green-400" />
    </>
  );
}
