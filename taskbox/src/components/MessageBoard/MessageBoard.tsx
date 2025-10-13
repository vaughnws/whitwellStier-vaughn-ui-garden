import React from 'react';
import styled from 'styled-components';
import { MessageBoardProps, Message } from './MessageBoard.types';
import { SendIcon, TrashIcon, MessageSquareIcon } from '../icons/icons';

const BoardContainer = styled.div<{ $backgroundColor?: string; disabled?: boolean }>`
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

const RefreshButton = styled.button`
  font-size: 14px;
  color: #ff6b35;
  background: none;
  border: none;
  cursor: pointer;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const MessagesContainer = styled.div`
  max-height: 256px;
  overflow-y: auto;
  background-color: #1a1a1a;
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 16px;

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

const MessageBubble = styled.div<{ $isOwn?: boolean }>`
  display: flex;
  justify-content: ${(props) => (props.$isOwn ? 'flex-end' : 'flex-start')};
  margin-bottom: 12px;
  position: relative;

  &:hover .delete-button {
    opacity: 1;
  }
`;

const MessageContent = styled.div`
  max-width: 85%;
`;

const MessageMeta = styled.div<{ $isOwn?: boolean }>`
  font-size: 12px;
  color: #f0f0f0;
  opacity: 0.6;
  margin-bottom: 4px;
  text-align: ${(props) => (props.$isOwn ? 'right' : 'left')};
`;

const MessageText = styled.div<{ $isOwn?: boolean }>`
  position: relative;
  padding: 12px 16px;
  border-radius: 8px;
  background-color: ${(props) => (props.$isOwn ? '#ff6b35' : '#272727')};
  color: #f0f0f0;
  border: 1px solid #303030;
  border-bottom-right-radius: ${(props) => (props.$isOwn ? '0' : '8px')};
  border-bottom-left-radius: ${(props) => (props.$isOwn ? '8px' : '0')};
  word-wrap: break-word;
  font-size: 14px;

  @media (max-width: 768px) {
    font-size: 13px;
    padding: 10px 14px;
  }
`;

const DeleteButton = styled.button`
  position: absolute;
  top: -8px;
  right: -8px;
  opacity: 0;
  transition: opacity 0.3s;
  background-color: #ef4444;
  color: white;
  border: none;
  border-radius: 50%;
  padding: 4px;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

  &:hover {
    background-color: #dc2626;
  }

  svg {
    width: 12px;
    height: 12px;
  }
`;

const InputContainer = styled.div`
  display: flex;
  gap: 8px;
`;

const Input = styled.input`
  flex: 1;
  background-color: #1a1a1a;
  border: 1px solid #303030;
  border-radius: 8px;
  padding: 12px 16px;
  color: #f0f0f0;
  font-size: 14px;
  transition: border-color 0.3s;

  &::placeholder {
    color: #f0f0f0;
    opacity: 0.4;
  }

  &:focus {
    outline: none;
    border-color: #ff6b35;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    font-size: 13px;
    padding: 10px 14px;
  }
`;

const SendButton = styled.button`
  background-color: #ff6b35;
  color: #f0f0f0;
  border: none;
  border-radius: 8px;
  padding: 12px 16px;
  cursor: pointer;
  transition: opacity 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

const formatTimestamp = (timestamp: string): string => {
  const date = new Date(timestamp);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);

  if (diffMins < 1) return 'just now';
  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffMins < 1440) return `${Math.floor(diffMins / 60)}h ago`;
  return (
    date.toLocaleDateString() +
    ' ' +
    date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  );
};

export const MessageBoard: React.FC<MessageBoardProps> = ({
  messages,
  currentUsername,
  newMessage = '',
  onMessageChange,
  onSendMessage,
  onDeleteMessage,
  onRefresh,
  backgroundColor,
  disabled = false,
  className,
}) => {
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && onSendMessage && !disabled) {
      onSendMessage();
    }
  };

  return (
    <BoardContainer
      $backgroundColor={backgroundColor}
      disabled={disabled}
      className={className}
    >
      <Header>
        <Title>
          <MessageSquareIcon />
          Message Board
        </Title>
        {onRefresh && (
          <RefreshButton onClick={onRefresh} disabled={disabled}>
            Refresh
          </RefreshButton>
        )}
      </Header>

      <MessagesContainer>
        {messages.slice(-5).map((msg) => {
          const isOwn = msg.username === currentUsername;
          return (
            <MessageBubble key={msg.id} $isOwn={isOwn}>
              <MessageContent>
                <MessageMeta $isOwn={isOwn}>
                  {msg.username} • {formatTimestamp(msg.timestamp)}
                </MessageMeta>
                <MessageText $isOwn={isOwn}>
                  {msg.text}
                  {onDeleteMessage && (
                    <DeleteButton
                      className="delete-button"
                      onClick={() => onDeleteMessage(msg.id)}
                      disabled={disabled}
                    >
                      <TrashIcon />
                    </DeleteButton>
                  )}
                </MessageText>
              </MessageContent>
            </MessageBubble>
          );
        })}
      </MessagesContainer>

      <InputContainer>
        <Input
          type="text"
          value={newMessage}
          onChange={(e) => onMessageChange?.(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type a message..."
          disabled={disabled}
        />
        <SendButton onClick={onSendMessage} disabled={disabled || !newMessage.trim()}>
          <SendIcon />
        </SendButton>
      </InputContainer>
    </BoardContainer>
  );
};
