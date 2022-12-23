import { useState } from 'react';
import { Element } from 'react-scroll'
import TitleLetter from './TitleLetter';
import SelectionItem from './SelectionItem';
import styles from './Cover.module.scss';

import maLogo from '../../assets/maLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

import { nameLetters, verticalNavbarSelection, githubProfileLink, linkedInProfileLink } from './Util'

const Cover = () => {
    const [selectedItem, setSelectedItem] = useState<number>(0);
    const updateSelectedItem = (num: number) => {
        setSelectedItem(num);
    }

    return (
        <Element id="CoverScrollSection" name="CoverScrollSection">
            <div className={styles.coverContainer} >
                <div className={styles.description} >
                    <div className={styles.lettersContainer}>
                        <ul>
                            <hr className={styles.titleRule} />
                            {nameLetters.map((value, index) => (
                                <TitleLetter name={value} index={index} />
                            ))}
                        </ul>
                    </div>
                    <h2>
                        Software developer | Chess player | Physics enthousiast
                    </h2>
                </div>
                <div className={styles.sideBar} >
                    <div className={styles.sideBarIcon}>
                        <img src={maLogo} className={styles.mainIcon} />
                    </div>
                    <div className={styles.sideBarLinks}>
                        <a href={githubProfileLink} target="_blank">
                            <FontAwesomeIcon icon={faGithub} className={styles.icon}/>
                        </a>
                        <a href={linkedInProfileLink} target="_blank">
                            <FontAwesomeIcon icon={faLinkedin} className={styles.icon}/>
                        </a>
                    </div>
                    <div className={styles.sideBarSelection} >
                        {verticalNavbarSelection.map((value, index) => (
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
        </Element>

    );
}

export default Cover;