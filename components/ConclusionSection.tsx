import React from 'react';

export const ConclusionSection: React.FC = () => {
    return (
        <section className="py-16 bg-paper text-center">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col items-center md:h-full">
                        <h2 className="font-hand text-3xl md:text-4xl text-ink mb-8">First there were only two of us...</h2>
                        <div className="w-full relative overflow-hidden rounded-2xl shadow-lg aspect-[3/4] md:aspect-auto md:flex-1">
                            <img
                                src="https://res.cloudinary.com/dcc0zasye/image/upload/v1767064887/fec1e2ae-8fd6-4a7c-9c95-bd126771d165_v1gnbl.jpg"
                                alt="First there were only two of us"
                                className="w-full h-full object-cover md:absolute md:inset-0"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col items-center mt-12 md:mt-0 md:h-full">
                        <h2 className="font-hand text-3xl md:text-4xl text-ink mb-8">And suddenly there were now five :)</h2>
                        <div className="w-full relative overflow-hidden rounded-2xl shadow-lg">
                            <img
                                src="https://res.cloudinary.com/dcc0zasye/image/upload/v1767064886/eb822aae-9211-4cc1-a0c0-2d51f665952d_hdnygo.jpg"
                                alt="And suddenly there were now five"
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
