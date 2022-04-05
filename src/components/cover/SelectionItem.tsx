import { useState } from "react";
import styles from './Cover.module.scss';


const SelectionItem = (props : {name: string, index: number}) => {

    const {name, index} = props;
    const [animating, setAnimating] = useState<boolean>(false);

    return (
        <div className={styles.selectionBox}>
            <span
                onMouseEnter={() => { setAnimating(true); }}
                onMouseLeave={() => { setAnimating(false); }}>
                { name }
            </span>
            <div style={{backgroundColor: animating ? "blue" : "red"}} 
                onMouseEnter={() => { setAnimating(true); }}
                onMouseLeave={() => { setAnimating(false); }}
            > 
            </div>
        </div>
    )
}

export default SelectionItem;