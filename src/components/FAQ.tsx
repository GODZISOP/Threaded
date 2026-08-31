import { useState } from 'react';
import { ChevronDown, Camera, Mail } from 'lucide-react';
import { motion } from 'motion/react';

const faqs = [
  {
    q: "How long does a custom project take?",
    a: "Our typical turnaround time is 2-3 weeks from design approval, depending on the complexity and quantity of your order."
  },
  {
    q: "Can I bring my own garments?",
    a: "Yes! While we offer a wide catalog of high-quality apparel, you are welcome to provide your own items. Please note that we must approve the material first to ensure it's suitable for embroidery."
  },
  {
    q: "Do you have a minimum order quantity?",
    a: "No order is too small! We happily accept single-item custom orders as well as large bulk runs for businesses and events."
  },
  {
    q: "How much does custom embroidery cost?",
    a: "Pricing depends on the stitch count (size and complexity of the design) and the quantity ordered. Fill out the project request form for an accurate quote!"
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 px-8 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        
        {/* Left Column: FAQ Accordion */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 space-y-8"
        >
          <h2 className="font-serif text-4xl text-brand-primary">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-brand-border pb-4">
                <button 
                  className="w-full flex items-center justify-between text-left py-4 focus:outline-none"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="font-serif text-xl font-medium text-brand-primary">{faq.q}</span>
                  <ChevronDown className={`transform transition-transform duration-300 text-brand-accent ${openIndex === index ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-brand-muted pb-4 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Connect */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex-1 space-y-8" 
          id="contact"
        >
          <h2 className="font-serif text-4xl text-brand-primary">Let's stay connected</h2>
          <p className="text-brand-muted text-lg">Follow along on social media to see behind the scenes and recent projects.</p>
          
          <div className="flex gap-4">
            <a href="#" className="flex items-center gap-2 bg-white border border-brand-border px-6 py-3 rounded-full hover:border-brand-accent transition-colors text-brand-primary">
              <Camera size={20} /> Instagram
            </a>
            <a href="mailto:hello@example.com" className="flex items-center gap-2 bg-white border border-brand-border px-6 py-3 rounded-full hover:border-brand-accent transition-colors text-brand-primary">
              <Mail size={20} /> Email me
            </a>
          </div>

          <div className="flex gap-4 h-[400px]">
            <div className="w-1/2 h-full rounded-2xl overflow-hidden flex-shrink-0 relative bg-brand-border/50">
               <img src="/work-1.png" alt="Custom Blanket" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="w-1/2 h-full rounded-2xl overflow-hidden flex-shrink-0 relative mt-12 bg-brand-border/50">
               <img src="/insta-bag.png" alt="Custom Embroidered Bags" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default FAQ;
