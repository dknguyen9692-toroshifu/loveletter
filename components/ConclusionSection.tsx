import React from 'react';

export const ConclusionSection: React.FC = () => {
    return (
        <section className="py-16 bg-paper text-center">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Image 1: Top Left */}
                    <div className="flex flex-col items-center">
                        <h2 className="font-hand text-3xl md:text-4xl text-ink mb-8">First there were only two of us...</h2>
                        <div className="w-full aspect-[4/3] relative overflow-hidden rounded-2xl shadow-lg">
                            <img
                                src="https://res.cloudinary.com/dcc0zasye/image/upload/v1767149894/e2ef6f57-52c5-4e52-bbf9-68cd831a4c39_wcsxmp.jpg"
                                alt="First there were only two of us"
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                    </div>

                    {/* Image 2: Top Right */}
                    <div className="flex flex-col items-center mt-12 md:mt-0">
                        <h2 className="font-hand text-3xl md:text-4xl text-ink mb-8">Then there were three...</h2>
                        <div className="w-full aspect-[4/3] relative overflow-hidden rounded-2xl shadow-lg">
                            <img
                                src="https://res.cloudinary.com/dcc0zasye/image/upload/v1767149894/4752facc-c166-4f66-8f4e-44d07bfe9152_avn4c5.jpg"
                                alt="Then there were three"
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                    </div>

                    {/* Image 3: Bottom Left */}
                    <div className="flex flex-col items-center mt-12 md:mt-0">
                        <h2 className="font-hand text-3xl md:text-4xl text-ink mb-8">And four...</h2>
                        <div className="w-full aspect-[4/3] relative overflow-hidden rounded-2xl shadow-lg">
                            <img
                                src="https://res.cloudinary.com/dcc0zasye/image/upload/v1767149894/58a75899-a05b-40fc-b382-ae97d7044902_aqbhn4.jpg"
                                alt="And four"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Image 4: Bottom Right */}
                    <div className="flex flex-col items-center mt-12 md:mt-0">
                        <h2 className="font-hand text-3xl md:text-4xl text-ink mb-8">And suddenly there were now five :)</h2>
                        <div className="w-full aspect-[4/3] relative overflow-hidden rounded-2xl shadow-lg">
                            <img
                                src="https://res.cloudinary.com/dcc0zasye/image/upload/v1767149894/68d1ddc7-6f91-4eea-a69c-67db20d874ad_hvlfh8.jpg"
                                alt="And suddenly there were now five"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
