import React, { useState, useEffect, useRef } from 'react';
import CodingIconBlue from '../images/coding_blue.svg';
import styles from '../style.module.scss';
//import PercentCounter from './PercentCounter';

function CodingSkills() {


    const [skillshtml, setskillshtml] = useState('0%');
    const [skillsjavascript, setskillsjavascript] = useState('20%');

    const [skillscss, setskillscss] = useState('0%');
    const [skillsphp, setskillsphp] = useState('20%');

    const [skillssass, setskillssass] = useState('10%');
    const [skillsjquery, setskillsjquery] = useState('15%');

    const [skillsreact, setskillsreact] = useState('55%');
    const [skillswordpress, setskillswordpress] = useState('10%');

    const [skillswoocommerce, setskillswoocommerce] = useState('10%');
    const [skillsshopify, setskillsshopify] = useState('50%');


    const [percentageHtml, setPercentageHtml] = useState(0);
    const animationStartedHtml = useRef(false);
  
    const [percentageJavascript, setPercentageJavascript] = useState(0);
    const animationStartedJavascript = useRef(false);

    const [percentageCss, setPercentageCss] = useState(0);
    const animationStartedCss = useRef(false);

    const [percentagePhp, setPercentagePhp] = useState(0);
    const animationStartedPhp = useRef(false);

    const [percentageSass, setPercentageSass] = useState(0);
    const animationStartedSass = useRef(false);

    const [percentageJquery, setPercentageJquery] = useState(0);
    const animationStartedJquery = useRef(false);

    const [percentageReact, setPercentageReact] = useState(0);
    const animationStartedReact = useRef(false);

    const [percentageWordpress, setPercentageWordpress] = useState(0);
    const animationStartedWordpress = useRef(false);

    const [percentageWoocommerce, setPercentageWoocommerce] = useState(0);
    const animationStartedWoocommerce = useRef(false);

    const [percentageShopify, setPercentageShopify] = useState(0);
    const animationStartedShopify = useRef(false);

    // HTML ANIMATION
    const startAnimationHtml = () => {
    if (!animationStartedHtml.current) {
    animationStartedHtml.current = true;
    const duration = 1000; // 2 seconds
    const frames = 100; // Number of frames

    for (let i = 0; i <= frames; i++) {
    setTimeout(() => {
        const newValue = (i / frames) * 100;
        setPercentageHtml(newValue);
    }, (i / frames) * duration);
    }
    }
    };
    // HTML ANIMATION

    // JAVASCRIPT ANIMATION
    const startAnimationJavascript = () => {
    if (!animationStartedJavascript.current) {
    animationStartedJavascript.current = true;
    const duration = 1000; // 2 seconds
    const frames = 100; // Number of frames

    for (let i = 0; i <= frames; i++) {
    setTimeout(() => {
        const newValue = (i / frames) * 80;
        setPercentageJavascript(newValue);
    }, (i / frames) * duration);
    }
    }
    };
    // JAVASCRIPT ANIMATION


    // CSS ANIMATION
    const startAnimationCss = () => {
            if (!animationStartedCss.current) {
                animationStartedCss.current = true;
                const duration = 1000; // 2 seconds
                const frames = 100; // Number of frames
            
                for (let i = 0; i <= frames; i++) {
                setTimeout(() => {
                    const newValue = (i / frames) * 100;
                    setPercentageCss(newValue);
                }, (i / frames) * duration);
                }
            }
    };
    // CSS ANIMATION

    // PHP ANIMATION
        const startAnimationPhp = () => {
            if (!animationStartedPhp.current) {
                animationStartedPhp.current = true;
                const duration = 1000; // 2 seconds
                const frames = 100; // Number of frames
            
                for (let i = 0; i <= frames; i++) {
                setTimeout(() => {
                    const newValue = (i / frames) * 75;
                    setPercentagePhp(newValue);
                }, (i / frames) * duration);
                }
            }
    };
    // PHP ANIMATION

    // SASS ANIMATION
    const startAnimationSass = () => {
        if (!animationStartedSass.current) {
            animationStartedSass.current = true;
            const duration = 1000; // 2 seconds
            const frames = 100; // Number of frames
        
            for (let i = 0; i <= frames; i++) {
            setTimeout(() => {
                const newValue = (i / frames) * 90;
                setPercentageSass(newValue);
            }, (i / frames) * duration);
            }
        }
    };
    // SASS ANIMATION

    // JQUERY ANIMATION
    const startAnimationJquery = () => {
        if (!animationStartedJquery.current) {
            animationStartedJquery.current = true;
            const duration = 1000; // 2 seconds
            const frames = 100; // Number of frames
        
            for (let i = 0; i <= frames; i++) {
            setTimeout(() => {
                const newValue = (i / frames) * 80;
                setPercentageJquery(newValue);
            }, (i / frames) * duration);
            }
        }
    };
    // JQUERY ANIMATION

    // JQUERY ANIMATION
    const startAnimationReact = () => {
        if (!animationStartedReact.current) {
            animationStartedReact.current = true;
            const duration = 1000; // 2 seconds
            const frames = 100; // Number of frames
        
            for (let i = 0; i <= frames; i++) {
            setTimeout(() => {
                const newValue = (i / frames) * 50;
                setPercentageReact(newValue);
            }, (i / frames) * duration);
            }
        }
    };
    // JQUERY ANIMATION

    // WORDPRESS ANIMATION
        const startAnimationWordpress = () => {
            if (!animationStartedWordpress.current) {
                animationStartedWordpress.current = true;
                const duration = 1000; // 2 seconds
                const frames = 100; // Number of frames
            
                for (let i = 0; i <= frames; i++) {
                setTimeout(() => {
                    const newValue = (i / frames) * 90;
                    setPercentageWordpress(newValue);
                }, (i / frames) * duration);
                }
            }
        };
    // WORDPRESS ANIMATION

    // WOOCOMMERCE ANIMATION
        const startAnimationWoocommerce = () => {
            if (!animationStartedWoocommerce.current) {
                animationStartedWoocommerce.current = true;
                const duration = 1000; // 2 seconds
                const frames = 100; // Number of frames
            
                for (let i = 0; i <= frames; i++) {
                setTimeout(() => {
                    const newValue = (i / frames) * 90;
                    setPercentageWoocommerce(newValue);
                }, (i / frames) * duration);
                }
            }
        };
    // WOOCOMMERCE ANIMATION

    // SHOPIFY ANIMATION
        const startAnimationShopify = () => {
            if (!animationStartedShopify.current) {
                animationStartedShopify.current = true;
                const duration = 1000; // 2 seconds
                const frames = 100; // Number of frames
            
                for (let i = 0; i <= frames; i++) {
                setTimeout(() => {
                    const newValue = (i / frames) * 60;
                    setPercentageShopify(newValue);
                }, (i / frames) * duration);
                }
            }
        };
    // SHOPIFY ANIMATION
  



    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY >= 800) {
            startAnimationHtml();
            startAnimationJavascript();
            setskillshtml('0%');
            setskillsjavascript('15%');
          } else {
            setskillshtml('81%');
            setskillsjavascript('78%');
          }
          if (window.scrollY >= 850) {
            startAnimationCss();
            startAnimationPhp();
            setskillscss('0%');
            setskillsphp('20%');
          } else {
            setskillscss('81%');
            setskillsphp('81%');
          }
          if (window.scrollY >= 900) {
            startAnimationSass();
            startAnimationJquery();
            setskillssass('10%');
            setskillsjquery('15%');
          } else {
            setskillssass('81%');
            setskillsjquery('81%');
          }
          if (window.scrollY >= 950) {
            startAnimationReact();
            startAnimationWordpress();
            setskillsreact('45%');
            setskillswordpress('8%');
          } else {
            setskillsreact('81%');
            setskillswordpress('78%');
          }
          if (window.scrollY >= 1000) {
            startAnimationWoocommerce();
            startAnimationShopify();
            setskillswoocommerce('10%');
            setskillsshopify('35%');
          } else {
            setskillswoocommerce('70%');
            setskillsshopify('80%');
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);



    return(

        

        <section id="coding" className={styles.coding}>

            <div className={styles.container}>
                <div className={styles.mainheading}>
                    <h1 className={styles.mainheading__title}>Coding Skills</h1>
                    <img alt="Coding Skills" src={CodingIconBlue} className={styles.mainheading__icon} />
                </div>
                <div className={styles.coding__column}>
                    <div className={styles.coding__col}>
                            <div className={styles.coding__skillcard}>
                                <p className={styles.coding__skilltitle}>HTML5</p>
                                <span className={styles.coding__skillbar}><span style={{ right: skillshtml }} className={styles.coding__skillbarscore_1}><span className={styles.coding__skillbarscore_triangle}></span><span className={styles.coding__skillbarscore_percent}>{percentageHtml.toFixed(0)}%</span></span></span>
                            </div>
                            <div className={styles.coding__skillcard}>
                                <p className={styles.coding__skilltitle}>CSS3</p>
                                <span className={styles.coding__skillbar}><span style={{ right: skillscss }} className={styles.coding__skillbarscore_2}><span className={styles.coding__skillbarscore_triangle}></span><span className={styles.coding__skillbarscore_percent}>{percentageCss.toFixed(0)}%</span></span></span>
                            </div>
                            <div className={styles.coding__skillcard}>
                                <p className={styles.coding__skilltitle}>SASS</p>
                                <span className={styles.coding__skillbar}><span style={{ right: skillssass }} className={styles.coding__skillbarscore_3}><span className={styles.coding__skillbarscore_triangle}></span><span className={styles.coding__skillbarscore_percent}>{percentageSass.toFixed(0)}%</span></span></span>
                            </div>
                            <div className={styles.coding__skillcard}>
                                <p className={styles.coding__skilltitle}>React</p>
                                <span className={styles.coding__skillbar}><span style={{ right: skillsreact }} className={styles.coding__skillbarscore_4}><span className={styles.coding__skillbarscore_triangle}></span><span className={styles.coding__skillbarscore_percent}>{percentageReact.toFixed(0)}%</span></span></span>
                            </div>
                            <div className={styles.coding__skillcard}>
                                <p className={styles.coding__skilltitle}>WooCommerce</p>
                                <span className={styles.coding__skillbar}><span style={{ right: skillswoocommerce }} className={styles.coding__skillbarscore_5}><span className={styles.coding__skillbarscore_triangle}></span><span className={styles.coding__skillbarscore_percent}>{percentageWoocommerce.toFixed(0)}%</span></span></span>
                            </div>
                    </div>
                    <div className={styles.coding__col}>
                            <div className={styles.coding__skillcard}>
                                <p className={styles.coding__skilltitle}>Javascript</p>
                                <span className={styles.coding__skillbar}><span style={{ right: skillsjavascript }} className={styles.coding__skillbarscore_6}><span className={styles.coding__skillbarscore_triangle}></span><span className={styles.coding__skillbarscore_percent}>{percentageJavascript.toFixed(0)}%</span></span></span>
                            </div>
                            <div className={styles.coding__skillcard}>
                                <p className={styles.coding__skilltitle}>PHP</p>
                                <span className={styles.coding__skillbar}><span style={{ right: skillsphp }} className={styles.coding__skillbarscore_7}><span className={styles.coding__skillbarscore_triangle}></span><span className={styles.coding__skillbarscore_percent}>{percentagePhp.toFixed(0)}%</span></span></span>
                            </div>
                            <div className={styles.coding__skillcard}>
                                <p className={styles.coding__skilltitle}>jQuery</p>
                                <span className={styles.coding__skillbar}><span style={{ right: skillsjquery }} className={styles.coding__skillbarscore_8}><span className={styles.coding__skillbarscore_triangle}></span><span className={styles.coding__skillbarscore_percent}>{percentageJquery.toFixed(0)}%</span></span></span>
                            </div>
                            <div className={styles.coding__skillcard}>
                                <p className={styles.coding__skilltitle}>Wordpress</p>
                                <span className={styles.coding__skillbar}><span style={{ right: skillswordpress }} className={styles.coding__skillbarscore_9}><span className={styles.coding__skillbarscore_triangle}></span><span className={styles.coding__skillbarscore_percent}>{percentageWordpress.toFixed(0)}%</span></span></span>
                            </div>
                            <div className={styles.coding__skillcard}>
                                <p className={styles.coding__skilltitle}>Shopify</p>
                                <span className={styles.coding__skillbar}><span style={{ right: skillsshopify }} className={styles.coding__skillbarscore_10}><span className={styles.coding__skillbarscore_triangle}></span><span className={styles.coding__skillbarscore_percent}>{percentageShopify.toFixed(0)}%</span></span></span>
                            </div>
                    </div>  
                </div>
            </div>
        </section>


    );

}

export default CodingSkills;