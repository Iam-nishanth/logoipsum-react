import React from 'react'
import {
    AboutContainer,
    Wrapper,
    DescriptionContent,
    Content,
    Title,
    Description,
    ImageContainer,
    Image,

} from "../../style/HomeAboutStyle"
import { AboutData } from './AboutData'
const About = () => {
  return (
    <AboutContainer>
        <Wrapper>
        <DescriptionContent>
            {
                AboutData.map((content)=>{
                    return(
                        <Content key={content.id} header={content.id}>
                            <Title header={content.id}>{content.title}</Title>
                            <Description header={content.id}>{content.description}</Description>
                        </Content>
                    )
                })
            }
        </DescriptionContent>
        <ImageContainer>
            <Image/>
        </ImageContainer>
        </Wrapper>
    </AboutContainer>
  )
}

export default About
