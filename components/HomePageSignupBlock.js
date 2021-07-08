import styles from "./css/HomePageSignup.module.css";
import SignupBottomBlock from "./SignupBottomBlock";
import { useRef, useState, useEffect } from "react";
import { createOrUpdateRegistration, getUtm } from "../services";

export default function HomePageSignupBlock() {
  const emailRef = useRef();
  const emailErrorRef = useRef();

  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const ePattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  const emailSignUp = () => {
    let email = emailRef.current.value;
    if (email.length == 0 || !ePattern.test(email)) {
      emailErrorRef.current.textContent = "Invalid email";
      return false;
    }
    emailErrorRef.current.textContent = "";
    setEmail("");
    try {
      const utm = getUtm() || {};
      createOrUpdateRegistration({ email, ...utm });
    } catch (error) {
      console.error(error);
    }
    setIsSubmitted(true);
  };

  useEffect(() => {
    emailErrorRef.current.textContent = "";
  }, [email]);

  return (
    <section className={styles.signupBlock}>
      <div className={`container ${styles.signupWrapper}`}>
        <div className={styles.signupBox} data-scroll>
          <h3>Your Voyage to SMS Growth Starts Today</h3>
          <p className={styles.description}>
            Sign up now to access the most powerful full-stack message commerce
            platform in the world. We’ll reply before the day is done. Then it’s
            a free month of messages for your brand – on us.
          </p>
          <div className={styles.inputBox}>
            {isSubmitted && (
              <p className={styles.thankYou}>
                <span>
                  Great! Thanks so much for filling out our form. One of our
                  amazing team members will reach out to you shortly!
                </span>
              </p>
            )}
            <span
              id="smailSignUpError"
              ref={emailErrorRef}
              className={styles.emailError}
            ></span>
            <div id={styles.inputWrapper}>
              <input
                ref={emailRef}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                name="email"
                id="emailSignUp"
                autoComplete="off"
                placeholder="ENTER YOUR EMAIL"
              />
              <button onClick={() => emailSignUp()} id="emailSubmit">
                Start my Voyage &nbsp; 🚀
              </button>
            </div>
          </div>
          <p className={styles.extraInfo}>
            or Text <span>DEMO</span> to <span>(323) 370-0977</span>
          </p>
        </div>
      </div>
      <SignupBottomBlock />
    </section>
  );
}
