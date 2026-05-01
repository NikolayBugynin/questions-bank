import prevBtn from '../../assets/images/left-btn.svg';
import nextBtn from '../../assets/images/right-btn.svg';
import styles from './styles.module.css';

interface Props {
  onClick: () => void;
  disabled: boolean;
  direction: 'prev' | 'next';
}

export const PaginationButton = ({ onClick, disabled, direction }: Props) => {
  const icon = direction === 'prev' ? prevBtn : nextBtn;
  return (
    <button className={styles.button} onClick={onClick} disabled={disabled}>
      <img
        src={icon}
        alt={`кнопка ${direction === 'prev' ? 'назад' : 'вперед'}`}
      />
    </button>
  );
};
