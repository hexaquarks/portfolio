import { useState } from "react";
import { Link } from "react-scroll";
import { styled } from "@mui/system";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCircleInfo, faFolderClosed, faIdCard } from "@fortawesome/free-solid-svg-icons";

interface selectionItemInterface {
    name: string;
    target: string;
    index: number;
    update: (num: number) => void;
    selectedItem: number;
    navbarFlag: boolean;
}

const selectedItemColor: string = "#ffa500";
const hoveredItemColor: string = "rgba(255,165,0,0.35)";
const backgroundItemColor: string = "black";

const StyledSelectionItem = styled(Link)(({ theme }) => ({
    textDecoration: "none",
    "& .selectionBox": {
        marginLeft: "8%",
        display: "grid",
        gridColumnGap: "10px",
        height: "100%",
        cursor: "pointer",
        gridTemplateColumns: "0.5fr 1.8fr 0.2fr",
        "& .icon": {
            alignSelf: "center",
            paddingLeft: "50%",
            color: "white",
            fontSize: "2rem",
        },
        "& > span": {
            alignSelf: "center",
            paddingLeft: "10%",
            fontSize: "2vw",
            color: "#f2f2f2",
            fontFamily: 'Futura, "Trebuchet MS", Arial, sans-serif',
            textTransform: "uppercase",
        },
    },
    "& .selectionRectangle": {
        border: "rgb(18, 18, 18) solid 3px",
        transition: "0.35s",
    },
}));

const SelectionItem = (props: selectionItemInterface) => {
    const [animating, setAnimating] = useState<boolean>(false);

    const { name, target, index, update, selectedItem } = props;
    const icons = [faHome, faCircleInfo, faFolderClosed, faIdCard];

    return (
        <StyledSelectionItem
            to={target}
            spy={true}
            smooth={true}
            duration={1000}
            onSetActive={() => update(index)}
            onSetInactive={() => setAnimating(false)}
        >
            <div
                className="selectionBox"
                onMouseEnter={() => {
                    setAnimating(true);
                }}
                onClick={() => {
                    update(index);
                }}
                onMouseLeave={() => {
                    setAnimating(false);
                }}
            >
                <FontAwesomeIcon icon={icons[index]} className="icon" />
                <span>{name}</span>
                <div
                    className="selectionRectangle"
                    style={{
                        backgroundColor:
                            selectedItem === index
                                ? selectedItemColor
                                : animating
                                ? hoveredItemColor
                                : backgroundItemColor,
                    }}
                ></div>
            </div>
        </StyledSelectionItem>
    );
};

export default SelectionItem;
