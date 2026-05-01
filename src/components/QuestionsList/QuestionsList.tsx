import { Pagination } from '../../features/Pagination/Pagination';
import type { Question, Specialization } from '../../interfaces';
import { QuestionItem } from '../QuestionItem/QuestionItem';
import { Skeleton } from '../Skeleton/Skeleton';
import { TitleContainer } from '../TitleContainer/TitleContainer';
import styles from './styles.module.css';

interface Props {
  selectedSpecialization: Specialization | null;
  setIsOpenFilterBar: React.Dispatch<React.SetStateAction<boolean>>;
  filteredQuestions: Question[] | undefined;
  totalPages: number;
  onPageChange: (page: number) => void;
  currentPage: number;
  isLoading: boolean;
}

export const QuestionsList = ({
  selectedSpecialization,
  setIsOpenFilterBar,
  filteredQuestions,
  totalPages,
  onPageChange,
  currentPage,
  isLoading,
}: Props) => {
  return (
    <div className={styles.content}>
      <TitleContainer
        setIsOpenFilterBar={setIsOpenFilterBar}
        selectedSpecialization={selectedSpecialization}
      />
      <div className={styles.list}>
        {isLoading ? (
          <Skeleton />
        ) : (
          filteredQuestions?.map((question) => {
            return <QuestionItem key={question.id} question={question} />;
          })
        )}
      </div>
      <Pagination
        totalPages={totalPages}
        onPageChange={onPageChange}
        currentPage={currentPage}
      />
    </div>
  );
};
