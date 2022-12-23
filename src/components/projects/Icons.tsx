import javaIcon from '../../assets/java_icon.png'
import javaFXIcon from '../../assets/javaFX_icon.png'
import sceneBuilderIcon from '../../assets/sceneBuilder_icon.png'
import cssIcon from '../../assets/css_icon.png'
import javascriptIcon from '../../assets/javascript_icon_2.png'
import reactIcon from '../../assets/react_icon.png'
import cppIcon from '../../assets/cpp_icon.png'
import sfmlIcon from '../../assets/sfml_icon.png'
import particleFunGif from '../../assets/gifTry6.gif'
import weatherGif from '../../assets/gifWeatherTry3.gif'
import chessGif from '../../assets/ChessGamePromotionTraversal.gif'
import researchGif from '../../assets/researchGif.gif'
import knightIcon from '../../assets/knightIcon.png'
import atomIcon from '../../assets/atomIcon.png'
import weatherIcon from '../../assets/weatherIcon.png'
import pythonIcon from '../../assets/pythonIcon.png'
import proteinIcon from '../../assets/proteinIcon.png'

const gifs = [chessGif, particleFunGif, weatherGif, researchGif];
const placeholderIcons = [knightIcon, atomIcon, weatherIcon, proteinIcon];

const techStackIcons = [
    [cppIcon, 'C++', sfmlIcon, 'SFML'],
    [javaIcon, 'Java', javaFXIcon, 'JavaFX', sceneBuilderIcon, 'ScenceBuilder', cssIcon, 'CSS'],
    [javascriptIcon, 'Javascript', reactIcon, 'React', cssIcon, 'CSS'],
    [pythonIcon, 'Python']
]

export { gifs, techStackIcons, placeholderIcons }