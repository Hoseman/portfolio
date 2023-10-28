import React, { useState, useEffect } from 'react';
import AboutIconBlue from '../images/profile_blue.svg';
import Signature from '../images/signature.png';
import styles from '../style.module.scss';
import './animations.css';  

function AboutMe() {

  // State variable to track whether the user has scrolled past 500px
  const [aboutLeftAnimation, setaboutLeftAnimation] = useState(false);
  const [aboutRightAnimation, setaboutRightAnimation] = useState(false);

  // Function to handle scrolling and update the state
  const handleScroll = () => {
    if (window.scrollY > 350) {
      setaboutLeftAnimation(true);
    } else {
      setaboutLeftAnimation(false);
    }
    if (window.scrollY > 600) {
        setaboutRightAnimation(true);
      } else {
        setaboutRightAnimation(false);
      }
  };

  // Add a scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    // const [aboutLeft, setaboutLeft] = useState('0rem');
    // const [aboutLeftDuration, setaboutLeftDuration] = useState('0rem');
    // const [aboutRight, setaboutRight] = useState('0rem');
    // const [aboutRightDuration, setaboutRightDuration] = useState('0rem');

    // useEffect(() => {
    //     const handleScroll = () => {
    //       if (window.scrollY >= 500 ) {
    //         setaboutLeft('-1rem');
    //         setaboutLeftDuration('1rem');
    //       } else {
    //         setaboutLeft('0rem');
    //         setaboutLeftDuration('0rem');
    //       }
    //       if (window.scrollY >= 550 ) {
    //         setaboutRight('-1rem');
    //         setaboutRightDuration('1rem');
    //       } else {
    //         setaboutRight('0rem');
    //         setaboutRightDuration('0rem');
    //       }
    //     };
    
    //     window.addEventListener('scroll', handleScroll);
    
    //     return () => {
    //       window.removeEventListener('scroll', handleScroll);
    //     };
    //   }, []);

    return(
        <>

        <section id='about' className={styles.about}>
            <div className={styles.container}>
                <div className={styles.mainheading}>
                    <h1 className={styles.mainheading__title}>About Me</h1>
                    <img alt="About Me" src={AboutIconBlue} className={styles.mainheading__icon} />
                </div>
                <div className={styles.about__column}>
                    <div className={styles.about__col + (aboutLeftAnimation ? ' about_left_animation' : '')}>
                        <h2 className={styles.about__title}>Front End Developer</h2>
                        <p className={styles.about__content}>A meticulous front end developer with more than 10 years industry experience in web development and with a passion for Wordpress theme development.</p>
                        <p className={styles.about__content}>I offer a full custom bespoke wordpress build solution and I focus on designing simple, clean and professional responsive websites that work across all devices, from desktop to mobile.</p>
                        <img src={Signature} alt="Andrew Hosegood" className={styles.about__signature} />
                    </div>
                    <div className={styles.about__col + (aboutRightAnimation ? ' about_right_animation' : '')}>
                        <h3 className={styles.about__subtitle}>Personal Information</h3>
                        <h4 className={styles.about__info}><span className={styles.about__underline}>Name</span> :<span className={styles.about__infodetail}>Andrew Hosegood</span></h4>
                        <h4 className={styles.about__info}><span className={styles.about__underline}>Email</span> :<span className={styles.about__infodetail}>andrew.hosegood@sky.com</span></h4>
                        <h4 className={styles.about__info}><span className={styles.about__underline}>Phone</span> :<span className={styles.about__infodetail}>01908 374543</span></h4>
                        <h4 className={styles.about__info}><span className={styles.about__underline}>Mobile</span> :<span className={styles.about__infodetail}>07375 131776</span></h4>
                        <br></br>
                        <h4 className={styles.about__address}>13 Buttermere Close<br></br> Bletchley<br></br> Milton Keynes<br></br> MK2 3DG</h4>
                        <br></br>
                        <a className={styles.about__download} href="/">DOWNLOAD CV</a>
                    </div>  
                </div>
            </div>
        </section>

        </>
    );

}

export default AboutMe;