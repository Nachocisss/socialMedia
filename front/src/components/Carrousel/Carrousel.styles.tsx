import styled from "styled-components";

export const CarouselContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
`;

export const ImageList = styled.div<{ currentIndex: number }>`
  display: flex;
  transition: transform 0.3s ease;
  transform: ${({ currentIndex }) => `translateX(-${currentIndex * 100}%)`};
`;

export const Image = styled.img`
  width: 100%;
  max-height: 400px;
  border-radius: 8px;
`;

export const CarrouselButton = styled.button<{ isLeft: boolean }>`
  position: absolute;
  top: 50%;
  ${({ isLeft }) => (isLeft ? "left: 12px;" : "right: 12px;")}
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.5);
  color: black;
  font-weight: 800;
  height: 50px;
  width: 50px;
  border-radius: 9999px;
  padding: 12px;
  cursor: pointer;
  &:hover {
    background: rgba(255, 255, 255);
    font-weight: 1000;
  }
`;
