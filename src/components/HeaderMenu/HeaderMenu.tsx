import { useState } from 'react';
import { HeaderMenuToggle } from '../HeaderMenuButton/HeaderMenuToggle';
import { MenuList } from '../MenuList/MenuList';
import styles from './styles.module.css';

export const HeaderMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  return (
    <nav className={styles.menu}>
      <div className={styles.menuBtnContainer}>
        <HeaderMenuToggle
          onClick={() => setIsMenuOpen((prev) => !prev)}
          isOpen={isMenuOpen}
        />
      </div>
      <MenuList isMenuOpen={isMenuOpen} onClick={() => setIsMenuOpen(false)} />
    </nav>
  );
};
