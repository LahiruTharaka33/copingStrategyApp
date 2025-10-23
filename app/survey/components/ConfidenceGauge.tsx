'use client';

import { useState } from 'react';

interface ConfidenceGaugeProps {
  selectedValue: number | null;
  onSelect: (value: number) => void;
  min?: number;
  max?: number;
}

export default function ConfidenceGauge({ selectedValue, onSelect, min = 0, max = 100 }: ConfidenceGaugeProps) {
  const [isDragging, setIsDragging] = useState(false);
  
  const value = selectedValue !== null ? selectedValue : 50;
  const percentage = ((value - min) / (max - min)) * 100;

  const getConfidenceLevel = (val: number) => {
    if (val < 20) return { text: 'Very Low', emoji: '😟', color: 'text-red-600', bg: 'bg-red-500' };
    if (val < 40) return { text: 'Low', emoji: '😐', color: 'text-orange-600', bg: 'bg-orange-500' };
    if (val < 60) return { text: 'Moderate', emoji: '🙂', color: 'text-yellow-600', bg: 'bg-yellow-500' };
    if (val < 80) return { text: 'High', emoji: '😊', color: 'text-green-600', bg: 'bg-green-500' };
    return { text: 'Very High', emoji: '🔥', color: 'text-blue-600', bg: 'bg-blue-500' };
  };

  const level = getConfidenceLevel(value);

  return (
    <div className="space-y-6">
      {/* Confidence Meter */}
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8">
        <div className="text-center mb-6">
          <div className={`text-7xl mb-3 transition-all duration-300 ${
            isDragging ? 'scale-110' : ''
          }`}>
            {level.emoji}
          </div>
          <div className={`text-2xl font-black ${level.color} mb-1`}>
            {value}%
          </div>
          <div className="text-sm font-semibold text-gray-600">
            {level.text} Confidence
          </div>
        </div>

        {/* Slider */}
        <div className="relative">
          {/* Track */}
          <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
            <div
              className={`h-full ${level.bg} transition-all duration-200`}
              style={{ width: `${percentage}%` }}
            />
          </div>

          {/* Slider Input */}
          <input
            type="range"
            min={min}
            max={max}
            value={value}
            onChange={(e) => {
              onSelect(parseInt(e.target.value));
            }}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onTouchStart={() => setIsDragging(true)}
            onTouchEnd={() => setIsDragging(false)}
            className="absolute top-0 left-0 w-full h-4 opacity-0 cursor-pointer"
          />
          
          {/* Thumb */}
          <div
            className={`absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-8 h-8 ${level.bg} rounded-full border-4 border-white shadow-lg transition-all duration-200 ${
              isDragging ? 'scale-125 shadow-xl' : ''
            }`}
            style={{ left: `${percentage}%` }}
          />
        </div>

        {/* Labels */}
        <div className="flex justify-between text-xs text-gray-500 mt-2 px-1">
          <span>0% - Not Confident</span>
          <span>100% - Fully Confident</span>
        </div>
      </div>

      {/* Quick Select Buttons */}
      <div className="grid grid-cols-5 gap-2">
        {[0, 25, 50, 75, 100].map((val) => (
          <button
            key={val}
            onClick={() => onSelect(val)}
            className={`py-2 px-3 rounded-lg text-sm font-semibold transition-all ${
              value === val
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md scale-105'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {val}%
          </button>
        ))}
      </div>
    </div>
  );
}

