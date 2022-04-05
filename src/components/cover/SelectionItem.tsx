import { useState } from "react";
import styles from './Cover.module.scss';


const SelectionItem = (props : {name: string, index: number}) => {

    const {name, index} = props;
    const [animating, setAnimating] = useState<boolean>(false);

    return (
        <div style={{backgroundColor: animating ? "blue" : "red"}} 
            onMouseEnter={() => { setAnimating(true); }}
            onMouseLeave={() => { setAnimating(false); }}
        > 
          {index % 2 == 0 ? name : ''}
        </div>
    )
}

export default SelectionItem;