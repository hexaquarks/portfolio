import downArrow from '../../assets/down_arrow.png';
import { useState } from 'react';
import Fade from '@material-ui/core/Fade';
import DropDown from './DropDown';
import { Element } from 'react-scroll'

const styles = require('./About.module.scss');

interface universityInformation {
    title: string;
    description: string;
    year: string;
    image: string;
    coursework: {
        course: string;
        language: string;
    }[];
}
const information : universityInformation[] = require('./UniversityInformation');

const About = () => {
    const [selected, setSelected] = useState<any>(null);

    return (
        <Element id="aboutDiv" name="aboutDiv">
            <div className={styles.container}>
                <div className={styles.rightParagraph}>
                    <h2>
                        Education
                    </h2>
                    <hr />
                    <p>
                        {information.map((value : any, index : number) => (
                            <DropDown information={information} index={index}
                                onClick={() => setSelected(
                                    (s : universityInformation) => s === value ? null : value)
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