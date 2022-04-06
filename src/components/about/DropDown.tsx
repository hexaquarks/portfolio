import { Fade } from "@material-ui/core";
import React, { useState } from "react";
import downArrow from '../../assets/down_arrow.png';
import styles from './About.module.scss'

// const styles = require('./About.module.scss');

interface universityInformation {
    title: string;
    description: string;
    year: string;
    image: string;
    coursework: {
        course: string;
        language: string;
    }[];
}
interface propsInterface {
    information : universityInformation[];
    index : number;
    selected: boolean;
    onClick: () => void;
}

const DropDown = (props : propsInterface) => {

    const { information, index, selected, onClick } = props;
    
    return (
        <React.Fragment>
            <div className={styles.dropDownArrow} >
                <img className={selected ? `${styles.dropArrow} ${styles.doRotate}` : `${styles.dropArrow}`}
                    src={downArrow} width="30" height="30"
                    onClick={onClick}
                >
                </img>
                <Fade in={selected}>
                    <div className={styles.decriptionPanel}>
                        <fieldset>
                            <legend>Relevent Coursework</legend>
                            <div className={styles.coursesList} >
                                <ul>
                                    {information[index].coursework.map((value, index) => (
                                        <li>
                                            {value.course}
                                            <i>
                                                {' ' + value.language}
                                            </i>
                                        </li>
                                    ))}

                                </ul>
                            </div>
                        </fieldset>
                    </div>
                </Fade>
            </div>
            <div>
                <img src={information[index].image} 
                    width={index === 2 ? '40' : '50'} 
                    height={index === 2 ? '40' : '50'} 
                    style={{marginLeft: index === 2 ? '5px' : '0px', marginTop: index === 2 ? '20px' : '0px'}}
                    alt="mcgillIcon" />
            </div>
            <div >
                <b>{information[index].title}</b> &#8213; <span>{information[index].description}</span> <br /> <i>{information[index].year}</i>
            </div>

        </React.Fragment>
    )
}

export default DropDown;