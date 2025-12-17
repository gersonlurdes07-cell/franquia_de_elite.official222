import React from 'react';
import Section from './ui/Section';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Carlos F.",
      role: "Empresário",
      text: "Apliquei o Protocolo Alpha numa reunião de investimento. Em 10 minutos, o clima mudou completamente. Eles pararam de olhar o celular e começaram a me ouvir. Surreal.",
      img: "https://picsum.photos/seed/man1/100/100"
    },
    {
      name: "Marina R.",
      role: "Diretora Comercial",
      text: "Sempre fui tímida em negociações. O 'Código da Primeira Impressão' me deu uma armadura. Fechei o maior contrato do ano ontem. O retorno sobre o investimento foi infinito.",
      img: "https://picsum.photos/seed/woman1/100/100"
    },
    {
      name: "Jonas M.",
      role: "Advogado",
      text: "A clareza do material é impressionante. Não tem enrolação. É ler e aplicar. Minha postura no tribunal mudou, e meus resultados acompanharam.",
      img: "https://picsum.photos/seed/man2/100/100"
    }
  ];

  return (
    <Section className="bg-dark-bg">
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-16 text-white">
        Resultados <span className="text-neon-green">Reais</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((review, i) => (
            <div key={i} className="glass p-8 rounded-2xl relative">
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full overflow-hidden border border-neon-green">
                        <img src={review.img} alt={review.name} className="w-full h-full object-cover grayscale" />
                    </div>
                    <div>
                        <h4 className="text-white font-bold">{review.name}</h4>
                        <span className="text-neon-green text-xs uppercase tracking-wider">{review.role}</span>
                    </div>
                </div>
                <p className="text-gray-300 italic">"{review.text}"</p>
                <div className="absolute top-4 right-4 text-white/10 text-6xl font-serif leading-none">"</div>
            </div>
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;