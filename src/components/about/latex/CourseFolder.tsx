import React, { useState } from 'react';

import styles from './LatexFolders.module.scss';
import downArrow from '../../../assets/down_arrow.png';
import openFolder from '../../../assets/folderOpen.png';
import closedFolder from '../../../assets/folderClosed.png';
import noteIcon from '../../../assets/notes.png';
import bookIcon from '../../../assets/bookIcon.png';
import codeIcon from '../../../assets/code.png';

import { courseFiles, courseInterface } from './Util';

interface propsInterface {
    value : { id: string, name: string };
    key   : number;
    xPos  : number;
    index : number;
    folderWidth : number,
    setEnableArrows : React.Dispatch<React.SetStateAction<boolean>>;
}

const CourseFolder = (props : propsInterface) => {
  const { value, key, xPos, index, folderWidth, setEnableArrows} = props;

  const [image, setImage] = useState<string>(closedFolder);
  const [showDescriptionChild, setShowDescriptionChild] = useState<boolean>(false);

  const handleMouseOver = () => { setImage(openFolder); };
  const handleMouseLeave = () => { setImage(closedFolder); };

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
            { buildButtons(courseFiles, index) }
          </div>
        </div>
      </div>

      <span >{value.id}</span>
      <div key={index}
        onMouseEnter={() => { handleMouseOver() }}
        onMouseLeave={() => { handleMouseLeave() }}
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

const makeClassButton = () => {
  return { iconPath: bookIcon, fileDisplayFormattedText:  'Class Notes' + '\xa0'.repeat(4)}
}
const makeAssignmentButton = (fileName: string) => {
  const fileDisplayFormattedText = 'Assignment' + ' ' + fileName.substr(fileName.length - 1)
  return { iconPath: noteIcon, fileDisplayFormattedText }
}
const makeFinalExamButton = () => {
  return { iconPath: noteIcon, fileDisplayFormattedText: 'Final Exam' + '\xa0'.repeat(5) }
}
const makeCodeRepoButton = () => {
  return { iconPath: codeIcon, fileDisplayFormattedText: 'Code Repo' + '\xa0'.repeat(6) }
}

const buildButtons = (courses : courseInterface[], index : number) => {
  var buttons: JSX.Element[] = [];
  const globalLink = "https://github.com/hexaquarks/Latex_Files/"; //link header
  const folderPath = "tree/main/"; //for folder
  const notesPath = "blob/main/"; //for any file
  
  for (var i = 0; i < courses[index].files.length; ++i) {
    const course = courses[index];
    const currFile = course.files[i]
    
    const fileNameFirstLetter = currFile.charAt(0);
    let fileLink = globalLink;
    var iconPath = ''
    var fileDisplayFormattedText = ''

    fileNameFirstLetter === 'c'
      ? fileLink += folderPath + course.name + '/' + course.name + '_Tex'
      : fileLink += notesPath + course.name + '/' + course.name + '_' + currFile + '.pdf';

    switch (fileNameFirstLetter) {
      case 'N': ({ iconPath, fileDisplayFormattedText } = makeClassButton()); break;
      case 'A': ({ iconPath, fileDisplayFormattedText } = makeAssignmentButton(currFile)); break;
      case 'F': ({ iconPath, fileDisplayFormattedText } = makeFinalExamButton()); break;
      default: ({ iconPath, fileDisplayFormattedText } = makeCodeRepoButton()); break;
    }

    buttons.push(
      <a href={fileLink} target="_blank">
        <button>
          <img src={iconPath} height="12" />
          <span>
            {fileDisplayFormattedText}
          </span>
        </button>
      </a>
    );
  }

  return buttons;
}

export default CourseFolder;