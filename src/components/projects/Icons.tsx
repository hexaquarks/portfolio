// Tech stack icons displayed in the descriptions of each personal project 
import javaIcon from '../../assets/java_icon.png';
import javaFXIcon from '../../assets/javaFX_icon.png';
import sceneBuilderIcon from '../../assets/sceneBuilder_icon.png';
import cssIcon from '../../assets/css_icon.png';
import javascriptIcon from '../../assets/javascript_icon_2.png';
import reactIcon from '../../assets/react_icon.png';
import cppIcon from '../../assets/cpp_icon.png';
import sfmlIcon from '../../assets/sfml_icon.png';
import pythonIcon from '../../assets/pythonIcon.png';
import typescriptIcon from '../../assets/typescriptIcon.png';
import muiIcon from '../../assets/muiIcon.png';

// The gifs associated with each personal project when hovering the component
import particleFunGif from '../../assets/gifTry6.gif';
import weatherGif from '../../assets/gifWeatherTry3.gif';
import chessGif from '../../assets/ChessGamePromotionTraversal.gif';
import researchGif from '../../assets/researchGif.gif';
import portfolioEcaterinaGif from '../../assets/portfolioEcaterinaGif.gif';

// The placeholder icon over the personal projects components
import knightIcon from '../../assets/knightIcon.png';
import atomIcon from '../../assets/atomIcon.png';
import portfolioIcon from '../../assets/portfolioIcon.png';
import proteinIcon from '../../assets/proteinIcon.png';
import weatherIcon from '../../assets/weatherIcon.png';

const gifs = [
  chessGif,
  particleFunGif,
  portfolioEcaterinaGif,
  researchGif,
  weatherGif,
];

const placeholderIcons = [
  knightIcon,
  atomIcon,
  portfolioIcon,
  proteinIcon,
  weatherIcon,
];

const techStackIcons = [
  [cppIcon, 'C++', sfmlIcon, 'SFML'],
  [javaIcon, 'Java', javaFXIcon, 'JavaFX', sceneBuilderIcon, 'ScenceBuilder', cssIcon, 'CSS'],
  [typescriptIcon, 'Typescript', muiIcon, 'MaterialUI'],
  [pythonIcon, 'Python'],
  [javascriptIcon, 'Javascript', reactIcon, 'React', cssIcon, 'CSS'],
];

export {
  gifs,
  techStackIcons,
  placeholderIcons,
};
