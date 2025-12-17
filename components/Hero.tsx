import React from 'react';
import NeonButton from './ui/NeonButton';

interface HeroProps {
  onCtaClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-bg pt-24 pb-24 md:pt-32 md:pb-12">
      {/* Cinematic Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-neon-green/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-neon-turquoise/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-12 items-center relative z-10">
        
        {/* Copy Content - Order 1 on mobile ensuring headline is seen first */}
        <div className="order-1 space-y-8 text-center lg:text-left">
          <div className="inline-block px-3 py-1 border border-neon-green/30 rounded-full bg-neon-green/5 backdrop-blur-md">
            <span className="text-neon-green text-xs font-bold tracking-[0.2em] uppercase">Nova Franquia Disponível</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white tracking-tighter">
            Desbloqueie <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-neon-turquoise">
              Sua Comunicação.
            </span>
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-lg mx-auto lg:mx-0">
            Se comunicar bem não é um talento — é uma vantagem estratégica. E agora ela está ao seu alcance.
            Transforme palavras comuns em poder de influência absoluto.
          </p>

          <div className="pt-4">
            <NeonButton 
              variant="primary" 
              fullWidth={false} 
              className="mx-auto lg:mx-0"
              onClick={onCtaClick}
            >
              Quero Transformar Minha Comunicação
            </NeonButton>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-4 pt-4 text-sm text-gray-500">
            <div className="flex -space-x-2">
               {[1,2,3,4].map(i => (
                 <div key={i} className="w-8 h-8 rounded-full bg-gray-800 border-2 border-black overflow-hidden">
                    <img src={`https://picsum.photos/50/50?random=${i}`} alt="User" className="w-full h-full object-cover opacity-70" />
                 </div>
               ))}
            </div>
            <span>Junte-se a +15.000 leitores diários</span>
          </div>
        </div>

        {/* Cinematic Visual - Order 2 on mobile to prevent overlap and push below text */}
        <div className="order-2 relative flex justify-center mt-8 lg:mt-0">
            {/* Character / Mockup Composition */}
            <div className="relative w-full max-w-[320px] md:max-w-md aspect-[4/5]">
                {/* Glow behind the image */}
                <div className="absolute -inset-4 bg-neon-green/20 blur-2xl rounded-full opacity-50"></div>

                {/* Image Container with Effects */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden border border-white/10 shadow-2xl z-10 bg-black group">
                    <img 
                        src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=1200&auto=format&fit=crop" 
                        alt="Protagonista sentado com postura de poder" 
                        className="w-full h-full object-cover filter contrast-110 brightness-90 saturate-0 hover:saturate-50 transition-all duration-700"
                    />
                    
                    {/* Neon Green Ambient Light Overlay (Mix-blend-overlay tint lights green) */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-neon-green/20 via-transparent to-neon-turquoise/10 mix-blend-overlay opacity-60"></div>
                    
                    {/* Inner Shadow / Vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent opacity-90"></div>
                    
                    {/* Reflection/Glass effect line */}
                    <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/5 to-transparent pointer-events-none"></div>
                </div>

                {/* Floating Ebook Mockup */}
                <div className="absolute -bottom-6 -right-4 md:-bottom-10 md:-left-10 w-2/3 h-auto z-30 animate-bounce-slow hover:pause">
                     <div className="bg-black border border-neon-green/30 rounded-lg p-1 shadow-[0_0_30px_rgba(0,255,136,0.3)] transform -rotate-6 transition-transform hover:rotate-0 duration-500 overflow-hidden">
                        <div className="relative w-full h-full bg-black p-4 rounded aspect-[3/4] flex flex-col justify-between group/book">
                            {/* Background Image for Book */}
                            <img 
                                src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=1200&auto=format&fit=crop" 
                                className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale mix-blend-luminosity"
                                alt="Book Cover"
                            />
                            {/* Dark Overlay for Text Legibility */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/60 opacity-90"></div>

                            {/* Book cover sheen */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover/book:translate-x-[100%] transition-transform duration-1000 z-20"></div>
                            
                            <div className="absolute top-0 right-0 w-20 h-20 bg-neon-green/20 blur-xl rounded-full z-10"></div>
                            <h3 className="text-neon-green font-bold text-xl uppercase leading-none tracking-wide z-10 drop-shadow-md">Comunicação<br/>de Elite</h3>
                            <div className="text-xs text-gray-400 z-10 mt-auto font-medium">Edição Limitada</div>
                        </div>
                     </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;