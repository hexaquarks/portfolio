import { useState } from 'react';
import { Element } from 'react-scroll';
import ProjectElement from './ProjectElement';
import styles from './Projects.module.scss';
import particleFunGif from '../../assets/gifTry6.gif';
import weatherGif from '../../assets/gifWeatherTry3.gif';

const Projects = () => {
    const projectProps = [
        {
            projectLink: "https://github.com/hexaquarks/chess_game",
            projectTitle: "Chess Game"
        },
        {
            projectLink: "https://github.com/hexaquarks/Particle_Fun",
            projectTitle: "Particle Simulation"
        },
        {
            projectLink: "https://hexaquarks.github.io/Weather_App/#/",
            projectTitle: "Weather Application"
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
                                title={value.projectTitle}
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