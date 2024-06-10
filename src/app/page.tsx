import Contact from './sections/Contact/Contact';
import Introduction from './sections/Introduction/Introduction';
import MyProjects from './sections/MyProjects/MyProjects';
import TechSkills from './sections/TechSkills/TechSkills';

export default function Home() {
  return (
    <main>
      <Introduction />
      <MyProjects />
      <TechSkills />
      <Contact />
    </main>
  );
}
