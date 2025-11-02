export default function AboutPage() {
  return (
    <div style={{
      fontFamily: "Arial, sans-serif",
      lineHeight: "1.6",
      color: "#333",
      background: "#f8f9fa",
      margin: 0,
      padding: "40px"
    }}>
      <div style={{
        maxWidth: "900px",
        margin: "0 auto",
        background: "#fff",
        padding: "30px",
        borderRadius: "12px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
      }}>
        <h1 style={{ color: "#0078d7" }}>AI Tools Master</h1>
        <p><strong>Welcome to AI Tools Master!</strong> Your go-to hub for exploring the latest and best AI tools available online.</p>

        <hr />

        <h2 style={{ color: "#0078d7" }}>About Us</h2>
        <p>
          AI Tools Master helps developers, creators, and tech enthusiasts discover trending AI tools in one place.
          Our mission is to make AI accessible to everyone by listing tools with descriptions, ratings, and official links.
        </p>
        <p>
          We update regularly to keep you connected to the latest AI innovations.
        </p>

        <hr />

        <h2 style={{ color: "#0078d7" }}>Contact Us</h2>
        <p>Got questions, suggestions, or collaboration ideas? We'd love to hear from you!</p>
        <ul>
          <li>📧 Email: <a href="mailto:aitoolsmaster@gmail.com">aitoolsmaster@gmail.com</a></li>
          <li>🌐 Website: <a href="https://ai-tools-master.netlify.app" target="_blank">https://ai-tools-master.netlify.app</a></li>
        </ul>
        <p>We usually respond within 24–48 hours.</p>

        <hr />

        <h2 style={{ color: "#0078d7" }}>Privacy Policy</h2>
        <p>
          We respect your privacy. We do not collect personal information unless you contact us directly.  
          We may use services like Google Analytics or AdSense for performance and analytics.
        </p>

        <h3>Cookies</h3>
        <p>
          We use cookies to enhance your browsing experience and show relevant ads.
        </p>

        <h3>Consent</h3>
        <p>
          By using our website, you consent to our Privacy Policy and agree to its terms.
        </p>

        <hr />
        <p style={{ textAlign: "center", fontSize: "14px", color: "#555" }}>
          © 2025 AI Tools Master • All Rights Reserved.
        </p>
      </div>
    </div>
  );
}
