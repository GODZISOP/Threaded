

const Footer = () => {
  return (
    <footer className="bg-brand-primary text-brand-bg py-12 px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full border border-brand-bg flex items-center justify-center">
            <span className="font-serif text-lg italic font-bold">T</span>
          </div>
          <span className="text-xl font-serif tracking-widest uppercase font-semibold">Threaded</span>
        </div>

        <nav className="flex flex-wrap justify-center gap-6 text-sm tracking-widest uppercase font-medium text-brand-bg/80">
          <a href="#home" className="hover:text-brand-bg transition-colors">Home</a>
          <a href="#mystory" className="hover:text-brand-bg transition-colors">My Story</a>
          <a href="#work" className="hover:text-brand-bg transition-colors">Work</a>
          <a href="#request" className="hover:text-brand-bg transition-colors">Request a Project</a>
        </nav>

        <div className="text-brand-bg/60 text-sm">
          &copy; {new Date().getFullYear()} Threaded. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
