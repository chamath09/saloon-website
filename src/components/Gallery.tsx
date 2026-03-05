import { motion } from 'motion/react';
import { useState } from 'react';
import { X } from 'lucide-react';

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2071&auto=format&fit=crop',
    category: 'Bridal',
    alt: 'Bridal Makeup',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2069&auto=format&fit=crop',
    category: 'Hair',
    alt: 'Elegant Hair Styling',
    span: 'col-span-1 row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1526045612212-70caf35c14df?q=80&w=2070&auto=format&fit=crop',
    category: 'Makeup',
    alt: 'Party Makeup',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1515688594390-b649af70d282?q=80&w=2095&auto=format&fit=crop',
    category: 'Bridal',
    alt: 'Wedding Dressing',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop',
    category: 'Makeup',
    alt: 'Before and After',
    span: 'col-span-1 row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop',
    category: 'Bridal',
    alt: 'Bridal Portrait',
    span: 'col-span-1 row-span-1',
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-rose-gold font-medium tracking-widest uppercase text-sm">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-display text-charcoal mt-2">Bridal & Beauty Gallery</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[200px]">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative group overflow-hidden rounded-xl cursor-pointer ${image.span} h-full`}
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-rose-gold font-medium uppercase tracking-wider text-sm">{image.category}</p>
                  <p className="text-white font-display text-xl">{image.alt}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-rose-gold transition-colors"
          >
            <X size={32} />
          </button>
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            src={selectedImage}
            alt="Gallery Preview"
            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
            referrerPolicy="no-referrer"
          />
        </div>
      )}
    </section>
  );
}
