import { motion } from 'motion/react';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-soft-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-rose-gold font-medium tracking-widest uppercase text-sm">Get in Touch</span>
            <h2 className="text-4xl md:text-5xl font-display text-charcoal mt-2 mb-8">Visit Our Salon</h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-white p-3 rounded-full text-rose-gold shadow-sm mr-4">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-display text-xl text-charcoal mb-1">Address</h4>
                  <p className="text-gray-600">123 Luxury Avenue, Colombo 07,<br />Sri Lanka</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white p-3 rounded-full text-rose-gold shadow-sm mr-4">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-display text-xl text-charcoal mb-1">Phone</h4>
                  <p className="text-gray-600">+94 77 123 4567</p>
                  <p className="text-gray-600">+94 11 234 5678</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-white p-3 rounded-full text-rose-gold shadow-sm mr-4">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-display text-xl text-charcoal mb-1">Email</h4>
                  <p className="text-gray-600">hello@luxebeauty.com</p>
                </div>
              </div>

              <a
                href="https://wa.me/94771234567"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-[#25D366] text-white px-6 py-3 rounded-full font-medium hover:bg-[#20bd5a] transition-colors shadow-md mt-4"
              >
                <MessageCircle className="mr-2" size={20} />
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[400px] lg:h-full rounded-2xl overflow-hidden shadow-lg border-4 border-white"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63371.80385597899!2d79.82118599282366!3d6.92192257611597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1646743265432!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
