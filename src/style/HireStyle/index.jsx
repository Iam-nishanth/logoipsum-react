import styled from "styled-components";


export const HireContainer=styled.section`
    width: 100%;
    height: 100%;
    min-height: 486px;
    max-height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(255, 255, 255);
`
export const Wrapper=styled.div`
    width: 100%;
    max-width: 1200px;
    height: 100%;
    min-height: 250px;
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    align-items: flex-start;
    padding: 50px;
    @media (max-width:1000px){
        min-height: 400px;
        
    }
    @media (max-width: 750px) {
        padding: 25px;
    }
`
export const Header=styled.h1`
    font-size: 3.06rem;
    font-family: 'DM Serif Display',serif;
    font-weight: 500;
    @media (max-width:750px) {
        font-size: 2.06rem; 
    }
`
export const ContentBox=styled.div`
    width: 100%;
    height: 100%;
    max-height: 140px;
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    align-items: center;
    gap: 20px;

    @media (max-width:1000px){
        flex-wrap:wrap;
        max-height: 340px;


    }
`
export const Categories=styled.div`
    width: 100%;
    max-width: 386px;
    height: 100%;
    min-height:140px ;
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    align-items: flex-start;
    gap: 10px;
    @media (max-width:1000px){
       min-height: 130px;
       
    }
    @media (max-width:900px){
        min-height:80px ;
       max-width: none;
    }
`
export const Title=styled.h1`
    font-weight: 600;
    line-height: 1.2em;
    font-size: 1.4705882352941rem;
    font-family: 'DM Serif Display',serif;
    
`
export const Description=styled.p`
    height: 100%;
    min-height: 82px;
    color:#534a45;
    font-family: 'Poppins',sans-serif;
    font-weight: 400;
    font-size: 18px;
    font-style: normal;
    text-align: justify;
    @media (max-width:900px){
        min-height: 52px;
    }
`
