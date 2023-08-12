import styled from "styled-components";


export const WorkContainer=styled.section`
width: 100%;
height: 100%;
min-height: 526px;
display: flex;
justify-content: center;
align-items: center;
background-color: rgb(255, 255, 255);
@media (max-width:750px){
    align-items: flex-start;
}

`
export const Wrapper=styled.div`
width: 100%;
max-width: 1200px;
height: 100%;
min-height: 512px;
display: flex;
flex-direction: column;
justify-content:center;
align-items: center;
padding: 50px;
@media (max-width:750px){
    min-height: auto;
}
@media (max-width: 750px) {
        padding: 25px;
    }
`
export const Client=styled.div`
width: 100%;
height: 100%;
max-height: 200px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0 0 120px 0px;
@media (max-width:750px){
    min-height: 400px;
    justify-content: space-evenly;
}
`
export const Title=styled.h1`
line-height: 1.25em;
font-size: 3.06rem;
font-family: 'DM Serif Display',serif;
@media (max-width:600px) {
    font-size: 1.8rem;
}
`
export const ImageContainer=styled.div`
display: flex;
flex-direction:row;
justify-content:space-evenly;
gap: 20px;
align-items: center;
width: 100%;
min-height: 100px;
@media (max-width:750px){
    flex-direction: column;
}
`
export const Image=styled.img`
height: 100%;
width: 100%;
max-width: 120px;
max-height: 29px;
aspect-ratio:120/28;
`