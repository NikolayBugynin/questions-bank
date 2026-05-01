import { useState } from 'react';
import type { Question } from '../../interfaces';
import { QuestionDetails } from '../QuestionDetails/QuestionDetails';
import { QuestionHeader } from '../QuestionHeader/QuestionHeader';

interface Props {
  question: Question;
}

export const QuestionItem = ({ question }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleQuestion = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      <QuestionHeader
        question={question}
        toggleQuestion={toggleQuestion}
        isOpen={isOpen}
      />
      {isOpen && <QuestionDetails question={question} />}
    </>
  );
};
