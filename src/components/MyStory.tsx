import { motion } from 'motion/react';

const portfolioItems = [
  { id: 2, title: 'Auto Detailing Merch', image: '/work-2.png', aspect: 'aspect-[3/4]' },
  { id: 3, title: 'Business Apparel', image: '/work-3.png', aspect: 'aspect-[4/5]' },
  { id: 4, title: 'Golf Shirts', image: '/work-4.png', aspect: 'aspect-[3/4]' },
  { id: 5, title: 'Market Uniforms', image: '/work-5.png', aspect: 'aspect-[4/5]' },
  { id: 6, title: 'Market Polos', image: '/work-6.png', aspect: 'aspect-[3/4]' },
  { id: 7, title: 'Auto Detailing Tees', image: '/work-7.png', aspect: 'aspect-[3/4]' },
  { id: 8, title: 'Red Merch', image: '/work-8.png', aspect: 'aspect-[4/5]' },
];

const MyStory = () => {
  return (
    <section id="mystory" className="py-20 px-8 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
        
        {/* Left Column: My Story */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 space-y-8"
        >
          <h2 className="text-sm tracking-[0.2em] uppercase font-bold text-brand-accent">My Story</h2>
          <div className="relative w-full h-[500px] rounded-tl-[80px] rounded-br-[80px] overflow-hidden bg-brand-border">
             <img src="/liz-portrait.jpg" alt="Liz - Founder of Threaded" className="w-full h-full object-cover object-[center_top]" />
          </div>
          <div className="space-y-6 text-brand-primary">
            <h3 className="font-script text-5xl text-brand-accent">Hi, I'm Liztbed!</h3>
            <p className="text-brand-muted text-lg leading-relaxed">
              I’m a 24-year-old embroidery artist based in Cache Valley. I started my business last year after discovering my deep appreciation for clothing and wanting to create custom pieces that people truly love and feel connected to.
            </p>
            <p className="text-brand-muted text-lg leading-relaxed">
              Every design I make is special, personal, and stitched with care. I’m so grateful for everyone who helped me get started and for those who trusted my work from the very beginning. Your support means everything to me. 👏🏽🥹
            </p>
            <p className="text-brand-muted text-lg leading-relaxed">
              Proudly serving Cache Valley and surrounding areas. 🏡♥️
            </p>
          </div>
        </motion.div>

        {/* Right Column: Featured Work */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="flex-[1.5] space-y-8" 
          id="work"
        >
          <h2 className="text-sm tracking-[0.2em] uppercase font-bold text-brand-accent">Featured Work</h2>
          
          <div className="columns-1 md:columns-2 gap-6 space-y-6">
            {portfolioItems.map((item) => (
              <motion.div 
                key={item.id} 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                }}
                className="relative group cursor-pointer break-inside-avoid"
              >
                <div className={`w-full ${item.aspect} bg-brand-border rounded-2xl overflow-hidden`}>
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-center justify-center">
                  <span className="text-white font-serif text-2xl tracking-wide">{item.title}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default MyStory;
