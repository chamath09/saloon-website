import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Perera',
    role: 'Bride',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop',
    text: 'Amazing bridal dressing and very friendly service. The team made me feel like a princess on my big day. Highly recommended!',
  },
  {
    name: 'Nimali Fernando',
    role: 'Party Makeup',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop',
    text: 'I loved my makeup! It was natural yet glamorous, exactly what I wanted. The staff is so professional and kind.',
  },
  {
    name: 'Dilani Silva',
    role: 'Hair Treatment',
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1887&auto=format&fit=crop',
    text: 'Best salon in town for hair treatments. My hair feels so healthy and shiny. Thank you Luxe Beauty!',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-rose-gold font-medium tracking-widest uppercase text-sm">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-display text-charcoal mt-2">Happy Clients</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-soft-beige p-8 rounded-2xl relative"
            >
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-md">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="flex justify-center mb-4 text-champagne-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-600 text-center italic mb-6">"{testimonial.text}"</p>
              <div className="text-center">
                <h4 className="font-display text-xl text-charcoal">{testimonial.name}</h4>
                <p className="text-rose-gold text-sm uppercase tracking-wide">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
