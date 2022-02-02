import React from 'react';
import styled from 'styled-components';
import bannerImg from '../images/banner.png';

const BannerContainer = styled.div`
    max-width: 1060px;
    margin: 0 auto;
` ;

export const Banner = () => (
    <BannerContainer>
        <img src={bannerImg} alt="баннер"/>
    </BannerContainer>
)