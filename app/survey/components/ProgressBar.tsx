'use client';

interface ProgressBarProps {
  current: number;
  total: number;
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
  const percentage = Math.round((current / total) * 100);

  return (
    <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
      <div
        className="bg-blue-600 h-2 rounded-full transition-all duration-300 ease-out"
        style={{ width: `${percentage}%` }}
      />
      <div className="text-sm text-gray-600 mt-2 text-center">
        Question {current} of {total} ({percentage}%)
      </div>
    </div>
  );
}






