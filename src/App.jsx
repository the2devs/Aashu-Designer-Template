import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <div className="container">
          <div className="nav-logo">
            <a href="#"><h1>Aashu's <span>Boutique</span></h1></a>
          </div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#collections">Collections</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero" style={{ backgroundImage: "url('/hero_background_1786803994488.jpg')" }}>
        <div className="container">
          <div className="hero-content">
            <h1>Elegance Defined</h1>
            <p>Premium bespoke bridal wear and exclusive designer outfits in the heart of Indore.</p>
            <a href="#contact" className="btn btn-primary">Book a Consultation</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container about-grid">
          <div className="about-text">
            <h2>Crafting Dreams in Every Thread</h2>
            <p>Welcome to Aashu's Designer Studio, Indore's premier destination for exquisite women's wear. Located on the bustling streets of our beautiful city, we specialize in bringing your sartorial dreams to life.</p>
            <p>From intricately embroidered bridal lehengas that make you shine on your special day, to chic customized kurtis for festive occasions, our artisans pour their heart into every creation.</p>
            <a href="#collections" className="btn btn-outline">Explore Collections</a>
          </div>
          <div className="about-image">
            <img src="/custom_outfits_1786804237250.jpg" alt="Aashu's Boutique Interior" />
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section id="collections" className="collections">
        <div className="container">
          <h2 className="section-title">Our Collections</h2>
          <p className="section-subtitle">Discover the art of fine dressing</p>
          
          <div className="collections-grid">
            <div className="collection-card">
              <img src="/bridal_collection_1786804013221.jpg" alt="Bridal Couture" />
              <div className="collection-overlay">
                <h3>Bridal Couture</h3>
                <p>Majestic lehengas and sarees for your big day.</p>
              </div>
            </div>
            
            <div className="collection-card">
              <img src="/custom_outfits_1786804237250.jpg" alt="Custom Outfits" />
              <div className="collection-overlay">
                <h3>Custom Ensembles</h3>
                <p>Tailor-made ethnic and fusion wear.</p>
              </div>
            </div>

            <div className="collection-card">
              <img src="/hero_background_1786803994488.jpg" alt="Designer Wear" />
              <div className="collection-overlay">
                <h3>Designer Wear</h3>
                <p>Ready-to-wear premium garments.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">What Our Brides Say</h2>
          <p className="section-subtitle">Stories of elegance</p>
          
          <div className="testimonial-slider">
            <div className="testimonial-card">
              <p>"Aashu's Boutique gave me the wedding outfit of my dreams! The detailing and fitting were absolutely perfect. Highly recommended in Indore!"</p>
              <h4 className="testimonial-author">- Priya S., Indore</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact Section */}
      <footer id="contact" className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <h3>Aashu's Boutique</h3>
              <p>Elevating women's fashion with exquisite craftsmanship and personalized designs.</p>
            </div>
            <div className="footer-col">
              <h3>Visit Us</h3>
              <p>Sapna Sangeeta Road / Bhawar Kuan</p>
              <p>Indore, Madhya Pradesh</p>
              <p>India</p>
            </div>
            <div className="footer-col">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#collections">Collections</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h3>Contact</h3>
              <p>Phone: +91 98765 43210</p>
              <p>Email: hello@aashusboutique.com</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Aashu's Designer Boutique. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
