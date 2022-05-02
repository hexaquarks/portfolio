import { useState } from 'react';
import styles from './Navbars.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import SelectionItem from '../cover/SelectionItem';
import { slide as Menu } from 'react-burger-menu';


const TopNavbar = () => {
    const sections = ["Home", "About", "Projects", "Contact"];

    const selectionItems = [
        {
            name: "Home",
            target: "CoverScrollSection"
        },
        {
            name: "About",
            target: "AboutScrollSection"
        },
        {
            name: "Projects",
            target: "ProjectsScrollSection"
        },
        {
            name: "Contact",
            target: "ContactScrollSection"
        }
    ];

    const [selectedItem, setSelectedItem] = useState<number>(0);
    const updateSelectedItem = (num: number) => {
        setSelectedItem(num);
    }
    
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
                <Menu className={styles.bm_burger_menu}>
                    <a id="home" className="menu-item">Home</a>
                    <a id="about" className="menu-item" >About</a>
                    <a id="contact" className="menu-item" >Contact</a>
                    <a >Settings</a>
                </Menu>
            </div>
        </div>
    );
}

export default TopNavbar;