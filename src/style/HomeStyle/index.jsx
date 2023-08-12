import styled from "styled-components";


export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

`
export const BackgroundImg = styled.div`
    position:fixed;
    top: 0;
    background-image: url(https://websitedemos.net/digital-agency-02/wp-content/uploads/sites/836/2021/05/hero-bg.jpg);
    background-position:top;
    background-repeat: no-repeat;
    background-size: cover;
    height:100vh;
    width: 100%;
    background-color:transparent;
    z-index: -1;
    @media (max-width:1000px) {
      height:100%;
      max-height:700px;
    }
    @media (max-width:750px) {
    min-height: 600px;
    max-height: 600px;
  }
    //z-index: -1;
`