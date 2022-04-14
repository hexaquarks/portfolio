import { useState } from 'react';
import DropDown from './DropDown';
import { Element } from 'react-scroll'
import information from './UniversityInformation' 
import styles from './About.module.scss'
import stylesLatex from './latex/LatexFolders.module.scss'
import LatexFolders from './latex/LatexFolders'

const About = () => {
    console.log(information)
    const [selected, setSelected] = useState<any>(null);

    return (
        <div className={styles.aboutGrid}>
            <span className={styles.descriptionHeader}>
                Hello there, my name is Mihail Anghelici. I am a Software Developer 
                based in Montreal. In my free time I like to train at chess, code, 
                and take baths. I am proficient and have demonstratd experience
                in C++, Java, Python, Typescript, React, SCSS, and more.
            </span>
            <Element id={styles.aboutDiv} name="aboutDiv">
                <div className={styles.container}>
                    <div className={styles.education}>
                        <h2>
                            Education
                        </h2>
                        <hr />
                        <p>
                            {information.map((value : any, index : number) => (
                                <DropDown information={information} index={index}
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
                I started my academic jurney as a Honors Physics undergraduate. 
                I was set on pursuing a carreer in particle physics, but realized
                overtime that software engineering is the real thing ;). Since I 
                still enjoy physics nevertheless, I decided to pursue a major in
                Physics and Computer Science at McGill University, where I will be 
                graduating in December 2022.
            </span>
            <span className={styles.latexDescription}>
                I am big fanatic of LaTeX text editor. I have take notes in real-time 
                on it for most of my classes at McGill and did all my school work
                papers with it. My most notable project is the Notes for MATH 314 (
                    Advanced Calculus), a document that was featured to the class by 
                my teacher.
            </span>
            <div className={styles.latexContainer}>
                <div className={stylesLatex.latexContainer}>
                    <LatexFolders />
                </div>
            </div>
        </div>
    );
}

export default About;