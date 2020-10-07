import React from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div`
    display: flex;
    max-width: 300px;
    min-height: 100px;
    flex-direction: column;
    justify-content: space-evenly;
`

const ButtonTitle = styled.p`
    color: #FFF;
`;

const ButtonBox = styled.div`
    background-color: ${props => props.bgcolor ? props.bgcolor : "#3D6FF1"};
    max-width: 384px;
    // max-width: 100%;
    min-height: 46px;
    border-radius: ${props => props.radius ? props.radius : "5px"};
    display: flex;
    align-items: center;
    justify-content: center;
`;

// const ButtonImage = styled.div`
//     ${props=>props.google === true && css`
//     // background-image: url("/google.png")
//     height: 50px;
//     width: 50px;
//     background-color: #FFF;
//     position: absolute;
//     left: 15px;
//     `}
// `

const Button = ({ title, bgcolor, google, radius }) => {
    return <Container>
        <ButtonBox bgcolor={bgcolor}>
            {/* <ButtonBox bgcolor={bgcolor} radius={radius}></ButtonBox> */}
            {/* <ButtonImage google={google}></ButtonImage> */}
            <ButtonTitle >{title}</ButtonTitle>
        </ButtonBox>
    </Container>
}

Button.defaultProps = {
    // radius: null,
    title: "Login",
    bgcolor: null,
    bgimage: null
}

export default Button;