import styled from "styled-components";


export const MotivateContainer=styled.section`
    width: 100%;
    height:100%;
    min-height: 866px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(255, 255, 255);
`
export const Wrapper=styled.div`
    width: 100%;
    max-width: 1200px;
    height:100%;
    min-height: 746px;
    display: flex;
    flex-direction: column;
    justify-content:space-evenly;
    align-items: center;
    padding: 50px;
    gap: 20px;
    @media (max-width: 750px) {
        padding: 25px;
    }
    @media (max-width: 750px) {
        padding: 25px;
    }
   
`
export const TextContent=styled.div`
    width: 100%;
    height: 100%;
    min-height: 140px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    gap: 20px;
    @media (max-width: 750px) {
        gap: 10px;
        min-height: 120px;
    }
`
export const Title=styled.div`
     font-size: 17px;
     color: #534a45;
     font-family: 'DM Serif Display',serif;
     font-weight: 700;
     line-height: 1;
    
`
export const Container = styled.div`
    width: 100%;
    height: 100%;
    max-height: 160px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 25px;
    @media (max-width: 750px) {
       flex-direction: column;
       gap: 15px;
    }
`
export const Info=styled.h1`
     width: 100%;
    height: 100%;
    line-height: 1em;
    max-width: 550px;
    max-height: 160px;
    font-weight: 700;
    
    font-size: 3.0rem;
    font-family: 'DM Serif Display',serif;
    @media (max-width: 1000px){
        font-size: 2.5rem;

    }
    @media (max-width: 750px) {
        font-size: 2rem;
        max-width: none;
    }
    @media (max-width: 600px) {
        font-size: 1.8rem;

    }
`
export const Description=styled.p`
    font-size: 25px;
    font-style: inherit;
    color: #534a45;
    font-weight: inherit;
    vertical-align: baseline;
    text-align: justify;
    width: 100%;
    height: 100%;
    max-width: 600px;
    @media (max-width: 750px) {
        font-size: 20px;
    }
    @media (max-width: 600px) {
        font-size: 1rem;

    }
`
export const ImageContainer=styled.div`
    width: 100%;
    max-width: 1200px;
    height: 100%;
    display:flex;
    justify-content:space-evenly;
    grid-gap: 20px;
    align-items: center;
    @media (max-width: 750px) {
       flex-wrap: wrap;
       justify-content:center;
    }
`
export const ImageBox=styled.div`
    width: 100%;
    min-width: 200px;
    max-width: 380px;
    aspect-ratio: 1/1;
 
   
`

export const Image=styled.img`
   width: 100%;
   height: 100%;
   cursor: pointer;
     
`