import { useState } from 'react';
import { InvitationCard } from './components/InvitationCard';
import { LockedLevel } from './components/LockedLevel';
import { VoteButton } from './components/VoteButton';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-200 via-purple-200 to-blue-200 relative overflow-hidden">
      {/* Pixel clouds decoration */}
      <div className="absolute top-10 left-10 w-16 h-10 pixel-cloud opacity-70" />
      <div className="absolute top-32 right-20 w-20 h-12 pixel-cloud opacity-60" />
      <div className="absolute bottom-40 left-1/4 w-16 h-10 pixel-cloud opacity-50" />
      
      <div className="container mx-auto px-4 py-8 md:py-12 relative z-10">
        <header className="text-center mb-8 md:mb-12">
          <h1 className="pixel-text text-pink-600 mb-2 animate-pulse">
            Cargando nuevo Jugador
          </h1>
          <div className="flex justify-center items-center gap-4 mt-4">
            <div className="w-8 h-8 bg-pink-500 pixel-box animate-bounce" style={{ animationDelay: '0s' }} />
            <div className="w-8 h-8 bg-blue-500 pixel-box animate-bounce" style={{ animationDelay: '0.2s' }} />
            <div className="w-8 h-8 bg-pink-500 pixel-box animate-bounce" style={{ animationDelay: '0.4s' }} />
          </div>
        </header>

        <main className="max-w-4xl mx-auto space-y-8">
          <InvitationCard />
          
          <div className="flex justify-center">
            <VoteButton />
          </div>

          <LockedLevel />
        </main>
      </div>
    </div>
  );
}
