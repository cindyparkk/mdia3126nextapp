import React from 'react';
import styled, { css } from 'styled-components';

const NavContain = styled.div`
    min-width: 1451px;
    max-width: 100%;
    min-height: 78px;
    margin: auto;
    display: flex;
    align-items: center;
    background-color: #F2F4FB;
    box-shadow: 2px 4px 15px rgba(0, 0, 0, 0.13)
`
const NavBoxLeft = styled.div`
    display: flex;
    padding: 20px;
    flex-grow: 2;

    & > NavItem:nth-child(2) {
        color: #777777
    }
`
const NavItem = styled.div`
    color: #3D6FF1;
    font-size: 18px;
    display: flex;
    align-items: center;
    padding: 0 15px;

    & > img {
         padding: 0 10px;
    }
`

const NavBoxRight = styled.div`
    display: inline-flex;
    align-items: center;
    // flex-grow: 1;
`

const Nav = ({menu1, menu2}) =>{
    return <NavContain>
        <NavBoxLeft>
            <img src="logo.png"></img>
            <NavItem><img src="/home.png"></img>{menu1}</NavItem>
            <NavItem><img src="/help.png"></img>{menu2}</NavItem>
        </NavBoxLeft>
        <NavBoxRight>
            <NavItem><img src="/search.png" /></NavItem>
            <NavItem><img src="/bell.png" /></NavItem>
            <NavItem><img src="/avatar.png" /></NavItem>
        </NavBoxRight>
    </NavContain>
}

Nav.defaultProps = {
    menu1: "Menu 1",
    menu2: "Menu 2"
}

export default Nav;