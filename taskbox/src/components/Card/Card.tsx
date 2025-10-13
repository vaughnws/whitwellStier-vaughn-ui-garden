import React from 'react';
import styled from 'styled-components';
import { CardProps } from './Card.types';

const StyledCard = styled.div<{
  $backgroundColor?: string;
  $clickable?: boolean;
  $width?: string;
  disabled?: boolean;
}>`
  font-family: 'Open Sans', sans-serif;
  background-color: ${(props) =>
    props.disabled ? '#f5f5f5' : props.$backgroundColor || '#ffffff'};
  border: 1px solid ${(props) => (props.disabled ? '#e0e0e0' : '#ddd')};
  border-radius: 8px;
  overflow: hidden;
  cursor: ${(props) =>
    props.disabled ? 'not-allowed' : props.$clickable ? 'pointer' : 'default'};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  transition: all 0.3s ease;
  width: ${(props) => props.$width || '300px'};
  box-shadow: ${(props) =>
    props.disabled ? 'none' : '0 2px 4px rgba(0, 0, 0, 0.1)'};

  &:hover {
    box-shadow: ${(props) =>
      props.disabled ? 'none' : props.$clickable ? '0 4px 8px rgba(0, 0, 0, 0.15)' : '0 2px 4px rgba(0, 0, 0, 0.1)'};
    transform: ${(props) =>
      props.disabled ? 'none' : props.$clickable ? 'translateY(-2px)' : 'none'};
  }

  /* Responsive */
  @media (max-width: 768px) {
    width: 100%;
    max-width: ${(props) => props.$width || '300px'};
  }
`;

const CardImage = styled.img <({ disabled?: boolean })>`
  width: 100%;
  height: 200px;
  object-fit: cover;
  filter: ${(props) => (props.disabled ? 'grayscale(100%)' : 'none')};
  transition: all 0.3s ease;
`;

const CardBody = styled.div`
  padding: 20px;

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

const CardTitle = styled.h3<{ $color?: string; disabled?: boolean }>`
  font-size: 20px;
  font-weight: 700;
  color: ${(props) => (props.disabled ? '#999999' : props.$color || '#333333')};
  margin: 0 0 12px 0;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const CardContent = styled.p<{ $color?: string; disabled?: boolean }>`
  font-size: 14px;
  line-height: 1.6;
  color: ${(props) => (props.disabled ? '#999999' : props.$color || '#666666')};
  margin: 0;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

export const Card: React.FC<CardProps> = ({
  title,
  content,
  imageSrc,
  imageAlt = 'Card image',
  backgroundColor,
  color,
  disabled = false,
  width,
  className,
  onClick,
  children,
}) => {
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  return (
    <StyledCard
      disabled={disabled}
      $backgroundColor={backgroundColor}
      $clickable={!!onClick}
      $width={width}
      onClick={handleClick}
      className={className}
    >
      {imageSrc && (
        <CardImage src={imageSrc} alt={imageAlt} disabled={disabled} />
      )}
      <CardBody>
        {title && (
          <CardTitle disabled={disabled} $color={color}>
            {title}
          </CardTitle>
        )}
        {content && (
          <CardContent disabled={disabled} $color={color}>
            {content}
          </CardContent>
        )}
        {children}
      </CardBody>
    </StyledCard>
  );
};
