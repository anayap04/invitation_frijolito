import { Gamepad2 } from 'lucide-react';

export function VoteButton() {
  return (
    <div className="text-center">
      <a
        href="https://anayap.tech/reveal/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 to-blue-500 text-white px-8 py-4 pixel-border hover:from-pink-600 hover:to-blue-600 transition-all transform hover:scale-105 active:scale-95 shadow-pixel-lg group"
        aria-label="Vote for gender prediction"
      >
        <Gamepad2 className="w-6 h-6 animate-pulse" aria-hidden="true" />
        <span className="pixel-text-small">
          ¡VOTA!
        </span>
        <div className="flex gap-1">
          <span className="text-pink-200 group-hover:text-white transition-colors">▶</span>
          <span className="text-blue-200 group-hover:text-white transition-colors">▶</span>
        </div>
      </a>
      <p className="mt-3 text-purple-700 pixel-text-small">
        ¿Niño o Niña? ¡Haz tu predicción!
      </p>
    </div>
  );
}
