import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import events from "../data/events";

function Registration() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    college: "",
    department: "ECE",
    yearOfStudy: "3rd Year",
    teamMode: "Individual",
    teamMembers: "",
    selectedMission: "all",
  });
  const [submitted, setSubmitted] = useState(false);
  const [confirmationId, setConfirmationId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.fullName && formData.email) {
      setConfirmationId(`AK-2026-${Math.floor(1000 + Math.random() * 9000)}`);
      setSubmitted(true);
    }
  };

  return (
    <div className="page-shell registration-page-shell">
      <Navbar />

      <main className="registration-page-main">
        {/* Registration Header */}
        <section className="registration-hero-section">
          <div className="section-container">
            <div className="registration-hero-content">
              <div className="section-telemetry-tag">
                <span className="tag-pip"></span>
                AIKYA 2026 // ACCESS REQUEST
              </div>

              <h1 className="registration-main-title">
                JOIN THE <br />
                <span className="gradient-text-sith">MISSION</span>
              </h1>

              <p className="registration-lead-subtitle">
                Registration is completely <strong>free and open to all college students</strong>.
                Submit your credentials to gain entry to all 14 technical missions across AIKYA 2026.
              </p>

              <div className="free-fest-pill">
                <span className="pill-dot-green"></span>
                <span>100% FREE PARTICIPATION &bull; NO ENTRY FEES</span>
              </div>
            </div>
          </div>
        </section>

        {/* 3-Step Protocol Overview */}
        <section className="registration-steps-section">
          <div className="section-container">
            <div className="steps-header-row">
              <span className="steps-tag">// PROTOCOL OVERVIEW</span>
              <h2 className="steps-title">THREE STEPS TO ENTER</h2>
            </div>

            <div className="registration-steps-grid">
              <div className="step-card">
                <div className="step-card-num">01</div>
                <div className="step-card-body">
                  <h3 className="step-name">REGISTER</h3>
                  <p className="step-text">
                    Fill in your participant and college details below. Registration is
                    entirely free for all events.
                  </p>
                  <span className="step-status">STAGE 1 // ENROLLMENT</span>
                </div>
              </div>

              <div className="step-card">
                <div className="step-card-num">02</div>
                <div className="step-card-body">
                  <h3 className="step-name">SELECT YOUR MISSION</h3>
                  <p className="step-text">
                    Choose the competitions you want to take part in, from Day 1 and Day 2
                    flagship and sprint challenges.
                  </p>
                  <span className="step-status">STAGE 2 // SELECTION</span>
                </div>
              </div>

              <div className="step-card">
                <div className="step-card-num">03</div>
                <div className="step-card-body">
                  <h3 className="step-name">RECEIVE YOUR DETAILS</h3>
                  <p className="step-text">
                    Get your AIKYA Operative ID and event reporting schedule delivered
                    straight to your email.
                  </p>
                  <span className="step-status">STAGE 3 // CONFIRMATION</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Central Registration Form Section */}
        <section className="registration-form-section">
          <div className="section-container">
            <div className="registration-centered-wrapper">
              {/* Guidelines Strip */}
              <div className="registration-guidelines-banner">
                <div className="guideline-item">
                  <span className="g-icon">✓</span>
                  <span><strong>Zero Fees:</strong> Free registration for all university &amp; polytechnic students</span>
                </div>
                <div className="guideline-item">
                  <span className="g-icon">✓</span>
                  <span><strong>ID Mandatory:</strong> Valid College ID required at on-campus entry</span>
                </div>
                <div className="guideline-item">
                  <span className="g-icon">✓</span>
                  <span><strong>Certificates:</strong> Participation &amp; merit certificates awarded to all</span>
                </div>
              </div>

              {/* The Registration Terminal Box */}
              <div className="registration-terminal-box">
                <div className="terminal-header-strip">
                  <div className="terminal-dots">
                    <span className="dot red"></span>
                    <span className="dot yellow"></span>
                    <span className="dot blue"></span>
                  </div>
                  <span className="terminal-title">OFFICIAL_REGISTRATION // FREE_PORTAL</span>
                  <span className="terminal-free-badge">FREE ACCESS</span>
                </div>

                {submitted ? (
                  <div className="submission-success-panel">
                    <div className="success-icon-ring">✓</div>
                    <h3 className="success-title">TRANSMISSION RECEIVED</h3>
                    <p className="success-text">
                      Welcome, Operative <strong>{formData.fullName}</strong>. Your registration for
                      AIKYA 2026 has been successfully confirmed.
                    </p>
                    <div className="success-details-box">
                      <div>
                        <span>REGISTRATION ID:</span>
                        <strong>{confirmationId}</strong>
                      </div>
                      <div>
                        <span>EMAIL:</span>
                        <strong>{formData.email}</strong>
                      </div>
                      <div>
                        <span>INSTITUTION:</span>
                        <strong>{formData.college || "Participant College"}</strong>
                      </div>
                      <div>
                        <span>DEPARTMENT:</span>
                        <strong>{formData.department} ({formData.yearOfStudy})</strong>
                      </div>
                      <div>
                        <span>PARTICIPATION:</span>
                        <strong>{formData.teamMode}</strong>
                      </div>
                      <div>
                        <span>ACCESS STATUS:</span>
                        <strong className="text-green">CONFIRMED (FREE ACCESS)</strong>
                      </div>
                    </div>
                    <p className="success-note">
                      Please carry your college ID card on the day of the fest. Reporting details will be sent to your email.
                    </p>
                    <button
                      type="button"
                      className="btn-primary-glow"
                      onClick={() => setSubmitted(false)}
                    >
                      SUBMIT ANOTHER REGISTRATION
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="reg-form">
                    <div className="form-field-group">
                      <label className="form-label" htmlFor="fullName">
                        PARTICIPANT FULL NAME *
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        required
                        className="form-input"
                        placeholder="e.g. Alex Ray / Luke Skywalker"
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                      />
                    </div>

                    <div className="form-row-dual">
                      <div className="form-field-group">
                        <label className="form-label" htmlFor="email">
                          EMAIL ADDRESS *
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          className="form-input"
                          placeholder="your.email@college.edu"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                        />
                      </div>

                      <div className="form-field-group">
                        <label className="form-label" htmlFor="phone">
                          PHONE / WHATSAPP NUMBER *
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          required
                          className="form-input"
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                        />
                      </div>
                    </div>

                    <div className="form-row-dual">
                      <div className="form-field-group">
                        <label className="form-label" htmlFor="college">
                          COLLEGE / UNIVERSITY NAME *
                        </label>
                        <input
                          id="college"
                          type="text"
                          required
                          className="form-input"
                          placeholder="e.g. VVIT, JNTU, etc."
                          value={formData.college}
                          onChange={(e) =>
                            setFormData({ ...formData, college: e.target.value })
                          }
                        />
                      </div>

                      <div className="form-field-group">
                        <label className="form-label" htmlFor="department">
                          DEPARTMENT / BRANCH
                        </label>
                        <select
                          id="department"
                          className="form-select"
                          value={formData.department}
                          onChange={(e) =>
                            setFormData({ ...formData, department: e.target.value })
                          }
                        >
                          <option value="ECE">Electronics & Communication (ECE)</option>
                          <option value="EEE">Electrical & Electronics (EEE)</option>
                          <option value="CSE">Computer Science & Eng (CSE)</option>
                          <option value="IT">Information Technology (IT)</option>
                          <option value="MECH">Mechanical / Mechatronics</option>
                          <option value="OTHER">Other Technical Branch</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-row-dual">
                      <div className="form-field-group">
                        <label className="form-label" htmlFor="yearOfStudy">
                          YEAR OF STUDY
                        </label>
                        <select
                          id="yearOfStudy"
                          className="form-select"
                          value={formData.yearOfStudy}
                          onChange={(e) =>
                            setFormData({ ...formData, yearOfStudy: e.target.value })
                          }
                        >
                          <option value="1st Year">1st Year (B.Tech / Diploma)</option>
                          <option value="2nd Year">2nd Year (B.Tech / Diploma)</option>
                          <option value="3rd Year">3rd Year (B.Tech)</option>
                          <option value="4th Year">4th Year (B.Tech)</option>
                          <option value="Postgraduate">Postgraduate (M.Tech / MS)</option>
                        </select>
                      </div>

                      <div className="form-field-group">
                        <label className="form-label" htmlFor="teamMode">
                          PARTICIPATION MODE
                        </label>
                        <select
                          id="teamMode"
                          className="form-select"
                          value={formData.teamMode}
                          onChange={(e) =>
                            setFormData({ ...formData, teamMode: e.target.value })
                          }
                        >
                          <option value="Individual">Individual Participant</option>
                          <option value="Team of 2">Team / Squad (2 Members)</option>
                          <option value="Team of 3-4">Team / Squad (3-4 Members)</option>
                        </select>
                      </div>
                    </div>

                    {formData.teamMode !== "Individual" && (
                      <div className="form-field-group">
                        <label className="form-label" htmlFor="teamMembers">
                          TEAM MEMBERS' NAMES &amp; CONTACTS (IF APPLICABLE)
                        </label>
                        <input
                          id="teamMembers"
                          type="text"
                          className="form-input"
                          placeholder="e.g. Member 2: Priya (9876543211), Member 3: Rohan"
                          value={formData.teamMembers}
                          onChange={(e) =>
                            setFormData({ ...formData, teamMembers: e.target.value })
                          }
                        />
                      </div>
                    )}

                    <div className="form-field-group">
                      <label className="form-label" htmlFor="primaryMission">
                        PRIMARY MISSION OF INTEREST
                      </label>
                      <select
                        id="primaryMission"
                        className="form-select"
                        value={formData.selectedMission}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            selectedMission: e.target.value,
                          })
                        }
                      >
                        <option value="all">-- All Access / Open to All Missions --</option>
                        {events.map((evt) => (
                          <option key={evt.id} value={evt.id}>
                            Day 0{evt.day} - {evt.name} ({evt.type.toUpperCase()})
                          </option>
                        ))}
                      </select>
                    </div>

                    <button type="submit" className="submit-registration-btn">
                      <span className="btn-glow-bar"></span>
                      <span className="btn-label-text">COMPLETE FREE REGISTRATION →</span>
                    </button>

                    <p className="form-privacy-note">
                      Entry is 100% free. No payment required. Your information will be used solely
                      for AIKYA 2026 fest administration and certificate issuance.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Support Desk */}
        <section className="registration-support-section">
          <div className="section-container">
            <div className="support-card">
              <div className="support-left">
                <span className="support-code">// ASSISTANCE TERMINAL</span>
                <h3 className="support-title">Have Questions About Participation or Events?</h3>
                <p className="support-desc">
                  Contact the student coordinators and faculty leads for event queries, schedule clarifications, or on-duty letters.
                </p>
              </div>
              <div className="support-right">
                <a href="mailto:ietevvitu@vvit.net" className="btn-secondary-ghost">
                  CONTACT COMMAND DESK →
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Registration;