
import { Heart, Sparkles, UserCheck, Brush } from 'lucide-react';
import { motion } from 'motion/react';

const features = [
  {
    icon: <Heart size={32} className="text-brand-accent" />,
    title: "Made with care",
    description: "Every stitch is placed with precision and attention to detail, ensuring a beautiful result."
  },
  {
    icon: <Sparkles size={32} className="text-brand-accent" />,
    title: "Quality you can see",
    description: "We use only the finest threads and materials for long-lasting, vibrant designs."
  },
  {
    icon: <UserCheck size={32} className="text-brand-accent" />,
    title: "Made for you",
    description: "Your vision is our priority. We work closely with you to perfect your custom design."
  },
  {
    icon: <Brush size={32} className="text-brand-accent" />,
    title: "Let's create",
    description: "From single pieces to bulk orders, we're ready to bring your ideas to life."
  }
];

const Features = () => {
  return (
    <section className="bg-white py-20 px-8 md:px-12 lg:px-24">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          visible: { transition: { staggerChildren: 0.15 } }
        }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
      >
        {features.map((feature, index) => (
          <motion.div 
            key={index} 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
            }}
            className="flex flex-col items-center text-center space-y-4"
          >
            <div className="w-16 h-16 rounded-full bg-brand-bg flex items-center justify-center">
              {feature.icon}
            </div>
            <h3 className="font-serif text-2xl text-brand-primary">{feature.title}</h3>
            <p className="text-brand-muted leading-relaxed">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Features;
