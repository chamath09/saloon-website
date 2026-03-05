/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Booking from './components/Booking';
import InstagramGallery from './components/InstagramGallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-soft-beige font-body selection:bg-rose-gold selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <WhyChooseUs />
      <Testimonials />
      <Booking />
      <InstagramGallery />
      <Contact />
      <Footer />
    </div>
  );
}
