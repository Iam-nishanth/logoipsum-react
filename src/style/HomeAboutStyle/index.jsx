import styled from "styled-components";

export const AboutContainer=styled.section`
    width: 100%;
    height: 100%;
    min-height: 864px;
    background-color: rgb(251, 232, 166);
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Wrapper=styled.div`
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding:0 50px;
    gap: 20px;
    @media (max-width:750px){
        flex-wrap:wrap;
    }
    @media (max-width: 750px) {
        padding:0 25px;
    }
`
export const DescriptionContent=styled.div`
    width: 100%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    justify-content:space-evenly;
    align-items:flex-start;
    height: 100%;
    min-height: 625px;
   
`
export const Content=styled.div`
    width: 100%;
    max-width: 520px;
    height: 100%;
    min-height:160px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    @media (max-width:750px){
        max-width: none;
    }

`

export const Title=styled.h1`
    font-family: 'MD Serif Display',serif;
    line-height: 2.25em;
    font-size: ${props=>props.header===1 ? '3.06rem':'1.47rem'};
    font-family: 'DM Serif Display',serif;
    @media (max-width:750px){
        font-size: ${props=>props.header===1 ? '1.9rem':'1.3rem'}; 
    }
`
export const Description=styled.p`
    line-height: 1.25em;
    font-size: ${props=>props.header===1 ? '22px':'20px'};
    font-weight: 400;
    color: #534a45;
    text-align: justify;
    width: 100%;
    max-width:${props=>props.header===1 ? '100%':'390px'} ;
    @media (max-width:750px){
        max-width: none;
    }
    @media (max-width: 600px) {
        font-size: ${props=>props.header===1 ? '17px':'16px'}

    }
`
export const ImageContainer=styled.div`
    width: 100%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    position: relative;
    @media (max-width:750px){
        align-items: center;
    }
`
export const Image=styled.img.attrs({src:'	https://websitedemos.net/digital-agency-02/wp-content/uploads/sites/836/2021/05/about.jpg'})`
    width: 100%;
    max-width: 520px;
    aspect-ratio: auto 600 / 720;
    position: relative;
    top: 310px;
    @media (max-width:750px){
     top :0 ;
    }
`