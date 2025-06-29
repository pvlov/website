import React, { useState, useEffect, useRef } from 'react';

const Navbar: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setVisible(currentScrollY < lastScrollY.current || currentScrollY < 10);
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 bg-base z-50 transition-transform duration-300 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      } flex justify-between items-center py-4 px-4 sm:py-6 sm:px-12 border-b border-white/10 font-mono`}
    >
      <div className="text-white">~pvlov.de</div>
      <nav className="flex items-center gap-4 sm:gap-10">
        <a href="#about" className="text-white hover:text-white transition-colors">about me</a>
        <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white transition-colors">cv</a>
        <a href="#blog" className="text-white hover:text-white transition-colors">blog</a>
      </nav>
    </header>
  );
};

export default Navbar;
