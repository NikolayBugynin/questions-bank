import figmaIcon from '../../assets/images/figma_icon.svg';
import gitHubIcon from '../../assets/images/github_icon.svg';
import telegramIcon from '../../assets/images/telegram_icon.svg';
import tiktokIcon from '../../assets/images/tik_tok_icon.svg';
import youtubeIcon from '../../assets/images/youtube_icon.svg';
import styles from './styles.module.css';

export const FooterSocial = () => {
  return (
    <>
      <div className={styles.socialTextBox}>
        <p className={styles.socialText}>
          Ищите нас и в других соцсетях @yeahub_it
        </p>
      </div>
      <div className={styles.social}>
        <nav className={styles.socialLinks} aria-label='Социальные сети'>
          <a
            className={styles.socialLinksItem}
            href='https://www.figma.com/community/file/1438482355619792777'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Figma'
          >
            <img className='social-links__icon' src={figmaIcon} alt='' />
          </a>
          <a
            className={styles.socialLinksItem}
            href='https://t.me/yeahub'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Telegram'
          >
            <img className='social-links__icon' src={telegramIcon} alt='' />
          </a>
          <a
            className={styles.socialLinksItem}
            href='https://www.youtube.com/@yeahub'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Youtube'
          >
            <img className='social-links__icon' src={youtubeIcon} alt='' />
          </a>
          <a
            className={styles.socialLinksItem}
            href='https://www.tiktok.com/@yeahub_it'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Tiktok'
          >
            <img className='social-links__icon' src={tiktokIcon} alt='' />
          </a>
          <a
            className={styles.socialLinksItem}
            href='https://github.com/YeaHubTeam/yeahub-platform'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='GitHub'
          >
            <img className='social-links__icon' src={gitHubIcon} alt='' />
          </a>
        </nav>
      </div>
    </>
  );
};
