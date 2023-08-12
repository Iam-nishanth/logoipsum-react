import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100%;
  min-height: 850px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-color: #fbe8a6;
  color: #534a45;
  @media (max-width: 730px) {
  }
`;
export const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 100%;
  display: flex;
  min-height: 300px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 50px 50px 0 50px;
  @media (max-width: 730px) {
    flex-direction: column;
    padding: 25px 25px 0 25px;
  }
`;
export const AddressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 50px;
  min-height: 600px;
  justify-content: start;
  padding: 30px 0 0 0;
  @media (max-width: 730px) {
    min-height: 400px;
  }
`;
export const AddressHeading = styled.h1`
  font-size: 50px;
  font-family: "MD Serfi Display", serif;
  color: #302d2a;
  @media (max-width: 800px) {
    font-size: 35px;
  }
`;
export const SocialsHeading = styled.h1`
  font-size: 40px;
  font-family: "MD Serfi Display", serif;
  color: #302d2a;
  @media (max-width: 800px) {
    font-size: 25px;
  }
`;
export const AddressDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const SocialsDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const SocialsIcons = styled.div`
  display: flex;
  gap: 30px;
  svg {
    font-size: 25px;
  }
`;
export const IconDiv = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  font-size: 18px;
  font-weight: 800;
  color: #534a45;
  svg {
    font-size: 20px;
  }
`;
export const FormWrapper = styled.div`
  display: flex;
  background-color: #fff;
  justify-content: start;
  flex-direction: column;
  width: 100%;
  /* flex: 1; */
  min-height: 600px;
  padding: 50px;
  gap: 30px;
  @media (max-width: 750px) {
    padding: 25px 25px 0 25px;
  }
`;
export const IFrameWrapper = styled.div`
  width: 100%;
  height: 400px;
  background: #534a45;
  background-blend-mode: overlay;
  iframe {
    width: 100%;
    height: 100%;
  }
`;
export const H1 = styled.h1``;
export const Input = styled.input`
  width: 100%;
  min-height: 50px;
  text-indent: 20px;
  border-radius: 5px;
  border: 1px solid #534a45;
  font-size: 16px;
  font-family: inherit;
`;
export const Textarea = styled.textarea`
  width: 100%;
  min-height: 100px;
  text-indent: 20px;
  line-height: 30px;
  border-radius: 5px;
  border: 1px solid #534a45;
  font-size: 16px;
  font-family: inherit;
`;
export const Button = styled.button`
  width: 100%;
  max-width: 180px;
  min-height: 40px;
  display: flex;
  align-self: flex-end;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-family: inherit;
  font-weight: 600;
  border: 1px solid black;
`;
export const Name = styled.div`
  display: flex;
  gap: 30px;
  @media (max-width: 450px) {
    flex-direction: column;
  }
`;
