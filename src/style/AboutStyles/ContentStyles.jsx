import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 650px;
  background-color: #fbe8a6;
  color: #534a45;
  align-items: end;
  @media (max-width: 1000px) {
    min-height: 550px;
  }
  @media (max-width: 700px) {
  }
`;
export const Wrapper1 = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  max-width: 1200px;
  justify-content: center;
  gap: 50px;
  padding: 20px;
  @media (max-width: 1000px) {
    gap: 40px;
  }
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    padding: 0;
  }
`;
export const ImageDiv = styled.div`
  width: 100%;
  max-width: 500px;
  min-height: 500px;
  margin-bottom: -100px;
  @media (max-width: 1000px) {
    margin-bottom: 0;
    max-width: 300px;
    display: flex;
    align-items: center;
  }
  @media (max-width: 700px) {
    max-width: 100%;
    padding-top: 30px;
  }
`;
export const Image = styled.img`
  object-fit: fill;
  width: 100%;
  position: relative;
  z-index: 5;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 600px;
  padding: 0 50px;
  gap: 30px;
  @media (max-width: 1000px) {
    padding: 0;
  }
  @media (max-width: 700px) {
    width: auto;
    padding: 25px;
  }
`;
export const Strong = styled.strong`
  font-size: 18px;
  @media (max-width: 1000px) {
    font-size: 14px;
  }
`;
export const Para = styled.p`
  font-size: 16px;
  font-weight: 400;
  @media (max-width: 1000px) {
    font-size: 14px;
  }
`;
export const DIV = styled.div``;
export const Heading = styled.h3`
  font-family: "DM Serif Display", serif;
  font-size: 30px;
  color: black;
  @media (max-width: 1000px) {
    font-size: 23px;
  }
`;
export const HR = styled.div`
  width: 100%;
  max-width: 10px;
  border: none;
  border-top: 3px solid black;
  @media (max-width: 1000px) {
    border-top: 2px solid black;
  }
`;
export const ListItem = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
export const Span = styled.span`
  font-size: 18px;
  font-weight: 400;
  @media (max-width: 1000px) {
    font-size: 14px;
  }
`;
