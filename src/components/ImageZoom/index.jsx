/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import {
  Container,
  Header,
  Wrapper,
  Quantity,
  OpenFullScreen,
  CloseFullScreen,
  ZoomIn,
  ZoomOut,
  Share,
  Close,
  ImageWrapper,
  ImageSlider,
  LeftArrow,
  Images,
  RightArrow,
  Title,
  ShareBox,
  Link,
} from "../../style/ImageZoomStyle";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import {
  MotivatedImage,
  SocialLinks,
} from "../../views/Motivated/MotivatedData";
const ImageZoom = ({ closeClick, content }) => {
  const [currImg, setCurrImg] = useState(0);
  const [click, setClick] = useState(false);
  const [share, setShare] = useState(false);
  const [screen, setScreen] = useState(false);
  const [zoom, setZoom] = useState(false);
  const handleShare = () => {
    setShare(!share);
    return share;
  };
  const handleClick = () => {
    setClick(!click);
    return click;
  };
  const handleZoom = () => {
    setZoom(!zoom);
    return zoom;
  };

  const ShareLinks = () => {
    return (
      <ShareBox>
        {SocialLinks.map((items) => {
          return (
            <Link key={items.id} onClick={() => setShare(false)}>
              <items.Icon />
              {items.name}
            </Link>
          );
        })}
      </ShareBox>
    );
  };

  return (
    <Container name={screen}>
      <Header>
        <Quantity>
          {MotivatedImage[currImg].id}/{MotivatedImage.length}
        </Quantity>
        <Wrapper>
          {click ? (
            <OpenFullScreen onClick={handleClick} />
          ) : (
            <CloseFullScreen onClick={handleClick} />
          )}
          {zoom ? (
            <ZoomIn onClick={handleZoom} />
          ) : (
            <ZoomOut onClick={handleZoom} />
          )}
          <Share onClick={handleShare} />
          {share && <ShareLinks />}
          <Close onClick={closeClick} />
        </Wrapper>
      </Header>
      <ImageWrapper>
        <ImageSlider>
          <LeftArrow
            onClick={() => {
              currImg > 0 && setCurrImg(currImg - 1);
            }}
          />
          <Images src={MotivatedImage[currImg].image}></Images>
          <RightArrow
            onClick={() => {
              currImg < MotivatedImage.length - 1 && setCurrImg(currImg + 1);
            }}
          />
        </ImageSlider>
        <Title>{MotivatedImage[currImg].name}</Title>
      </ImageWrapper>
    </Container>
  );
};

export default ImageZoom;
