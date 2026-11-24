import arrowRightBtn from '../../../../assets/images/arrowRightBtn.png';
import styles from './styles.module.css';

type Props = {
  onClick: () => void;
  disabled?: boolean;
};

export const QuizStartButton = ({ onClick, disabled }: Props) => {
  return (
    <button
      type='button'
      onClick={onClick}
      disabled={disabled}
      className={styles.linkBtn}
    >
      Начать
      <img
        src={arrowRightBtn}
        aria-hidden='true'
        alt='кнопка начать со стрелкой вправо'
      />
    </button>
  );
};
