import { useEffect, useState } from 'react';
import goToPrevBtn from '../../assets/images/left-btn.svg';
import goToNextBtn from '../../assets/images/right-btn.svg';
import './Pagination.css';

interface Props {
  totalPages: number;
  onPageChange: (page: number) => void;
  initialPage: number;
}

export const Pagination = ({
  totalPages,
  onPageChange,
  initialPage,
}: Props) => {
  const [currentPage, setCurrentPage] = useState(initialPage);

  useEffect(() => {
    setCurrentPage(initialPage);
  }, [initialPage]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
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
    <div className='pagination__container'>
      <button
        className='pagination__button pagination__button--prev'
        onClick={goToPrev}
        disabled={currentPage === 1}
      >
        <img src={goToPrevBtn} alt='кнопка назад' />
      </button>
      <div className='pagination__container-numbers'>
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
              <button
                key={index}
                onClick={() => onPageChange(pageNumber)}
                className={`pagination__pagesBtn ${currentPage === pageNumber ? 'active' : ''}`}
              >
                {pageNumber}
              </button>
            );
          }

          if (isEllipsis) {
            return (
              <span key={index} className='pagination__ellipsis'>
                ...
              </span>
            );
          }

          return null;
        })}
      </div>
      <button
        className='pagination__button pagination__button--next'
        onClick={goToNext}
        disabled={currentPage === totalPages}
      >
        <img src={goToNextBtn} alt='кнопка вперед' />
      </button>
    </div>
  );
};
