import { Question } from '../types/survey';

// Anxiety Assessment Questions
// Measures: Cognitive Anxiety, Somatic Anxiety, Self-Confidence
export const anxietyQuestions: Question[] = [
  // Cognitive Anxiety Questions (Mental/Thoughts)
  {
    id: 'a1',
    type: 'scenario-cards',
    text: 'Before a big competition, your mind is filled with...',
    subtitle: 'Think about your mental state',
    dimension: 'cognitive-anxiety',
    required: true,
    scenario: {
      title: 'SCENE: Night Before Competition',
      description: 'Tomorrow is your biggest match of the season. You\'re lying in bed.',
    },
  },
  {
    id: 'a2',
    type: 'statement-cards',
    text: 'I worry about performing poorly',
    subtitle: 'How true is this for you before competitions?',
    dimension: 'cognitive-anxiety',
    required: true,
  },
  
  // Somatic Anxiety Questions (Physical sensations)
  {
    id: 'a3',
    type: 'body-sensation',
    text: 'Before competing, my body feels...',
    subtitle: 'Choose the physical sensation that matches',
    dimension: 'somatic-anxiety',
    required: true,
  },
  {
    id: 'a4',
    type: 'statement-cards',
    text: 'I experience butterflies in my stomach before events',
    subtitle: 'Physical symptoms before competition',
    dimension: 'somatic-anxiety',
    required: true,
  },
  
  // Self-Confidence Questions
  {
    id: 'a5',
    type: 'confidence-gauge',
    text: 'How confident are you in your abilities under pressure?',
    subtitle: 'Rate your confidence level',
    dimension: 'self-confidence',
    required: true,
    min: 0,
    max: 100,
  },
  {
    id: 'a6',
    type: 'statement-cards',
    text: 'I trust my training when it matters most',
    subtitle: 'Think about high-pressure moments',
    dimension: 'self-confidence',
    required: true,
  },
  
  // Mixed - Cognitive/Control
  {
    id: 'a7',
    type: 'statement-cards',
    text: 'During competition, I can control my thoughts',
    subtitle: 'Mental control during performance',
    dimension: 'cognitive-anxiety',
    required: true,
    reversed: true, // Higher score = less anxiety
  },
];

