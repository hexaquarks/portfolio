import { useState } from 'react';
import { Element } from 'react-scroll';
import TitleLetter from './TitleLetter';
import SelectionItem from './SelectionItem';
import { styled } from '@mui/system';


import maLogo from '../../assets/maLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

import {
    nameLetters,
    verticalNavbarSelection,
    githubProfileLink,
    linkedInProfileLink,
} from './Util';

const CoverContainer = styled('div')(({ theme }) => ({
    width: '100%',
    height: 'inherit',
    display: 'flex',
}));

const Description = styled('div')(({ theme }) => ({
    marginLeft: '10%',
    marginTop: '6%',
    width: '100%',
    height: 'inherit',
    '& h2': {
        color: 'rgb(231, 231, 231)',
        wordWrap: 'break-word',
        fontStyle: 'italic',
        fontFamily: "'Perpetua', serif",
        fontSize: 'clamp(10px, 2vw, 28px)',
        verticalAlign: 'middle',
    },
}));

const LettersContainer = styled('div')(({ theme }) => ({
    position: 'relative',
    verticalAlign: 'middle',
    margin: '0 auto',
    '&::before': {
        position: 'absolute',
        content: '""',
        marginTop: '20px',
        top: '-24%',
        left: 0,
        marginLeft: '-3%',
        height: '158%',
        width: 'clamp(1px, 0.6vw, 5px)',
        backgroundColor: '#ffa500',
    },
}));

const TitleRule = styled('hr')(({ theme }) => ({
    backgroundColor: '#ffa500',
    width: '110%',
    height: 'clamp(1px, 0.5vw, 5px)',
    marginLeft: '-10%',
    marginBottom: '2%',
}));

const SideBar = styled('div')(({ theme }) => ({
    display: 'block',
    position: 'fixed',
    right: 0,
    top: 0,
    content: '""',
    width: '275px',
    height: '100vh',
    zIndex: '1000 !important',
    [theme.breakpoints.down('md')]: {
        display: 'none',
    },
}));

const SideBarIcon = styled('div')(({ theme }) => ({
    position: 'relative',
    height: '25vh',
    backgroundColor: 'white',
    '& img': {
        width: '100%',
        height: '100%',
        backgroundPosition: 'center',
    },
}));

const SideBarLinks = styled('div')(({ theme }) => ({
    position: 'relative',
    backgroundColor: 'black',
    height: '5vh',
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    verticalAlign: 'middle',
    paddingLeft: '15%',
    paddingRight: '15%',
    zIndex: '999 !important',
    '& .icon': {
        alignSelf: 'center',
        color: 'orange',
        fontSize: '2.3rem',
    },
}));

const SideBarSelection = styled('div')(({ theme }) => ({
    height: '70vh',
    backgroundColor: 'rgb(0, 0, 0)',
    display: 'grid',
    gridColumnGap: '20px',
    gridTemplateColumns: '2fr',
    gridTemplateRows: 'repeat(4, 0.5fr)',
}));

const NavLink = styled('div')(({ theme }) => ({
    width: '100%',
    height: '100%',
    '& .selectionBox': {
        marginLeft: '8%',
        display: 'grid',
        gridColumnGap: '10px',
        height: '100%',
        cursor: 'pointer',
        '& .icon': {
            alignSelf: 'center',
            paddingLeft: '50%',
            color: 'white',
            fontSize: '2rem',
        },
        '& > span': {
            alignSelf: 'center',
            paddingLeft: '10%',
            fontSize: '2vw',
            color: '#f2f2f2',
            fontFamily: 'Futura, "Trebuchet MS", Arial, sans-serif',
            textTransform: 'uppercase',
        },
        '& .selectionRectangle': {
            border: 'rgb(18, 18, 18) solid 3px',
        },
        '& > div': {
            transition: '0.35s',
        },
    },
}));

const Cover = () => {
    const [selectedItem, setSelectedItem] = useState<number>(0);
    const updateSelectedItem = (num: number) => {
        setSelectedItem(num);
    };

    return (
        <Element id="CoverScrollSection" name="CoverScrollSection">
            <CoverContainer>
                <Description>
                    <LettersContainer>
                        <ul>
                            <TitleRule />
                            {nameLetters.map((value, index) => (
                                <TitleLetter name={value} index={index} />
                            ))}
                        </ul>
                    </LettersContainer>
                    <h2>
                        Software developer | Chess player | Physics enthusiast
                    </h2>
                </Description>
                <SideBar>
                    <SideBarIcon>
                        <img src={maLogo} />
                    </SideBarIcon>
                    <SideBarLinks>
                        <a href={githubProfileLink} target="_blank">
                            <FontAwesomeIcon icon={faGithub} className="icon" />
                        </a>
                        <a href={linkedInProfileLink} target="_blank">
                            <FontAwesomeIcon icon={faLinkedin} className="icon" />
                        </a>
                    </SideBarLinks>
                    <SideBarSelection>
                        {verticalNavbarSelection.map((value, index) => (
                                <SelectionItem
                                    name={value.name}
                                    target={value.target}
                                    index={index}
                                    update={updateSelectedItem}
                                    selectedItem={selectedItem}
                                    navbarFlag={false}
                                />
                        ))}
                    </SideBarSelection>
                </SideBar>
            </CoverContainer>
        </Element>
    );
};

export default Cover;


