import HtmlIcon from '../images/html.png';
import SassIcon from '../images/sass.png';
import CssIcon from '../images/css.png';
import WordpressIcon from '../images/wordpress.png';
import ShopifyIcon from '../images/shopify.png';
import WoocommerceIcon from '../images/woocommerce.png';
import JqueryIcon from '../images/jquery.png';
import JavascriptIcon from '../images/javascript.png';
import PhpIcon from '../images/php.png';
import styles from '../style.module.scss';

function SkillsIcons() {

    return(
        <div className={styles.skillsicons}>
            <div className={styles.skillsicons__container}>
                <img className={styles.skillsicons__img} src={ HtmlIcon } alt="HTML" />
                <img className={styles.skillsicons__img} src={ SassIcon } alt="SASS" />
                <img className={styles.skillsicons__img} src={ CssIcon } alt="CSS" />
                <img className={styles.skillsicons__img} src={ WordpressIcon } alt="Wordpress" />
                <img className={styles.skillsicons__img} src={ ShopifyIcon } alt="Shopify" />
                <img className={styles.skillsicons__img} src={ WoocommerceIcon } alt="WooCommerce" />
                <img className={styles.skillsicons__img} src={ JqueryIcon } alt="jQuery" />
                <img className={styles.skillsicons__img} src={ JavascriptIcon } alt="Javascript" />
                <img className={styles.skillsicons__img} src={ PhpIcon } alt="PHP" />
            </div>
        </div>
    );
}

export default SkillsIcons