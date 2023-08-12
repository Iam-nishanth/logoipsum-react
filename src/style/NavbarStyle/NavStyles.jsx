import styled from "styled-components";
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
@import url('https://fonts.cdnfonts.com/css/graphik');
    min-height: 100px;
    width: 100%;
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    z-index: 5;
    font-family: "Graphik",sans-serif;
    font-weight: 500;
    letter-spacing: 0.3px;
    transition: 0.5s all ease;

   
`
export const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 120px;
    width: 100%;
    padding: 8px 24px;

`
export const Image = styled.img`
    min-height: 70px;
    transition: .5s all ease-in-out;

    &:hover{
        scale: 1.05;
    }
`
export const MobileIcon = styled.div`
    display: none;
    transition: .8s all ease;
    cursor: pointer;
    color: #fff;

    @media screen and (max-width: 700px){
        display: block;
        position: absolute;
        top: 35px;
        right: 0;
        transform: translate(-100%,60%);
        font-size: 25px;
    }
`
export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style:none;
    text-align: center;
    gap: 40px;
    @media (max-width: 800px){
        gap: 15px;
    }
    @media (max-width: 700px) {
        display: none;
    }
`
export const NavItem = styled.li``

export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    height: 100%;
    cursor: pointer;
    transition: 0.2s all ease-in-out;

    &:hover{
        color: #fbe8a6;
    }
`
export const NavSocials = styled.div`

    display: flex;
    color: #000;
    justify-content: center;
    align-items: center;
    align-self: center;
    gap: 20px;
    



@media screen and (max-width: 700px) {
    display: none;
}
@media screen and (max-width: 770px) {
    height: 46px;
}

`
export const Hamburger = styled(FaBars)`
    display: flex;

`
export const NavButton = styled.button`
    width: 140px;
    height: 40px;
    background-color: white;
    border: .5px solid transparent;
    &:hover{
        background-color: #fbe8a6;
    }
    font-family: inherit;
    font-size: 14px;
    font-weight: 600;
`