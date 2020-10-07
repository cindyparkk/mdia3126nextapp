import React from 'react';
import styled, { css } from 'styled-components';

const HeadTitle = styled.h1`
    margin-bottom: 10px;
    text-transform: capitalize;
`;

const SubHeadTitle = styled.p`
    
`;

const HeadBox = styled.div`
    display: inline-flex;
    flex-direction: column;
    min-width: 185px;
    // min-height: 74px;
`;

const Header = ({ title, subtitle }) => {
    return <HeadBox>
        <HeadTitle>{title}</HeadTitle>
        <SubHeadTitle>{subtitle}</SubHeadTitle>
    </HeadBox>
}

Header.defaultProps = {
    title: "welcome",
    subtitle: "Hi USER, let's get started"
}

export default Header;