import React from 'react';

const testimonials = [
  {
    website: 'thepandnotary.com',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed euismod nunc, vel sollicitudin ligula.',
  },
  {
    website: 'picocheapnotarypublic.com',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla.',
  },
  {
    website: '24hourmarriagela.com',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed euismod nunc, vel sollicitudin ligula.',
  },
];

const Endorsements = () => {
  return (
    <div className="inline-block flex overflow-hidden py-[100px]">
      {/* Marquee 1 */}
      <div className="flex space-x-8 animate-marquee">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="mx-8 text-center border-r-4 border-yellow-400 pr-8 w-[550px]"  // Using w-[250px] for consistent width
          >
            <h3 className="text-primary text-left font-inter font-semibold">{item.website}</h3>
            <p className="text-text text-left break-words">{item.review}</p>
          </div>
        ))}
      </div>

      {/* Marquee 2 (duplicate to ensure continuous scroll) */}
      <div className="flex space-x-8 animate-marquee">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="mx-8 text-center border-r-4 border-yellow-400 pr-8 w-[550px]"  // Using w-[250px] for consistent width
          >
            <h3 className="text-primary text-left font-inter font-semibold">{item.website}</h3>
            <p className="text-text text-left break-words">{item.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Endorsements;