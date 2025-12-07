import React, { useRef, useState, useEffect } from 'react';

interface MusicPlayerProps {
    url: string;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ url }) => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const isAttemptingPlay = useRef(false);

    useEffect(() => {
        if (!url) return;
        
        // Create audio instance
        const audio = new Audio(url);
        audio.loop = true;
        audio.volume = 0.5;
        audio.preload = 'auto'; 
        audioRef.current = audio;

        // Function to attempt playback
        const attemptPlay = async () => {
            if (!audioRef.current || isPlaying || isAttemptingPlay.current) return;
            
            isAttemptingPlay.current = true;
            
            try {
                await audioRef.current.play();
                setIsPlaying(true);
                cleanupListeners();
            } catch (error) {
                // Autoplay was likely prevented. 
                // We swallow the error and keep listeners active for the next interaction.
            } finally {
                isAttemptingPlay.current = false;
            }
        };

        const cleanupListeners = () => {
            window.removeEventListener('click', attemptPlay);
            window.removeEventListener('keydown', attemptPlay);
            window.removeEventListener('touchstart', attemptPlay);
            window.removeEventListener('touchmove', attemptPlay);
            window.removeEventListener('scroll', attemptPlay);
            window.removeEventListener('wheel', attemptPlay);
            window.removeEventListener('pointerdown', attemptPlay);
            window.removeEventListener('mousedown', attemptPlay);
        };

        // Add global listeners to catch the first user interaction
        const opts = { passive: true, capture: true };
        window.addEventListener('click', attemptPlay, opts);
        window.addEventListener('keydown', attemptPlay, opts);
        window.addEventListener('touchstart', attemptPlay, opts);
        window.addEventListener('touchmove', attemptPlay, opts);
        window.addEventListener('scroll', attemptPlay, opts);
        window.addEventListener('wheel', attemptPlay, opts);
        window.addEventListener('pointerdown', attemptPlay, opts);
        window.addEventListener('mousedown', attemptPlay, opts);

        // Try to play immediately on mount
        attemptPlay();

        return () => {
            cleanupListeners();
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
        };
    }, [url]);

    const togglePlay = (e: React.MouseEvent) => {
        e.stopPropagation(); 

        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            audioRef.current.play().then(() => {
                setIsPlaying(true);
            }).catch(error => {
                console.error("Audio playback failed.", error);
            });
        }
    };

    if (!url) return null;

    return (
        <button 
            onClick={togglePlay}
            className={`fixed bottom-6 right-6 z-50 w-12 h-12 flex items-center justify-center rounded-full shadow-lg transition-all duration-500 ease-out group
                ${isPlaying 
                    ? 'bg-pastelGreen/90 text-ink scale-105 shadow-pastelGreen/30' 
                    : 'bg-white/90 text-stone-400 hover:bg-white hover:scale-105 animate-pulse'
                }
            `}
            title={isPlaying ? "Pause Music" : "Play Music"}
            aria-label={isPlaying ? "Pause background music" : "Play background music"}
        >
             {isPlaying ? (
                // Pause Icon
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
                </svg>
             ) : (
                // Play Icon
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 ml-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                </svg>
             )}
             
             {/* Musical Note Particles Animation (only when playing) */}
             {isPlaying && (
                 <>
                    <span className="absolute -top-2 right-0 text-xs text-pastelGreen animate-[ping_2s_ease-in-out_infinite] opacity-75">♪</span>
                    <span className="absolute top-0 -left-2 text-xs text-pastelGreen animate-[bounce_3s_infinite] delay-100 opacity-60">♫</span>
                 </>
             )}
        </button>
    );
};