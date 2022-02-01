import React from 'react';
import styled from 'styled-components';
import logoImg from '../images/logo.svg';
import loginImg from '../images/sign.svg';


const NavBarStyled = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    height: 80px;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background-color: #299B01;
    color: white;
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
`;

const H1 = styled.h1`
    font-size: 24px;
    margin-left: 15px;
`;

const ImgLogo = styled.img`
    width: 50px;
`;

const Login = styled.a`
    font-family: Roboto, sans-serif;
    font-size: 16px;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px 0;
    cursor: point;

    &:hover {
        color: #9d0472;
    }
`;
const ImgLogin = styled.img`
    width: 32px;
    margin-bottom: 3px;
`;

export const NavBar = () => (
    <NavBarStyled>
        <Logo>
            <ImgLogo src={logoImg} alt="logo"/>
            <H1>MrDonald's</H1>
        </Logo>
        <Login>
            <ImgLogin src={loginImg} alt="login"/>
            войти
        </Login>
    </NavBarStyled>
);