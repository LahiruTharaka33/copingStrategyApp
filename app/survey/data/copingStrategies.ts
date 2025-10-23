import { CopingStrategy } from '../types/survey';

export const copingStrategies: CopingStrategy[] = [
  {
    id: 'visualization',
    name: 'Visualization & Mental Imagery',
    emoji: '🎯',
    description: 'Create vivid mental images of successful performance to build confidence and reduce anxiety.',
    howTo: [
      'Find a quiet space and close your eyes',
      'Picture yourself performing perfectly',
      'Engage all senses - see, hear, feel the success',
      'Practice 10 minutes daily before competition',
    ],
    whenToUse: 'Before competitions, during warm-up, or when feeling doubtful',
    category: 'cognitive',
  },
  {
    id: 'breathing',
    name: 'Deep Breathing Exercises',
    emoji: '🌬️',
    description: 'Controlled breathing techniques to calm your nervous system and reduce physical tension.',
    howTo: [
      '4-7-8 Technique: Breathe in for 4 counts',
      'Hold breath for 7 counts',
      'Exhale slowly for 8 counts',
      'Repeat 4-5 times until calm',
    ],
    whenToUse: 'When feeling physical symptoms of anxiety or before high-pressure moments',
    category: 'physical',
  },
  {
    id: 'social-support',
    name: 'Social Support & Team Connection',
    emoji: '🤝',
    description: 'Connect with teammates, coaches, or supporters to share feelings and gain encouragement.',
    howTo: [
      'Talk to your coach about your concerns',
      'Share experiences with teammates',
      'Join team bonding activities',
      'Ask for encouragement when needed',
    ],
    whenToUse: 'When feeling isolated or before team events',
    category: 'social',
  },
  {
    id: 'mindfulness',
    name: 'Mindfulness & Present Moment',
    emoji: '🧘',
    description: 'Stay focused on the present moment rather than worrying about outcomes.',
    howTo: [
      'Focus on your breath or body sensations',
      'Notice thoughts without judgment',
      'Bring attention back to "now"',
      'Practice 5-10 minutes daily',
    ],
    whenToUse: 'When mind is racing with worries or negative thoughts',
    category: 'cognitive',
  },
  {
    id: 'progressive-relaxation',
    name: 'Progressive Muscle Relaxation',
    emoji: '💪',
    description: 'Systematically tense and relax muscle groups to release physical tension.',
    howTo: [
      'Start with your feet, tense for 5 seconds',
      'Release and notice the relaxation',
      'Move up through each muscle group',
      'End with face and head muscles',
    ],
    whenToUse: 'When experiencing muscle tension or before sleep',
    category: 'physical',
  },
  {
    id: 'positive-self-talk',
    name: 'Positive Self-Talk & Affirmations',
    emoji: '💬',
    description: 'Replace negative thoughts with empowering, positive statements.',
    howTo: [
      'Identify negative thought patterns',
      'Create personal affirmations: "I am prepared"',
      'Repeat affirmations before competition',
      'Challenge doubts with evidence of past success',
    ],
    whenToUse: 'When experiencing self-doubt or negative thinking',
    category: 'cognitive',
  },
  {
    id: 'journaling',
    name: 'Journaling & Thought Processing',
    emoji: '📝',
    description: 'Write down thoughts and feelings to process emotions and gain clarity.',
    howTo: [
      'Write for 10-15 minutes daily',
      'Record worries, feelings, and goals',
      'Reflect on what went well',
      'Plan coping strategies for next time',
    ],
    whenToUse: 'After training, before bed, or when feeling overwhelmed',
    category: 'cognitive',
  },
  {
    id: 'music',
    name: 'Music Therapy',
    emoji: '🎵',
    description: 'Use music to regulate emotions and energy levels before competition.',
    howTo: [
      'Create a pre-competition playlist',
      'Choose calming music to reduce anxiety',
      'Use energizing music to boost confidence',
      'Listen 30-60 minutes before event',
    ],
    whenToUse: 'During warm-up or when needing mood adjustment',
    category: 'emotional',
  },
  {
    id: 'humor',
    name: 'Humor & Light-heartedness',
    emoji: '😄',
    description: 'Use humor to lighten mood and reduce tension in stressful situations.',
    howTo: [
      'Share jokes with teammates',
      'Watch funny videos before competition',
      'Don\'t take everything too seriously',
      'Laugh at minor mistakes during training',
    ],
    whenToUse: 'When team atmosphere is tense or feeling too serious',
    category: 'emotional',
  },
  {
    id: 'routine',
    name: 'Pre-Competition Routine',
    emoji: '🔄',
    description: 'Establish consistent rituals to create comfort and control.',
    howTo: [
      'Create a step-by-step pre-event routine',
      'Include warm-up, visualization, breathing',
      'Stick to the same timing each time',
      'Trust your preparation process',
    ],
    whenToUse: 'Before every competition to build consistency',
    category: 'cognitive',
  },
  {
    id: 'grounding',
    name: '5-4-3-2-1 Grounding Technique',
    emoji: '🌟',
    description: 'Use your senses to anchor yourself in the present moment.',
    howTo: [
      'Name 5 things you can see',
      'Name 4 things you can touch',
      'Name 3 things you can hear',
      'Name 2 things you can smell',
      'Name 1 thing you can taste',
    ],
    whenToUse: 'During panic or overwhelming anxiety moments',
    category: 'cognitive',
  },
  {
    id: 'physical-activity',
    name: 'Physical Release & Movement',
    emoji: '🏃',
    description: 'Use physical activity to release nervous energy and tension.',
    howTo: [
      'Go for a light jog or walk',
      'Do dynamic stretching',
      'Practice your sport movements',
      'Channel anxiety into purposeful movement',
    ],
    whenToUse: 'When feeling restless or excess nervous energy',
    category: 'physical',
  },
];

