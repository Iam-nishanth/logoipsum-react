import styled from "styled-components";


export const SubscribeContainer=styled.section`
     width: 100%;
    height:100%;
    min-height: 185px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(251, 232, 166);
`
export const Wrapper=styled.div`
    width: 100%;
    max-width: 1200px;
    height:100%;
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    align-items: center;
    padding: 50px;
    gap: 20px;
    @media (max-width:600px){
        flex-direction: column;
        align-items: flex-start;
    }
    @media (max-width: 750px) {
        padding: 25px;
    }
    
`
export const Title=styled.div`
    line-height: 1.25em;
    color: rgb(44, 41, 39);
    font-size: 4.06rem;
    font-family: 'DM Serif Display',serif;
    font-weight: 700;
    @media (max-width:750px){
        font-size: 2.06rem;
    }
`
export const Container=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 15px;
    width: 100%;
    max-width: 700px;
    @media (max-width:600px){
        flex-direction:column;
        align-items: flex-start;
    }
`
export const Input=styled.input.attrs({type:'text',placeholder:'Email Address'})`
    min-height: 54px;
    width: 100%;
    color: rgb(102, 102, 102);
    padding: 0.75em;
    height: auto;
    border: 1px solid rgb(132, 130, 129);
    border-radius: 2px;
    background: rgb(240, 238, 238);
    box-sizing: border-box;
    font-family: 'Poppins',sans-serif;
    font-weight: 400;
    font-size: 17px;
    line-height: 1.6em;
`
export const Button=styled.button`
    min-height: 54px;
    width: 100%;
    min-width: 100px;
    max-width: 180px;
    padding: 0.75em;
    border: 2px solid rgb(44, 41, 39);
    border-radius: 2px;
    background: transparent;
    box-sizing: border-box;
    transition: all .2s linear;
    font-family: 'Poppins',sans-serif;
    font-weight: 400;
    font-size: 17px;
    cursor: pointer;
    line-height: 1.6em;
    @media (max-width:600px){
        max-width: none;
    }
`