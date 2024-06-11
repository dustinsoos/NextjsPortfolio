import Contact from './sections/Contact/Contact';
import Experience from './sections/Experience/Experience';
import Introduction from './sections/Introduction/Introduction';
import MyProjects from './sections/MyProjects/MyProjects';
import TechSkills from './sections/TechSkills/TechSkills';

export default function Home() {
  return (
    <main>
      <Introduction />
      <Experience />
      <MyProjects />
      <TechSkills />
      <Contact />
    </main>
  );
}
