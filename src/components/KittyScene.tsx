import { useState, useEffect } from "react";
import { PlayfulButtons } from "@/components/PlayfulButtons";

interface KittySceneProps {
  onNext: () => void;
}

export const KittyScene = ({ onNext }: KittySceneProps) => {
  const [kittyPosition, setKittyPosition] = useState(-300);
  const [showBubble, setShowBubble] = useState(false);
  const [legAnimation, setLegAnimation] = useState(0);

  useEffect(() => {
    // Kitty walks from left to center
    const walkInterval = setInterval(() => {
      setKittyPosition((prev) => {
        if (prev >= 0) {
          clearInterval(walkInterval);
          setTimeout(() => setShowBubble(true), 500);
          return 0;
        }
        return prev + 8;
      });
      
      // Animate legs
      setLegAnimation((prev) => (prev + 1) % 4);
    }, 20);

    return () => clearInterval(walkInterval);
  }, []);

  // Calculate leg positions for walking animation
  const leftLegRotation = legAnimation % 2 === 0 ? -20 : 20;
  const rightLegRotation = legAnimation % 2 === 0 ? 20 : -20;

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      {/* Kitty walking */}
      <div 
        className="transition-all duration-100 mb-8 flex justify-center"
        style={{ transform: `translateX(${kittyPosition}px)` }}
      >
        <div className="relative flex items-end gap-3">
          {/* CSS Hello Kitty */}
          <div className="relative" style={{ filter: 'drop-shadow(0 5px 15px rgba(0,0,0,0.15))' }}>
            <div className="relative w-32 h-32">
              {/* Head */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-24 bg-white rounded-full border-4 border-black">
                {/* Left ear */}
                <div className="absolute -top-2 left-2 w-8 h-10 bg-white border-4 border-black rounded-t-full transform -rotate-12" />
                {/* Right ear */}
                <div className="absolute -top-2 right-2 w-8 h-10 bg-white border-4 border-black rounded-t-full transform rotate-12" />
                
                {/* Bow */}
                <div className="absolute -top-1 right-4">
                  <div className="relative">
                    {/* Bow left */}
                    <div className="absolute w-5 h-5 bg-red-500 border-2 border-black rounded-full -left-3" />
                    {/* Bow center */}
                    <div className="absolute w-3 h-3 bg-red-500 border-2 border-black rounded-full" />
                    {/* Bow right */}
                    <div className="absolute w-5 h-5 bg-red-500 border-2 border-black rounded-full left-2" />
                  </div>
                </div>
                
                {/* Eyes */}
                <div className="absolute top-8 left-6 w-2 h-3 bg-black rounded-full" />
                <div className="absolute top-8 right-6 w-2 h-3 bg-black rounded-full" />
                
                {/* Nose */}
                <div className="absolute top-10 left-1/2 -translate-x-1/2 w-2 h-1.5 bg-yellow-400 rounded-full border border-black" />
                
                {/* Whiskers - Left */}
                <div className="absolute top-10 left-0 w-6 h-0.5 bg-black" />
                <div className="absolute top-11 left-0 w-6 h-0.5 bg-black" />
                <div className="absolute top-12 left-0 w-6 h-0.5 bg-black" />
                
                {/* Whiskers - Right */}
                <div className="absolute top-10 right-0 w-6 h-0.5 bg-black" />
                <div className="absolute top-11 right-0 w-6 h-0.5 bg-black" />
                <div className="absolute top-12 right-0 w-6 h-0.5 bg-black" />
              </div>
              
              {/* Body with overalls */}
              <div className="absolute top-16 left-1/2 -translate-x-1/2 w-16 h-12 bg-white rounded-2xl border-3 border-black">
                {/* Blue overalls */}
                <div className="absolute inset-x-2 top-2 bottom-0 bg-blue-500 rounded-xl border-2 border-black" />
                {/* Overalls straps */}
                <div className="absolute top-1 left-3 w-2 h-4 bg-blue-500 border-2 border-black rounded-full" />
                <div className="absolute top-1 right-3 w-2 h-4 bg-blue-500 border-2 border-black rounded-full" />
              </div>
              
              {/* Walking legs */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-4" style={{ bottom: '-8px' }}>
                {/* Left leg */}
                <div 
                  className="w-2 h-6 bg-white border-2 border-black rounded-full transition-all duration-75"
                  style={{ 
                    transform: `rotate(${leftLegRotation}deg)`,
                    transformOrigin: 'top center'
                  }}
                />
                {/* Right leg */}
                <div 
                  className="w-2 h-6 bg-white border-2 border-black rounded-full transition-all duration-75"
                  style={{ 
                    transform: `rotate(${rightLegRotation}deg)`,
                    transformOrigin: 'top center'
                  }}
                />
              </div>
            </div>
          </div>
          
          {/* Card in kitty's hand */}
          <div 
            className="text-5xl md:text-6xl mb-4"
            style={{ 
              filter: 'drop-shadow(0 3px 10px rgba(0,0,0,0.1))',
              animation: 'tilt 2s ease-in-out infinite'
            }}
          >
            💌
          </div>
        </div>
      </div>

      {/* Speech bubble */}
      {showBubble && (
        <div className="animate-scale-in flex justify-center">
          <div className="relative bg-white rounded-3xl shadow-2xl p-8 md:p-10 max-w-lg w-full">
            <div 
              className="absolute -top-4 left-1/2 -translate-x-1/2 w-0 h-0" 
              style={{
                borderLeft: '20px solid transparent',
                borderRight: '20px solid transparent',
                borderBottom: '20px solid white'
              }}
            />
            
            <p className="font-romantic text-3xl md:text-4xl text-center mb-8" style={{ color: '#E91E63' }}>
              Do you want me to open it? 🎀
            </p>
            
            <PlayfulButtons
              onYes={onNext}
              yesText="Yes 😻"
              noText="No 🙀"
            />
          </div>
        </div>
      )}
    </div>
  );
};
