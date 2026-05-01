import { useState } from 'react';
import burgerBtn from '../../assets/images/hamburger_btn.svg';
import styles from './styles.module.css';

export const HeaderAuth = () => {
  const [isAuthMenuOpen, setIsAuthMenuOpen] = useState(false);
  return (
    <div className={styles.auth}>
      <button
        onClick={() => setIsAuthMenuOpen((prev) => !prev)}
        className={styles.authBurger}
      >
        <img src={burgerBtn} alt='бургер-меню для входа или регистрации' />
      </button>
      <div
        className={`${styles.authContainer} ${isAuthMenuOpen ? styles.authContainerOpen : ''}`}
      >
        <button type='button' className={styles.loginBtn}>
          Вход
        </button>
        <button type='button' className={styles.registerBtn}>
          Регистрация
        </button>
      </div>
    </div>
  );
};
