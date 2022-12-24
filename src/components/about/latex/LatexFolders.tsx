import { useState } from 'react'
import CourseFolder from "./CourseFolder"
import UseWindowDimensions from '../../../utilities/UseWindowDimensions'
import styles from './LatexFolders.module.scss'
import { courseNames } from './Util'

const N_FOLDERS = 6
const REDUCED_SHIFT = 80 
const NORMAL_SHIFT = 130 
const CONTAINER_WIDTH = 550
const ARROW_FULL_OPACITY = 100
const ARROW_LOW_OPACITY = 25

const LatexFolders = () => {
    const [xPos, setXPos] = useState<number>(0);
    const [enableArrows, setEnableArrows] = useState<boolean>(false);
    const { width, height } = UseWindowDimensions();

    const DYNAMIC_SHIFT = (width! <= CONTAINER_WIDTH) 
        ? REDUCED_SHIFT 
        : NORMAL_SHIFT
    const LEFT_MAX = DYNAMIC_SHIFT * N_FOLDERS;

    const onClick = (direction: string) => {
        if (enableArrows) return

        setXPos((direction === 'left')
            ? xPos === -LEFT_MAX ? xPos : xPos - DYNAMIC_SHIFT
            : xPos === 0 ? xPos : xPos + DYNAMIC_SHIFT
        )
    }

    const manageOpacity = (direction: string, xPos: number) => {
        if (enableArrows) return ARROW_LOW_OPACITY

        if (xPos === 0) return direction === 'left' ? ARROW_LOW_OPACITY : ARROW_FULL_OPACITY
        else if (xPos < 0 && xPos > -LEFT_MAX) return ARROW_FULL_OPACITY
        else if (xPos === -LEFT_MAX) return direction === 'left' ? ARROW_FULL_OPACITY : ARROW_LOW_OPACITY
    }

    return (
        <div className={styles.window}>
            <button className={styles.left_arrow}
                onClick={() => onClick('right')}
                style={{ opacity: `${manageOpacity('left', xPos)}%` }}>
            </button>

            <div className={`${styles.slider}`}>
                <div className={styles.container} style={{ transform: `translateX(${xPos}px)` }}>
                    {courseNames.map((value, index) => (
                        <CourseFolder
                            value={value} 
                            key={index}
                            xPos={xPos} 
                            index={index}
                            folderWidth={DYNAMIC_SHIFT}
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