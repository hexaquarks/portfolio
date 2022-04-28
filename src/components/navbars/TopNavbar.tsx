import { useState } from 'react';
import styles from './Navbars.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import SelectionItem from '../cover/SelectionItem';

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
                <div className={styles.sideBarSelection} >
                    {selectionItems.map((value, index) => (
                        <SelectionItem name         ={value.name} 
                                    target       ={value.target}
                                    index        ={index}
                                    update       ={updateSelectedItem} 
                                    selectedItem ={selectedItem}
                                    navbarFlag   ={false}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TopNavbar;