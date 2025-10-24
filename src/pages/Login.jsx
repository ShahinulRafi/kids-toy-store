import {
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useRef, useState } from "react";
import { auth } from "../firebase/firebase.init";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import { use } from "react";

// const googleProvider = new GoogleAuthProvider();

const Login = () => {
  // const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const emailRef = useRef();
  const { signInUser, signInWithGoogle } = use(AuthContext);
  // const {signOutUser} = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  console.log("login location", location?.state);
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        // setUser(result.user);
        navigate(location?.state || "/");
      })
      .catch((eror) => {
        console.log(eror);
      });
  };

  // const handleSignOut = () => {
  //   signOut(auth)
  //     .then(() => {
  //       console.log("sign out successful");
  //       setUser(null);
  //     })
  //     .then((eror) => {
  //       console.log(eror);
  //     });
  // };

  const handleLogin = (e) => {
    e.preventDefault();
    // console.log("Login Button Clicked");

    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess("Login Successful");
        e.target.reset();
        navigate(location?.state || "/");
      })
      .catch((error) => {
        alert(error.message);
        setError(error.message);
      });

    setError("");
    setSuccess("");

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        // setSuccess("Login Successful");
        navigate(location?.state || "/");
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  const ForgotPassword = (e) => {
    e.preventDefault();
    console.log("Forgot Password Clicked");
    sendPasswordResetEmail(auth, emailRef.current.value)
      .then(() => {
        alert("Password reset email sent. Please check your inbox.");
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleLogin}>
                <fieldset className="fieldset">
                  <label className="label">Email</label>
                  <input
                    name="email"
                    type="email"
                    className="input"
                    placeholder="Email"
                    ref={emailRef}
                  />
                  <label className="label">Password</label>
                  <input
                    name="password"
                    type="password"
                    className="input"
                    placeholder="Password"
                  />
                  <div onClick={ForgotPassword}>
                    <p className="link">Forgot Password?</p>
                  </div>
                  <div>
                    <p>
                      New Here?{" "}
                      <Link to="/register" className="text-blue-500">
                        Register!
                      </Link>
                    </p>
                  </div>
                  <button className="btn btn-neutral mt-4">Login</button>
                </fieldset>

                <div>
                  {success && <p className="text-green-500">{success}</p>}
                  {error && <p className="text-red-500">{error}</p>}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <button onClick={handleGoogleSignIn} className="btn btn-outline">
        Login With Google
      </button>

      {/* <div>{user && <h2>{user.displayName}</h2>}</div> */}
    </div>
  );
};

export default Login;
