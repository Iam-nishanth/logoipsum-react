import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  background-color: #2c2927;
  color: #2c2927;
`;
export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  min-height: 650px;
  flex-direction: column;
`;
export const ImageSection = styled.div`
  display: flex;
  background-color: #fbe8a6;
  margin-top: -120px;
  min-height: 550px;
  @media (max-width: 700px) {
    flex-direction: column;
    min-height: 500px;
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;
export const ContentHeading = styled.h1`
  font-family: "MD Serif Display", serif;
  font-size: 40px;
`;
export const ContentPara = styled.p`
  font-size: 16px;
`;
export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 0.6;
  padding: 50px;
  @media (max-width: 750px) {
    gap: 30px;
  }
`;
export const Image = styled.div`
  flex: 1.4;
`;
export const IMG = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
export const Button = styled.button`
  width: 200px;
  height: 45px;
  background: transparent;
  border: 1.5px solid #2c2927;
  font-size: 14px;
  font-family: inherit;
  font-weight: 600;
  display: flex;
  justify-content: space-around;
  align-items: center;
  span {
    display: flex;
    align-items: center;
  }
`;
export const Paragraph = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 300px;
  gap: 40px;
  @media (max-width: 1250px) {
    padding: 20px;
  }
  @media (max-width: 700px) {
    flex-direction: column;
    padding: 30px 50px;
    gap: 20px;
  }
  @media (max-width: 750px) {
    padding: 25px;
  }
`;
export const Heading = styled.h1`
  font-size: 50px;
  font-family: "MD Serif Display", serif;
  color: white;
  flex: 1;
  @media (max-width: 800px) {
    font-size: 38px;
  }
`;
export const Para = styled.p`
  font-size: 16px;
  color: white;
  text-align: justify;
  flex: 1;
`;
