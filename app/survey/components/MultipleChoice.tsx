'use client';

import { QuestionOption } from '../types/survey';

interface MultipleChoiceProps {
  options: QuestionOption[];
  selectedValue: string | number | null;
  onSelect: (value: string | number) => void;
}

export default function MultipleChoice({ options, selectedValue, onSelect }: MultipleChoiceProps) {
  return (
    <div className="space-y-3">
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => onSelect(option.value)}
          className={`w-full p-4 rounded-xl border-2 transition-all duration-200 text-left ${
            selectedValue === option.value
              ? 'border-blue-600 bg-blue-50 text-blue-700 shadow-md'
              : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50'
          }`}
        >
          <div className="flex items-center gap-3">
            <div
              className={`w-5 h-5 rounded-full border-2 flex-shrink-0 ${
                selectedValue === option.value
                  ? 'border-blue-600'
                  : 'border-gray-300'
              }`}
            >
              {selectedValue === option.value && (
                <div className="w-full h-full rounded-full bg-blue-600 scale-[0.6]" />
              )}
            </div>
            <span className="font-medium">{option.label}</span>
          </div>
        </button>
      ))}
    </div>
  );
}






