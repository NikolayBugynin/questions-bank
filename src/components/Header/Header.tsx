import { useState } from 'react';
import expBtn from '../../assets/images/exp-btn-black.svg';
import burgerBtn from '../../assets/images/hamburger_btn.svg';
import logoImg from '../../assets/images/logo.svg';
import logoText from '../../assets/images/yeahub-header.svg';
import './Header.css';

// interface ComponentNameProps {}

export const Header = () => {
  const [isLinkMenuOpen, setIsLinkMenuOpen] = useState(false);

  const [isAuthMenuOpen, setIsAuthMenuOpen] = useState(false);

  return (
    <div className='header'>
      <div className='header__content'>
        <div className='header__container'>
          <a href='https://yeahub.ru' className='header__logo-link'>
            <div className='header__logo-container'>
              <img
                className='header__logo'
                src={logoImg}
                alt='лого Ехаб, круглый значок белого дерева на фиолетовом фоне'
              />
              <img
                className='header__logo-text'
                src={logoText}
                alt='лого Ехаб английскими буквами'
              />
            </div>
          </a>

          <button className='header__menu-btn'></button>
          <nav className='header__menu'>
            <div className='header__menu-btn-container'>
              <button className='header__menu-btn'>Подготовка</button>
              <button
                onClick={() => setIsLinkMenuOpen((prev) => !prev)}
                className='expand-btn'
              >
                <span
                  className={`arrow ${isLinkMenuOpen ? 'arrow--open' : ''}`}
                >
                  <img src={expBtn} alt='expBtn' />
                </span>
              </button>
            </div>

            <ul
              className={`header__links-list ${isLinkMenuOpen ? 'open' : ''}`}
            >
              <li className='header__links-list-item'>
                <a href='#' className='header__menu-link'>
                  База вопросов
                </a>
              </li>
              <li className='header__links-list-item'>
                <a href='#' className='header__menu-link'>
                  Тренажёр
                </a>
              </li>
              <li className='header__links-list-item'>
                <a href='#' className='header__menu-link'>
                  Материалы
                </a>
              </li>
              <li className='header__links-list-item'>
                <a href='#' className='header__menu-link'>
                  Навыки (hh)
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className='header__auth'>
          <button
            onClick={() => setIsAuthMenuOpen((prev) => !prev)}
            className='header__auth-burger'
          >
            <img src={burgerBtn} alt='Бургер меню для входа или регистрации' />
          </button>
          <div
            className={`header__auth-btn-container ${isAuthMenuOpen ? 'open' : ''}`}
          >
            <button type='button' className='header__login-btn auth__button'>
              Вход
            </button>
            <button type='button' className='header__register-btn auth__button'>
              Регистрация
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
