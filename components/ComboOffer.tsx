import React, { useEffect, useState } from 'react';
import Section from './ui/Section';
import NeonButton from './ui/NeonButton';
import { Star, Check, ShieldCheck } from 'lucide-react';

interface ComboOfferProps {
  highlightTrigger?: number;
}

const ComboOffer: React.FC<ComboOfferProps> = ({ highlightTrigger = 0 }) => {
  const [isHighlighted, setIsHighlighted] = useState(false);

  useEffect(() => {
    if (highlightTrigger > 0) {
      // 1. Rolar até a seção
      const section = document.getElementById('combo-offer-section');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }

      // 2. Ativar animação do botão
      setIsHighlighted(true);

      // 3. Remover animação após o efeito (1.5s)
      const timer = setTimeout(() => {
        setIsHighlighted(false);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [highlightTrigger]);

  return (
    <Section id="combo-offer-section" className="relative bg-black overflow-hidden py-32">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-green/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 glass max-w-4xl mx-auto rounded-3xl p-1 md:p-2 border border-neon-green/50 shadow-neon">
        <div className="bg-black/80 rounded-2xl p-8 md:p-12 text-center overflow-hidden relative">
          
          {/* Badge */}
          <div className="absolute top-0 right-0 bg-neon-green text-black font-extrabold text-xs px-4 py-2 rounded-bl-xl">
            OFERTA LIMITADA
          </div>

          <div className="inline-flex items-center gap-2 mb-6 text-neon-green">
            <Star className="w-5 h-5 fill-neon-green" />
            <span className="font-bold tracking-widest uppercase">Combo Premium</span>
            <Star className="w-5 h-5 fill-neon-green" />
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase italic">
            A Comunicação Que <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-white">Todos Vão Notar</span>
          </h2>

          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            Leve o combo completo e desbloqueie o poder de falar, convencer e influenciar com presença e autoridade absoluta. Economize 40% hoje.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
            <div className="flex flex-col items-center p-4 bg-white/5 rounded-lg border border-white/10">
                <span className="text-gray-400 line-through text-sm">197,00 MT</span>
                <span className="text-white font-bold text-xl">Comunicação de Elite</span>
            </div>
            <div className="flex flex-col items-center justify-center">
                <span className="text-neon-green text-2xl font-bold">+</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-white/5 rounded-lg border border-white/10">
                <span className="text-gray-400 line-through text-sm">297,00 MT</span>
                <span className="text-white font-bold text-xl">Engenharia Persuasão</span>
            </div>
          </div>

          <div className="mb-12">
            <div className="text-gray-400 mb-2">De <span className="line-through decoration-red-500">494,00 MT</span> por apenas:</div>
            <div className="text-6xl md:text-7xl font-black text-neon-green tracking-tighter mb-2">
                12x 29,90 MT
            </div>
            <div className="text-white text-sm">ou 297,00 MT à vista</div>
          </div>

          <NeonButton 
            variant="primary" 
            className={`w-full md:w-auto min-w-[300px] text-lg py-5 transition-all duration-300 ${
              isHighlighted 
                ? 'scale-110 shadow-[0_0_60px_rgba(0,255,136,0.8)] ring-4 ring-white/50 animate-pulse' 
                : 'shadow-[0_0_40px_rgba(0,255,136,0.4)]'
            }`}
            onClick={() => window.open("https://wa.me/+258878795515?text=Eiii+Revendedor+quero+o+COMBO+completo!!%F0%9F%98%81+", '_blank')}
          >
            GARANTIR O COMBO COMPLETO AGORA
          </NeonButton>

          <div className="mt-8 flex items-center justify-center gap-2 text-gray-500 text-sm">
            <ShieldCheck className="w-4 h-4" />
            <span>Compra 100% Segura e Acesso Imediato</span>
          </div>

        </div>
      </div>
    </Section>
  );
};

export default ComboOffer;