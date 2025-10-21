'use client';

import { PersonalityScores } from '../types/survey';

interface ResultsScreenProps {
  scores: PersonalityScores;
  onRestart: () => void;
  onContinue: () => void;
}

export default function ResultsScreen({ scores, onRestart, onContinue }: ResultsScreenProps) {
  const traits = [
    { name: 'Openness', score: scores.openness, description: 'Curiosity and creativity' },
    { name: 'Conscientiousness', score: scores.conscientiousness, description: 'Organization and responsibility' },
    { name: 'Extraversion', score: scores.extraversion, description: 'Sociability and energy' },
    { name: 'Agreeableness', score: scores.agreeableness, description: 'Cooperation and compassion' },
    { name: 'Neuroticism', score: scores.neuroticism, description: 'Emotional stability' },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 space-y-6">
        <div className="text-center">
          <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Assessment Complete!
          </h1>
          <p className="text-gray-600">
            Here are your personality trait scores
          </p>
        </div>

        <div className="space-y-4">
          {traits.map((trait) => (
            <div key={trait.name} className="space-y-2">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-gray-900">{trait.name}</h3>
                  <p className="text-xs text-gray-500">{trait.description}</p>
                </div>
                <span className="text-lg font-bold text-blue-600">
                  {trait.score.toFixed(1)}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${(trait.score / 5) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-3">
          <button
            onClick={onContinue}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-xl transition-colors duration-200 shadow-md"
          >
            Continue to Anxiety Assessment
          </button>
          <button
            onClick={onRestart}
            className="w-full border-2 border-gray-300 text-gray-700 font-semibold py-4 px-6 rounded-xl hover:bg-gray-50 transition-colors duration-200"
          >
            Retake Assessment
          </button>
        </div>
      </div>
    </div>
  );
}






