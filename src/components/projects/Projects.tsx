import { useState } from 'react';
import { Element } from 'react-scroll';

import ProjectElement from './ProjectElement'
import javaIcon from '../../assets/java_icon.png';
import javaFXIcon from '../../assets/javaFX_icon.png';
import sceneBuilderIcon from '../../assets/sceneBuilder_icon.png';
import cssIcon from '../../assets/css_icon.png';
import javascriptIcon from '../../assets/javascript_icon_2.png';
import htmlIcon from '../../assets/html_icon.png';
import reactIcon from '../../assets/react_icon.png';
import githubIcon from '../../assets/githubBlack.png';

const styles = require('../projects/Projects.module.scss');

const Projects = () => {
    const projectLinks = [
        'https://github.com/hexaquarks/Particle_Fun',
        'https://hexaquarks.github.io/Weather_App/#/'
    ];
    
    return (
        <div className={styles.container}>
            {projectLinks.map((value : any, index : number) => (
                <ProjectElement link={value} index={index}
                    // onClick={() => setSelected(
                    //     (s : any) => s === value ? null : value)
                    // } 
                    // selected={selected === value} 
                    key={value} />
            ))}
        </div>
    );
}

export default ProjectElement;