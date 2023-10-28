import PortfolioIcon from '../images/portfolio.svg';
import HomeIcon from '../images/home.svg';
import { useLocation } from 'react-router-dom';
import styles from '../style.module.scss';

function HeaderMobile() {


    const location = useLocation();
    const isPortfolioPage = location.pathname === '/portfolio' || location.pathname === '/portfolio/';


    return(
        <>
        

                <div>
                    
                    {isPortfolioPage ? (

                    <ul className={styles.headermobile__menu}>
                        <li className={styles.headermobile__menulist}><a className={styles.headermobile__menulink} href="/"><img className={styles.headermobile__profileicon} src={HomeIcon} alt="About Me" />HOME</a></li>
                    </ul>

                    ) : (
                        <ul className={styles.headermobile__menu}>
                        <li className={styles.headermobile__menulist}><a className={styles.headermobile__menulink} href="/portfolio/"><img className={styles.headermobile__profileicon} src={ PortfolioIcon } alt="Portfolio" />PORTFOLIO</a></li>
                    </ul>

                    )}

                    
                </div>
        

            </>
    );

}

export default HeaderMobile;