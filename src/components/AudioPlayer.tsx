"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const userPausedRef = useRef(false);
  const removeListenersRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.25;

      const handlePlay = () => setIsPlaying(true);
      const handlePause = () => setIsPlaying(false);

      audio.addEventListener("play", handlePlay);
      audio.addEventListener("pause", handlePause);

      // Attempt autoplay on initial render (often blocked by browsers)
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {
            console.log("Autoplay blocked. Waiting for user interaction...");
          });
      }

      // Automatically play on first user interaction anywhere on the document
      const startPlayOnInteraction = (e: Event) => {
        const button = document.getElementById("global-audio-button");
        if (button && button.contains(e.target as Node)) {
          return;
        }

        if (userPausedRef.current) {
          removeInteractionListeners();
          return;
        }
        if (audio.paused) {
          audio.play()
            .then(() => {
              setIsPlaying(true);
              removeInteractionListeners();
            })
            .catch((err) => console.log("Play on interaction failed:", err));
        } else {
          removeInteractionListeners();
        }
      };

      const removeInteractionListeners = () => {
        document.removeEventListener("click", startPlayOnInteraction);
        document.removeEventListener("touchstart", startPlayOnInteraction);
        document.removeEventListener("keydown", startPlayOnInteraction);
      };

      removeListenersRef.current = removeInteractionListeners;

      document.addEventListener("click", startPlayOnInteraction);
      document.addEventListener("touchstart", startPlayOnInteraction);
      document.addEventListener("keydown", startPlayOnInteraction);

      return () => {
        audio.removeEventListener("play", handlePlay);
        audio.removeEventListener("pause", handlePause);
        removeInteractionListeners();
      };
    }
  }, []);

  const togglePlay = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Remove document interaction listeners once user interacts directly
    removeListenersRef.current?.();

    const audio = audioRef.current;
    if (audio) {
      if (audio.paused) {
        userPausedRef.current = false;
        audio.play()
          .then(() => setIsPlaying(true))
          .catch((err) => console.error("Toggle play failed:", err));
      } else {
        userPausedRef.current = true;
        audio.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="https://static.wixstatic.com/mp3/ba59cd_89ff732525c24604b54350bc189cbe79.mp3"
        loop
        autoPlay
      />
      <motion.div
        className="fixed right-6 bottom-6 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.button
          id="global-audio-button"
          onClick={togglePlay}
          className="relative w-12 h-12 rounded-full bg-neutral-900 border-2 border-primary text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer shadow-lg shadow-primary/20"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label={isPlaying ? "Pause music" : "Play music"}
          type="button"
        >
          {isPlaying ? (
            <Pause className="w-5 h-5" />
          ) : (
            <Play className="w-5 h-5 ml-0.5" />
          )}
        </motion.button>

        {isPlaying && (
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-primary opacity-50 pointer-events-none"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        )}
      </motion.div>
    </>
  );
}
