import React from 'react';
import Section from './ui/Section';
import { Brain, Zap, Target, Lock, CheckCircle2 } from 'lucide-react';

const Features: React.FC = () => {
  const reasons = [
    {
      icon: <Brain className="w-8 h-8 text-neon-green" />,
      title: "Psicologia Aplicada",
      desc: "Técnicas baseadas em padrões comportamentais reais, não em teoria barata."
    },
    {
      icon: <Zap className="w-8 h-8 text-neon-turquoise" />,
      title: "Resultados Imediatos",
      desc: "Linguagem simples e direta para você aplicar na próxima conversa."
    },
    {
      icon: <Target className="w-8 h-8 text-neon-green" />,
      title: "Foco no Mundo Real",
      desc: "Chega de academicismo. Aprenda o que funciona nas ruas e nas salas de reunião."
    }
  ];

  const benefits = [
    "Falar com mais clareza e confiança inabalável",
    "Ser ouvido e respeitado em qualquer ambiente",
    "Influenciar conversas e decisões naturalmente",
    "Melhorar vendas, negociações e relações pessoais",
    "Desbloquear sua presença de autoridade",
    "Aprender técnicas de persuasão que funcionam HOJE"
  ];

  return (
    <>
      <Section className="bg-dark-card border-y border-white/5">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Por Que Esses E-books São <span className="text-neon-green">Diferentes?</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Esqueça os manuais chatos. Esta franquia foi desenhada como uma arma estratégica para quem exige resultados rápidos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((item, idx) => (
            <div key={idx} className="glass p-8 rounded-2xl hover:bg-white/5 transition-colors group">
              <div className="mb-6 p-4 bg-white/5 rounded-xl inline-block group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-dark-bg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
             {/* Abstract tech grid decoration */}
             <div className="absolute -inset-4 bg-gradient-to-r from-neon-green to-neon-turquoise opacity-20 blur-xl rounded-full"></div>
             <div className="glass relative rounded-2xl p-8 border border-neon-green/20">
                <div className="grid grid-cols-2 gap-4">
                    {[1,2,3,4].map((i) => (
                        <div key={i} className="aspect-square bg-white/5 rounded-lg border border-white/5 flex items-center justify-center">
                            <Lock className="text-neon-green/40 w-8 h-8" />
                        </div>
                    ))}
                </div>
             </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              O Que Você Vai <span className="text-neon-turquoise">Conquistar?</span>
            </h2>
            <div className="space-y-4">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-lg bg-white/5 border border-white/5 hover:border-neon-turquoise/30 transition-colors">
                  <CheckCircle2 className="w-6 h-6 text-neon-green shrink-0 mt-0.5" />
                  <span className="text-gray-200 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Features;