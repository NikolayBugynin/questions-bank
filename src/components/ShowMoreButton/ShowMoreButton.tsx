import styles from './styles.module.css';

interface Props {
  onClick: () => void;
  children: React.ReactNode;
}

export const ShowMoreButton = ({ onClick, children }: Props) => {
  return (
    <button className={styles.expandButton} onClick={onClick}>
      {children}
    </button>
  );
};
