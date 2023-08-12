import styled from "styled-components";
import { FaTimes } from 'react-icons/fa'
import { Link } from "react-router-dom";



export const Container = styled.aside`
    *{
        margin: 0;
        padding: 0;
    }
    position: fixed;
    z-index: 10;
    width: 100%;
    height: 100%;
    background-color: #2c2927;
    display: flex;
    align-items: center;
    top: 0;
    right: 0;
    transition: 0.5s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')}; 
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')}; 
    
`
export const Close = styled(FaTimes)`
    color: #fff;
    font-size: 25px;
`
export const Icon = styled.div`
    position: absolute;
    top: 35px;
    right: 20px;
    background: transparent;
    font-size: 35px;
    cursor: pointer;
    outline: none;
`
export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    max-width: 300px;
    min-height: 400px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    gap: 50px;
`
export const MobileMenu = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
    text-align: center;
`
export const SocialMenu = styled.ul`
    
`

export const NLink = styled(Link)`
    text-decoration: none;
    color: white;
    font: 400 16px inherit;
`
export const NavButton = styled.button`
    width: 150px;
    height: 40px;
    background-color: white;
    &:hover{
        background-color: #3990ac;
    }
    font: inherit;
`
