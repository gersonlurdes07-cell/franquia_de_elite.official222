import React from 'react';
import Section from './ui/Section';
import NeonButton from './ui/NeonButton';

interface ProductShowcaseProps {
  onViewVolume01?: () => void;
}

const ProductShowcase: React.FC<ProductShowcaseProps> = ({ onViewVolume01 }) => {
  const whatsappLinkV2 = "https://wa.me/+258878795515?text=Olá+Revendedor'd+ELITE.+Desejo+adquirir+o+COMUNICAÇÃO+DE+ELITE!!😁+";

  return (
    <Section className="bg-gradient-to-b from-dark-bg to-gray-900/50">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
          A Franquia <span className="text-neon-green">de ELITE</span>
        </h2>
        <div className="w-24 h-1 bg-neon-green mx-auto mt-6 rounded-full shadow-neon"></div>
      </div>

      <div className="space-y-32">
        {/* E-BOOK 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative group">
             <div className="absolute inset-0 bg-neon-green/20 blur-3xl rounded-full opacity-40 group-hover:opacity-60 transition-opacity"></div>
             
             {/* Card Principal */}
             <div className="relative w-full max-w-sm mx-auto aspect-[3/4] bg-black border border-neon-green/50 rounded-lg shadow-neon transform transition-transform duration-500 group-hover:-translate-y-4 overflow-hidden">
                
                {/* Imagem de Fundo */}
                <img 
                  src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=1200&auto=format&fit=crop" 
                  alt="Background Texture" 
                  className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-60 transition-all duration-700 scale-110"
                />

                {/* Overlay Escuro para Legibilidade */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/60 opacity-90 z-0"></div>

                <div className="relative z-10 h-full flex flex-col items-center justify-center p-8 text-center border border-white/10 rounded-lg">
                    <h3 className="text-3xl font-bold text-neon-green uppercase mb-2 leading-tight drop-shadow-[0_4px_4px_rgba(0,0,0,1)]">Comunicação<br/>de Elite</h3>
                    <span className="text-white/80 tracking-widest text-xs uppercase font-semibold drop-shadow-md">Módulo de Entrada</span>
                </div>
             </div>
          </div>
          <div className="space-y-6">
            <span className="text-neon-green font-bold tracking-widest uppercase text-sm">Volume 01</span>
            <h3 className="text-3xl md:text-4xl font-bold text-white">O Código da Primeira Impressão</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              Descubra como dominar os primeiros 30 segundos de qualquer interação. Este guia prático revela os segredos da linguagem corporal, tom de voz e micro-expressões que definem se você será respeitado ou ignorado.
            </p>
            <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-neon-green rounded-full"></span>Leitura magnética de ambientes</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-neon-green rounded-full"></span>Gatilhos de autoridade instantânea</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-neon-green rounded-full"></span>Quebra de gelo infalível</li>
            </ul>
            <div className="pt-4">
              {/* Botão agora chama a função de navegação interna */}
              <NeonButton variant="outline" onClick={onViewVolume01}>
                Ver Módulos e Adquirir Vol. 01
              </NeonButton>
            </div>
          </div>
        </div>

        {/* E-BOOK 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 space-y-6">
            <span className="text-neon-turquoise font-bold tracking-widest uppercase text-sm">Volume 02</span>
            <h3 className="text-3xl md:text-4xl font-bold text-white">Engenharia da Persuasão</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              Avance para o próximo nível. O Vol. 2 entra fundo na estrutura lógica e emocional de conversas complexas. Aprenda a conduzir negociações e mudar opiniões sem gerar atrito.
            </p>
            <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-neon-turquoise rounded-full"></span>Scripts de conversão</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-neon-turquoise rounded-full"></span>Neutralização de objeções</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-neon-turquoise rounded-full"></span>Loopings hipnóticos de fala</li>
            </ul>
            <div className="pt-4">
              <NeonButton variant="outline" onClick={() => window.open(whatsappLinkV2, '_blank')}>Adquirir Volume 02</NeonButton>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative group">
             <div className="absolute inset-0 bg-neon-turquoise/20 blur-3xl rounded-full opacity-40 group-hover:opacity-60 transition-opacity"></div>
             <div className="relative w-full max-w-sm mx-auto aspect-[3/4] bg-black border border-neon-turquoise/50 rounded-lg shadow-[0_0_20px_rgba(0,224,204,0.3)] transform transition-transform duration-500 group-hover:-translate-y-4">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black opacity-90"></div>
                <div className="relative z-10 h-full flex flex-col items-center justify-center p-8 text-center border border-white/10 rounded-lg">
                    <h3 className="text-4xl font-bold text-neon-turquoise uppercase mb-2">Mind<br/>Architect</h3>
                    <span className="text-white/50 tracking-widest text-xs uppercase">Módulo Avançado</span>
                </div>
             </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ProductShowcase;