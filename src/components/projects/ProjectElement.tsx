import { useState } from 'react';
import { Element } from 'react-scroll';
import styles from './Projects.module.scss';
import javaIcon from '../../assets/java_icon.png';
import javaFXIcon from '../../assets/javaFX_icon.png';
import sceneBuilderIcon from '../../assets/sceneBuilder_icon.png';
import cssIcon from '../../assets/css_icon.png';
import javascriptIcon from '../../assets/javascript_icon_2.png';
import htmlIcon from '../../assets/html_icon.png';
import reactIcon from '../../assets/react_icon.png';
import githubIcon from '../../assets/githubBlack.png';
import { url } from 'inspector';

interface propsInterface { 
    link: string,
    gifPath: string,
    index: number
};

const ProjectElement = (props : propsInterface) => {
    const { link, gifPath, index } = props;
    
    const [{ topPicture, topStyle, bottomStyle, bottomOpacity, topOpacity }, setTopPicture] = useState<any | null>({
        pictureLeft: 'top',
        topStyle: 'preserve-3d',
        bottomStyle: 'translateZ(-10px)',
        topOpacity: '100%',
        bottomOpacity: '50%'
    });

    const setStyle = (stack : string, type : string) => {
        let option = (type === 'cursor')
            ? { first : 'alias' , second : 'pointer', third: 'default'}
            : { first : 'opacityUp' , second : 'opacityDown', third: 'opacityDown' }
        
        if (stack === 'top') {
            return (topPicture === 'top') ? option.first : option.second;
        } else {
            return (topPicture === 'top') ? option.second : option.third;
        }
    }

    const openInNewTab = (url: string) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
      }

    const changePicture = (stack: string, direction: string) => {
        if (stack === "top" && topPicture === "top") {
            openInNewTab(link);
        }

        const params: any = {
            topPicture: ['top', 'bottom'],
            topStyle: ['preserve-3d', 'none'],
            bottomStyle: ['translateZ(-10px)', 'translateZ(0px)'],
            topOpacity: ['100%', '50%'],
            bottomOpacity: ['50%', '100%']
        }
        let obj : any = {};

        if (stack === 'top' && topPicture === 'bottom') {
            Object.keys(params).forEach(k => obj[k] = params[k][0]);
            setTopPicture(obj);
        } else if (stack === 'bottom' && topPicture === 'top') {
            Object.keys(params).forEach(k => obj[k] = params[k][1]);
            setTopPicture(obj);
        }
    }
    return (
        <div className={styles.projectGif}
                style    ={{ transformStyle: 'preserve-3d' }}>

            <div className={styles.projectPicture}
                    onClick  ={() => { changePicture('top', 'left') }}
                    style    ={{ opacity: topOpacity, 
                                 cursor: setStyle('top', 'cursor'),
                                 backgroundImage: `url(${gifPath})`
                    }}>
            </div>
            <div className={styles.projectDescription}
                    onClick  ={() => { changePicture('bottom', 'left') }}
                    style    ={{ transform: bottomStyle,
                                cursor: setStyle('bottom', 'cursor'),
                                opacity: bottomOpacity
                }}>
                <span></span>
                <h6>
                    <a href="https://github.com/hexaquarks/Particle_Fun" target="_blank">
                        <img src={githubIcon} width="30" height="30" />
                    </a>
                </h6>
                <p> The program alows the user to add and remove particles with
                    variable size. The program simulates gravitational force, 
                    electrostatic force and allows for elastic collisions. Further,
                    the dynamic quantity of particles can be arranged in shapes 
                    such as: circle, square, diamond, spiral, loose spiral, 
                    sunflower spiral. And finally, the shapes can then also be 
                    divided and rotated.
                </p>
                <div className={styles.technologiesContainer}>
                    <img src   ={javaIcon} 
                            width ="45px" 
                            height="45px"
                    />
                    <span> Java </span>
                    <img src   ={javaFXIcon} 
                            width ="50px" 
                            height="60px"
                            style ={{ marginTop: `-6px` }} 
                    />
                    <span> JavaFX </span>
                    <img src   ={sceneBuilderIcon} 
                            width ="30px" 
                            height="40px"
                            style ={{ marginLeft: `7px` }} 
                            alt   ="scenebuilder" 
                    />
                    <span> SceneBuilder </span>
                    <img src   ={cssIcon} 
                            width ="30px" 
                            height="35px"
                            style ={{ marginLeft: `7px`, 
                                    marginTop: `2px` 
                            }}
                            alt="css" 
                    />
                    <span> CSS </span>
                </div>
            </div>
        </div>
    );
}

export default ProjectElement;