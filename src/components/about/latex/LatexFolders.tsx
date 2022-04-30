import { useState } from 'react';
import CourseFolder from "./CourseFolder";
import UseWindowDimensions from '../../../utilities/UseWindowDimensions';
import styles from './LatexFolders.module.scss';

// hook for windows width and if less than threshold then map items down

const LatexFolders = () => {
    const { width, height } = UseWindowDimensions();

    let SHIFT = 130;
    SHIFT = (width! <= 550) ? 80 : 130;
    let LEFT_MAX = SHIFT * 6;



    const [xPos, setXPos] = useState<number>(0);
    const [enableArrows, setEnableArrows] = useState<boolean>(false);

    const onClick = (direction: string) => {
        if(enableArrows) return;

        setXPos((direction === 'left') 
            ? xPos === -LEFT_MAX ? xPos : xPos - SHIFT
            : xPos === 0 ? xPos : xPos + SHIFT
        );
    }

    const manageOpacity = (direction: string, xPos: number) => {
        if(enableArrows) return 25;
        
        if (xPos === 0) return direction === 'left' ? 25 : 100;
        else if (xPos < 0 && xPos > -LEFT_MAX) return 100;
        else if (xPos === -LEFT_MAX) return direction === 'left' ? 100 : 25;
    }

    const courseNames = [
        { id: 'MATH 314', name: 'Advanced Calculus' },
        { id: 'PHYS 350', name: 'Hons. Quantum Mechanics' },
        { id: 'PHYS 356', name: 'Hons. Electricity and Magnetism' },
        { id: 'MATH 327', name: 'Matrix Numerical Analysis' },
        { id: 'MATH 475', name: 'Hons. Partial Differential Equations' },
        { id: 'MATH 325', name: 'Hons. Ordinary Differntial Equations' },
        { id: 'MATH 240', name: 'Discret Mathematics' },
        { id: 'PHYS 241', name: 'Signals Processing' },
        { id: 'PHYS 230', name: 'Dynamics of Simple Systems' }
    ]

    return (
        <div className={styles.window}>
            <button className={styles.left_arrow}
                onClick={() => onClick('right')}
                style={{ opacity: `${manageOpacity('left', xPos)}%` }}>
            </button>
            
            <div className={`${styles.slider}`}>
                <div className={styles.container} style={{ transform: `translateX(${xPos}px)` }}>
                    {courseNames.map((value, index) => (
                        <CourseFolder value={value} key={index} 
                                      xPos={xPos} index={index} 
                                      folderWidth={SHIFT}
                                      setEnableArrows={setEnableArrows}
                        /> 
                    ))}
                </div>
            </div>
            <button className={styles.right_arrow}
                    onClick={() => onClick('left')}
                    style={{ opacity: `${manageOpacity('right', xPos)}%` }}>
            </button>
        </div>
    )
}

export default LatexFolders;