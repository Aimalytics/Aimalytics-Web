import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="navbar">
      <div className="container">
        {/* UPDATED to use the new CSS class */}
        <Link to="/" className="logo">
          <span className="text-primary-color">Aim</span>alytics
        </Link>
        <nav>
          <ul>
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