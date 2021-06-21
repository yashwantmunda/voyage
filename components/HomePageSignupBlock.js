import styles from './css/HomePageSignup.module.css';
import SignupBottomBlock from './SignupBottomBlock';


export default function HomePageSignupBlock() {

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
                        <div id={styles.inputWrapper}>
                            <input type="text" name="email" id="email" autoComplete="off" placeholder="ENTER YOUR EMAIL"/>
                            <button id="emailSubmit">SIGN UP</button>
                        </div>
                        <span className={styles.emailError}></span>
                    </div>
                    
                    <p className={styles.extraInfo}>or Text <span>DEMO</span> to <span>(323) 370-0977</span></p>
                </div>
            </div>
            <SignupBottomBlock />
        </section>
    )
}
