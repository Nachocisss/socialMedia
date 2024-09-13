import React, { useState } from "react";
import {
  CarouselContainer,
  ImageList,
  Image,
  CarrouselButton,
} from "./Carrousel.styles";
import { Steps } from "../Steps/Steps";

interface CarouselProps {
  images: string[];
}

const ImageCarousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <CarouselContainer>
      <ImageList currentIndex={currentIndex}>
        {images.map((src, index) => (
          <Image key={index} src={src} alt={`Carousel image ${index + 1}`} />
        ))}
      </ImageList>
      {images.length > 1 && (
        <>
          <CarrouselButton isLeft onClick={prevImage}>
            &lt;
          </CarrouselButton>
          <CarrouselButton isLeft={false} onClick={nextImage}>
            &gt;
          </CarrouselButton>
          <Steps stepsNumber={images.length} currentStep={currentIndex} />
        </>
      )}
    </CarouselContainer>
  );
};

export default ImageCarousel;
