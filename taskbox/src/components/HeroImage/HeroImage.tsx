import React from 'react';
import styled from 'styled-components';
import { HeroImageProps } from './HeroImage.types';

const HeroContainer = styled.div<{
  $height?: string;
  $clickable?: boolean;
  disabled?: boolean;
}>`
  position: relative;
  width: 100%;
  height: ${props => props.$height || '400px'};
  overflow: hidden;
  cursor: ${props =>
    props.disabled ? 'not-allowed' : props.$clickable ? 'pointer' : 'default'};
  opacity: ${props => (props.disabled ? 0.5 : 1)};
  transition: all 0.3s ease;

  &:hover {
    opacity: ${props => (props.disabled ? 0.5 : props.$clickable ? 0.9 : 1)};
  }

  @media (max-width: 768px) {
    height: ${props =>
      props.$height ? `calc(${props.$height} * 0.7)` : '280px'};
  }
`;

const BackgroundImage = styled.img<{ disabled?: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: ${props => (props.disabled ? 'grayscale(100%)' : 'none')};
  transition: all 0.3s ease;
`;

const Overlay = styled.div<{
  $backgroundColor?: string;
  $overlayOpacity?: number;
}>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${props => props.$backgroundColor || 'rgba(0, 0, 0, 0.4)'};
  opacity: ${props => props.$overlayOpacity ?? 1};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h1<{ $color?: string; disabled?: boolean }>`
  font-family: 'Open Sans', sans-serif;
  font-size: 48px;
  font-weight: 700;
  color: ${props => (props.disabled ? '#cccccc' : props.$color || '#ffffff')};
  margin: 0 0 16px 0;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const Subtitle = styled.p<{ $color?: string; disabled?: boolean }>`
  font-family: 'Open Sans', sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: ${props => (props.disabled ? '#cccccc' : props.$color || '#ffffff')};
  margin: 0;
  text-align: center;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const HeroImage: React.FC<HeroImageProps> = ({
  src,
  alt,
  title,
  subtitle,
  height = '400px',
  backgroundColor,
  color,
  disabled = false,
  overlayOpacity,
  className,
  onClick,
}) => {
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  return (
    <HeroContainer
      $height={height}
      disabled={disabled}
      $clickable={!!onClick}
      onClick={handleClick}
      className={className}
    >
      <BackgroundImage src={src} alt={alt} disabled={disabled} />
      {(title || subtitle) && (
        <Overlay
          $backgroundColor={backgroundColor}
          $overlayOpacity={overlayOpacity}
        >
          {title && (
            <Title $color={color} disabled={disabled}>
              {title}
            </Title>
          )}
          {subtitle && (
            <Subtitle $color={color} disabled={disabled}>
              {subtitle}
            </Subtitle>
          )}
        </Overlay>
      )}
    </HeroContainer>
  );
};
