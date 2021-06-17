import styles from './css/homePageVideoModal.module.css';
import { useEffect } from 'react';
import gsap from 'gsap';

export default function HomePageVideoModal({videoModalState,setVideoModalState}) {

    
    useEffect(() => {
        if(videoModalState == 'open'){
            gsap.to('.videoContainer',{ duration:0.35,opacity:1,autoAlpha:1,display:'block' });
        }
        else{
            gsap.to('.videoContainer',{ duration:0.35,opacity:0,autoAlpha:0,display:'none' });
        }
    }, [videoModalState])

    return (
        <div className={`videoContainer ${styles.VideoModalBlock}`}>
            <div className={styles.shadowBox} onClick={() => setVideoModalState('close')}></div>
            <div className={styles.videoModalWrapper}>
                <div className={styles.closeVideo} onClick={() => setVideoModalState('close')}>
                    <svg  viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="26" cy="26" r="26" fill="white" fillOpacity="0.2"/>
                        <path d="M28.7031 26L33.7656 20.9844C34.0469 20.7031 34.0469 20.1875 33.7656 19.9062L32.5938 18.7344C32.3125 18.4531 31.7969 18.4531 31.5156 18.7344L26.5 23.7969L21.4375 18.7344C21.1562 18.4531 20.6406 18.4531 20.3594 18.7344L19.1875 19.9062C18.9062 20.1875 18.9062 20.7031 19.1875 20.9844L24.25 26L19.1875 31.0625C18.9063 31.3438 18.9063 31.8594 19.1875 32.1406L20.3594 33.3125C20.6406 33.5938 21.1563 33.5938 21.4375 33.3125L26.5 28.25L31.5156 33.3125C31.7969 33.5938 32.3125 33.5938 32.5938 33.3125L33.7656 32.1406C34.0469 31.8594 34.0469 31.3437 33.7656 31.0625L28.7031 26Z" fill="white"/>
                    </svg>
                </div>
                <div className={styles.videoContainer}>

                </div>
            </div>
        </div>
    )
}
