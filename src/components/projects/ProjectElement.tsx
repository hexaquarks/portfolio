import { useState } from 'react';
import styles from './Projects.module.scss';
import githubIcon from '../../assets/githubBlack.png'
import UseWindowDimensions from '../../utilities/UseWindowDimensions'
import { gifs, techStackIcons, placeholderIcons } from './Icons'

interface propsInterface {
    link: string,
    title: string,
    description: string,
    index: number,
    nElements: number
};

const isLastComponentOdd = (index: number, nElements: number) => { 
    return nElements % 2 != 0 && index == nElements - 1
}

const ProjectElement = (props: propsInterface) => {
    const { link, title, description, index, nElements } = props;
    const { width, height } = UseWindowDimensions();

    const [{ topPicture, topStyle, bottomStyle, bottomOpacity, topOpacity }, setTopPicture] = useState<any | null>({
        topPicture: 'top',
        topStyle: 'preserve-3d',
        bottomStyle: 'translateZ(-10px)',
        topOpacity: '100%',
        bottomOpacity: '50%'
    })

    const [showProject, setShowProject] = useState<Boolean>(false);

    const setStyle = (stack: string, type: string) => {
        let option = (type === 'cursor')
            ? { first: 'alias', second: 'pointer', third: 'default' }
            : { first: 'opacityUp', second: 'opacityDown', third: 'opacityDown' }

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
        let obj: any = {};

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
            style={{
                transformStyle: 'preserve-3d',
                gridColumnStart: isLastComponentOdd(index, nElements) ? 'span 2' : 'unset'
            }}>
            <span className={styles.title} >
                {title}
            </span>
            <div className={styles.projectPicture}
                onClick={() => { changePicture('top') }}
                onMouseEnter={() => setShowProject(true)}
                onMouseLeave={() => setShowProject(false)}
                style={{
                    opacity: topOpacity,
                    cursor: setStyle('top', 'cursor'),
                    backgroundImage: `url(${placeholderIcons[index]})`
                }}>
                <img src={gifs[index]}
                    style={{ opacity: (showProject || width! <= 875) ? '1' : '0' }} />
            </div>
            <div className={styles.projectDescription}
                onClick={() => { changePicture('bottom') }}
                style={{
                    transform: bottomStyle,
                    cursor: setStyle('bottom', 'cursor'),
                    opacity: bottomOpacity
                }}>
                <div className={styles.shinyContainer}></div>
                <div className={styles.projectDescriptionTopHeader}>
                    <span>Project Description</span>
                    <a href={link} target="_blank">
                        <img src={githubIcon} width="30" height="30" />
                    </a>
                </div>
                <p>
                    {description}
                </p>
                <div className={styles.technologiesContainer}>
                    {techStackIcons[index].map((value, i) => {
                        return (i % 2 == 0)
                            ? (<img src={value} className={styles.gridIcon} />)
                            : (<span> {value} </span>)
                    })}
                </div>
            </div>
        </div>
    );
}

export default ProjectElement;