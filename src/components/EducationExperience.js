import React, { useState, useEffect } from 'react';
import ExperienceIconBlue from '../images/certificate_blue.svg';
import styles from '../style.module.scss';

function EducationExperience() {

    const [educationLeftAnimation, seteducationLeftAnimation] = useState(false);
    const [educationRightAnimation, seteducationRightAnimation] = useState(false);
    const [showMoreExperience, setShowMoreExperience] = useState(false);

    const toggleExperience = () => {
        setShowMoreExperience(!showMoreExperience);
    };


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
                                        <p className={styles.experience__datefrom}><span>Feb</span><span> 2024</span></p>
                                    </span>
                                </div>
                                <div className={styles.experience__carddetails}>
                                    <h4 className={styles.experience__title}>Full Stack Developer/Website Manager</h4>
                                    <p className={styles.experience__job}>Universal Science Ltd</p>
                                    <p className={styles.experience__description}>Employed to develop and maintain the companies Materials Direct WooCommerce website. I work with the managing director to build new features for the website.</p>
                                    <ul className={styles.experience__list}>
                                        <li className={styles.experience__listli}><span>Built a large scale custom bespoke delivery options system which enables a customer to be able to book a split and schedule order. The system has its own admin and sends out custom invoices and delivery notes to the customer.</span></li>
                                        <li className={styles.experience__listli}><span>Built a custom voucher system from scratch to fit within the companys requirements.</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className={styles.experience__card}>
                                <div className={styles.experience__carddate}>
                                    <span className={styles.experience__timeline}>
                                        <p className={styles.experience__dateto}><span>Feb</span><span> 2024</span></p>
                                        <p className={styles.experience__datefrom}><span>Mar</span><span> 2023</span></p>
                                    </span>
                                </div>
                                <div className={styles.experience__carddetails}>
                                    <h4 className={styles.experience__title}>Front End Developer</h4>
                                    <p className={styles.experience__job}>Xigen Ltd</p>
                                    <p className={styles.experience__description}>I worked within a big web development team and help with the maintenance of the companies fleet of client based websites.</p>
                                    <ul className={styles.experience__list}>
                                        <li className={styles.experience__listli}><span>Built a multi-lingual Wordpress website in 20 languages.</span></li>
                                        <li className={styles.experience__listli}><span>Helped maintain the companies fleet of client based websites.</span></li>
                                    </ul>
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
                                    <p className={styles.experience__description}>I worked at Fluid Studios with the technical director and 1 other front end developer, building custom Wordpress sites and Custom WooCommerce sites. All sites built from scratch using BEM methodology.</p>
                                    <ul className={styles.experience__list}>
                                        <li className={styles.experience__listli}><span>Built a large scale Woocommerce website for a glasses company from scratch, with customisation of the standard WooCommerce user journey.</span></li>
                                        <li className={styles.experience__listli}><span>Built custom Wordpress site for a charity based tree conservation company and created an interactive map with pins and a database of 800 trees with a search functionality. Plus I managed and executed the database migration.</span></li>
                                    </ul>
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
                                    <p className={styles.experience__description}>I worked at Big Marketing within a team of 4 developers, building themes and plugins for Wordpress and building e-commerce sites using Prestashop, Opencart and WooCommerce. All sites were built using the Bootstrap framework.</p>
                                    <ul className={styles.experience__list}>
                                        <li className={styles.experience__listli}><span>I built a leaderboard plugin for Wordpress which was used for motor trade quarterly sales incentives. The plugin had a backend with settings for quickly building out a sales incentive micro site in 4 hours.</span></li>
                                        <li className={styles.experience__listli}><span>I also built an online 'eshot builder' application, with backend settings. The app enabled anyone with no coding knowledge to quickly build an html email, which increased work turnaround for the companies daily client based eshot campaigns.</span></li>
                                    </ul>
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
                                    <p className={styles.experience__description}>Two years at Nene College, Northamption studying graphic design at ordinary national diploma level</p>
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
                                    <p className={styles.experience__description}>Two years at Nene College, Northamption studying graphic design at higher national diploma level.</p>
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
                                    <p className={styles.experience__description}>Five CSE's, 3 O Levels (art, design, english language) and one A level (art)</p>
                                </div>
                            </div>

                    </div> 


                </div>


                <button onClick={toggleExperience} className={styles.experience__viewmore}>
              {showMoreExperience ? 'VIEW LESS EXPERIENCE' : 'VIEW MORE EXPERIENCE'}
            </button>


                {showMoreExperience && (
                    <div className={styles.experience__column}>
                        {/* Additional experience cards */}

                        <div className={styles.experience__col + (educationLeftAnimation ? ' experience_left_animation' : '')}>
    

                        <div className={styles.experience__card}>
                                        <div className={styles.experience__carddate}>
                                            <span className={styles.experience__timeline}>
                                                <p className={styles.experience__dateto}><span>Jan</span><span> 2012</span></p>
                                                <p className={styles.experience__datefrom}><span>Dec</span><span> 2012</span></p>
                                            </span>
                                        </div>
                                        <div className={styles.experience__carddetails}>
                                            <h4 className={styles.experience__title}>Artworker/Web Designer</h4>
                                            <p className={styles.experience__job}>Abstract Group</p>
                                            <p className={styles.experience__description}>The design, maintenance and upkeep of the Annodata corporate website. Developing a corporate brand for Annodata. Designing brochures, leaflets and printed collateral for Annodata. Creating HTML emails. Working on the corporate branding for the Abstract Group side of the company. Designing websites for external clients. Supplying print ready artwork for the digital print and litho departments.</p>
                                        </div>
                                    </div>

                                    <div className={styles.experience__card}>
                                        <div className={styles.experience__carddate}>
                                            <span className={styles.experience__timeline}>
                                                <p className={styles.experience__dateto}><span>Jul</span><span> 2005</span></p>
                                                <p className={styles.experience__datefrom}><span>Dec</span><span> 2011</span></p>
                                            </span>
                                        </div>
                                        <div className={styles.experience__carddetails}>
                                            <h4 className={styles.experience__title}>Artworker/Web Designer</h4>
                                            <p className={styles.experience__job}>Annodata Print Services</p>
                                            <p className={styles.experience__description}>The design, maintenance and upkeep of the Annodata corporate website. Design and build of websites for external clients. Developing a corporate brand for Annodata. Designing brochures, newsletters, mailers, leaflets, logos and exhibition panels. Creating HTML emails. Supplying print ready artwork for the digital print and litho departments.</p>
                                        </div>
                                    </div>

                                    <div className={styles.experience__card}>
                                        <div className={styles.experience__carddate}>
                                            <span className={styles.experience__timeline}>
                                                <p className={styles.experience__dateto}><span>Mar</span><span> 1996</span></p>
                                                <p className={styles.experience__datefrom}><span>Jul</span><span> 2005</span></p>
                                            </span>
                                        </div>
                                        <div className={styles.experience__carddetails}>
                                            <h4 className={styles.experience__title}>Artworker</h4>
                                            <p className={styles.experience__job}>Turners Creative</p>
                                            <p className={styles.experience__description}>The design maintenance and upkeep of the Turners Creative website. High-end scanning, Photoshop re-touching and montage work. Technical illustration such as architects floor plans, maps, and line drawings. Designing video sleeves, brochures, mailers, leaflets, corporate identities.</p>
                                        </div>
                                    </div>

                                    <div className={styles.experience__card}>
                                        <div className={styles.experience__carddate}>
                                            <span className={styles.experience__timeline}>
                                                <p className={styles.experience__dateto}><span>Mar</span><span> 1996</span></p>
                                                <p className={styles.experience__datefrom}><span>Feb</span><span> 1990</span></p>
                                            </span>
                                        </div>
                                        <div className={styles.experience__carddetails}>
                                            <h4 className={styles.experience__title}>Graphic Designer</h4>
                                            <p className={styles.experience__job}>Anker International</p>
                                            <p className={styles.experience__description}>At Anker International I worked within a small in-house design studio designing photo albums, photo frames, stationery products and partyware. I was eventually appointed studio manager at this company.</p>
                                        </div>
                                    </div>

                                    <div className={styles.experience__card}>
                                        <div className={styles.experience__carddate}>
                                            <span className={styles.experience__timeline}>
                                                <p className={styles.experience__dateto}><span>Apr</span><span> 1989</span></p>
                                                <p className={styles.experience__datefrom}><span>Feb</span><span> 1990</span></p>
                                            </span>
                                        </div>
                                        <div className={styles.experience__carddetails}>
                                            <h4 className={styles.experience__title}>Graphic Designer</h4>
                                            <p className={styles.experience__job}>Tyler Camoccio Design</p>
                                            <p className={styles.experience__description}>Working for a small graphic design agency in Ampthill, I took on a creative role, working on a variety of projects, from design to finished artwork, including designing packaging for Sondico Sports. My duties included generating ideas as marker visuals, creating mock-ups and producing camera-ready artwork.</p>
                                        </div>
                                    </div>

                                    <div className={styles.experience__card}>
                                        <div className={styles.experience__carddate}>
                                            <span className={styles.experience__timeline}>
                                                <p className={styles.experience__dateto}><span>Jul</span><span> 1988</span></p>
                                                <p className={styles.experience__datefrom}><span>Mar</span><span> 1989</span></p>
                                            </span>
                                        </div>
                                        <div className={styles.experience__carddetails}>
                                            <h4 className={styles.experience__title}>Graphic Designer</h4>
                                            <p className={styles.experience__job}>Slideshow</p>
                                            <p className={styles.experience__description}>Working in Central Milton Keynes and London, I was involved in creating slide presentations and graphics for local corporate companies. All the work was PC based computer graphics, using software applications called Freelance and PictureIT.</p>
                                        </div>
                                    </div>

                                    <div className={styles.experience__card}>
                                        <div className={styles.experience__carddate}>
                                            <span className={styles.experience__timeline}>
                                                <p className={styles.experience__dateto}><span>Sept</span><span> 1987</span></p>
                                                <p className={styles.experience__datefrom}><span>Jul</span><span> 1988</span></p>
                                            </span>
                                        </div>
                                        <div className={styles.experience__carddetails}>
                                            <h4 className={styles.experience__title}>Graphic Designer</h4>
                                            <p className={styles.experience__job}>Avatar Publishing Ltd</p>
                                            <p className={styles.experience__description}>My first job after leaving college. Mainly involved in design and artwork for Woolworths training manuals. My duties included generating ideas as marker visuals, creating mock-ups, liaising with typesetters, and creating camera-ready artwork.</p>
                                        </div>
                                    </div>


                        </div>
                        <div className={styles.experience__col + (educationRightAnimation ? ' experience_right_animation' : '')}>

                        </div> 

                        {/* ... */}
                    </div>
                )}


            </div>
        </section>


    );

}

export default EducationExperience;