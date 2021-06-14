import styles from './css/HomePageIntegrationBlock.module.css';
export default function HomePageIntegrationBlock() {
    return (
        <section className={styles.integrationBlock} data-scroll-section>
            <div className={`container ${styles.integrationWrapper}`} data-scroll>
                <h3>Seamlessly integrates with your existing eCommerce tech stack</h3>
                <div className={styles.imageWrapper}></div>
            </div>
        </section>
    )
}
