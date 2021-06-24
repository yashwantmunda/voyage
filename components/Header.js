import Link from 'next/link';
import Head from 'next/head';
import styles from '../components/css/header.module.css';
import { HeaderMenu } from '../data/headerFooterMenu';
import { useRef } from 'react';
import { createMedia } from "@artsy/fresnel"
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const { MediaContextProvider, Media } = createMedia({
    breakpoints: {
      sm: 0,
      md: 769,
      lg: 1024,
      xl: 1192,
    },
  });


export default function Header({setFormState}) {

    
    const mobileMenuRef = useRef();
    const overShadow = useRef();
    const openMenuDrawer = () => {
        gsap.to(mobileMenuRef.current, {duration:0.4,x:'0'});
        gsap.to(overShadow.current,{duration:0.3, opacity:1,autoAlpha:1});
    }
    const closeDrawer = () => {
        ScrollTrigger.matchMedia({
            // mobile
            "(max-width: 768px)": function() {
                gsap.to(mobileMenuRef.current, {duration:0.4,x:'100%'});
            }
        })
        
        gsap.to(overShadow.current,{duration:0.3, opacity:0,autoAlpha:0});
    }

    return (
        <>
        <Head>
            <link  rel="stylesheet" href="https://use.typekit.net/fva8jii.css" />
        </Head>
        <MediaContextProvider>
        <header className={styles.header} data-scroll-section>
            <nav className={`container ${styles.navbar}`} data-scroll>
                <div id={styles.logo_wrapper}>
                    <Link href="/">
                        <a>
                            <img className={styles.logo} src="/images/voyage_header_logo.svg" alt="voyage logo" />
                        </a>
                    </Link>
                    <Media lessThan="md">
                        <div className={styles.extra_menu}>
                            <a onClick={() => setFormState('open')} className={`form-popup ${styles.mobile_extra_menu}`}>Request Demo</a>
                            <div onClick={openMenuDrawer} className={styles.hamburger}>
                                <svg xmlns="http://www.w3.org/1000/svg" width="21" height="17" viewBox="0 0 21 17">
                                    <g fill="none" fillRule="evenodd" stroke="#000" strokeWidth="2">
                                        <path d="M0 .5L21 .5M0 7.5L21 7.5M0 14.5L21 14.5" transform="translate(0 1)"></path>
                                    </g>
                                </svg>
                            </div>
                        </div>
                    </Media>
                </div>
                <div className={`${styles.active} ${styles.header_menu_box}`} ref={mobileMenuRef}>
                    
                    <div className={styles.closeBtn} onClick={closeDrawer}>
                        <svg xmlns="http://www.w3.org/1000/svg" width="17" height="18" viewBox="0 0 17 18">
                            <g fill="none" fillRule="evenodd" stroke="#000" strokeWidth="2">
                                <path d="M-2 8.132L19 8.132" transform="translate(0 1) rotate(-46 8.5 8.132)"></path>
                                <path d="M-2 8L19 8" transform="translate(0 1) rotate(46 8.5 8)"></path>
                            </g>
                        </svg>
                    </div>
                    <div className={styles.left_menu}>

                        { HeaderMenu.map(item => ( <Link key={item.id} href={item.url}>
                           <a className={styles.menu_item}>{item.name}</a> 
                            </Link> ))
                        }

                    </div>
                    <div className={styles.demo_login}>
                        <a onClick={() => (setFormState('open'), closeDrawer())} className={`form-popup ${styles.demo_btn}`}>Request Demo</a>
                        <a className={styles.login_btn} href="https://app.voyagetext.com">Login</a>
                    </div>
                </div>
                <Media lessThan="md">
                    <div onClick={closeDrawer} className={`${styles.drawerShadow}`} ref={overShadow}></div>
                </Media>
            </nav>
        </header>
        </MediaContextProvider>
        </>
    )
}
