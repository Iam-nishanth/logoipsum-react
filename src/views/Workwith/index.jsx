import React from 'react'
import {
    WorkContainer,
    Wrapper,
    Client,
    Title,
    ImageContainer,
    Image,
    Question,
    Description,
    Info,
} from '../../style/WorkwithStyle' 
import { WorkwithData } from './WorkwithData'
const Workwith = () => {
  return (
    <WorkContainer>
        <Wrapper>
            <Client>
                <Title>
                Clients We Worked With
                </Title>
                <ImageContainer>
                    {WorkwithData.map((items)=>{
                        return(
                            <Image key={items.id} src={items.image}/>
                        )
                    })
                    }
                </ImageContainer>
            </Client>
            <Question>
                <Title>
                Why Choose Us?
                </Title>
                <Description>
                    We are the right term for your business. We have the expertise and knowledge to offer impartial advice and services at an honest price.
                </Description>
                <Info>
                With us you’ll feel heard. We listen to our client requirements and then select the right solution that fits. We care for your business as our own. We take a sincere interest in it and genuinely want to help your company reach its potential.
                </Info>
            </Question>
        </Wrapper>
    </WorkContainer>
  )
}

export default Workwith
