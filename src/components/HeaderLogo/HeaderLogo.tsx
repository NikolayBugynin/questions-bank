import logoImg from '../../assets/images/logo.svg';
import logoText from '../../assets/images/yeahub-header.svg';
import styles from './styles.module.css';

export const HeaderLogo = () => {
  return (
    <div className={styles.logoContainer}>
      <a href='https://yeahub.ru' className={styles.logoLink}></a>
      <img
        className={styles.logo}
        src={logoImg}
        alt='лого Ехаб, круглый значок белого дерева на фиолетовом фоне'
      />
      <img
        className={styles.logoText}
        src={logoText}
        alt='лого Ехаб английскими буквами'
      />
    </div>
  );
};
