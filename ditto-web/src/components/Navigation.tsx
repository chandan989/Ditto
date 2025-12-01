import { Link, useLocation } from "react-router-dom";
import { Menu, X, Dna } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: "LAB", path: "/lab" },
    { label: "REGISTRY", path: "/registry" },
    { label: "DAYCARE", path: "/daycare" },
  ];

  const handleConnect = () => {
    setIsConnected(!isConnected);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-40 card-glass-panel border-b-2 border-ditto">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Left: Logo + Text */}
            <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <div className="w-8 h-8 bg-ditto rounded-full blob-loader flex items-center justify-center">
                <Dna className="text-white w-5 h-5" />
              </div>
              <span className="font-gameboy text-ditto text-xs sm:text-sm">TRANSFORM</span>
            </Link>

            {/* Center: Nav Links (Desktop) */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-gameboy text-xs transition-colors ${
                    location.pathname === link.path
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right: Wallet Button */}
            <div className="flex items-center gap-4">
              {isConnected ? (
                <div className="bg-slime text-black px-4 py-2 rounded-lg font-mono text-xs font-bold">
                  0xAB12...34CD
                </div>
              ) : (
                <Button
                  onClick={handleConnect}
                  className="bg-ditto hover:bg-ditto/90 text-white font-gameboy text-xs px-4 py-2 glow-effect"
                >
                  LINK POKEDEX
                </Button>
              )}

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden text-white"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t-2 border-ditto bg-terminal-dark">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`font-gameboy text-xs transition-colors ${
                    location.pathname === link.path
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
      
      {/* Spacer for fixed nav */}
      <div className="h-16"></div>
    </>
  );
};

export default Navigation;
