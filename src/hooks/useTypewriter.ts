import { useEffect, useState } from 'react';

interface UseTypewriterOptions {
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseMs?: number;
}

/**
 * Types each phrase character-by-character, pauses, deletes it, then moves
 * to the next phrase — looping forever. Pass a stable (module-level) array.
 */
export function useTypewriter(phrases: readonly string[], options: UseTypewriterOptions = {}) {
  const { typingSpeed = 90, deletingSpeed = 45, pauseMs = 1600 } = options;
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (phrases.length === 0) return;
    const phrase = phrases[index % phrases.length];

    let timer: ReturnType<typeof setTimeout> | undefined;

    if (!deleting) {
      if (text === phrase) {
        timer = setTimeout(() => setDeleting(true), pauseMs);
      } else {
        timer = setTimeout(() => setText(phrase.slice(0, text.length + 1)), typingSpeed);
      }
    } else {
      if (text.length === 0) {
        setDeleting(false);
        setIndex((i) => (i + 1) % phrases.length);
      } else {
        timer = setTimeout(() => setText(phrase.slice(0, text.length - 1)), deletingSpeed);
      }
    }

    return () => {
      if (timer !== undefined) clearTimeout(timer);
    };
  }, [text, deleting, index, phrases, typingSpeed, deletingSpeed, pauseMs]);

  return text;
}
