import styles from './styles.module.css';

interface Props {
  pageNumber: number;
  isActive: boolean;
  onClick: () => void;
}

export const PaginationNumber = ({ pageNumber, isActive, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.pagesBtn} ${isActive ? styles.active : ''}`}
    >
      {pageNumber}
    </button>
  );
};
