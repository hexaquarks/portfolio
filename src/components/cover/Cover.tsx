import { useEffect, useState } from 'react';
import TitleLetter from './TitleLetter';
import styles from './Cover.module.scss';
// const styles = require('./Cover.module.scss');

const Cover = () => {
    const nameLetters = [
        'M', 'i', 'h', 'a', 'i', 'l', '&nbsp;',
        'A', 'n', 'g', 'h', 'e', 'l', 'i', 'c', 'i'
    ]

    return (
        <div className={styles.coverContainer} >
            <div className={styles.description} >
                <div className={styles.lettersContainer}>
                    <ul>
                        {nameLetters.map((value, index) => (
                            <TitleLetter name={value} index={index} />
                        ))}
                    </ul>
                </div>
                <h2>
                    Software developer | Ches player | Physics enthousiast
                </h2>
            </div>
            <div className={styles.sideBar} >
                
            </div>
        </div>
    );
}

export default Cover;