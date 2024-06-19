'use client';

import React, { useEffect, useState } from 'react';
import fetchQuotes from '../../apis/QuoteApi';
import '@/app/styles/quoteStyle.css';
import Button from '@/app/components/Button';
import { motion } from 'framer-motion'; // Import Framer Motion
import { useInView } from 'react-intersection-observer'; // Import useInView hook

export default function IntroQuote() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger animation only once
  });

  const getQuote = async () => {
    const quotes = await fetchQuotes();
    console.log(quotes);
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote.text);
    // Check if the author's name contains ", type.fit" and remove it
    const cleanedAuthor = randomQuote.author.replace(', type.fit', '');
    setAuthor(cleanedAuthor);
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
      <section className='pb-40' ref={ref}>
        <motion.div
          className='w-full md:w-3/4 quote-container flex flex-col justify-center items-center text-center gap-3 mx-auto'
          initial='hidden'
          animate={inView ? 'show' : 'hidden'}
          variants={variants}
        >
          <h2 className='text-2xl pb-0 md:text-4xl'>Inspiration Quote Api</h2>
          <p className='text-lg quote md:text-2xl '>{quote}</p>
          <p className=' italic'>- {author}</p>
          <Button onClick={getQuote} variant='custom-black'>
            New Quote
          </Button>
        </motion.div>
      </section>
      <hr className='border-t-2 border-green-400 w-full mt-4' />
    </>
  );
}
