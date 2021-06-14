import styles from './css/signupBottom.module.css';

export default function SignupBottomBlock() {
    return (
        <div className={styles.shapeBox}>
            <div className={styles.boxWrapper}>
                <div className={`${styles.circle} ${styles.small} ${styles.green}`}></div>
                <div className={`${styles.circle} ${styles.medium} ${styles.lightBlue}`}></div>
                <div className={`${styles.circle} ${styles.large} ${styles.lightBlue}`}></div>
                <div className={`${styles.square} ${styles.small} ${styles.navyblue}`}></div>
                <div className={`${styles.square} ${styles.medium} ${styles.navyblue}`}></div>
                <div className={`${styles.square} ${styles.large} ${styles.skyblue}`}></div>
            </div>
        </div>
    )
}
