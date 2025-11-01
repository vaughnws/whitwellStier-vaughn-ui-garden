import React from 'react';
import styled from 'styled-components';
import { ResourceBarProps } from './Resources.types';

const ResourceContainer = styled.div<{ disabled?: boolean }>`
  font-family: 'Open Sans', sans-serif;
  margin-bottom: 16px;
  opacity: ${props => (props.disabled ? 0.6 : 1)};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'default')};
  transition: all 0.3s ease;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    margin-bottom: 14px;
  }
`;

const ResourceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

const ResourceLabel = styled.div<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 600;
  color: ${props => (props.disabled ? '#999999' : '#f0f0f0')};

  svg {
    width: 16px;
    height: 16px;
  }

  @media (max-width: 768px) {
    font-size: 13px;

    svg {
      width: 14px;
      height: 14px;
    }
  }
`;

const ResourceValue = styled.div<{ disabled?: boolean }>`
  font-size: 14px;
  font-weight: 700;
  color: ${props => (props.disabled ? '#999999' : '#f0f0f0')};

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const ProgressBarContainer = styled.div<{ $backgroundColor?: string }>`
  width: 100%;
  height: 8px;
  background-color: ${props => props.$backgroundColor || '#1a1a1a'};
  border-radius: 4px;
  overflow: hidden;
  position: relative;

  @media (max-width: 768px) {
    height: 6px;
  }
`;

const ProgressBar = styled.div<{ $value: number; $color: string }>`
  height: 100%;
  width: ${props => Math.min(props.$value, 100)}%;
  background-color: ${props => props.$color};
  border-radius: 4px;
  transition: all 0.5s ease;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.06),
      transparent
    );
    animation: shimmer 4s infinite;
  }

  @keyframes shimmer {
    0%,
    100% {
      transform: translateX(100%);
    }
    50% {
      transform: translateX(-100%);
    }
  }
`;

const getBarColor = (
  value: number,
  warning: number,
  critical: number,
  disabled?: boolean
): string => {
  if (disabled) return '#666666';
  if (value >= critical) return '#ef4444'; // red
  if (value >= warning) return '#eab308'; // yellow
  return '#22c55e'; // green
};

export const Resources: React.FC<ResourceBarProps> = ({
  label,
  value,
  warning = 80,
  critical = 90,
  icon,
  backgroundColor,
  disabled = false,
  className,
}) => {
  const barColor = getBarColor(value, warning, critical, disabled);
  const displayValue = Math.min(Math.max(value, 0), 100);

  return (
    <ResourceContainer disabled={disabled} className={className}>
      <ResourceHeader>
        <ResourceLabel disabled={disabled}>
          {icon}
          <span>{label}</span>
        </ResourceLabel>
        <ResourceValue disabled={disabled}>
          {displayValue.toFixed(0)}%
        </ResourceValue>
      </ResourceHeader>
      <ProgressBarContainer $backgroundColor={backgroundColor}>
        <ProgressBar $value={displayValue} $color={barColor} />
      </ProgressBarContainer>
    </ResourceContainer>
  );
};
