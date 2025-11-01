import React from 'react';
import styled from 'styled-components';
import { ServiceCardProps } from './ServiceCard.types';
import { ServerIcon } from '../icons/icons';

const Container = styled.div<{ $backgroundColor?: string; disabled?: boolean }>`
  font-family: 'Open Sans', sans-serif;
  background-color: ${props => props.$backgroundColor || '#272727'};
  border-radius: 12px;
  padding: 24px;
  border: 1px solid #303030;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  opacity: ${props => (props.disabled ? 0.6 : 1)};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'default')};

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: #f0f0f0;
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0 0 16px 0;

  svg {
    width: 24px;
    height: 24px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`;

const ServiceLink = styled.a<{ disabled?: boolean }>`
  background-color: #1a1a1a;
  border-radius: 8px;
  padding: 16px;
  border: 1px solid #303030;
  transition: all 0.3s ease;
  text-decoration: none;
  display: block;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    background-color: ${props => (props.disabled ? '#1a1a1a' : '#303030')};
    transform: ${props => (props.disabled ? 'none' : 'scale(1.05)')};
    box-shadow: ${props =>
      props.disabled ? 'none' : '0 8px 12px rgba(0, 0, 0, 0.4)'};
    border-color: ${props => (props.disabled ? '#303030' : '#ff6b35')};
  }

  @media (max-width: 768px) {
    padding: 14px;
  }
`;

const ServiceName = styled.h3`
  font-weight: 600;
  color: #f0f0f0;
  font-size: 16px;
  margin: 0 0 4px 0;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const ServiceSubtitle = styled.p`
  font-size: 14px;
  color: #f0f0f0;
  opacity: 0.6;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

export const ServiceCard: React.FC<ServiceCardProps> = ({
  services,
  backgroundColor,
  disabled = false,
  className,
  onServiceClick,
}) => {
  const handleClick = (e: React.MouseEvent, url: string) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    if (onServiceClick) {
      e.preventDefault();
      onServiceClick(url);
    }
  };

  return (
    <Container
      $backgroundColor={backgroundColor}
      disabled={disabled}
      className={className}
    >
      <Title>
        <ServerIcon />
        Services
      </Title>
      <ServicesGrid>
        {services.map((service, idx) => (
          <ServiceLink
            key={idx}
            href={service.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={e => handleClick(e, service.url)}
            disabled={disabled}
          >
            <ServiceName>{service.name}</ServiceName>
            <ServiceSubtitle>{service.subtitle}</ServiceSubtitle>
          </ServiceLink>
        ))}
      </ServicesGrid>
    </Container>
  );
};
