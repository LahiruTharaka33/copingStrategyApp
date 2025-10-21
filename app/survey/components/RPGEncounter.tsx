'use client';

import { useState, useEffect } from 'react';

interface RPGEncounterProps {
  selectedValue: number | null;
  onSelect: (value: number) => void;
  scenario: {
    title: string;
    description: string;
  };
}

const choices = [
  {
    value: 1,
    emoji: '🚶',
    action: 'Take a different path, avoid them',
    vibe: 'The Lone Wolf',
    gradient: 'from-gray-400 to-gray-600',
    bgColor: 'bg-gray-50',
    borderColor: 'border-gray-300',
    textColor: 'text-gray-700',
    selectedGlow: 'shadow-gray-400',
    particleColor: 'bg-gray-500',
  },
  {
    value: 2,
    emoji: '😶',
    action: 'Keep walking, minimal acknowledgment',
    vibe: 'The Reserved',
    gradient: 'from-slate-400 to-slate-600',
    bgColor: 'bg-slate-50',
    borderColor: 'border-slate-300',
    textColor: 'text-slate-700',
    selectedGlow: 'shadow-slate-400',
    particleColor: 'bg-slate-500',
  },
  {
    value: 3,
    emoji: '😊',
    action: 'Smile and make eye contact',
    vibe: 'The Approachable',
    gradient: 'from-blue-400 to-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-300',
    textColor: 'text-blue-700',
    selectedGlow: 'shadow-blue-400',
    particleColor: 'bg-blue-500',
  },
  {
    value: 4,
    emoji: '👋',
    action: 'Wave and say "Good morning!"',
    vibe: 'The Outgoing',
    gradient: 'from-orange-400 to-orange-600',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-300',
    textColor: 'text-orange-700',
    selectedGlow: 'shadow-orange-400',
    particleColor: 'bg-orange-500',
  },
  {
    value: 5,
    emoji: '🗣️',
    action: 'Walk up and start a conversation',
    vibe: 'The Social Butterfly',
    gradient: 'from-pink-500 to-purple-600',
    bgColor: 'bg-gradient-to-br from-pink-50 to-purple-50',
    borderColor: 'border-pink-400',
    textColor: 'text-pink-700',
    selectedGlow: 'shadow-pink-500',
    particleColor: 'bg-pink-500',
  },
];

type AnimationPhase = 'walking' | 'encounter' | 'choices' | 'selected';

