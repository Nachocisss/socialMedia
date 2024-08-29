import React from "react";

import { CarouselContainer, ImageWrapper, Image } from "./Carrousel.styles";

const Carousel = ({ images }) => {
  return (
    <CarouselContainer>
      {images.map((src, index) => (
        <ImageWrapper key={index}>
          <Image src={src} alt={`carousel-img-${index}`} />
        </ImageWrapper>
      ))}
    </CarouselContainer>
  );
};

export default Carousel;