// Matching logic function
export function getRecommendedStrategies(
  personality: { extraversion?: number; neuroticism?: number; conscientiousness?: number; openness?: number; agreeableness?: number },
  anxiety: { cognitiveAnxiety: number; somaticAnxiety: number; selfConfidence: number }
): CopingStrategy[] {
  const recommended: string[] = [];

  // Rule 1: High cognitive anxiety
  if (anxiety.cognitiveAnxiety >= 3.5) {
    recommended.push('mindfulness', 'journaling', 'positive-self-talk', 'grounding');
  }

  // Rule 2: High somatic anxiety
  if (anxiety.somaticAnxiety >= 3.5) {
    recommended.push('breathing', 'progressive-relaxation', 'physical-activity', 'music');
  }

  // Rule 3: Low self-confidence
  if (anxiety.selfConfidence <= 2.5) {
    recommended.push('visualization', 'positive-self-talk', 'routine', 'social-support');
  }

  // Rule 4: High extraversion - social coping
  if (personality.extraversion && personality.extraversion >= 3.5) {
    recommended.push('social-support', 'humor');
  }

  // Rule 5: High neuroticism - calming techniques
  if (personality.neuroticism && personality.neuroticism >= 3.5) {
    recommended.push('mindfulness', 'breathing', 'progressive-relaxation');
  }

  // Rule 6: High conscientiousness - structured approaches
  if (personality.conscientiousness && personality.conscientiousness >= 3.5) {
    recommended.push('journaling', 'routine', 'visualization');
  }

  // Rule 7: High openness - creative approaches
  if (personality.openness && personality.openness >= 3.5) {
    recommended.push('visualization', 'music');
  }

  // Rule 8: High agreeableness - social/emotional
  if (personality.agreeableness && personality.agreeableness >= 3.5) {
    recommended.push('social-support', 'humor');
  }

  // Get unique strategies
  const uniqueIds = Array.from(new Set(recommended));
  
  // Return top 5 strategies
  return uniqueIds
    .slice(0, 5)
    .map(id => copingStrategies.find(s => s.id === id)!)
    .filter(Boolean);
}

