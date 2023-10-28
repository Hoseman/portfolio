import {useRef} from 'react';
import ContactIconBlue from '../images/contact_blue.svg';
import styles from '../style.module.scss';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_e33jx2a', 'template_oyx4m3s', form.current, 'qXy1DTL_prGMRCnFm')
          .then((result) => {
              console.log(result.text);
              let myResult = "Thankyou. Your form was submitted";
              document.getElementById("form_message").innerHTML = myResult;
          }, (error) => {
              console.log(error.text);
              let myResult = "There was an error. Your form was not submitted";
              document.getElementById("form_message").innerHTML = myResult;
          });
          e.target.reset();
      };

    //const sendEmail = () => {};

    return(


        <section id="contact" className={styles.contact}>
            <div className={styles.container}>
                <div className={styles.mainheading}>
                    <h1 className={styles.mainheading__title}>Get in Touch</h1>
                    <img alt="Contact" src={ContactIconBlue} className={styles.mainheading__icon} />
                </div>

                <form ref={form} onSubmit={sendEmail} className={styles.contact__form}>

                    <input className={styles.contact__input} type='text' name='user_name' placeholder='Add your full name' required />

          
                    <input className={styles.contact__input} type='email' name='user_email' placeholder='Add your email' required />

                 
                    <input className={styles.contact__input} type='text' name='company_name' placeholder='Add your company name' required />

           
                    <input className={styles.contact__input} type='text' name='user_telephone' placeholder='Add your telephone number' required />

                   
                    <textarea placeholder='Add your message' className={styles.contact__textarea} name='message' cols='30' rows='10'></textarea>
                    <button className={styles.contact__formbtn} type='submit'>Send message</button>
                    <div className={styles.formmessage} id="form_message"></div>
                </form>

                {/* <div className={styles.contact__column}>

                        <div className={styles.experience__col}>

                            <p>xxxxxxx</p>

                        </div>

                        <div className={styles.experience__col}>
                        
                            <p>xxxxxxxx</p>
                            
                        </div> 

                </div> */}
            </div>
        </section>


    );

}

export default Contact;