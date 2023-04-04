import React, { useState } from "react";
import "./Auth.css";

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);
  const handleSwitch = () => {
    setIsSignup(!isSignup);
  };
  return (
    <div className="wrapper">
      {isSignup && (
        <div class="container text-wrapper">
          <h1>
            Join the <span className="logo-bold">Code</span> Overflow community
          </h1>
          <p>Get unstuck — ask a question</p>
          <p>Unlock new privileges like voting and commenting</p>
          <p>Save your favorite tags, filters, and jobs</p>
          <p>Earn reputation and badges</p>
          <p>Collaborate and share knowledge with a private group for FREE.</p>
          <p>Get Stack Overflow for Teams free for up to 50 users.</p>
        </div>
      )}
      <div className="container">
        {!isSignup && (
          <h1 className="logo ">
            Code <span className="logo-bold">Overflow</span>
          </h1>
        )}
        <form className="auth-form">
          {isSignup && (
            <>
              <label for="name">Display Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Donald Trump"
                required
              />
            </>
          )}
          <label for="username">Email</label>
          <input
            type="email"
            name="username"
            id="username"
            placeholder="Someone@email.com"
            required
          />
          <label for="password">
            {isSignup ? (
              "Password"
            ) : (
              <div className="flex">
                <p>Password</p>
                <p className="forget-pw">Forget password?</p>
              </div>
            )}
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            required
          />
          {isSignup && (
            <>
              <p className="requirments fade-col">
                Passwords must contain at least eight characters, including at
                least 1 letter and 1 number.
              </p>

              <label htmlFor="promo" className="promo">
                <input type="checkbox" name="promo" id="promo" />
                <p className="requirments">
                  Opt-in to receive occasional product updates, user research
                  invitations, company announcements, and digests.
                </p>
              </label>
            </>
          )}

          <button type="submit" className="auth-login-btn">
            {!isSignup ? "Log in" : "Sign up"}
          </button>
          {isSignup && (
            <p className="requirments">
              By clicking “Sign up”, you agree to our{" "}
              <span className="text-blue">terms of service,privacy policy</span>{" "}
              and cookie policy
            </p>
          )}
        </form>
        <p className="auth-text">
          {!isSignup ? "Don’t have an account?" : "Already have an account?"}
          <button
            type="submit"
            className="handle-switch-btn login-btn"
            onClick={handleSwitch}
          >
            {isSignup ? "Log in" : "Sign up"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Auth;
