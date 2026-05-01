import searchIcon from '../../assets/images/search-icon.svg';
import type { FiltersState } from '../../interfaces';
import styles from './styles.module.css';

interface Props {
  filters: FiltersState;
  handleSearchChange: (value: string) => void;
}

export const SearchInput = ({ handleSearchChange, filters }: Props) => {
  return (
    <div className={styles.search}>
      <img className={styles.icon} src={searchIcon} alt='' />
      <input
        type='text'
        className={styles.input}
        placeholder='Введите запрос…'
        value={filters.searchValueByTitle}
        onChange={(e) => handleSearchChange(e.target.value)}
      />
    </div>
  );
};
