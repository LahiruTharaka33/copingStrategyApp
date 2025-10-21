import { Question } from '../types/survey';

// Personality Assessment Questions
export const surveyQuestions: Question[] = [
  {
    id: 'q1',
    type: 'statement-cards',
    text: 'I am the life of the party',
    subtitle: 'Think about how you typically behave at social gatherings',
    dimension: 'extraversion',
    required: true,
  },
  {
    id: 'q2',
    type: 'scenario-cards',
    text: 'How much do you care about others\' feelings?',
    subtitle: 'Based on this scenario',
    dimension: 'agreeableness',
    required: true,
    reversed: true, // This measures lack of concern, so reverse scoring
    scenario: {
      title: 'SCENE: Competition Day',
      description: 'You arrive early and see another athlete looking nervous and alone.',
    },
  },
  {
    id: 'q3',
    type: 'rpg-encounter',
    text: 'How likely are you to start conversations?',
    subtitle: 'An RPG adventure awaits!',
    dimension: 'extraversion',
    required: true,
    scenario: {
      title: 'Your Move',
      description: 'You notice them ahead on your path.',
    },
  },
  // More questions will be added as you provide them
];

// Likert scale options (reusable)
export const likertOptions5 = [
  { value: 1, label: 'Strongly Disagree' },
  { value: 2, label: 'Disagree' },
  { value: 3, label: 'Neutral' },
  { value: 4, label: 'Agree' },
  { value: 5, label: 'Strongly Agree' },
];

export const likertOptions7 = [
  { value: 1, label: 'Strongly Disagree' },
  { value: 2, label: 'Disagree' },
  { value: 3, label: 'Somewhat Disagree' },
  { value: 4, label: 'Neutral' },
  { value: 5, label: 'Somewhat Agree' },
  { value: 6, label: 'Agree' },
  { value: 7, label: 'Strongly Agree' },
];

export const yesNoOptions = [
  { value: 'yes', label: 'Yes' },
  { value: 'no', label: 'No' },
];



