import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <a href="#" className="font-display text-2xl font-bold text-white mb-6 block">
              Luxe<span className="text-rose-gold">Beauty</span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Experience the art of beauty with our premium services. We are dedicated to making you look and feel your absolute best.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-rose-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-rose-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-rose-gold transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg mb-6 text-rose-gold">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#hero" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg mb-6 text-rose-gold">Services</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>Bridal Dressing</li>
              <li>Hair Styling</li>
              <li>Makeup Services</li>
              <li>Facial Treatments</li>
              <li>Nail Art</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg mb-6 text-rose-gold">Opening Hours</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span>9:00 AM - 7:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>9:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>10:00 AM - 4:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Luxe Beauty Salon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
