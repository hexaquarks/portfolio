import { useState } from 'react';
import styles from './Navbar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const TopNavbar = () => {
    const sections = ["Home", "About", "Projects", "Contact"];
    
    return (
        <div className={styles.topNavbarContainer}>
            <div className={styles.itemsLeft}>
                <a href="https://github.com/hexaquarks" target="_blank">
                    <FontAwesomeIcon icon={faGithub} className={styles.icon}/>
                </a>
                <a href="https://www.linkedin.com/in/mihail-anghelici-85196a20a/" target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} className={styles.icon}/>
                </a>
            </div>
            <div className={styles.itemsRight}>

            </div>
        </div>
    );
}

export default TopNavbar;