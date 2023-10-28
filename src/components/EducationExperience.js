import React, { useState, useEffect } from 'react';
import ExperienceIconBlue from '../images/certificate_blue.svg';
import styles from '../style.module.scss';

function EducationExperience() {

    const [educationLeftAnimation, seteducationLeftAnimation] = useState(false);
    const [educationRightAnimation, seteducationRightAnimation] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 1450) {
          seteducationLeftAnimation(true);
        } else {
          seteducationLeftAnimation(false);
        }
        if (window.scrollY > 1700) {
            seteducationRightAnimation(true);
          } else {
            seteducationRightAnimation(false);
          }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);


    return(


        <section id="experience" className={styles.experience}>
            <div className={styles.container}>
                <div className={styles.mainheading}>
                    <h1 className={styles.mainheading__title}><span className={styles.mainheading__mobilehide}>Education And </span>Experience</h1>
                    <img alt="Coding Skills" src={ExperienceIconBlue} className={styles.mainheading__icon} />
                </div>
                <div className={styles.experience__column}>

                    <div className={styles.experience__col + (educationLeftAnimation ? ' experience_left_animation' : '')}>
                            <h4 className={styles.experience__heading}>Experience</h4>
                            <div className={styles.experience__card}>
                                <div className={styles.experience__carddate}>
                                    <span className={styles.experience__timeline}>
                                        <p className={styles.experience__dateto}><span>Till</span><span> Present</span></p>
                                        <p className={styles.experience__datefrom}><span>Mar</span><span> 2023</span></p>
                                    </span>
                                </div>
                                <div className={styles.experience__carddetails}>
                                    <h4 className={styles.experience__title}>Front End Developer</h4>
                                    <p className={styles.experience__job}>Xigen Ltd</p>
                                    <p className={styles.experience__description}>Build custom bespoke Wordpress sites. Build custom bespoke WooCommerce sites. Maintain existing Xigen websites. Test websites in Browserstack.</p>
                                </div>
                            </div>

                            <div className={styles.experience__card}>
                                <div className={styles.experience__carddate}>
                                    <span className={styles.experience__timeline}>
                                        <p className={styles.experience__dateto}><span>Mar</span><span> 2023</span></p>
                                        <p className={styles.experience__datefrom}><span>Mar</span><span> 2021</span></p>
                                    </span>
                                </div>
                                <div className={styles.experience__carddetails}>
                                    <h4 className={styles.experience__title}>Front End Developer</h4>
                                    <p className={styles.experience__job}>Fluid Studios Ltd</p>
                                    <p className={styles.experience__description}>Build custom bespoke Wordpress sites. Build custom bespoke WooCommerce sites. Maintain existing Xigen websites. Test websites in Browserstack.</p>
                                </div>
                            </div>

                            <div className={styles.experience__card}>
                                <div className={styles.experience__carddate}>
                                    <span className={styles.experience__timeline}>
                                        <p className={styles.experience__dateto}><span>Mar</span><span> 2021</span></p>
                                        <p className={styles.experience__datefrom}><span>Jan</span><span> 2012</span></p>
                                    </span>
                                </div>
                                <div className={styles.experience__carddetails}>
                                    <h4 className={styles.experience__title}>Web Designer/Front End Developer</h4>
                                    <p className={styles.experience__job}>Big Marketing Ltd</p>
                                    <p className={styles.experience__description}>Build custom bespoke Wordpress sites. Build custom bespoke WooCommerce sites. Maintain existing Xigen websites. Test websites in Browserstack.</p>
                                </div>
                            </div>

                    </div>
                    <div className={styles.experience__col + (educationRightAnimation ? ' experience_right_animation' : '')}>
                    <h4 className={styles.experience__heading}>Education</h4>            
                    <div className={styles.experience__card}>
                                <div className={styles.experience__carddate}>
                                    <span className={styles.experience__timeline}>
                                        <p className={styles.experience__dateto}><span>July</span><span> 1987</span></p>
                                        <p className={styles.experience__datefrom}><span>Sept</span><span> 1985</span></p>
                                    </span>
                                </div>
                                <div className={styles.experience__carddetails}>
                                    <h4 className={styles.experience__title}>B'TECH HND in Graphic Design</h4>
                                    <p className={styles.experience__job}>Nene College, Northampton</p>
                                    <p className={styles.experience__description}>Build custom bespoke Wordpress sites. Build custom bespoke WooCommerce sites. Maintain existing Xigen websites. Test websites in Browserstack.</p>
                                </div>
                            </div>

                            <div className={styles.experience__card}>
                                <div className={styles.experience__carddate}>
                                    <span className={styles.experience__timeline}>
                                        <p className={styles.experience__dateto}><span>July</span><span> 1985</span></p>
                                        <p className={styles.experience__datefrom}><span>Sept</span><span> 1983</span></p>
                                    </span>
                                </div>
                                <div className={styles.experience__carddetails}>
                                    <h4 className={styles.experience__title}>B'TECH OND in Graphic Design</h4>
                                    <p className={styles.experience__job}>Nene College, Northampton</p>
                                    <p className={styles.experience__description}>Build custom bespoke Wordpress sites. Build custom bespoke WooCommerce sites. Maintain existing Xigen websites. Test websites in Browserstack.</p>
                                </div>
                            </div>

                            <div className={styles.experience__card}>
                                <div className={styles.experience__carddate}>
                                    <span className={styles.experience__timeline}>
                                        <p className={styles.experience__dateto}><span>July</span><span> 1983</span></p>
                                        <p className={styles.experience__datefrom}><span>Sept</span><span> 1977</span></p>
                                    </span>
                                </div>
                                <div className={styles.experience__carddetails}>
                                    <h4 className={styles.experience__title}>O Level & A Level studies</h4>
                                    <p className={styles.experience__job}>The Lord Grey School, Bletchley</p>
                                    <p className={styles.experience__description}>Build custom bespoke Wordpress sites. Build custom bespoke WooCommerce sites. Maintain existing Xigen websites. Test websites in Browserstack.</p>
                                </div>
                            </div>

                    </div> 

                </div>
            </div>
        </section>


    );

}

export default EducationExperience;