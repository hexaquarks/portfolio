import React from 'react';
import { useState } from 'react';
// import { useAlert } from 'react-alert';
import { Element } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';




import styles from './Contact.module.scss';

import informationIcon from '../../assets/informationIcon.jpg';
import planeIcon from '../../assets/paperPlane.png';

const Contact = () => {
    
    // const alert = useAlert();

    const handleSubmit = async (e : any) => {
        e.preventDefault();
        const { fname, lname, subject,email, message } = e.target.elements;
        let details = {
            fname: fname.value,
            lname: lname.value,
            subject: subject.value,
            email: email.value,
            message: message.value
        };
        let response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(details),
          });
        let result = await response.json();
        // alert.show(
        //     <div className={styles.alert}>
        //         Message submitted succesfully
        //     </div>
        // )
    };
    return (
        <Element id="ContactScrollSection" name="ContactScrollSection">
            <form onSubmit={handleSubmit} >
            <div className={styles.container}>
                <div className={styles.content}>
                <div className={styles.leftSide}>
                    <div className={styles.addressDetails}>
                        <FontAwesomeIcon icon={faMapMarker} />
                    {/* <i className="fas fa-map-marker-alt"></i> */}
                    <div className={styles.topic}>Address</div>
                    <div className={styles.textOne}>Surkhet, NP12</div>
                    <div className={styles.textTwo}>Birendranagar 06</div>
                    </div>
                    <div className={styles.phoneDetails}>
                    <FontAwesomeIcon icon={faPhone} />
                    <div className={styles.topic}>Phone</div>
                    <div className={styles.textOne}>+0098 9893 5647</div>
                    <div className={styles.textTwo}>+0096 3434 5678</div>
                    </div>
                    <div className={styles.emailDetails}>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <div className={styles.topic}>Email</div>
                    <div className={styles.textOne}>codinglab@gmail.com</div>
                    <div className={styles.textTwo}>info.codinglab@gmail.com</div>
                    </div>
                </div>
                <div className={styles.rightSide}>
                    <div className={styles.topicText}>Send us a message</div>
                    <p>If you have any work from me or any types of quries related to my tutorial, you can send me message from here. It's my pleasure to help you.</p>
                <form action="#">
                    <div className={styles.inputBox}>
                    <input type="text" placeholder="Enter your name"/>
                    </div>
                    <div className={styles.inputBox}>
                    <input type="text" placeholder="Enter your email"/>
                    </div>
                    <div className={`${styles.inputBox} ${styles.messageBox}`} >
                    </div>
                    <div className={styles.button}>
                    <input type="button" value="Send Now" />
                    </div>
                </form>
                </div>
                </div>
            </div>
            </form>
        </Element>
    )
}

export default Contact;