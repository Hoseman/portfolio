import React, { useState } from 'react';
import PortfolioBlue from '../images/portfolio_blue.svg';
import PortfolioImacResorations from '../images/portfolio-imac-restorations.jpg';
import PortfolioImacTranscreation from '../images/portfolio-imac-transcreation.jpg';
import PortfolioImacGlasses from '../images/portfolio-imac-glasses.jpg';
import PortfolioImacMpbuild from '../images/portfolio-imac-mpbuild.jpg';
import PortfolioImacLila from '../images/portfolio-imac-lila.jpg';
import PortfolioImacEasy from '../images/portfolio-imac-easy.jpg';
import PortfolioImacVcm from '../images/portfolio-imac-vcm.jpg';
import PortfolioImacPhotography from '../images/portfolio-imac-photography.jpg';
import styles from '../style.module.scss';

function AccordionItem({ title, content_title_1, content_1, content_title_2, content_2, link, imageUrl, isOpen, onToggle }) {
  return (
    <div className={`${styles.accordion__item} ${isOpen ? 'open' : ''}`}>
        
      <div
        className={styles.accordion__header} onClick={onToggle}>
        {title} <span className={styles.accordion__plus}>{ isOpen ? '–' : '+' }</span>
      </div>
      {isOpen && <div className={styles.accordion__content} style={{ maxHeight: isOpen ? '1000px' : '0' }}>
        <div className={styles.accordion__column}>
            <div className={styles.accordion__col}>
                <p className={styles.accordion__description}>{content_title_1}</p>
                <p>{content_1}</p>
                <p className={styles.accordion__description}>{content_title_2}</p>
                <p>{content_2}</p>
                <a href={ link } rel="noreferrer" target="_blank" className={styles.accordion__formbtn}>Go To Website</a>
            </div>
            <div className={styles.accordion__col}>
                <img src={ imageUrl } alt={ title } />
            </div>
        </div>
        </div>}
    </div>
  );
}

