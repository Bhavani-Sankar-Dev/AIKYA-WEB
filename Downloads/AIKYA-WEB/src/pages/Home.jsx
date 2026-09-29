import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Countdown from "../components/Countdown";
import AboutPreview from "../components/AboutPreview";
import EventGrid from "../components/EventGrid";
import SpotEvents from "../components/SpotEvents";
import Sponsors from "../components/Sponsors";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="page-shell home-page-shell">
      <Navbar />
      <main id="main-content" className="main-content-flow">
        <Hero />
        <Countdown />
        <AboutPreview />
        <EventGrid />
        <SpotEvents />
        <Sponsors />
      </main>
      <Footer />
    </div>
  );
}

export default Home;