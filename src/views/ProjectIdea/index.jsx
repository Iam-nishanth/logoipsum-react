import { FaArrowRight } from 'react-icons/fa'
import { 
    Button,
    Container, 
    Content, 
    ContentBox, 
    ContentHeading, 
    ContentPara, 
    Heading, 
    IMG, 
    Image, 
    ImageSection, 
    Para, 
    Paragraph, 
    Wrapper 
} from "../../style/ProjectIdeaStyle"

const ProjectIdea = () => {
    return (
        <Container>
            <Wrapper>
                <ImageSection>
                    <ContentBox>
                        <Content>
                            <ContentHeading>Have a Project on mind?</ContentHeading>
                            <ContentPara>We can help you bring your ideas to life. Let’s talk about what we can build and raise together.</ContentPara>
                        </Content>
                        <Button><span>Connect with us!</span><span><FaArrowRight /></span></Button>
                    </ContentBox>
                    <Image>
                        <IMG src="https://websitedemos.net/digital-agency-02/wp-content/uploads/sites/836/2021/05/cta-img.jpg" />
                    </Image>
                </ImageSection>
                <Paragraph>
                    <Heading>
                        Let us together build a flourishing business
                    </Heading>
                    <Para>
                        When connected with us, you aren’t growing your business alone. We have your back and put in our best to contribute to the growth of your entire team and organization. So, if you are looking for the right agency that’ll help you build a good online presence and bring in more conversions and revenue, we are right here!
                    </Para>
                </Paragraph>
            </Wrapper>
        </Container>
    )
}

export default ProjectIdea