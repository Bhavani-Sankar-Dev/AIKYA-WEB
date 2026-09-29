import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Registration() {
  return (
    <div className="page-shell registration-page-shell">
      <Navbar />

      <main className="registration-page-main">
        <section className="registration-form-section">
          <div className="section-container">
            <div className="registration-centered-wrapper">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSd6M60MLeYFQy95A0hJnf714JYLXriRZZFw1Aq_DzO5iY7ctQ/viewform?usp=header"
                className="btn-primary-glow btn-large"
                target="_blank"
                rel="noopener noreferrer"
              >
                Complete Free Registration
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Registration;
