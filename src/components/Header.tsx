import logoImage from '../assets/image.png';

const Header = () => {
  return (
    <header className="w-full py-6 px-8 md:px-12 flex items-center justify-between sticky top-0 bg-brand-bg/90 backdrop-blur-sm z-50 border-b border-brand-border">
      <div className="flex items-center gap-2">
        <a href="#home" className="flex items-center">
          <img src={logoImage} alt="Threaded Logo" className="h-20 md:h-24 w-auto object-contain rounded-2xl shadow-sm" />
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

      <button className="lg:hidden text-brand-primary">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
      </button>
    </header>
  );
};

export default Header;
