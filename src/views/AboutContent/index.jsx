import { Container, Content, DIV, HR, Heading, Image, ImageDiv, ListItem, Para, Span, Strong, Wrapper1 } from "../../style/AboutStyles/ContentStyles"


const AboutContent = () => {
    return (
        <Container>
            <Wrapper1>
                <ImageDiv>
                    <Image src="https://websitedemos.net/digital-agency-02/wp-content/uploads/sites/836/2021/05/about.jpg" />
                </ImageDiv>

                <Content>
                    <Strong>We are a team of 40 web experts with over 12 years of experience in website building and marketing to help businesses grow online.</Strong>
                    <Para>If you are looking for the best website design, development, and marketing services to grow your business online, we are here to help. We are a team of certified experts with tremendous experience in web design, development, and marketing who’ll walk with you all through.</Para>
                    <DIV>
                        <Heading>Our Core Values</Heading>
                        <ListItem>
                            <HR /><Span>Commited to delivering the best</Span>
                        </ListItem>
                        <ListItem>
                            <HR /><Span>Honest and transparent services</Span>
                        </ListItem>
                        <ListItem>
                            <HR /><Span>We take care of your business like ours</Span>
                        </ListItem>
                        <ListItem>
                            <HR /><Span>Keep learning and adapting to new technologies</Span>
                        </ListItem>

                    </DIV>
                </Content>
            </Wrapper1>
        </Container>
    )
}




export default AboutContent