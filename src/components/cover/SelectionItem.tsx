import { useState } from "react";
import Scroll, { Link }  from 'react-scroll'
import styles from './Cover.module.scss';


const SelectionItem = (props : {name: string, target: string, index: number, update: (num :number) => void, selectedItem: number}) => {

    const {name, target, index, update, selectedItem} = props;
    const [animating, setAnimating] = useState<boolean>(false);

    return (
        <div className   ={styles.selectionBox}
             onMouseEnter={() => { setAnimating(true); }}
             onClick     ={() => { update(index); }}
             onMouseLeave={() => { setAnimating(false); }}>
            <span>
                { name }
            </span>
            <div className={styles.selectionRectangle} 
                 style    ={
                {backgroundColor: selectedItem == index 
                        ? "#ffa500" 
                        : animating ? "rgba(255,165,0,0.35)" : "black"
                }
            }> 
                <Link
                    to={target}
                    activeClass="active"
                    className="nav-link"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1000}
                >
                </Link>
            </div>
        </div>
    )
}

export default SelectionItem;