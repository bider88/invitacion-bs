/**
 * Type definitions for UI components
 */

/**
 * Button component props
 */
export interface ButtonProps {
  readonly id?: string;
  readonly type?: 'button' | 'submit' | 'reset';
  readonly ariaLabel?: string;
  readonly variant?: 'primary' | 'secondary';
  readonly onClick?: string;
  readonly class?: string;
  readonly href?: string;
  readonly target?: string;
}

/**
 * Audio player state
 */
export interface AudioPlayerState {
  readonly isPlaying: boolean;
}

/**
 * Event details for DOM events
 */
export interface DOMEvent extends Event {
  readonly target: HTMLElement;
}
