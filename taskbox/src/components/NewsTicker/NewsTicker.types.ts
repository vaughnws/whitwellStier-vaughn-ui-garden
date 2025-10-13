export interface NewsItem {
  title: string;
  link: string;
}

export interface NewsTickerProps {
  /**
   * Array of news items
   */
  news: NewsItem[];
  /**
   * Background color
   */
  backgroundColor?: string;
  /**
   * Animation speed in seconds
   */
  speed?: number;
  /**
   * Whether the component is disabled
   */
  disabled?: boolean;
  /**
   * Optional className
   */
  className?: string;
}