function Accordion() {
  const [items, setItems] = useState([
    {
      title: 'HC Restorations Website',
      content_title_1: 'Description',
      content_1: 'A brochure website for a Bedfordshire based antique restorer and built as a custom bespoke Wordpress theme.',
      content_title_2: 'Project Overview',
      content_2: 'The client had an ageing non-responsive fixed width static HTML website that did not look great in modern browsers and mobile devices. The brief was to initially re-design the website and present drafts to the client. Then on approval build a more modern responsive wordpress theme that looked great on mobile and to ensure that all content was editable in the backend.',
      link: 'https://hcrestorations.co.uk',
      imageUrl: PortfolioImacResorations,
      isOpen: true,
    },
    {
      title: 'Transcreation Website',
      content_title_1: 'Description',
      content_1: 'A multi-lingual wordpress website for an established Bedfordshire agency.',
      content_title_2: 'Project Overview',
      content_2: 'The client required a multi language responsive website built in wordpess in order to advertise their multi-lingual services. There were 20 foreign languages in total and all translations were handled using the Wordpress WPML plugin.',
      link: 'https://transcreationagency.co.uk',
      imageUrl: PortfolioImacTranscreation,
      isOpen: false,
    },
    {
      title: 'The Glasses Company Website',
      content_title_1: 'Description',
      content_1: 'A WooCommerce website for a major national UK based glasses company.',
      content_title_2: 'Project Overview',
      content_2: 'The client had an old ageing Magento 1 ecommerce site with 1500 products. The brief was to re-build the site in Wordpress/WooCommerce as a responsive mobile friendly website and migrate the data from Magento to WooCommerce.',
      link: 'https://theglassescompany.co.uk',
      imageUrl: PortfolioImacGlasses,
      isOpen: false,
    },
    {
        title: 'MP Build Website',
        content_title_1: 'Description',
        content_1: 'A brochure website for a Hertfordshire based construction services company and built as a custom bespoke Wordpress theme',
        content_title_2: 'Project Overview',
        content_2: 'The client wanted a design refresh on his current static html website. He also wanted the ability to edit content himself. The new website was re-built as a Wordpress website with a custom bespoke theme build and all content was made editable in the backend via ACF fields.',
        link: 'https://mpbuild.fluidstaging.co.uk',
        imageUrl: PortfolioImacMpbuild,
        isOpen: false,
    },
    {
        title: 'Lila Jewellery Website',
        content_title_1: 'Description',
        content_1: 'A WooCommerce website for a Bedfordshire based Jewellery company and built as a custom bespoke Wordpress theme.',
        content_title_2: 'Project Overview',
        content_2: 'The client owned and was managing an old WooCommerce website. But they wanted a complete redesign. They also wanted to offer products as trade prices to members only. The new website was re-built from scratch as a fully responsive custom wordpress theme. The membership functionality was handled by using the WooCommerce Memberships plugin.',
        link: 'https://lila-jewellery.fluidstaging.co.uk',
        imageUrl: PortfolioImacLila,
        isOpen: false,
    },
    {
        title: 'Easy Cleaning Website',
        content_title_1: 'Description',
        content_1: 'A brochure website for a Hertfordshire based cleaning company and built as a custom bespoke Wordpress theme.',
        content_title_2: 'Project Overview',
        content_2: 'The client had recently undergone a complete corporate rebrand and they wanted their new website to mirror their new printed collateral. They also wanted the ability to edit content themselves. The new website was re-built as a Wordpress website with a custom bespoke theme build and all content was made editable in the backend via ACF fields. ',
        link: 'https://easycleaning.fluidstaging.co.uk',
        imageUrl: PortfolioImacEasy,
        isOpen: false,
    },
    {
        title: 'VCM Publications Website',
        content_title_1: 'Description',
        content_1: 'A WooCommerce website for a London based sheet music and book publisher and built as a custom bespoke Wordpress theme.',
        content_title_2: 'Project Overview',
        content_2: 'The client owned a badly thought out Prestashop site. They were experiencing many problems with their hosting and their site was difficult to navigate. The brief was to advise the client on a better hosting solution and also re-build the site in Wordpress. The project involved re-designing the website to make it look more professional and easier to navigate. Then the website was rebuilt as a Wordpress/WooCommerce responsive mobile friendly solution.',
        link: 'https://vcmpublications.uk',
        imageUrl: PortfolioImacVcm,
        isOpen: false,
    },
    {
        title: 'Photography Website',
        content_title_1: 'Description',
        content_1: 'A brochure website for a Buckinghamshire based photographer and built as a custom bespoke Wordpress theme.',
        content_title_2: 'Project Overview',
        content_2: 'This website was built as a personal project for me to showcase my skills as an amateur photographer. The brief was to design and build a more modern responsive wordpress theme that looked great on mobile and to ensure that all content was editable in the backend.',
        link: 'https://photography.achcreative.co.uk',
        imageUrl: PortfolioImacPhotography,
        isOpen: false,
    },
  ]);

  const toggleAccordion = (index) => {
    const newItems = [...items];
    newItems.forEach((item, i) => {
      item.isOpen = i === index ? !item.isOpen : false;
    });
    setItems(newItems);
  };

  return (
    <div id="examples" className={styles.container}>
        <div className={styles.mainheading}>
                    <h1 className={styles.mainheading__title}>Recent Work Examples</h1>
                    <img alt="Work Example" src={PortfolioBlue} className={styles.mainheading__icon} />
        </div>
        <span id="xxx" className={styles.accordion_subtitle}>The following are recent websites that have been built by myself. These are all Wordpress and WooCommerce sites which are custom coded and built from scratch.</span>
        <div className={styles.accordion}>
        {items.map((item, index) => (
            <AccordionItem
            key={index}
            title={item.title}
            content_title_1={item.content_title_1}
            content_1={item.content_1}
            content_title_2={item.content_title_2}
            content_2={item.content_2}
            link={item.link}
            imageUrl={item.imageUrl}
            isOpen={item.isOpen}
            onToggle={() => toggleAccordion(index)}
            />
        ))}
        </div>
    </div>
  );
}

export default Accordion;
