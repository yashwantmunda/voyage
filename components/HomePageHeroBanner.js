import { HomePageHeroBannerData } from '../data/HomePageHeroBanner';
import styles from './css/heroBanner.module.css';
import gsap from 'gsap';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
const VideoModal = dynamic(() => import("./HomePageVideoModal"),{loading: () => null,ssr:false});

export default function HeroBanner({setFormState}) {
    
    const [videoModalState, setVideoModalState] = useState('close');

    const openForm = () => {
        setFormState('open');
    }
    const openVideoModal = (e) => {
        e.stopPropagation();
        setVideoModalState('open')
    }
    useEffect(() => {
        const timeline = gsap.timeline();
        timeline
        .from('#leftHomeBanner',{duration:0.4,y:'30%',opacity:0})
        .from('.mainHeroBanner',{ duration: 0.7,opacity:0,y:'30%'})
        .from('.messageSendAnimate',{ duration: 0.5, opacity:0,y:'50%' })
        .from('.animateRing',{ duration:1, scale:0.3, rotate: 320 })
        gsap.from('.messageAnimationOne',{ duration: 1.5, opacity: 0, y: '60%',ease: 'elastic',delay:2.8});
        gsap.from('.messageAnimationTwo',{ duration: 1.5, opacity: 0, y: '40%',delay: 3.4,ease: 'elastic'});
        gsap.from('.messageAnimationThree',{ duration: 1.5, opacity: 0, y: '40%',delay: 3.8,ease: 'elastic'});
        gsap.from('.messageAnimationFour',{ duration: 1.5, opacity: 0, y: '50%',delay:4.6,ease: 'elastic'});

        // gsap.from('#homePageTitle',{duration:0.4,y:'20%',opacity:0});
        // gsap.from('#homePageSubtext',{duration:0.4,y:'20%',opacity:0});

    }, [])
    return (
        <section id={styles.heroBanner}>
            <div className={styles.heroBanner_innerWrapper}>
                <div id="leftHomeBanner" className={styles.leftBlock} >
                    <h1 id="homePageTitle" className={styles.bannerTitle} data-scroll>{HomePageHeroBannerData.titleText}</h1>
                    <p id="homePageSubtext" className={styles.bannerText} data-scroll>
                        {HomePageHeroBannerData.subHeading}
                    </p>
                    <div className={styles.btnWrapper}>
                        <button onClick={openForm} className={`form-popup ${styles.trialBtn}`} data-scroll>
                            {HomePageHeroBannerData.bannerCtaText}
                        </button>
                        <div className={styles.videoPopup} data-scroll onClick={(e) => openVideoModal(e)}>
                            <svg viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="15.5" cy="15.5" r="15.5" fill="#7E7E7E"/>
                                <path d="M20.9706 13.9208C22.1863 14.6227 22.1863 16.3774 20.9706 17.0793L14.1324 21.0274C12.9167 21.7292 11.3971 20.8519 11.3971 19.4481L11.3971 11.552C11.3971 10.1483 12.9167 9.27091 14.1324 9.97279L20.9706 13.9208Z" fill="white"/>
                            </svg>
                            <div className={styles.spanText}>
                                <p data-scroll>{HomePageHeroBannerData.videoTitleText}</p>
                                <span data-scroll>{HomePageHeroBannerData.videoDuration} min</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.rating} data-scroll>
                        {
                           [...Array(HomePageHeroBannerData.rating).keys()].map((i) => ( <svg key={i} viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.8092 10.2941L17.4533 7.43759C17.9688 7.03194 17.7022 6.23753 17.0267 6.20373L12.3337 5.93329C12.0493 5.91639 11.8005 5.74737 11.6938 5.49384L9.96951 1.30208C9.72064 0.710504 8.84961 0.710504 8.60074 1.30208L6.87645 5.47693C6.76979 5.73047 6.52092 5.89949 6.2365 5.91639L1.5258 6.18683C0.850302 6.22063 0.583658 7.01504 1.09917 7.42069L4.7433 10.2603C4.95661 10.4293 5.06327 10.7166 4.99216 10.9702L3.80116 15.314C3.64117 15.9225 4.33444 16.4127 4.90328 16.0746L8.86738 13.6576C9.11625 13.5055 9.41845 13.5055 9.64954 13.6576L13.6314 16.0746C14.2003 16.4127 14.8935 15.9225 14.7335 15.314L13.5425 10.9871C13.4892 10.7335 13.5781 10.4631 13.8092 10.2941Z" fill="#E9B531" fillOpacity="0.9"/>
                            </svg>
                           ))
                        }
                    </div>

                    <p id={styles.ratedText} data-scroll>{HomePageHeroBannerData.ratingText}</p>
                    
                </div>

                <div className={styles.rightBlock}>
                    <div className={styles.messageEmitterBlock}>
                        <img data-scroll className="messageAnimationOne" id={styles.user_one} src="/images/user1_text.png" alt="User text message illustration"/>
                        <img data-scroll className="messageAnimationTwo" id={styles.user_two} src="/images/user2_text.png" alt="User text message illustration"/>
                        <img data-scroll className="messageAnimationThree" id={styles.user_two_text_two} src="/images/user2_text2.png" alt="User text message illustration"/>
                        <img data-scroll className="messageAnimationFour" id={styles.final_voyage_message} src="/images/final_voyage_sms.png" alt="voyage sms" />
                    </div>
                    <img data-scroll id={styles.dottedImage} src="/images/hero_dotted.jpeg" alt="illustration" />
                    <div className={styles.rightBlockBoundary}>
                        <div data-scroll className={`animateRing ${styles.boundaryRing}`}></div>
                        <div data-scroll className={`messageSendAnimate ${styles.triangleBox}`}>
                            <svg viewBox="0 0 98 98" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M48.7781 22.8467L25.9315 48.7108L71.6248 48.7108L48.7781 22.8467Z" fill="#162740"/>
                                <path d="M48.7789 48.8467L25.9322 74.7108L71.6255 74.7108L48.7789 48.8467Z" fill="#162740"/>
                            </svg>
                        </div>
                        <div data-scroll className={styles.messageIconBox}>
                        <svg viewBox="0 0 207 181" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M154.051 137.82L207 181V0H0V137.82H154.051Z" fill="#162740"/>
                            </svg>
                        </div>
                        <img data-scroll id={styles.mainImage} className="mainHeroBanner" src="/images/banner-right-block-banner.png" alt="home page banner"/>
                        <div data-scroll className={styles.baseBlockImage}>
                            <svg viewBox="0 0 207 181" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M154.051 137.82L207 181V0H0V137.82H154.051Z" fill="#02D9FC"/>
                            </svg>
                        </div>
                        <div data-scroll id={styles.darkBlueBlock}></div>
                    </div>
                </div>
            </div>
            <VideoModal videoModalState={videoModalState} setVideoModalState={setVideoModalState}/>
        </section>
    )
}
