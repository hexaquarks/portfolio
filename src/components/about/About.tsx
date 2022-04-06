import downArrow from '../../assets/down_arrow.png';
import { useState } from 'react';
import Fade from '@material-ui/core/Fade';
import DropDown from './DropDown';
import { Element } from 'react-scroll'

const styles = require('./About.module.scss');
const information = require('./UniversityInformation');

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
                        {information.map((value, index) => (
                            <DropDown information={information} index={index}
                                onClick={() => setSelected(s => s === value ? null : value)} 
                                selected={selected === value} key={value} />
                        ))}
                    </p>
                </div>
            </div>
        </Element>
    );
}

export default About;