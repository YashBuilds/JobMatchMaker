export interface ChatMessage {
  text: string;
  isUser: boolean;
}

export interface TestimonialType {
  name: string;
  role: string;
  image: string;
  quote: string;
  rating: number;
}

export interface FeatureType {
  icon: string;
  title: string;
  description: string;
}

export interface ProcessStepType {
  icon: string;
  title: string;
  description: string;
}
