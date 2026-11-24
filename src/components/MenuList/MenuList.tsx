import { NavLink } from 'react-router-dom';
import { MENU_ITEMS } from '../../constants/constants';
import styles from './styles.module.css';

interface Props {
  isMenuOpen: boolean;
  onClick: () => void;
}

export const MenuList = ({ isMenuOpen, onClick }: Props) => {
  return (
    <ul className={`${styles.list} ${isMenuOpen ? styles.listOpen : ''}`}>
      {MENU_ITEMS.map((item) => (
        <li key={item.to} className={styles.item}>
          <NavLink
            className={({ isActive }) =>
              `${styles.link} ${isActive ? styles.active : ''}`
            }
            to={item.to}
            onClick={onClick}
          >
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
