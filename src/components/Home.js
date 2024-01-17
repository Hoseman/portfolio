import React, { useState, useEffect } from 'react';
import '../App.css';
import Header from '../components/Header';
import HeaderMobile from '../components/HeaderMobile';
import Banner from '../components/Banner';
import SkillsIcons from '../components/SkillsIcons';
import AboutMe from '../components/AboutMe';
import CodingSkills from '../components/CodingSkills';
import EducationExperience from '../components/EducationExperience';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import styles from '../style.module.scss';
import CloseIcon from '../images/close_white.svg';

function Home() {


    const [headerHidden, setHeaderHidden] = useState(false);
    const [contentHidden, setContentHidden] = useState(false);
    const [closeHidden, setCloseHidden] = useState(false);
  
    const [headerHiddenMobile, setHeaderHiddenMobile] = useState(false);
    const [contentHiddenMobile, setContentHiddenMobile] = useState(false);
  
  
    const [menuPosition, setMenuPosition] = useState('fixed');
  
  
  
  
    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY >= 400) {
            setMenuPosition('fixed');
          } else {
            setMenuPosition('fixed');
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
  
  
    const toggleHeader = () => {
          setHeaderHidden(!headerHidden);
          setContentHidden(!contentHidden);
          setCloseHidden(!closeHidden);
    }
  
    const headerClass = headerHidden ? styles.headerHidden : '';
    const contentClass = contentHidden ? styles.contentHidden : '';
    const closeClass = closeHidden ? styles.closeHidden : '';
  
  
    const toggleHeaderMobile = () => {
      setHeaderHiddenMobile(!headerHiddenMobile);
      setContentHiddenMobile(!contentHiddenMobile);
    }
  
  
    const headerClassMobile = !headerHiddenMobile ? styles.headerHiddenMobile : '';
    const contentClassMobile = contentHiddenMobile ? styles.contentHiddenMobile : '';


  return (
  
    <div className={styles.mycontainer}>
      <div className={styles.mobilemenu}>
          
      <input onClick={toggleHeaderMobile} className={styles.menubtn} type="checkbox" id="menu-btn" />
      <label className={styles.menuicon} for="menubtn"><span className={styles.navicon}></span></label>

      </div>


      <header style={{ position: menuPosition }} className={`${styles.headermobile} ${headerClassMobile}`}>
        <HeaderMobile />
      </header>



      <header style={{ position: menuPosition }} className={`${styles.header} ${headerClass}`}>
  
        <Header />
      </header>

        <img onClick={toggleHeader} className={`${styles.header__profileclose} ${closeClass}`} src={ CloseIcon } alt="Close" />
        <div className={`${styles.content} ${contentClass} ${contentClassMobile}`}>
              <Banner/>
              <SkillsIcons />
              <AboutMe />
              <CodingSkills />
              <EducationExperience />
              <Contact />
        </div>
      <Footer />
      

    </div>
  );
}

export default Home;