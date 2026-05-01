import styles from './styles.module.css';


interface Props {
  children: React.ReactNode;
}

export const FiltersList = ({ children }: Props) => {
  return <ul className={styles.list}>{children}</ul>;
};
