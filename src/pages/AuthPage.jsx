import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function AuthPage() {
  // State for the Sign In form
  const [signInUsername, setSignInUsername] = useState('');
  const [signInPassword, setSignInPassword] = useState('');

  // State for the Sign Up form
  const [signUpUsername, setSignUpUsername] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  // Handle Sign In submission
  const handleSignIn = (e) => {
    e.preventDefault(); // Prevent page reload
    console.log("Signing in with:");
    console.log("Username:", signInUsername);
    console.log("Password:", signInPassword);
    // Here you would typically make an API call
  };

  // Handle Sign Up submission
  const handleSignUp = (e) => {
    e.preventDefault();
    if (signUpPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    if (!termsAccepted) {
      alert("You must accept the terms and services!");
      return;
    }
    console.log("Creating account with:");
    console.log("Username:", signUpUsername);
    console.log("Email:", signUpEmail);
    console.log("Password:", signUpPassword);
    // API call to create an account would go here
  };

  return (
    <div className="auth-page-body">
        <div className="auth-page-container">
          {/* Sign In Panel */}
          <div className="auth-panel sign-in-panel">
            <h1>Sign In</h1>
            <p className="panel-subtitle">Welcome back! Please enter your details.</p>
            <form onSubmit={handleSignIn} name="signin">
              <div className="form-group">
                <input type="text" id="username" placeholder="Username" required value={signInUsername} onChange={(e) => setSignInUsername(e.target.value)} />
              </div>
              <div className="form-group">
                <input type="password" id="password" placeholder="Password" required value={signInPassword} onChange={(e) => setSignInPassword(e.target.value)} />
              </div>
              <div className="form-options">
                <div className="form-group-checkbox">
                  <input type="checkbox" name="remember-me" id="remember-me" />
                  <label htmlFor="remember-me">Remember me</label>
                </div>
                <a href="#" className="forgot-password">Forgot Password?</a>
              </div>
              <button type="submit" className="button-primary button-full-width">Sign In</button>
            </form>
          </div>

          {/* Sign Up Panel */}
          <div className="auth-panel sign-up-panel">
            <h2>New to <span style={{ color: '#9988FF' }}>Aim</span>alytics?</h2>
            <p>Create your account. It's free and only takes a minute.</p>
            <form onSubmit={handleSignUp}>
              <div className="form-group">
                <input type="text" placeholder="Choose a Username" required value={signUpUsername} onChange={(e) => setSignUpUsername(e.target.value)} />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email Address" required value={signUpEmail} onChange={(e) => setSignUpEmail(e.target.value)} />
              </div>
              <div className="form-group">
                <input type="password" placeholder="Create a Password" required value={signUpPassword} onChange={(e) => setSignUpPassword(e.target.value)} />
              </div>
              <div className="form-group">
                <input type="password" placeholder="Confirm your Password" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
              </div>
              <div className="form-group-checkbox">
                <input type="checkbox" id="terms-and-services" required checked={termsAccepted} onChange={(e) => setTermsAccepted(e.target.checked)} />
                <label htmlFor="terms-and-services">
                  I accept the <Link to="/terms" target="_blank" rel="noopener noreferrer">Terms of Service</Link> and the <Link to="/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</Link>
                </label>
              </div>
              <button type="submit" className="button-secondary button-full-width">Create Account</button>
            </form>
          </div>
        </div>
    </div>
  );
}

export default AuthPage;