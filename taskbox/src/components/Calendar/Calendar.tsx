import React from 'react';
import styled from 'styled-components';
import { CalendarProps } from './Calendar.types';
import { CalendarIcon } from '../icons/icons';

const CalendarContainer = styled.div<{
  $backgroundColor?: string;
  disabled?: boolean;
}>`
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

const EventsContainer = styled.div`
  max-height: 256px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #1a1a1a;
  }

  &::-webkit-scrollbar-thumb {
    background: #303030;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #404040;
  }
`;

const EventCard = styled.div`
  background-color: #1a1a1a;
  border-radius: 8px;
  padding: 12px;
  border: 1px solid #303030;
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const EventTitle = styled.div`
  font-weight: 600;
  color: #f0f0f0;
  font-size: 14px;
  margin-bottom: 4px;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const EventTime = styled.div`
  font-size: 14px;
  color: #f0f0f0;
  opacity: 0.6;
  margin-top: 4px;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const EventLocation = styled.div`
  font-size: 12px;
  color: #f0f0f0;
  opacity: 0.4;
  margin-top: 4px;
`;

const EmptyState = styled.div`
  text-align: center;
  color: #f0f0f0;
  opacity: 0.6;
  padding: 32px 0;
  font-size: 14px;
`;

const formatEventDate = (dateStr: string): string => {
  const date = new Date(dateStr);
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  if (date.toDateString() === today.toDateString()) {
    return (
      'Today ' +
      date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    );
  } else if (date.toDateString() === tomorrow.toDateString()) {
    return (
      'Tomorrow ' +
      date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    );
  } else {
    return (
      date.toLocaleDateString() +
      ' ' +
      date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    );
  }
};

export const Calendar: React.FC<CalendarProps> = ({
  events,
  backgroundColor,
  disabled = false,
  className,
}) => {
  return (
    <CalendarContainer
      $backgroundColor={backgroundColor}
      disabled={disabled}
      className={className}
    >
      <Title>
        <CalendarIcon />
        Upcoming Classes
      </Title>
      <EventsContainer>
        {events.length > 0 ? (
          events.map((event, idx) => (
            <EventCard key={idx}>
              <EventTitle>{event.title}</EventTitle>
              <EventTime>{formatEventDate(event.start)}</EventTime>
              {event.location && (
                <EventLocation>{event.location}</EventLocation>
              )}
            </EventCard>
          ))
        ) : (
          <EmptyState>No upcoming events</EmptyState>
        )}
      </EventsContainer>
    </CalendarContainer>
  );
};
