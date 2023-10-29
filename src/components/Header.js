import React, { useState, useEffect } from 'react';
import Profile from '../images/profile.jpg';
import AboutIcon from '../images/profile.svg';
import CvIcon from '../images/cv.svg';
import CodingIcon from '../images/coding-new.svg';
import HomeIcon from '../images/home.svg';
import PortfolioIcon from '../images/portfolio.svg';
import ContactIcon from '../images/contact.svg';
import { useLocation } from 'react-router-dom';
import styles from '../style.module.scss';

function Header() {

    const location = useLocation();
    const isPortfolioPage = location.pathname === '/portfolio' || location.pathname === '/portfolio/';


    const [menuHighlightAbout, setmenuHighlightAbout] = useState('transparent');
    const [menuOpacityAbout, setmenuOpacityAbout] = useState('0.6');

    const [menuHighlightCoding, setmenuHighlightCoding] = useState('transparent');
    const [menuOpacityCoding, setmenuOpacityCoding] = useState('0.6');

    const [menuHighlightExamplePortfolio, setmenuHighlightExamplePortfolio] = useState('transparent');
    const [menuOpacityExamplePortfolio, setmenuOpacityExamplePortfolio] = useState('0.6');

    const [menuHighlightExperience, setmenuHighlightExperience] = useState('transparent');
    const [menuOpacityExperience, setmenuOpacityExperience] = useState('0.6');

    const [menuHighlightContact, setmenuHighlightContact] = useState('transparent');
    const [menuOpacityContact, setmenuOpacityContact] = useState('0.6');

    const [menuHighlightContactPortfolio, setmenuHighlightContactPortfolio] = useState('transparent');
    const [menuOpacityContactPortfolio, setmenuOpacityContactPortfolio] = useState('0.6');




    useEffect(() => {

        const handleScroll = () => {
          if (window.innerWidth > 0 &&  window.innerWidth <= 768) {

            // console.log(window.scrollY);
            // console.log('ipad');

            if (window.scrollY >= 475 && window.scrollY <= 1405) {
              setmenuHighlightAbout('rgba(78, 182, 240, 0.8)');
              setmenuOpacityAbout('1');
            } else {
              setmenuHighlightAbout('transparent');
              setmenuOpacityAbout('0.6');
            }
            if (window.scrollY >= 1450 && window.scrollY <= 2222) {
              setmenuHighlightCoding('rgba(78, 182, 240, 0.8)');
              setmenuOpacityCoding('1');
            } else {
              setmenuHighlightCoding('transparent');
              setmenuOpacityCoding('0.6');
            }
            if (window.scrollY >= 2280 && window.scrollY <= 3920) {
              setmenuHighlightExperience('rgba(78, 182, 240, 0.8)');
              setmenuOpacityExperience('1');
            } else {
              setmenuHighlightExperience('transparent');
              setmenuOpacityExperience('0.6');
            }
            if (window.scrollY >= 4000 && window.scrollY <= 4500) {
              setmenuHighlightContact('rgba(78, 182, 240, 0.8)');
              setmenuOpacityContact('1');
            } else {
              setmenuHighlightContact('transparent');
              setmenuOpacityContact('0.6');
            }
            if (window.scrollY >= 390 && window.scrollY <= 1000) {
              setmenuHighlightExamplePortfolio('rgba(78, 182, 240, 0.8)');
              setmenuOpacityExamplePortfolio('1');
            } else {
              setmenuHighlightExamplePortfolio('transparent');
              setmenuOpacityExamplePortfolio('0.6');
            }
            if (window.scrollY >= 2350 && window.scrollY <= 4000) {
              setmenuHighlightContactPortfolio('rgba(78, 182, 240, 0.8)');
              setmenuOpacityContactPortfolio('1');
            } else {
              setmenuHighlightContactPortfolio('transparent');
              setmenuOpacityContactPortfolio('0.6');
            }
            
          } else if (window.innerWidth > 768 &&  window.innerWidth <= 1023) {

            // console.log(window.scrollY);
            // console.log('desktop-small');

            if (window.scrollY >= 476 && window.scrollY <= 1000) {
              setmenuHighlightAbout('rgba(78, 182, 240, 0.8)');
              setmenuOpacityAbout('1');
            } else {
              setmenuHighlightAbout('transparent');
              setmenuOpacityAbout('0.6');
            }
            if (window.scrollY >= 1140 && window.scrollY <= 2189) {
              setmenuHighlightCoding('rgba(78, 182, 240, 0.8)');
              setmenuOpacityCoding('1');
            } else {
              setmenuHighlightCoding('transparent');
              setmenuOpacityCoding('0.6');
            }
            if (window.scrollY >= 2250 && window.scrollY <= 3780) {
              setmenuHighlightExperience('rgba(78, 182, 240, 0.8)');
              setmenuOpacityExperience('1');
            } else {
              setmenuHighlightExperience('transparent');
              setmenuOpacityExperience('0.6');
            }
            if (window.scrollY >= 3870 && window.scrollY <= 4500) {
              setmenuHighlightContact('rgba(78, 182, 240, 0.8)');
              setmenuOpacityContact('1');
            } else {
              setmenuHighlightContact('transparent');
              setmenuOpacityContact('0.6');
            }
            if (window.scrollY >= 390 && window.scrollY <= 1000) {
              setmenuHighlightExamplePortfolio('rgba(78, 182, 240, 0.8)');
              setmenuOpacityExamplePortfolio('1');
            } else {
              setmenuHighlightExamplePortfolio('transparent');
              setmenuOpacityExamplePortfolio('0.6');
            }
            if (window.scrollY >= 2270 && window.scrollY <= 3000) {
              setmenuHighlightContactPortfolio('rgba(78, 182, 240, 0.8)');
              setmenuOpacityContactPortfolio('1');
            } else {
              setmenuHighlightContactPortfolio('transparent');
              setmenuOpacityContactPortfolio('0.6');
            }
          } else {

            // console.log(window.scrollY);
            // console.log('desktop');

            if (window.scrollY >= 476 && window.scrollY <= 1000) {
              setmenuHighlightAbout('rgba(78, 182, 240, 0.8)');
              setmenuOpacityAbout('1');
            } else {
              setmenuHighlightAbout('transparent');
              setmenuOpacityAbout('0.6');
            }
            if (window.scrollY >= 1140 && window.scrollY <= 1640) {
              setmenuHighlightCoding('rgba(78, 182, 240, 0.8)');
              setmenuOpacityCoding('1');
            } else {
              setmenuHighlightCoding('transparent');
              setmenuOpacityCoding('0.6');
            }
            if (window.scrollY >= 1750 && window.scrollY <= 2250) {
              setmenuHighlightExperience('rgba(78, 182, 240, 0.8)');
              setmenuOpacityExperience('1');
            } else {
              setmenuHighlightExperience('transparent');
              setmenuOpacityExperience('0.6');
            }
            if (window.scrollY >= 2450 && window.scrollY <= 3950) {
              setmenuHighlightContact('rgba(78, 182, 240, 0.8)');
              setmenuOpacityContact('1');
            } else {
              setmenuHighlightContact('transparent');
              setmenuOpacityContact('0.6');
            }
            if (window.scrollY >= 480 && window.scrollY <= 1000) {
              setmenuHighlightExamplePortfolio('rgba(78, 182, 240, 0.8)');
              setmenuOpacityExamplePortfolio('1');
            } else {
              setmenuHighlightExamplePortfolio('transparent');
              setmenuOpacityExamplePortfolio('0.6');
            }
            if (window.scrollY >= 1500 && window.scrollY <= 2000) {
              setmenuHighlightContactPortfolio('rgba(78, 182, 240, 0.8)');
              setmenuOpacityContactPortfolio('1');
            } else {
              setmenuHighlightContactPortfolio('transparent');
              setmenuOpacityContactPortfolio('0.6');
            }

          }


        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);




    return(
        <>



                
                <div className={styles.header__profile}>
                    
                <img className={styles.header__profileimg} src={ Profile } alt="Andrew Hosegood" />
                    
                </div>
                <div className={styles.header__sticky}>
                <p className={styles.header__profilename}>Andrew Hosegood</p>
                {isPortfolioPage ? (
                  <ul className={styles.header__menu}>
                    <li className={styles.header__menulist}><a className={styles.header__menulink} href="/"><img className={styles.header__profileicon} src={HomeIcon} alt="About Me" />HOME</a></li>
                    <li className={styles.header__menulist}><a style={{ background: menuHighlightExamplePortfolio, opacity: menuOpacityExamplePortfolio }} className={styles.header__menulink} href="#examples"><img className={styles.header__profileicon} src={ CvIcon } alt="CV" />WORK EXAMPLES</a></li>
                    <li className={styles.header__menulist}><a style={{ background: menuHighlightContactPortfolio, opacity: menuOpacityContactPortfolio }} className={styles.header__menulink} href="#contact"><img className={styles.header__profileicon} src={ ContactIcon } alt="Contact" />CONTACT</a></li>
                </ul>
                ) : (
                  <ul className={styles.header__menu}>
                    <li className={styles.header__menulist}><a style={{ background: menuHighlightAbout, opacity: menuOpacityAbout }} className={styles.header__menulink} href="#about"><img className={styles.header__profileicon} src={AboutIcon} alt="About Me" />ABOUT ME</a></li>
                    <li className={styles.header__menulist}><a style={{ background: menuHighlightCoding, opacity: menuOpacityCoding }} className={styles.header__menulink} href="#coding"><img className={styles.header__profileicon} src={ CodingIcon } alt="Coding Skills" />CODING SKILLS</a></li>
                    <li className={styles.header__menulist}><a style={{ background: menuHighlightExperience, opacity: menuOpacityExperience }} className={styles.header__menulink} href="#experience"><img className={styles.header__profileicon} src={ CvIcon } alt="Experience" />EXPERIENCE</a></li>
                    <li className={styles.header__menulist}><a style={{ background: menuHighlightContact, opacity: menuOpacityContact }} className={styles.header__menulink} href="#contact"><img className={styles.header__profileicon} src={ ContactIcon } alt="Contact" />CONTACT</a></li>
                    <li className={styles.header__menulist}><a className={styles.header__menulink} href="/portfolio/"><img className={styles.header__profileicon} src={ PortfolioIcon } alt="Portfolio" />PORTFOLIO</a></li>
                  </ul>
                )}

                </div>
        
            
            </>
    );

}

export default Header;