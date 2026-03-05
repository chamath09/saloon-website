import { motion } from 'motion/react';
import { Star, Award, Smile, Users, Home, ShieldCheck } from 'lucide-react';

const features = [
  { icon: Users, title: 'Professional Artists', desc: 'Highly trained and experienced beauty experts.' },
  { icon: Award, title: 'Premium Products', desc: 'We use only the best international brands.' },
  { icon: Smile, title: 'Friendly Service', desc: 'Warm and welcoming staff dedicated to you.' },
  { icon: Star, title: 'Bridal Specialists', desc: 'Experts in traditional and modern bridal looks.' },
  { icon: Home, title: 'Modern Environment', desc: 'Clean, luxurious, and relaxing atmosphere.' },
  { icon: ShieldCheck, title: 'Hygiene & Safety', desc: 'Strict sanitization protocols for your safety.' },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-rose-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display text-charcoal">Why Choose Us</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We pride ourselves on delivering exceptional quality and service to make you look and feel your absolute best.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 bg-rose-gold/10 rounded-full flex items-center justify-center text-rose-gold mb-4">
                <feature.icon size={32} />
              </div>
              <h3 className="text-lg font-semibold text-charcoal mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
