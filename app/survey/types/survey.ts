// Survey Question Types
export type QuestionType = 
  | 'statement-cards' // Statement cards (1-5 scale)
  | 'scenario-cards'  // Scenario-based cards with context
  | 'rpg-encounter'   // RPG-style animated encounter
  | 'body-sensation'  // Body feeling cards for somatic anxiety
  | 'confidence-gauge' // Slider for confidence levels
  | 'likert-5'      // 5-point Likert scale
  | 'likert-7'      // 7-point Likert scale
  | 'multiple-choice' // Single selection
  | 'multiple-select' // Multiple selections
  | 'text-input'    // Short text
  | 'text-area'     // Long text
  | 'yes-no'        // Binary choice
  | 'slider';       // Numeric slider

export interface QuestionOption {
  value: string | number;
  label: string;
}

export interface Question {
  id: string;
  type: QuestionType;
  text: string;
  subtitle?: string;
  options?: QuestionOption[];
  min?: number;
  max?: number;
  required?: boolean;
  dimension?: 'openness' | 'conscientiousness' | 'extraversion' | 'agreeableness' | 'neuroticism' | 'cognitive-anxiety' | 'somatic-anxiety' | 'self-confidence';
  reversed?: boolean; // For reverse-scored items
  scenario?: {
    title: string;
    description: string;
  };
}

export interface SurveyResponse {
  questionId: string;
  answer: string | number | string[];
  timestamp: number;
}

export interface SurveyState {
  currentQuestionIndex: number;
  responses: SurveyResponse[];
  startTime: number;
  isComplete: boolean;
}

export interface PersonalityScores {
  openness: number;
  conscientiousness: number;
  extraversion: number;
  agreeableness: number;
  neuroticism: number;
}

export interface AnxietyProfile {
  cognitiveAnxiety: number;
  somaticAnxiety: number;
  selfConfidence: number;
}

export interface CopingStrategy {
  id: string;
  name: string;
  emoji: string;
  description: string;
  howTo: string[];
  whenToUse: string;
  category: 'cognitive' | 'physical' | 'social' | 'emotional';
}



