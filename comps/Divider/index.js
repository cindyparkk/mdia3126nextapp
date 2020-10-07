import React from 'react';
import styled, { css } from 'styled-components';

const DividerTitle = styled.p`
    font-size: 14px;
    color: #505050;
    padding: 0 10px 0 10px;
`;

const Border = styled.div`
    width: 100%;
    border-bottom: 1.5px solid #C6C6C6;
    text-align: center;
`;

const DividerContain = styled.div`
    display: flex;
    align-items: center;
    max-width: 382px;
    max-height: 16px;
    margin: 20px 0;
`

const Divider = ({ title }) => {
    return <DividerContain>
        <Border></Border>
        <DividerTitle>{title}</DividerTitle>
        <Border></Border>
    </DividerContain>
}

Divider.defaultProps = {
    title: "or"
}

export default Divider;