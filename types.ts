export interface Brand {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  heritage: string;
}

export interface AppointmentRequest {
  name: string;
  email: string;
  phone: string;
  date: string;
  notes: string;
  type: 'consultation' | 'fitting' | 'wardrobe_refresh';
}

export enum ConciergeState {
  IDLE,
  ANALYZING,
  SUGGESTING,
  ERROR
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}