import { Fade } from "@material-ui/core";
import React from "react";
import downArrow from '../../assets/down_arrow.png';
import styles from './About.module.scss'
import { universityInterface } from "./Util";

interface propsInterface {
    information : universityInterface[];
    index : number;
    selected: boolean;
    onClick: () => void;
}

const DropDown = (props : propsInterface) => {

    const { information, index, selected, onClick } = props;
    
    return (
        <React.Fragment>
            <div className={styles.dropDownArrow} >
                <img className={ selected 
                        ? `${styles.dropArrow} ${styles.doRotate}` 
                        : `${styles.dropArrow}`
                }
                     src      ={ downArrow } width="60" height="60"
                     onClick  ={ onClick }
                >
                </img>
                <Fade in={selected}>
                    <div className={styles.decriptionPanel}>
                        <fieldset>
                            <legend> Relevent Coursework </legend>
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
                <img src   ={ information[index].image } 
                     className={styles.universityIcon}
                     width ={ index === 2 ? '75' : '90' } 
                     height={ index === 2 ? '75' : '90' } 
                     alt   ="mcgillIcon" 
                />
            </div>
            <div >
                <b className={styles.universityName}>{information[index].title}</b> &#8213; <span>{information[index].description}</span> <br /> <i>{information[index].year}</i>
            </div>

        </React.Fragment>
    )
}

export default DropDown;