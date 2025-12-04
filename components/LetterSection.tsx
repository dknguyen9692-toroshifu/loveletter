import React, { useRef, useEffect, useState } from 'react';

interface LetterSectionProps {
  text: string;
  imageUrl: string;
  index: number;
}

export const LetterSection: React.FC<LetterSectionProps> = ({ text, imageUrl, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -100px 0px" 
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const isEven = index % 2 === 0;

  return (
    <div 
      ref={sectionRef}
      className={`min-h-[80vh] flex items-center justify-center p-6 transition-all duration-1000 ease-out transform
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}
      `}
    >
      <div className={`flex flex-col md:flex-row items-center max-w-5xl w-full gap-8 md:gap-16 ${isEven ? '' : 'md:flex-row-reverse'}`}>
        
        {/* Illustration Card */}
        <div className="w-full md:w-1/2 flex justify-center">
            <div className="bg-white p-3 shadow-lg rotate-1 rounded-sm max-w-md w-full relative group hover:rotate-0 transition-transform duration-500">
                {/* Tape effect */}
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-24 h-8 bg-yellow-100/50 rotate-[-2deg] shadow-sm backdrop-blur-sm z-10"></div>
                
                <div className="relative aspect-[4/3] overflow-hidden bg-stone-100 border-2 border-stone-200">
                     <img 
                        src={imageUrl} 
                        alt="Illustration" 
                        className="w-full h-full object-cover transition-all duration-700 grayscale-0 opacity-100"
                    />
                    <div className="absolute inset-0 border-4 border-white/50 pointer-events-none"></div>
                </div>
            </div>
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
            <p className="font-hand text-2xl md:text-3xl lg:text-4xl leading-relaxed text-ink drop-shadow-sm">
                {text}
            </p>
        </div>

      </div>
    </div>
  );
};