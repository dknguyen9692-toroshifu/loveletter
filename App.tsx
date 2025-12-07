
import React from 'react';
import { Background3D } from './components/Background3D';
import { LetterSection } from './components/LetterSection';
import { MusicPlayer } from './components/MusicPlayer';
import { PERMANENT_LETTER, BACKGROUND_MUSIC_URL } from './constants';

const App: React.FC = () => {
  const letterData = PERMANENT_LETTER;

  return (
    <div className="relative min-h-screen bg-paper text-ink font-body selection:bg-pastelBlue selection:text-white">
      
      {/* 3D Background */}
      <Background3D />

      {/* Background Music Player */}
      <MusicPlayer url={BACKGROUND_MUSIC_URL} />

      {/* Main Content */}
      <main className="relative z-10 w-full">
        
        {/* Header / Title Section */}
        <header className="min-h-[60vh] flex flex-col items-center justify-center p-8 text-center">
            <h1 className="font-hand text-5xl md:text-7xl mb-6 text-ink drop-shadow-sm">
                {letterData.title}
            </h1>
            <p className="font-hand text-xl text-stone-500 animate-bounce mt-10">
                Click một cái để vừa scroll vừa nghe nhạc nha :)
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
            <p>Mãi yêu em và các con,</p>
            <p className="text-2xl mt-2">Ba Khiêm</p>
        </footer>

      </main>

    </div>
  );
};

export default App;