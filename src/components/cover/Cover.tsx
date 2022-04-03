import { useEffect, useState } from 'react';
import TitleLetter from './TitleLetter';

const styles = require('../cover/Cover.module.css');

const Cover = () => {
    const nameLetters = [
        'M', 'i', 'h', 'a', 'i', 'l', '&nbsp;',
        'A', 'n', 'g', 'h', 'e', 'l', 'i', 'c', 'i'
    ]

    return (
        <div className={styles.description} >
            <div>
                <ul>
                    {nameLetters.map((value, index) => (
                        <TitleLetter name={value} index={index} />
                    ))}
                </ul>
            </div>
            <h2>
                Software developer living in the Greater Montreal area. I am interested in most technologies across the back-end and front-end, and the respective practices associated with them.
            </h2>
        </div>
    );
}

export default Cover;