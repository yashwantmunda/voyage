import styles from './css/homePageCompliance.module.css'
import { complianceData } from '../data/HomePageComplianceBlock';

export default function HomePageComplianceBlock() {
    return (
        <section className={styles.complianceBlock}>
            <div className={`container ${styles.complianceWrapper}`}>
                <div className={styles.innerContent}>
                    <div className={styles.iconBox}>
                        <div className={styles.innerIconBox}>
                            <svg viewBox="0 0 65 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M65 37.6861C60.4816 39.9925 55.3592 41.2941 49.9311 41.2941C31.6792 41.2941 16.8831 26.5784 16.8831 8.4257C16.8831 5.51312 17.2641 2.68903 17.979 0C7.3041 5.44886 0 16.5063 0 29.2604C0 47.4131 14.7961 62.1288 33.048 62.1288C48.3714 62.1288 61.2589 51.7565 65 37.6861Z" fill="#5BEBC1"/>
                            </svg>
                        </div>
                    </div>
                    <div className={styles.complianceTextBlock}>
                        
                        <h2>
                            {complianceData.title}
                        </h2>
                        <p>
                            {complianceData.description}
                        </p>
                    </div>
                    <div className={styles.logoBlock}>
                        <img src="/images/compliance-with.png" alt="compliance image" />
                    </div>
                </div>
            </div>
        </section>
    )
}
