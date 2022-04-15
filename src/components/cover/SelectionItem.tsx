import { useState } from "react";
import styles from './Cover.module.scss';


const SelectionItem = (props : {name: string, index: number, update: (num :number) => void, selectedItem: number}) => {

    const {name, index, update, selectedItem} = props;
    const [animating, setAnimating] = useState<boolean>(false);

    return (
        <div className   ={styles.selectionBox}
             onMouseEnter={() => { setAnimating(true); }}
             onClick     ={() => { update(index); }}
             onMouseLeave={() => { setAnimating(false); }}>
            <span>
                { name }
            </span>
            <div style={
                {backgroundColor: selectedItem == index 
                        ? "#ffa500" 
                        : animating ? "rgba(255,165,0,0.35)" : "black"
                }
            }> 
            </div>
        </div>
    )
}

export default SelectionItem;