import { useState } from "react";
import { Heart } from "lucide-react";
import { PlayfulButtons } from "@/components/PlayfulButtons";

interface QuestionCardProps {
  onYes: () => void;
}

export const QuestionCard = ({ onYes }: QuestionCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  useState(() => {
    setTimeout(() => setIsFlipped(true), 500);
  });

  return (
    <div className="animate-fade-in perspective-1000">
      <div
        className={`relative transition-all duration-1000 transform-style-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Back of card (shows first) */}
        <div className="backface-hidden">
          <div className="w-[650px] h-[750px] bg-gradient-to-br from-pink-soft to-pink-warm rounded-3xl shadow-romantic flex items-center justify-center">
            <Heart
              className="w-40 h-40 text-foreground animate-pulse"
              fill="currentColor"
            />
          </div>
        </div>

        {/* Front of card (shows after flip) */}
        <div
          className="absolute inset-0 backface-hidden"
          style={{ transform: "rotateY(180deg)" }}
        >
          <div className="w-[650px] h-[750px] bg-card rounded-3xl shadow-romantic p-10 flex flex-col items-center justify-between gap-6">
            {/* Heart icon on top */}
            <div className="w-24 h-24 bg-gradient-to-br from-pink-medium to-pink-warm rounded-full flex items-center justify-center animate-glow-pulse mt-4">
              <Heart className="w-14 h-14 text-foreground" fill="currentColor" />
            </div>

            {/* Message content */}
            <p className="font-romantic text-lg text-foreground text-center leading-relaxed whitespace-pre-line px-6 overflow-y-auto flex-1">
              Hey you,
              {"\n"}
              I know this might sound a little silly, but whatever happened
              between us, accident or not, I think it was something special. I
              never expected to feel this way, but I do, and I’m ready to give
              it everything, no matter how crazy it sounds.
              {"\n\n"}
              That day you said you were scared, what if it doesn’t end well? And
              I asked, what if it does? I still believe in that. I’m willing to do
              whatever it takes to make it work, but I can’t climb this wall
              alone. So give me a little rope, some hope, to hold on to.
              {"\n\n"}
              You told me you’re dramatic, that you get angry easily. Fine, be
              dramatic with me, get mad at me, show me your moods, your thoughts,
              all of it. I’ll take it, and I’ll handle it, because I just want
              you, as you are.
              {"\n\n"}
              So, will you hold my hand?
            </p>

            {/* Buttons at bottom */}
            <div className="w-full px-8 mb-4">
              <PlayfulButtons onYes={onYes} yesText="Yes 💞" noText="No 💔" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
