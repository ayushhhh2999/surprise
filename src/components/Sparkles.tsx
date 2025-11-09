import { Sparkles as SparklesIcon } from "lucide-react";

export const Sparkles = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(30)].map((_, i) => (
        <SparklesIcon
          key={i}
          className="absolute text-gold/40 animate-sparkle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            width: `${10 + Math.random() * 15}px`,
            height: `${10 + Math.random() * 15}px`,
          }}
        />
      ))}
    </div>
  );
};
