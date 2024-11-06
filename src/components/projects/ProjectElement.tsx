import { useState, useRef } from 'react';
import styles from './Projects.module.scss';
import githubIcon from '../../assets/githubBlack.png';
import UseWindowDimensions from '../../utilities/UseWindowDimensions';
import { gifs, techStackIcons, placeholderIcons } from './Icons';
import useClickOutside from '../../utilities/UseClickOutside';
import React from 'react';

interface Props {
    link: string;
    title: string;
    description: string;
    index: number;
    nElements: number;
}

interface PictureState {
    topPicture: string;
    topStyle: string;
    bottomStyle: string;
    topOpacity: string;
    bottomOpacity: string;
}

interface StyleOptions {
    first: string;
    second: string;
    third: string;
}

const isLastComponentOdd = (index: number, nElements: number): boolean => nElements % 2 !== 0 && index === nElements - 1;

const ProjectElement = ({ link, title, description, index, nElements }: Props) => {
    const { width } = UseWindowDimensions();
    const [pictureState, setPictureState] = useState<PictureState>({
        topPicture: 'top',
        topStyle: 'preserve-3d',
        bottomStyle: 'translateZ(-10px)',
        topOpacity: '100%',
        bottomOpacity: '50%',
    });
    const ref = useRef<HTMLDivElement>(null);

    useClickOutside(ref, () => {
        if (pictureState.topPicture === 'bottom') {
            setPictureState({
                topPicture: 'top',
                topStyle: 'preserve-3d',
                bottomStyle: 'translateZ(-10px)',
                topOpacity: '100%',
                bottomOpacity: '50%',
            });
        }
    });

    const [showProject, setShowProject] = useState<boolean>(false);

    const setStyle = (stack: string, type: string): string => {
        const option: StyleOptions = (type === 'cursor')
            ? { first: 'alias', second: 'pointer', third: 'default' }
            : { first: 'opacityUp', second: 'opacityDown', third: 'opacityDown' };

        return stack === 'top' && pictureState.topPicture === 'top' ? option.first : option.second;
    };

    const openInNewTab = (url: string): void => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;
    };

    const changePicture = (stack: string): void => {
        if (stack === "top" && pictureState.topPicture === "top") {
            openInNewTab(link);
        }

        const updatedState: PictureState = {
            topPicture: stack === 'top' && pictureState.topPicture === 'bottom' ? 'top' : 'bottom',
            topStyle: stack === 'top' && pictureState.topPicture === 'bottom' ? 'preserve-3d' : 'none',
            bottomStyle: stack === 'top' && pictureState.topPicture === 'bottom' ? 'translateZ(-10px)' : 'translateZ(0px)',
            topOpacity: stack === 'top' && pictureState.topPicture === 'bottom' ? '100%' : '50%',
            bottomOpacity: stack === 'top' && pictureState.topPicture === 'bottom' ? '50%' : '100%',
        };
        setPictureState(updatedState);
    };

    return (
        <div ref={ref} className={styles.projectGif}
            style={{
                transformStyle: 'preserve-3d',
                gridColumnStart: isLastComponentOdd(index, nElements) ? 'span 2' : 'unset',
            }}>
            <span className={styles.title}>{title}</span>
            <div className={styles.projectPicture}
                onClick={() => changePicture('top')}
                onMouseEnter={() => setShowProject(true)}
                onMouseLeave={() => setShowProject(false)}
                style={{
                    opacity: pictureState.topOpacity,
                    cursor: setStyle('top', 'cursor'),
                    backgroundImage: `url(${placeholderIcons[index]})`,
                }}>
                <img src={gifs[index]} style={{ opacity: (showProject || width! <= 875) ? '1' : '0' }} />
            </div>
            <div className={styles.projectDescription}
                onClick={() => changePicture('bottom')}
                style={{
                    transform: pictureState.bottomStyle,
                    cursor: setStyle('bottom', 'cursor'),
                    opacity: pictureState.bottomOpacity,
                }}>
                <div className={styles.shinyContainer}></div>
                <div className={styles.projectDescriptionTopHeader}>
                    <span>Project Description</span>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        <img src={githubIcon} width="30" height="30" />
                    </a>
                </div>
                <p>{description}</p>
                <div className={styles.technologiesContainer}>
                    {techStackIcons[index].map((value, i) => (
                        i % 2 === 0 ? (
                            // If value is an icon component
                            <div key={i} className={styles.gridIcon}>
                                {React.createElement(value)}
                            </div>
                        ) : (
                            <span key={i}>{value}</span>
                        )
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectElement;



