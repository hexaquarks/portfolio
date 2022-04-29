import React, { useState } from 'react';

import styles from './LatexFolders.module.scss';
import downArrow from '../../../assets/down_arrow.png';
import openFolder from '../../../assets/folderOpen.png';
import closedFolder from '../../../assets/folderClosed.png';
import noteIcon from '../../../assets/notes.png';
import bookIcon from '../../../assets/bookIcon.png';
import codeIcon from '../../../assets/code.png';

interface propsInterface {
    value : { id: string, name: string };
    key   : number;
    xPos  : number;
    index : number;
    folderWidth : number,
    setEnableArrows : React.Dispatch<React.SetStateAction<boolean>>;
}

interface courseInterface {
    name: string;
    files: string[];
}

function CourseFolder(props : propsInterface) {
  const { value, key, xPos, index, folderWidth, setEnableArrows} = props;

  const [image, setImage] = useState<string>(closedFolder);
  const [showDescriptionChild, setShowDescriptionChild] = useState<boolean>(false);

  const handleMouseOver = () => { setImage(openFolder); };

  const handleMouseLeave = () => { setImage(closedFolder); };


  const courses = [
    { name: 'MATH314', files: ["Notes", "Ass4", "code"] },
    { name: 'PHYS350', files: ["Ass1", "Ass2", "Ass3", "Ass4", "Ass5", "Ass6", "Ass7", "code"] },
    { name: 'PHYS356', files: ["Ass1", "Ass2", "Ass3", "Ass4", "Ass5", "Ass6", "Ass7", "code"] },
    { name: 'MATH327', files: ["Ass1", "Ass2", "Ass3", "Ass4", "Ass5", "code"] },
    { name: 'MATH475', files: ["Ass1", "Ass2", "Ass3", "code"] },
    { name: 'MATH325', files: ["Final", "Ass1", "Ass2", "Ass3", "Ass4", "Ass5", "code"] },
    { name: 'MATH240', files: ["Ass1", "Ass2", "Ass3", "Ass4", "code"] },
    { name: 'PHYS241', files: ["Final", "Ass1", "Ass2", "Ass3", "Ass4", "Ass5", "code"] },
    { name: 'PHYS230', files: ["Ass5", "Ass7", "Ass8", "Ass9", "Ass10"] },
  ];

  return (
    <div className={styles.folderContainer}>
      <div className={`${styles.decriptionPanel}`} 
           key={xPos} 
           style={ {left: -xPos ,top: showDescriptionChild ? `0px` : `-160px`} }>
        <div className={styles.imageContainer}>
          <span >
            {value.name}
          </span>
          <div className={styles.image}>
          <div>
              <img src={downArrow} width="30" onClick={ () => {
                setShowDescriptionChild(!showDescriptionChild); 
                setEnableArrows(false)} }
              />
            </div>
          </div>
        </div>
        <div className={styles.description}>
          <div className={styles.filesGrid} >
            {buildButtons(courses, index)}
          </div>
        </div>
      </div>

      <span >{value.id}</span>
      <div key={index}
        onMouseEnter={() => { handleMouseOver(); }}
        onMouseLeave={() => { handleMouseLeave(); }}
        onClick={() => {
          setShowDescriptionChild(!showDescriptionChild);
          setEnableArrows(true);
        }}
      >
        <img className={-xPos / folderWidth !== index - 1 ? `${styles.shrinkImage}` : ''} 
             src={image} width={folderWidth} alt="alternative" 
        />
      </div>
    </div>
  );
}


const buildButtons = (courses : courseInterface[], index : number) => {
  var buttons: any = [];
  const globalLink = "https://github.com/hexaquarks/Latex_Files/"; //link header
  const folderPath = "tree/main/"; //for folder
  const notesPath = "blob/main/"; //for any file
  
  for (var i = 0; i < courses[index].files.length; i++) {
    const course = courses[index];
    
    let firstLetter = course.files[i].charAt(0);
    let link = globalLink;
    let iconPath;
    let text = '';

    firstLetter === 'c'
      ? link += folderPath + course.name + '/' + course.name + '_Tex'
      : link += notesPath + course.name + '/' + course.name + '_' + course.files[i] + '.pdf';

    if (firstLetter === 'N') {
      iconPath = bookIcon;
      text = 'Class Notes' + '\xa0\xa0\xa0\xa0';
    } else if (firstLetter === 'A' || firstLetter === 'F') {
      iconPath = noteIcon;
      firstLetter === 'A'
        ? text = 'Assignment' + ' ' + course.files[i].substr(course.files[i].length - 1)
        : text = `Final Exam` + '\xa0\xa0\xa0\xa0\xa0\xa0';
    } else {
      iconPath = codeIcon;
      text = `Code Repo` + '\xa0\xa0\xa0\xa0\xa0\xa0';
    }

    buttons.push(
      <a href={link} target="_blank">
        <button>
          <img src={iconPath} height="12" />
          <span>
            {text}
          </span>
        </button>
      </a>
    );
  }

  return buttons;
}

export default CourseFolder;