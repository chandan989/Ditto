import React from 'react';
import { Dna, Backpack } from 'lucide-react';

const Navigation: React.FC = () => {
  return (
    <nav className="fixed w-full z-40 top-0 left-0 border-b-2 border-ditto bg-terminal/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-ditto rounded-full blob-loader flex items-center justify-center">
              <Dna className="text-white w-5 h-5" />
            </div>
            <span className="font-gameboy text-ditto text-lg tracking-tight">TRANSFORM</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#lab" className="text-shiny hover:text-white px-3 py-2 rounded-md text-sm font-bold uppercase transition">Lab</a>
              <a href="#daycare" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-bold uppercase transition">Day Care</a>
              <a href="#docs" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-bold uppercase transition">Docs</a>
            </div>
          </div>
          <div>
            <button className="bg-ditto hover:bg-opacity-80 text-white font-gameboy text-xs px-4 py-3 rounded-lg border-b-4 border-purple-900 active:border-b-0 active:translate-y-1 transition-all flex items-center gap-2">
              <Backpack className="w-4 h-4" />
              LINK POKEDEX
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;