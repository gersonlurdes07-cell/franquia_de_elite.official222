import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/5 py-12 text-sm text-gray-600">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
            <h4 className="text-white font-bold uppercase tracking-widest mb-4 text-lg">Protocolo<span className="text-neon-green">Influence</span></h4>
            <p className="max-w-xs mb-4">A franquia definitiva para quem busca dominar a arte da influência e comunicação estratégica.</p>
            <p>&copy; {new Date().getFullYear()} Todos os direitos reservados.</p>
        </div>
        
        <div>
            <h5 className="text-white font-bold mb-4">Links Úteis</h5>
            <ul className="space-y-2">
                <li><a href="#" className="hover:text-neon-green transition-colors">Login Aluno</a></li>
                <li><a href="#" className="hover:text-neon-green transition-colors">Suporte</a></li>
                <li><a href="#" className="hover:text-neon-green transition-colors">FAQ</a></li>
            </ul>
        </div>

        <div>
            <h5 className="text-white font-bold mb-4">Legal</h5>
            <ul className="space-y-2">
                <li><a href="#" className="hover:text-neon-green transition-colors">Política de Privacidade</a></li>
                <li><a href="#" className="hover:text-neon-green transition-colors">Termos de Uso</a></li>
            </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;