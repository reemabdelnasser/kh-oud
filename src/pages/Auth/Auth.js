import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./Auth.css";
import Swal from "sweetalert2";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
function Auth() {
  const [pramas, setPramas] = useState("login");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = () => {
    console.log(password);
    if (username === "Khloud" && password === "123") {
      Swal.fire({
        title: "Login is success",
        icon: "success",
        confirmButtonText: "Ok",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/home");
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
      console.log("sadsa");
    } else {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Username or Password is Wrong",
      });
    }
  };
  return (
    <div>
      <Header />
    <div className="auth">
      {pramas !== "register" ? (
        <div className="log">
          <h2>Already a Member? Log in here.</h2>
          <div className="log-user">
            <label>Username</label>
            <input
              type="text"
              required
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="log-user">
            <label>Password</label>
            <input
              type="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Link>
            <span onClick={() => setPramas("register")}>
              Don't Have an account
            </span>
          </Link>
          <button className="submit" type="button" onClick={handleSubmit}>
            Login
          </button>
          {/* <div id="frgt-pass" className="frgt-pass">
            <input type="text" required />
            <label>Username or Email*</label>
            <button className="submit" type="button">
              Reset Password
            </button>
          </div> */}
        </div>
      ) : (
        <div className="Reg">
          <h2>Do not have an account? Register here</h2>
          <div className="Reg-user">
            <label>Username</label>
            <input type="text" required />
          </div>
          <div className="Reg-user">
            <label>Password</label>
            <input type="password" required />
          </div>
          <div className="Reg-user">
            <label>Confirm Password</label>
            <input type="password" required />
          </div>
          <Link>
            <span onClick={() => setPramas("login")}>I have an account</span>
          </Link>
          <button className="submit" type="button">
            Register
          </button>
        </div>
      )}
    </div>
    <Footer />  
      </div>
  );
}

export default Auth;
