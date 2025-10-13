import React from 'react';
import styled, { keyframes } from 'styled-components';
import { StatusProps, HealthStatus } from './Status.types';

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`;

const StatusContainer = styled.div<{ $backgroundColor?: string; disabled?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-basis: 80%;
  font-family: 'Open Sans', sans-serif;
  text-align: center;
  padding: 24px;
  border-radius: 8px;
  background-color: ${(props) => props.$backgroundColor || '#1a1a1a'};
  border: 2px solid;
  transition: all 0.3s ease;
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const PulseIndicator = styled.div<{ $status: HealthStatus; $showPulse?: boolean }>`
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  margin-bottom: 12px;
  background-color: ${(props) => {
    switch (props.$status) {
      case 'critical':
        return '#ef4444';
      case 'warning':
        return '#eab308';
      case 'healthy':
      default:
        return '#22c55e';
    }
  }};
  animation: ${(props) => (props.$showPulse ? pulse : 'none')} 2s ease-in-out infinite;

  @media (max-width: 768px) {
    width: 14px;
    height: 14px;
  }
`;

const StatusText = styled.div<{ $status: HealthStatus; disabled?: boolean }>`
  font-size: 32px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 8px;
  color: ${(props) => {
    if (props.disabled) return '#999999';
    switch (props.$status) {
      case 'critical':
        return '#ef4444';
      case 'warning':
        return '#eab308';
      case 'healthy':
      default:
        return '#22c55e';
    }
  }};

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const Description = styled.div<{ disabled?: boolean }>`
  font-size: 14px;
  color: ${(props) => (props.disabled ? '#999999' : '#f0f0f0')};
  opacity: ${(props) => (props.disabled ? 1 : 0.6)};
  margin-top: 4px;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const getBorderColor = (status: HealthStatus, disabled?: boolean): string => {
  if (disabled) return '#666666';
  switch (status) {
    case 'critical':
      return '#ef4444';
    case 'warning':
      return '#eab308';
    case 'healthy':
    default:
      return '#22c55e';
  }
};

export const Status: React.FC<StatusProps> = ({
  status,
  statusText,
  description,
  showPulse = true,
  backgroundColor,
  disabled = false,
  className,
}) => {
  const displayText = statusText || status;
  const borderColor = getBorderColor(status, disabled);

  return (
    <StatusContainer
      $backgroundColor={backgroundColor}
      disabled={disabled}
      className={className}
      style={{ borderColor }}
    >
      <PulseIndicator $status={status} $showPulse={showPulse && !disabled} />
      <StatusText $status={status} disabled={disabled}>
        {displayText}
      </StatusText>
      {description && <Description disabled={disabled}>{description}</Description>}
    </StatusContainer>
  );
};
