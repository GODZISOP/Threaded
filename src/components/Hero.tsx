import { motion } from 'motion/react';

const Hero = () => {
  return (
    <section id="home" className="flex flex-col lg:flex-row items-center justify-between px-8 md:px-12 lg:px-24 py-16 lg:py-24 gap-12 min-h-[80vh]">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex-1 space-y-6 max-w-xl pr-4"
      >
        <h1 className="flex flex-col text-brand-primary">
          <span className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1]">Custom embroidery</span>
          <span className="font-script text-6xl md:text-7xl lg:text-8xl -mt-2 md:-mt-6 pr-4 text-brand-accent">made just for you.</span>
        </h1>
        <p className="text-lg text-brand-primary/80 leading-relaxed font-medium">
          At THREADED, I bring your ideas to life one stitch at a time. Whether it's a personal project, business logo, gifts, or something completely unique, I'd love to bring your vision to life.
        </p>
        <div className="flex pt-6">
          <a href="#request" className="bg-brand-primary text-brand-bg px-8 py-4 rounded-full text-xs font-bold tracking-[0.2em] uppercase hover:bg-brand-primary/90 transition-colors shadow-sm">
            REQUEST A PROJECT
          </a>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="flex-[1.2] w-full h-[300px] md:h-[400px] lg:h-[600px] relative mt-8 lg:mt-0"
      >
        <div className="absolute inset-0 bg-brand-border rounded-[40px] overflow-hidden shadow-xl">
          <img src="/hero-image.jpg" alt="Embroidery Machine" className="w-full h-full object-cover" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
