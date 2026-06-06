import { useState } from 'react';
import { ExpandButton } from '../ExpandButton/ExpandButton';
import { MenuList } from '../MenuList/MenuList';
import styles from './styles.module.css';

export const HeaderMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  
  return (
    <nav className={styles.menu}>
      <div className={styles.menuBtnContainer}>
        <button className={styles.menuBtn}>Подготовка</button>
        <ExpandButton
          onClick={() => setIsMenuOpen((prev) => !prev)}
          isOpen={isMenuOpen}
        />
      </div>
      <MenuList isMenuOpen={isMenuOpen} />
    </nav>
  );
};
