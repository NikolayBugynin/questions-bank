import styles from './styles.module.css';

type Props = {
  onClick: () => void;
  disabled?: boolean;
};

export const QuizFinishButton = ({ onClick, disabled }: Props) => {
  return (
    <button
      type='button'
      onClick={onClick}
      disabled={disabled}
      className={styles.finishBtn}
    >
      Завершить
    </button>
  );
};
