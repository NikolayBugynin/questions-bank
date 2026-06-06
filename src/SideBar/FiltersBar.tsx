import closeBtn from '../../assets/images/close_btn.svg';
import type { FiltersState } from '../../interfaces';
import { ComplexityFilters } from '../ComplexityFilters/ComplexityFilters';
import { RateFilters } from '../RateFilters/RateFilters';
import { SearchInput } from '../SearchInput/SearchInput';
import { SkillFilters } from '../SkillFilters/SkillFilters';
import { SpecializationFilters } from '../SpecializationFilters/SpecializationFilters';
import { StatusFilters } from '../StatusFilters/StatusFilters';
import styles from './styles.module.css';

interface Props {
  filters: FiltersState;
  updateFilters: (updates: Partial<FiltersState>) => void;
  isOpenFilterBar: boolean;
  setIsOpenFilterBar: (value: boolean) => void;
}
export const FiltersBar = ({
  filters,
  updateFilters,
  isOpenFilterBar,
  setIsOpenFilterBar,
}: Props) => {
  const handleSearchChange = (value: string) => {
    updateFilters({ searchValueByTitle: value });
  };

  return (
    <div
      className={`${styles.filtersBar} ${isOpenFilterBar ? styles.open : ''}`}
    >
      <button
        onClick={() => setIsOpenFilterBar(false)}
        className={styles.closeBtn}
      >
        <img src={closeBtn} alt='кнопка закрытия фильтров' />
      </button>
      <div className={styles.content}>
        <SearchInput
          filters={filters}
          handleSearchChange={handleSearchChange}
        />

        <SpecializationFilters
          filters={filters}
          updateFilters={updateFilters}
        />
        <SkillFilters filters={filters} updateFilters={updateFilters} />
        <ComplexityFilters filters={filters} updateFilters={updateFilters} />
        <RateFilters filters={filters} updateFilters={updateFilters} />
        <StatusFilters />
      </div>
    </div>
  );
};
