/**
 * Audio player functionality for the baby shower invitation
 */

import type { AudioPlayerState } from '../types/components';

/**
 * Sets the icon for the audio player based on playing state
 * 
 * @param icon - The icon element to update
 * @param isPlaying - Whether audio is currently playing
 */
export const setIcon = (icon: HTMLElement | null, isPlaying: boolean): void => {
  if (!icon) return;
  
  icon.innerHTML = isPlaying
    ? `<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' class='w-6 h-6 text-pink-600'><rect x='6' y='5' width='4' height='14' rx='2' fill='currentColor'/><rect x='14' y='5' width='4' height='14' rx='2' fill='currentColor'/></svg>`
    : `<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' class='w-6 h-6 text-pink-600'><polygon points='6,4 20,12 6,20' fill='currentColor'/></svg>`;
};

/**
 * Attempts to autoplay the audio element
 * 
 * @param audio - The audio element to play
 * @param icon - The icon element to update
 * @returns A promise that resolves to the current player state
 */
export const tryAutoplay = async (
  audio: HTMLAudioElement | null, 
  icon: HTMLElement | null
): Promise<AudioPlayerState> => {
  let isPlaying = false;
  
  if (!audio) return { isPlaying };
  
  try {
    await audio.play();
    isPlaying = true;
  } catch (e) {
    isPlaying = false;
  }
  
  setIcon(icon, isPlaying);
  return { isPlaying };
};

/**
 * Initializes the audio player functionality
 */
export const initAudioPlayer = (): void => {
  const audio = document.getElementById('bg-audio') as HTMLAudioElement | null;
  const btn = document.getElementById('audio-toggle');
  const icon = document.getElementById('audio-icon');
  let isPlaying = false;

  if (!audio || !btn || !icon) return;

  // Set up click handler for the toggle button
  btn.addEventListener('click', (e: Event) => {
    e.stopPropagation();
    e.preventDefault();
    
    if (audio.paused) {
      audio.play();
      isPlaying = true;
    } else {
      audio.pause();
      isPlaying = false;
    }
    
    setIcon(icon, isPlaying);
  });

  // Set up event listeners for the audio element
  audio.addEventListener('play', () => {
    isPlaying = true;
    setIcon(icon, isPlaying);
  });
  
  audio.addEventListener('pause', () => {
    isPlaying = false;
    setIcon(icon, isPlaying);
  });

  // Initialize
  setIcon(icon, isPlaying);
  tryAutoplay(audio, icon);
};
