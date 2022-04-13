import { useState } from 'react';
import DropDown from './DropDown';
import { Element } from 'react-scroll'
import information from './UniversityInformation' 
import styles from './About.module.scss'

const About = () => {
    console.log(information)
    const [selected, setSelected] = useState<any>(null);

    return (
        <div className={styles.aboutGrid}>
            {/* <h2 className={styles.generalDescription}>

            </h2> */}
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
            <h2 className={styles.educationDescription}>
                                testing
            </h2>
            <h2 className={styles.latexDescription}>
                                    testing
            </h2>
            <div className={styles.latexContainer}>
                        testing
            </div>

        </div>
    );
}

export default About;