import { motion } from 'motion/react';
import { Sparkles, Scissors, Gem, Heart, Droplet, Palette } from 'lucide-react';

const services = [
  { icon: Heart, label: 'Bridal Dressing' },
  { icon: Scissors, label: 'Hair Styling' },
  { icon: Gem, label: 'Nail Art' },
  { icon: Sparkles, label: 'Facial Treatments' },
  { icon: Droplet, label: 'Skin Care' },
  { icon: Palette, label: 'Makeup Services' },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-soft-beige/50 -skew-x-12 translate-x-1/4 z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
              <img
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1974&auto=format&fit=crop"
                alt="Beauty Salon Interior"
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-2/3 h-2/3 bg-rose-gold/20 rounded-2xl -z-10" />
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-champagne-gold/10 rounded-full blur-3xl -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-rose-gold font-medium tracking-widest uppercase text-sm">About Us</span>
            <h2 className="text-4xl md:text-5xl font-display text-charcoal mt-2 mb-6 leading-tight">
              Where Beauty Meets <span className="text-rose-gold italic">Elegance</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Welcome to Luxe Beauty Salon, your sanctuary for relaxation and rejuvenation. 
              Our professional stylists and beauty experts are dedicated to providing you with 
              exceptional bridal dressing, makeup, hair styling, nail art, and beauty treatments 
              designed to enhance your natural beauty and boost your confidence.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="flex flex-col items-center text-center p-4 bg-soft-beige rounded-xl hover:shadow-md transition-shadow"
                >
                  <div className="bg-white p-3 rounded-full mb-3 text-rose-gold shadow-sm">
                    <service.icon size={24} />
                  </div>
                  <span className="text-sm font-medium text-charcoal">{service.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
