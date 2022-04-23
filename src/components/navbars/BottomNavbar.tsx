import { useState } from 'react';
import styles from './Navbars.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const BottomNavbar = () => {
    return (
        <div className={styles.bottomNavbarContainer}>
            <a href="https://github.com/hexaquarks" target="_blank">
                <FontAwesomeIcon icon={faGithub} className={styles.icon}/>
            </a>
            <a href="https://www.linkedin.com/in/mihail-anghelici-85196a20a/" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} className={styles.icon}/>
            </a>
        </div>
    );
}

export default BottomNavbar;