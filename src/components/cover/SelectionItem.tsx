import { useState } from "react";
import Scroll, { Link }  from 'react-scroll'
import styles from './Cover.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faHome } from '@fortawesome/free-solid-svg-icons';

interface selectionItemInterface {
    name : string,
    target: string,
    index: number,
    update: (num: number ) => void,
    selectedItem: number,
    navbarFlag: boolean   
}
const SelectionItem = (props : selectionItemInterface) => {

    const {name, target, index, update, selectedItem, navbarFlag} = props;
    const [animating, setAnimating] = useState<boolean>(false);

    return (
        <Link
            to={target}
            className={styles.navlink}
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
        >
            <div className   ={styles.selectionBox}
                onMouseEnter={() => { setAnimating(true); }}
                onClick     ={() => { update(index); }}
                onMouseLeave={() => { setAnimating(false); }}
                style      ={{gridTemplateColumns: `0.5fr 1.8fr 0.2fr`}}>
                <FontAwesomeIcon icon={faHome} className={styles.icon}/>
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
                </div>
            </div>
        </Link>
    )
}

export default SelectionItem;