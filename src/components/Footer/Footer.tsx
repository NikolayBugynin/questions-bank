import figmaIcon from '../../assets/images/figma_icon.svg';
import gitHubIcon from '../../assets/images/github_icon.svg';
import telegramIcon from '../../assets/images/telegram_icon.svg';
import tiktokIcon from '../../assets/images/tik_tok_icon.svg';
import logoText from '../../assets/images/yeahub-footer.svg';
import youtubeIcon from '../../assets/images/youtube_icon.svg';

import './Footer.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className='footer'>
      <div className='footer__content'>
        <div className='footer__logo-container'>
          <img className='footer__logo' src={logoText} alt='' />
        </div>
        <h3 className='footer__title'>
          Выбери, каким будет IT завтра, вместе с нами
        </h3>
        <p className='footer__description'>
          YeaHub — это полностью открытый проект, призванный объединить и
          улучшить IT-сферу. Наш исходный код доступен для просмотра на GitHub.
          Дизайн проекта также открыт для ознакомления в Figma.
        </p>
        <div className='footer__bottom'>
          <div className='footer__copyright'>
            <span className='footer__copyright-labe'>
              &copy; {currentYear} YeaHub
            </span>

            <a className='footer__docs-link' href=''>
              Документы
            </a>
          </div>

          <div className='footer__social-text-box'>
            <p className='footer__social-text'>
              Ищите нас и в других соцсетях @yeahub_it
            </p>
          </div>

          <div className='footer__social'>
            <nav className='social-links' aria-label='Социальные сети'>
              <a
                className='social-links__item'
                href='https://www.figma.com/community/file/1438482355619792777'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Figma'
              >
                <img className='social-links__icon' src={figmaIcon} alt='' />
              </a>
              <a
                className='social-links__item'
                href='https://t.me/yeahub'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Telegram'
              >
                <img className='social-links__icon' src={telegramIcon} alt='' />
              </a>
              <a
                className='social-links__item'
                href='https://www.youtube.com/@yeahub'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Youtube'
              >
                <img className='social-links__icon' src={youtubeIcon} alt='' />
              </a>
              <a
                className='social-links__item'
                href='https://www.tiktok.com/@yeahub_it'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Tiktok'
              >
                <img className='social-links__icon' src={tiktokIcon} alt='' />
              </a>
              <a
                className='social-links__item'
                href='https://github.com/YeaHubTeam/yeahub-platform'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='GitHub'
              >
                <img className='social-links__icon' src={gitHubIcon} alt='' />
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};
