'use client';

import { QuestionOption } from '../types/survey';

interface LikertScaleProps {
  options: QuestionOption[];
  selectedValue: string | number | null;
  onSelect: (value: string | number) => void;
}

export default function LikertScale({ options, selectedValue, onSelect }: LikertScaleProps) {
  return (
    <div className="space-y-3">
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => onSelect(option.value)}
          className={`w-full p-4 rounded-xl border-2 transition-all duration-200 text-left font-medium ${
            selectedValue === option.value
              ? 'border-blue-600 bg-blue-50 text-blue-700 shadow-md'
              : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50'
          }`}
        >
          <div className="flex items-center justify-between">
            <span>{option.label}</span>
            <div
              className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                selectedValue === option.value
                  ? 'border-blue-600 bg-blue-600'
                  : 'border-gray-300'
              }`}
            >
              {selectedValue === option.value && (
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
              )}
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}






