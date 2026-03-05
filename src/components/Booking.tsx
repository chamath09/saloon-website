import { motion } from 'motion/react';

export default function Booking() {
  return (
    <section id="booking" className="py-20 relative bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1974&auto=format&fit=crop')" }}>
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-display text-white mb-4">Book Your Appointment</h2>
            <p className="text-white/80">Ready to transform your look? Schedule your visit today.</p>
          </div>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-white text-sm font-medium ml-1">Name</label>
              <input type="text" className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-rose-gold" placeholder="Your Name" />
            </div>
            <div className="space-y-2">
              <label className="text-white text-sm font-medium ml-1">Phone</label>
              <input type="tel" className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-rose-gold" placeholder="Phone Number" />
            </div>
            <div className="space-y-2">
              <label className="text-white text-sm font-medium ml-1">Service</label>
              <select className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-rose-gold [&>option]:text-charcoal">
                <option value="">Select Service</option>
                <option value="bridal">Bridal Makeup</option>
                <option value="hair">Hair Styling</option>
                <option value="facial">Facial Treatment</option>
                <option value="nails">Nail Art</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-white text-sm font-medium ml-1">Date</label>
                <input type="date" className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-rose-gold" />
              </div>
              <div className="space-y-2">
                <label className="text-white text-sm font-medium ml-1">Time</label>
                <input type="time" className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-rose-gold" />
              </div>
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-white text-sm font-medium ml-1">Message</label>
              <textarea rows={4} className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-rose-gold" placeholder="Any special requests?"></textarea>
            </div>
            <div className="md:col-span-2 mt-4">
              <button type="submit" className="w-full bg-rose-gold text-white font-bold py-4 rounded-lg hover:bg-rose-gold/90 transition-colors shadow-lg uppercase tracking-wider">
                Book Your Appointment
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
