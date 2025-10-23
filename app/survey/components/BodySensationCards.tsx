'use client';

import { useState } from 'react';

interface BodySensationCardsProps {
  selectedValue: number | null;
  onSelect: (value: number) => void;
}

const sensations = [
  {
    value: 1,
    emoji: '😰',
    title: 'Very Tense',
    description: 'Sweating, shaking, heart racing',
    bodyPart: '💓',
    gradient: 'from-red-400 to-red-600',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-300',
    textColor: 'text-red-700',
    selectedGlow: 'shadow-red-400',
  },
  {
    value: 2,
    emoji: '😬',
    title: 'Tense',
    description: 'Tight muscles, slightly nervous',
    bodyPart: '💪',
    gradient: 'from-orange-400 to-orange-600',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-300',
    textColor: 'text-orange-700',
    selectedGlow: 'shadow-orange-400',
  },
  {
    value: 3,
    emoji: '😐',
    title: 'Neutral',
    description: 'Normal sensations, manageable',
    bodyPart: '🙆',
    gradient: 'from-yellow-400 to-yellow-600',
    bgColor: 'bg-yellow-50',
    borderColor: 'border-yellow-300',
    textColor: 'text-yellow-700',
    selectedGlow: 'shadow-yellow-400',
  },
  {
    value: 4,
    emoji: '😊',
    title: 'Relaxed',
    description: 'Calm, steady breathing',
    bodyPart: '🧘',
    gradient: 'from-green-400 to-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-300',
    textColor: 'text-green-700',
    selectedGlow: 'shadow-green-400',
  },
  {
    value: 5,
    emoji: '😌',
    title: 'Completely Calm',
    description: 'Energized, ready, in control',
    bodyPart: '✨',
    gradient: 'from-blue-400 to-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-300',
    textColor: 'text-blue-700',
    selectedGlow: 'shadow-blue-400',
  },
];

export default function BodySensationCards({ selectedValue, onSelect }: BodySensationCardsProps) {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {/* Body Illustration */}
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 mb-4">
        <div className="text-center">
          <div className="text-6xl mb-2">🧍</div>
          <p className="text-sm font-semibold text-gray-700">How does your body feel?</p>
        </div>
      </div>

      {sensations.map((sensation) => {
        const isSelected = selectedValue === sensation.value;
        const isHovered = hoveredCard === sensation.value;

        return (
          <button
            key={sensation.value}
            onClick={() => onSelect(sensation.value)}
            onMouseEnter={() => setHoveredCard(sensation.value)}
            onMouseLeave={() => setHoveredCard(null)}
            className={`relative w-full p-4 rounded-xl border-2 transition-all duration-300 overflow-hidden ${
              isSelected
                ? `${sensation.borderColor} ${sensation.bgColor} shadow-xl scale-[1.02] ${sensation.selectedGlow}`
                : 'border-gray-200 bg-white hover:shadow-lg hover:scale-[1.01]'
            }`}
          >
            <div className="relative z-10 flex items-center gap-4">
              {/* Emoji & Body Part */}
              <div className="flex flex-col items-center gap-1">
                <div className={`text-4xl transition-transform duration-300 ${
                  isSelected ? 'scale-125 animate-bounce' : isHovered ? 'scale-110' : ''
                }`}>
                  {sensation.emoji}
                </div>
                <div className="text-2xl">{sensation.bodyPart}</div>
              </div>

              {/* Content */}
              <div className="flex-1 text-left">
                <div className={`text-base font-bold mb-1 ${
                  isSelected ? sensation.textColor : 'text-gray-800'
                }`}>
                  {sensation.title}
                </div>
                <div className="text-xs text-gray-600">
                  {sensation.description}
                </div>
              </div>

              {/* Level Badge */}
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${sensation.gradient} flex items-center justify-center text-white font-black shadow-md flex-shrink-0`}>
                {sensation.value}
              </div>

              {/* Checkmark */}
              {isSelected && (
                <div className={`w-8 h-8 bg-gradient-to-br ${sensation.gradient} rounded-full flex items-center justify-center shadow-lg animate-scale-in flex-shrink-0`}>
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>
          </button>
        );
      })}
    </div>
  );
}

