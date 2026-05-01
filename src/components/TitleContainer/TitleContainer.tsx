import filterBtn from '../../assets/images/filter-btn.svg';
import type { Specialization } from '../../interfaces';
import styles from './styles.module.css';

interface Props {
  selectedSpecialization: Specialization | null;
  setIsOpenFilterBar: React.Dispatch<React.SetStateAction<boolean>>;
}

export const TitleContainer = ({
  setIsOpenFilterBar,
  selectedSpecialization,
}: Props) => {
  return (
    <div className={styles.titleContainer}>
      <h2 className={styles.title}>Вопросы {selectedSpecialization?.title}</h2>
      <button
        onClick={() => setIsOpenFilterBar(true)}
        className={styles.filterBtn}
      >
        <img src={filterBtn} alt='кнопка для открытия фильтра вопросов' />
      </button>
    </div>
  );
};
