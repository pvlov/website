import ImageTextSection from '@/components/ImageTextBlock';
import Link from '@/components/Link';

interface FunStuffProps {
    text: React.ReactNode;
    images: string[];
}

const FunStuff = () => {
    const funStuffProps: FunStuffProps[] = [
        {  
            text: (
                <>
                    <h3 className="text-2xl font-semibold mb-2">neuroTUM</h3>
                    <p className="text-white leading-relaxed text-justify">
                        As a member of <Link href="https://neurotum.com">neuroTUM</Link>, I research and develop a non-invasice brain-computer interface alongside my colleagues and friends. 
                        The end goal of my team is to create an all-in-one, open-source non-invasive BCI that can be used for research and further development.
                        We recently published <Link href="https://bcisociety.org/wp-content/uploads/2025/05/11th_BCI_Meeting_DOI-Abstract-Book.pdf">our first scientific contribution</Link> at the 11th International BCI  Meeting in Banff, Canada!
                        Working on this project has been a challenging and incredibly rewarding experience, allowing me to collaborate with a brilliant, interdisciplinary team and push the boundaries of what I thought was even possible.
                        <br />
                        As a board member, I also manage a cohort of student initiatives spezializing in neurotechnology, brain-inspired computing, robotics, electronics and machine learning. As of today, these include
                        neuroTUM, OpenHardware and Biomatrix. 
                    </p>
                </>
            ),
            images: [
                "/images/neurotum/big_group_pic.jpg",
                "/images/neurotum/huddle.jpg",
                "/images/neurotum/poster.jpg",
                "/images/neurotum/experiment.jpg"
            ]
        },
        {
            text: (
             <>
                <h3 className="text-2xl font-semibold mb-2">CDTM Hacks 2025</h3>
                <p className="text-white leading-relaxed text-justify">
                    At <Link href="https://hacks.cdtm.com/">CDTM HACKS 2025</Link>, my team and I built <Link href="https://github.com/pvlov/avi-case">N/avi</Link>—an AI-powered platform that turns messy medical paperwork into clean, structured data. We took the overall first place for our solution, combining GenAI and OCR to streamline patient onboarding. 
                    Following this achievement, we were invited to demo N/avi at the celebration of the opening of OpenAI’s new Munich office, presenting our work to some of the leading minds in AI. 
                    We are now continuing to develop the project, pushing forward on our mission to simplify healthcare through smart, user-friendly tech.
                </p>
            </> 
            ),
            images: [
                '/images/cdtm-hacks/hackathon-celebration.jpg',
                '/images/cdtm-hacks/openai_opening_group_pic.jpg',
                '/images/cdtm-hacks/openai_opening_booth.jpg',
                '/images/cdtm-hacks/openai_opening_banner.jpg',
            ], 
        },
        {
          text: (
            <>
              <h3 className="text-2xl font-semibold mb-2">Teaching @ TUM</h3>
              <p className="text-white leading-relaxed text-justify">
                  For me teaching has always been a essential since i believe that paying it forward by helping others learn and grow is one of the most rewarding things you can do
                  Due to this, I have dedicated over one and a half years to teaching undergraduate students at the <Link href="https://tum.de">Technical University of Munich (TUM)</Link>.
                  Over two winter semesters, I helped teach first-year students the fundamentals of computer science and programming. I guided them through basic coding and problem-solving (fun fact: penguins are the mascot of the course!). In the winter semester of 2024/2025, I helped manage the course by designing lecture materials, briefing tutors, and creating exercises for more than 1,400 students. 
                  During that time, I also wrote a seminar paper on competency-based education.
                  In the summer semesters, I helped teach functional programming and verification where i helped students unlearn the imperative programming paradigms that I taught them in the winter semester ;)
              </p>
            </>
          ),
          images: [
            "/images/teaching/mi.jpg",
            "/images/teaching/seminar.jpg",
            "/images/teaching/artemis.jpg",
            "/images/teaching/city_campus.jpg",
          ]
        }
    ]

  return (
    <section id="fun-stuff" className="py-16 px-4 bg-base text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8 border-b-2 border-white inline-block">
          Fun Stuff
        </h2>
        {funStuffProps.map((props, index) => (
          <div key={index} className="mb-16">
            <ImageTextSection
              text={props.text}
              images={props.images}
              textPosition={(index % 2) === 0 ? 'left' : 'right'}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FunStuff;
