import { HeaderAuth } from '../HeaderAuth/HeaderAuth';
import { HeaderLogo } from '../HeaderLogo/HeaderLogo';
import { HeaderMenu } from '../HeaderMenu/HeaderMenu';
import styles from './styles.module.css';

export const  Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <div className={styles.left}>
          <HeaderLogo />
          <HeaderMenu />
        </div>
        <HeaderAuth />
      </div>
    </header>
  );
};
