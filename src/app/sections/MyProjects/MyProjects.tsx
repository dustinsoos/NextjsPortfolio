'use client';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

import { motion, useAnimation } from 'framer-motion';
import { Card, CardBody, Heading, Stack, Text } from '@chakra-ui/react';
import { SiGithub } from '@icons-pack/react-simple-icons';
import { useInView } from 'react-intersection-observer';

import linkIcon from '../../../../public/images/link_icon.svg';
import Portfolio from '../../../../public/images/portfolio.png';
import faAssets from '../../../../public/images/fa_assets.png';

export default function MyProjects() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, scale: 1 });
    } else {
      controls.start({ opacity: 0, scale: 0.8 });
    }
  }, [controls, inView]);

  return (
    <>
      <section
        id='MyProjects'
        className='flex  flex-col justify-center md:justify-start md:items-start min-h-screen pb-40'
      >
        <h2>Projects</h2>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={controls}
          transition={{ duration: 1.5 }}
          className='flex flex-col md:flex-row gap-8 '
        >
          <Card className='flex flex-col gap-4 shadow-lg shadow-green-400/30 w-4/5 mx-auto md:mx-0 md:w-1/2  rounded-lg '>
            <CardBody>
              <Image
                src={Portfolio}
                width={520}
                height={400}
                alt='project-img'
                className='rounded-t-lg'
              />
              <Stack spacing='6' className='text-gray-300 p-4'>
                <div className='flex gap-2 items-center'>
                  <h3>My Portfolio</h3>
                  <Link href='https://dustinmsoos.com/' target='_blank'>
                    <Image
                      src={linkIcon}
                      width={24}
                      height={24}
                      alt='send icon'
                    />
                  </Link>
                  <Link
                    href='https://github.com/dustinsoos/NextjsPortfolio'
                    target='_blank'
                  >
                    <SiGithub
                      className='text-green-400'
                      width={24}
                      height={24}
                    />
                  </Link>
                </div>
                <h4 className='pb-4'>
                  React | Tailwind CSS | NextJS | Framer-Motion | ChakraUI |
                  Resend & React Email
                </h4>
                <Text>
                  My Portfolio was created to showcase my work and projects.
                  It&#39;s a place where you can find all the information about
                  me and my work.
                </Text>
              </Stack>
            </CardBody>
          </Card>
          <Card className='flex flex-col gap-4 shadow-lg shadow-green-400/30 w-4/5 mx-auto md:mx-0 md:w-1/2  rounded-lg '>
            <CardBody>
              <Image
                src={faAssets}
                width={520}
                height={400}
                alt='project-img'
                className='rounded-t-lg'
              />
              <Stack className='text-gray-300 p-4'>
                <div className='flex gap-2 items-center'>
                  <h3>Frontend Assets</h3>
                  <Link
                    href='https://frontend-assets.vercel.app/'
                    target='_blank'
                  >
                    <Image
                      src={linkIcon}
                      width={24}
                      height={24}
                      alt='send icon'
                    />
                  </Link>
                  <Link
                    href='https://github.com/dustinsoos/frontend-assets'
                    target='_blank'
                  >
                    <SiGithub
                      className='text-green-400'
                      width={24}
                      height={24}
                    />
                  </Link>
                </div>
                <h4 className='pb-4'>React | Tailwind CSS | NextJS</h4>
                <Text>
                  Frontend Assets was created to help developers find the
                  perfect resources for their projects.
                </Text>
              </Stack>
            </CardBody>
          </Card>
        </motion.div>
      </section>
      <hr className='border-t-2 border-green-400 mt-4' />
    </>
  );
}
