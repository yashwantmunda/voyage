import Link from 'next/link';
import styles from '../components/css/footer.module.css';
import { FooterProductMenu, FooterLegalMenu } from '../data/headerFooterMenu';
import FooterMenuBlock from './FooterMenuBlock';
import { OfficeAddress } from '../data/headerFooterMenu';

export default function Footer({setFormState}) {

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
                        <span onClick={() => setFormState('open')}>Get Connected</span>
                        <svg className={styles.arrow} viewBox="0 0 43 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M32.6226 1L40.6242 6.8657L32.6226 13.173" stroke="#5F8ED3" strokeWidth="2"/>
                            <path d="M0 7H39.6425" stroke="#5F8ED3" strokeWidth="2"/>
                        </svg>
                    </div>
                    <div className={styles.footerMenuWrapper}>

                        <FooterMenuBlock menu={footerProductMenu} />
                        <FooterMenuBlock menu={footerLegalMenu} />
                        <div className={styles.menuBlock}>
                            <h4>{OfficeAddress.menuTitle}</h4>
                            <p>
                            <span>1221 Ocean Ave</span><span>Suite 1605</span> <span>Santa Monica, CA 90401</span>
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
                            {/* <span>888 467 9417</span>
                            <span className={styles.divider}>|</span> */}
                            <a href="mailto:hello@voyagesms.com"><span>hello@voyagesms.com</span></a>
                        </div>
                    </div>

                </div>
            </footer>
        </>
    )
}