export default function RPGEncounter({ selectedValue, onSelect, scenario }: RPGEncounterProps) {
  const [phase, setPhase] = useState<AnimationPhase>('walking');
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [characterPosition, setCharacterPosition] = useState(0);

  useEffect(() => {
    // Walking animation
    const walkTimer = setTimeout(() => {
      setCharacterPosition(50);
    }, 100);

    // Encounter phase
    const encounterTimer = setTimeout(() => {
      setPhase('encounter');
    }, 2000);

    // Show choices
    const choicesTimer = setTimeout(() => {
      setPhase('choices');
    }, 3500);

    return () => {
      clearTimeout(walkTimer);
      clearTimeout(encounterTimer);
      clearTimeout(choicesTimer);
    };
  }, []);

  useEffect(() => {
    if (selectedValue !== null) {
      setPhase('selected');
    }
  }, [selectedValue]);

  return (
    <div className="space-y-6">
      {/* RPG Scene */}
      <div className="relative bg-gradient-to-b from-sky-100 to-green-100 rounded-2xl overflow-hidden border-2 border-gray-300 shadow-xl" style={{ height: '280px' }}>
        {/* Background elements */}
        <div className="absolute inset-0">
          {/* Sky */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-sky-200 to-sky-100" />
          
          {/* Sun */}
          <div className="absolute top-6 right-8 w-12 h-12 bg-yellow-300 rounded-full shadow-lg animate-pulse" />
          
          {/* Clouds */}
          <div className="absolute top-8 left-12 text-4xl opacity-70 animate-float">☁️</div>
          <div className="absolute top-12 right-24 text-3xl opacity-60 animate-float" style={{ animationDelay: '1s' }}>☁️</div>
          
          {/* Ground */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-green-200 to-green-300" />
          
          {/* Track/Path */}
          <div className="absolute bottom-12 left-0 right-0 h-20 bg-gradient-to-b from-amber-200 to-amber-300 opacity-60" />
          
          {/* Trees (background) */}
          <div className="absolute bottom-24 left-8 text-5xl">🌳</div>
          <div className="absolute bottom-24 right-16 text-5xl">🌳</div>
        </div>

        {/* Characters */}
        <div className="absolute bottom-16 left-0 right-0">
          {/* Your Character */}
          <div 
            className="absolute bottom-0 transition-all duration-[2000ms] ease-in-out"
            style={{ 
              left: `${characterPosition}%`,
              transform: 'translateX(-50%)',
            }}
          >
            <div className="relative">
              {/* Character */}
              <div className={`text-6xl transition-transform duration-300 ${
                phase === 'walking' ? 'animate-bounce' : ''
              } ${
                phase === 'selected' && selectedValue ? 
                  selectedValue === 1 ? 'scale-90 opacity-70' :
                  selectedValue === 2 ? '' :
                  selectedValue === 3 ? 'scale-110' :
                  selectedValue === 4 ? 'scale-110 animate-bounce' :
                  'scale-125 animate-bounce' 
                : ''
              }`}>
                {phase === 'selected' && selectedValue ? 
                  selectedValue === 1 ? '🚶' :
                  selectedValue === 2 ? '😶' :
                  selectedValue === 3 ? '😊' :
                  selectedValue === 4 ? '👋' :
                  '🗣️'
                : phase === 'walking' ? '🏃' : '🧍'}
              </div>
              
              {/* Shadow */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-3 bg-black/20 rounded-full blur-sm" />
              
              {/* Label */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-700 shadow-md">
                  You
                </div>
              </div>
            </div>
          </div>

          {/* Stranger */}
          <div 
            className={`absolute bottom-0 right-[15%] transition-all duration-500 ${
              phase === 'walking' ? 'opacity-0 scale-50' : 'opacity-100 scale-100'
            }`}
          >
            <div className="relative">
              {/* Stranger Character */}
              <div className={`text-6xl ${
                phase === 'selected' && selectedValue && selectedValue >= 4 ? 'animate-bounce' : ''
              }`}>
                {phase === 'selected' && selectedValue && selectedValue >= 4 ? '😊' : '🧍'}
              </div>
              
              {/* Shadow */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-3 bg-black/20 rounded-full blur-sm" />
              
              {/* Label */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-700 shadow-md">
                  Stranger
                </div>
              </div>
              
              {/* Question mark (before encounter) */}
              {phase === 'encounter' && (
                <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 text-3xl animate-bounce">
                  ❓
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Encounter Alert */}
        {phase === 'encounter' && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-scale-in">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-4 rounded-2xl shadow-2xl border-4 border-white">
              <div className="text-2xl font-black tracking-wider">⚡ ENCOUNTER! ⚡</div>
            </div>
          </div>
        )}

        {/* Thought Bubble */}
        {phase === 'choices' && (
          <div className="absolute top-6 left-1/2 transform -translate-x-1/2 animate-scale-in">
            <div className="bg-white rounded-2xl px-6 py-3 shadow-xl border-2 border-gray-300 max-w-sm">
              <div className="text-sm font-semibold text-gray-600 mb-1">💭 {scenario.title}</div>
              <div className="text-xs text-gray-500">{scenario.description}</div>
            </div>
            {/* Bubble tail */}
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-white" />
          </div>
        )}
      </div>

      {/* Choices Section */}
      {phase === 'choices' || phase === 'selected' ? (
        <div className="space-y-3">
          <div className="flex items-center gap-2 px-1">
            <div className="text-sm font-bold text-gray-700 uppercase tracking-wide">
              What do you do?
            </div>
            <div className="flex-1 h-0.5 bg-gradient-to-r from-gray-300 to-transparent" />
          </div>

          {choices.map((choice, index) => {
            const isSelected = selectedValue === choice.value;
            const isHovered = hoveredCard === choice.value;

            return (
              <div
                key={choice.value}
                className="animate-slide-up"
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: 'backwards',
                }}
              >
                <button
                  onClick={() => onSelect(choice.value)}
                  onMouseEnter={() => setHoveredCard(choice.value)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`relative w-full p-4 rounded-xl border-2 transition-all duration-300 overflow-hidden ${
                    isSelected
                      ? `${choice.borderColor} ${choice.bgColor} shadow-xl scale-[1.02] ${choice.selectedGlow}`
                      : 'border-gray-200 bg-white hover:shadow-lg hover:scale-[1.01]'
                  }`}
                >
                  {/* Particles */}
                  {(isSelected || isHovered) && (
                    <>
                      <div className={`absolute top-2 left-4 w-2 h-2 ${choice.particleColor} rounded-full opacity-60 animate-bounce`} />
                      <div className={`absolute bottom-3 right-6 w-1.5 h-1.5 ${choice.particleColor} rounded-full opacity-40 animate-bounce`} style={{ animationDelay: '150ms' }} />
                    </>
                  )}

                  <div className="relative z-10 flex items-center gap-4">
                    {/* Level Badge */}
                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${choice.gradient} flex items-center justify-center text-white font-black text-lg shadow-md`}>
                      {choice.value}
                    </div>

                    {/* Emoji */}
                    <div className={`text-4xl transition-transform duration-300 ${
                      isSelected ? 'scale-125 animate-bounce' : isHovered ? 'scale-110' : ''
                    }`}>
                      {choice.emoji}
                    </div>

                    {/* Text */}
                    <div className="flex-1 text-left">
                      <div className={`text-base font-bold mb-1 ${
                        isSelected ? choice.textColor : 'text-gray-800'
                      }`}>
                        {choice.action}
                      </div>
                      <div className={`text-xs font-semibold px-2 py-0.5 rounded-full inline-block bg-gradient-to-r ${choice.gradient} text-white`}>
                        {choice.vibe}
                      </div>
                    </div>

                    {/* Checkmark */}
                    {isSelected && (
                      <div className={`flex-shrink-0 w-8 h-8 bg-gradient-to-br ${choice.gradient} rounded-full flex items-center justify-center shadow-lg animate-scale-in`}>
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </div>
                </button>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-8">
          <div className="inline-block bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
            <div className="text-sm font-semibold text-gray-600">
              {phase === 'walking' ? '🏃 Walking to training...' : '⚡ Someone ahead!'}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


