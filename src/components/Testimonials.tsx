import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

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
  {
    name: 'Kavindi Jayasuriya',
    role: 'Facial',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop',
    text: 'The facial treatment was incredibly relaxing. My skin is glowing! Will definitely come back for more sessions.',
  },
  {
    name: 'Roshni De Silva',
    role: 'Nail Art',
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=2070&auto=format&fit=crop',
    text: 'Absolutely love my nails! The attention to detail is superb. The best nail art I have ever had.',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-rose-gold font-medium tracking-widest uppercase text-sm">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-display text-charcoal mt-2">Happy Clients</h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true, dynamicBullets: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="!pb-16" // Increased padding for pagination
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="h-auto">
                <div className="bg-white p-8 md:p-10 rounded-2xl h-full flex flex-col shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group">
                  {/* Decorative Quote Icon */}
                  <Quote className="absolute top-6 right-6 text-rose-gold/10 w-16 h-16 transform -scale-x-100 group-hover:scale-110 transition-transform duration-500" />
                  
                  <div className="flex items-center gap-1 text-champagne-gold mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} fill="currentColor" className="stroke-none" />
                    ))}
                  </div>

                  <p className="text-gray-600 text-lg leading-relaxed italic mb-8 flex-grow relative z-10">
                    "{testimonial.text}"
                  </p>

                  <div className="flex items-center gap-4 mt-auto pt-6 border-t border-gray-100">
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-rose-gold/20 flex-shrink-0">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <h4 className="font-display text-lg text-charcoal font-medium">{testimonial.name}</h4>
                      <p className="text-rose-gold text-xs uppercase tracking-wider font-medium">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
