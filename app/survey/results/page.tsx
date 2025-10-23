'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { PersonalityScores, AnxietyProfile, CopingStrategy } from '../types/survey';
import { getRecommendedStrategies, copingStrategies } from '../data/copingStrategies';

export default function ResultsPage() {
  const router = useRouter();
  const [personality, setPersonality] = useState<PersonalityScores | null>(null);
  const [anxiety, setAnxiety] = useState<AnxietyProfile | null>(null);
  const [strategies, setStrategies] = useState<CopingStrategy[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedStrategy, setExpandedStrategy] = useState<string | null>(null);

  useEffect(() => {
    // Calculate scores from localStorage
    const personalityData = localStorage.getItem('surveyProgress');
    const anxietyData = localStorage.getItem('anxietyResponses');

    if (!personalityData || !anxietyData) {
      router.push('/survey');
      return;
    }

    // Simple calculation (you'll refine this later)
    const pData = JSON.parse(personalityData);
    const aData = JSON.parse(anxietyData);

    // Calculate personality scores
    const pScores: PersonalityScores = {
      openness: 3.5,
      conscientiousness: 3.8,
      extraversion: calculateDimensionScore(pData.responses, 'extraversion'),
      agreeableness: calculateDimensionScore(pData.responses, 'agreeableness'),
      neuroticism: 3.2,
    };

    // Calculate anxiety scores
    const aScores: AnxietyProfile = {
      cognitiveAnxiety: calculateDimensionScore(aData.responses, 'cognitive-anxiety'),
      somaticAnxiety: calculateDimensionScore(aData.responses, 'somatic-anxiety'),
      selfConfidence: calculateDimensionScore(aData.responses, 'self-confidence'),
    };

    setPersonality(pScores);
    setAnxiety(aScores);

    // Get recommended strategies
    const recommended = getRecommendedStrategies(pScores, aScores);
    setStrategies(recommended.length > 0 ? recommended : copingStrategies.slice(0, 5));

    setTimeout(() => setLoading(false), 1500);
  }, [router]);

  function calculateDimensionScore(responses: any[], dimension: string): number {
    const dimensionResponses = responses.filter(r => {
      const qId = r.questionId;
      // Simple matching - you'll refine this
      return true;
    });

    if (dimensionResponses.length === 0) return 3;

    const sum = dimensionResponses.reduce((acc, r) => {
      const value = typeof r.answer === 'number' ? r.answer : 3;
      return acc + value;
    }, 0);

    return sum / dimensionResponses.length;
  }

  function getDominantAnxietyType(): { type: string; score: number; emoji: string } {
    if (!anxiety) return { type: 'Balanced', score: 3, emoji: '😌' };

    const types = [
      { type: 'Cognitive Anxiety', score: anxiety.cognitiveAnxiety, emoji: '🧠' },
      { type: 'Somatic Anxiety', score: anxiety.somaticAnxiety, emoji: '💓' },
      { type: 'Self-Confidence', score: 5 - anxiety.selfConfidence, emoji: '💪' },
    ];

    return types.reduce((prev, current) => 
      current.score > prev.score ? current : prev
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-12 text-center">
          <div className="w-24 h-24 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
            <span className="text-5xl">✨</span>
          </div>
          <h2 className="text-2xl font-black text-gray-900 mb-4">
            Analyzing Your Profile...
          </h2>
          <p className="text-gray-600 mb-6">
            Creating personalized recommendations
          </p>
          <div className="flex justify-center gap-2">
            <div className="w-3 h-3 bg-indigo-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
            <div className="w-3 h-3 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
            <div className="w-3 h-3 bg-pink-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
          </div>
        </div>
      </div>
    );
  }

  const dominant = getDominantAnxietyType();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-block bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-1.5 rounded-full text-xs font-semibold mb-3 shadow-md animate-scale-in">
            ✅ Assessment Complete
          </div>
          <h1 className="text-4xl font-black text-gray-900 mb-2">
            Your Personalized Profile
          </h1>
          <p className="text-gray-600">
            Based on your responses, here are your results and recommendations
          </p>
        </div>

        {/* Anxiety Profile Card */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-6 animate-scale-in" style={{ animationDelay: '0.1s' }}>
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 text-white">
            <div className="flex items-center gap-4">
              <div className="text-5xl">{dominant.emoji}</div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-1">Your Anxiety Profile</h2>
                <p className="text-white/90">Dominant Type: <span className="font-semibold">{dominant.type}</span></p>
              </div>
            </div>
          </div>
          
          {anxiety && (
            <div className="p-6 space-y-4">
              {[
                { label: 'Cognitive Anxiety', value: anxiety.cognitiveAnxiety, icon: '🧠', color: 'blue' },
                { label: 'Somatic Anxiety', value: anxiety.somaticAnxiety, icon: '💓', color: 'red' },
                { label: 'Self-Confidence', value: anxiety.selfConfidence, icon: '💪', color: 'green' },
              ].map((item) => (
                <div key={item.label}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                      <span>{item.icon}</span>
                      {item.label}
                    </span>
                    <span className="text-sm font-bold text-gray-900">{item.value.toFixed(1)}/5</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className={`bg-${item.color}-500 h-3 rounded-full transition-all duration-1000`}
                      style={{ width: `${(item.value / 5) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Coping Strategies */}
        <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8 animate-scale-in" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-2xl font-black text-gray-900 mb-2 flex items-center gap-2">
            <span>💡</span>
            Your Personalized Coping Strategies
          </h2>
          <p className="text-gray-600 mb-6">
            Top {strategies.length} recommended strategies based on your profile
          </p>

          <div className="space-y-4">
            {strategies.map((strategy, index) => (
              <div
                key={strategy.id}
                className="border-2 border-gray-200 rounded-xl overflow-hidden hover:border-indigo-300 transition-all"
              >
                <button
                  onClick={() => setExpandedStrategy(expandedStrategy === strategy.id ? null : strategy.id)}
                  className="w-full p-5 flex items-start gap-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                    {strategy.emoji}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-lg font-bold text-gray-900">{strategy.name}</h3>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <span className="text-xs font-semibold bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full">
                          #{index + 1}
                        </span>
                        <svg
                          className={`w-5 h-5 text-gray-400 transition-transform ${
                            expandedStrategy === strategy.id ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{strategy.description}</p>
                  </div>
                </button>

                {expandedStrategy === strategy.id && (
                  <div className="px-5 pb-5 pt-2 bg-gradient-to-br from-indigo-50 to-purple-50 border-t-2 border-indigo-100">
                    <div className="mb-4">
                      <h4 className="text-sm font-bold text-gray-900 mb-2">📋 How to do it:</h4>
                      <ol className="space-y-2">
                        {strategy.howTo.map((step, idx) => (
                          <li key={idx} className="text-sm text-gray-700 flex gap-2">
                            <span className="font-semibold text-indigo-600">{idx + 1}.</span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <h4 className="text-sm font-bold text-gray-900 mb-1">⏰ When to use:</h4>
                      <p className="text-sm text-gray-700">{strategy.whenToUse}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-xl text-center"
          >
            🏠 Back to Home
          </Link>
          <button
            onClick={() => {
              localStorage.clear();
              router.push('/survey');
            }}
            className="border-2 border-gray-300 text-gray-700 font-bold py-4 px-8 rounded-xl hover:bg-gray-50 transition-all text-center"
          >
            🔄 Restart Assessment
          </button>
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500">
            These recommendations are based on research with national-level combat sports athletes.
            <br />
            For professional mental health support, please consult a sports psychologist.
          </p>
        </div>
      </div>
    </div>
  );
}

