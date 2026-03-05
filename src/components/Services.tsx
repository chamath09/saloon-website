import { motion } from 'motion/react';

const services = [
  {
    title: 'Bridal Makeup',
    description: 'Complete bridal makeover including hair, makeup, and dressing for your big day.',
    price: 'From $250',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2071&auto=format&fit=crop',
  },
  {
    title: 'Party Makeup',
    description: 'Glamorous makeup looks for parties, proms, and special occasions.',
    price: 'From $80',
    image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Hair Styling',
    description: 'Professional cuts, coloring, styling, and treatments for all hair types.',
    price: 'From $50',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2069&auto=format&fit=crop',
  },
  {
    title: 'Nail Art',
    description: 'Manicures, pedicures, and custom nail art designs.',
    price: 'From $40',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1974&auto=format&fit=crop',
  },
  {
    title: 'Facial & Skin Care',
    description: 'Rejuvenating facials and skin treatments for a glowing complexion.',
    price: 'From $70',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Eyebrow Threading',
    description: 'Precise shaping and threading for perfectly defined brows.',
    price: 'From $15',
    image: 'https://images.unsplash.com/photo-1522337360705-8b13d5230394?q=80&w=2074&auto=format&fit=crop',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-soft-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-rose-gold font-medium tracking-widest uppercase text-sm">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-display text-charcoal mt-2">Exclusive Treatments</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              </div>
              
              <div className="p-8">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="text-2xl font-display text-charcoal group-hover:text-rose-gold transition-colors">
                    {service.title}
                  </h3>
                  <span className="text-rose-gold font-semibold">{service.price}</span>
                </div>
                <p className="text-gray-600 mb-6 line-clamp-2">{service.description}</p>
                <button className="w-full py-3 border border-rose-gold text-rose-gold rounded-full font-medium hover:bg-rose-gold hover:text-white transition-all uppercase text-sm tracking-wider">
                  Book Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
