import Carousel from './components/container/CarouselSection';
import FAQ from './components/container/FAQSection';
import Footer from './components/container/Footer';
import Header from './components/container/Header';
import Hero from './components/container/HeroSection';
import Industries from './components/container/IndustriesSection';
import MessageForm from './components/container/MessageFormSection/MessageForm';
import OurProcess from './components/container/OurProcessSection';
import Portfolio from './components/container/PortfolioSection';
import Projects from './components/container/ProjectsSection';
import Services from './components/container/ServicesSection';
import Testimonials from './components/container/TestimonialsSection';

function App() {
  return (
    <div className="app-shell font-['Quicksand'] antialiased">
      <Header />
      <main className="z-0">
        <Hero />
        <Carousel />
        <Portfolio />
        <OurProcess />
        <Services />
        <Industries />
        <Projects />
        <Testimonials />
        <FAQ />
        <MessageForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;