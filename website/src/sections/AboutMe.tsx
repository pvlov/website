import Link from '@/components/Link';

const AboutMe = () => {
  return (
    <section id="about" className="py-32 px-4 bg-base text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8 border-b-2 border-white inline-block">
          About Me
        </h2>
        <div className="text-white leading-relaxed mt-6">
          <p>
            Hello again! I'm still Daniel, a Computer Science student at the Technical University of Munich (TUM). You can usually find me all over the place doing a lot of different things I enjoy.
            <br />
            <br />
            You can check out some of the highlights of the (in my opinion) fun stuff i do in the section below. Of course I also do a lot of other fun things (like at work), but those details are harder to share in a public setting :').
            For a more detailed overview of my professional background you can check out my <a href="/cv.pdf" className="text-blue-400 hover:underline">CV</a>. I'll try to keep everything up to date, but the best way to get the latest version is to just send me an <Link href="mailto:daniel.pavlov@gmx.de">e-mail</Link>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
