import { homePageStats } from '../data/HomePageStatsBlock';
import styles from './css/homePageStatsBlock.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from 'react';


gsap.registerPlugin(ScrollTrigger);

export default function HomePageStatsBlock() {

    useEffect(() => {
       
        gsap.from('.statAnimate',
            {duration:0.5,y:"30%",opacity:0,stagger:0.3,
            scrollTrigger: {
                trigger:'.statsContainer',
                start:'top 75%',
            }
         }
        )

    },[])
    return (
        <section className={styles.statsBlock}> 
            <div className={`statsContainer container ${styles.innerStatsBlock}`} data-scroll>
                {
                    homePageStats.map((stats,index) => ( <div key={index} className={`statAnimate ${styles.keyStats}`}>
                        <div className={styles.iconDataBlock}>
                            <div style={{width:stats.iconWidth}} className={styles.imgIcon} dangerouslySetInnerHTML={{ __html: stats.iconData }}>
                            </div>
                            {/* <img src={`/images/${stats.icon}`} alt={stats.statTitle} style={{width:stats.iconWidth}}/> */}
                            <span>{stats.data}</span>
                        </div>
                        <p>{stats.statTitle}</p>
                        
                    </div>
                    ))
                    
                }
            </div>
        </section>
    )
}
