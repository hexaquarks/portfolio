import { useEffect, useState } from 'react';
import TitleLetter from './TitleLetter';
import SelectionItem from './SelectionItem';
import styles from './Cover.module.scss';
// const styles = require('./Cover.module.scss');

const Cover = () => {
    const nameLetters = [
        'M', 'i', 'h', 'a', 'i', 'l', '&nbsp;',
        'A', 'n', 'g', 'h', 'e', 'l', 'i', 'c', 'i'
    ];
    const selectionItems = [
        "Home", "About","Projects", "Extra", "Contact"
    ];
    const [selectedItem, setSelectedItem] = useState<number>(0);
    const updateSelectedItem = (num: number) => {
        setSelectedItem(num);
    }

    return (
        <div className={styles.coverContainer} >
            <div className={styles.description} >
                <div className={styles.lettersContainer}>
                    <ul>
                        <hr className={styles.titleRule} />
                        {nameLetters.map((value, index) => (
                            <TitleLetter name={value} index={index} />
                        ))}
                    </ul>
                </div>
                <h2>
                    Software developer | Chess player | Physics enthousiast
                </h2>
            </div>
            <div className={styles.sideBar} >
                <div className={styles.sideBarIcon}>

                </div>
                <div className={styles.sideBarSelection} >
                    {selectionItems.map((value, index) => (
                        <SelectionItem name        ={value} 
                                       index       ={index}
                                       update      ={updateSelectedItem} 
                                       selectedItem={selectedItem}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Cover;