import React from 'react'
import {
    ServiceContainer,
    Wrapper,
    Question,
    Container,
    Content,
    Title,
    Info,
    Button,
} from '../../style/ServiceHelpStyle'
import { HelpData } from './HelpsData'
const ServiceHelp = () => {
  return (
    <ServiceContainer>
       <Wrapper>
       <Question>
            How can we help you?
        </Question>
        <Container>
            {
                HelpData.map((items)=>{
                    return(
                        <Content key={items.id} contentsize={items.id}>
                            <Title>{items.Title}</Title>
                            <Info>{items.Info}</Info>
                            <Button>Get in Touch</Button>
                        </Content>
                    )
                })
            }
        </Container>
       </Wrapper>
    </ServiceContainer>
  )     
}

export default ServiceHelp
