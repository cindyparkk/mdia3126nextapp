import React from 'react';
import styled, {css} from 'styled-components';

const BannerContain = styled.div`
    background-color: rgba(255, 255, 255, 0.88);
    max-width: 478px;
    max-height: 170px;
    padding: 15px 36px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const BannerTitle = styled.p`
    font-size: 32px;
    font-weight: 500;
    margin-bottom: 0px;
    color: #333333
`
const BannerText = styled.p`
    font-size: 18px;
    color: #3D5AF1;
`

const Banner = ({title, text}) => {
    return <BannerContain>
        <BannerTitle>{title}<span role="img">{String.fromCodePoint("0x1F389")}</span></BannerTitle>
        <BannerText>{text}</BannerText>
    </BannerContain>
}

Banner.defaultProps = {
    title: "Hack your way to learning ",
    text: "Start your free account today."
}

export default Banner;