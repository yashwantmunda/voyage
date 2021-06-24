import styles from './css/HomePageSignup.module.css';
import SignupBottomBlock from './SignupBottomBlock';
import { useRef } from 'react';

export default function HomePageSignupBlock() {

    const emailRef = useRef();
    const emailErrorRef = useRef();
   
        const ePattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        const emailSignUp = () => {
            let email = emailRef.current.value;
            if (email.length == 0 || !ePattern.test(email)) {
                emailErrorRef.current.textContent = 'Invalid email';
                return false;
            }
             
            console.log('valid');

        }


    return (
        <section className={styles.signupBlock}>
            <div className={`container ${styles.signupWrapper}`}>
                <div className={styles.signupBox} data-scroll>
                    <h3>
                    Get started with a 30-day free trial!
                    </h3>
                    <p className={styles.description}>
                    Sign up now to get access to the most powerful full-stack text 
                    message commerce platform in the world. We will get back 
                    to you in less than 1 business day. Your first 30 days 
                    of text messages are on us!
                    </p>
                    <div className={styles.inputBox}>
                        <span id="smailSignUpError" ref={emailErrorRef} className={styles.emailError}></span>
                        <div id={styles.inputWrapper}>
                            <input ref={emailRef} type="text" name="email" id="emailSignUp" autoComplete="off" placeholder="ENTER YOUR EMAIL"/>
                            <button onClick={() => emailSignUp()} id="emailSubmit">SIGN UP</button>
                        </div>
                        
                    </div>
                    
                    <p className={styles.extraInfo}>or Text <span>DEMO</span> to <span>(323) 370-0977</span></p>
                </div>
            </div>
            <SignupBottomBlock />
        </section>
    )
}
