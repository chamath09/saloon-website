import { motion } from 'motion/react';
import { Instagram } from 'lucide-react';

const instaImages = [
  'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1935&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1522337360705-8b13d5230394?q=80&w=2074&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1596462502278-27bfdd403348?q=80&w=2066&auto=format&fit=crop',
];

export default function InstagramGallery() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-12">
          <Instagram className="text-rose-gold mb-4" size={32} />
          <h2 className="text-3xl md:text-4xl font-display text-charcoal text-center">Follow Our Beauty Journey</h2>
          <a href="#" className="text-rose-gold mt-2 font-medium hover:underline">@luxebeauty_salon</a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {instaImages.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group overflow-hidden aspect-square"
            >
              <img
                src={src}
                alt="Instagram post"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Instagram className="text-white" size={24} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
