import React from 'react';

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md z-50 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center h-20">
          <div className="nav-logo">
            <a href="#">
              <h1 className="text-3xl text-primary font-heading m-0">
                Aashu's <span className="text-gold">Boutique</span>
              </h1>
            </a>
          </div>
          <ul className="hidden md:flex gap-8 list-none">
            <li><a href="#home" className="font-medium text-[0.95rem] text-gray-800 hover:text-gold transition-colors duration-300">Home</a></li>
            <li><a href="#about" className="font-medium text-[0.95rem] text-gray-800 hover:text-gold transition-colors duration-300">About Us</a></li>
            <li><a href="#collections" className="font-medium text-[0.95rem] text-gray-800 hover:text-gold transition-colors duration-300">Collections</a></li>
            <li><a href="#contact" className="font-medium text-[0.95rem] text-gray-800 hover:text-gold transition-colors duration-300">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        id="home" 
        className="h-screen bg-cover bg-center bg-fixed flex items-center relative"
        style={{ backgroundImage: "url('/hero_background_1786803994488.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="max-w-7xl mx-auto px-8 w-full relative z-10 text-center text-white flex flex-col items-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl text-gold-light mb-4 text-shadow animate-[fadeInDown_1s_ease-out]">
              Elegance Defined
            </h1>
            <p className="text-lg md:text-xl mb-8 animate-[fadeInUp_1s_ease-out_0.3s] fill-mode-both">
              Premium bespoke bridal wear and exclusive designer outfits in the heart of Indore.
            </p>
            <a 
              href="#contact" 
              className="inline-block px-8 py-3 font-body font-medium uppercase tracking-wider bg-primary text-gold-light border border-primary hover:bg-transparent hover:text-primary transition-all duration-300 animate-[fadeInUp_1s_ease-out_0.6s] fill-mode-both"
            >
              Book a Consultation
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-bg-alt">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl mb-6">Crafting Dreams in Every Thread</h2>
            <p className="mb-6 text-lg text-gray-700">
              Welcome to Aashu's Designer Studio, Indore's premier destination for exquisite women's wear. Located on the bustling streets of our beautiful city, we specialize in bringing your sartorial dreams to life.
            </p>
            <p className="mb-6 text-lg text-gray-700">
              From intricately embroidered bridal lehengas that make you shine on your special day, to chic customized kurtis for festive occasions, our artisans pour their heart into every creation.
            </p>
            <a 
              href="#collections" 
              className="inline-block px-8 py-3 font-body font-medium uppercase tracking-wider bg-transparent text-primary border border-primary hover:bg-primary hover:text-gold-light transition-all duration-300"
            >
              Explore Collections
            </a>
          </div>
          <div className="relative">
            <img 
              src="/custom_outfits_1786804237250.jpg" 
              alt="Aashu's Boutique Interior" 
              className="rounded box-shadow-gold w-full block"
            />
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section id="collections" className="py-24">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-center text-4xl mb-4 relative">Our Collections</h2>
          <p className="text-center text-gray-500 text-lg mb-12 italic font-heading">Discover the art of fine dressing</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative overflow-hidden rounded cursor-pointer group">
              <img 
                src="/bridal_collection_1786804013221.jpg" 
                alt="Bridal Couture" 
                className="w-full h-[450px] object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8 opacity-90 transition-opacity duration-300">
                <h3 className="text-gold-light text-2xl mb-2">Bridal Couture</h3>
                <p className="text-white text-sm">Majestic lehengas and sarees for your big day.</p>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded cursor-pointer group">
              <img 
                src="/custom_outfits_1786804237250.jpg" 
                alt="Custom Outfits" 
                className="w-full h-[450px] object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8 opacity-90 transition-opacity duration-300">
                <h3 className="text-gold-light text-2xl mb-2">Custom Ensembles</h3>
                <p className="text-white text-sm">Tailor-made ethnic and fusion wear.</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded cursor-pointer group">
              <img 
                src="/hero_background_1786803994488.jpg" 
                alt="Designer Wear" 
                className="w-full h-[450px] object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8 opacity-90 transition-opacity duration-300">
                <h3 className="text-gold-light text-2xl mb-2">Designer Wear</h3>
                <p className="text-white text-sm">Ready-to-wear premium garments.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-primary text-white text-center">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-center text-4xl mb-4 relative text-gold-light">What Our Brides Say</h2>
          <p className="text-center text-gray-200 text-lg mb-12 italic font-heading">Stories of elegance</p>
          
          <div className="max-w-3xl mx-auto">
            <div className="bg-white/5 p-12 rounded-lg border border-white/10">
              <p className="text-xl italic mb-6 font-heading">"Aashu's Boutique gave me the wedding outfit of my dreams! The detailing and fitting were absolutely perfect. Highly recommended in Indore!"</p>
              <h4 className="font-semibold text-gold">- Priya S., Indore</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact Section */}
      <footer id="contact" className="bg-[#1a1a1a] text-[#ccc] pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-gold-light mb-6 text-2xl">Aashu's Boutique</h3>
              <p className="mb-3">Elevating women's fashion with exquisite craftsmanship and personalized designs.</p>
            </div>
            <div>
              <h3 className="text-gold-light mb-6 text-2xl">Visit Us</h3>
              <p className="mb-3">Sapna Sangeeta Road / Bhawar Kuan</p>
              <p className="mb-3">Indore, Madhya Pradesh</p>
              <p className="mb-3">India</p>
            </div>
            <div>
              <h3 className="text-gold-light mb-6 text-2xl">Quick Links</h3>
              <ul className="list-none">
                <li className="mb-3"><a href="#home" className="hover:text-gold transition-colors">Home</a></li>
                <li className="mb-3"><a href="#about" className="hover:text-gold transition-colors">About</a></li>
                <li className="mb-3"><a href="#collections" className="hover:text-gold transition-colors">Collections</a></li>
                <li className="mb-3"><a href="#contact" className="hover:text-gold transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-gold-light mb-6 text-2xl">Contact</h3>
              <p className="mb-3">Phone: +91 98765 43210</p>
              <p className="mb-3">Email: hello@aashusboutique.com</p>
            </div>
          </div>
          <div className="text-center pt-8 border-t border-gray-800 text-sm">
            <p>&copy; {new Date().getFullYear()} Aashu's Designer Boutique. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
