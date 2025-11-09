import { useState, useEffect } from "react";
import { Heart, Sparkles as SparklesIcon } from "lucide-react";
import { Confetti } from "@/components/Confetti";

export const FinalReveal = () => {
  const [showMessage, setShowMessage] = useState(false);
  const message = "I knew it 😘 Now you are mine forever 💖";

  useEffect(() => {
    setTimeout(() => setShowMessage(true), 500);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-[60vh] w-full animate-fade-in px-4">
      <Confetti />
      
      {/* Hearts explosion */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-pink-medium animate-heart-float"
            fill="currentColor"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
              width: `${20 + Math.random() * 30}px`,
              height: `${20 + Math.random() * 30}px`,
            }}
          />
        ))}
      </div>

      {/* Main message */}
      {showMessage && (
        <div className="relative z-10 w-full max-w-3xl">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 animate-scale-in">
            <div className="flex flex-col items-center gap-6">
              <div className="w-24 h-24 rounded-full flex items-center justify-center animate-glow-pulse shadow-gold"
                style={{
                  background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                }}
              >
                <SparklesIcon className="w-12 h-12 text-white" />
              </div>
              
              <div className="w-full text-center px-4">
                <h1 className="font-romantic text-3xl md:text-4xl lg:text-5xl animate-pulse break-words"
                  style={{
                    color: '#E91E63',
                    lineHeight: '1.5',
                    wordWrap: 'break-word',
                    overflowWrap: 'break-word',
                  }}
                >
                  {message}
                </h1>
              </div>

              <div className="flex gap-2 mt-4">
                {[...Array(5)].map((_, i) => (
                  <Heart
                    key={i}
                    className="w-8 h-8 animate-pulse"
                    style={{ 
                      color: '#E91E63',
                      animationDelay: `${i * 0.2}s` 
                    }}
                    fill="currentColor"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
