/* eslint-disable react/no-unescaped-entities */
import React from "react";
import {
  SubscribeContainer,
  Wrapper,
  Title,
  Container,
  Input,
  Button,
} from "../../style/SubscribeStyle";
const Subscribe = () => {
  return (
    <SubscribeContainer>
      <Wrapper>
        <Title>Subscribe</Title>
        <Container>
          <Input />
          <Button>I'm Interested</Button>
        </Container>
      </Wrapper>
    </SubscribeContainer>
  );
};

export default Subscribe;
