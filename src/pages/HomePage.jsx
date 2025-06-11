import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1><span style={{ color: '#9988FF' }}>Aim</span>alytics</h1>
          <p className="subtitle">Tracking your aim training has never been easier.</p>
          <Link to="/auth" className="button-primary button-large">Get Started for Free</Link>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <h2>Go Beyond the Score</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>A Diagnostic Layer for Your Training</h3>
              <p>Keep using Aim Lab or KovaaK's. Aimalytics isn't another trainer—it's a powerful analysis platform that works alongside them to reveal what's really happening behind every mouse flick and track.</p>
            </div>
            <div className="feature-card">
              <h3>The Replay Analysis Engine</h3>
              <p>Our benchmark scenarios generate replays packed with unparalleled data. We go deeper than anyone else to visualize your mechanical habits:</p>
              <ul className="styled-list">
                <li>Slow-mo & Optimal Path Analysis</li>
                <li>Detailed Flick & Tracking Metrics</li>
                <li>Objective Smoothness & Jitter Data</li>
              </ul>
            </div>
            <div className="feature-card">
              <h3>Targeted, Science-Backed Insight</h3>
              <p>We translate complex data into clear, actionable feedback. By applying principles from motor learning and performance science, we help you identify the root cause of inconsistency and aim smarter.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section Placeholder */}
      <section id="pricing" style={{ padding: '60px 0', textAlign: 'center' }}>
          <div className="container">
              <h2>Pricing</h2>
              <p>Pricing information will go here.</p>
          </div>
      </section>
    </>
  );
}

export default HomePage;