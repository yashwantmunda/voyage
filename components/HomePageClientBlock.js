import styles from './css/homePageClientBlock.module.css';
import { clientBlockData } from '../data/HomePageClientBlock';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from 'react';
import { createMedia } from "@artsy/fresnel"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

gsap.registerPlugin(ScrollTrigger);

const { MediaContextProvider, Media } = createMedia({
    breakpoints: {
      sm: 0,
      md: 769,
      lg: 1024,
      xl: 1192,
    },
  });

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode:true,
    centerPadding: "80px",
    cssEase:`cubic-bezier(.51,.11,.44,.96)`,
};

let logoNumber = clientBlockData.clientLogos.length;
let dataLength = logoNumber%3;
dataLength == 0 ? dataLength = Math.floor(logoNumber/3) : dataLength = Math.floor(logoNumber/3) +1;
export default function HomePageClientBlock() {
    
    useEffect(() => {
       
        gsap.from('.clientAnimate',
            {duration:0.4,y:"30%",opacity:0,stagger:0.1, ease:'ease.in',
            scrollTrigger: {
                trigger:'.clientContainer',
                start:'top 75%'
            }
         }
        )

    },[])
    return (
        <MediaContextProvider>
            
            <section className={styles.clientBlock}>
                <div className={`clientContainer container ${styles.innerClientBlock}`}>
                    <h2 className="clientTitleBlock">{clientBlockData.title}</h2>
                    <div className={styles.clientLogoWrapper} data-scroll>
                    <Media greaterThanOrEqual="md">
                        {
                            clientBlockData.clientLogos.map(data => ( <div key={data.alt} id={data.id} style={{width: data.width}} className={`clientAnimate ${styles.logoBlock}`}>
                                <img src={`/images/client_logos/${data.name}`} alt={data.alt} />
                            </div> ))
                        }
                    </Media>
                    <Media lessThan="md">
                    <Slider  {...settings}>
                            {
                             [...Array(dataLength).keys()].map((item,i) => (
                                 <div className={styles.clientThreeBox} key={i}>
                                     {
                                         clientBlockData.clientLogos.slice(3*i,3+3*i).map(data => ( <div key={data.alt} id={data.id} className={`clientAnimate ${styles.logoBlock}`}>
                                         <img src={`/images/client_logos/${data.name}`} alt={data.alt} style={{ height: data.height }}/>
                                             </div> ))
                                     }
                                 </div>                                
                             ))   
                            
                            }
                    </Slider>
                    </Media>
                    </div>
                    <div id={styles.bleachTriangle}></div>
                </div>
            </section>
            
        </MediaContextProvider>
    )
}
