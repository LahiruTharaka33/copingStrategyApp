'use client';

import { useState, useEffect } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import QuestionCard from './components/QuestionCard';
import ProgressBar from './components/ProgressBar';
import NavigationButtons from './components/NavigationButtons';
import ResultsScreen from './components/ResultsScreen';
import { surveyQuestions } from './data/questions';
import { SurveyResponse, PersonalityScores } from './types/survey';

export default function SurveyPage() {
  const [hasStarted, setHasStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [responses, setResponses] = useState<SurveyResponse[]>([]);
  const [isComplete, setIsComplete] = useState(false);

  // Load saved progress from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('surveyProgress');
    if (saved) {
      const data = JSON.parse(saved);
      setResponses(data.responses || []);
      setCurrentIndex(data.currentIndex || 0);
      setHasStarted(data.hasStarted || false);
    }
  }, []);

  // Save progress to localStorage
  useEffect(() => {
    if (hasStarted) {
      localStorage.setItem('surveyProgress', JSON.stringify({
        hasStarted,
        currentIndex,
        responses,
      }));
    }
  }, [hasStarted, currentIndex, responses]);

  const currentQuestion = surveyQuestions[currentIndex];
  const currentResponse = responses.find(r => r.questionId === currentQuestion?.id);

  const handleStart = () => {
    setHasStarted(true);
  };

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
    if (currentIndex < surveyQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      // Last question - navigate to anxiety assessment
      window.location.href = '/survey/anxiety';
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const calculateScores = (): PersonalityScores => {
    // This is a placeholder - you'll implement actual scoring logic
    // based on your research methodology
    const scores: PersonalityScores = {
      openness: 0,
      conscientiousness: 0,
      extraversion: 0,
      agreeableness: 0,
      neuroticism: 0,
    };

    // Calculate average scores for each dimension
    const dimensions = ['openness', 'conscientiousness', 'extraversion', 'agreeableness', 'neuroticism'] as const;
    
    dimensions.forEach(dimension => {
      const dimensionQuestions = surveyQuestions.filter(q => q.dimension === dimension);
      const dimensionResponses = responses.filter(r => 
        dimensionQuestions.some(q => q.id === r.questionId)
      );
      
      if (dimensionResponses.length > 0) {
        const sum = dimensionResponses.reduce((acc, r) => acc + (r.answer as number), 0);
        scores[dimension] = sum / dimensionResponses.length;
      }
    });

    return scores;
  };

  const handleRestart = () => {
    setHasStarted(false);
    setCurrentIndex(0);
    setResponses([]);
    setIsComplete(false);
    localStorage.removeItem('surveyProgress');
  };

  const handleContinue = () => {
    // Navigate to anxiety assessment or coping strategies
    console.log('Continue to next phase');
    // You'll implement navigation to the next phase here
  };

  // Show welcome screen
  if (!hasStarted) {
    return <WelcomeScreen onStart={handleStart} />;
  }

  // Show results screen
  if (isComplete) {
    const scores = calculateScores();
    return <ResultsScreen scores={scores} onRestart={handleRestart} onContinue={handleContinue} />;
  }

  // Show survey questions
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <ProgressBar
          current={currentIndex + 1}
          total={surveyQuestions.length}
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
            isLastQuestion={currentIndex === surveyQuestions.length - 1}
          />
        </div>
      </div>
    </div>
  );
}






