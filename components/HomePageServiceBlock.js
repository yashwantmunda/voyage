import { serviceBlockData } from '../data/HomePageServiceBlock';
import styles from './css/HomePageServiceBlock.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from 'react';
import { createMedia } from "@artsy/fresnel"


gsap.registerPlugin(ScrollTrigger);

const { MediaContextProvider, Media } = createMedia({
    breakpoints: {
      sm: 0,
      md: 769,
      lg: 1024,
      xl: 1192,
    },
  })



export default function HomePageServiceBlock() {
    
    useEffect(() => {

        ScrollTrigger.matchMedia({
  
            // desktop
            "(min-width: 769px)": function() {
                
                //   let sliders = gsap.utils.toArray('.commonSlideBox');
                 

                 
                }
            })
        

    },[]);

     

    return (
        <MediaContextProvider>
        <section className={styles.serviceBlock}>
            <div className={`panel container ${styles.innerServiceBlock}`}>
                <div className={styles.serviceProgressBlock}>
                    <div className={styles.serviceProgressBar}></div>
                </div>
                <div className={`${styles.serviceWrapper}`} data-scroll>

                    {
                        serviceBlockData.map((service,index) => (<div key={index} className={`commonSlideBox slide${index} ${styles.serviceBox}`}>
                            <div  className={styles.lefttextBox}>
                                <h3>
                                    {service.title}
                                </h3>
                                <Media greaterThanOrEqual="md">
                                    <p>
                                        {service.description}
                                    </p>
                                </Media>
                            </div>
                            <div className={styles.rightImageBlock}>
                                <div className={styles.imageWrap} style={{backgroundColor: service.bgColor}}>
                                    <img className={`mainBannerAnimation ${styles.mainImage}`} src={`/images/${service.bannerImage}`} />
                                    <img className={`cornerImageAnimation ${service.position} ${styles.cornerImage}`} src={`/images/${service.cornerImage}`} />
                                </div>
                                <Media lessThan="md">
                                    <p className={styles.mobileOnly}>
                                        {service.description}
                                    </p>
                                </Media>
                            </div>
    
                        </div>

                        ))
                    }
                    
                </div>
            </div>
        </section>
        </MediaContextProvider>
    )
}
