import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import GearIcon from '../images/gear-solid.svg';
import BannerOne from '../images/banner-blue.jpg';
import BannerTwo from '../images/banner-blue-2.jpg';
import BannerThree from '../images/banner-blue-3.jpg';
import styles from '../style.module.scss';

function Banner() {
  const location = useLocation();
  const isPortfolioPage = location.pathname === '/portfolio' || location.pathname === '/portfolio/';

  const [rotation, setRotation] = useState(0);

  

  const [cogPosition, setcogPosition] = useState(0);

  // const [cogPosition, setcogPosition] = useState('absolute');



  useEffect(() => {
    const handleScroll = () => {


      // if (window.scrollY >= 50) {
      //   setcogPosition('fixed');
      // } else {
      //   setcogPosition('absolute');
      // }

      // Get the scroll position relative to the entire document
      const scrollPosition = window.scrollY;

      

      // Calculate the rotation angle based on the scroll position
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const rotationAngle = (scrollPosition / maxScroll) * 360;

      // Set the rotation state
      setRotation(rotationAngle);

      setcogPosition(290);

      

      //console.log(rotationAngle);

    };

    // Add the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    {isPortfolioPage ? (

            <div className={styles.bannerportfolio}>
            <div className={styles.cog__menu} style={{top: cogPosition - rotation }}>
            <img src={GearIcon} alt="mini-menu" className={styles.cog__img} style={{ transform: `rotate(${rotation}deg)` }} />
            </div>
            <div className={styles.banner__navigation}>
            <span className={styles.banner__navigation1}></span>
            <span className={styles.banner__navigation2}></span>
            <span className={styles.banner__navigation3}></span>
            </div>

            <div className={styles.banner__card}>
            <div className={styles.bannerportfolio__container}>
              <h1 className={styles.banner__title}>
                <span className={styles.banner__italic}>My Portfolio</span>
              </h1>
            </div>
            <img className={styles.bannerportfolio__img} src={BannerOne} alt="Portfolio Page" />
          </div>


            </div>

    ) : (

        <div className={styles.banner}>
        <div className={styles.cog__menu}>
          <img src={GearIcon} alt="mini-menu" className={styles.cog__img} style={{ transform: `rotate(${rotation}deg)` }} />
        </div>
        <div className={styles.banner__navigation}>
          <span className={styles.banner__navigation1}></span>
          <span className={styles.banner__navigation2}></span>
          <span className={styles.banner__navigation3}></span>
        </div>

            <div className={styles.banner__card}>
              <div className={styles.banner__container}>
                <h1 className={styles.banner__title_1}>
                  <span className={styles.banner__italic}>I am a</span>Front End Developer...
                </h1>
              </div>
              <img className={styles.banner__img1} src={BannerOne} alt="I am a Front End Developer" />
            </div>

            <div className={styles.banner__card}>
              <div className={styles.banner__container}>
                <h1 className={styles.banner__title_2}>
                  <span className={styles.banner__italic}>I am a</span>Wordpress Developer...
                </h1>
              </div>
              <img className={styles.banner__img2} src={BannerTwo} alt="I am a WooCommerce Developer" />
            </div>

            <div className={styles.banner__card}>
              <div className={styles.banner__container}>
                <h1 className={styles.banner__title_3}>
                  <span className={styles.banner__italic}>I am a</span>WooCommerce Developer...
                </h1>
              </div>
              <img className={styles.banner__img3} src={BannerThree} alt="I am a Shopify Developer" />
            </div>
      </div>

    )}

    </>
  );
}

export default Banner;
