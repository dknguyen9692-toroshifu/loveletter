import React from 'react';

interface TimelineItem {
  month: number;
  title: string;
  image: string;
  extraImages?: (string | { url: string; position?: string })[];
  description?: string;
  customLabel?: string;
  imagePosition?: string;
}

interface TimelineSectionProps {
  items: TimelineItem[];
}

export const TimelineSection: React.FC<TimelineSectionProps> = ({ items }) => {
  return (
    <section className="py-16 bg-paper-darker relative">
      <div className="container mx-auto px-4">
        <h2 className="font-hand text-4xl text-center mb-12 text-ink">Hành trình 5 tháng đầu đời của nhóc Tofu nhà mình</h2>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-pastelBlue/30 rounded-full hidden md:block"></div>

          <div className="space-y-16">
            {items.map((item, index) => (
              <div key={item.month} className="relative">

                {/* Month Node */}
                <div className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                  {/* Content Side */}
                  <div className="flex-1 text-center md:text-left">
                    <div className={`bg-white p-6 rounded-2xl shadow-sm border border-stone-100 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      <h3 className="font-hand text-3xl text-pastelBlue mb-2">{item.title}</h3>
                    </div>
                  </div>

                  {/* Center Node (Desktop) */}
                  <div className="relative z-10 hidden md:flex items-center justify-center w-12 h-12 bg-white border-4 border-pastelBlue rounded-full shadow-md shrink-0">
                    <span className="font-hand text-lg text-pastelBlue">{item.customLabel || item.month}</span>
                  </div>

                  {/* Image Side */}
                  <div className="flex-1">
                    <div className="relative group overflow-hidden rounded-2xl shadow-md border-4 border-white rotate-1 hover:rotate-0 transition-all duration-300 aspect-square">
                      <img
                        src={item.image}
                        alt={item.title}
                        className={`w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ${item.imagePosition || 'object-center'}`}
                      />
                    </div>
                  </div>
                </div>

                {/* Extra Images (Between months) */}
                {item.extraImages && item.extraImages.length > 0 && (
                  <div className="mt-16 relative z-10">
                    {/* Connector for extra images */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full h-16 w-0.5 bg-dashed border-l-2 border-stone-300 hidden md:block"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center max-w-4xl mx-auto">
                      {item.extraImages.map((imgItem, imgIndex) => {
                        const imgUrl = typeof imgItem === 'string' ? imgItem : imgItem.url;
                        const imgPos = typeof imgItem === 'string' ? 'object-center' : (imgItem.position || 'object-center');

                        return (
                          <div key={imgIndex} className="relative w-full aspect-square max-w-[350px] bg-white p-3 shadow-lg transform hover:scale-105 transition-all duration-300 rotate-1 hover:rotate-0 even:-rotate-1">
                            <img
                              src={imgUrl}
                              alt={`Extra memory ${imgIndex + 1}`}
                              className={`w-full h-full object-cover ${imgPos}`}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
