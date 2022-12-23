import { Element } from 'react-scroll';
import ProjectElement from './ProjectElement';
import styles from './Projects.module.scss';
import { projectProps } from './Descriptions'

const Projects = () => {
    return (
        <Element id="ProjectsScrollSection" name="ProjectsScrollSection">
            <div className={styles.container}>
                {projectProps.map((value : any, index : number) => (
                    <ProjectElement link={value.projectLink}
                                    title={value.projectTitle}
                                    description={value.projectDescription}
                                    nElements={projectProps.length}
                                    index={index}
                                    key={value} />
                ))}
            </div>
        </Element>
    );
}

export default Projects;