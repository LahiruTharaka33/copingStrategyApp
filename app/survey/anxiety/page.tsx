'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import QuestionCard from '../components/QuestionCard';
import ProgressBar from '../components/ProgressBar';
import NavigationButtons from '../components/NavigationButtons';
import { anxietyQuestions } from '../data/anxietyQuestions';
import { SurveyResponse } from '../types/survey';

export default function AnxietyAssessmentPage() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [responses, setResponses] = useState<SurveyResponse[]>([]);
  const [showTransition, setShowTransition] = useState(true);

  const currentQuestion = anxietyQuestions[currentIndex];
  const currentResponse = responses.find(r => r.questionId === currentQuestion?.id);

  // Show transition screen for 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTransition(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Load anxiety responses from localStorage
    const saved = localStorage.getItem('anxietyResponses');
    if (saved) {
      const data = JSON.parse(saved);
      setResponses(data.responses || []);
      setCurrentIndex(data.currentIndex || 0);
    }
  }, []);

  useEffect(() => {
    // Save progress
    if (!showTransition) {
      localStorage.setItem('anxietyResponses', JSON.stringify({
        currentIndex,
        responses,
      }));
    }
  }, [currentIndex, responses, showTransition]);

  const handleAnswer = (answer: string | number) => {
    const newResponse: SurveyResponse = {
      questionId: currentQuestion.id,
      answer,
      timestamp: Date.now(),
    };

    setResponses(prev => {
      const filtered = prev.filter(r => r.questionId !== currentQuestion.id);
      return [...filtered, newResponse];
    });
  };

  const handleNext = () => {
    if (currentIndex < anxietyQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      // Navigate to results
      router.push('/survey/results');
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  if (showTransition) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-8 text-center animate-scale-in">
          <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
            <span className="text-4xl">🧠</span>
          </div>
          <h1 className="text-3xl font-black text-gray-900 mb-4">
            Great Job!
          </h1>
          <p className="text-gray-600 mb-6 text-lg">
            Personality assessment complete!
          </p>
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 mb-6">
            <p className="text-gray-700 font-semibold mb-2">
              Next Step: Anxiety Assessment
            </p>
            <p className="text-sm text-gray-600">
              Let's understand your anxiety patterns to recommend the best coping strategies for you.
            </p>
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
            <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
            <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1.5 rounded-full text-xs font-semibold mb-3 shadow-md">
            Part 2: Anxiety Assessment
          </div>
          <h1 className="text-2xl font-bold text-gray-900">
            Understanding Your Anxiety
          </h1>
        </div>

        <ProgressBar
          current={currentIndex + 1}
          total={anxietyQuestions.length}
        />
        
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <QuestionCard
            question={currentQuestion}
            answer={currentResponse?.answer || null}
            onAnswer={handleAnswer}
          />
          
          <NavigationButtons
            onBack={handleBack}
            onNext={handleNext}
            canGoBack={currentIndex > 0}
            canGoNext={!!currentResponse}
            isLastQuestion={currentIndex === anxietyQuestions.length - 1}
          />
        </div>
      </div>
    </div>
  );
}

