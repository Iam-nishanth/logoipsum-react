import styled from "styled-components";
import{FaAngleLeft,FaAngleRight,FaShare,FaTimes,FaFacebookSquare,FaTwitter,FaPinterest,FaDownload, FaFacebook}from "react-icons/fa"
import {FiZoomIn,FiZoomOut,} from "react-icons/fi"
import {BiFullscreen,BiExitFullscreen} from "react-icons/bi"

export const Container=styled.div`
display :flex ;
flex-direction: column;
justify-content: center;
align-items: center;
height:100vh;
width: 100%;
position:fixed;
top: 0;
z-index: 55;
background:rgba(0, 0, 0, 0.8) ;
backdrop-filter: blur(5px);
`
export const Header=styled.div`
display :flex ;
justify-content:space-between;
align-items: center;
height: 100%;
width: 100%;
max-height: 70px;
position: relative;
top: 0;
padding: 10px;
`
export const Quantity=styled.h1`
width: 100%;
max-width: 50px;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
color: white;
padding: 20px;
    
`
export const Wrapper=styled.div`

width: 100%;
min-width: 150px;
max-width: 150px;
height: 100%;
display: flex;
gap: 10px;
padding: 0 20px;
justify-content: center;
align-items: center; 
`
export const OpenFullScreen=styled(BiFullscreen)`
width: 100%;
max-width: 30px;
height: 100%;
max-height: 30px;
display: flex;
justify-content: center;
cursor: pointer;
align-items: center; 
color : rgb(255, 255, 255);
`
export const ZoomIn=styled(FiZoomIn)`
   width: 100%;
max-width: 30px;
height: 100%;
max-height: 30px;
display: flex;
justify-content: center;
align-items: center; 
color : rgb(255, 255, 255);
cursor: pointer; 
`
export const ZoomOut=styled(FiZoomOut)`
   width: 100%;
max-width: 30px;
height: 100%;
max-height: 30px;
display:flex;
justify-content: center;
align-items: center; 
color : rgb(255, 255, 255);
cursor: pointer;
`

export  const Share=styled(FaShare)`
   width: 100%;
max-width: 30px;
height: 100%;
max-height: 30px;
display: flex;
justify-content: center;
align-items: center; 
color : rgb(255, 255, 255);  
cursor: pointer; 
`
export const Close=styled(FaTimes)`
   width: 100%;
max-width: 30px;
height: 100%;
max-height: 30px;
display: flex;
justify-content: center;
align-items: center; 
color : rgb(255, 255, 255); 
cursor: pointer;
`
export const  ImageWrapper=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100%;
width: 100%;

`
export const ImageSlider=styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    width: 100%;
    height:100%;
    padding: 10px;
    @media (max-width:750px){
   justify-content: center;
}

`
export const LeftArrow=styled(FaAngleLeft)`
width: 100%;
max-height: 30px;
height: 100%;
max-width: 200px;
display: flex;
justify-content: center;
align-items: center; 
color : rgb(255, 255, 255); 
cursor: pointer;
@media (max-width:750px){
   position: absolute;
   bottom: 40px;
   left: 0;
}

`
export const Images=styled.img`
cursor: grab;
width: 100%;
max-width: 650px;
display: flex;
justify-content: center;
align-items: center;


`
export const RightArrow=styled(FaAngleRight)`
width: 100%;
max-width: 200px;
height: 100%;
max-height: 30px;
display: flex;
justify-content: center;
align-items: center; 
color : rgb(255, 255, 255); 
cursor: pointer;
@media (max-width:750px){
   position: absolute;
   bottom: 40px;
   right: 0;
}
`
export const Title=styled.div`
width: 100%;
height: 100%;
max-height: 50px;
display: flex;
justify-content: center;
align-items: center; 
color : rgb(255, 255, 255);
text-align: center;
`
export const ShareBox=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    width: 100%;
    height: 100%;
    max-width: 180px;
    min-height: 120px;
    background: white;
    position:absolute;
    border-radius: 6px;
    top: 65px;
    right: 40px;
    padding: 10px 5px;
   &::before{
   content: "";
    width: 100%;
    height: 100%;
    max-width: 15px;
    max-height: 20px;
    background: #ffffff;
    position:absolute;
    top:-8px;
    right:30px;
    transform: rotate(45deg);
   }
`
export const Link=styled.div`
   display: flex;
    flex-direction: row;
    justify-content:flex-start;
    align-items: center;
    width: 100%;
    height: 100%;
    max-width: 160px;
    min-height: 18px;
    font-size: 14px;
    gap: 8px;
    color:#534a45;
    &:hover{
      color:#262321;
    }
    
    
`

export const Facebook=styled(FaFacebook)`
   width: 100%;
max-width: 20px;
height: 100%;
max-height: 18px;
display: flex;
justify-content: center;
align-items: center; 
color : rgb(28, 59, 121); 
cursor: pointer;

`
export const Twitter=styled(FaTwitter)`
   width: 100%;
max-width: 20px;
height: 100%;
max-height: 18px;
display: flex;
justify-content: center;
align-items: center; 
color : rgb(25, 115, 172); 
cursor: pointer;
`
export const Pinterest=styled(FaPinterest)`
width: 100%;
max-width: 20px;
height: 100%;
max-height: 18px;
display: flex;
justify-content: center;
align-items: center; 
color : rgb(194, 1, 1); 
cursor: pointer;
`
export const Download=styled(FaDownload)`
width: 100%;
max-width: 20px;
height: 100%;
max-height: 18px;
display: flex;
justify-content: center;
align-items: center; 
color : rgb(114, 111, 111); 
cursor: pointer;
`

export const CloseFullScreen = styled(BiExitFullscreen)`
width: 100%;
max-width: 30px;
height: 100%;
max-height: 30px;
display: flex;
justify-content: center;
align-items: center; 
color : rgb(255, 255, 255); 
cursor: pointer;
`