import { useState } from 'react';
import DropDown from './DropDown';
import { Element } from 'react-scroll'
import information from './UniversityInformation' 
import styles from './About.module.scss'

const About = () => {
    console.log(information)
    const [selected, setSelected] = useState<any>(null);

    return (
        <Element id="aboutDiv" name="aboutDiv">
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
    );
}

export default About;