// const GButton = styled.button`
//     background-color: #4285F4;
//     min-height: 46px;
//     border: none;
//     display: flex;
//     align-items: center;
// `
// const GText = styled.div`
//     margin: auto;
// `

// const GoogleButton = () =>{
//     return <GContainer>
//         <GButton>
//             <Icon><img src="/google.png"/></Icon>
//             <GText>Login with Google</GText>
//         </GButton>
//     </GContainer>
// };

// GoogleButton.default.Props = {

// };

// export default GoogleButton;

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
    margin: auto;
`;

const Icon = styled.div`
    min-height: 35px;
    min-width: 35px;
    position: relative;
` 

const ButtonBox = styled.div`
    background-color: #4285F4;
    max-width: 384px;
    // max-width: 100%;
    min-height: 46px;
    display: flex;
    align-items: center;
    // justify-content: center;
    // margin-bottom: 10px;
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

const GoogleButton = () => {
    return <Container>
        <ButtonBox>
            <Icon><img src="/google.png"/></Icon>
            <ButtonTitle >Login with Google</ButtonTitle>
        </ButtonBox>
    </Container>
}

GoogleButton.defaultProps = {
    // radius: null,
    title: "Login"
}

export default GoogleButton;