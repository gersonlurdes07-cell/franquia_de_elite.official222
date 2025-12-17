import React, { useEffect } from 'react';
import Section from './ui/Section';
import NeonButton from './ui/NeonButton';
import { ArrowLeft, BookOpen, Activity, Fingerprint, Film, Globe, Ghost } from 'lucide-react';

interface Volume01PageProps {
  onBack: () => void;
}

const Volume01Page: React.FC<Volume01PageProps> = ({ onBack }) => {
  const whatsappLink = "https://wa.me/+258878795515?text=Olá+Revendedor'd+ELITE.+Desejo+adquirir+o+COMUNICAÇÃO+DE+ELITE!!😁+";

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const modules = [
    {
      title: "Módulo 1: A Comunicação que Muda Tudo",
      desc: "Domine o código da primeira impressão, clareza e autoridade. A chave mestra para hackear a percepção de valor instantaneamente e ser respeitado antes mesmo de terminar a primeira frase.",
      icon: <Activity className="w-6 h-6 text-neon-green" />
    },
    {
      title: "Módulo 2: Influência Inquestionável",
      desc: "Aprenda a influenciar no subtexto. Comandos emocionais, linguagem corporal de poder e a fórmula de 5 passos da persuasão para assumir o controle da interação.",
      icon: <Fingerprint className="w-6 h-6 text-neon-green" />
    },
    {
      title: "Módulo 3: Persuasão Avançada",
      desc: "Controle a narrativa. Use storytelling estratégico para moldar a percepção da realidade e vender qualquer ideia, transformando ceticismo em aceitação.",
      icon: <Film className="w-6 h-6 text-neon-green" />
    },
    {
      title: "Módulo 4: Arquitetura Social",
      desc: "Entenda a Matrix Social. Leia hierarquias invisíveis, construa capital social e manipule o status a seu favor para se posicionar sempre no topo.",
      icon: <Globe className="w-6 h-6 text-neon-green" />
    },
    {
      title: "Módulo 5: Arquitetura Instintiva",
      desc: "O nível mais profundo. Ative gatilhos instintivos de cooperação e gere conexão automática antes da lógica, atingindo o subconsciente do interlocutor.",
      icon: <Ghost className="w-6 h-6 text-neon-green" />
    }
  ];

  return (
    <div className="min-h-screen bg-dark-bg text-white overflow-x-hidden">
      <style>{`
        @keyframes cinematicSlideUp {
          0% {
            opacity: 0;
            transform: translateY(40px) scale(0.98);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .animate-enter {
          opacity: 0; /* Start hidden */
          animation: cinematicSlideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-fade {
          opacity: 0;
          animation: fadeIn 1s ease-out forwards;
        }

        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-400 { animation-delay: 400ms; }
        .delay-500 { animation-delay: 500ms; }
      `}</style>
      
      {/* Navbar simplificada */}
      <div className="fixed top-0 left-0 w-full p-6 z-50 flex items-center bg-black/80 backdrop-blur-md border-b border-white/5 animate-fade">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-gray-400 hover:text-neon-green transition-colors uppercase tracking-widest text-sm font-bold group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Voltar para Home
        </button>
      </div>

      {/* Hero do Produto */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-green/10 blur-[120px] rounded-full pointer-events-none animate-fade" />
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Texto Hero */}
          <div className="order-2 lg:order-1 animate-enter delay-100">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-neon-green/30 rounded-full bg-neon-green/5 backdrop-blur-md mb-6">
               <BookOpen className="w-4 h-4 text-neon-green" />
               <span className="text-neon-green text-xs font-bold tracking-[0.2em] uppercase">Volume 01 Detalhado</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              O Código da <br/>
              <span className="text-neon-green">Primeira Impressão</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed border-l-4 border-neon-green pl-6">
              Este não é um livro de etiqueta. É um manual técnico de engenharia social para quem precisa ser respeitado instantaneamente.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <NeonButton onClick={() => window.open(whatsappLink, '_blank')}>
                Adquirir Volume 01 Agora
              </NeonButton>
            </div>
          </div>

          {/* Imagem Hero */}
          <div className="order-1 lg:order-2 flex justify-center relative animate-enter delay-200">
             <div className="absolute inset-0 bg-neon-green/20 blur-3xl rounded-full"></div>
             <img 
                src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=1200&auto=format&fit=crop" 
                className="relative z-10 w-full max-w-sm rounded-lg shadow-[0_0_50px_rgba(0,255,136,0.3)] border border-neon-green/30 transform hover:scale-105 transition-transform duration-700"
                alt="Capa Volume 01"
             />
          </div>
        </div>
      </section>

      {/* Grid de Módulos */}
      <Section className="bg-dark-card border-y border-white/5 animate-enter delay-300">
        <div className="text-center mb-16">
            <span className="text-neon-green font-bold tracking-widest uppercase text-sm mb-2 block">Módulos Disponíveis</span>
            <h2 className="text-3xl font-bold text-white mb-4">O Que Você Vai <span className="text-neon-green">Dominar</span></h2>
            <p className="text-gray-400">Conteúdo programático completo.</p>
        </div>

        {/* Responsive Grid for 5 Modules */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {modules.map((mod, i) => (
                <div key={i} className={`group p-8 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-neon-green/50 hover:bg-white/[0.08] transition-all duration-300 animate-enter shadow-lg ${i === modules.length - 1 ? 'md:col-span-2 md:w-2/3 md:mx-auto' : ''}`} style={{ animationDelay: `${300 + (i * 100)}ms` }}>
                    <div className="flex flex-col sm:flex-row gap-6 items-start">
                        <div className="p-4 bg-black rounded-lg border border-neon-green/20 group-hover:border-neon-green shadow-[0_0_15px_rgba(0,255,136,0.1)] transition-all shrink-0">
                            {mod.icon}
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-green transition-colors">{mod.title}</h3>
                            <p className="text-gray-300 leading-relaxed text-sm md:text-base">{mod.desc}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </Section>

      {/* Final CTA */}
      <section className="py-24 px-4 text-center bg-black relative overflow-hidden animate-enter delay-500">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
                Pronto para assumir o controle?
            </h2>
            <p className="text-gray-400 mb-10 text-lg">
                O conhecimento contido nestas páginas vale mais do que anos de tentativas e erros.
            </p>
            <NeonButton 
                variant="primary" 
                className="text-lg px-10 py-5 w-full md:w-auto shadow-[0_0_30px_rgba(0,255,136,0.4)] animate-pulse"
                onClick={() => window.open(whatsappLink, '_blank')}
            >
                QUERO O VOLUME 01 POR 197,00 MT
            </NeonButton>
            <p className="mt-6 text-sm text-gray-500">Acesso imediato após confirmação.</p>
        </div>
      </section>

    </div>
  );
};

export default Volume01Page;