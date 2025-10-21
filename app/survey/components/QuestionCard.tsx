'use client';

import { Question } from '../types/survey';
import StatementCards from './StatementCards';
import ScenarioCards from './ScenarioCards';
import RPGEncounter from './RPGEncounter';
import LikertScale from './LikertScale';
import MultipleChoice from './MultipleChoice';
import TextInput from './TextInput';
import { likertOptions5, likertOptions7, yesNoOptions } from '../data/questions';

interface QuestionCardProps {
  question: Question;
  answer: string | number | null;
  onAnswer: (answer: string | number) => void;
}

export default function QuestionCard({ question, answer, onAnswer }: QuestionCardProps) {
  const renderQuestionInput = () => {
    switch (question.type) {
      case 'statement-cards':
        return (
          <StatementCards
            selectedValue={answer as number || null}
            onSelect={onAnswer}
          />
        );
      
      case 'scenario-cards':
        return (
          <ScenarioCards
            selectedValue={answer as number || null}
            onSelect={onAnswer}
            scenario={question.scenario || { title: 'SCENE', description: 'Choose your response' }}
          />
        );
      
      case 'rpg-encounter':
        return (
          <RPGEncounter
            selectedValue={answer as number || null}
            onSelect={onAnswer}
            scenario={question.scenario || { title: 'Think fast!', description: 'What do you do?' }}
          />
        );
      
      case 'likert-5':
        return (
          <LikertScale
            options={question.options || likertOptions5}
            selectedValue={answer}
            onSelect={onAnswer}
          />
        );
      
      case 'likert-7':
        return (
          <LikertScale
            options={question.options || likertOptions7}
            selectedValue={answer}
            onSelect={onAnswer}
          />
        );
      
      case 'multiple-choice':
        return (
          <MultipleChoice
            options={question.options || []}
            selectedValue={answer}
            onSelect={onAnswer}
          />
        );
      
      case 'yes-no':
        return (
          <MultipleChoice
            options={question.options || yesNoOptions}
            selectedValue={answer}
            onSelect={onAnswer}
          />
        );
      
      case 'text-input':
        return (
          <TextInput
            value={answer as string || ''}
            onChange={onAnswer}
            placeholder="Type your answer..."
          />
        );
      
      case 'text-area':
        return (
          <TextInput
            value={answer as string || ''}
            onChange={onAnswer}
            placeholder="Type your answer..."
            multiline
          />
        );
      
      case 'slider':
        return (
          <div className="space-y-4">
            <input
              type="range"
              min={question.min || 0}
              max={question.max || 100}
              value={answer as number || question.min || 0}
              onChange={(e) => onAnswer(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
            <div className="text-center text-2xl font-bold text-blue-600">
              {answer || question.min || 0}
            </div>
          </div>
        );
      
      default:
        return <div>Question type not supported</div>;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          {question.text}
        </h2>
        {question.subtitle && (
          <p className="text-sm text-gray-600">{question.subtitle}</p>
        )}
      </div>
      {renderQuestionInput()}
    </div>
  );
}





