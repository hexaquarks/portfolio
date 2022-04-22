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
            projectTitle: "Chess Game",
            projectDescription: `
                Fully functional chess game with respect to chess rules
                with additional features such as : Move list traversal, 
                menu options, mechanical utilities, N-Ary tree data 
                struture for move tree generation, and more.`
        },
        {
            projectLink: "https://github.com/hexaquarks/Particle_Fun",
            projectTitle: "Particle Simulation",
            projectDescription: `
                The program alows the user to add and remove particles with variable size. The program simulates gravitational force, 
                electrostatic force and allows for elastic collisions. Further,
                the dynamic quantity of particles can be arranged in shapes 
                such as: circle, square, diamond, spiral, loose spiral, 
                sunflower spiral. And finally, the shapes can then also be 
                divided and rotated.`
        },
        {
            projectLink: "https://hexaquarks.github.io/Weather_App/#/",
            projectTitle: "Weather Application",
            projectDescription: `
                The program fetches data from OpenWweatherMap API API and
                displays the daily information overview and detailed 
                information. Further, a 24 hours and 7 days forecast for 
                temperature and precipitation, is displayed in a carousel 
                container along with bar graphs respectively. 
            `
        }
    ]
    // const projectLinks = [
    //     'https://github.com/hexaquarks/Particle_Fun',
    //     'https://hexaquarks.github.io/Weather_App/#/'
    // ];
    
    return (
        <Element id="ProjectsScrollSection" name="ProjectsScrollSection">
            <div className={styles.container}>
                {projectProps.map((value : any, index : number) => (
                    <ProjectElement link={value.projectLink}
                                    title={value.projectTitle}
                                    description={value.projectDescription}
                                    index={index}
                                    key={value} />
                ))}
            </div>
        </Element>
    );
}

export default Projects;