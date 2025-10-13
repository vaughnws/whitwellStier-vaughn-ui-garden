export interface Message {
  id: string | number;
  username: string;
  text: string;
  timestamp: string;
}

export interface MessageBoardProps {
  /**
   * Array of messages to display
   */
  messages: Message[];
  /**
   * Current username
   */
  currentUsername?: string;
  /**
   * New message input value
   */
  newMessage?: string;
  /**
   * Callback when new message changes
   */
  onMessageChange?: (value: string) => void;
  /**
   * Callback when message is sent
   */
  onSendMessage?: () => void;
  /**
   * Callback when message is deleted
   */
  onDeleteMessage?: (id: string | number) => void;
  /**
   * Callback when refresh is clicked
   */
  onRefresh?: () => void;
  /**
   * Background color
   */
  backgroundColor?: string;
  /**
   * Whether the component is disabled
   */
  disabled?: boolean;
  /**
   * Optional className
   */
  className?: string;
}
