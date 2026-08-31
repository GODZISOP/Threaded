
import { motion } from 'motion/react';

const RequestProject = () => {
  return (
    <section id="request" className="bg-white py-24 px-8 md:px-12 lg:px-24 border-t border-brand-border overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        
        {/* Left Column: Info */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 space-y-8"
        >
          <h2 className="font-serif text-5xl text-brand-primary leading-tight">
            Let's bring your idea to life.
          </h2>
          <p className="text-lg text-brand-muted leading-relaxed">
            Ready to get started? Fill out the form with your project details, and I'll get back to you within 48 hours with a quote and next steps.
          </p>
          
          <div className="space-y-6 pt-8">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-brand-bg flex items-center justify-center font-bold text-brand-accent shrink-0">1</div>
              <div>
                <h4 className="font-serif text-xl font-semibold mb-2">Submit your idea</h4>
                <p className="text-brand-muted">Provide as much detail as possible, including inspiration pictures and placement preferences.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-brand-bg flex items-center justify-center font-bold text-brand-accent shrink-0">2</div>
              <div>
                <h4 className="font-serif text-xl font-semibold mb-2">Review & Approve</h4>
                <p className="text-brand-muted">I'll send over a digital mockup and pricing for your approval before stitching begins.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-brand-bg flex items-center justify-center font-bold text-brand-accent shrink-0">3</div>
              <div>
                <h4 className="font-serif text-xl font-semibold mb-2">Stitching Magic</h4>
                <p className="text-brand-muted">Once approved, your custom piece is carefully embroidered and shipped right to your door.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: The Form */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex-[1.2] bg-brand-bg p-8 md:p-12 rounded-[40px] shadow-sm"
        >
          <form className="space-y-6 text-brand-primary">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-semibold uppercase tracking-wider">Name</label>
                <input type="text" className="w-full p-4 rounded-lg border border-brand-border bg-white focus:outline-none focus:ring-2 focus:ring-brand-accent transition-shadow" placeholder="Jane Doe" required />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-semibold uppercase tracking-wider">Email</label>
                <input type="email" className="w-full p-4 rounded-lg border border-brand-border bg-white focus:outline-none focus:ring-2 focus:ring-brand-accent transition-shadow" placeholder="jane@example.com" required />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold uppercase tracking-wider">Phone</label>
              <input type="tel" className="w-full p-4 rounded-lg border border-brand-border bg-white focus:outline-none focus:ring-2 focus:ring-brand-accent transition-shadow" placeholder="(555) 000-0000" />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold uppercase tracking-wider">What are you wanting embroidered?</label>
              <textarea rows={3} className="w-full p-4 rounded-lg border border-brand-border bg-white focus:outline-none focus:ring-2 focus:ring-brand-accent transition-shadow" placeholder="Describe your design, logo, or text..." required></textarea>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-semibold uppercase tracking-wider">Quantity</label>
                <input type="number" min="1" className="w-full p-4 rounded-lg border border-brand-border bg-white focus:outline-none focus:ring-2 focus:ring-brand-accent transition-shadow" placeholder="1" required />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="block text-sm font-semibold uppercase tracking-wider">Garment/Item</label>
                <input type="text" className="w-full p-4 rounded-lg border border-brand-border bg-white focus:outline-none focus:ring-2 focus:ring-brand-accent transition-shadow" placeholder="e.g., Gildan Hoodie, Denim Jacket" required />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold uppercase tracking-wider">Desired Size</label>
              <input type="text" className="w-full p-4 rounded-lg border border-brand-border bg-white focus:outline-none focus:ring-2 focus:ring-brand-accent transition-shadow" placeholder="e.g., 3x3 inches, standard left chest" required />
            </div>

            <div className="space-y-4">
              <label className="block text-sm font-semibold uppercase tracking-wider">Placement</label>
              <div className="grid grid-cols-2 gap-4">
                {['Left chest', 'Center', 'Sleeve', 'Hat', 'Other'].map((placement) => (
                  <label key={placement} className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" className="w-5 h-5 rounded border-brand-border text-brand-accent focus:ring-brand-accent accent-brand-accent cursor-pointer" />
                    <span className="text-brand-muted group-hover:text-brand-primary transition-colors">{placement}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-2 pt-4">
               <label className="block text-sm font-semibold uppercase tracking-wider">Upload Inspiration / Logos</label>
               <div className="w-full border-2 border-dashed border-brand-border rounded-xl p-8 text-center bg-white hover:bg-brand-bg transition-colors cursor-pointer">
                 <p className="text-brand-muted mb-2">Drag and drop your files here, or click to browse.</p>
                 <span className="text-xs text-brand-muted/70">Supports JPG, PNG, PDF, AI, EPS</span>
               </div>
            </div>

            <button type="submit" className="w-full bg-brand-primary text-brand-bg py-5 rounded-lg font-bold tracking-widest uppercase hover:bg-brand-accent transition-colors mt-8">
              Submit Request
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
};

export default RequestProject;
