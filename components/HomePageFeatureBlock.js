import { features } from "../data/HomePageFeatureBlock";
import styles from "./css/homePageFeatureBlock.module.css";
import gsap from "gsap";
import { useRef, createRef } from "react";
import { createMedia } from "@artsy/fresnel";

export default function HomePageFeatureBlock() {
  const { MediaContextProvider, Media } = createMedia({
    breakpoints: {
      sm: 0,
      md: 769,
      lg: 1024,
      xl: 1192,
    },
  });

  const videoRefs = useRef([]);
  const introRefs = useRef([]);
  const buttonRefs = useRef([]);
  const toggleHeightRef = useRef();
  const textChange = useRef();
  const buttonWrapperRef = useRef();

  const slideHeight = (e) => {
    if (buttonWrapperRef.current.classList.contains("active")) {
      buttonWrapperRef.current.classList.remove("active");
      gsap.to(toggleHeightRef.current, {
        duration: 1,
        height: "211.614vw",
        ease: "ease-in",
      });
    } else {
      buttonWrapperRef.current.classList.add("active");
      gsap.to(toggleHeightRef.current, {
        duration: 1,
        height: "auto",
        ease: "ease-in",
      });
    }

    textChange.current.textContent =
      textChange.current.textContent == "All Features"
        ? "Hide Features"
        : "All Features";
  };

  const playVideo_removeIntro = (vref, iref, bref) => {
    iref.current.style.display = "none";
    bref.current.style.display = "none";
    vref.current.play();
  };

  const playPause = (vref, iref, bref) => {
    if (!vref.current.paused) {
      vref.current.pause();
      iref.current.style.display = "flex";
      bref.current.style.display = "block";
    } else {
      iref.current.style.display = "none";
      bref.current.style.display = "none";
      vref.current.play();
    }
  };

  features.featureData.map(
    (element, i) => (
      videoRefs.current.push(videoRefs.current[i] ?? createRef()),
      introRefs.current.push(introRefs.current[i] ?? createRef()),
      buttonRefs.current.push(buttonRefs.current[i] ?? createRef())
    )
  );

  return (
    <MediaContextProvider>
      <section id="featureBlockBox" className={styles.featureBlock}>
        <div className={styles.directionArrow}>
          <svg
            viewBox="0 0 104 98"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M104 48.5831L49 -0.000243485L49 97.1664L104 48.5831Z"
              fill="#02D9FC"
            />
            <path
              d="M49 48.5831L-6 -0.000243485L-6 97.1664L49 48.5831Z"
              fill="#02D9FC"
            />
          </svg>
        </div>
        <div className={`container ${styles.innerFeatureWrapper}`}>
          <h3 data-scroll>{features.title}</h3>
          <p data-scroll>{features.description}</p>
          <Media lessThan="md">
            <svg
              className={styles.stickyTag}
              viewBox="0 0 143 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 0H143V46H30C13.4315 46 0 32.5685 0 16V0Z"
                fill="#58EDC0"
              />
              <path
                d="M32.152 28.21C33.538 28.21 34.504 27.79 35.19 27.146C35.862 26.516 36.24 25.662 36.296 24.78H34.308C34.182 25.83 33.342 26.544 32.152 26.544C30.472 26.544 29.408 25.074 29.408 23.03C29.408 21.042 30.29 19.502 32.138 19.502C33.314 19.502 34.07 20.16 34.252 21.168H36.268C36.058 19.264 34.602 17.794 32.138 17.794C29.184 17.794 27.336 20.062 27.336 23.03C27.336 26.04 29.338 28.21 32.152 28.21ZM38.0403 28H44.7743V26.306H40.0703V17.99H38.0403V28ZM46.5746 28H48.6046V17.99H46.5746V28ZM55.2383 28.21C56.6243 28.21 57.5903 27.79 58.2763 27.146C58.9483 26.516 59.3263 25.662 59.3823 24.78H57.3943C57.2683 25.83 56.4283 26.544 55.2383 26.544C53.5583 26.544 52.4943 25.074 52.4943 23.03C52.4943 21.042 53.3763 19.502 55.2243 19.502C56.4003 19.502 57.1563 20.16 57.3383 21.168H59.3543C59.1443 19.264 57.6883 17.794 55.2243 17.794C52.2703 17.794 50.4223 20.062 50.4223 23.03C50.4223 26.04 52.4243 28.21 55.2383 28.21ZM61.1266 28H63.1566V24.36L64.1786 23.324L67.3986 28H69.7786L65.6066 21.994L69.5266 17.99H67.0066L63.1566 21.98V17.99H61.1266V28ZM73.7938 19.698H76.8038V28H78.8338V19.698H81.8438V17.99H73.7938V19.698ZM87.4742 28.224C90.4282 28.224 92.2902 26.012 92.2902 23.016C92.2902 20.02 90.4282 17.794 87.4742 17.794C84.5202 17.794 82.6442 20.02 82.6442 23.016C82.6442 26.012 84.5202 28.224 87.4742 28.224ZM87.4882 26.558C85.6542 26.558 84.7162 25.004 84.7162 23.016C84.7162 21.014 85.6542 19.46 87.4882 19.46C89.3222 19.46 90.2182 21.014 90.2182 23.016C90.2182 25.004 89.3222 26.558 87.4882 26.558ZM97.152 28H99.252V24.374H101.716C103.816 24.374 105.062 23.1 105.062 21.21C105.062 20.286 104.726 19.502 104.166 18.928C103.578 18.326 102.71 17.99 101.548 17.99H97.152V28ZM99.252 19.754H101.38C102.388 19.754 102.976 20.286 102.976 21.224C102.976 22.134 102.416 22.722 101.352 22.722H99.252V19.754ZM106.766 28H113.5V26.306H108.796V17.99H106.766V28ZM114.627 28H116.685L117.343 25.872H120.955L121.627 28H123.741L120.213 17.99H118.113L114.627 28ZM118.715 21.434C118.883 20.902 119.135 19.894 119.135 19.894H119.163C119.163 19.894 119.401 20.902 119.569 21.434L120.465 24.318H117.819L118.715 21.434ZM126.643 28H128.673V24.136L132.005 17.99H129.877L128.393 20.958C128.099 21.56 127.721 22.386 127.721 22.386H127.693C127.693 22.386 127.343 21.56 127.035 20.958L125.523 17.99H123.311L126.643 24.136V28Z"
                fill="#162740"
              />
            </svg>
          </Media>
          <div className={styles.featureGrid} ref={toggleHeightRef} data-scroll>
            {features.featureData.map((feature, index) => (
              <div key={index} className={styles.featureVideoWrapper}>
                <div
                  ref={introRefs.current[index]}
                  className={styles.videoIntroBlock}
                  style={{
                    backgroundImage: `url('/images/video-posters/${feature.featurePoster}')`,
                  }}
                >
                  <div className={styles.iconBox}>
                    <img src={`/images/video-posters/${feature.featureIcon}`} />
                  </div>
                  <h4>{feature.featureTitle}</h4>
                  <p className={feature.featureTitle.split(" ")[0]}>
                    {feature.featureSubtitle}
                  </p>
                </div>

                <video
                  onClick={() =>
                    playPause(
                      videoRefs.current[index],
                      introRefs.current[index],
                      buttonRefs.current[index]
                    )
                  }
                  ref={videoRefs.current[index]}
                  preload="auto"
                  poster={`/images/video-posters/${feature.featurePoster}`}
                >
                  <source
                    src={`/videos/${feature.featureVideo}`}
                    type="video/mp4"
                  />
                </video>
                <div
                  ref={buttonRefs.current[index]}
                  onClick={() =>
                    playVideo_removeIntro(
                      videoRefs.current[index],
                      introRefs.current[index],
                      buttonRefs.current[index]
                    )
                  }
                  className={styles.playBtn}
                ></div>
              </div>
            ))}
          </div>
          <Media lessThan="md">
            <div
              onClick={slideHeight}
              ref={buttonWrapperRef}
              className={`toggleSwitch ${styles.toggleFeatureBlock}`}
            >
              <span ref={textChange}>All Features</span>
              <svg
                viewBox="0 0 13 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.66016 7.16797C5.76953 7.33203 5.93359 7.38672 6.125 7.38672C6.28906 7.38672 6.45312 7.33203 6.58984 7.16797L11.8945 1.86328C12.0039 1.75391 12.0859 1.58984 12.0859 1.39844C12.0859 1.23438 12.0039 1.07031 11.8945 0.933594L11.293 0.332031C11.1562 0.222656 10.9922 0.140625 10.8281 0.140625C10.6367 0.140625 10.4727 0.195312 10.3633 0.304688L6.125 4.54297L1.88672 0.304688C1.75 0.195312 1.58594 0.140625 1.42188 0.140625C1.23047 0.140625 1.06641 0.222656 0.957031 0.332031L0.355469 0.933594C0.21875 1.07031 0.164062 1.23438 0.164062 1.39844C0.164062 1.58984 0.21875 1.75391 0.355469 1.86328L5.66016 7.16797Z"
                  fill="white"
                  fillOpacity="0.5"
                />
              </svg>
            </div>
          </Media>
        </div>
      </section>
    </MediaContextProvider>
  );
}
