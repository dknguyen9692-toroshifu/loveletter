import React, { useRef, useState, useEffect } from 'react';

interface MusicPlayerProps {
    url: string;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ url }) => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    
    // Track if we should keep trying to auto-play. 
    // Once the user interacts manually, we stop trying to auto-play.
    const shouldAutoPlay = useRef(true);

    useEffect(() => {
        if (!url) return;
        
        // Create audio instance
        const audio = new Audio(url);
        audio.loop = true;
        audio.volume = 0.5;
        audio.preload = 'auto'; 
        audioRef.current = audio;

        const opts = { passive: true, capture: true };

        // Function to attempt playback
        const attemptPlay = async () => {
            // Stop if audio isn't ready or if auto-play is disabled by user interaction
            if (!audioRef.current || !shouldAutoPlay.current) return;
            
            // If already playing, just ensure state is correct and stop trying
            if (!audioRef.current.paused) {
                setIsPlaying(true);
                shouldAutoPlay.current = false;
                cleanupListeners();
                return;
            }

            try {
                await audioRef.current.play();
                setIsPlaying(true);
                // If successful, we don't need to keep trying
                shouldAutoPlay.current = false;
                cleanupListeners();
            } catch (error) {
                // Autoplay was prevented. We keep the listeners active for the next interaction.
            }
        };

        const cleanupListeners = () => {
            window.removeEventListener('click', attemptPlay, opts);
            window.removeEventListener('keydown', attemptPlay, opts);
            window.removeEventListener('touchstart', attemptPlay, opts);
            window.removeEventListener('touchmove', attemptPlay, opts);
            window.removeEventListener('scroll', attemptPlay, opts);
            window.removeEventListener('wheel', attemptPlay, opts);
            window.removeEventListener('pointerdown', attemptPlay, opts);
            window.removeEventListener('mousedown', attemptPlay, opts);
        };

        // Add global listeners to catch the first user interaction
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
        
        // Disable future auto-play attempts since user is taking manual control
        shouldAutoPlay.current = false;

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
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 pl-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                </svg>
             )}
        </button>
    );
};