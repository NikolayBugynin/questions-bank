import styles from './styles.module.css';

interface Props {
  active?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

export const FilterButton = ({ active, onClick, children }: Props) => {
  return (
    <button
      className={`${styles.item} ${active ? styles.active : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
