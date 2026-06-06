import prevBtn from '../../assets/images/prevBtn.svg';
import nextBtn from '../../assets/images/Vector.png';
import styles from './styles.module.css';

interface Props {
  onPrev: () => void;
  onNext: () => void;
}

export const NavButtons = ({ onPrev, onNext }: Props) => {
  return (
    <div className={styles.navigationButtons}>
      <div className={styles.buttonContainer}>
        <img className={styles.btnImg} src={prevBtn} alt='' />
        <button onClick={onPrev} className={styles.prevBtn}>
          Предыдущий
        </button>
      </div>
      <div className={styles.buttonContainer}>
        <button onClick={onNext} className={styles.nextBtn}>
          Следующий
        </button>
        <img className={styles.btnImg} src={nextBtn} alt='' />
      </div>
    </div>
  );
};
