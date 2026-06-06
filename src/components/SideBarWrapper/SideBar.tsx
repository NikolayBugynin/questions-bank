import styles from './styles.module.css';

interface Props {
  children: React.ReactNode;
  isOpen?: boolean;
}

export const SideBarWrapper = ({ children, isOpen }: Props) => {
  return (
    <aside className={`${styles.sideBar} ${isOpen ? styles.open : ''}`}>
      {children}
    </aside>
  );
};
