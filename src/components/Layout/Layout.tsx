import { Outlet } from 'react-router-dom';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import styles from './styles.module.css';

export const Layout = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
