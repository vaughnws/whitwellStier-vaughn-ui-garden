export interface Container {
  name: string;
  status: 'running' | 'stopped';
}

export interface ContainerManagerProps {
  /**
   * Array of containers
   */
  containers: Container[];
  /**
   * Whether PIN is unlocked
   */
  isPinUnlocked?: boolean;
  /**
   * Callback to start a container
   */
  onStart?: (containerName: string) => void;
  /**
   * Callback to stop a container
   */
  onStop?: (containerName: string) => void;
  /**
   * Callback to restart a container
   */
  onRestart?: (containerName: string) => void;
  /**
   * Callback to start all containers
   */
  onStartAll?: () => void;
  /**
   * Callback to stop all containers
   */
  onStopAll?: () => void;
  /**
   * Callback to restart all containers
   */
  onRestartAll?: () => void;
  /**
   * Callback when unlock button is clicked
   */
  onUnlock?: () => void;
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
