import styles from './styles.module.css';

interface Props {
  title: string;
  children: React.ReactNode;
}

export const FiltersSection = ({ title, children }: Props) => {
  return (
    <div className={styles.items}>
      <h4 className={styles.title}>{title}</h4>
      {children}
    </div>
  );
};
