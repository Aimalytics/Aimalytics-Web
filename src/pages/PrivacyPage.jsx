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
          
        {/* Add the rest of your content here */}

      </div>
    </div>
  );
}

export default PrivacyPage;