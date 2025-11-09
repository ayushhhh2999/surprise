import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff, X } from "lucide-react";
import { toast } from "sonner";

interface PasswordPromptProps {
  onSuccess: () => void;
  onClose?: () => void;
}

export const PasswordPrompt = ({ onSuccess, onClose }: PasswordPromptProps) => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const correctPassword = "12345678";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === correctPassword) {
      toast.success("Perfect! 💕");
      setTimeout(onSuccess, 500);
    } else {
      toast.error("Oops! Try again 🥺");
      setPassword("");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in">
      <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 max-w-md w-full animate-scale-in relative">
        {onClose && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        )}
        
        <div className="flex flex-col items-center gap-6">
          <h2 className="font-romantic text-3xl md:text-4xl text-center" style={{ color: '#E91E63' }}>
            Enter the Secret Code 🔒
          </h2>
          
          <p className="text-gray-500 text-center font-handwritten text-lg">
            A special passkey is needed to unlock your surprise
          </p>
          
          <form onSubmit={handleSubmit} className="w-full space-y-5">
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full h-16 px-6 text-center text-2xl font-handwritten rounded-full border-2 focus:outline-none transition-all"
                style={{ 
                  borderColor: '#F8BBD0',
                  backgroundColor: '#FCE4EC',
                  color: '#880E4F'
                }}
                autoFocus
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
            
            <Button 
              type="submit" 
              className="w-full h-14 text-xl font-romantic rounded-full hover:opacity-90 transition-smooth shadow-lg text-white border-0"
              style={{ backgroundColor: '#E91E63' }}
            >
              Unlock 🔓
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
