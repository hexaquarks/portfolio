import { useState } from 'react';
import { Element } from 'react-scroll';
import ProjectElement from './ProjectElement';
import styles from './Projects.module.scss';

const Projects = () => {
    const projectProps = [
        {
            projectLink: "https://github.com/hexaquarks/Particle_Fun",
            gifPath: "../../assets/gifTry6.gif"
        },
        {
            projectLink: "https://hexaquarks.github.io/Weather_App/#/",
            gifPath: "../../assets/gifWeatherTry3.gif"
        }
    ]
    // const projectLinks = [
    //     'https://github.com/hexaquarks/Particle_Fun',
    //     'https://hexaquarks.github.io/Weather_App/#/'
    // ];
    
    return (
        <div className={styles.container}>
            {projectProps.map((value : any, index : number) => (
                <ProjectElement link={value.projectLink}
                                gifPath={value.gifPath}
                                index={index}
                    // onClick={() => setSelected(
                    //     (s : any) => s === value ? null : value)
                    // } 
                    // selected={selected === value} 
                    key={value} />
            ))}
        </div>
    );
}

export default Projects;