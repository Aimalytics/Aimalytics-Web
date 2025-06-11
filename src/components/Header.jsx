import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="navbar">
      <div className="container">
        <Link to="/" className="logo">
          <span style={{ color: '#9988FF' }}>Aim</span>alytics
        </Link>
        <nav>
          <ul>
            {/* Note: In a true SPA, hash links like this might require a special library.
                For simplicity, a standard anchor tag can force a navigation to the homepage and then to the section. */}
            <li><a href="/#features">Features</a></li>
            <li><a href="/#pricing">Pricing</a></li>
            <li>
              <Link to="/auth" className="button-primary">Sign Up / Sign In</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;