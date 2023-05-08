import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h4 className="leftLogo">SMA</h4>
          <span className="leftDesc">Connecting the world</span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <button className="loginButton">Log In</button>
            <span className="forgotpass">Forgot Password?</span>
            <button className="register">Register Your Account</button>
          </div>
        </div>
      </div>
    </div>
  );
}
