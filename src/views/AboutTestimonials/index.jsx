
import TestimonialCard from "../../components/TestimonialCard";
import { Container, Heading, Testimonials, Wrapper } from "../../style/AboutStyles/AboutTestimonialStyles";

const AboutTestimonials = () => {
  const Items = [
    {
      message:
        "Dapibus id interdum fusce sed odio massa tellus nibh consequat justo mauris, donec nec tempus iaculis pellente.",
      img: "	https://websitedemos.net/digital-agency-02/wp-content/uploads/sites/836/2021/05/customer-3.jpg",
      name: "Pricilla Doe",
    },
    {
      message:
        "Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat. Dapibus id interdum fusce sed odio massa tellus nibh consequat justo mauris, donec nec tempus iaculis pellente.",
      img: "https://websitedemos.net/digital-agency-02/wp-content/uploads/sites/836/2021/06/customer-4.jpg",
      name: "Daniel Johnson",
    },
    {
      message:
        "Dapibus id interdum fusce sed odio massa tellus nibh consequat justo mauris, donec nec tempus iaculis pellente. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat.",
      img: "https://websitedemos.net/digital-agency-02/wp-content/uploads/sites/836/2021/05/customer-1.jpg",
      name: "Mark Hoffman",
    },
    {
      message:
        "Dapibus id interdum fusce sed odio massa tellus nibh consequat justo mauris, donec nec tempus iaculis pellente.",
      img: "	https://websitedemos.net/digital-agency-02/wp-content/uploads/sites/836/2021/05/customer-3.jpg",
      name: "Pricilla Doe",
    },
  ];

  return (
    <Container>
      <Wrapper>
        <Heading>What Our Clients Say</Heading>
        <Testimonials>
          {Items.map((item, index) => (
            <TestimonialCard
              key={index}
              name={item.name}
              img={item.img}
              message={item.message}
            />
          ))}
        </Testimonials>
      </Wrapper>
    </Container>
  );
};



export default AboutTestimonials;
