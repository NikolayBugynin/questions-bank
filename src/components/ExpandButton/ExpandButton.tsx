import expBtn from '../../assets/images/exp-btn-black.svg';
import styles from './styles.module.css';

interface Props {
  onClick: () => void;
  isOpen: boolean;
}

export const ExpandButton = ({ onClick, isOpen }: Props) => {
  return (
    <button onClick={onClick} className={styles.expandBtn}>
      <span className={`${styles.arrow} ${isOpen ? styles.arrowOpen : ''}`}>
        <img src={expBtn} alt='expBtn' />
      </span>
    </button>
  );
};
