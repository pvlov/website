const HeroSection = () => {
  return (
    <section className="bg-base text-white font-mono flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 bg-base z-10 flex justify-between items-center py-4 px-4 sm:py-6 sm:px-12 border-b border-white/10">
        <div className="text-white">~pvlov.de</div>
        <nav className="flex items-center gap-4 sm:gap-10">
          <a href="#about" className="text-white hover:text-white transition-colors">about me</a>
          <a href="#cv" className="text-white hover:text-white transition-colors">cv</a>
          <a href="#blog" className="text-white hover:text-white transition-colors">blog</a>
          {/* TODO: Implement theme toggle
          <button className="bg-none border-none text-dark-text hover:text-white transition-colors" aria-label="Toggle theme">
            <Sun size={20} />
          </button>
            */}
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex justify-center items-center px-4">
        <div className="max-w-xl w-full text-center">
          <h1 className="font-bold font-heading text-5xl text-white mb-6 tracking-wider">
            Hi, I'm Daniel 🐧
          </h1>
          <p className="text-bone text-lg leading-relaxed mb-6">
            I am a computer science student at the Technical University of Munich.
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
        </div>
      </main>
    </section>
  );
};

export default HeroSection;