import { FooterCopyright } from '../FooterCopyright/FooterCopyright';
import { FooterSocial } from '../FooterSocial/FooterSocial';
import styles from './styles.module.css';

export const FooterBottom = () => {
  return (
    <div className={styles.bottom}>
      <FooterCopyright />
      <FooterSocial />
    </div>
  );
};
