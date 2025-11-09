import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";

interface PlayfulButtonsProps {
  onYes: () => void;
  yesText: string;
  noText: string;
}

export const PlayfulButtons = ({ onYes, yesText, noText }: PlayfulButtonsProps) => {
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [hasEscaped, setHasEscaped] = useState(false);
  const [currentQuadrant, setCurrentQuadrant] = useState(0); // 0: center, 1: top-left, 2: top-right, 3: bottom-left, 4: bottom-right
  const [isClicked, setIsClicked] = useState(false);
  const noButtonRef = useRef<HTMLButtonElement>(null);

  const moveNoButton = (isClick = false) => {
    if (!hasEscaped) {
      setHasEscaped(true);
    }
    
    if (isClick) {
      setIsClicked(true);
    }
    
    // Divide screen into 4 quadrants with larger distances and random variation
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    
    // Add random offset within each quadrant for more variation
    const randomOffset = () => ({
      x: (Math.random() - 0.5) * 100, // Random offset between -50 and 50
      y: (Math.random() - 0.5) * 100,
    });
    
    // Multiply distance by 1.5x if clicked for extra far movement
    const distanceMultiplier = isClick ? 1.5 : 1;
    
    // Define the 4 quadrant base positions (further apart)
    const quadrants = [
      { x: -viewportWidth * 0.35 * distanceMultiplier, y: -viewportHeight * 0.30 * distanceMultiplier, quadrant: 1 }, // Top left
      { x: viewportWidth * 0.35 * distanceMultiplier, y: -viewportHeight * 0.30 * distanceMultiplier, quadrant: 2 },  // Top right
      { x: -viewportWidth * 0.35 * distanceMultiplier, y: viewportHeight * 0.30 * distanceMultiplier, quadrant: 3 },  // Bottom left
      { x: viewportWidth * 0.35 * distanceMultiplier, y: viewportHeight * 0.30 * distanceMultiplier, quadrant: 4 },   // Bottom right
    ];
    
    // ALWAYS filter out the current quadrant to ensure different quadrant every time
    const availableQuadrants = quadrants.filter(q => q.quadrant !== currentQuadrant);
    
    // Guarantee we pick a different quadrant
    if (availableQuadrants.length === 0) {
      // Fallback: if somehow no quadrants available, use all quadrants
      const fallbackQuadrant = quadrants[Math.floor(Math.random() * quadrants.length)];
      const offset = randomOffset();
      setNoPosition({ x: fallbackQuadrant.x + offset.x, y: fallbackQuadrant.y + offset.y });
      setCurrentQuadrant(fallbackQuadrant.quadrant);
    } else {
      // Pick randomly from available quadrants (guaranteed different from current)
      const randomIndex = Math.floor(Math.random() * availableQuadrants.length);
      const selectedQuadrant = availableQuadrants[randomIndex];
      const offset = randomOffset();
      
      setNoPosition({ x: selectedQuadrant.x + offset.x, y: selectedQuadrant.y + offset.y });
      setCurrentQuadrant(selectedQuadrant.quadrant);
    }
  };
  
  const handleNoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    moveNoButton(true);
  };

  return (
    <div className="flex justify-center gap-6 items-center relative w-full min-h-[80px]">
      <Button
        onClick={onYes}
        className="h-16 px-10 text-2xl font-romantic rounded-full hover:opacity-90 transition-smooth shadow-lg hover:scale-110 text-white border-0"
        style={{ backgroundColor: '#E91E63' }}
      >
        {yesText}
      </Button>

      <Button
        ref={noButtonRef}
        onMouseEnter={() => moveNoButton(false)}
        onTouchStart={() => moveNoButton(false)}
        onClick={handleNoClick}
        className={`h-16 px-10 text-2xl font-romantic rounded-full transition-all duration-300 hover:bg-gray-100 shadow-lg ${hasEscaped ? 'absolute' : ''}`}
        style={{
          transform: hasEscaped ? `translate(${noPosition.x}px, ${noPosition.y}px) ${isClicked ? 'scale(0.9)' : 'scale(1)'}` : 'none',
          backgroundColor: '#F5F5F5',
          color: '#757575',
          transition: 'all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        }}
      >
        {noText}
      </Button>
    </div>
  );
};
