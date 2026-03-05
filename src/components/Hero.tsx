import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [sparkles, setSparkles] = useState<{ id: number; style: { left: string; top: string; width: string; height: string } }[]>([]);

  useEffect(() => {
    const newSparkles = [...Array(8)].map((_, i) => ({
      id: i,
      style: {
        left: Math.random() * 100 + '%',
        top: Math.random() * 100 + '%',
        width: Math.random() * 6 + 2 + 'px',
        height: Math.random() * 6 + 2 + 'px',
      },
    }));
    setSparkles(newSparkles);
  }, []);

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-gray-900">
        <img
          src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop"
          alt="Beautiful Bride"
          className="w-full h-full object-cover opacity-90"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
      </div>

      {/* Floating Sparkles Animation */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {sparkles.map((sparkle) => (
          <motion.div
            key={sparkle.id}
            className="absolute bg-white rounded-full opacity-60 blur-[1px]"
            initial={{
              scale: 0,
            }}
            animate={{
              y: [0, -100],
              opacity: [0, 0.8, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
            style={sparkle.style}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-block text-rose-gold tracking-[0.2em] uppercase font-medium mb-4 text-sm md:text-base bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full border border-white/20"
        >
          Welcome to Luxe Beauty
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display text-white mb-6 leading-tight"
        >
          Luxury Beauty Salon <br />
          <span className="italic font-light text-rose-gold">& Bridal Studio</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-white/90 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Professional bridal dressing, makeup, hair styling, and beauty services for your special moments.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#booking"
            className="bg-rose-gold text-white px-8 py-4 rounded-full font-medium hover:bg-rose-gold/90 transition-all shadow-lg hover:shadow-rose-gold/30 hover:-translate-y-1 text-lg"
          >
            Book Appointment
          </a>
          <a
            href="#services"
            className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-medium hover:bg-white/20 transition-all hover:-translate-y-1 text-lg"
          >
            View Services
          </a>
        </motion.div>
      </div>
    </section>
  );
}
