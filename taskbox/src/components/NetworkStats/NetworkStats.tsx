import React from 'react';
import styled from 'styled-components';
import { NetworkStatsProps } from './NetworkStats.types';
import { WifiIcon } from '../icons/icons';

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

const InterfacesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const InterfaceCard = styled.div`
  background-color: #1a1a1a;
  border-radius: 8px;
  padding: 12px;
  border: 1px solid #303030;
`;

const InterfaceName = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #ff6b35;
  margin-bottom: 4px;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const InterfaceAddress = styled.div`
  font-size: 12px;
  color: #f0f0f0;
  opacity: 0.6;
  font-family: 'Courier New', monospace;
`;

export const NetworkStats: React.FC<NetworkStatsProps> = ({
  interfaces,
  backgroundColor,
  disabled = false,
  className,
}) => {
  return (
    <Container
      $backgroundColor={backgroundColor}
      disabled={disabled}
      className={className}
    >
      <Title>
        <WifiIcon />
        Network
      </Title>
      <InterfacesList>
        {interfaces.map((net, idx) => (
          <InterfaceCard key={idx}>
            <InterfaceName>{net.interface}</InterfaceName>
            <InterfaceAddress>{net.address}</InterfaceAddress>
          </InterfaceCard>
        ))}
      </InterfacesList>
    </Container>
  );
};
