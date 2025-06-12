import { Link } from 'react-router-dom';

function HomePage() {
  const warmedUpPrice = "Free";
  const dialedInMonthlyPrice = 7.99;
  const dialedInAnnualPrice = 5.99;  // hypothetical annual effective monthly price
  const theZoneMonthlyPrice = 9.99;
  const theZoneAnnualPrice = 7.99;   // hypothetical annual effective monthly price

  function calculateSavingsPercent(basePrice, discountedPrice) {
    if (basePrice <= 0) return 0;
    return Math.round(((basePrice - discountedPrice) / basePrice) * 100);
  }


  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1><span className="text-primary-color">Aim</span>alytics</h1>
          <p className="subtitle">Tracking your aim training has never been easier.</p>
          <a href="#pricing" className="button-primary button-large">Get Started for Free</a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <h2>Built for Deep Performance Insight</h2>
          <div className="features-grid">

            <div className="feature-card">
              <h3>Not Another Trainer</h3>
              <p>Aimalytics complements your existing tools like Aimlabs or KovaaK’s. It’s not about more reps—it’s about understanding the ones you’ve already done.</p>
            </div>

            <div className="feature-card">
              <h3>Replay-Driven Analytics</h3>
              <p>Every benchmark run generates a replay enriched with precise motion data:</p>
              <ul className="styled-list">
                <li>Slow-motion playback with optimal path overlays</li>
                <li>Quantified flicks, tracking stability, and reaction time</li>
                <li>Motion smoothness and jitter analysis</li>
              </ul>
            </div>

            <div className="feature-card">
              <h3>Actionable Metrics, Grounded in Science</h3>
              <p>Our system translates raw input data into meaningful indicators—helping you detect habits, isolate weaknesses, and train more effectively using principles from motor learning and cognitive performance.</p>
            </div>

          </div>
        </div>
      </section>


      {/* Pricing Section */}
      <section id="pricing" className="pricing">
        <div className="container">
          <h2>Choose Your Flow</h2>
          <div className="pricing-grid">

            {/* Free Tier Card */}
            <div className="pricing-card">
              <h3>Warmed Up</h3>
              <div className="price">
                {warmedUpPrice}
              </div>
              <p className="billing-note">&nbsp;</p> {/* Placeholder for alignment */}
              <p>Everything you need to track your aim training progress.</p>
              <ul className="styled-list">
                <li>Access to all benchmark scenarios</li>
                <li>Complete performance tracking with full history</li>
                <li>Replay analysis for performance insight</li>
                <li>Access to our Discord</li>
              </ul>
              <Link to="/auth" className="button-secondary button-full-width">Get Started</Link>
            </div>

            {/* Intermediate Tier Card */}
            <div className="pricing-card">
              <h3>Dialed In</h3>
              <div className="price">
                {dialedInMonthlyPrice}€ <span className="price-period">/ month</span>
              </div>
              <p className="billing-note">Or {dialedInAnnualPrice}€ per month billed annually</p>
              <p>Take your aim training to the next level with our advanced analytics.</p>
              <ul className="styled-list">
                <li>Track advanced KPIs and performance trends</li>
                <li>Store unlimited replays with cloud sync</li>
                <li>Unlock deeper replay breakdowns</li>
                <li>Compare progress session to session</li>
              </ul>
              <Link to="/auth" className="button-primary button-full-width">Choose Plan</Link>
            </div>

            {/* Top Tier Card - Highlighted */}
            <div className="pricing-card featured">
              <h3>In The Zone</h3>
              <div className="price">
                {theZoneMonthlyPrice}€ <span className="price-period">/ month</span>
              </div>
              <p className="billing-note">Or {theZoneAnnualPrice}€ per month billed annually — save {calculateSavingsPercent(theZoneMonthlyPrice, theZoneAnnualPrice)}%</p>
              <p>Access state-of-the-art analysis based on the latest research.</p>
              <ul className="styled-list">
                <li>Enhanced historical performance evaluation</li>
                <li>Exclusive in-depth metrics and trend forecasts</li>
                <li>Flow state insights</li>
                <li>Early access to experimental features</li>
              </ul>
              <Link to="/auth" className="button-primary button-full-width">Choose Plan</Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
