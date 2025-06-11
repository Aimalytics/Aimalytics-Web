import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1><span className="text-primary-color">Aim</span>alytics</h1>
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

      {/* Pricing Section - REVISED */}
      <section id="pricing" className="pricing">
        <div className="container">
          <h2>Simple, Transparent Pricing</h2>
          <div className="pricing-grid">

            {/* Free Tier Card */}
            <div className="pricing-card">
              <h3>Free</h3>
              <div className="price">
                0€ <span className="price-period">/ month</span>
              </div>
              <p className="billing-note"> </p> {/* Placeholder for alignment */}
              <p>For casual players getting started with aim analysis.</p>
              <ul className="styled-list">
                <li>Basic Performance Tracking</li>
                <li>7-Day History Retention</li>
                <li>Standard Replay Analysis</li>
                <li>Community Access</li>
              </ul>
              <Link to="/auth" className="button-secondary button-full-width">Get Started</Link>
            </div>

            {/* Annual Tier Card (Featured) */}
            <div className="pricing-card featured">
              <div className="best-value-badge">Best Value</div>
              <h3>Pro Annual</h3>
              <div className="price">
                6€ <span className="price-period">/ month</span>
              </div>
              <p className="billing-note">Billed as 72€ per year</p>
              <p>For dedicated players committed to long-term improvement.</p>
              <ul className="styled-list">
                <li>All Advanced Metrics</li>
                <li>Unlimited History Retention</li>
                <li>In-depth Replay Analysis</li>
                <li>AI-Powered Recommendations</li>
                <li>Priority Support</li>
              </ul>
              <Link to="/auth" className="button-primary button-full-width">Choose Plan</Link>
            </div>

            {/* Monthly Tier Card */}
            <div className="pricing-card">
              <h3>Pro Monthly</h3>
              <div className="price">
                8€ <span className="price-period">/ month</span>
              </div>
              <p className="billing-note">Billed monthly</p>
              <p>Unlock all pro features with the flexibility of a monthly plan.</p>
              <ul className="styled-list">
                <li>All Advanced Metrics</li>
                <li>Unlimited History Retention</li>
                <li>In-depth Replay Analysis</li>
                <li>AI-Powered Recommendations</li>
                <li>Standard Support</li>
              </ul>
              <Link to="/auth" className="button-secondary button-full-width">Choose Plan</Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;