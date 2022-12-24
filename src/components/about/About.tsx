import { useState } from 'react';
import DropDown from './DropDown';
import { Element } from 'react-scroll'

import styles from './About.module.scss'
import LatexFolders from './latex/LatexFolders'

import { universitiesInformation, descriptions } from './Util' 

const About = () => {
    const [selected, setSelected] = useState<any>(null);

    return (
        <Element id="AboutScrollSection" name="AboutScrollSection">
            <div className={styles.aboutGrid}>
                <span className={styles.descriptionHeader}>
                    {descriptions.header}
                </span>
                <Element id={styles.aboutDiv} name="aboutDiv">
                    <div className={styles.container}>
                        <div className={styles.education}>
                            <h2>
                                Education
                            </h2>
                            <hr />
                            <p>
                                {universitiesInformation.map((value : any, index : number) => (
                                    <DropDown information={universitiesInformation} index={index}
                                        onClick={() => setSelected(
                                            (s : any) => s === value ? null : value)
                                        } 
                                        selected={selected === value} key={value} />
                                ))}
                            </p>
                        </div>
                    </div>
                </Element>
                <span className={styles.educationDescription}>
                    {descriptions.education}
                </span>
                <span className={styles.latexDescription}>
                    {descriptions.latex}
                </span>
                <div className={styles.latexContainer}>
                    <h2>
                        LaTeX 
                    </h2>
                    <hr />
                    <LatexFolders />
                </div>
            </div>
        </Element>
    );
}

export default About;