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
import cppIcon from '../../assets/cpp_icon.png';
import sfmlIcon from '../../assets/sfml_icon.png';
import githubIcon from '../../assets/githubBlack.png';
import particleFunGif from '../../assets/gifTry6.gif';
import weatherGif from '../../assets/gifWeatherTry3.gif';
import chessGif from '../../assets/ChessGamePromotionTraversal.gif'
import knightIcon from '../../assets/knightIcon.png';
import atomIcon from '../../assets/atomIcon.png'
import weatherIcon from '../../assets/weatherIcon.png'
import UseWindowDimensions from '../../utilities/UseWindowDimensions'
import { url } from 'inspector';

interface propsInterface { 
    link: string,
    title: string,
    description: string,
    iconPath: string,
    index: number
};

const ProjectElement = (props : propsInterface) => {
    const { link, title, description, iconPath, index } = props;
    const gifs = [chessGif,particleFunGif, weatherGif];
    const { width, height } = UseWindowDimensions();
    
    const techStack2 = [
        [cppIcon, 'C++', sfmlIcon, 'SFML'],
        [javaIcon, 'Java', javaFXIcon, 'JavaFX', sceneBuilderIcon, 'ScenceBuilder', cssIcon, 'CSS'],
        [javascriptIcon, 'Javascript', reactIcon , 'React', cssIcon, 'CSS']
    ]
    
    const [{ topPicture, topStyle, bottomStyle, bottomOpacity, topOpacity }, setTopPicture] = useState<any | null>({
        topPicture: 'top',
        topStyle: 'preserve-3d',
        bottomStyle: 'translateZ(-10px)',
        topOpacity: '100%',
        bottomOpacity: '50%'
    });
    const iconPaths = [knightIcon, atomIcon, weatherIcon];

    const [showProject, setShowProject] = useState<Boolean>(false);

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

    const changePicture = (stack: string) => {
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
            <span className={styles.title} >
                {title}
            </span>
            <div className   ={styles.projectPicture}
                 onClick     ={() => { changePicture('top') }}
                 onMouseEnter={() => setShowProject(true)}
                 onMouseLeave={() => setShowProject(false)}
                 style       ={{ opacity: topOpacity, 
                                  cursor: setStyle('top', 'cursor'),
                         backgroundImage: `url(${iconPaths[index]})`
                }}>
                    <img src  ={gifs[index]} 
                         style={{opacity: (showProject || width! <= 875)  ? '1' : '0'}}/>
            </div>
            <div className={styles.projectDescription}
                    onClick  ={() => { changePicture('bottom') }}
                    style    ={{ transform: bottomStyle,
                                cursor: setStyle('bottom', 'cursor'),
                                opacity: bottomOpacity
                }}>
                <div className={styles.projectDescriptionTopHeader}>
                        <span>Project Description</span>
                        <a href="https://github.com/hexaquarks/Particle_Fun" target="_blank">
                            <img src={githubIcon} width="30" height="30" />
                        </a>
                </div>
                <p> 
                    { description }
                </p>
                <div className={styles.technologiesContainer}>
                    {techStack2[index].map((value, i) => {
                            return (i %2 ==0) 
                            ? (<img src ={value} className={styles.gridIcon} />) 
                            : (<span> {value} </span>)
                    })}
                </div>
            </div>
        </div>
    );
}

export default ProjectElement;