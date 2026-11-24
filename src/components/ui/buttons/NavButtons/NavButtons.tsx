import type { ReactNode } from 'react';
import nextBtn from '../../../../assets/images/nextBtn.png';
import prevBtn from '../../../../assets/images/prevBtn.svg';
import styles from './styles.module.css';

interface Props {
  onPrev: () => void;
  onNext: () => void;
  disablePrev?: boolean;
  disableNext?: boolean;
  className?: string;
  prevLabel?: ReactNode;
  nextLabel?: ReactNode;
}

export const NavButtons = ({
  onPrev,
  onNext,
  disablePrev,
  disableNext,
  className,
  prevLabel = 'Предыдущий',
  nextLabel = 'Следующий',
}: Props) => {
  return (
    <div className={`${styles.navigationButtons} ${className ?? ''}`}>
      <div className={styles.buttonContainer}>
        <img
          className={styles.btnImg}
          src={prevBtn}
          alt='кнопка назад'
          aria-hidden='true'
        />
        <button type='button' onClick={onPrev} disabled={disablePrev}>
          {prevLabel}
        </button>
      </div>
      <div className={styles.buttonContainer}>
        <button type='button' onClick={onNext} disabled={disableNext}>
          {nextLabel}
        </button>
        <img
          className={styles.btnImg}
          src={nextBtn}
          alt='кнопка вперед'
          aria-hidden='true'
        />
      </div>
    </div>
  );
};
