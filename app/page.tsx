import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 space-y-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Athlete Mental Support
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Personalized anxiety management for competitive athletes
          </p>
        </div>

        <div className="space-y-4">
          <Link
            href="/survey"
            className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-xl transition-colors duration-200 text-center shadow-md hover:shadow-lg"
          >
            Start Personality Assessment
          </Link>

          <div className="text-center text-sm text-gray-500">
            <p>Complete the assessment to receive</p>
            <p>personalized coping strategies</p>
          </div>
        </div>

        <div className="border-t pt-6 space-y-2 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Evidence-based approach</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>5-10 minute assessment</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Personalized strategies</span>
          </div>
        </div>
      </div>
    </div>
  );
}
