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
                    <div className={styles.leftPanel}>
                        <div className={styles.details}>
                            <FontAwesomeIcon icon={faMapMarker} className={styles.icon} size="3x"/>
                            <div className={styles.topic}>Address</div>
                            <div className={styles.textOne}>Montreal, QC</div>
                        </div>
                        <div className={styles.details}>
                            <FontAwesomeIcon icon={faPhone} className={styles.icon} size="3x"/>
                            <div className={styles.topic}>Phone</div>
                            <div className={styles.textOne}>514 922 9885</div>
                        </div>
                        <div className={styles.details}>
                            <FontAwesomeIcon icon={faEnvelope} className={styles.icon} size="3x"/>
                            <div className={styles.topic}>Email</div>
                            <div className={styles.textOne}>mihail.anghelici@mail.mcgill.ca</div>
                        </div>
                    </div>
                <div className={styles.rightPanel}>
                    <div className={styles.topicText}>Send me a message</div>
                        <p>For any queries, questions and offers, please send me an email. I will respond immediately.</p>
                        <form action="#">
                            <div className={styles.inputBox}>
                                <input type="text" placeholder="Enter your name"/>
                            </div>
                            <div className={styles.inputBox}>
                                <input type="text" placeholder="Enter your email"/>
                            </div>
                            <div className={`${styles.inputBox} ${styles.messageBox}`} >
                                <input type="text" placeholder="Enter your message"/>
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