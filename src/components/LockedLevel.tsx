import { Lock, Star } from 'lucide-react';

export function LockedLevel() {
  return (
    <div className="relative bg-gray-800 pixel-border p-6 md:p-8 shadow-pixel mx-auto max-w-2xl opacity-90">
      {/* Lock overlay effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-gray-700/50 pixel-border pointer-events-none" />
      
      <div className="relative z-10">
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-3 bg-gray-700 px-6 py-3 pixel-border mb-4">
            <Lock className="w-6 h-6 text-yellow-400 animate-pulse" aria-hidden="true" />
            <span className="pixel-text-small text-yellow-400">BLOQUEADO</span>
            <Lock className="w-6 h-6 text-yellow-400 animate-pulse" aria-hidden="true" />
          </div>
          
          <h2 className="pixel-text-medium text-gray-400 mb-2">
            NIVEL 2
          </h2>
          <p className="pixel-text-small text-gray-500">
            ¡Baby Shower!
          </p>
        </div>

        {/* Locked content preview */}
        <div className="space-y-4 filter blur-sm select-none pointer-events-none" aria-hidden="true">
          <div className="bg-gray-700 p-4 pixel-border-thin">
            <div className="h-4 bg-gray-600 w-3/4 mb-2" />
            <div className="h-4 bg-gray-600 w-1/2" />
          </div>
          <div className="bg-gray-700 p-4 pixel-border-thin">
            <div className="h-4 bg-gray-600 w-2/3 mb-2" />
            <div className="h-4 bg-gray-600 w-1/3" />
          </div>
        </div>

        {/* Coming soon message */}
        <div className="text-center mt-6 pt-6 border-t-4 border-dashed border-gray-600">
          <div className="inline-flex items-center gap-2 text-yellow-400 pixel-text-small animate-pulse">
            <Star className="w-4 h-4" aria-hidden="true" />
            <span>MUY PRONTO</span>
            <Star className="w-4 h-4" aria-hidden="true" />
          </div>
          <p className="mt-2 text-gray-500 text-sm">
            ¡Completa el nivel anterior para desbloquear este contenido!
          </p>
        </div>

        {/* Progress bar */}
        <div className="mt-6">
          <div className="bg-gray-700 h-6 pixel-border-thin overflow-hidden">
            <div className="bg-gradient-to-r from-pink-500 to-blue-500 h-full w-0 pixel-progress" />
          </div>
          <p className="text-center text-gray-500 pixel-text-small mt-2">
            Progreso: 0%
          </p>
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-2 left-2 w-4 h-4 border-t-4 border-l-4 border-yellow-400 opacity-50" />
      <div className="absolute top-2 right-2 w-4 h-4 border-t-4 border-r-4 border-yellow-400 opacity-50" />
      <div className="absolute bottom-2 left-2 w-4 h-4 border-b-4 border-l-4 border-yellow-400 opacity-50" />
      <div className="absolute bottom-2 right-2 w-4 h-4 border-b-4 border-r-4 border-yellow-400 opacity-50" />
    </div>
  );
}
