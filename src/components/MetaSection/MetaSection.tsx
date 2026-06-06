import styles from './styles.module.css';

interface Props {
  children: React.ReactNode;
  title: string;
}

export const MetaSection = ({ children, title }: Props) => {
  return (
    <div className={styles.section}>
      <h4 className={styles.title}>{title}:</h4>
      {children}
    </div>
  );
};
