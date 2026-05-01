import { PaginationNumber } from './PaginationNumber';
import styles from './styles.module.css';
interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const PaginationNumbers = ({
  currentPage,
  totalPages,
  onPageChange,
}: Props) => {
  return (
    <div className={styles.paginationNumbers}>
      {[...Array(totalPages)].map((_, index) => {
        const pageNumber = index + 1; // преобразуем индекс в номер страницы

        // Показываем всегда первую, последнюю и страницы вокруг текущей
        const isFirst = index === 0;
        const isLast = index === totalPages - 1;

        // Для остальных страниц показываем стандартное количество

        const isAroundCurrent = Math.abs(pageNumber - currentPage) <= 2;

        const isEllipsis = index === 1 || index === totalPages - 2;

        if (isFirst || isLast || isAroundCurrent) {
          return (
            <PaginationNumber
              key={index}
              pageNumber={pageNumber}
              onClick={() => onPageChange(pageNumber)}
              isActive={currentPage === pageNumber}
            />
          );
        }

        if (isEllipsis) {
          return (
            <span key={index} className={styles.ellipsis}>
              ...
            </span>
          );
        }

        return null;
      })}
    </div>
  );
};
