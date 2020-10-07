import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const DDContain = styled.div`
    display: inline-flex;
    flex-direction: column;
`

const DropDownMenu = styled.div`
    border: 1px solid #BDBDBD;
    box-sizing: border-box;
    border-radius: 20px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: #FFF;
    transition: background-color 0.5s;
    &:hover {
        background-color: #DDD;
    }
`;

const DropDownBox = styled.div`
    width: 100%;
    padding: 10px;
    display: flex;
    div {
        margin: 0 10px;
    }
`
const Expand = styled.div`
    background: #FFFFFF;
    border: 1px solid #EAEAEA;
    box-sizing: border-box;
    /* Sidebar Shadow */
    box-shadow: 5px 0px 18px rgba(0, 0, 0, 0.08);
    display: ${props=>props.expanded ? "inline-flex" : "hidden"};
    height: ${props=>props.expanded ? "auto" : "0px"};
    font-size: ${props=>props.expanded ? "18px" : "0px"};
    // if the above two ^^^ aren't added then the menu is still there (tho invisible)
    opacity: ${props=>props.expanded ? 1 : 0};
    transition: opacity 0.5s;
    flex-direction: column;
    margin-top: 10px;
    div {
        padding: ${props=>props.expanded ? "10px 15px" : "0px"};
        margin: ${props=>props.expanded ? "5px 0px" : "0px"};
        cursor: pointer;
        &:hover {
            background-color: #DDD;
        }
    }
`

const ExpandedIcon = styled.img`
    transform: ${props=>props.expanded ? "rotate(180deg)" : "none"};
`

const Menu = ({expand, onMenuSelect}) => {
    const [expanded, setExpanded] = useState(false);

    useEffect(()=>{
        setExpanded(expand)
    }, [expand])
    // when expand value is changed, set expanded to whatever the captured value (expand) is
    // every time the config changes (dropdown is clicked), it can change ANOTHER state

    return <DDContain>
        <DropDownMenu onClick={()=>{
            setExpanded(!expanded);
            // = OPPOSITE of the "expanded" state
            // allows you to toggle between true and false
        }}>
            <DropDownBox>
                <div><img src="/user.png"></img></div>
                <div>johndoe@bcit.ca</div>
                <div><ExpandedIcon src="/expand.png" expanded={expanded}/></div>
            </DropDownBox>
        </DropDownMenu>
        <Expand expanded={expanded}>
            <div onClick={()=>{
            onMenuSelect("bg");}}>Change BG Color</div>
            <div onClick={()=>{
            onMenuSelect("img");}}>Change BG Image</div>
            <div onClick={()=>{
            onMenuSelect("help");}}>Help</div>
        </Expand>
    </DDContain>
}

Menu.defaultProps = {
    expand:false
}

export default Menu;