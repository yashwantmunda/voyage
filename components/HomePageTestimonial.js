import { createRef, useRef} from 'react';
import { testimonialData } from '../data/HomePageTestimonialBlock';
import Slider from "react-slick";
import styles from './css/HomePageTestimonialBlock.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { createMedia } from "@artsy/fresnel"
import gsap from 'gsap';


export default function HomePageTestimonial() {

    const topReviewBoxRef = useRef();
    const reviewPopupRef = useRef();
    const sliderRef = useRef();
    const readMoreRef = useRef();
    const plusArrow = useRef();
    const minusArrow = useRef();

    const { MediaContextProvider, Media } = createMedia({
        breakpoints: {
          sm: 0,
          md: 769,
          lg: 1024,
          xl: 1192,
        },
      });
    

    const slickPrev = () => {
        sliderRef.current.slickPrev();
    }

    const slickNext = () => {
        sliderRef.current.slickNext();
    }

    const hideShadow = () => {
        gsap.to('.slick-active .reviewTextBox', {opacity:0,y:'-35%',duration:0.4,autoAlpha:0});
        gsap.to(topReviewBoxRef.current, {opacity:0,duration:0.3,autoAlpha:0}); 
    }

    const openCloseReview = () => {
        let t1 = gsap.timeline();
        if(reviewPopupRef.current.classList.contains('active')){
            t1.to('.reviewTextBox',{opacity:0,autoAlpha:0,display:'none'}).
            to('.mobileSummary',{opacity:1,autoAlpha:1,display:'block'});
            
            readMoreRef.current.textContent = 'Read More';
            minusArrow.current.style.display = 'none';
            plusArrow.current.style.display = 'block';
            
            reviewPopupRef.current.classList.remove('active');

        }else{
            
            t1.to('.mobileSummary',{opacity:0,autoAlpha:0,display:'none'}).
            to('.reviewTextBox',{opacity:1,autoAlpha:1,display:'block'});
            
            readMoreRef.current.textContent = 'Back';
            plusArrow.current.style.display = 'none';
            minusArrow.current.style.display = 'block';
            
            reviewPopupRef.current.classList.add('active');
        }

        
       
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase:`cubic-bezier(.51,.11,.44,.96)`,
    };


    return (     
        <MediaContextProvider>
        <section className={`${styles.testimonialBlock}`} >
            <Media lessThan="md">
                <div onClick={hideShadow} className={`${styles.topTestimonialBlock}`} ref={topReviewBoxRef}></div>
            </Media>
            <div className={`container ${styles.testimonialWrapper}`}>
                <div className={`slickController ${styles.controller}`} onClick={slickPrev} data-scroll>
                    <Media greaterThanOrEqual="md">
                        <svg viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M22.9998 10.0002C22.9998 9.63554 22.8549 9.2858 22.597 9.02794C22.3392 8.77008 21.9894 8.62521 21.6248 8.62521L5.69402 8.62522L11.5983 2.72372C11.7261 2.59587 11.8275 2.4441 11.8967 2.27707C11.9659 2.11004 12.0015 1.93101 12.0015 1.75022C12.0015 1.56942 11.9659 1.3904 11.8967 1.22336C11.8275 1.05633 11.7261 0.904557 11.5983 0.776715C11.4704 0.648873 11.3187 0.547463 11.1516 0.478276C10.9846 0.409089 10.8056 0.373481 10.6248 0.373481C10.444 0.373481 10.2649 0.409089 10.0979 0.478276C9.93088 0.547464 9.77911 0.648874 9.65127 0.776715L1.40127 9.02672C1.27322 9.15444 1.17163 9.30618 1.10231 9.47323C1.03299 9.64027 0.997314 9.81936 0.997314 10.0002C0.997314 10.1811 1.03299 10.3602 1.10231 10.5272C1.17163 10.6943 1.27322 10.846 1.40127 10.9737L9.65127 19.2237C9.90946 19.4819 10.2596 19.627 10.6248 19.627C10.9899 19.627 11.3401 19.4819 11.5983 19.2237C11.8565 18.9655 12.0015 18.6153 12.0015 18.2502C12.0015 17.8851 11.8565 17.5349 11.5983 17.2767L5.69402 11.3752L21.6248 11.3752C21.9894 11.3752 22.3392 11.2303 22.597 10.9725C22.8549 10.7146 22.9998 10.3649 22.9998 10.0002Z" fill="black"/>
                        </svg>
                    </Media>
                    <Media lessThan="md">
                    <svg viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.8281 21.2188L11.7656 20.3281C11.9531 20.0938 11.9531 19.7188 11.7656 19.5312L3.28125 11L11.7656 2.51562C11.9531 2.32812 11.9531 1.95312 11.7656 1.71875L10.8281 0.828125C10.5938 0.59375 10.2656 0.59375 10.0312 0.828125L0.1875 10.625C0 10.8594 0 11.1875 0.1875 11.4219L10.0312 21.2188C10.2656 21.4531 10.5938 21.4531 10.8281 21.2188Z" fill="white"/>
                    </svg>
                    </Media>
                    
                </div>
                <div className={`slickController ${styles.rightArrow} ${styles.controller}`} onClick={slickNext} data-scroll>
                <Media greaterThanOrEqual="md">
                    <svg  viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0.000231631 10.0002C0.000231663 9.63554 0.145095 9.2858 0.402959 9.02794C0.660821 8.77008 1.01056 8.62521 1.37523 8.62521L17.306 8.62522L11.4017 2.72372C11.2739 2.59587 11.1725 2.4441 11.1033 2.27707C11.0341 2.11004 10.9985 1.93101 10.9985 1.75022C10.9985 1.56942 11.0341 1.3904 11.1033 1.22336C11.1725 1.05633 11.2739 0.904557 11.4017 0.776715C11.5296 0.648873 11.6813 0.547463 11.8484 0.478276C12.0154 0.409089 12.1944 0.373481 12.3752 0.373481C12.556 0.373481 12.7351 0.409089 12.9021 0.478276C13.0691 0.547464 13.2209 0.648874 13.3487 0.776715L21.5987 9.02672C21.7268 9.15444 21.8284 9.30618 21.8977 9.47323C21.967 9.64027 22.0027 9.81936 22.0027 10.0002C22.0027 10.1811 21.967 10.3602 21.8977 10.5272C21.8284 10.6943 21.7268 10.846 21.5987 10.9737L13.3487 19.2237C13.0905 19.4819 12.7404 19.627 12.3752 19.627C12.0101 19.627 11.6599 19.4819 11.4017 19.2237C11.1435 18.9655 10.9985 18.6153 10.9985 18.2502C10.9985 17.8851 11.1435 17.5349 11.4017 17.2767L17.306 11.3752L1.37523 11.3752C1.01056 11.3752 0.660821 11.2303 0.402959 10.9725C0.145095 10.7146 0.000231599 10.3649 0.000231631 10.0002Z" fill="black"/>
                    </svg>
                </Media>  
                <Media lessThan="md">
                <svg viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.125 0.828125L0.1875 1.71875C0 1.95312 0 2.32812 0.1875 2.51562L8.67188 11L0.1875 19.5312C0 19.7188 0 20.0938 0.1875 20.3281L1.125 21.2188C1.35938 21.4531 1.6875 21.4531 1.92188 21.2188L11.7656 11.4219C11.9531 11.1875 11.9531 10.8594 11.7656 10.625L1.92188 0.828125C1.6875 0.59375 1.35938 0.59375 1.125 0.828125Z" fill="white"/>
                </svg>
                </Media>  
                </div>
                <div className={styles.testimonialSlider} data-scroll>
                    <Slider ref={sliderRef}  {...settings}>
                    {
                        testimonialData.map((testimonial,index) => ( <div key={index} className={styles.testimonialBox} data-scroll>

                        <div className={`slideLeft ${styles.testimonialTextBlock}`} data-scroll>
                            <div id={testimonial.clientName} className={styles.logoBlock} style={{width:testimonial.logoWidth}}>
                                <img src={`/images/${testimonial.clientLogo}`}  alt={testimonial.clientName} />
                            </div>
                            <h2>{testimonial.testimonialTitle}</h2>
                            
                                <Media greaterThanOrEqual="md">
                                <div className={styles.testimonialDetail}>
                                        <p className={styles.testimonialText}>
                                            {testimonial.testimonialText}
                                        </p>
                                        <p className={styles.reviewer}>{testimonial.reviewer}</p>
                                        <span className={styles.designation}>({testimonial.reviewerDesignation})</span>
                                        <div className={styles.ratingBlock}>
                                        {
                                            [...Array(testimonial.rating).keys()].map((i) => (<svg key={i} viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M13.8094 9.43567L17.4536 6.5792C17.9691 6.17354 17.7024 5.37914 17.0269 5.34533L12.334 5.0749C12.0496 5.05799 11.8007 4.88897 11.694 4.63544L9.96976 0.443684C9.72089 -0.147895 8.84985 -0.147895 8.60098 0.443684L6.87669 4.61854C6.77003 4.87207 6.52117 5.04109 6.23675 5.05799L1.52604 5.32843C0.850546 5.36223 0.583902 6.15664 1.09941 6.56229L4.74354 9.40187C4.95686 9.57089 5.06351 9.85823 4.99241 10.1118L3.8014 14.4556C3.64141 15.0641 4.33469 15.5543 4.90353 15.2162L8.86763 12.7992C9.1165 12.6471 9.41869 12.6471 9.64978 12.7992L13.6317 15.2162C14.2005 15.5543 14.8938 15.0641 14.7338 14.4556L13.5428 10.1287C13.4895 9.87513 13.5783 9.6047 13.8094 9.43567Z" fill="#E9B531" fillOpacity="0.9"/>
                                                </svg>
                                            ))
                                        }
                                        </div>
                                </div>
                                </Media>    
                              
                            
                        </div>

                        <div className={`slideIn ${styles.sampleBlock}`} data-scroll>
                            <img src={`/images/${testimonial.modalImage}`} alt={testimonial.clientName} />
                        </div>

                        <div className={`slideLeft mobileSummary ${styles.summaryBlock}`} data-scroll>
                            {
                                testimonial.summaryPoints.map((point,index) => (<div key={index} className={styles.stepBox}>
                                    <div className={styles.counter}><span>0{index+1}</span></div>
                                    <p>{point.title}</p>
                                </div>
                              ))
                            }

                        </div>    
                        {/* reviewtext as an overlay in mobile */}
                        <Media lessThan="md">
                        <div className={`reviewTextBox ${styles.testimonialDetail}`}> 
                            
                                <p className={styles.testimonialText}>
                                    {testimonial.testimonialText}
                                </p>
                                <div className={styles.mobileReviewBox}>
                                    <div className={styles.nameDesignationBlock}>
                                        <p className={styles.reviewer}>{testimonial.reviewer}</p>
                                        <span className={styles.designation}>({testimonial.reviewerDesignation})</span>
                                    </div>
                            
                                <div className={styles.ratingBlock}>
                                    {
                                        [...Array(testimonial.rating).keys()].map((i) => (<svg key={i} viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13.8094 9.43567L17.4536 6.5792C17.9691 6.17354 17.7024 5.37914 17.0269 5.34533L12.334 5.0749C12.0496 5.05799 11.8007 4.88897 11.694 4.63544L9.96976 0.443684C9.72089 -0.147895 8.84985 -0.147895 8.60098 0.443684L6.87669 4.61854C6.77003 4.87207 6.52117 5.04109 6.23675 5.05799L1.52604 5.32843C0.850546 5.36223 0.583902 6.15664 1.09941 6.56229L4.74354 9.40187C4.95686 9.57089 5.06351 9.85823 4.99241 10.1118L3.8014 14.4556C3.64141 15.0641 4.33469 15.5543 4.90353 15.2162L8.86763 12.7992C9.1165 12.6471 9.41869 12.6471 9.64978 12.7992L13.6317 15.2162C14.2005 15.5543 14.8938 15.0641 14.7338 14.4556L13.5428 10.1287C13.4895 9.87513 13.5783 9.6047 13.8094 9.43567Z" fill="#E9B531" fillOpacity="0.9"/>
                                            </svg>
                                        ))
                                    }
                                </div>

                                </div>
                        </div>
                        </Media> 
                        {/* reviewtext as an overlay in mobile */}       
                    </div>

                    ))
                    }
                </Slider>
                </div>
                
                {/* bottom left circle box */}
                <Media greaterThanOrEqual="md">
                    <div className={styles.darkCircle}>
                        <img src="/images/green-dots.svg" alt="green dotted illustrations" />
                    </div>
                </Media>
                <Media lessThan="md">
                    <div onClick={openCloseReview} className={styles.reviewPopup} ref={reviewPopupRef}>
                        <span id="read-more" ref={readMoreRef}>READ MORE</span>
                        <svg ref={plusArrow} className='plus' viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.0625 4.875H6.125V0.9375C6.125 0.71875 5.90625 0.5 5.6875 0.5H4.8125C4.56641 0.5 4.375 0.71875 4.375 0.9375V4.875H0.4375C0.191406 4.875 0 5.09375 0 5.3125V6.1875C0 6.43359 0.191406 6.625 0.4375 6.625H4.375V10.5625C4.375 10.8086 4.56641 11 4.8125 11H5.6875C5.90625 11 6.125 10.8086 6.125 10.5625V6.625H10.0625C10.2812 6.625 10.5 6.43359 10.5 6.1875V5.3125C10.5 5.09375 10.2812 4.875 10.0625 4.875Z" fill="#B2BEFD"/>
                        </svg>
                        <svg ref={minusArrow} className={`minus ${styles.minus}`} viewBox="0 0 11 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.0625 0.875H0.4375C0.191406 0.875 0 1.09375 0 1.3125V2.1875C0 2.43359 0.191406 2.625 0.4375 2.625H10.0625C10.2812 2.625 10.5 2.43359 10.5 2.1875V1.3125C10.5 1.09375 10.2812 0.875 10.0625 0.875Z" fill="#B2BEFD"/>
                        </svg>
                    </div>
                </Media>
            </div>
        </section>
        </MediaContextProvider>
    )
}
