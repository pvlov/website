const AboutMe = () => {
  return (
    <section id="about" className="py-32 px-4 bg-base text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8 border-b-2 border-white inline-block">
          About Me
        </h2>
        <div className="text-white leading-relaxed mt-6">
          <p>
            Hello again! I'm still Daniel, a Computer Science student at the Technical University of Munich (TUM).
            <br />
            <br />
            My journey so far has been defined by three core pillars: software engineering, teaching and neurotechnology. I have worked as a professional Software engineer for over a year and love to tinker on random smaller projects on the side. 
            No matter what i do, it is always the thing i fall back to when i need to relax or just want to have some fun.
            <br />
            <br />
            As for teaching, i have dedicated over one and a half years to teaching undergraduate students at the Technical University of Munich (TUM) the fundamentals of programing as well as functional programming and verification. 
            This culminated in me taking on a leadership role in the main introductory programming module at TUM, where I co-managed the course and designed exams for over 1400 students.
            <br />
            <br />
            Last, but certainly not least, I am currently working on a project at the intersection of neuroscience and software engineering as a member of neuroTUM, where we are building an open-source, non-invasive brain-computer interface. 
            Working on this project has been a challenging and incredibly rewarding experience, allowing me to collaborate with a brilliant, interdisciplinary team and push the boundaries of what I thought was even possible.
            <br />
            <br />
            You can check out some of the highlights of the (in my opinion) fun stuff i do in the section below.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
