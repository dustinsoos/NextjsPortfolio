import { useEffect } from 'react';

export default function useRemoveUrlHash() {
  useEffect(() => {
    const sections = [
      '#Introduction',
      '#Experience',
      '#MyProjects',
      '#TechSkills',
      '#Contact',
    ];

    if (sections.includes(window.location.hash)) {
      window.history.replaceState(null, '', window.location.pathname);
    }
  }, []);
}
