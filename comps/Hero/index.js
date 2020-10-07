import React from 'react';
import styled, { css } from 'styled-components';
import Banner from '../Banner';

const HeroContain = styled.div`
 
`
const HeroImage = styled.div`
    z-index: -1;
    min-width: 573px;
    min-height: 976px;
    max-height: 100%;
    background-image: url(${props=>props.bgimage ? props.bgimage : "/image5.jpg"})
`

const Contain = styled.div`
    position: relative;
    right: -256px;
    top: -230px;
`

const Hero = ({bgimage}) => {
    return <HeroContain>
            <HeroImage src={bgimage}/>
            <Contain><Banner/></Contain>
    </HeroContain>
}


export default Hero;