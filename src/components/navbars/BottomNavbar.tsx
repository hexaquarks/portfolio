import { useState } from 'react';
import githubIcon from '../../assets/githubOrange.png'
import linkedIn from '../../assets/linkedinIcon.png'
import styles from './Navbars.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const BottomNavbar = () => {
    return (
        <div className={styles.bottomNavbarContainer}>
            <FontAwesomeIcon icon={faGithub} className={styles.icon}/>
            <FontAwesomeIcon icon={faLinkedin} className={styles.icon}/>
        </div>
    );
}

export default BottomNavbar;