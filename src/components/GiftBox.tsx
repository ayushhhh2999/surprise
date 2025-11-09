interface GiftBoxProps {
  onClick: () => void;
}

export const GiftBox = ({ onClick }: GiftBoxProps) => {
  return (
    <div className="flex flex-col items-center gap-8 animate-float">
      <div 
        onClick={onClick}
        className="cursor-pointer transition-bounce hover:scale-110 animate-tilt text-9xl md:text-[12rem]"
        style={{ filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.2))' }}
      >
        🎁
      </div>
      
      <p className="font-romantic text-3xl md:text-4xl text-center max-w-md px-4" style={{ color: '#E91E63' }}>
        There's a special gift inside for you 💝
        <br />
        <span className="text-2xl md:text-3xl">Click to open</span>
      </p>
    </div>
  );
};
