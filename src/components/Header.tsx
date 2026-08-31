import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import logoImage from '../assets/image.png';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full py-4 lg:py-6 px-6 md:px-12 flex items-center justify-between sticky top-0 bg-brand-bg/90 backdrop-blur-sm z-50 border-b border-brand-border">
      <div className="flex items-center gap-2">
        <a href="#home" className="flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
          <img src={logoImage} alt="Threaded Logo" className="h-14 md:h-16 w-auto object-contain mix-blend-multiply" />
        </a>
      </div>
      
      <nav className="hidden lg:flex items-center gap-8 text-sm tracking-wide font-medium">
        <a href="#home" className="hover:text-brand-accent transition-colors">HOME</a>
        <a href="#mystory" className="hover:text-brand-accent transition-colors">MY STORY</a>
        <a href="#work" className="hover:text-brand-accent transition-colors">MY WORK</a>
        <a href="#request" className="hover:text-brand-accent transition-colors">REQUEST A PROJECT</a>
        <a href="#faq" className="hover:text-brand-accent transition-colors">FAQ</a>
        <a href="#contact" className="hover:text-brand-accent transition-colors">CONTACT</a>
      </nav>

      <div className="hidden md:block">
        <a href="#request" className="bg-brand-primary text-brand-bg px-6 py-3 rounded text-sm tracking-wider uppercase font-medium hover:bg-brand-accent transition-colors">
          Request a Project
        </a>
      </div>

      <button 
        className="lg:hidden text-brand-primary p-2 z-50"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle mobile menu"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {isMobileMenuOpen ? (
            <>
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </>
          ) : (
            <>
              <line x1="4" x2="20" y1="12" y2="12"/>
              <line x1="4" x2="20" y1="6" y2="6"/>
              <line x1="4" x2="20" y1="18" y2="18"/>
            </>
          )}
        </svg>
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-brand-bg border-b border-brand-border shadow-lg lg:hidden flex flex-col p-6 gap-6"
          >
            <nav className="flex flex-col gap-6 text-lg tracking-wide font-medium text-brand-primary">
              <a href="#home" className="hover:text-brand-accent transition-colors border-b border-brand-border/50 pb-2" onClick={() => setIsMobileMenuOpen(false)}>HOME</a>
              <a href="#mystory" className="hover:text-brand-accent transition-colors border-b border-brand-border/50 pb-2" onClick={() => setIsMobileMenuOpen(false)}>MY STORY</a>
              <a href="#work" className="hover:text-brand-accent transition-colors border-b border-brand-border/50 pb-2" onClick={() => setIsMobileMenuOpen(false)}>MY WORK</a>
              <a href="#request" className="hover:text-brand-accent transition-colors border-b border-brand-border/50 pb-2" onClick={() => setIsMobileMenuOpen(false)}>REQUEST A PROJECT</a>
              <a href="#faq" className="hover:text-brand-accent transition-colors border-b border-brand-border/50 pb-2" onClick={() => setIsMobileMenuOpen(false)}>FAQ</a>
              <a href="#contact" className="hover:text-brand-accent transition-colors border-b border-brand-border/50 pb-2" onClick={() => setIsMobileMenuOpen(false)}>CONTACT</a>
            </nav>
            <div className="pt-2">
              <a href="#request" onClick={() => setIsMobileMenuOpen(false)} className="block text-center w-full bg-brand-primary text-brand-bg px-6 py-4 rounded text-sm tracking-wider uppercase font-medium hover:bg-brand-accent transition-colors">
                Request a Project
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
