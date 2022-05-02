import { useState } from 'react';
import styles from './Navbars.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faHome, faCircleInfo, faFolderClosed, faIdCard } from '@fortawesome/free-solid-svg-icons';
import SelectionItem from '../cover/SelectionItem';
import { stack as Menu } from 'react-burger-menu';
import Scroll, { Link }  from 'react-scroll'


const TopNavbar = () => {
    const sections = ["Home", "About", "Projects", "Contact"];
    const icons = [faHome, faCircleInfo, faFolderClosed, faIdCard];
    const names = ["Home", "About", "Projects", "Contact"];
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
                <Menu className={styles.burgerMenu} right>
                        {selectionItems.map((value,index) => {
                            return (<Link
                                className="menu-item"
                                to={value.target}
                                spy={true}
                                smooth={true}
                                duration={1000}
                                >
                                    <FontAwesomeIcon icon={icons[index]} className={styles.icon}/>
                                    {value.name}
                            </Link>)
                        })}
                </Menu>
            </div>
        </div>
    );
}

export default TopNavbar;