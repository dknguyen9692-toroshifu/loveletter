
import React from 'react';
import { Background3D } from './components/Background3D';
import { LetterSection } from './components/LetterSection';
import { PERMANENT_LETTER } from './constants';

const App: React.FC = () => {
  const letterData = PERMANENT_LETTER;

  return (
    <div className="relative min-h-screen bg-paper text-ink font-body selection:bg-pastelBlue selection:text-white">
      
      {/* 3D Background */}
      <Background3D />

      {/* Main Content */}
      <main className="relative z-10 w-full">
        
        {/* Header / Title Section */}
        <header className="min-h-[60vh] flex flex-col items-center justify-center p-8 text-center">
            <h1 className="font-hand text-5xl md:text-7xl mb-6 text-ink drop-shadow-sm">
                {letterData.title}
            </h1>
            <p className="font-hand text-xl text-stone-500 animate-bounce mt-10">
                Scroll gently &darr;
            </p>
        </header>

        {/* Letter Sections */}
        <div className="container mx-auto pb-32">
            {letterData.parts.map((part, index) => (
                <LetterSection 
                    key={part.id} 
                    text={part.text} 
                    imageUrl={part.imageUrl}
                    index={index}
                />
            ))}
        </div>

        {/* Footer */}
        <footer className="text-center py-12 font-hand text-stone-400">
            <p>With eternal love,</p>
            <p className="text-2xl mt-2">Dad</p>
        </footer>

      </main>

      {/* Floating Audio/Music Control (Visual Only for now) */}
      <div className="fixed bottom-6 right-6 z-20">
        <button className="bg-white/80 backdrop-blur-md p-3 rounded-full shadow-md hover:scale-110 transition-transform text-stone-600">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-2.263-2.67M9.636 10.076a4.72 4.72 0 014.288 3.528M9.75 6.621a6.62 6.62 0 016.326 5.85m-8.528-9.83v2.338l-4.225 3.52a.75.75 0 00-.275.587v3.525c0 .248.118.484.32.64l4.18 3.135V21.75a.75.75 0 001.5 0V2.75a.75.75 0 00-1.5 0z" />
            </svg>
        </button>
      </div>

    </div>
  );
};

export default App;