'use client';

interface NavigationButtonsProps {
  onBack: () => void;
  onNext: () => void;
  canGoBack: boolean;
  canGoNext: boolean;
  isLastQuestion: boolean;
}

export default function NavigationButtons({
  onBack,
  onNext,
  canGoBack,
  canGoNext,
  isLastQuestion,
}: NavigationButtonsProps) {
  return (
    <div className="flex gap-3 pt-6">
      {canGoBack && (
        <button
          onClick={onBack}
          className="flex-1 py-4 px-6 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-colors"
        >
          Back
        </button>
      )}
      <button
        onClick={onNext}
        disabled={!canGoNext}
        className={`flex-1 py-4 px-6 font-semibold rounded-xl transition-colors ${
          canGoNext
            ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md'
            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
        }`}
      >
        {isLastQuestion ? 'Submit' : 'Next'}
      </button>
    </div>
  );
}






