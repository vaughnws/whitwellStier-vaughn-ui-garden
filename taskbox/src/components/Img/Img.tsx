import React from 'react';
import styled from 'styled-components';
import { ImgProps } from './Img.types';

const ImageContainer = styled.div<{
  $backgroundColor?: string;
  $clickable?: boolean;
  disabled?: boolean;
}>`
  display: inline-block;
  background-color: ${(props) => props.$backgroundColor || 'transparent'};
  cursor: ${(props) =>
    props.disabled ? 'not-allowed' : props.$clickable ? 'pointer' : 'default'};
  opacity: ${(props) => (props.disabled ? 0.4 : 1)};
  transition: all 0.3s ease;
  overflow: hidden;

  &:hover {
    opacity: ${(props) => (props.disabled ? 0.4 : props.$clickable ? 0.8 : 1)};
  }
`;

const StyledImg = styled.img<{
  $width?: string;
  $height?: string;
  $borderRadius?: string;
  $objectFit?: string;
  disabled?: boolean;
}>`
  display: block;
  width: ${(props) => props.$width || 'auto'};
  height: ${(props) => props.$height || 'auto'};
  max-width: 100%;
  border-radius: ${(props) => props.$borderRadius || '0'};
  object-fit: ${(props) => props.$objectFit || 'cover'};
  filter: ${(props) => (props.disabled ? 'grayscale(100%)' : 'none')};
  transition: all 0.3s ease;

  /* Responsive */
  @media (max-width: 768px) {
    max-width: 100%;
    height: auto;
  }
`;

export const Img: React.FC<ImgProps> = ({
  src,
  alt,
  width,
  height,
  backgroundColor,
  disabled = false,
  borderRadius = '0',
  objectFit = 'cover',
  className,
  onClick,
}) => {
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  return (
    <ImageContainer
      disabled={disabled}
      $backgroundColor={backgroundColor}
      $clickable={!!onClick}
      onClick={handleClick}
      className={className}
    >
      <StyledImg
        src={src}
        alt={alt}
        $width={width}
        $height={height}
        $borderRadius={borderRadius}
        $objectFit={objectFit}
        disabled={disabled}
      />
    </ImageContainer>
  );
};
