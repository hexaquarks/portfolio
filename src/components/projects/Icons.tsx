// Tech stack icons displayed in the descriptions of each personal project 
import { FaJava, FaCss3Alt, FaJsSquare, FaReact, FaPython } from 'react-icons/fa';
import { SiCplusplus, SiTypescript, SiMui, SiSfml } from 'react-icons/si';

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
    [
        SiCplusplus, 'C++',
        SiSfml, 'SFML',
    ],
    [
        FaJava, 'Java',
        FaJava, 'JavaFX',
        FaCss3Alt, 'CSS',
    ],
    [
        SiTypescript, 'Typescript',
        SiMui, 'MaterialUI',
    ],
    [
        FaPython, 'Python',
    ],
    [
        FaJsSquare, 'Javascript',
        FaReact, 'React',
        FaCss3Alt, 'CSS',
    ],
];

export {
    gifs,
    techStackIcons,
    placeholderIcons,
};
