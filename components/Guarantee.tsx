import React from 'react';
import Section from './ui/Section';
import NeonButton from './ui/NeonButton';
import { Shield } from 'lucide-react';

interface GuaranteeProps {
  onCtaClick?: () => void;
}

const Guarantee: React.FC<GuaranteeProps> = ({ onCtaClick }) => {
  return (
    <>
        <Section className="bg-black py-16">
            <div className="max-w-3xl mx-auto text-center border border-white/10 bg-white/5 rounded-2xl p-8 md:p-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-neon-green/10 text-neon-green mb-6">
                    <Shield className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Garantia Blindada de 7 Dias</h3>
                <p className="text-gray-400">
                    Leitura simples. Transformação profunda. Resultados reais. E caso você não sinta evolução, você está totalmente protegido. Devolvemos 100% do seu investimento.
                </p>
            </div>
        </Section>

        <Section className="relative min-h-[80vh] flex items-center justify-center bg-black overflow-hidden">
            {/* Dark Cinematic Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-neon-green/5 via-black to-black opacity-80 z-10"></div>
            
            {/* Background Image */}
            <div className="absolute inset-0 opacity-20">
                <img src="https://picsum.photos/seed/darkcity/1920/1080?grayscale" className="w-full h-full object-cover" alt="City" />
            </div>

            <div className="relative z-20 max-w-4xl mx-auto text-center px-4">
                <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
                    "Se você não controla sua comunicação… <br/>
                    <span className="text-neon-green">alguém controla por você.</span>"
                </h2>
                
                <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                    A sua comunicação dita quem te ouve, quem acredita em você e quem te segue. O momento de assumir o comando é agora.
                </p>

                <NeonButton 
                  variant="primary" 
                  className="text-xl px-12 py-6 shadow-neon mx-auto"
                  onClick={onCtaClick}
                >
                    QUERO DESTRAVAR MINHA PERSUASÃO AGORA
                </NeonButton>
            </div>
        </Section>
    </>
  );
};

export default Guarantee;