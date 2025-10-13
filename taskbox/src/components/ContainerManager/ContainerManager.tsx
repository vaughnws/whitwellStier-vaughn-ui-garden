import React from 'react';
import styled, { keyframes } from 'styled-components';
import { ContainerManagerProps } from './ContainerManager.types';
import { PlayIcon, StopIcon, RestartIcon, LockIcon, ServerIcon } from '../icons/icons';

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`;

const Container = styled.div<{ $backgroundColor?: string; disabled?: boolean }>`
  font-family: 'Open Sans', sans-serif;
  background-color: ${(props) => props.$backgroundColor || '#272727'};
  border-radius: 12px;
  padding: 24px;
  border: 1px solid #303030;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: #f0f0f0;
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0;
  
  svg {
    width: 24px;
    height: 24px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const UnlockButton = styled.button`
  color: #ff6b35;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

const ContainersList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
`;

const ContainerCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #1a1a1a;
  border-radius: 8px;
  padding: 12px;
  border: 1px solid #303030;
`;

const ContainerInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const StatusIndicator = styled.div<{ $status: 'running' | 'stopped' }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.$status === 'running' ? '#22c55e' : '#ef4444'};
  animation: ${(props) => (props.$status === 'running' ? pulse : 'none')} 2s ease-in-out infinite;
`;

const ContainerName = styled.span`
  font-size: 14px;
  font-family: 'Courier New', monospace;
  color: #f0f0f0;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const ControlButtons = styled.div`
  display: flex;
  gap: 4px;
`;

const ControlButton = styled.button<{ $color?: string }>`
  padding: 6px;
  background: none;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  color: ${(props) => props.$color || '#f0f0f0'};

  &:hover {
    background-color: #303030;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;

const BulkActions = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;

  @media (max-width: 768px) {
    gap: 6px;
  }
`;

const BulkButton = styled.button<{ $bgColor?: string }>`
  background-color: ${(props) => props.$bgColor || '#666666'};
  color: #f0f0f0;
  border: none;
  border-radius: 8px;
  padding: 10px 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 8px 6px;
  }
`;

export const ContainerManager: React.FC<ContainerManagerProps> = ({
  containers,
  isPinUnlocked = false,
  onStart,
  onStop,
  onRestart,
  onStartAll,
  onStopAll,
  onRestartAll,
  onUnlock,
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
      <Header>
        <Title>
          <ServerIcon />
          Containers
        </Title>
        {!isPinUnlocked && onUnlock && (
          <UnlockButton onClick={onUnlock} disabled={disabled}>
            <LockIcon />
          </UnlockButton>
        )}
      </Header>

      <ContainersList>
        {containers.map((container, idx) => (
          <ContainerCard key={idx}>
            <ContainerInfo>
              <StatusIndicator $status={container.status} />
              <ContainerName>{container.name}</ContainerName>
            </ContainerInfo>
            {isPinUnlocked && (
              <ControlButtons>
                <ControlButton
                  onClick={() => onStart?.(container.name)}
                  disabled={disabled}
                  $color="#22c55e"
                  title="Start"
                >
                  <PlayIcon />
                </ControlButton>
                <ControlButton
                  onClick={() => onStop?.(container.name)}
                  disabled={disabled}
                  $color="#ef4444"
                  title="Stop"
                >
                  <StopIcon />
                </ControlButton>
                <ControlButton
                  onClick={() => onRestart?.(container.name)}
                  disabled={disabled}
                  $color="#3b82f6"
                  title="Restart"
                >
                  <RestartIcon />
                </ControlButton>
              </ControlButtons>
            )}
          </ContainerCard>
        ))}
      </ContainersList>

      {isPinUnlocked && (
        <BulkActions>
          <BulkButton
            onClick={onStartAll}
            disabled={disabled}
            $bgColor="#16a34a"
          >
            Start All
          </BulkButton>
          <BulkButton
            onClick={onRestartAll}
            disabled={disabled}
            $bgColor="#2563eb"
          >
            Restart All
          </BulkButton>
          <BulkButton
            onClick={onStopAll}
            disabled={disabled}
            $bgColor="#dc2626"
          >
            Stop All
          </BulkButton>
        </BulkActions>
      )}
    </Container>
  );
};
