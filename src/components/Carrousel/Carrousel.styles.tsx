import styled from "styled-components";

export const CarouselContainer = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory; /* Habilitar el snap horizontal */
  -webkit-overflow-scrolling: touch; /* Suaviza el desplazamiento en dispositivos móviles */
`;

export const ImageWrapper = styled.div`
  flex: 0 0 auto;
  scroll-snap-align: center; /* Elimina la imagen en el centro del contenedor */
  margin-right: 16px; /* Espacio entre imágenes */
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px; /* Redondear esquinas */
  object-fit: cover;
`;
