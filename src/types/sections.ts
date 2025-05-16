/**
 * Type definitions for section components
 */

/**
 * Base section props that all sections might use
 */
export interface BaseSectionProps {
  readonly id?: string;
  readonly class?: string;
}

/**
 * Props for the Bienvenida (Welcome) section
 */
export interface BienvenidaProps extends BaseSectionProps {
  readonly title?: string;
  readonly subtitle?: string;
  readonly description?: string;
}

/**
 * Props for the DetallesEvento (Event Details) section
 */
export interface DetallesEventoProps extends BaseSectionProps {
  readonly date?: string;
  readonly time?: string;
  readonly location?: string;
  readonly mapUrl?: string;
}

/**
 * Props for the RSVP section
 */
export interface RSVPProps extends BaseSectionProps {
  readonly phoneNumber?: string;
  readonly buttonText?: string;
}

/**
 * Event program item
 */
export interface ProgramItem {
  readonly time: string;
  readonly activity: string;
  readonly description?: string;
}

/**
 * Props for the Programa (Program) section
 */
export interface ProgramaProps extends BaseSectionProps {
  readonly items?: readonly ProgramItem[];
}

/**
 * Props for the Regalos (Gifts) section
 */
export interface RegalosProps extends BaseSectionProps {
  readonly message?: string;
}
