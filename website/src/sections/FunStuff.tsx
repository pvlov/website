import ImageTextSection from '@/components/ImageTextBlock';

const FunStuff = () => {
    const funStuffProps = [
        {  
            text: (
                <>
                    <h3 className="text-2xl font-semibold mb-2">neuroTUM</h3>
                    <p className="text-white leading-relaxed text-justify">
                        As a member of neuroTUM, I research and develop a non-invasice brain-computer interface alongside my colleagues and friends. 
                        The end goal of my team is to create an all-in-one, open-source non-invasive BCI that can be used for research and further development.
                        We recently published <a href="https://bcisociety.org/wp-content/uploads/2025/05/11th_BCI_Meeting_DOI-Abstract-Book.pdf" className="text-blue-400 hover:underline"> our first scientific contribution</a> at the 11th International BCI  Meeting in Banff, Canada!
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
                    At <a href="https://hacks.cdtm.com/" className="text-blue-400 hover:underline">CDTM HACKS 2025</a>, my team and I built <a href="https://github.com/pvlov/avi-case" className="text-blue-400 hover:underline">N/avi</a>—an AI-powered platform that turns messy medical paperwork into clean, structured data. We took first place for our solution, combining GenAI and OCR to streamline patient onboarding. 
                    Following this achievement, we were invited to demo N/avi at the opening of OpenAI’s new Munich office, presenting our work to some of the leading minds in AI. 
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
