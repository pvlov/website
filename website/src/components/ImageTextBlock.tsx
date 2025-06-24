import React from 'react';

interface ImageTextBlockProps {
  /** Content text to display */
  text: React.ReactNode;
  /** Array of image URLs */
  images: string[];
  /** Position of text: 'left' or 'right' */
  textPosition?: 'left' | 'right';
  /** Optional alt texts for images */
  alts?: string[];
}

const ImageTextBlock: React.FC<ImageTextBlockProps> = ({
  text,
  images,
  textPosition = 'left',
  alts = []
}) => {
  const isTextLeft = textPosition === 'left';
  return (
    <section className="py-8">
      <div
        className={`flex flex-col md:flex-row items-center max-w-4xl mx-auto gap-y-6 md:gap-4 ${
          isTextLeft ? 'md:flex-row' : 'md:flex-row-reverse'
        }`}
      >
        {/* Text Container */}
        <div className="w-full md:w-1/2 text-base leading-relaxed text-white">
          {text}
        </div>

        {/* Vertical Separator (hidden on mobile) */}
        <div className="hidden md:block border-l-2 border-white h-96 mx-6" />

        {/* Images Grid */}
        <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {images.slice(0, 4).map((src, idx) => (
            <div key={idx} className="relative w-full aspect-square rounded overflow-hidden">
              <img
                src={src}
                alt={alts[idx] || `image-${idx}`}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageTextBlock;