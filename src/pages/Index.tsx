import { useState, useEffect } from "react";
import { GiftBox } from "@/components/GiftBox";
import { PasswordPrompt } from "@/components/PasswordPrompt";
import { KittyScene } from "@/components/KittyScene";
import { QuestionCard } from "@/components/QuestionCard";
import { FinalReveal } from "@/components/FinalReveal";
import { FloatingHearts } from "@/components/FloatingHearts";
import { Sparkles } from "@/components/Sparkles";
import { SideDecorations } from "@/components/SideDecorations";

type Step = "gift" | "password" | "kitty" | "question" | "final";

const Index = () => {
  const [step, setStep] = useState<Step>("gift");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen gradient-romantic overflow-hidden relative">
      {/* Background effects */}
      <Sparkles />
      <FloatingHearts />
      <SideDecorations />
      
      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        {step === "gift" && (
          <GiftBox 
            onClick={() => setShowPassword(true)} 
          />
        )}
        
        {showPassword && step === "gift" && (
          <PasswordPrompt
            onSuccess={() => setStep("kitty")}
            onClose={() => setShowPassword(false)}
          />
        )}
        
        {step === "kitty" && (
          <KittyScene
            onNext={() => setStep("question")}
          />
        )}
        
        {step === "question" && (
          <QuestionCard
            onYes={() => setStep("final")}
          />
        )}
        
        {step === "final" && (
          <FinalReveal />
        )}
      </div>
    </div>
  );
};

export default Index;
