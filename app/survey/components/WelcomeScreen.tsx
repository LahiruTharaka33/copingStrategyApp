'use client';

interface WelcomeScreenProps {
  onStart: () => void;
}

export default function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 space-y-6">
        <div className="text-center">
          <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
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
            Personality Assessment
          </h1>
          <p className="text-gray-600 text-lg">
            Understanding your unique traits
          </p>
        </div>

        <div className="space-y-4 text-gray-700">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-blue-600 text-sm font-semibold">1</span>
            </div>
            <p className="text-sm">
              This assessment will help identify your personality traits
            </p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-blue-600 text-sm font-semibold">2</span>
            </div>
            <p className="text-sm">
              Answer honestly - there are no right or wrong answers
            </p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-blue-600 text-sm font-semibold">3</span>
            </div>
            <p className="text-sm">
              Takes approximately 5-10 minutes to complete
            </p>
          </div>
        </div>

        <button
          onClick={onStart}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-xl transition-colors duration-200 text-lg shadow-md hover:shadow-lg"
        >
          Start Assessment
        </button>

        <p className="text-xs text-gray-500 text-center">
          Your responses are confidential and will be used to personalize your experience
        </p>
      </div>
    </div>
  );
}






