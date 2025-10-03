const HeroSection = () => {
  return (
    <section className="bg-base text-white font-mono flex flex-col min-h-screen">
      <main className="flex-grow flex justify-center items-center px-4">
        <div className="max-w-xl w-full text-center">
          <h1 className="font-bold font-heading text-5xl text-white mb-6 tracking-wider">
            Hi, I'm Daniel 🐧
          </h1>
          <p className="text-bone text-lg leading-relaxed mb-6">
            I'm a computer science student at the Technical University of Munich.
          </p>
          <div className="grid grid-cols-3 place-items-center gap-2">
            <a href="https://linkedin.com/in/pvlov" target="_blank" rel="noopener noreferrer" className="text-white transition-colors">
              linkedin
            </a>
            <a href="https://github.com/pvlov" target="_blank" rel="noopener noreferrer" className="text-white transition-colors">
              github
            </a>
            <a href="mailto:daniel.pavlov@gmx.de" className="text-white transition-colors">
              email
            </a>
          </div>
          <p className="mt-8 text-sm text-bone opacity-75">Scroll down for more fun stuff ↓</p>
        </div>
      </main>
    </section>
  );
};

export default HeroSection;