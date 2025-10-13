import React from 'react';
import styled, { keyframes } from 'styled-components';
import { NewsTickerProps } from './NewsTicker.types';

const scroll = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
`;

const TickerContainer = styled.div<{ $backgroundColor?: string; disabled?: boolean }>`
  background-color: ${(props) => props.$backgroundColor || '#ff6b35'};
  color: #f0f0f0;
  padding: 8px 0;
  overflow: hidden;
  position: relative;
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
`;

const TickerContent = styled.div<{ $speed: number; disabled?: boolean }>`
  display: flex;
  animation: ${scroll} ${(props) => props.$speed}s linear infinite;
  width: fit-content;

  &:hover {
    animation-play-state: ${(props) => (props.disabled ? 'running' : 'paused')};
  }
`;

const NewsLink = styled.a`
  font-family: 'Open Sans', sans-serif;
  display: inline-block;
  margin: 0 32px;
  white-space: nowrap;
  color: #f0f0f0;
  text-decoration: none;
  font-size: 14px;
  transition: opacity 0.3s;

  &:hover {
    text-decoration: underline;
    opacity: 0.9;
  }

  @media (max-width: 768px) {
    font-size: 13px;
    margin: 0 24px;
  }
`;

const NewsLabel = styled.strong`
  font-weight: 700;
  margin-right: 8px;
`;

export const NewsTicker: React.FC<NewsTickerProps> = ({
  news,
  backgroundColor,
  speed = 120,
  disabled = false,
  className,
}) => {
  if (news.length === 0) {
    return (
      <TickerContainer $backgroundColor={backgroundColor} disabled={disabled} className={className}>
        <TickerContent $speed={speed} disabled={disabled}>
          <NewsLink>Loading tech news...</NewsLink>
        </TickerContent>
      </TickerContainer>
    );
  }

  return (
    <TickerContainer $backgroundColor={backgroundColor} disabled={disabled} className={className}>
      <TickerContent $speed={speed} disabled={disabled}>
        {[...news, ...news].map((item, idx) => (
          <NewsLink
            key={idx}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => disabled && e.preventDefault()}
          >
            <NewsLabel>TECH NEWS:</NewsLabel>
            {item.title}
          </NewsLink>
        ))}
      </TickerContent>
    </TickerContainer>
  );
};
