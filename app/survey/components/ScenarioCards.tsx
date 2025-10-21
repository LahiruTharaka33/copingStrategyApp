'use client';

import { useState } from 'react';

interface ScenarioCardsProps {
  selectedValue: number | null;
  onSelect: (value: number) => void;
  scenario: {
    title: string;
    description: string;
  };
}

const reactions = [
  {
    value: 1,
    emoji: '🎧',
    action: 'Put in headphones, stay in my zone',
    vibe: 'The Focused',
    gradient: 'from-gray-400 to-gray-600',
    bgColor: 'bg-gray-50',
    borderColor: 'border-gray-300',
    textColor: 'text-gray-700',
    hoverGlow: 'hover:shadow-gray-300',
    selectedGlow: 'shadow-gray-400',
    particleColor: 'bg-gray-500',
  },
  {
    value: 2,
    emoji: '🤷',
    action: 'Notice them but mind my business',
    vibe: 'The Independent',
    gradient: 'from-slate-400 to-slate-600',
    bgColor: 'bg-slate-50',
    borderColor: 'border-slate-300',
    textColor: 'text-slate-700',
    hoverGlow: 'hover:shadow-slate-300',
    selectedGlow: 'shadow-slate-400',
    particleColor: 'bg-slate-500',
  },
  {
    value: 3,
    emoji: '😌',
    action: 'Give them a friendly nod',
    vibe: 'The Balanced',
    gradient: 'from-blue-400 to-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-300',
    textColor: 'text-blue-700',
    hoverGlow: 'hover:shadow-blue-300',
    selectedGlow: 'shadow-blue-400',
    particleColor: 'bg-blue-500',
  },
  {
    value: 4,
    emoji: '😊',
    action: 'Say "Good luck!"',
    vibe: 'The Friendly',
    gradient: 'from-green-400 to-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-300',
    textColor: 'text-green-700',
    hoverGlow: 'hover:shadow-green-300',
    selectedGlow: 'shadow-green-400',
    particleColor: 'bg-green-500',
  },
  {
    value: 5,
    emoji: '🤗',
    action: 'Go talk to them, offer encouragement',
    vibe: 'The Supporter',
    gradient: 'from-pink-500 to-rose-600',
    bgColor: 'bg-gradient-to-br from-pink-50 to-rose-50',
    borderColor: 'border-pink-400',
    textColor: 'text-pink-700',
    hoverGlow: 'hover:shadow-pink-300',
    selectedGlow: 'shadow-pink-500',
    particleColor: 'bg-pink-500',
  },
];

export default function ScenarioCards({ selectedValue, onSelect, scenario }: ScenarioCardsProps) {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {/* Scenario Box */}
      <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-6 text-white shadow-xl">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-2xl">
            🏆
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider opacity-90">
              {scenario.title}
            </div>
            <div className="text-sm font-medium opacity-80">Imagine this...</div>
          </div>
        </div>
        <p className="text-lg leading-relaxed font-medium">
          {scenario.description}
        </p>
      </div>

      {/* Reaction Cards */}
      <div className="space-y-3">
        <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide px-1">
          What's your vibe? 👇
        </div>
        
        {reactions.map((reaction) => {
          const isSelected = selectedValue === reaction.value;
          const isHovered = hoveredCard === reaction.value;

          return (
            <button
              key={reaction.value}
              onClick={() => onSelect(reaction.value)}
              onMouseEnter={() => setHoveredCard(reaction.value)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`relative w-full p-4 rounded-xl border-2 transition-all duration-300 overflow-hidden ${
                isSelected
                  ? `${reaction.borderColor} ${reaction.bgColor} shadow-xl scale-[1.02] ${reaction.selectedGlow}`
                  : `border-gray-200 bg-white ${reaction.hoverGlow} hover:scale-[1.01] hover:shadow-lg`
              }`}
            >
              {/* Animated background gradient on selection */}
              {isSelected && (
                <div className={`absolute inset-0 bg-gradient-to-r ${reaction.gradient} opacity-5 animate-pulse`} />
              )}

              {/* Floating particles effect on hover/select */}
              {(isSelected || isHovered) && (
                <>
                  <div className={`absolute top-2 left-4 w-2 h-2 ${reaction.particleColor} rounded-full opacity-60 animate-bounce`} style={{ animationDelay: '0ms' }} />
                  <div className={`absolute top-3 right-6 w-1.5 h-1.5 ${reaction.particleColor} rounded-full opacity-40 animate-bounce`} style={{ animationDelay: '150ms' }} />
                  <div className={`absolute bottom-3 left-8 w-1 h-1 ${reaction.particleColor} rounded-full opacity-50 animate-bounce`} style={{ animationDelay: '300ms' }} />
                </>
              )}

              <div className="relative z-10">
                <div className="flex items-center gap-4">
                  {/* Emoji */}
                  <div className={`text-4xl transition-transform duration-300 flex-shrink-0 ${
                    isSelected ? 'scale-125 animate-bounce' : isHovered ? 'scale-110' : ''
                  }`}>
                    {reaction.emoji}
                  </div>

                  {/* Action Text */}
                  <div className="flex-1 text-left">
                    <div className={`text-base font-bold mb-1 ${
                      isSelected ? reaction.textColor : 'text-gray-800'
                    }`}>
                      {reaction.action}
                    </div>
                    <div className="flex items-center gap-2">
                      <div className={`text-xs font-semibold px-2 py-1 rounded-full bg-gradient-to-r ${reaction.gradient} text-white`}>
                        {reaction.vibe}
                      </div>
                    </div>
                  </div>

                  {/* Checkmark */}
                  {isSelected && (
                    <div className={`w-8 h-8 bg-gradient-to-br ${reaction.gradient} rounded-full flex items-center justify-center shadow-lg animate-scale-in flex-shrink-0`}>
                      <svg
                        className="w-5 h-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}


