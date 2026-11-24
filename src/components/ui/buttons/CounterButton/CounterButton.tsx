import styles from './styles.module.css';

type Props = {
  dec: () => void;
  inc: () => void;
  currentCount: number;
  maxCount: number;
};

export const CounterButton = ({ dec, inc, currentCount, maxCount }: Props) => {
  return (
    <div className={styles.counter}>
      <button
        type='button'
        className={styles.toggleBtn}
        onClick={dec}
        disabled={currentCount <= 1}
        aria-label='Уменьшить количество'
      >
        <svg
          className={styles.icon}
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
          fill='none'
          aria-hidden='true'
        >
          <path
            fill='currentColor'
            d='M17.5 10a.624.624 0 0 1-.625.625H3.125a.625.625 0 1 1 0-1.25h13.75A.625.625 0 0 1 17.5 10'
          />
        </svg>
      </button>
      <span className={styles.countValue}>{currentCount}</span>
      <button
        type='button'
        onClick={inc}
        disabled={currentCount >= maxCount}
        aria-label='Увеличить количество'
        className={styles.toggleBtn}
      >
        <svg
          className={styles.icon}
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
          fill='none'
          aria-hidden='true'
        >
          <path
            fill='currentColor'
            d='M17.5 10a.624.624 0 0 1-.625.625h-6.25v6.25a.624.624 0 1 1-1.25 0v-6.25h-6.25a.625.625 0 1 1 0-1.25h6.25v-6.25a.625.625 0 0 1 1.25 0v6.25h6.25A.625.625 0 0 1 17.5 10'
          />
        </svg>
      </button>
    </div>
  );
};
