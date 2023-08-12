import { HiLocationMarker, HiPhone } from "react-icons/hi";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import {
  AddressDiv,
  AddressHeading,
  AddressWrapper,
  Button,
  Container,
  FormWrapper,
  H1,
  IFrameWrapper,
  IconDiv,
  Input,
  Name,
  SocialsDiv,
  SocialsHeading,
  SocialsIcons,
  Textarea,
  Wrapper,
} from "../../style/ContactStyles/ContactForm";

const ContactForm = () => {
  return (
   <>
    <Container>
      <Wrapper>
        <AddressWrapper>
          <AddressHeading>We are here to help!</AddressHeading>
          <AddressDiv>
            <IconDiv>
              <HiLocationMarker />
              <p>1234 N Spring St, Los Angeles, CA 90012</p>
            </IconDiv>
            <IconDiv>
              {" "}
              <HiPhone />
              <p>+1 234 567 890</p>{" "}
            </IconDiv>
          </AddressDiv>
          <SocialsDiv>
            <SocialsHeading>Follow us</SocialsHeading>
            <SocialsIcons>
              <FaFacebook />
              <FaTwitter />
              <FaYoutube />
            </SocialsIcons>
          </SocialsDiv>
        </AddressWrapper>
        <FormWrapper>
          <H1>Send us a message</H1>
          <Name>
            <Input placeholder="First Name" />
            <Input placeholder="Last Name" />
          </Name>
          <Input placeholder="Email Address" />
          <Input placeholder="Subject" />
          <Textarea placeholder="Your Message" />
          <Button>Send Message</Button>
        </FormWrapper>
      </Wrapper>
     
    </Container>
     <IFrameWrapper>
     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30449.884486918763!2d78.37104606402444!3d17.448435990723677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9158f201b205%3A0x11bbe7be7792411b!2sMadhapur%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1686401689688!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
   </IFrameWrapper>
   </>
  );
};


export default ContactForm;
