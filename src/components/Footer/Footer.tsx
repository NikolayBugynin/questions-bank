import { FooterBottom } from '../FooterBottom/FooterBottom';
import { FooterInfo } from '../FooterInfo/FooterInfo';
import { FooterLogo } from '../FooterLogo/FooterLogo';
import styles from './styles.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <FooterLogo />
      <FooterInfo />
      <FooterBottom />
    </footer>
  );
};
