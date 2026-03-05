import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import ThreeBackground from './ThreeBackground';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  // Removed opacity transform to prevent white-on-white text issue during scroll

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5 + i * 0.1,
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    }),
  };

  return (
    <section ref={ref} id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background Image */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0 bg-gray-900"
      >
        <img
          src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop"
          alt="Beautiful Bride"
          className="w-full h-full object-cover opacity-90 scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/50" />
      </motion.div>

      {/* Three.js Background Animation */}
      <ThreeBackground />

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-6 inline-block"
        >
          <span className="text-rose-gold uppercase tracking-[0.3em] text-sm md:text-base font-medium border-b border-rose-gold/50 pb-2">
            Welcome to Luxe Beauty
          </span>
        </motion.div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display text-white mb-8 leading-tight">
          <motion.span
            custom={0}
            initial="hidden"
            animate="visible"
            variants={titleVariants}
            className="block"
          >
            Luxury Beauty Salon
          </motion.span>
          <motion.span
            custom={1}
            initial="hidden"
            animate="visible"
            variants={titleVariants}
            className="block italic font-light text-rose-gold mt-2"
          >
            & Bridal Studio
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-white/80 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Experience the art of elegance with our professional bridal dressing, makeup, and hair styling services tailored just for you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#booking"
            className="bg-rose-gold text-white px-10 py-4 rounded-full font-medium hover:bg-rose-gold/90 transition-colors shadow-lg shadow-rose-gold/20 text-lg min-w-[200px]"
          >
            Book Appointment
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#services"
            className="bg-white/5 backdrop-blur-md text-white border border-white/20 px-10 py-4 rounded-full font-medium hover:bg-white/10 transition-colors text-lg min-w-[200px]"
          >
            View Services
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="text-white/50 w-8 h-8" />
        </motion.div>
      </motion.div>
    </section>
  );
}
