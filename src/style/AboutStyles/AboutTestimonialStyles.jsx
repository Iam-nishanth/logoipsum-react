import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
    height: 100%;
    min-height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f2f1e5;
  font: 400 16px inherit;
  color: #2c2927;
  padding-bottom: 100px;
  @media (min-width: 1000px) {
    padding-top: 150px;
  }
`;
export const Heading = styled.h1`
  font-size: 50px;
  font-family: "DM Serif Display", serif;
`;
export const Wrapper = styled.div`
width: auto;
    max-width: 1200px;
    height: 100%;
    min-height: 250px;
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    align-items: flex-start;
    padding: 50px;
  gap: 50px;
  @media (max-width: 400px) {
    padding: 30px;
  }
`;
export const Testimonials = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 70px;
  justify-content: start;
  padding: 20px 0;
`;