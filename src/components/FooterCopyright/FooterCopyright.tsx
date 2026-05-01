import styles from './styles.module.css';

export const FooterCopyright = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className={styles.copyright}>
      <span className='footer__copyright-label'>
        &copy; {currentYear} YeaHub
      </span>

      <a className={styles.docsLink} href=''>
        Документы
      </a>
    </div>
  );
};


