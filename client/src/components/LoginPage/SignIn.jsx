import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import './SignIn.css';

// Replace 'your-logo.png' with your actual logo image URL
const logoUrl = 'https://www.zoodmall.com.lb/_nuxt/img/zoodmall.342f9ee.svg';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      navigate('/'); // Redirect to homepage or another route on successful sign in
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-box">
        <div className="logo-container">
          <img src={logoUrl} alt="Logo" className="logo" />
        </div>
        <h2>Sign In</h2>
        <form onSubmit={handleSignIn}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          {error && <p className="error">{error}</p>}
          <button type="submit" className="sign-in-button">
            <img src={logoUrl} alt="Logo" className="button-logo" />
            Sign In
          </button>
        </form>
        <p className="redirect-text">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}
