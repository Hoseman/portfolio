import React, { useEffect, useState } from 'react';
import ArrowIconWhite from '../images/arrow_white.svg';
import styles from '../style.module.scss';

function Footer() {

    const [showScrollButton, setShowScrollButton] = useState(false);

      // Listen for scroll events and show/hide the button accordingly
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Enable smooth scrolling
    });
  };

    return(
        <footer className={styles.footer}>
            {/* <div className={styles.container}> */}
            <div className={styles.footer__column}>

                <div className={styles.footer__col}>
                    <h4 className={styles.footer__heading}>Quick Menu</h4>
                    <ul className={styles.footer__menu}>
                        <li className={styles.footer__menulist}><a href="#about">About Me</a></li>
                        <li className={styles.footer__menulist}><a href="#coding">Coding Skills</a></li>
                        <li className={styles.footer__menulist}><a href="#experience">Education And Experience</a></li>
                        <li className={styles.footer__menulist}><a href="#contact">Get In Touch</a></li>
                        <li className={styles.footer__menulist}><a href="/portfolio">Portfolio</a></li>
                    </ul>
                </div>

                <div className={styles.footer__col}>
                    <h4 className={styles.footer__heading}>Address</h4>
                    <ul className={styles.footer__menu}>
                        <li className={styles.footer__menulist}><a href="/.">Andrew Hosegood</a></li>
                        <li className={styles.footer__menulist}><a href="/.">13 Buttermere Close</a></li>
                        <li className={styles.footer__menulist}><a href="/.">Bletchley</a></li>
                        <li className={styles.footer__menulist}><a href="/.">Milton Keynes</a></li>
                        <li className={styles.footer__menulist}><a href="/.">MK2 3DG</a></li>
                    </ul>
                </div>

                <div className={styles.footer__col}>
                    <h4 className={styles.footer__heading}>Contact</h4>
                    <ul className={styles.footer__menu}>
                        <li className={styles.footer__menulist}><a href="tel:01908374543">Tel: 01908 374543</a></li>
                        <li className={styles.footer__menulist}><a href="tel:07375131776">Mobile: 07375 131776</a></li>
                        <li className={styles.footer__menulist}><a href="email:andrew.hosegood@sky.com">Email: andrew.hosegood@sky.com</a></li>
                    </ul>
                </div>

            </div>
            <div className={styles.footer__bottom}>
                <p>©Copyright 2023 Andrew Hosegood | Website built in React by Andrew Hosegood</p>
            </div>

            <button className={`${styles.scrolltotop} ${showScrollButton ? styles.show : ''}`} onClick={scrollToTop} ><img className={styles.scrolltotop__img} alt="Scroll Up" src={ ArrowIconWhite } /></button>

            {/* <a
                    href="xxx"
                    className={`${styles.scrolltotop} ${showScrollButton ? styles.show : ''}`}
                    onClick={scrollToTop}

            ><img className={styles.scrolltotop__img} alt="Scroll Up" src={ ArrowIconWhite } /></a> */}

            {/* </div> */}
        </footer>

       
    );

}

export default Footer;