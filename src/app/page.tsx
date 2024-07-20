import { Badge, Box } from '@chakra-ui/react';
import IntroQuote from './components/Quote/IntroQuote';
import Contact from './sections/Contact/Contact';
import Experience from './sections/Experience/Experience';
import Introduction from './sections/Introduction/Introduction';
import MyProjects from './sections/MyProjects/MyProjects';
import TechSkills from './sections/TechSkills/TechSkills';

export default function Home() {
  return (
    <main>
      <Introduction />
      <IntroQuote />
      <Experience />
      <MyProjects />
      <TechSkills />
      <Contact />
      <Box
        position='fixed'
        bottom='20'
        right='20'
        className='p-4 bg-green-400 text-black rounded-lg font-bold'
      >
        In Development
      </Box>
    </main>
  );
}
