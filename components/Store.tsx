import React from 'react';
import Section from './ui/Section';
import NeonButton from './ui/NeonButton';
import { Clock, BookOpen } from 'lucide-react';

const Store: React.FC = () => {
  const whatsappLink = "https://wa.me/+258878795515?text=Olá+Revendedor'd+ELITE.+Desejo+adquirir+o+COMUNICAÇÃO+DE+ELITE!!😁+";
  const reserveLink = "https://wa.me/+258868795515?text=Ol%C3%A1.+Gostaria+de+reservar+o+próximo+e-book%F0%9F%98%81+";

  const relatedProducts = [
    {
      title: "Dominando a Linguagem Corporal",
      desc: "O guia definitivo para ler o que não é dito.",
      price: "199,00 MT",
      link: "https://wa.me/+258878795515?text=Ol%C3%A1+Revendedor%27d+ELITE.+Desejo+adquirir+o+livro+DESVENDANDO+OS+SEGREDOS+DA+LINGUAGEM+CORPORAL!!%F0%9F%98%81+"
    },
    {
      title: "Gatilhos Mentais Proibidos",
      desc: "Use a ética, mas conheça o lado sombrio da persuasão.",
      price: "199,00 MT",
      link: "https://wa.me/+258878795515?text=Ol%C3%A1+Revendedor%27d+ELITE.+Desejo+adquirir+o+livro+GUATILHOS+MENTAIS!!%F0%9F%98%81+"
    },
    {
      title: "Manual de Persuasão",
      desc: "Domine negociações de alto nível e influencie decisões críticas com estratégias de elite.",
      price: "199,00 MT",
      link: "https://wa.me/+258878795515?text=Ol%C3%A1+Revendedor%27d+ELITE.+Desejo+adquirir+o+livro+MANUAL+DE+PERSUÃO+DO+FBI%F0%9F%98%81+"
    }
  ];

  return (
    <>
      {/* FUTURE MODULES */}
      <Section className="bg-dark-bg border-b border-white/5">
        <div className="glass rounded-3xl p-8 md:p-16 border border-neon-turquoise/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-neon-turquoise/10 blur-[80px] rounded-full pointer-events-none"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
                <div>
                    <div className="flex items-center gap-2 text-neon-turquoise mb-4">
                        <Clock className="w-5 h-5 animate-pulse" />
                        <span className="font-bold uppercase tracking-widest text-sm">Em Breve</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Garanta Sua Vaga: <br/>
                        <span className="text-gray-400">Reserve os Próximos Módulos.</span>
                    </h2>
                    <p className="text-gray-300 text-lg mb-8">
                        Os próximos capítulos da sua evolução comunicativa estão chegando. A "Tríade da Liderança" e o "Protocolo de Negociação Sênior" serão lançados em breve. Reserve agora para acesso antecipado.
                    </p>
                    <NeonButton variant="secondary" onClick={() => window.open(reserveLink, '_blank')}>Reservar Próximos E-books</NeonButton>
                </div>
                <div className="relative">
                    {/* Futuristic Character Placeholder */}
                     <div className="w-full aspect-video bg-gray-900 rounded-lg overflow-hidden border border-white/10 relative">
                        <img 
                            src="https://picsum.photos/seed/tech/800/600?grayscale" 
                            alt="Future Vision" 
                            className="w-full h-full object-cover opacity-60 mix-blend-overlay"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-4xl font-black text-white/10 uppercase tracking-[1em]">Future</span>
                        </div>
                     </div>
                </div>
            </div>
        </div>
      </Section>

      {/* RELATED STORE */}
      <Section className="bg-black">
        <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-white">Biblioteca de <span className="text-neon-green">Poder</span></h2>
            <p className="text-gray-500">Ferramentas adicionais para seu arsenal.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((prod, i) => (
                <div key={i} className="group relative bg-dark-card border border-white/5 hover:border-neon-green/30 rounded-xl p-8 transition-all duration-300 hover:-translate-y-2">
                    <div className="absolute top-4 right-4 text-gray-600 group-hover:text-neon-green transition-colors">
                        <BookOpen className="w-6 h-6" />
                    </div>
                    <div className="w-12 h-1 bg-neon-green mb-6 rounded-full group-hover:w-24 transition-all"></div>
                    <h3 className="text-xl font-bold text-white mb-3 min-h-[3.5rem]">{prod.title}</h3>
                    <p className="text-gray-400 text-sm mb-6 min-h-[3rem]">{prod.desc}</p>
                    <div className="flex items-center justify-between mt-auto">
                        <span className="text-white font-bold">{prod.price}</span>
                        <button 
                          className="text-neon-green text-sm font-bold uppercase hover:underline"
                          onClick={() => window.open(prod.link, '_blank')}
                        >
                          Comprar
                        </button>
                    </div>
                </div>
            ))}
        </div>
      </Section>
    </>
  );
};

export default Store;