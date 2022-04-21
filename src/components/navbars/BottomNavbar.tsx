import { useState } from 'react';
import githubIcon from '../../assets/githubOrange.png'
import linkedIn from '../../assets/linkedinIcon.png'
import styles from './Navbars.module.scss';

const BottomNavbar = () => {
    return (
        <div className={styles.bottomNavbarContainer}>
            <img src={githubIcon} width="50px" height="50px"/>
            {/* <div className={styles.icon}>
                <img src={githubIcon} width="50px" height="50px"/>
            </div> */}
            <img src={linkedIn} width="50px" height="50px"/>
            {/* <div className={styles.icon}>
                <img src={linkedIn} width="50px" height="50px"/>
            </div> */}
        </div>
    );
}

export default BottomNavbar;