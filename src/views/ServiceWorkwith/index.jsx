import React from 'react'
import { WorkwithData } from '../Workwith/WorkwithData'
import {
    WorkContainer,
    Wrapper,
    Client,
    Title,
    ImageContainer,
    Image,
} from "../../style/ServiceWorkwithStyle"
const ServiceWorkwith = () => {
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
        </Wrapper>
    </WorkContainer>
  )
}

export default ServiceWorkwith
