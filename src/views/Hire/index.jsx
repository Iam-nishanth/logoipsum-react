import React from 'react'
import {HireData} from './HireData'
import{
    HireContainer,
    Wrapper,
    Header,
    ContentBox,
    Categories,
    Title,
    Description,
    
} from "../../style/HireStyle"
const Hire = () => {
  return (
    <HireContainer id={'findOut'}>
        <Wrapper>
            <Header>Hire Us For</Header>
            <ContentBox>
            {
                HireData.map((content)=>{
                    return(
                        <Categories key={content.id}>
                            <Title>{content.title}</Title>
                            <Description>{content.Description}</Description>
                         </Categories>
                    )
                })
            }
            </ContentBox>
        </Wrapper>
    </HireContainer>
  )
}

export default Hire
