import styled from "styled-components"


export const ServiceContainer=styled.section`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
height: 100%;
min-height: 708px;
background-color: #fbe8a6;

`
export const Wrapper=styled.div`
display: flex;
justify-content:center;
flex-direction: column;
align-items: center;
width: 100%;
height: 100%;
@media (max-width:750px){
    padding: 50px;
}
`

export const Question=styled.h1`
line-height: 1.25em;
font-size: 3.06rem;
font-family: 'DM Serif Display',serif;
font-weight: 600;
width: 100%;
height: 100%;
min-height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width:750px){
        min-height: 120px;
    font-size: 2.06rem;
      align-items: center;
      border-bottom: 2px solid #a7a09040;
    } 
`
export const Container=styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
min-height: 440px;
border-top: 2px solid #a7a09040;
@media (max-width:750px){
       flex-direction:column;
       border: none;
    }
`
export const Content=styled.div`
display: flex;
flex-direction: column;
justify-content:flex-start;
padding:60px 50px;
width: 100%;
max-width: 250px;
height: 100%;
gap:50px;
min-height: 380px;
border-left: ${props=>props.contentsize===2 ? '1px solid  #a7a09040':'none'};
border-right: ${props=>props.contentsize===2 ? '1px solid  #a7a09040':'none'};
@media (max-width:750px){
    gap: 35px;
    padding:40px 0;
    min-height: 200px;
    max-width: none;
    border-left:none ;
    border-right: none;
    border-top: ${props=>props.contentsize===2 ? '1px solid  #a7a09040':'none'};
    border-bottom: ${props=>props.contentsize===2 ? '1px solid  #a7a09040':'none'};
}
`
export const Title=styled.h1`
    font-family: 'MD Serif Display',serif;
    line-height: 1.25em;
    font-size: 1.47rem;
    @media (max-width:950px){
        font-size: 1.3rem;
    }
    
`
export const Info=styled.p`
    line-height: 1.25em;
    font-size: 18px;
    font-weight: 400;
    color: #534a45;
    text-align: justify;
    width: 100%;
    max-width:390px;
    @media (max-width:750px){
       max-width: none;
    }
    
`
export const Button=styled.button`
    min-height: 44px;
    width: 100%;
    min-width: 135px;
    max-width: 140px;
    padding: 0.75em;
    border: 2px solid rgb(44, 41, 39);
    border-radius: 2px;
    background: transparent;
    box-sizing: border-box;
    transition: all .2s linear;
    font-family: 'Poppins',sans-serif;
    font-weight: 400;
    font-size: 17px;
    text-align: center;
`