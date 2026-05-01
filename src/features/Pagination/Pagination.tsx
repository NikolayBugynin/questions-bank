import { PaginationButton } from './PaginationButton';
import { PaginationNumbers } from './PaginationNumbers';
import styles from './styles.module.css';

interface Props {
  totalPages: number;
  onPageChange: (page: number) => void;
  currentPage: number;
}

export const Pagination = ({
  totalPages,
  onPageChange,
  currentPage,
}: Props) => {
  const handlePageChange = (newPage: number) => {
    onPageChange(newPage);
  };

  const goToNext = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  const goToPrev = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  return (
    <div className={styles.pagination}>
      <PaginationButton
        onClick={goToPrev}
        disabled={currentPage === 1}
        direction={'prev'}
      />
      <PaginationNumbers
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />

      <PaginationButton
        onClick={goToNext}
        disabled={currentPage === totalPages}
        direction={'next'}
      />
    </div>
  );
};
