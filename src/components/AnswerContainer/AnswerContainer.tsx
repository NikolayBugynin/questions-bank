import styles from './styles.module.css';

interface Props {
  title: string;
  children: React.ReactNode;
}

export const AnswerContainer = ({ title, children }: Props) => {
  return (
    <div className={styles.answer}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.text}>{children}</div>
    </div>
  );
};
