import React, { useState, Suspense, lazy, ErrorInfo, ReactNode, Component } from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import ProductShowcase from './components/ProductShowcase';
import ComboOffer from './components/ComboOffer';
import Store from './components/Store';
import Testimonials from './components/Testimonials';
import Guarantee from './components/Guarantee';
import Footer from './components/Footer';

// Code Splitting / Lazy Loading for optimization
const Volume01Page = lazy(() => import('./components/Volume01Page'));

interface ErrorBoundaryProps {
  children?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

// Error Boundary to catch crashes
class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = {
    hasError: false,
    error: null
  };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4 text-center">
          <h2 className="text-2xl font-bold text-red-500 mb-4">Algo deu errado.</h2>
          <p className="text-gray-400 mb-4">Não foi possível carregar o conteúdo.</p>
          <pre className="bg-gray-900 p-4 rounded text-xs text-left overflow-auto max-w-full">
            {this.state.error?.toString()}
          </pre>
          <button 
            onClick={() => window.location.reload()}
            className="mt-6 px-6 py-2 bg-neon-green text-black font-bold rounded hover:bg-white transition-colors"
          >
            Recarregar Página
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  // Navigation State: 'home' | 'volume01'
  const [currentPage, setCurrentPage] = useState<'home' | 'volume01'>('home');
  
  // Animation/Scroll trigger for home page interactions
  const [offerHighlightTrigger, setOfferHighlightTrigger] = useState(0);

  const handleBuy = () => {
    window.open("https://wa.me/+258878795515?text=Olá+Revendedor'd+ELITE.+Desejo+adquirir+o+COMUNICAÇÃO+DE+ELITE!!😁+", '_blank');
  };

  const handleScrollToOffer = () => {
    setOfferHighlightTrigger(prev => prev + 1);
  };

  const navigateToVolume01 = () => {
    setCurrentPage('volume01');
  };

  const navigateToHome = () => {
    setCurrentPage('home');
  };

  // Render Volume 01 Page if state matches
  if (currentPage === 'volume01') {
    return (
      <ErrorBoundary>
        <Suspense fallback={
          <div className="min-h-screen bg-black flex flex-col items-center justify-center">
            <div className="loader mb-4"></div>
            <p className="text-neon-green text-sm tracking-widest uppercase animate-pulse">Carregando...</p>
          </div>
        }>
          <Volume01Page onBack={navigateToHome} />
        </Suspense>
      </ErrorBoundary>
    );
  }

  // Render Home Page
  return (
    <ErrorBoundary>
      <div className="bg-dark-bg min-h-screen text-white font-sans selection:bg-neon-green selection:text-black overflow-x-hidden animate-in fade-in">
        <Hero onCtaClick={handleScrollToOffer} />
        <Features />
        
        {/* Passed the navigation handler to ProductShowcase */}
        <ProductShowcase onViewVolume01={navigateToVolume01} />
        
        {/* Passamos o valor do gatilho para o componente da oferta */}
        <ComboOffer highlightTrigger={offerHighlightTrigger} />
        
        <Store />
        <Testimonials />
        
        {/* Guarantee section scrolls to combo offer */}
        <Guarantee onCtaClick={handleScrollToOffer} />
        
        <Footer />
        
        {/* Mobile Sticky CTA */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-black/90 backdrop-blur-lg border-t border-white/10 z-50 md:hidden">
           <button 
             onClick={handleBuy}
             className="w-full bg-neon-green text-black font-bold uppercase py-3 rounded shadow-neon"
           >
              Comprar Agora
           </button>
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default App;