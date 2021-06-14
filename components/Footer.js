import Link from 'next/link';
import styles from '../components/css/footer.module.css';
import { FooterProductMenu, FooterLegalMenu } from '../data/headerFooterMenu';
import FooterMenuBlock from './FooterMenuBlock';

export default function Footer() {

    const footerProductMenu = {
        menuTitle : FooterProductMenu.menuTitle,
        menuList: FooterProductMenu.menuList
    }

    const footerLegalMenu = {
        menuTitle : FooterLegalMenu.menuTitle,
        menuList: FooterLegalMenu.menuList
    }

    return (
        <>
            <footer id={styles.footer_wrapper} data-scroll-section>
                <div className={`container ${styles.footer}`}>
                    <div className={`form-popup ${styles.connected}`}>
                        <span>Get Connected</span>
                        <svg className={styles.arrow} viewBox="0 0 43 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M32.6226 1L40.6242 6.8657L32.6226 13.173" stroke="#5F8ED3" strokeWidth="2"/>
                            <path d="M0 7H39.6425" stroke="#5F8ED3" strokeWidth="2"/>
                        </svg>
                    </div>
                    <div className={styles.footerMenuWrapper}>

                        <FooterMenuBlock menu={footerProductMenu} />
                        <FooterMenuBlock menu={footerLegalMenu} />
                        <div className={styles.menuBlock}>
                            <h4>Office</h4>
                            <p>
                                800 Wilshire Blvd. Ste. 200
                                Los Angeles, CA 90017
                            </p>
                        </div>

                    </div>

                    <div className={styles.footerBottom}>
                        <div className={styles.footerLogoWrap}>
                            <Link href="/">
                                <a>
                                    <img src="/images/footer_logo.svg" />
                                </a>
                            </Link>
                        </div>
                        <div className={styles.footerContact}>
                            <span>888 467 9417</span>
                            <span className={styles.divider}>|</span>
                            <a href="mailto:support@voyagetext.com"><span>support@voyagetext.com</span></a>
                        </div>
                    </div>

                </div>
            </footer>
        </>
    )
}
