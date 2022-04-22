import styles from './Contact.module.scss';
import { Element } from 'react-scroll';

const Contact = () => {
    return (
        <Element id="ContactScrollSection" name="ContactScrollSection">
            <div className={styles.contactContainer}>
                <div className={styles.contactForm}>

                </div>
            </div>
        </Element>
    )
}

export default Contact;