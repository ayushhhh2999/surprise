import { Flower2, Heart } from "lucide-react";
import { AnimatedKittyLeft } from "./AnimatedKittyLeft";
import { AnimatedKittyRight } from "./AnimatedKittyRight";

export const SideDecorations = () => {
  return (
    <>
      {/* Left side decorations */}
      <div className="fixed left-0 top-0 h-full w-32 pointer-events-none hidden md:block">
        {/* Hello Kitty Left */}
        <div 
          className="absolute top-1/2 -translate-y-1/2 left-6 w-28 h-28"
        >
          <AnimatedKittyLeft />
        </div>

        {/* Flowers */}
        <Flower2 className="absolute top-20 left-8 text-pink-medium w-12 h-12 animate-float opacity-80" style={{ animationDelay: "0s" }} />
        <Flower2 className="absolute top-40 left-4 text-pink-light w-8 h-8 animate-float opacity-70" style={{ animationDelay: "1s" }} />
        <Flower2 className="absolute top-60 left-10 text-pink-medium w-10 h-10 animate-float opacity-75" style={{ animationDelay: "0.5s" }} />
        <Heart className="absolute top-80 left-6 text-pink-light/50 w-6 h-6 animate-float" fill="currentColor" style={{ animationDelay: "1.5s" }} />
        <Flower2 className="absolute bottom-40 left-5 text-pink-medium w-14 h-14 animate-float opacity-80" style={{ animationDelay: "2s" }} />
        <Flower2 className="absolute bottom-20 left-12 text-pink-light w-9 h-9 animate-float opacity-70" style={{ animationDelay: "2.5s" }} />

        {/* Decorative vines */}
        <div className="absolute top-10 left-2 h-96 w-1 bg-gradient-to-b from-pink-light/30 via-pink-medium/20 to-transparent rounded-full" />
        <div className="absolute bottom-10 left-3 h-80 w-1 bg-gradient-to-t from-pink-light/30 via-pink-medium/20 to-transparent rounded-full" />
      </div>

      {/* Right side decorations */}
      <div className="fixed right-0 top-0 h-full w-32 pointer-events-none hidden md:block">
        {/* Hello Kitty Right (moved inward + mirrored) */}
        <div
          className="absolute top-1/2 -translate-y-1/2 right-8 w-28 h-28"
          style={{
            transform: "translateX(-12px) scaleX(-1)",
            transformOrigin: "center",
          }}
        >
          <AnimatedKittyRight />
        </div>

        {/* Flowers */}
        <Flower2 className="absolute top-32 right-6 text-pink-light w-11 h-11 animate-float opacity-75" style={{ animationDelay: "0.8s" }} />
        <Flower2 className="absolute top-52 right-10 text-pink-medium w-9 h-9 animate-float opacity-70" style={{ animationDelay: "1.3s" }} />
        <Heart className="absolute top-72 right-8 text-pink-medium/50 w-7 h-7 animate-float" fill="currentColor" style={{ animationDelay: "0.3s" }} />
        <Flower2 className="absolute top-96 right-5 text-pink-light w-13 h-13 animate-float opacity-80" style={{ animationDelay: "1.8s" }} />
        <Flower2 className="absolute bottom-32 right-9 text-pink-medium w-10 h-10 animate-float opacity-75" style={{ animationDelay: "2.3s" }} />
        <Flower2 className="absolute bottom-16 right-6 text-pink-light w-8 h-8 animate-float opacity-70" style={{ animationDelay: "2.8s" }} />

        {/* Decorative vines */}
        <div className="absolute top-16 right-2 h-88 w-1 bg-gradient-to-b from-pink-medium/30 via-pink-light/20 to-transparent rounded-full" />
        <div className="absolute bottom-12 right-4 h-72 w-1 bg-gradient-to-t from-pink-medium/30 via-pink-light/20 to-transparent rounded-full" />
      </div>
    </>
  );
};
