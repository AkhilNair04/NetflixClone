import React from 'react';
import './Login.css';
import logos from '../../assets/logos.png';
import { login, signup } from '../../firebase';
import loadingGif from '../../assets/loading.gif';

const Login = () => {
  const [signState, setSignState] = React.useState("Sign In");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const user_auth = async (event) => {
    event.preventDefault();

    const isValidEmail = (email) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!email || !password || (signState === "Sign Up" && !name)) {
      alert("Please fill in all required fields.");
      return;
    }

    if (!isValidEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    setTimeout(async () => {
      try {
        if (signState === "Sign In") {
          await login(email, password);
        } else {
          await signup(name, email, password);
        }
      } catch (error) {
        console.log("Authentication Error:", error);
        alert(`Authentication Error: ${error.message}`);
      } finally {
        setLoading(false);
      }
    }, 2500); 
  };

  return (
    loading ? (
      <div className="loading-spinner">
        <img src={loadingGif} alt="Loading..." />
      </div>
    ) : (
      <div className="login">
        <img src={logos} alt="Logo" className="loginlogo" />
        <div className="login-form">
          <h1>{signState}</h1>
          <form>
            {signState === "Sign Up" && (
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Name"
                className="login-input"
              />
            )}
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              className="login-input"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              className="login-input"
            />
            <button onClick={user_auth} type="submit">
              {signState}
            </button>
            <div className="form-help">
              <div className="remember">
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Remember me</label>
              </div>
              <p>Need Help</p>
            </div>
          </form>
          <div className="form-switch">
            {signState === "Sign In" ? (
              <p>
                New to Netflix?{" "}
                <span onClick={() => setSignState("Sign Up")}>Sign Up</span>
              </p>
            ) : (
              <p>
                Already a Member?{" "}
                <span onClick={() => setSignState("Sign In")}>Sign In</span>
              </p>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default Login;
