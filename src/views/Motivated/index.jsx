import React, { useState } from 'react'
import {
    MotivateContainer,
    Wrapper,
    TextContent,
    Title,
    Container,
    Info,
    Description,
    ImageContainer,
    ImageBox,
    Image,
} from "../../style/MotivatedStyle"
import {MotivatedImage} from "./MotivatedData"
import ImageZoom from '../../components/ImageZoom'
const Motivated = () => {
   const [click,setClick] = useState(false)
   
    const closeClick=()=> setClick(false)
   
    
  return (
    <MotivateContainer>
       <Wrapper>
        <TextContent>
                <Title>
                    Your Trusted Partners
                </Title>
                <Container>
                    <Info>
                        Highly Motivated Team with Innovative Ideas
                    </Info>
                    <Description>
                    We love what we do and therefore come up with the best possible solutions to help you set and grow online quickly. We are your trusted partners you can count on.
                    </Description>
                </Container>
            </TextContent>
            <ImageContainer>
               {MotivatedImage.map((content)=>{
            
                    return(
                        <ImageBox key={content.id} content={content}>
                        <Image src={content.image}  onClick={()=>setClick(true)} />
                        
                        </ImageBox>
                    )
               })
               }
               {click && <ImageZoom   closeClick={closeClick}/>}
            </ImageContainer>
       </Wrapper>
    </MotivateContainer>
  )
}

export default Motivated
