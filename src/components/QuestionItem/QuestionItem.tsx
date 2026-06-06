import { useState } from 'react';
import type { Question } from '../../interfaces';
import { QuestionDetails } from '../QuestionDetails/QuestionDetails';
import { QuestionTitle } from '../QuestionTitle/QuestionTitle';

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
      <QuestionTitle
        question={question}
        toggleQuestion={toggleQuestion}
        isOpen={isOpen}
      />
      {isOpen && <QuestionDetails question={question} />}
    </>
  );
};
