'use client';

import { useState } from 'react';

interface StatementCardsProps {
  selectedValue: number | null;
  onSelect: (value: number) => void;
}

const statements = [
  { 
    value: 1, 
    label: 'Disagree', 
    description: 'I prefer to observe quietly',
    emoji: '🤫',
    icon: '👀',
    gradient: 'from-slate-400 to-slate-600',
    bgColor: 'bg-slate-50',
    borderColor: 'border-slate-300',
    textColor: 'text-slate-700',
    hoverGlow: 'hover:shadow-slate-300',
    selectedGlow: 'shadow-slate-400',
    particleColor: 'bg-slate-500',
  },
  { 
    value: 2, 
    label: 'Slightly Disagree', 
    description: 'I enjoy talking with a few people',
    emoji: '😊',
    icon: '💬',
    gradient: 'from-blue-400 to-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-300',
    textColor: 'text-blue-700',
    hoverGlow: 'hover:shadow-blue-300',
    selectedGlow: 'shadow-blue-400',
    particleColor: 'bg-blue-500',
  },
  { 
    value: 3, 
    label: 'Neutral', 
    description: 'I\'m comfortable socializing',
    emoji: '😌',
    icon: '🤝',
    gradient: 'from-purple-400 to-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-300',
    textColor: 'text-purple-700',
    hoverGlow: 'hover:shadow-purple-300',
    selectedGlow: 'shadow-purple-400',
    particleColor: 'bg-purple-500',
  },
  { 
    value: 4, 
    label: 'Slightly Agree', 
    description: 'I actively engage with many people',
    emoji: '😄',
    icon: '✨',
    gradient: 'from-orange-400 to-orange-600',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-300',
    textColor: 'text-orange-700',
    hoverGlow: 'hover:shadow-orange-300',
    selectedGlow: 'shadow-orange-400',
    particleColor: 'bg-orange-500',
  },
  { 
    value: 5, 
    label: 'Agree', 
    description: 'I energize the whole room',
    emoji: '🎉',
    icon: '🔥',
    gradient: 'from-pink-500 to-rose-600',
    bgColor: 'bg-gradient-to-br from-pink-50 to-rose-50',
    borderColor: 'border-pink-400',
    textColor: 'text-pink-700',
    hoverGlow: 'hover:shadow-pink-300',
    selectedGlow: 'shadow-pink-500',
    particleColor: 'bg-pink-500',
  },
];

export default function StatementCards({ selectedValue, onSelect }: StatementCardsProps) {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {statements.map((statement) => {
        const isSelected = selectedValue === statement.value;
        const isHovered = hoveredCard === statement.value;
        
        return (
          <button
            key={statement.value}
            onClick={() => onSelect(statement.value)}
            onMouseEnter={() => setHoveredCard(statement.value)}
            onMouseLeave={() => setHoveredCard(null)}
            className={`relative w-full p-5 rounded-2xl border-3 transition-all duration-300 overflow-hidden ${
              isSelected
                ? `${statement.borderColor} ${statement.bgColor} shadow-xl scale-[1.03] ${statement.selectedGlow}`
                : `border-gray-200 bg-white ${statement.hoverGlow} hover:scale-[1.01] hover:shadow-lg`
            }`}
          >
            {/* Animated background gradient on selection */}
            {isSelected && (
              <div className={`absolute inset-0 bg-gradient-to-r ${statement.gradient} opacity-5 animate-pulse`} />
            )}
            
            {/* Floating particles effect on hover/select */}
            {(isSelected || isHovered) && (
              <>
                <div className={`absolute top-2 left-4 w-2 h-2 ${statement.particleColor} rounded-full opacity-60 animate-bounce`} style={{ animationDelay: '0ms' }} />
                <div className={`absolute top-3 right-6 w-1.5 h-1.5 ${statement.particleColor} rounded-full opacity-40 animate-bounce`} style={{ animationDelay: '150ms' }} />
                <div className={`absolute bottom-4 left-8 w-1 h-1 ${statement.particleColor} rounded-full opacity-50 animate-bounce`} style={{ animationDelay: '300ms' }} />
              </>
            )}

            <div className="relative z-10 space-y-3">
              {/* Top Section: Emoji + Icon */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className={`text-4xl transition-transform duration-300 ${
                    isSelected ? 'scale-125 animate-bounce' : isHovered ? 'scale-110' : ''
                  }`}>
                    {statement.emoji}
                  </span>
                  <span className={`text-2xl ${isSelected ? 'animate-pulse' : ''}`}>
                    {statement.icon}
                  </span>
                </div>
                
                {/* Level Badge */}
                <div className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${statement.gradient} text-white shadow-md`}>
                  Level {statement.value}
                </div>
              </div>

              {/* Description */}
              <div className={`text-lg font-bold text-left ${
                isSelected ? statement.textColor : 'text-gray-800'
              } transition-colors duration-200`}>
                {statement.description}
              </div>

              {/* Bottom bar with animation */}
              <div className="flex items-center gap-2">
                <div className={`h-1.5 flex-1 rounded-full overflow-hidden bg-gray-200`}>
                  <div 
                    className={`h-full bg-gradient-to-r ${statement.gradient} transition-all duration-500 ${
                      isSelected ? 'w-full' : 'w-0'
                    }`}
                  />
                </div>
                
                {/* Checkmark */}
                {isSelected && (
                  <div className={`w-7 h-7 bg-gradient-to-br ${statement.gradient} rounded-full flex items-center justify-center shadow-lg animate-scale-in`}>
                    <svg
                      className="w-4 h-4 text-white"
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
  );
}

