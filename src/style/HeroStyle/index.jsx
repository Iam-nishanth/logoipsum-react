import styled from "styled-components";
import {FaLongArrowAltDown} from "react-icons/fa"
import { Link} from "react-router-dom"

export const HeroContainer = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;

`
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: url('	https://websitedemos.net/digital-agency-02/wp-content/uploads/sites/836/2021/05/hero-bg.jpg'),#2c2927;
    background-attachment: fixed;
    height: 100vh;
    width: 100%;
    background-blend-mode: overlay;
    background-repeat: no-repeat;
    background-size: cover;
    font-family: 'Poppins', sans-serif;
`
export const ServiceSection = styled.div`
    width: 100%;
    min-height: 400px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    max-width: 1200px;
    gap: 30px;
    padding: 50px;
`
export const HR = styled.hr`
  width: 100%;
  max-width: 60px;
  border: none;
  border-top: 5px solid #fbe8a6;
`
export const Heading = styled.h1`
  font-size: 70px;
  font-family: 'DM Serif Display',serif;

`

export const Description = styled.div`
  height: 100%;
  max-height: 500px;
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content:space-between;
  align-items: flex-end;
  @media (max-width:1000px) {
    min-height: 400px;
    max-height: none;
  }
  @media (max-width:750px) {
    min-height: 280px;
    max-height: none;
  }
  @media (max-width:550px) {
    min-height: 350px;
  }
`
export const TestWrapper = styled.div`
    height:auto;
    width: 100%;
    display: flex;
    justify-content:flex-start;
    align-items:flex-start;
`
export const Title = styled.h1`
  color: rgb(255, 255, 255);
  width: 100%;
  max-width: 1050px;
  font-size: 5.5882352941176rem ;
  line-height: 1.4em;
  font-family: 'DM Serif Display',serif;
  @media (max-width:1050px) {
    font-size: 3.59rem ;
  }
  @media (max-width:750px) {
    font-size: 32px ;
  }
`
export const Text = styled.p`
  width: 100%;
  max-width: 390px;
  font-size: 20px;
  color: rgb(255, 255, 255);
  @media (max-width:750px) {
    max-width: none;
  }
`
export const Find = styled(Link)`
  width: 100%;
  font-size: 20px;
  padding: 10px;
  color: rgb(255, 255, 255);
  text-align: center;
  align-items: center;
  display: flex;
  text-decoration: none;
  justify-content: center;
  cursor: pointer;
  @media (max-width:750px) {
    text-align: start;
    justify-content: flex-start;
  }
  &:hover{
    color: rgb(244, 235, 116);
  }
`
export const ArrowDown = styled(FaLongArrowAltDown)`
width: 100%;
max-width:20px;
height: 100%;
max-height:20px
`