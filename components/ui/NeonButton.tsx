import React from 'react';
import { ChevronRight } from 'lucide-react';

interface NeonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

const NeonButton: React.FC<NeonButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "relative font-bold uppercase tracking-wider py-4 px-8 rounded transition-all duration-300 flex items-center justify-center group";
  
  const variants = {
    primary: "bg-neon-green text-black hover:bg-white hover:shadow-neon-hover shadow-neon border-none",
    secondary: "bg-neon-turquoise text-black hover:bg-white hover:shadow-[0_0_20px_rgba(0,224,204,0.6)] border-none",
    outline: "bg-transparent border border-neon-green text-neon-green hover:bg-neon-green/10 hover:shadow-neon"
  };

  const widthClass = fullWidth ? 'w-full' : 'w-auto';

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
      </span>
    </button>
  );
};

export default NeonButton;