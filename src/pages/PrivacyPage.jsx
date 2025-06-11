// NO import for Layout here!
// The page component is simple and only worries about its own content.

function PrivacyPage() {
  return (
    <div className="container">
      <div className="text-content-page">
        <h1>Privacy Policy</h1>
        <p className="last-updated">Last Updated: June 11, 2025</p>

        <div className="legal-disclaimer">
          <strong>Important Disclaimer:</strong> The content on this page is provided for illustrative and
          educational purposes only. It is a generic template and does not constitute legal advice. We make no
          representations or warranties of any kind, express or implied, about the completeness, accuracy,
          reliability, or suitability of this text for any purpose.
          <br /><br />
          You must not rely on this template as a substitute for professional legal advice tailored to your
          specific situation, business, and jurisdiction. By viewing this page, you agree that we are not
          liable for any losses or damages arising from your use of or reliance on this template content.
          Always consult with a qualified legal professional.
        </div>

        {/* ... Rest of your privacy policy content ... */}

        <h2>1. Information We Collect</h2>
        <p>We collect information you provide directly to us when you create an account, such as your username,
          email address, and password. We also collect Usage Data automatically when you use the Service. This
          data may include information such as your computer's Internet Protocol address (e.g., IP address),
          browser type, browser version, the pages of our Service that you visit, the time and date of your
          visit, the time spent on those pages, and other diagnostic data.</p>

        <h2>2. How We Use Your Information</h2>
        <p>We use the information we collect for various purposes, including to:</p>
        <ul class="styled-list">
          <li>Provide, operate, and maintain our Service</li>
          <li>Improve, personalize, and expand our Service</li>
          <li>Understand and analyze how you use our Service</li>
          <li>Communicate with you, either directly or through one of our partners, for customer service, to
            provide you with updates and other information relating to the Service, and for marketing and
            promotional purposes</li>
          <li>Process your transactions</li>
          <li>Find and prevent fraud</li>
        </ul>

        <h2>3. Cookies and Tracking Technologies</h2>
        <p>We use cookies and similar tracking technologies to track the activity on our Service and we hold
          certain information. Cookies are files with a small amount of data which may include an anonymous
          unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie
          is being sent. However, if you do not accept cookies, you may not be able to use some portions of
          our Service.</p>

        <h2>4. Data Security</h2>
        <p>The security of your data is important to us but remember that no method of transmission over the
          Internet or method of electronic storage is 100% secure. While we strive to use commercially
          acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>

        <h2>5. Changes to This Privacy Policy</h2>
        <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the
          new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any
          changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>

      </div>
    </div>
  );
}

export default PrivacyPage;