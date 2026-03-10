import "./Register.css";

export default function Register() {
  return (
    <div className="register-page">
      <img src="/Image2.png" className="side-image" alt="background" />

      <div className="register-card">
        <h1 className="title">Create Account</h1>

        <label>Email</label>
        <input type="email" placeholder="hello@crowdlens.com" />

        <label>Password</label>
        <input type="password" placeholder="••••••••" />

        <label>Confirm Password</label>
        <input type="password" placeholder="••••••••" />

        <button className="signup-btn">Sign Up</button>

        <p className="login-text">
          Already have an account? <span>Log In</span>
        </p>
      </div>

      <div className="logo-area">
        <img src="/Logo.png" alt="logo" className="logo" />
        <img src="/Crowdlens.png" alt="crowdlens" className="logo-text" />
      </div>
    </div>
  );
}