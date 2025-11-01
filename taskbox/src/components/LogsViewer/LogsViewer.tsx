import React from 'react';
import styled from 'styled-components';
import { LogsViewerProps } from './LogsViewer.types';
import { TerminalIcon } from '../icons/icons';

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

const LogsContainer = styled.div<{ $maxHeight?: string }>`
  background-color: #000000;
  border-radius: 8px;
  padding: 16px;
  font-family: 'Courier New', monospace;
  font-size: 12px;
  max-height: ${props => props.$maxHeight || '192px'};
  overflow-y: auto;
  color: #f0f0f0;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #000000;
  }

  &::-webkit-scrollbar-thumb {
    background: #303030;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #404040;
  }

  @media (max-width: 768px) {
    font-size: 11px;
    padding: 14px;
  }
`;

const LogEntry = styled.div`
  margin-bottom: 4px;
  line-height: 1.5;

  &:last-child {
    margin-bottom: 0;
  }
`;

const ContainerName = styled.span`
  color: #ff6b35;
  font-weight: 600;
`;

const LogMessage = styled.span`
  color: #f0f0f0;
  opacity: 0.8;
  margin-left: 8px;
`;

export const LogsViewer: React.FC<LogsViewerProps> = ({
  logs,
  backgroundColor,
  maxHeight,
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
        <TerminalIcon />
        Recent Activity
      </Title>
      <LogsContainer $maxHeight={maxHeight}>
        {logs.map((log, idx) => (
          <LogEntry key={idx}>
            <ContainerName>[{log.container}]</ContainerName>
            <LogMessage>{log.message}</LogMessage>
          </LogEntry>
        ))}
      </LogsContainer>
    </Container>
  );
};
