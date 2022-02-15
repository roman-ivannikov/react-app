import styled from 'styled-components';
import imgPreloader from '../../images/three-dots.svg';

export const Preloader = styled.div`
    width: 120px;
    height: 30px;
    margin: 30px auto 0;
    background-image: url(${imgPreloader});
    background-size: cover;
    background-position: center;
    background-color: #ccc;
`;